import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Films from './pages/Films';
import Film from './components/Film';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Films />} />
        <Route path='/:id' element={<Film />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
