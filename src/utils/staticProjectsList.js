// src/utils/staticProjectsList.js
import apuntesJava from '../assets/image-pages/Portada-Apuntes-Java.png';
import tiendaInformatica from '../assets/image-pages/Portada-Tienda-informatica.png';
import utilidades from '../assets/image-pages/Utilidades.png';
import WebJavaScript from '../assets/image-pages/WebJavaScript.png';
import wallpaper from '../assets/image-pages/wallpaper.png';
import pokemon from '../assets/image-pages/pokemon.png';

import htmlIcon from '../assets/icons/html-icon.png';
import cssIcon from '../assets/icons/css-icon.png';
import javascriptIcon from '../assets/icons/javascrit-icon.png';

const staticProject = [
    {
        src: apuntesJava,
        alt: 'Portada-Apuntes-Java',
        description:'Trabajo de clase de 1º DAW',
        icons: {
            html: htmlIcon,
            css: cssIcon,
            javascript: javascriptIcon
        },
        url: 'https://whejhe.github.io/ApuntesJava/index.html'
    },
    {
        src: tiendaInformatica,
        alt: 'Portada-Tienda-informatica',
        description:'Trabajo de Clase en el Grado medio de MicroInformatica y Redes',
        icons: {
            html: htmlIcon,
            css: cssIcon,
            javascript: javascriptIcon
        },
        url: 'https://whejhe.github.io/Tienda%20Informatica/index.html'
    },
    {
        src: utilidades,
        alt: 'Utilidades',
        description:'Conjunto de Utilidades para diseños de componentes',
        icons: {
            html: htmlIcon,
            css: cssIcon,
            javascript: javascriptIcon
        },
        url: 'https://whejhe.github.io/Utilidades/index.html'
    },
    {
        src: WebJavaScript,
        alt: 'WebJavaScript',
        description:'Practica de Clase de 2º DAW',
        icons: {
            html: htmlIcon,
            css: cssIcon,
            javascript: javascriptIcon
        },
        url: 'https://whejhe.github.io/Web-Ejercicios-JavaScriptt/index.html'
    },
    {
        src: wallpaper,
        alt: 'wallpaper',
        description:'Practica de slider de imagenes',
        icons: {
            html: htmlIcon,
            css: cssIcon,
            javascript: javascriptIcon
        },
        url: 'https://whejhe.github.io/slider-wallpaper/index.html'
    },
    {
        src: pokemon,
        alt: 'pokemonApi',
        description:'Practica de Clase para Api de Pokemon con javascript vanilla',
        icons: {
            html: htmlIcon,
            css: cssIcon,
            javascript: javascriptIcon
        },
        url: 'https://whejhe.github.io/Pokemon/index.html'
    }
];



export default staticProject;
