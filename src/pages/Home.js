import React from "react";
import Navbar from "../components/layout/Navbar.js";
import { techIcons, techUrls } from '../utils/importTechIcons.js';
import { useTranslation } from "react-i18next";

function Home() {
    const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
    return (
        <div className="home-container">
            <Navbar />
            <div className="space"></div>
            <header className="flex flex-col">
                <div className="text-container">
                    <h1 className="title">Carlos Fernández González</h1>
                    <p className="parrafo">
                        Desarrollador Web Apasionado por la Tecnología
                    </p>
                </div>
                <div className="tech-container">
                    <h2>&lt;Tech./&gt;</h2>
                    <ul className="list-tech">
                        {Object.keys(techIcons).map((icon, index) => (
                            <li key={index}>
                                <a href={techUrls[icon]} target="_blank" rel="noopener noreferrer">
                                <img className="icons-tech" src={techIcons[icon]} alt={icon.replace(/\.[^/.]+$/, "")} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
    </div>
            </header>
            <div className="space"></div>
        </div>
    );
}

export default Home;
