import React from 'react';

function ContactSection() {
    return (
        <section className="p-8">
            <h2 className="text-3xl font-bold mb-4">Contacto</h2>
            <form className="flex flex-col items-center">
                <input type="text" placeholder="Nombre" className="mb-2 p-2 border border-gray-300 rounded" />
                <input type="email" placeholder="Email" className="mb-2 p-2 border border-gray-300 rounded" />
                <textarea placeholder="Mensaje" className="mb-2 p-2 border border-gray-300 rounded" rows="4"></textarea>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Enviar</button>
            </form>
        </section>
    );
}

export default ContactSection;
