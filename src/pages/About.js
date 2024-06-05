import React from 'react';
import Navbar from '../components/layout/Navbar.js';
import { useTranslation } from "react-i18next";

function About() {
    const { t } = useTranslation();
    return (
        <div className='about-container'>
            <Navbar />
            <div className='space'></div>
            <main className="min-h-screen flex flex-col items-center justify-center p-4">
                <div className='container-main'>
                    <h2 className="text-3xl font-bold mb-4">{t("sobre-mi")}</h2>
                    <p className="text-lg mb-4">
                        {t("sobre-mi-parrafo")}
                    </p>
                    <h3 className="text-2xl font-bold mb-4">{t("title")}</h3>
                    <ul className="ml-8 list-title">
                        <li className='item-formacion'>{t("grado-sup")}</li>
                        <li className='item-formacion'>{t("grado-medio")}</li>
                        <li className='item-formacion'>{t("fpe-web")}</li>
                        <li className='item-formacion'>{t("fpe-solar")}</li>
                    </ul>
                </div>
            </main>
            <div className='space'></div>
        </div>
    );
}

export default About;
