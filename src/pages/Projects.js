// src/pages/Projects.js
import React from 'react';
import Navbar from '../components/layout/Navbar.js';
import imagesProjects from '../utils/projectsList.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Projects() {
    return (
        <div>
            <Navbar />
            <div className='space'></div>
            <main className="min-h-screen flex flex-col items-center justify-center p-4">
                <h2 className="text-3xl font-bold mb-4">Proyectos Destacados</h2>
                <ul className="ml-8 list-projects">
                    <li><a href="https://github.com/whejhe/Proyecto-Angular" className="text-blue-500">Proyecto Angular</a></li>
                    <li><a href="https://github.com/whejhe/Proyecto-Vue" className="text-blue-500">Proyecto Vue</a></li>
                </ul>
                <h3 className="text-2xl font-bold mt-8 mb-4">Páginas Estáticas</h3>
                <div className="swiper-container">
                <button>Prev</button>
                    <Swiper
                        className='list-projects'
                        spaceBetween={10}
                        slidesPerView={2}
                        navigation={true}
                    >
                        {imagesProjects.map((project, index) => (
                            <SwiperSlide className='item-project' key={index}>
                                <div className='article'>
                                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                                        <img className="images-projects" src={project.src} alt={project.alt} />
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                <button>Next</button>
                </div>
            </main>
            <div className='space'></div>
        </div>
    );
}

export default Projects;
