import React, { useState,useEffect } from 'react'
import LoadingScreen from '../../../Loading/LoadingScreen';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RESET_LEVEL, SET_IS_ATTEMPTED, SET_iS_CORRECT } from '../../../redux/slice/QuantumIntrusionSlice';
const QuantumIntrusion = () => {
    const [loading,setLoading] = useState(true);
    const {para1,para2,para3} = useSelector((state)=>state.Quantum.quantumIntrusionData)
    const quantumIDCredentials = useSelector((state)=>state.Quantum.quantumIDCredentials);
    const isAttempted = useSelector((state)=>state.Quantum.
    isAttempted);
    const isCorrect = useSelector((state)=>state.Quantum.isCorrect);
    const [ans,setAns] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, []);
    const onKeydownHandler = (event) =>{
        if(event.key === 'Enter') onQuantumSubmitHandler();
    }
    const onQuantumSubmitHandler = () =>{
        dispatch(SET_IS_ATTEMPTED(true));
        dispatch(SET_iS_CORRECT(ans));
    }
    const onContinueHandler = () =>{
        dispatch(RESET_LEVEL());
    }
    const onQuantumIntrusionChangeHandler = (event) =>{
        setAns(event.target.value);
    }
    
    return (
        <>{
            loading
            ?(<LoadingScreen/>)
            :(<div className="quantum-intrusion-container">
                <div className="quantum-intrusion-container-heading">
                    <h1>Quantum Intrusion</h1>
                </div>
                <div className="quantum-intrusion-container-data">
                    <div className="quantum-intrusion-container-image">
                        {/* <img src={quantum-intrusionAsset} alt="" /> */}
                    </div>
                    <div className="quantum-intrusion-container-para">
                        <div className="quantum-intursion-para1">
                            {para1}
                        </div>
                        <div className="quantum-intursion-para2">
                            {para2}
                        </div>
                        <div className="quantum-intursion-para2">
                            {para3}
                        </div>
                    </div>
                    <div className="quantum-intrusion-code">
                        <pre>{quantumIDCredentials}</pre>
                    </div>
                    <div className="quantum-intrusion-container-help">
                        <p>Feeling a little bit stuck? Check out our tips and tricks {' '}
                        <Link to='/quantum-intrusion/quantum-intrusion-tips-and-tricks'>
                            <button className='quantum-intrusion-container-help-button'>O-Auth 2.0
                            </button>
                        </Link>
                        </p>
                    </div>
                    <div className="quantum-intrusion-container-operations">
                        <input type="text" className='quantum-intrusionAnswerField' 
                        onChange={onQuantumIntrusionChangeHandler} 
                        value={ans} 
                        onKeyDown={onKeydownHandler}
                        placeholder='enter your answer'/>
                        <div className="quantum-intrusion-operation-buttons" >
                            <button onClick={onQuantumSubmitHandler}>Submit</button>
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
                                ? <p>you are correct</p>
                                : <p>you are wrong</p>
                            )
                            :(<></>)
                        }
                        </div>
                </div>
            </div>)
        }</>
    )
}

export default QuantumIntrusion