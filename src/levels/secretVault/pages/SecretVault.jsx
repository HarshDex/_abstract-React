import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IS_ANSWER_CORRECT_SECRET } from '../../../redux/slice/SecretVaultSlice';

const SecretVault = () => {
  const story = useSelector((state) => state.Secret.secretVaultDataStory);
  const question = useSelector((state) => state.Secret.secretVaultDataQuestion);
  const [storyScreen, setStoryScreen] = useState(true);
  const [buttonFlag, setButtonFlag] = useState(false);
  const [answer, setAnswer] = useState('');
  const [isAttempted, setIsAttempted] = useState(false);
  const isCorrect = useSelector((state) => state.Secret.isCorrect);
  const dispatch = useDispatch();

  useEffect(() => {
    const timerId = setTimeout(() => {
      setButtonFlag(true);
    }, 60);
    return () => clearTimeout(timerId);
  }, []);

  const onContinueQuestion = () => {
    setStoryScreen(false);
  };

  const checkAnswer = () => {
    console.log("Checking answer:", answer);
    dispatch(IS_ANSWER_CORRECT_SECRET(answer));
  };

  const onAnswerChange = (event) => {
    setAnswer(event.target.value);
    setIsAttempted(true);
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
    <div className="secret-vault-container">
      {storyScreen ? (
        <div className="secret-story-container">
          {story}
          {buttonFlag && (
            <button onClick={onContinueQuestion}>Continue</button>
          )}
        </div>
      ) : (
        <div className="secret-vault-question">
          {question}
          <p>
            Feeling a bit stuck? Check out{' '}
            <Link to="/secretVault/flow-of-online-services">
              <button>Authentication flow of online services</button>
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
              <button onClick={checkAnswer}>Check Answer</button>
              {isCorrect ? (
                <p>Your answer is correct</p>
              ) : (
                <>
                  {isAttempted && <p>Your answer is wrong</p>}
                </>
              )}
              {
                isCorrect && <Link to = '/'><button onClick={onHomePage}>Continue</button></Link>
              }
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecretVault;
