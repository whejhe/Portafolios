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
