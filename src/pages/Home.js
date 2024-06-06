/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Navbar from "../components/layout/Navbar.js";
import { techIcons, techUrls } from '../utils/importTechIcons.js';
import { useTranslation } from "react-i18next";

function App() {
    const { t } = useTranslation();

    return (
        <div>
            <Navbar />

            {/* HOME */}
            <div className="home-container">
            <div className='space'></div>
                <header className="flex flex-col">
                    <div className="text-container">
                        <h1 className="title">Carlos Fernández González</h1>
                        <p className="parrafo">{t("titulo-inicio")}</p>
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
                </header>
                <div className="space"></div>
            </div>

            {/* ABOUT */}
            <div className='about-container'>
                <main className="min-h-screen flex flex-col items-center justify-center p-4">
                    <div className='container-main'>
                        <h2 className="text-3xl font-bold mb-4">{t("sobre-mi")}</h2>
                        <p className="text-lg mb-4">{t("sobre-mi-parrafo")}</p>
                        <h3 className="text-2xl font-bold mb-4">{t("title")}</h3>
                        <ul className="ml-8 list-title">
                            <li className='item-formacion'>{t("grado-sup")}</li>
                            <li className='item-formacion'>{t("grado-medio")}</li>
                            <li className='item-formacion'>{t("fpe-web")}</li>
                            <li className='item-formacion'>{t("fpe-solar")}</li>
                        </ul>
                    </div>
                </main>
                <div className='space'></div>
            </div>
            
            {/* SKILLS */}
            <div className='skills-container'>
            <div className='space'></div>
            <main className="min-h-screen flex flex-col items-center justify-center p-4">
                    <h2 className="text-3xl font-bold mb-4">Habilidades Técnicas</h2>
                    <ul className="list-skills ml-8">
                        <li className='item-skills'>Lenguajes de programación: HTML, CSS, Java, JavaScript, TypeScript</li>
                        <li className='item-skills'>Herramientas de desarrollo web: Eclipse, Apache NetBean, Visual Studio Code</li>
                        <li className='item-skills'>Gestión de bases de datos: MySQL, Microsoft SQL Server, MongoDB</li>
                        <li className='item-skills'>Frameworks: Angular, Vue.js, React, Express.js</li>
                        <li className='item-skills'>Sistemas operativos: Windows, Linux</li>
                        <li className='item-skills'>Otras aplicaciones: Photoshop, docker, git, github</li>
                    </ul>
            </main>
            <div className='space'></div>
        </div>
        
        {/* PROJECTS */}
        
        
        
        </div>
    );
}

export default App;
