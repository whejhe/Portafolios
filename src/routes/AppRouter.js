import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home.js';
import About from '../pages/About.js';
import Projects from '../pages/Projects.js';
import Skills from '../pages/Skills.js';
import Contact from '../pages/Contact.js';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}
