import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CallDialogue.css';
import { checkAnswer, setAnswerChoose, setCurrentIndex, setIsAttempted, setIsDialogueOver } from '../../../redux/slice/FinancialVigilanceSlice'
import { Link } from 'react-router-dom';
const CallDialogues = ({ dialogue, options }) => {
  const dispatch = useDispatch();
  const onCallButtonPressHandler = (buttonId) => {
    dispatch(setIsAttempted(true));
    dispatch(setAnswerChoose(buttonId));
    dispatch(checkAnswer(buttonId))
  };
  const currentIndex = useSelector((state)=>state.Financial.currentIndex)
  const totalData = useSelector((state) => state.Financial.bankCallScenarioData.length);
  const onNextQuestion = () =>{
    currentIndex+1 < totalData ? dispatch(setCurrentIndex(currentIndex+1)) : (console.log(currentIndex))
  }
  const isCorrect = useSelector((state)=>state.Financial.bankCallScenarioData[state.Financial.currentIndex].isCorrect)
  const isDialogueOver = useSelector((state)=>state.Financial.isDialogueOver)
  const onCallBackButton = () =>{
    dispatch(setCurrentIndex(0));
    dispatch(setIsDialogueOver(false));
  }
  return (
    <>
    {
      isDialogueOver ? 
      (<div className="call-dialogue-container">
      <div className="call-dialogue-caller"><span>Caller </span>{dialogue}</div>
      <div className="call-dialogue-options">
        {options.map((option, index) => (
          <button
            key={index}
            className={'call-dialogue-option'}
            onClick={() => onCallButtonPressHandler(index)}>
            {option.text}
          </button>
        ))}
      </div>
      {
        isCorrect ? (
          totalData-1 === currentIndex ? (
            <Link to={'/'}>
              <button className='call-next-button' onClick={onCallBackButton}>
                Continue
              </button>
            </Link>
        ) : (
          <button onClick={onNextQuestion} className='call-next-button'>
            Next
          </button>
        )
      ) : (
        <></>
      )}
    </div>) : 
      (
        <></>
      )
    }
    </>
  );
};

export default CallDialogues;
