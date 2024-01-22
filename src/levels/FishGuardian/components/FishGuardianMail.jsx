import React from 'react'
import './FishGuardianMail.css'
import { useSelector } from 'react-redux'
import mailBackground from '../../../assets/2akfljaf.jpg'
const FishGuardianMail = () => {
    const fishGuardianData = useSelector((state)=>state.FishGuardian[0]);
    console.log(fishGuardianData)
  return (
    <div className="fish-guardian-mail-container">
        <div className="fish-guardian-mail">
            <div className="fish-guardian-mail-text">
                
            </div>
        </div>
    </div>
  )
}

export default FishGuardianMail 