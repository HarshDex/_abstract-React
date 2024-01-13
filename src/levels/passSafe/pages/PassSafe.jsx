import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { markQuestionAsAnswered } from '../../../redux/slice/PasswordSlice';
import PassSafeQuestion from '../components/PassSafeQuestion';
import { data } from '../../../redux/slice/PasswordSlice';
import PasswordDataImage from '../../../assets/PasswordData.png'
import './PassSafe.css'
const PassSafe = () => {
  const dispatch = useDispatch();
  const [complete,setComplete] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showNextButton, setShowNextButton] = useState(false);
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

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
      setSelectedOptions({});
      setShowNextButton(false);
    } else {
      setAllQuestionsAnswered(true);
    }
  };

  const goToNextPage = () => {
    // Implement logic to navigate to the next page
    console.log('Navigate to next page');
    setComplete(true);
  };

  return (
    <>
      {
        complete ? (
            <>
              <p>Congratulations for completion
              </p>
            </>
        ) 
        : (
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
              {showNextButton && (
                <button onClick={checkAnswersAndMoveNext} disabled={!selectedOptions[data[currentQuestionIndex].id]}>
                  Next
                </button>
              )}
              {allQuestionsAnswered && (
                <button onClick={goToNextPage}>Go to Next Page</button>
              )}
            </div>
        </div>
        )
      }
    </>
  );
};

export default PassSafe;
