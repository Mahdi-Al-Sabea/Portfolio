import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-8">

            {/* Profile Image (Placeholder) */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="relative"
            >
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-2xl shadow-primary/20">
                    {/* Replace with actual image via 'generate_image' or user asset */}
                    <img
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=300&auto=format&fit=crop"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
            </motion.div>

            {/* Introduction */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4 max-w-3xl"
            >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                    Hi, I'm <span className="text-primary">Mahdi</span>
                </h1>
                <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
                    A passionate <span className="text-text font-semibold">Full Stack Developer</span> building premium web experiences with modern technologies.
                </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
            >
                <Link
                    to="/projects"
                    className="group flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
                >
                    View Work
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                    to="/contact"
                    className="flex items-center gap-2 bg-surface text-text px-8 py-3 rounded-full font-medium border border-white/5 hover:bg-white/5 transition-all hover:scale-105 active:scale-95"
                >
                    Contact Me
                </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-6 pt-8 text-text-secondary"
            >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-110 transform duration-200">
                    <Github size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-110 transform duration-200">
                    <Linkedin size={24} />
                </a>
                <a href="mailto:email@example.com" className="hover:text-primary transition-colors hover:scale-110 transform duration-200">
                    <Mail size={24} />
                </a>
            </motion.div>

        </div>
    );
};

export default Home;
