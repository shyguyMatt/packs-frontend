import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.scss';
import Navigation from './componants/navigation'
import Pack from './pages/pack';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route element={<Pack />} path={'/pack'} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

