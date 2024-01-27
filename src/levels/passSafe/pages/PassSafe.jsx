import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { markQuestionAsAnswered } from '../../../redux/slice/PasswordSlice';
import PassSafeQuestion from '../components/PassSafeQuestion';
import { data } from '../../../redux/slice/PasswordSlice';
import PasswordDataImage from '../../../assets/PasswordData.png'
import './PassSafe.css'
import { Link } from 'react-router-dom';
import LoadingScreen from '../../../Loading/LoadingScreen';
const PassSafe = () => {
  const dispatch = useDispatch();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showNextButton, setShowNextButton] = useState(false);
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
  const [passSafeLoading,passSafeSetLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      passSafeSetLoading(false);
    },2000)
  },[])
  const handleOptionClick = (questionId, optionId) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionId]: optionId,
    }));
    setShowNextButton(true);
  };

  const checkAnswersAndMoveNext = () => {
    // Check correctness and move to the next question
    const currentQuestion = data[currentQuestionIndex];
    const selectedOptionId = selectedOptions[currentQuestion.id];

    if (selectedOptionId === currentQuestion.answer) {
      dispatch(markQuestionAsAnswered(currentQuestion.id));
    }

    if (currentQuestionIndex + 1 < data.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setShowNextButton(false);
      setSelectedOptions({});
    } else {
      setAllQuestionsAnswered(true);
    }
  };

  const goToNextPage = () => {
    console.log('Navigate to next page');
  };

  return(
    <>
      {passSafeLoading ? (
        <LoadingScreen dataline={''}/>
      ) : (
        <div className="pass-safe-container">
          <div className="pass-safe-container-hashed-password">
            <div className="pass-safe-container-hashed-password-image">
              <img src={PasswordDataImage} alt="" />
            </div>
          </div>
          <div className="pass-safe-container-questions">
          {
            currentQuestionIndex < data.length && (
            <PassSafeQuestion key={data[currentQuestionIndex].id} {...data[currentQuestionIndex]} selectedOption={selectedOptions[data[currentQuestionIndex].id]} onOptionClick={(optionId) => handleOptionClick(data[currentQuestionIndex].id, optionId)}/>
          )}
          {showNextButton && !allQuestionsAnswered &&  (
            <button className='pass-safe-next-button' onClick={checkAnswersAndMoveNext} disabled={!selectedOptions[data[currentQuestionIndex].id]}>
              Next
            </button>
          )}
          {allQuestionsAnswered && (
            <Link to={'/'}>
              <button className = 'pass-safe-goTo-next' onClick={goToNextPage}>
                Continue
              </button>
            </Link>
          )}
        </div>
    </div>
      ) }
    </>
  );
};

export default PassSafe;
