import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CHECK_IS_CORRECT, RESET_LEVEL, SET_IS_ATTEMPTED } from '../../../redux/slice/MysticMatrixSlice';
import { Link } from 'react-router-dom';
import LoadingScreen from '../../../Loading/LoadingScreen'
import './MysticMatrix.css'
import MysticMatrixAsset from '../../../assets/MysticMatrixAsset.jpg'
const MysticMatrix = () => {
  const {para1,para2,para3} = useSelector((state)=>state.Mystic.mysticMatrixData);
  const [loading,setLoading] = useState(false);
  const [ansA,setAnsA] = useState('');
  const [ansB,setAnsB] = useState('');  
  const [ansC,setAnsC] = useState('');
  const rules = useSelector((state)=>state.Mystic.mysticMatrixData.rules);
  const question = useSelector((state)=>state.Mystic.mysticMatrixData.question);
  const isCorrect = useSelector((state)=>state.Mystic.isCorrect);
  const isAttempted = useSelector((state)=>state.Mystic.isAttempted);
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false);
    },2000)
  })
  const onKeydownHandler = (event) =>{
    if(event.key === 'Enter') 
      onMysticSubmitHandler();
  }
  const onInputChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === 'A') setAnsA(value);
    else if (name === 'B') setAnsB(value);
    else if (name === 'C') setAnsC(value);
  };
  const dispatch = useDispatch();
  const onMysticSubmitHandler = () =>{
    dispatch(SET_IS_ATTEMPTED());
    dispatch(CHECK_IS_CORRECT([ansA,ansB,ansC]))
  }
  const onBackButtonHandler = () =>{
    dispatch(RESET_LEVEL());
  }
  return (
    <>{
      loading 
      ? (<LoadingScreen/>)
      : (
        <div className="mystic-matrix-container">
          <div className="mystic-matrix-heading">
            <h1>Mystic Matrix</h1>
          </div>
          <div className="mystic-matrix-data">
            <div className="mystic-matrix-image">
              <img src={MysticMatrixAsset} alt="" />
            </div>
            <div className="mystic-matrix-para">
              <div className="mystic-matrix-para1">{para1}</div>
              <div className="mystic-matrix-para2">{para2}</div>
              <div className="mystic-matrix-para3">{para3}</div>
            </div>
              <div className="mystic-matrix-rules">
                <div className="mystic-matrix-rule1">{rules[0]}</div>
                <div className="mystic-matrix-rule2">{rules[1]}</div>
                <div className="mystic-matrix-rule3">{rules[2]}</div>
              </div>
              <div className="mystic-matrix-question">{question}</div>
              <div className="mystic-matrix-help">
                <p>Feeling a bit stuck? Checkout about the   {''}
                  <Link to={'/mysticMatrix/mystic-matrix-tips-and-tricks'}><button className='mystic-matrix-help-button'>Quantum Encryption</button></Link>
                </p> 
              </div>
              <div className="mystic-matrix-operations">
                <div className="mystic-matrix-inputs">
                <label htmlFor="A">A</label>
                  <div>
                  <input 
                    type="text" 
                    name='A' 
                    onChange={onInputChangeHandler} 
                    value = {ansA} 
                    onKeyDown={onKeydownHandler}/></div>
                  <label htmlFor="B">B</label>
                  <div><input 
                  type="text" 
                  name='B' 
                  onChange={onInputChangeHandler} 
                  value = {ansB} 
                  onKeyDown={onKeydownHandler}/>
                  </div><label htmlFor="C">C</label><div>
                  <input 
                  type="text" 
                  name='C' 
                  onChange={onInputChangeHandler} 
                  value = {ansC} 
                  onKeyDown={onKeydownHandler}/></div></div>
                <div className="mystic-matrix-buttons">
                  <button onClick={onMysticSubmitHandler}>Submit</button>
                  {isAttempted && isCorrect && <Link to={'/'}><button onClick={onBackButtonHandler}>Continue</button></Link>}
                </div>
              </div>
              <div className={isCorrect ? 'correct' : 'wrong'}>{
                isAttempted 
                ? (
                  isCorrect
                  ? (<p>Congratulations! You've cracked the Mystic Matrix!<br/>Quantum encryption, built on quantum mechanics, elevates data security through features like superposition and entanglement. It stands as an advanced defense, ensuring unparalleled confidentiality in the ever-evolving landscape of secure communication.</p>) 
                  : (<p>Oops! Your answer seems to be off. Give it another shot! And don't forget to checkout the tips and tricks</p>)
                ) : (<></>)
              }</div>
          </div>
        </div>
      )
    }</>
  )
}

export default MysticMatrix