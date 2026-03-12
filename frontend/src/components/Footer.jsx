import React from 'react';
import { config } from '../config';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
            <div className="container mx-auto flex flex-col items-center justify-center gap-4">
                <p>© {new Date().getFullYear()} NiKS. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
