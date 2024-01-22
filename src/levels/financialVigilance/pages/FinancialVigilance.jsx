// FinancialVigilance.js
import React, { useRef, useEffect, useState } from 'react';
import './FinnancialVigilance.css';
import CyberSecurityExpert from '../../../assets/CyberSecurityExpert.png';
import { useSelector, useDispatch } from 'react-redux';
import CallDialogues from '../components/CallDialogues';
import ExpertDialogues from '../components/ExpertDialogues';
import { setCurrentIndex } from '../../../redux/slice/FinancialVigilanceSlice';
import LoadingScreen from '../../../Loading/LoadingScreen'

const FinancialVigilance = () => {
  const dispatch = useDispatch();
  const callerData = useSelector((state) => state.Financial);
  const [isLoading,setIsLoading] = useState(true);
  const handleNextQuestion = () => {
    const nextIndex = callerData.currentIndex + 1;
    if (nextIndex < callerData.bankCallScenarioData.length) {
      dispatch(setCurrentIndex(nextIndex));
    }
  };

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },2000)
  },[])

  return (
    <>{
      isLoading ? (<LoadingScreen/>) : (
        <div className="financial-vigilance-container">
      <div className="financial-vigilance-assets">
        <ExpertDialogues
          currentIndex={callerData.currentIndex}
          onNextQuestion={handleNextQuestion}
        />
        <div className="financial-vigilance-image">
          <img src={CyberSecurityExpert} alt="" />
        </div>
      </div>
      <div className="financial-vigilance-dialogue-box">{
          callerData.bankCallScenarioData.map((callDialogue, index) => (
            callerData.currentIndex === index && <CallDialogues key={callDialogue.id} {...callDialogue} />
        ))
      }
      </div>
    </div>
      )
    }
    </>
  );
};

export default FinancialVigilance;
