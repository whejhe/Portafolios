import React from "react";
import Navbar from "../components/layout/Navbar.js";
// import { importTechIcons } from "../utils/importTechIcons.js";

// const techIcons = importTechIcons(require.context("../assets/tecnologias", false, /\.(png|jpe?g|svg)$/));


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
                <div className="tech">
                    <h2>Tech.</h2>
                    {/* <ul>
                        {Object.keys(techIcons).map((key, index) => (
                            <li className="tech-icons" key={index}>
                                <img src={techIcons[key]} alt={key.split(".")[0]} />
                            </li>
                        ))}
                    </ul> */}
                </div>
            </header>
            <div className="space"></div>
        </div>
    );
}

export default Home;
