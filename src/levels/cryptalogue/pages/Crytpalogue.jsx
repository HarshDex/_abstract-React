import React, { useState,useEffect } from 'react'
import CryptalogueAsset from '../../../assets/CryptalogueAsset.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { IS_CORRECT ,RESET_LEVEL , SET_IS_ATTEMPTED} from '../../../redux/slice/CryptalogueSlice'
import { Link } from 'react-router-dom'
import LoadingScreen from '../../../Loading/LoadingScreen'
import './Crytpalogue.css'
const Crytpalogue = () => {
  const{ para1, para2} = useSelector((state)=>state.Cryptalogues.cryptalogueDialogues)
  const dispatch = useDispatch();
  const [ans,setAns] = useState('');
  const [loading,setLoading] = useState(true);
  const isCorrect = useSelector((state)=>state.Cryptalogues.isCorrect);
  const onCryptalogueChangeHandler = (event) => {
    setAns(event.target.value)
  }
  const isAttempted = useSelector((state)=>state.Cryptalogues.isAttempted)
  useEffect(() => {
    const timer = setTimeout(()=>{
        setLoading(false);
    },2000)
  }, []);
  const onSubmitHandler = () => {
    dispatch(SET_IS_ATTEMPTED(true));
    dispatch(IS_CORRECT(ans));
  }
  const handleKeyPress = (event) =>{
    if(event.key === 'Enter') onSubmitHandler();
  }
  const onContinueHandler = () =>{
    dispatch(RESET_LEVEL());
  }
  return (
    <>{
        loading 
        ? (<LoadingScreen/>) 
        : (
            <div className="cryptalogue-container">
                <div className="cryptalogue-container-heading">
                    <h1>Cryptalogue</h1>
                </div>
                <div className="cryptalogue-container-data">
                    <div className="cryptalogue-container-image">
                        <img src={CryptalogueAsset} alt="" />
                    </div>
                    <div className="cryptalogue-container-para">
                        <div className="crypta-logue-para1">
                            {para1}
                        </div>
                        <div className="crypta-logue-para2">
                            {para2}
                        </div>
                    </div>
                    <div className="cryptalogue-container-help">
                        <p>Feeling a little bit stuck? Check out our tips and tricks {' '}
                        <Link to='/cryptalogue/cryptalogue-tips-and-tricks'>
                            <button className='cryptalogue-container-help-button'>Data in Rest VS Data in Transit
                            </button>
                        </Link>
                        </p>
                    </div>
                    <div className="cryptalogue-container-operations">
                        <input type="text" className='CryptalogueAnswerField' 
                        onChange={onCryptalogueChangeHandler} 
                        value={ans} 
                        onKeyDown={handleKeyPress}
                        placeholder='enter your answer'/>
                        <div className="cryptalogue-operation-buttons" >
                            <button onClick={onSubmitHandler}>Submit</button>
                            {
                                isCorrect 
                                ? (
                                    <Link to='/'>
                                        <button onClick={onContinueHandler}>continue</button>
                                    </Link>
                                ) : (<></>)
                            }
                        </div>
                    </div>
                    <div className={isCorrect ? 'correct' : 'wrong'}>
                        {
                            isAttempted 
                            ? (
                                isCorrect
                                ? <p>Congratulations! Your keen insight into encryption methods has proven to be spot-on. By correctly identifying TLS (Transport Layer Security), you've ensured the confidentiality and integrity of telemetry data reports during their journey. A triumph for privacy in the digital realm!</p>
                                : <p>Alas! The cryptographic journey hit a roadblock this time. The correct answer eluded you, but fear not. Each attempt is a step towards mastering the art of securing data. Analyze, learn, and be ready for the next cryptographic challenge that awaits!</p>
                            )
                            :(<></>)
                        }
                        </div>
                </div>
            </div>
        )
    }</>
  )
}

export default Crytpalogue