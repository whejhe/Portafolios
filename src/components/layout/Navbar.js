import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import englishFlag from '../../assets/others/english.png';
import spanishFlag from '../../assets/others/spanish.png';

export default function Navbar() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
    return (
        <nav className="p-4 text-white nav-layout">
            <ul className="flex space-x-4 ul-nav">
            <li className='link-nav'><Link to="/">{t('inicio')}</Link></li>
                <li className='link-nav'><Link to="/about">{t('sobre-mi')}</Link></li>
                <li className='link-nav'><Link to="/projects">{t('proyectos')}</Link></li>
                <li className='link-nav'><Link to="/skills">{t('habilidades')}</Link></li>
                <li className='link-nav'><Link to="/contact">{t('contacto')}</Link></li>
            </ul>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('es')}>Español</button>
            <h1>CFG.</h1>
        </nav>
    );
}
