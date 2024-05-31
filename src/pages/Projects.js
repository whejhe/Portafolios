import React from 'react';
import Navbar from '../components/layout/Navbar.js';
import Footer from '../components/layout/Footer.js';

function Projects() {
    return (
        <div>
            <Navbar />
            <main className="min-h-screen flex flex-col items-center justify-center p-4">
                <h1 className="text-4xl font-bold mb-4">Proyectos</h1>
                <ul className="list-disc list-inside">
                    <li className="text-lg mb-2">Proyecto 1 - Descripción breve</li>
                    <li className="text-lg mb-2">Proyecto 2 - Descripción breve</li>
                    <li className="text-lg mb-2">Proyecto 3 - Descripción breve</li>
                </ul>
            </main>
            <Footer />
        </div>
    );
}

export default Projects;
