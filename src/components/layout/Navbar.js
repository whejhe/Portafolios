import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="p-4 text-white nav-layout">
            <ul className="flex space-x-4 ul-nav">
                <li className='link-nav'><Link to="/">INICIO</Link></li>
                <li className='link-nav'><Link to="/about">SOBRE MÍ</Link></li>
                <li className='link-nav'><Link to="/projects">PROYECTOS</Link></li>
                <li className='link-nav'><Link to="/skills">HABILIDADES</Link></li>
                <li className='link-nav'><Link to="/contact">CONTACTO</Link></li>
            </ul>
            <h1>CFG.</h1>
        </nav>
    );
}
