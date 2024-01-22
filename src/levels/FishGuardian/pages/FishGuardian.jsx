import React from 'react'
import laptop from '../../../assets/fishGuardianLaptop.png'
import './FishGuardian.css'
import FishGuardianMail from '../components/FishGuardianMail'
const FishGuardian = () => {
  return (
    <div className="fish-guardian">
      <div className="fish-guardian-laptop">
        <img src={laptop} alt="" />
      </div>
      <FishGuardianMail/>
    </div>
  )
}

export default FishGuardian