import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { io } from 'socket.io-client';
import { config } from '../config';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [onlineUsers, setOnlineUsers] = useState(0);
    const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

    useEffect(() => {
        // Connect to Flask backend websockets
        const socket = io('http://localhost:5000');

        socket.on('users_update', (data) => {
            setOnlineUsers(data.count);
        });

        return () => socket.disconnect();
    }, []);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
        setTimeout(() => setStatus(null), 3000);
    };

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
                    <div className="flex items-center gap-3 text-sm font-medium text-gray-500 bg-gray-200 dark:bg-[#1e242c] w-fit px-4 py-2 rounded-full mb-8">
                        <span className="flex h-3 w-3 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                        </span>
                        {onlineUsers} user{onlineUsers !== 1 ? 's' : ''} currently online
                    </div>
                </motion.div>

                {/* Right Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full md:w-1/2 p-8 bg-white dark:bg-[#0a0d14] rounded-2xl shadow-xl dark:shadow-none dark:border dark:border-gray-800"
                >
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:border-accent transition-colors"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:border-accent transition-colors"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:border-accent transition-colors resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="mt-2 w-full py-4 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-black font-semibold hover:bg-accent dark:hover:bg-accent hover:text-white transition-colors"
                        >
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                        {status === 'success' && <p className="text-green-500 font-medium text-center">Message sent successfully!</p>}
                        {status === 'error' && <p className="text-red-500 font-medium text-center">Failed to send message. Try again.</p>}
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
