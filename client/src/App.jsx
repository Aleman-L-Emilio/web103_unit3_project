import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Locations from './pages/Locations';
import LocationDetail from './pages/LocationDetail';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="main-header">
        <h1>UnityGrid Plaza</h1>
        <nav className="header-buttons">
          <Link to="/" role="button">Home</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Locations />} />
          <Route path="/locations/:id" element={<LocationDetail />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;