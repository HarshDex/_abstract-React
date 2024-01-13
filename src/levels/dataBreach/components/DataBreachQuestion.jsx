import React from 'react';

const DataBreachQuestion = ({
  question,
  userAnswer,
  isAnswered,
  isCorrect,
  onInputChange,
  onCheckAnswer,
}) => {
  return (
    <div className={`data-breach-question-container ${isAnswered ? 'answered' : ''}`}>
      <div className="data-breach-question">{question}</div>
      {!isAnswered && (
        <div className="data-breach-question-options">
          <input
            type="text"
            value={userAnswer || ''}
            onChange={(e) => onInputChange(e.target.value)}
            placeholder="Type your answer here"
          />
          <button onClick={onCheckAnswer}>Check Answer</button>
        </div>
      )}
      {isAnswered && (
        <div className="data-breach-question-suggestion">
          {isCorrect ? 'Your answer is correct!' : 'Your answer is incorrect!'}
        </div>
      )}
    </div>
  );
};

export default DataBreachQuestion;
