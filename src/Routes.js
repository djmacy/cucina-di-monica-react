import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import FAQ from './components/pages/FAQ';
import Contact from "./components/pages/Contact";
import Courses from "./components/pages/Courses";

const RoutesComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path ="/contact" element={<Contact/> } />
            </Routes>
        </Router>
    );
};

export default RoutesComponent;