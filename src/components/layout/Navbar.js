import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="p-4 text-white">
            <ul className="flex space-x-4">
                <li><Link to="/">INICIO</Link></li>
                <li><Link to="/about">SOBRE MÍ</Link></li>
                <li><Link to="/projects">PROYECTOS</Link></li>
                <li><Link to="/skills">HABILIDADES</Link></li>
                <li><Link to="/contact">CONTACTO</Link></li>
            </ul>
            <h1>CFG.</h1>
        </nav>
    );
}
