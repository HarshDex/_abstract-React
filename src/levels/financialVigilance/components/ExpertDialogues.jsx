import React, { useEffect, useState } from 'react';
import './ExpertDialogues.css';
import { useDispatch, useSelector } from 'react-redux';
import {setIsDialogueOver} from '../../../redux/slice/FinancialVigilanceSlice'

const ExpertDialogues = () => {
  const expertDialogue = [
    'Imagine this scenario: you are peacefully at home when an unexpected call pops up on your smartphone.',
    'As a vigilant individual, you find yourself faced with choices, each carrying implications for your security and privacy.',
    'In this digital age, making informed decisions is crucial. Let\'s explore the best options together.',
    'As the scenario unfolds, your choices matter. Are you ready to navigate the call with confidence?',
  ];

  const [index, setIndex] = useState(0);
  const [showFinishSuggestion, setShowFinishSuggestion] = useState(false);
  const isAttempted = useSelector((state)=>state.Financial.isAttempted)
  const answerChoose = useSelector((state)=>state.Financial.bankCallScenarioData[state.Financial.currentIndex].answerChoose)
  const currentIndex = useSelector((state) => state.Financial.currentIndex);
  const bankScenarioData = useSelector((state) => state.Financial.bankCallScenarioData);
  const totalData = bankScenarioData.length;

  const isIndexValid = currentIndex >= 0 && currentIndex < totalData;
  const reasons = isIndexValid ? bankScenarioData[currentIndex].options : null;
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < expertDialogue.length - 1) {
        setIndex(index + 1);
      } else {
        setShowFinishSuggestion(true);
        dispatch(setIsDialogueOver(true));
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [index, expertDialogue.length]);

  return (
    <div className="expert-dialogue-container">
      <div className="expert-dialogue">
        {showFinishSuggestion ? (
          isAttempted ? (
            <div className="choosed-answers">
              {answerChoose !== null && reasons !== null && reasons[answerChoose] !== undefined ? (
                <p>{reasons[answerChoose].reason}</p>
              ) : (
                <p>{'Choose the option that you consider to be the most prudent choice at the moment.'}</p>
              )}
            </div>
          ) : (
            <p>Choose the option that you consider to be the most prudent choice at the moment.</p>
          )
        ) : (
          <p>{expertDialogue[index]}</p>
        )}
      </div>
    </div>
  );
};

export default ExpertDialogues;
