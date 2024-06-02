import React from 'react';
import Navbar from '../components/layout/Navbar.js';

function Contact() {
    return (
        <div>
            <Navbar />
            <div className='space'></div>
            <main className="min-h-screen flex flex-col items-center justify-center p-4">
            <h2 className="mb-6 title-contact">Contact Me</h2>
                <form>
                    <div className="row mb-4 container-item">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="row mb-4 container-item">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="row mb-6 container-item">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            rows="5"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <div className="row flex items-center justify-between container-item">
                        <button
                            className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </main>
            <div className='space'></div>
        </div>
    );
}

export default Contact;
