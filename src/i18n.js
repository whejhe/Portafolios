// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "welcome": "Welcome to my portfolio",
            "description": "This is an example description."
        }
    },
    es: {
        translation: {
            "welcome": "Bienvenido a mi portafolio",
            "description": "Esta es una descripción de ejemplo."
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "es",
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
