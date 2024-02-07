import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from "./components/pages/Contact";
import Classes from "./components/pages/Classes"

const RoutesComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/classes" element={<Classes />} />
                <Route path="/about" element={<About />} />
                <Route path ="/contact" element={<Contact/> } />
            </Routes>
        </Router>
    );
};

export default RoutesComponent;