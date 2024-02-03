import React,{useState,useEffect} from 'react'
import './CryptalogueTips.css'
import { useNavigate } from 'react-router-dom'
import LoadingScreen from '../../../Loading/LoadingScreen';
const CryptalogueTips = () => {
  const [loading,setLoading] = useState(true);
    const navigate = useNavigate();
    const onBackButton = () =>{
        navigate(-1);
    }
    useEffect(() => {
        const timer = setTimeout(()=>{
            setLoading(false);
        },2000)
      }, []);
  return (
    <>{
        loading
        ? (<LoadingScreen/>) 
        : (
            <div className="cryptalogue-tips-container">
                <div className="cryptalogue-tips-container-heading">
                    <h1>Data in Rest Vs Data in Transit</h1>
                </div>
                <div className="cryptalogue-tips-data">
                    <div className="first-tips">
                        <h2>Data in Rest</h2>
                        <p>Data at rest is data chilling on a device like a hard drive or a database.</p>
                        <div className="encryption-methods">
                            <div className="first-encryption">
                                <h3>AES-Advanced Encryption Standard</h3>
                                <p>Known for being a solid combo of security and efficiency.</p>
                                <p>Perfect for locking down big chunks of data, files, or stuff lounging on servers/cloud storage.</p>
                            </div>
                            <div className="second-encryption">
                                <h3>Disk Encryption - e.g., BitLocker, FileVault</h3>
                                <p>Wraps up the entire storage device think hard drives in a cozy encryption blanket.</p>
                                <p>Keeps the data safe from prying eyes, even if someone swipes the whole device.</p>
                            </div>
                        </div>
                    </div>
                    <div className="second-tips">
                        <h2>Data in Transit</h2>
                        <p>Data in transit is data taking a ride between devices, like when you surf the web or send emails.</p>
                        <div className="encryption-methods">
                            <div className="first-encryption">
                                <h3>TLS - Transport Layer Security</h3>
                                <p>The SSL successor, keeping internet convos on the down-low.</p>
                                <p>Wraps up data in a secure package when your web browser talks to a website, ensuring it stays confidential and intact during online hangouts.</p>
                            </div>
                            <div className="second-encryption">
                                <h3>VPN - Virtual Private Network</h3>
                                <p>The bouncer of data, making sure it's VIP-level secure between your device and a distant server.</p>
                                <p>Handy for shielding sensitive stuff on public Wi-Fi or setting up a secret chat room between far-flung offices.</p>
                            </div>
                        </div>
                    </div>
                    <div className="return-button-container">
                        <button className='return-button' onClick={onBackButton}>Back To The Main Quest</button>
                    </div>
                </div>
            </div>
        )
    }</>
  )
}

export default CryptalogueTips