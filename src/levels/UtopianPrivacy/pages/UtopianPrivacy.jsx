import React, { useEffect, useState } from 'react';
import './UtopianPrivacy.css';
import { useDispatch, useSelector } from 'react-redux';
import { IS_ANSWER_CORRECT, IS_ATTEMPTED, ON_CLOSE } from '../../../redux/slice/UtopianPrivacySlice';
import { Link } from 'react-router-dom';
import LoadingScreen from '../../../Loading/LoadingScreen'

const UtopianPrivacy = () => {
  const [answer, setAnswer] = useState('');
  const isCorrect = useSelector((state) => state.UtopianPrivacy.isCorrect);
  const [isLoading,setIsLoading] = useState(true);
  const [isFinish, setIsFinish] = useState(false);
  const para1 = useSelector((state) => state.UtopianPrivacy.UtopianPrivacyData.para1);
  const para2 = useSelector((state) => state.UtopianPrivacy.UtopianPrivacyData.para2);
  const para3 = useSelector((state) => state.UtopianPrivacy.UtopianPrivacyData.para3);
  const isAttempted = useSelector((state) => state.UtopianPrivacy.isAttempted);
  const onUtopianButtonChange = (event) => {
    setAnswer(event.target.value);
  };
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setIsLoading(false);
    },2000)
  },[])
  const dispatch = useDispatch();
  const onEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      onUtopianButtonClick();
    }
  };
  const onUtopianButtonClick = () => {
    dispatch(IS_ATTEMPTED(true));
    dispatch(IS_ANSWER_CORRECT(answer));
    if(isCorrect){
      dispatch(ON_CLOSE());
      setIsFinish(true);
    }
  };
  return (
    <>{
      isLoading 
      ? (
        <LoadingScreen/>
      ) 
      : (
          <div className="utopian-privacy-container">
          <div className="utopian-privacy-container-heading">Utopian Privacy Challenge</div>
          <div className="utopian-privacy-data">
            <div className="utopian-privacy-data-image">
              <img src="https://research.jgu.edu.in/wp-content/uploads/2022/01/Freedom-of-information-@NA-1024x597.jpg" alt="" />
            </div>
            <div className="utopian-privacy-question">
              <div className="utopian-privacy-question-para">{para1}</div>
              <div className="utopian-privacy-question-para">{para2}</div>
              <div className="utopian-privacy-question-para">{para3}</div>
              <button className="utopian-privacy-evidence">Checkout Evidence</button>
              <div className="utopian-privacy-question-operation">
                <input
                  type="text"
                  placeholder="Enter Your Answer"
                  onChange={onUtopianButtonChange}
                  onKeyDown={onEnterKeyPress}
                  className={isCorrect === false ? 'utopian-privacy-false' : ''}
                  value={answer}
                />
                {isFinish ? (
                  <Link to={'/'}>
                    <button onClick={onUtopianNextButton}>Continue</button>
                  </Link>
                ) : (
                  <button onClick={onUtopianButtonClick}>Submit</button>
                )}
              </div>
              {isAttempted ? (
                <div className={`utopian-privacy-result ${isCorrect ? 'utopian-privacy-correct' : ''}`}>
                {isCorrect ? (
                  <p>"Congratulations! Your answer is correct. Here's an insightful quote: 'Your privacy is the foundation of your freedom.'</p>
                ) : (
                  <p style={{ color: 'red' }}>Oops! Your answer is incorrect. 'Failure is simply the opportunity to begin again, this time more intelligently'</p>
                )}
              </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      )
    }</>
  );
};

export default UtopianPrivacy;
