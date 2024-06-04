// src/pages/Projects.js
import React from 'react';
import Navbar from '../components/layout/Navbar.js';
import staticProject from '../utils/staticProjectsList.js';
import projectList from '../utils/listProjects.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import otherIcons from '../utils/importOthersImages.js';
import { useTranslation } from "react-i18next";


function Projects() {
    const { t } = useTranslation();
    return (
        <div>
            <Navbar />
            <div className='space'></div>
            <main className="min-h-screen flex flex-col items-center justify-center p-4 container-projects">
                <h2 className="text-3xl font-bold mb-4">{t('proyectos-destacados')}</h2>
                <div className="swiper-container">
                    <img className='button-slider' src={otherIcons['prev.png']} alt='prev'></img>                    
                    <Swiper
                        className='list-projects'
                        spaceBetween={10}
                        slidesPerView={2}
                        navigation={true}
                    >
                        {projectList.map((project, index) => (
                            <SwiperSlide className='item-project' key={index}>
                                <div className='article'>
                                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                                        <img className="images-projects" src={project.src} alt={project.alt} />
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <img className='button-slider' src={otherIcons['next.png']} alt='next'></img>                
                    </div>
                <h3 className="text-2xl font-bold mt-8 mb-4">{t('paginas-estaticas')}</h3>

                <div className="swiper-container">
                    <img className='button-slider' src={otherIcons['prev.png']} alt='prev'></img>                    
                    <Swiper
                        className='list-projects'
                        spaceBetween={10}
                        // slidesPerView={3}
                        navigation={true}
                        breakpoints={{
                            320:{slidesPerView: 1},
                            740:{slidesPerView: 2},
                            768:{slidesPerView: 3},
                            1024:{slidesPerView: 3},
                        }}
                    >
                        {staticProject.map((project, index) => (
                            <SwiperSlide className='item-project' key={index}>
                                <div className='article'>
                                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                                        <img className="images-projects" src={project.src} alt={project.alt} />
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <img className='button-slider' src={otherIcons['next.png']} alt='next'></img>                
                    </div>
            </main>
            <div className='space'></div>
        </div>
    );
}

export default Projects;
