import React from 'react'
import { Routes,Route } from 'react-router-dom'
import PassSafe from './levels/passSafe/pages/PassSafe'

const App = () => {
  return (
    <Routes>
      <Route path='/' element = {<PassSafe/>}/>
      <Route path='*' element = {<>no where to go</>}/>
    </Routes>
  )
}

export default App