import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentIndex, setIsAnswered } from '../../../redux/slice/DataBreachSlice';
import './DataBreachQuestion.css';
import { Link } from 'react-router-dom';

const DataBreachQuestion = ({ question, answer }) => {
  const [inputAnswer, setInputAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [clickSubmit, setClickSubmit] = useState(false);

  const dispatch = useDispatch();
  const currentIndex = useSelector((state) => state.DataBreach.currentIndex);
  const totalData = useSelector((state) => state.DataBreach.questions.length);
  const isAnswered = useSelector((state) => state.DataBreach.questions[state.DataBreach.currentIndex].isAnswered);
  useEffect(()=>{
    console.log(`for current index :${currentIndex}`  + isAnswered);
  },[currentIndex])
  const onDataInputChangeHandler = (event) => {
    setInputAnswer(event.target.value);
  };
  const onDataBreachSubmit = () => {
    setClickSubmit(true);
    setIsCorrect(inputAnswer.toLowerCase() === answer.toLowerCase());
    dispatch(setIsAnswered(true));
  };

  const onNextButtonClick = () => {
    dispatch(setCurrentIndex(currentIndex + 1));
    setIsCorrect(false);
    dispatch(setIsAnswered(true));
  };

  const downloadPdf = () => {
    // Your PDF download logic here
    const pdfPath = '/DataBreachPdfDownload.pdf';
    const downloadLink = document.createElement('a');
    downloadLink.href = pdfPath;
    downloadLink.download = 'DataBreachPdfDownload.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="dataBreachQuestionContainer">
      <div className={`data-breach-question ${isCorrect ? 'correct-answer' : isAnswered ? 'incorrect-answer' : ''}`}>
        {question}
      </div>
      <div className="data-breach-operations">
        <div className="dataBreachInputField">
          <input
            type="text"
            onChange={onDataInputChangeHandler}
            value={inputAnswer}
            placeholder="Enter your answer here"
          />
        </div>
        <div className="data-breach-operations-button">
          {clickSubmit && isCorrect ? (
            <></>
          ) : (
            <button onClick={onDataBreachSubmit}>Submit</button>
          )}
          {isCorrect ? (
            currentIndex === totalData - 1 ? (
              <Link to="/">
                <button className="data-breach-goTo-next">Continue</button>
              </Link>
            ) : (
              <button onClick={onNextButtonClick}>Next Question</button>
            )
          ) : (
            <></>
          )}
          <button onClick={downloadPdf}>Download PDF</button>
        </div>
      </div>
    </div>
  );
};

export default DataBreachQuestion;
