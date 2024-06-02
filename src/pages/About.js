import React from 'react';
import Navbar from '../components/layout/Navbar.js';

function About() {
    return (
        <div className='about-container'>
            <Navbar />
            <div className='space'></div>
            <main className="min-h-screen flex flex-col items-center justify-center p-4">
                <div className='container-main'>
                    <h2 className="text-3xl font-bold mb-4">Sobre Mí</h2>
                    <p className="text-lg mb-4">Apasionado por el desarrollo web y la tecnología, experiencia en la creación y mantenimiento de sitios web, así como en la resolución de problemas técnicos. Capacidad para trabajar de manera autónoma y en equipo, con una gran atención al detalle y orientación hacia los resultados.</p>
                    <h3 className="text-2xl font-bold mb-4">Titulación</h3>
                    <ul className="ml-8 list-title">
                        <li className='item-formacion'>Grado Superior de Desarrollo de Aplicaciones Web - IES Sotero Hernández (Sevilla), Actualmente cursando el segundo año. Fecha de finalización prevista: 14/06/2024</li>
                        <li className='item-formacion'>Grado Medio de Microinformática y Redes - Ilerna, Año de graduación: 2021</li>
                        <li className='item-formacion'>FPE en Confección y Publicación de Páginas Web - Formación y Mantenimiento Técnico S.A., Año de finalización: 2018</li>
                        <li className='item-formacion'>FPE en Montaje y Mantenimiento de Instalaciones Solares Fotovoltaicas - Centro Superior De Formación Europa-Sur S.A., Año de finalización: 2017</li>
                    </ul>
                </div>
            </main>
            <div className='space'></div>
        </div>
    );
}

export default About;
