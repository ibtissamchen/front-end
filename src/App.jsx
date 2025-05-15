// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import EspaceTravail from './pages/EspaceTravail';
import Fichiers from './pages/Fichiers';
import Partage from './pages/Partage';
import Utilisateurs from './pages/Utilisateurs';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/espaces" element={<EspaceTravail />} />
        <Route path="/fichiers" element={<Fichiers />} />
        <Route path="/partage" element={<Partage />} />
        <Route path="/utilisateurs" element={<Utilisateurs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

