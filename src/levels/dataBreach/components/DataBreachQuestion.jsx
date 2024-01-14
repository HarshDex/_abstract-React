import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentIndex,setIsAnswered} from '../../../redux/slice/DataBreachSlice';
import './DataBreachQuestion.css'
const DataBreachQuestion = ({ question, answer }) => {
  const [inputAnswer, setInputAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const dispatch = useDispatch();
  const [clickSubmit, setClickSubmit] = useState(false);
  const currentIndex = useSelector((state) => state.DataBreach.currentIndex);

  const onDataInputChangeHandler = (event) => {
    setInputAnswer(event.target.value);
  };

  const onDataBreachSubmit = () => {
    setClickSubmit(true);
    if (inputAnswer.toLowerCase() === answer.toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const onNextButtonClick = () => {
    dispatch(setCurrentIndex(currentIndex + 1));
    setIsCorrect(false);
    dispatch(setIsAnswered(true));
  };

  const downloadPdf = () => {
    // Your PDF download logic here
    const pdfPath = '/DataBreachPdfDownload.pdf';
    const DownLoadLink = document.createElement('a');
    DownLoadLink.href = pdfPath;
    DownLoadLink.download = 'DataBreachPdfDownload.pdf';
    document.body.appendChild(DownLoadLink);
    DownLoadLink.click();
    document.body.removeChild(DownLoadLink);
  };

  return (
    <div className="dataBreachQuestionContainer">
      <div className={`data-breach-question ${isCorrect ? 'correct-answer' : 'incorrect-answer'}`}>
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
            <button onClick={onNextButtonClick}>Next Question</button>
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