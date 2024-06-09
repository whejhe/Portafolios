// src\components\common\ListStaticProject.jsx
import React from 'react';
import TarjetaProjectos from './CardProjects.jsx';
import staticProject from '../../utils/staticProjectsList.js'; // Ajusta la ruta según tu estructura de carpetas

const listStaticProject = () => {
    return (
        <div className="project-list">
            {staticProject.map((project, index) => (
                <TarjetaProjectos key={index} project={project} />
            ))}
        </div>
    );
};

export default listStaticProject;