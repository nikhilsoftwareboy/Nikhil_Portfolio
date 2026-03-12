import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { config } from '../config';

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <section id="projects" className="py-24 px-6 md:px-12 bg-white dark:bg-[#0a0d14] text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Projects<span className="text-accent">.</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col gap-12">
                    {config.projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            className="group relative flex flex-col md:flex-row items-center gap-8 rounded-2xl overflow-hidden"
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {/* Image Container */}
                            <div className="w-full md:w-1/2 h-64 md:h-96 overflow-hidden rounded-2xl shadow-xl relative dark:shadow-none dark:border dark:border-gray-800">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover origin-center"
                                    animate={{ scale: hoveredProject === project.id ? 1.05 : 1 }}
                                    transition={{ duration: 0.4 }}
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300 pointer-events-none" />
                            </div>

                            {/* Info Container */}
                            <div className="w-full md:w-1/2 flex flex-col justify-center px-4 z-10">
                                <h3 className="text-3xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex items-center gap-6 font-semibold flex-wrap pointer-events-auto">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 hover:text-accent transition-colors duration-300 underline underline-offset-4"
                                        >
                                            GitHub Repository
                                        </a>
                                    )}
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 hover:text-accent transition-colors duration-300 underline underline-offset-4"
                                        >
                                            Live Demo
                                            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Download Resume Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-20 flex justify-center"
                >
                    <a
                        href="/resume.pdf"
                        download="Nikhil_Kumar_Singh_Resume.pdf"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-bold text-lg rounded-full shadow-[0_0_20px_rgba(0,220,130,0.3)] hover:shadow-[0_0_30px_rgba(0,220,130,0.6)] hover:-translate-y-1 transition-all duration-300"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                        </svg>
                        Download My Resume
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
