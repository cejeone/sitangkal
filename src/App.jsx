// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/custom.scss';
import Home from './pages/Home';
import Login from './pages/Login';
import Aplikasi from './pages/Aplikasi';
import Services from './pages/Services';
import Data from './pages/Data';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aplikasi" element={<Aplikasi />} />
                <Route path="/services" element={<Services />} />
                <Route path="/data" element={<Data />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
