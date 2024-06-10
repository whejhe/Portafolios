// src\components\common\cardProjects.jsx
import React from 'react';

const TajetaProjectos = ({ project }) => {
    return (
        <div className="project-card">
            <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer">
            <img src={project.src} alt={project.alt} className="project-image" />
            </a>
            <div className="project-content">
                <h4>{project.alt}</h4>
                <p>{project.description}</p>
                <div className="project-icons">
                    {Object.entries(project.icons).map(([key, iconSrc]) => (
                            <img key={key} src={iconSrc} alt={key} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TajetaProjectos;
