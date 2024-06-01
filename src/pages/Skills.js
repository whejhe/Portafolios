import React from 'react';
import Navbar from '../components/layout/Navbar.js';
import Footer from '../components/layout/Footer.js';

function Skills() {
    return (
        <div>
            <Navbar />
            <main className="min-h-screen flex flex-col items-center justify-center p-4">
            <h2 className="text-3xl font-bold mb-4">Habilidades Técnicas</h2>
                    <ul className="list-disc ml-8">
                        <li>Lenguajes de programación: HTML, CSS, Java, JavaScript, TypeScript</li>
                        <li>Herramientas de desarrollo web: Eclipse, Apache NetBean, Visual Studio Code</li>
                        <li>Gestión de bases de datos: MySQL, Microsoft SQL Server</li>
                        <li>Frameworks y librerías: Bootstrap, jQuery, Angular, Vue.js, Node.js, Express.js, Sequelize</li>
                        <li>Sistemas operativos: Windows, Linux</li>
                        <li>Redes y protocolos: TCP/IP, DNS, DHCP</li>
                        <li>Mantenimiento y resolución de problemas en hardware y software</li>
                    </ul>
            </main>
            <Footer />
        </div>
    );
}

export default Skills;
