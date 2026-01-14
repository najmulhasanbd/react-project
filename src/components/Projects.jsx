import React from 'react';
import SectionTitle from './SectionTitle';
import { projectData } from '../data/projects';

const Projects = () => {
    return (
        <section className="ep-project-section pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto text-center">
                        <SectionTitle 
                            title="latest projects" 
                            subtitle="Tech Solutions for a Connected World" 
                        />
                    </div>
                </div>

                <div className="row g-4 mt-5">
                    {/* কলাম ১ */}
                    <div className="col-lg-6">
                        {projectData.filter(p => p.column === 1).map((project) => (
                            <div key={project.id} className="project-item position-relative mb-4">
                                <div className="img overflow-hidden rounded-20">
                                    <a href={`/project-details/${project.id}`} className="d-block w-100">
                                        <img 
                                            src={project.image} 
                                            alt={project.title} 
                                            className="img-fluid w-100 object-fit-cover" 
                                            style={{ minHeight: '400px' }} 
                                        />
                                    </a>
                                </div>
                                <div className="overlay position-absolute bottom-0 start-0 p-4 w-100">
                                    <div className="text bg-white p-4 rounded-20 shadow-sm">
                                        <p className="mb-1 text-primary small text-uppercase fw-bold">{project.category}</p>
                                        <h4 className="title mb-0">
                                            <a href={`/project-details/${project.id}`} className="text-dark text-decoration-none">
                                                {project.title}
                                            </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* কলাম ২ */}
                    <div className="col-lg-6">
                        {projectData.filter(p => p.column === 2).map((project) => (
                            <div key={project.id} className="project-item position-relative mb-4">
                                <div className="img overflow-hidden rounded-20">
                                    <a href={`/project-details/${project.id}`} className="d-block w-100">
                                        <img 
                                            src={project.image} 
                                            alt={project.title} 
                                            className="img-fluid w-100 object-fit-cover" 
                                            style={{ minHeight: '400px' }} 
                                        />
                                    </a>
                                </div>
                                <div className="overlay position-absolute bottom-0 start-0 p-4 w-100">
                                    <div className="text bg-white p-4 rounded-20 shadow-sm">
                                        <p className="mb-1 text-primary small text-uppercase fw-bold">{project.category}</p>
                                        <h4 className="title mb-0">
                                            <a href={`/project-details/${project.id}`} className="text-dark text-decoration-none">
                                                {project.title}
                                            </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;