import React, { useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
// if react-icons/fi doesn't work, standard react-icons

const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
];

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-white/10 dark:bg-black/20 border-b border-white/10">
            <div className="text-2xl font-bold tracking-tighter text-accent">
                Kum<span className="text-gray-900 dark:text-white">ar.</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-sm font-medium hover:text-accent transition-colors relative group"
                    >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full"></span>
                    </a>
                ))}

                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-110 transition-transform"
                >
                    {theme === 'dark' ? <span className="text-xl">☀️</span> : <span className="text-xl">🌙</span>}
                </button>
            </nav>

            {/* Mobile Nav Toggle */}
            <div className="flex items-center gap-4 md:hidden">
                <button onClick={toggleTheme} className="p-2">
                    {theme === 'dark' ? <span>☀️</span> : <span>🌙</span>}
                </button>
                <button
                    className="p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <span>✖️</span> : <span>🍔</span>}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-16 left-0 right-0 bg-white dark:bg-[#0d1117] shadow-xl p-6 flex flex-col gap-4 md:hidden border-b border-gray-200 dark:border-gray-800"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-lg font-medium hover:text-accent transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
