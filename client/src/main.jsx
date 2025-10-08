import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Locations from './pages/Locations';
import LocationDetail from './pages/LocationDetail';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Locations />} />
        <Route path="/locations/:id" element={<LocationDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);