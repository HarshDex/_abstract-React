import React, { useEffect, useState } from 'react'
import { RESET_LEVEL, SET_IS_ATTEMPTED, SET_IS_CORRECT } from '../../../redux/slice/PhantomAttackSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import './PhantomAttack.css'
import phantomAttackAsset from '../../../assets/PhantomAttackAsset.png'
import LoadingScreen from '../../../Loading/LoadingScreen'
const PhantomAttack = () => {
  const isCorrect = useSelector((state)=>state.Phantom.isCorrect);
  const isAttempted = useSelector((state)=>state.Phantom.isAttempted);
  const {para1,para2,question} = useSelector((state)=>state.Phantom.phantomAttackData);
  const [loading,setLoading] = useState(true);
  const [ans,setAns] =  useState('');  
  const dispatch = useDispatch();
  useEffect(()=>{
    const timer = setTimeout(()=>{
        setLoading(false);
    },2000)
  },[]);
  const onPhantomChangeHandler = (event) => {
    setAns(event.target.value);
  }
  const onPhantomSubmitHandler = () =>{
    dispatch(SET_IS_ATTEMPTED());
    dispatch(SET_IS_CORRECT(ans));
  }
  const onResetLevelHanlder = () =>{
    dispatch(RESET_LEVEL());
  }
  const downloadPdf = () => {
    const pdfPath = '/PhantomAttackEmailDownload.pdf';
    const downloadLink = document.createElement('a');
    downloadLink.href = pdfPath;
    downloadLink.download = 'PhantomAttackEmailDownload.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  const onPhantomKeydownHandler = (event) =>{
    if(event.key === 'Enter') onPhantomSubmitHandler();
  }
  return (
    <>{
        loading 
        ? (<LoadingScreen/>) 
        : (
            <div className="phantom-attack-container">
                <div className="phantom-attack-heading">
                    <h1>
                        Phantom Attack
                    </h1>
                </div>
                <div className="phantom-attack-data">
                    <div className="phantom-attack-image">
                        <img src={phantomAttackAsset} alt="" />
                    </div>
                    <div className="phantom-attack-para">
                        <div className="attack-para1">{para1}</div>
                        <div className="attack-para2">{para2}</div>
                    </div>
                    <div className="phantom-email-download">
                        <button onClick={downloadPdf}>Click here to access the email securely <i class="ri-mail-download-line"></i></button>
                    </div>
                    <div className="phantom-attack-question">
                        <p>{question}</p>
                    </div>
                    <div className="phantom-attack-help">
                        <p>Feeling Stuck? Learn more about{' '}
                        <Link to={'/phantomAttack/phantom-attack-tips-and-tricks'}><button className='phantom-help-button'>Social Engineering</button></Link></p>
                    </div>
                    <div className="phantom-attack-operations">
                        <input 
                            type="text" 
                            className='phantom-attack-input'
                            onChange={onPhantomChangeHandler}
                            value={ans}
                            placeholder='Enter Your Answer Here'
                            onKeyDown={onPhantomKeydownHandler}
                        />
                        <div className="phantom-attack-buttons">
                            <button onClick={onPhantomSubmitHandler}>Submit</button>
                            {isCorrect && isAttempted && <Link to={'/'}><button onClick={onResetLevelHanlder}>Continue</button></Link>}
                        </div>
                    </div>
                    {
                        isAttempted
                        ? (
                            <div className={isCorrect ? 'correct' : 'wrong'}>{
                                isCorrect 
                                ? (<p>You're absolutely right! The email in question exhibits several signs of a phishing attempt, a common form of social engineering. Phishing involves tricking individuals into divulging sensitive information, often through deceptive emails. In this case, the email's generic greeting, urgent tone, and lack of personalization are typical red flags of a phishing attempt. Great job spotting it!</p>) 
                                : (<p>I am affraid you are wrong! Remember to carefully consider all the details in the scenario. You'll get it next time!</p>)
                            }</div>
                        ) 
                        : (<></>)
                    }
                </div>
            </div>
        )
    }</>
  )
}

export default PhantomAttack