import React from 'react';
import { motion } from 'framer-motion';
import { config } from '../config';

const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6 md:px-12 bg-gray-50 dark:bg-darkCard transition-colors duration-300 relative z-10">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Education & Experience<span className="text-accent">.</span>
                    </h2>
                </motion.div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 dark:before:via-gray-700 before:to-transparent">
                    {config.experience.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
                        >
                            {/* Timeline Dot */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-darkMain bg-accent text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10" />

                            {/* Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-[#1e242c] shadow-md border border-gray-100 dark:border-gray-800 group-hover:border-accent/50 transition-colors">
                                <div className="flex flex-col mb-2">
                                    <span className="text-accent font-bold text-sm tracking-widest mb-3">{item.year}</span>

                                    <div className="flex items-center gap-4">
                                        {/* Institution Logo */}
                                        {item.logo && (
                                            <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden bg-white shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center">
                                                <img
                                                    src={item.logo}
                                                    alt={`${item.company} logo`}
                                                    className="w-full h-full object-contain p-1"
                                                />
                                            </div>
                                        )}

                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.role}</h3>
                                            <h4 className="text-md text-gray-500 dark:text-gray-400 font-medium">{item.company}</h4>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
