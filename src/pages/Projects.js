import React from 'react';
import Navbar from '../components/layout/Navbar.js';
import Footer from '../components/layout/Footer.js';

function Projects() {
    return (
        <div>
            <Navbar />
            <main className="min-h-screen flex flex-col items-center justify-center p-4">
            <h2 className="text-3xl font-bold mb-4">Proyectos Destacados</h2>
                    <ul className="list-disc ml-8">
                        <li><a href="https://github.com/whejhe/Proyecto-Angular" className="text-blue-500">Proyecto Angular</a></li>
                        <li><a href="https://github.com/whejhe/Proyecto-Vue" className="text-blue-500">Proyecto Vue</a></li>
                    </ul>
                    <h3 className="text-2xl font-bold mt-8 mb-4">Páginas de Muestra</h3>
                    <ul className="list-disc ml-8">
                        <li><a href="https://whejhe.github.io" className="text-blue-500">Mi Página de Muestra</a></li>
                    </ul>
            </main>
            <Footer />
        </div>
    );
}

export default Projects;
