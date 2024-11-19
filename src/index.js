import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.scss';
import Navigation from './componants/navigation'
import Pack from './pages/pack';
import OpenPack from './pages/openPack'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route element={<Pack />} path={'/pack'} />
        <Route element={<OpenPack />} path={'/open-pack'} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

