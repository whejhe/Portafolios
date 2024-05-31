import React from 'react';
import Navbar from '../components/layout/Navbar.js';
import Footer from '../components/layout/Footer.js';

function About() {
    return (
        <div>
            <Navbar />
            <main className="min-h-screen flex flex-col items-center justify-center p-4">
                <h1 className="text-4xl font-bold mb-4">Sobre mí</h1>
                <p className="text-lg max-w-prose text-center">
                    Soy un desarrollador web con experiencia en React y Tailwind CSS. Me apasiona crear aplicaciones web modernas y eficientes.
                </p>
            </main>
            <Footer />
        </div>
    );
}

export default About;
