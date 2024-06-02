import React from "react";
import Navbar from "../components/layout/Navbar.js";
import techIcons from "../utils/importTechIcons.js";

function Home() {
    return (
        <div className="home-container">
            <Navbar />
            <div className="space"></div>
            <header className="flex flex-col">
                <div className="text-container">
                    <h1 className="title">Carlos Fernández González</h1>
                    <p className="parrafo">
                        Desarrollador Web Apasionado por la Tecnología
                    </p>
                </div>
                <div className="tech-container">
                    <h2>Tech.</h2>
                    <ul className="list-tech">
                        {Object.keys(techIcons).map((icon, index) => (
                            <li key={index}>
                                <img className="icons-tech" src={techIcons[icon]} alt={icon.replace(/\.[^/.]+$/, "")} />
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
            <div className="space"></div>
        </div>
    );
}

export default Home;
