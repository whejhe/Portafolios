import React from 'react';
import Navbar from '../components/layout/Navbar.js';
import Footer from '../components/layout/Footer.js';

function Skills() {
    return (
        <div>
            <Navbar />
            <main className="min-h-screen flex flex-col items-center justify-center p-4">
                <h1 className="text-4xl font-bold mb-4">Habilidades</h1>
                <ul className="list-disc list-inside">
                    <li className="text-lg mb-2">React</li>
                    <li className="text-lg mb-2">Tailwind CSS</li>
                    <li className="text-lg mb-2">JavaScript</li>
                    <li className="text-lg mb-2">HTML & CSS</li>
                </ul>
            </main>
            <Footer />
        </div>
    );
}

export default Skills;
