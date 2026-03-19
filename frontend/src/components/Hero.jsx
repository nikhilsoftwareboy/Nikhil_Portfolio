import React, { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { config } from '../config';
import gsap from 'gsap';

// Lazy loading the Spline component to prevent blocking the initial render
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Hero = () => {
    const [splineApp, setSplineApp] = useState(null);

    useEffect(() => {
        if (!splineApp) return;

        const kbd = splineApp.findObjectByName("keyboard");
        if (kbd) {
            // Original floating animation logic
            gsap.to(kbd.position, {
                y: kbd.position.y - 15,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            gsap.to(kbd.rotation, {
                y: kbd.rotation.y + 0.15,
                x: kbd.rotation.x + 0.05,
                duration: 3.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }
    }, [splineApp]);
    return (
        <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#0a0d14] pt-20">
            <div className="max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row items-center justify-between gap-12 z-10 h-full">

                {/* Left Content */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-20 mt-10 md:mt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-600 dark:text-gray-400">
                            Hi, I am
                        </h2>
                        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-white leading-tight">
                            {config.hero.title.replace("Hi, I'm ", "").split(' ').map((word, i, arr) => (
                                <span key={i} className="block">{word}</span>
                            ))}
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-2xl md:text-3xl font-bold text-gray-600 dark:text-gray-300 mb-10"
                    >
                        A {config.hero.subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 w-full md:w-auto"
                    >
                        <a
                            href="/resume.pdf"
                            download="Nikhil_Kumar_Singh_Resume.pdf"
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-white text-black font-bold text-lg rounded-xl shadow-lg hover:scale-105 transition-transform border border-gray-200"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                            Resume
                        </a>
                        <div className="flex gap-4">
                            <a href={config.socials.github} target="_blank" rel="noreferrer" className="flex items-center justify-center p-4 bg-gray-900 dark:bg-[#131822] text-white border border-transparent dark:border-gray-800 rounded-xl hover:bg-gray-800 dark:hover:bg-[#1e242c] transition-colors shadow-lg">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                            </a>
                            <a href={config.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center p-4 bg-gray-900 dark:bg-[#131822] text-white border border-transparent dark:border-gray-800 rounded-xl hover:bg-gray-800 dark:hover:bg-[#1e242c] transition-colors shadow-lg">
                                <svg className="w-6 h-6 text-[#0a66c2]" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" /></svg>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Right 3D Spline Scene */}
                <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh] relative z-10 flex items-center justify-center">
                    <Suspense fallback={
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    }>
                        <div className="scale-75 md:scale-100 w-[150%] md:w-[130%] h-full flex items-center justify-center transform translate-x-12 md:translate-x-24">
                            <Spline
                                scene="/skills-keyboard.spline"
                                onLoad={(app) => {
                                    // The Spline file relies on scripting to unhide the keycaps and set scale
                                    const kbd = app.findObjectByName("keyboard");
                                    if (kbd) {
                                        // Set a responsive scale adjusting to the flex container
                                        const isMobile = window.innerWidth < 768;
                                        kbd.scale.x = isMobile ? 0.3 : 0.25;
                                        kbd.scale.y = isMobile ? 0.3 : 0.25;
                                        kbd.scale.z = isMobile ? 0.3 : 0.25;
                                        kbd.position.x = 0;
                                        kbd.position.y = -50;
                                    }

                                    // Force unhide all keycaps (they are hidden by default in the .spline file)
                                    const allObjects = app.getAllObjects();
                                    const keycaps = allObjects.filter(
                                        (obj) => obj.name === "keycap" || obj.name === "keycap-desktop" || obj.name === "keycap-mobile"
                                    );
                                    keycaps.forEach((k) => {
                                        k.visible = true;
                                    });
                                    setSplineApp(app);
                                }}
                            />
                        </div>
                    </Suspense>
                </div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
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
