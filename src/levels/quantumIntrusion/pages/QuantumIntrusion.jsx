import React, { useState,useEffect } from 'react'
import LoadingScreen from '../../../Loading/LoadingScreen';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RESET_LEVEL, SET_IS_ATTEMPTED, SET_iS_CORRECT } from '../../../redux/slice/QuantumIntrusionSlice';
const QuantumIntrusion = () => {
    const [loading,setLoading] = useState(false);
    const {para1,para2,para3} = useSelector((state)=>state.Quantum.quantumIntrusionData)
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
    const quantumIDCredentials = `
        # Credentials you get from registering a new application
        client_id = '<the id you get from cybernetics megacorp>'
        client_secret = '<the secret you get from cybernetics megacorp>'
        redirect_uri = 'https://your.registered/callback'

        # OAuth endpoints given in the cybernetics megacorp API documentation
        authorization_base_url = "https://accounts.cybernaticsmegacorp.com/o/oauth2/v2/auth"
        token_url = "https://www.cybernaticsmegacorpapis.com/oauth2/v4/token"
        scope = [
            "openid",
            "https://www.cybernaticsmegacorpapis.com/auth/userinfo.email",
        ]

        from requests_oauthlib import OAuth2Session
        cybernatics_megacorp = OAuth2Session(client_id, scope=scope, redirect_uri=redirect_uri)

        # Redirect user to cybernetics megacorp for authorization
        authorization_url, state = cybernatics_megacorp.authorization_url(
            authorization_base_url,
            # offline for refresh token
            # force to always make user click authorize
            access_type="offline", prompt="select_account"
        )
        print('Please go here and authorize:', authorization_url)

        # Get the authorization verifier code from the callback url
        redirect_response = input('Paste the full redirect URL here: ')

        # Fetch the access token
        cybernatics_megacorp.fetch_token(
            token_url, client_secret=client_secret, authorization_response=redirect_response
        )

        # Fetch a protected resource, i.e. user profile
        r = cybernatics_megacorp.get('https://www.cybernaticsmegacorpapis.com/oauth2/v1/userinfo')
        print(r.content)
    `;
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