// src\components\common\ListOfProjects.jsx
import React from 'react';
import TarjetaProjectos from './CardProjects.jsx';
import Projects from '../../utils/listProjects.js'; // Ajusta la ruta según tu estructura de carpetas

const listOfProjects = () => {
    return (
        <div className="project-list">
            {Projects.map((project, index) => (
                <TarjetaProjectos key={index} project={project} />
            ))}
        </div>
    );
};

export default listOfProjects;