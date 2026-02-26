import React from 'react';
import { motion } from 'framer-motion';
import { config } from '../config';

const About = () => {
    return (
        <section id="about" className="py-24 px-6 md:px-12 bg-white dark:bg-darkMain relative z-10 transition-colors duration-300">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">

                {/* Bio */}
                <div className="w-full md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            {config.about.title}
                            <span className="text-accent">.</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            {config.about.bio}
                        </p>
                    </motion.div>
                </div>

                {/* Skills */}
                <div className="w-full md:w-1/2 flex flex-col gap-6">
                    {config.about.skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flex justify-between mb-2">
                                <span className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</span>
                                <span className="text-gray-500">{skill.level}%</span>
                            </div>
                            <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-accent rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>

            {/* Achievements & Certificates */}
            <div className="max-w-6xl mx-auto mt-20 flex flex-col md:flex-row gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-1/2 p-6 bg-gray-50 dark:bg-darkCard rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm"
                >
                    <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Achievements & Badges</h3>
                    <ul className="space-y-4">
                        {config.about.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="text-accent text-xl mt-1">★</span>
                                <span className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{achievement}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full md:w-1/2 p-6 bg-gray-50 dark:bg-darkCard rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm"
                >
                    <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Certificates</h3>
                    <ul className="space-y-4">
                        {config.about.certificates.map((cert, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="text-accent text-xl mt-1">📜</span>
                                <span className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{cert.title}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
