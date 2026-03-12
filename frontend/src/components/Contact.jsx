import React from 'react';
import { motion } from 'framer-motion';
import { config } from '../config';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 md:px-12 bg-gray-50 dark:bg-darkCard transition-colors duration-300 relative z-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
                {/* Left Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-1/2 flex flex-col justify-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Let's Talk<span className="text-accent">.</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-sm">
                        Interested in working together? Drop me a line and let's craft something beautiful and highly interactive.
                    </p>
                </motion.div>

                {/* Right Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full md:w-1/2 p-8 bg-white dark:bg-[#0a0d14] rounded-2xl shadow-xl dark:shadow-none dark:border dark:border-gray-800 flex flex-col justify-center gap-6"
                >
                    <a href={config.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-6 p-6 rounded-xl bg-gray-50 dark:bg-[#131822] hover:bg-gray-100 dark:hover:bg-[#1e242c] transition-colors border border-gray-100 dark:border-gray-800 group hover:shadow-lg dark:hover:shadow-none hover:-translate-y-1 transform duration-300">
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-sm group-hover:shadow-md transition-shadow">
                            <svg className="w-8 h-8 text-gray-900 dark:text-white group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                        </div>
                        <div>
                            <p className="text-xl font-bold text-gray-900 dark:text-white">GitHub</p>
                            <p className="text-sm text-gray-500 font-medium mt-1 group-hover:text-accent transition-colors">Check out my repos</p>
                        </div>
                    </a>

                    <a href={config.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-6 p-6 rounded-xl bg-gray-50 dark:bg-[#131822] hover:bg-gray-100 dark:hover:bg-[#1e242c] transition-colors border border-gray-100 dark:border-gray-800 group hover:shadow-lg dark:hover:shadow-none hover:-translate-y-1 transform duration-300">
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-sm group-hover:shadow-md transition-shadow">
                            <svg className="w-8 h-8 text-[#0a66c2] group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" /></svg>
                        </div>
                        <div>
                            <p className="text-xl font-bold text-gray-900 dark:text-white">LinkedIn</p>
                            <p className="text-sm text-gray-500 font-medium mt-1 group-hover:text-accent transition-colors">Let's connect</p>
                        </div>
                    </a>

                    <a href={config.socials.email} className="flex items-center gap-6 p-6 rounded-xl bg-gray-50 dark:bg-[#131822] hover:bg-gray-100 dark:hover:bg-[#1e242c] transition-colors border border-gray-100 dark:border-gray-800 group hover:shadow-lg dark:hover:shadow-none hover:-translate-y-1 transform duration-300">
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-sm group-hover:shadow-md transition-shadow">
                            <svg className="w-8 h-8 text-gray-900 dark:text-white group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </div>
                        <div>
                            <p className="text-xl font-bold text-gray-900 dark:text-white">Email</p>
                            <p className="text-sm text-gray-500 font-medium mt-1 group-hover:text-accent transition-colors">Drop me a line</p>
                        </div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
