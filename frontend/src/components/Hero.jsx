import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { config } from '../config';

// We'll lazy load or import the 3D scene later
const Scene = React.lazy(() => import('./Scene'));

const Hero = () => {
    return (
        <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Suspense fallback={<div className="w-full h-full bg-darkMain animate-pulse" />}>
                    <Scene />
                </Suspense>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 flex flex-col items-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
                >
                    {config.hero.title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
                >
                    {config.hero.subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <a
                        href="#projects"
                        className="px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black font-semibold hover:scale-105 transition-transform"
                    >
                        View Projects
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-gray-400 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
