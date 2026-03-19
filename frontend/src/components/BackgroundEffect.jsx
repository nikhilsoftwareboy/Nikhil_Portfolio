import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffect = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Top Right Blob */}
            <motion.div
                className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-purple-500/20 dark:bg-purple-600/10 rounded-full blur-3xl"
                animate={{
                    x: [0, 50, -20, 0],
                    y: [0, -40, 30, 0],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Bottom Left Blob */}
            <motion.div
                className="absolute bottom-[-10%] left-[-5%] w-[30rem] h-[30rem] bg-indigo-500/20 dark:bg-indigo-600/10 rounded-full blur-3xl"
                animate={{
                    x: [0, -60, 40, 0],
                    y: [0, 50, -30, 0],
                    scale: [1, 1.05, 0.95, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />

            {/* Center Right Blob (smaller) */}
            <motion.div
                className="absolute top-[40%] right-[15%] w-64 h-64 bg-accent/20 dark:bg-accent/10 rounded-full blur-3xl"
                animate={{
                    x: [0, -30, 20, 0],
                    y: [0, 40, -20, 0],
                    scale: [1, 1.2, 0.8, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5,
                }}
            />
        </div>
    );
};

export default BackgroundEffect;
