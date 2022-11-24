import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Quotes from './components/Quotes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:slug" element={<Quotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
