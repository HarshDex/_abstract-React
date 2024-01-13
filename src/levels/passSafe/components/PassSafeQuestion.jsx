import React from 'react';
import { v4 as uuid } from 'uuid';

const PassSafeQuestion = ({ id, question, options, answer, selectedOption, onOptionClick }) => {
  const isAnswered = Boolean(selectedOption);
  const isCorrect = selectedOption === answer;

  return (
    <div className={`pass-safe-question-container ${isAnswered ? 'answered' : ''}`}>
      <div className="pass-safe-question-container-question">{question}</div>
      <div className="pass-safe-question-container-options">
        {options.map((option, index) => (
          <button
            key={uuid()}
            className={`${selectedOption === index.toString() ? 'selected' : ''} ${isAnswered && index.toString() === answer ? 'correct' : ''}`}
            onClick={() => onOptionClick(index.toString())}
            disabled={isAnswered}
          >
            {option}
          </button>
        ))}
        {isAnswered && !isCorrect && <div className="incorrect-indicator">Incorrect</div>}
        {isAnswered && isCorrect && <div className="correct-indicator">Correct</div>}
      </div>
    </div>
  );
};

export default PassSafeQuestion;
