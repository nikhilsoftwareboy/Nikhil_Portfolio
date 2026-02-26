import React, { createContext, useContext, useEffect, useState } from 'react';
import { config } from './config';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        localStorage.getItem('portfolio-theme') || config.defaultTheme
    );

    useEffect(() => {
        const root = document.documentElement;
        // Remove previous theme class
        root.classList.remove('theme-light', 'theme-dark', 'light', 'dark');

        // Add current theme class
        if (theme === 'dark') {
            root.classList.add('dark', 'theme-dark');
        } else {
            root.classList.add('light', 'theme-light');
        }

        localStorage.setItem('portfolio-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
