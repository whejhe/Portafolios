import React from 'react';
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
                <li className='link-nav'><a href="/">{t('inicio')}</a></li>
                <li className='link-nav'><a href="/about">{t('sobre-mi')}</a></li>
                <li className='link-nav'><a href="/projects">{t('proyectos')}</a></li>
                <li className='link-nav'><a href="/skills">{t('habilidades')}</a></li>
                <li className='link-nav'><a href="/contact">{t('contacto')}</a></li>
            </ul>
            <div className='translate'
                onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}>
                <img src={i18n.language === 'es' ? spanishFlag : englishFlag} alt="" />
            </div>
            <h1>CFG.</h1>
        </nav>
    );
}

