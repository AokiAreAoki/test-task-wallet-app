import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TransactionsList } from './pages/TransactionsList';
import { TransactionDetail } from './pages/TransactionDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TransactionsList />} />
        <Route path="/transaction/:id" element={<TransactionDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
