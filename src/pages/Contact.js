import React from 'react';
import Navbar from '../components/layout/Navbar.js';
import Footer from '../components/layout/Footer.js';

function Contact() {
    return (
        <div>
            <Navbar />
            <main className="min-h-screen flex flex-col items-center justify-center p-4">
                <h1 className="text-4xl font-bold mb-4">Contacto</h1>
                <form className="flex flex-col items-center">
                    <input type="text" placeholder="Nombre" className="mb-2 p-2 border border-gray-300 rounded" />
                    <input type="email" placeholder="Email" className="mb-2 p-2 border border-gray-300 rounded" />
                    <textarea placeholder="Mensaje" className="mb-2 p-2 border border-gray-300 rounded" rows="4"></textarea>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">Enviar</button>
                </form>
            </main>
            <Footer />
        </div>
    );
}

export default Contact;
