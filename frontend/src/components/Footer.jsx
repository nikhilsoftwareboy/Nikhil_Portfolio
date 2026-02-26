import React from 'react';
import { config } from '../config';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
            <div className="container mx-auto flex flex-col items-center justify-center gap-4">
                <div className="flex items-center gap-6">
                    {Object.entries(config.socials).map(([name, url]) => (
                        <a
                            key={name}
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-accent uppercase tracking-wider transition-colors"
                        >
                            {name}
                        </a>
                    ))}
                </div>
                <p>© {new Date().getFullYear()} Kumar. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
