// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    es: {
        translation: {
            //nav
            "inicio": "INICIO",
            "sobre-mi": "SOBRE MI",
            "proyectos": "PROYECTOS",
            "habilidades": "HABILIDADES",
            "contacto": "CONTACTO",
            //inicio
            "titulo-inicio": "Desarrollador Web Apasionado por la Tecnología",
            //Projects
            "proyectos-destacados": "Proyectos Destacados",
            "paginas-estaticas": "Páginas Estaticas",
            //About me
            "sobre-mi-parrafo": "Apasionado por la tecnología, me gusta investigar para aprender y mejorar mis habilidades. Capacidad para trabajar de manera autónoma y en equipo, con una gran atención al detalle.",
            "grado-sup": "Grado Superior de Desarrollo de Aplicaciones Web - IES Sotero Hernández (Sevilla), Actualmente cursando el segundo año. Fecha de finalización prevista: 14/06/2024",
            "grado-medio": "Grado Medio de Microinformática y Redes - Ilerna, Año de graduación: 2021",
            "fpe-web":"FPE en Confección y Publicación de Páginas Web - Formación y Mantenimiento Técnico S.A., Año de finalización: 2018",
            "fpe-solar": "FPE en Montaje y Mantenimiento de Instalaciones Solares Fotovoltaicas - Centro Superior De Formación Europa-Sur S.A., Año de finalización: 2017",
            "title": "Titulación"
        }
    },
    en: {
        translation: {
            //nav
            "inicio": "HOME",
            "sobre-mi": "ABOUT ME",
            "proyectos": "PROJECTS",
            "habilidades": "SKILLS",
            "contacto": "CONTACT",
            //inicio
            "titulo-inicio": "Web Developer passionate about technology",
            //Projects
            "proyectos-destacados": "Featured Projects",
            "paginas-estaticas": "Static Pages",
            //About me
            "sobre-mi-parrafo": "I am passionate about technology, I like to research to learn and improve my skills. My ability to work autonomously and in team, with a great degree of detail.",
            "grado-sup": "Higher Degree of Web Development Applications - IES Sotero Hernández (Sevilla), Currently pursuing the second year. Graduation Date: 14/06/2024",
            "grado-medio": "Higher Degree of Microinformatics and Networks - Ilerna, Year of graduation: 2021",
            "fpe-web":"FPE in Web Design and Publication of Web Pages - Training and Maintenance Técnico S.A., Year of graduation: 2018",
            "fpe-solar": "FPE in Solar Installation and Maintenance of Photovoltaic Panels - Centers Superior De Formación Europa-Sur S.A., Year of graduation: 2017",
            "title": "Education"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "es",
        fallbackLng: 'es', 
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
