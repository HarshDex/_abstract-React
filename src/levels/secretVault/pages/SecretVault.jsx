import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IS_ANSWER_CORRECT_SECRET } from '../../../redux/slice/SecretVaultSlice';
import LoadingScreen from '../../../Loading/LoadingScreen'
import './SecretVault.css';
const SecretVault = () => {
  const story = useSelector((state) => state.Secret.secretVaultDataStory);
  const question = useSelector((state) => state.Secret.secretVaultDataQuestion);
  const [storyScreen, setStoryScreen] = useState(true);
  const [buttonFlag, setButtonFlag] = useState(false);
  const [answer, setAnswer] = useState('');
  const [isAttempted, setIsAttempted] = useState(false);
  const isCorrect = useSelector((state) => state.Secret.isCorrect);
  const [loading,setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const timerId = setTimeout(() => {
      setButtonFlag(true);
    }, 100);
    return () => clearTimeout(timerId);
  }, []);
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false);
    },2000)
  },[]);

  const onContinueQuestion = () => {
    setStoryScreen(false);
  };

  const checkAnswer = () => {
    console.log("Checking answer:", answer);
    dispatch(IS_ANSWER_CORRECT_SECRET(answer));
    setIsAttempted(true);
  };

  const onAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const onHomePage = () => {
    setIsAttempted(false);
    dispatch(IS_ANSWER_CORRECT_SECRET(false));
    setAnswer('');
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      checkAnswer();
    }
  };
  return (
    <>{
      loading
      ?(<LoadingScreen dataline = {''}/>)
      :(
        <div className="secret-vault-container">
          {storyScreen ? (
            <div className="secret-story-container">
              <div className="secret-vault-heading">
                <p>Secret Vault</p>
              </div>
              {story}
              {buttonFlag && (
                <button onClick={onContinueQuestion}>Continue</button>
              )}
            </div>
          ) : (
            <div className="secret-vault-question">
              <div className="secret-vault-heading">
                <p>Secret Vault</p>
              </div>
              <div className="secret-vault-image">
                <img src="https://w0.peakpx.com/wallpaper/827/971/HD-wallpaper-vault-door-security-3d-vault-background-desktop-door.jpg" alt="" />
              </div>
              <div className="secret-vault-ques">
                <h6>{question}</h6>
                <div className="secretVaultMainQues">
                What's another way attackers could exploit session tokens stored in cookies?
                </div>
                <p>
                <h5>Feeling a bit stuck? Check out{' '}</h5>
                <Link to="/secretVault/flow-of-online-services">
                  <button className='authentication-flow'>Authentication flow of online services</button>
                </Link>
                </p>
                  <div className="secret-vault-operations">
                    <div className="secret-vault-input">
                      <input
                        type="text"
                        value={answer}
                        placeholder="Enter the answer"
                        onChange={onAnswerChange}
                        onKeyDown={handleKeyPress}
                      />
                      <button className='secret-check-answer' onClick={checkAnswer}>Check Answer</button>
                      {
                        isCorrect && <Link to = '/'><button className = 'secret-homepage' onClick={onHomePage}>Continue</button></Link>
                      }
                      {isCorrect ? (
                        <p className='correct'>Your answer is correct</p>
                      ) : (
                        <>
                          {isAttempted && <p className='wrong'>Your answer is wrong</p>}
                        </>
                      )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )
    }</>
  );
};

export default SecretVault;
