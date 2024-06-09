// src\components\common\cardProjects.jsx
import React from 'react';

const TajetaProjectos = ({ project }) => {
    return (
        <div className="project-card">
            <img src={project.src} alt={project.alt} className="project-image" />
            <div className="project-content">
                <h3>{project.alt}</h3>
                <p>{project.description}</p>
                <div className="project-icons">
                    {Object.entries(project.icons).map(([icon, url]) => (
                        <a key={icon} href={url} target="_blank" rel="noopener noreferrer">
                            <img src={`../assets/icons/${icon}`} alt={icon.split('-')[0]} />
                        </a>
                    ))}
                </div>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
            </div>
        </div>
    );
};

export default TajetaProjectos;
