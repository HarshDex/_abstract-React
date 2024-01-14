import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentIndex,setIsAnswered } from '../../../redux/slice/DataBreachSlice';
import DataBreachQuestion from '../components/DataBreachQuestion';
import { Link } from 'react-router-dom';
import './DataBreach.css'
import LoadingScreen from '../../../Loading/LoadingScreen';
const DataBreach = () => {
  const dispatch = useDispatch();
  const securityQuestions = useSelector((state) => state.DataBreach.questions);
  const currentIndex = useSelector((state) => state.DataBreach.currentIndex);
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },2000)
  },[])


  const handleOptionClick = (userAnswer, questionIndex) => {
    dispatch(setIsAnswered(true));
    dispatch(setCurrentIndex(currentIndex + 1));

  };

 

  return (
    <>
    {
      loading ? (<LoadingScreen/>) : (
        <div className="data-breach-container">
      <div className="data-breach-image">
        <img src='https://img.freepik.com/free-photo/abstract-colorful-splash-3d-background-generative-ai-background_60438-2509.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705104000&semt=sph' alt="" />
      </div>
      <div className="data-breach-container-questions">
      <div className="data-breach-questions">
        {currentIndex < securityQuestions.length && (
          <DataBreachQuestion
            key={currentIndex}
            {...securityQuestions[currentIndex]}
            onOptionClick={(userAnswer) => handleOptionClick(userAnswer, currentIndex)}
          />
        )}
        {currentIndex >= securityQuestions.length && (
          <Link to={'/'}>
            <button className="data-breach-goTo-next">Continue</button>
          </Link>
        )}
      </div>
      </div>
    </div>
      )
    }
    </>
  );
};

export default DataBreach;
