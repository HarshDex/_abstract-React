import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import PassSafe from './levels/passSafe/pages/PassSafe'
import DataBreach from './levels/dataBreach/DataBreach';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      {/* Nested Routes */}
      <Route path="passSafe" element={<PassSafe/>} />
      <Route path="dataBreach" element={<DataBreach/>} />
      {/* Fallback for unmatched routes */}
      <Route path="*" element={<>nowhere to go</>} />
    </Routes>
  );
};

export default App;
