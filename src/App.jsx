import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import PassSafe from './levels/passSafe/pages/PassSafe';
import DataBreach from './levels/dataBreach/Pages/DataBreach';
import DecentralisedIdentifiers from './levels/decentralisedIdentifiers/pages/DecentralisedIdentifiers';
import FinancialVigilance from './levels/financialVigilance/pages/FinancialVigilance';
import FishGuardian from './levels/FishGuardian/pages/FishGuardian';
import UtopianPrivacy from './levels/UtopianPrivacy/pages/UtopianPrivacy';
import SecretVault from './levels/secretVault/pages/SecretVault';
import SecretFlow from './levels/secretVault/components/SecretFlow';
import './App.css'
import Crytpalogue from './levels/cryptalogue/pages/Crytpalogue';
import CryptalogueTips from './levels/cryptalogue/pages/CryptalogueTips';
import QuantumIntrusion from './levels/quantumIntrusion/pages/QuantumIntrusion';
import QuantumIntrusionTipsAndTricks from './levels/quantumIntrusion/componenets/QuantumIntrusionTipsAndTricks';
import MysticMatrix from './levels/mysticMatrix/pages/MysticMatrix';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="passSafe" element={<PassSafe />} />
      <Route path="dataBreach" element={<DataBreach />} />
      <Route path='decentralisedIdentifiers' element={<DecentralisedIdentifiers />} />
      <Route path='financialVigilance' element={<FinancialVigilance />} />
      <Route path='fishGuardian' element={<FishGuardian />} />
      <Route path='utopianPrivacy' element={<UtopianPrivacy />} />
      <Route path='secretVault' element={<SecretVault />} />
      <Route path='secretVault/flow-of-online-services' element={<SecretFlow />} />
      <Route path='cryptalogue' element = {<Crytpalogue/>}/>
      <Route path='cryptalogue/cryptalogue-tips-and-tricks' element = {<CryptalogueTips/>}/>
      <Route path='quantumIntrusion' element = {<QuantumIntrusion/>}/>
      <Route path='quantum-intrusion/quantum-intrusion-tips-and-tricks' element = {<QuantumIntrusionTipsAndTricks/>}/>
      <Route path='mysticMatrix' element={<MysticMatrix/>}/>
      <Route path="*" element={<>nowhere to go</>} />
    </Routes>
  );
};

export default App;
