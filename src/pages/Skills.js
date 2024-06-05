import React from 'react';
import Navbar from '../components/layout/Navbar.js';

function Skills() {
    return (
        <div>
            <Navbar />
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
    );
}

export default Skills;
