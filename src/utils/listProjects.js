import eliseum from '../assets/image-pages/vtes-portada.png';

import angular from '../assets/icons/angular-icon.png';
import docker from '../assets/icons/docker-icon.png';
import git from '../assets/icons/git-icon.png';
import github from '../assets/icons/github-icon.png';
import mongo from '../assets/icons/mongo-icon.png';
import express from '../assets/icons/express.png';




const projectList = [
    {
        src: eliseum,
        alt: 'Proyecto Final de Ciclo',
        description:'Proyecto Final de CICLO de DESARROLLO DE APLICACIONES WEB',
        icons: {
            angular: angular,
            express: express,
            docker: docker,
            git: git,
            github: github,
            mongo: mongo
        },
        url: 'https://front-vtes.vercel.app/'
    }
]

export default projectList;