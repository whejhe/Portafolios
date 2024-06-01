import React from 'react';
import Navbar from '../components/layout/Navbar.js';
import Footer from '../components/layout/Footer.js';

function About() {
    return (
        <div>
            <Navbar />
            <main className="min-h-screen flex flex-col items-center justify-center p-4">
            <h2 className="text-3xl font-bold mb-4">Sobre Mí</h2>
                    <p className="text-lg mb-4">Apasionado por el desarrollo web y la tecnología, experiencia en la creación y mantenimiento de sitios web, así como en la resolución de problemas técnicos. Capacidad para trabajar de manera autónoma y en equipo, con una gran atención al detalle y orientación hacia los resultados.</p>
                    <h3 className="text-2xl font-bold mb-4">Educación</h3>
                    <ul className="list-disc ml-8">
                        <li>Grado Superior de Desarrollo de Aplicaciones Web - IES Sotero Hernández (Sevilla), Actualmente cursando el segundo año. Fecha de finalización prevista: 09/06/2024</li>
                        <li>Grado Medio de Microinformática y Redes - Ilerna, Año de graduación: 2021</li>
                        <li>FPE en Confección y Publicación de Páginas Web - Formación y Mantenimiento Técnico S.A., Año de finalización: 2018</li>
                        <li>FPE en Montaje y Mantenimiento de Instalaciones Solares Fotovoltaicas - Centro Superior De Formación Europa-Sur S.A., Año de finalización: 2017</li>
                    </ul>
            </main>
            <Footer />
        </div>
    );
}

export default About;
