import React from 'react';
import Navbar from '../components/layout/Navbar.js';
import Footer from '../components/layout/Footer.js';
import AboutSection from '../components/sections/AboutSection.js';
import ProjectsSection from '../components/sections/ProjectsSection.js';
import SkillsSection from '../components/sections/SkillsSection.js';
import ContactSection from '../components/sections/ContactSection.js';

function Home() {
    return (
        <div>
            <Navbar />
            <header className="bg-blue-500 min-h-screen flex flex-col items-center justify-center text-white">
                <h1 className="text-5xl font-bold">¡Bienvenido a mi Portafolio!</h1>
                <p className="mt-4 text-xl">Desarrollado con React y Tailwind CSS</p>
            </header>
            <main>
                <AboutSection />
                <ProjectsSection />
                <SkillsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}

export default Home;
