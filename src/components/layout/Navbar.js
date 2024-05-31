import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-gray-800 p-4 text-white">
            <ul className="flex space-x-4">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/about">Sobre mí</Link></li>
                <li><Link to="/projects">Proyectos</Link></li>
                <li><Link to="/skills">Habilidades</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
