import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CHECK_DECENTRALISED_ANSWER , RESET_LEVEL} from '../../../redux/slice/DecentralisedIdentifierSlice';
import './DecentralisedIdentifiers.css';
import { Link } from 'react-router-dom';
import LoadingScreen from '../../../Loading/LoadingScreen';

const DecentralisedIdentifiers = () => {
  const dispatch = useDispatch();
  const [isAttempted, setIsAttempted] = useState(false);
  const [decentralisedAnswer, setDecentralisedAnswer] = useState('');
  const [isLoading,setIsLoading] = useState(true);
  const DecentralisedtData = useSelector((state) => state.DecentralisedIdentifier);
  const isCorrect = useSelector((state)=>state.DecentralisedIdentifier.isAnswerCorrect);
  const onDecentralisedChangeHandler = (event) => {
    setDecentralisedAnswer(event.target.value);
  };

  useEffect(()=>{
    setTimeout(() => {
        setIsLoading(false);
    }, 2000);
  },[])

  const onDecentralisedLevelHandler = async () => {
    setIsAttempted(decentralisedAnswer !== '');
    dispatch(CHECK_DECENTRALISED_ANSWER(decentralisedAnswer));
  };


  const onDecentralisedContinueHandler = () =>{
    dispatch(RESET_LEVEL());
  }
    const verifiableCredentialData = {
        "context": [
            "https://www.w3.org/2018/credentials/v1",
            "https://www.w3.org/2018/credentials/examples/v1",
            "https://w3id.org/security/suites/ed25519-2020/v1"
        ],
        "id": "http://example.edu/credentials/3732",
        "type": [
            "VerifiableCredential",
            "UniversityDegreeCredential"
        ],
        "issuer": "https://example.edu/issuers/14",
        "issuanceDate": "2010-01-01T19:23:24Z",
        "credentialSubject": {
            "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
            "degree": {
                "type": "BachelorDegree",
                "name": "Bachelor of Science and Arts"
            }
        },
        "termsOfUse": [
            {
                "type": "IssuerPolicy",
                "id": "http://example.com/policies/credential/4",
                "profile": "http://example.com/profiles/credential",
                "prohibition": [
                    {
                        "assigner": "https://example.edu/issuers/14",
                        "assignee": "AllVerifiers",
                        "target": "http://example.edu/credentials/3732",
                        "action": [
                            "Archival"
                        ]
                    }
                ]
            }
        ],
        "proof": {
            "type": "Ed25519Signature2020",
            "created": "2022-02-25T14:58:43Z",
            "verificationMethod": "https://example.edu/issuers/14#keys-1",
            "proofPurpose": "assertionMethod",
            "proofValue": "z2ty8BNvrKCvAXGqJVXF8aZ1jK5o5uXFvhXJksUXhn61uSwJJmWdcntf qvZTLbWmQHpiey8bswvR"
        }
    };
    const downloadVerifiablePdf = () => {
        // Your PDF download logic here
        const pdfPath = '/VerifiableCredential.pdf';
        const DownLoadLink = document.createElement('a');
        DownLoadLink.href = pdfPath;
        DownLoadLink.download = 'VerifiableCredential.pdf';
        document.body.appendChild(DownLoadLink);
        DownLoadLink.click();
        document.body.removeChild(DownLoadLink);
      };
  return (
    <>{
        isLoading 
        ? (<LoadingScreen/>) 
        : (
            <div className="decentralised-identifier-container">
      <div className="decentralised-identifier-border">
        <div className="decentralised-identifier-title">
          <p>Decentralised Identifier</p>
        </div>
        <div className="decentralised-identifier-image">
          <img src="https://privacyquest-storage.s3.amazonaws.com/quests/8/DI%20Quest%20story%2013.jpg" alt="" />
        </div>
        <div className="decentralised-identifier-ctf">
          <p>{DecentralisedtData.ctf}</p>
        </div>
        <div className="decentralised-identifier-code">
          <pre>{JSON.stringify(verifiableCredentialData, null, 2)}</pre>
        </div>
        <div className="decentralised-identifier-question">
          <p>{DecentralisedtData.question}</p>
        </div>
        <div className={`decentralised-identifier-operations ${ isCorrect ?'decentralised-identifier-correct' : ''}`}>
          <input
            type="text"
            onChange={onDecentralisedChangeHandler}
            value={decentralisedAnswer}
            placeholder='Enter Your answer here'
          />
          <button onClick={onDecentralisedLevelHandler}>Submit</button>
          {
            isCorrect 
            ? (
                <Link to={'/'}>
                    <button
                     className='direct-to-home-page'
                     onClick={onDecentralisedContinueHandler}>
                        Continue
                     </button>
                </Link>) 
            : (<></>)
          }
        </div>
        <div className="decentralised-checkout-tips">
            <p>If you are Feeling a bit stuck? Explore our Tips & Hints for some guidance!</p>
            <button onClick={downloadVerifiablePdf}>Verifiable Credential</button>
        </div>
        {isAttempted && (
          <div className="decentralised-identifier-result">
            {
                isCorrect ? 
                <p className='decentralised-identifier-correct'>
                    <span>You Are Correct</span>
                    Decentralized data empowers individuals with control over their digital footprint, ensuring privacy and security in a world where information is the new currency. By distributing data across a network, decentralization fosters transparency, resilience, and autonomy, reshaping the narrative of how we interact with and safeguard our digital identities.
                </p> 
                :<p className='decentralised-identifier-wrong'>
                    <span>Your are Wrong</span>
                    Embrace the challenges, stay resilient through setbacks, and let your passion be the driving force. Success is not just a destination but a journey shaped by determination, commitment, and the unwavering belief in your abilities. You have the power to turn dreams into reality; keep pushing forward with courage and conviction
                </p>
            }
          </div>
        )}
      </div>
    </div>
        )
    }</>
  );
};

export default DecentralisedIdentifiers;
