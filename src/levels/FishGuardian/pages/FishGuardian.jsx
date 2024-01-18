import React from 'react'
import { useSelector } from 'react-redux'

const FishGuardian = () => {
    const image1 = useSelector((state)=>{
        state.FishGuardian[0].emailImage
    })
  return (
    <div>
        <img src='https://github.com/HarshDex/_abstract-React/blob/b6ffc31ecf5abcaa8a53842e38790137bbc0156f/src/assets/fishGuardianImages/1.jpg' alt="" />
    </div>
  )
}

export default FishGuardian