import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { config } from '../config';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Only initialized if pointers are fine (desktop)
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const handleMouseOver = (e) => {
            if (
                e.target.tagName.toLowerCase() === 'a' ||
                e.target.tagName.toLowerCase() === 'button' ||
                e.target.closest('a') !== null ||
                e.target.closest('button') !== null
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - config.cursor.size / 2,
            y: mousePosition.y - config.cursor.size / 2,
            width: config.cursor.size,
            height: config.cursor.size,
            backgroundColor: "transparent",
            border: `2px solid ${config.cursor.color}`,
        },
        hover: {
            x: mousePosition.x - (config.cursor.size * 1.5) / 2,
            y: mousePosition.y - (config.cursor.size * 1.5) / 2,
            width: config.cursor.size * 1.5,
            height: config.cursor.size * 1.5,
            backgroundColor: config.cursor.color + "33", // hex with alpha
            border: `2px solid ${config.cursor.color}`,
        }
    };

    if (window.matchMedia('(pointer: coarse)').matches) return null;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
                variants={variants}
                animate={isHovering ? "hover" : "default"}
                transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
                style={{
                    backgroundColor: config.cursor.color,
                    transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`
                }}
                transition={{ type: "tween", ease: "linear", duration: 0 }}
            />
        </>
    );
};

export default CustomCursor;
