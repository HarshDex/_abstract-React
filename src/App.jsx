import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import PassSafe from './levels/passSafe/pages/PassSafe'
import DataBreach from './levels/dataBreach/Pages/DataBreach';
import DecentralisedIdentifiers from './levels/decentralisedIdentifiers/pages/DecentralisedIdentifiers';
import FinancialVigilance from './levels/financialVigilance/pages/FinancialVigilance';
import FishGuardian from './levels/FishGuardian/pages/FishGuardian';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="passSafe" element={<PassSafe/>} />
      <Route path="dataBreach" element={<DataBreach/>} />
      <Route path='decentralisedIdentifiers' element = {<DecentralisedIdentifiers/>}/>
      <Route path='financialVigilance' element = {<FinancialVigilance/>}/>
      <Route path='fishGuardian' element={<FishGuardian/>}/>
      <Route path="*" element={<>nowhere to go</>} />
    </Routes>
  );
};

export default App;
