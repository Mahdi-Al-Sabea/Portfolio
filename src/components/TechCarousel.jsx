import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2,
    Database,
    Globe,
    Server,
    Layout,
    Smartphone,
    Terminal,
    Cpu,
    Cloud
} from 'lucide-react';

const technologies = [
    { name: 'React', icon: <Code2 /> },
    { name: 'Node.js', icon: <Server /> },
    { name: 'React Native', icon: <Smartphone /> },
    { name: 'Tailwind CSS', icon: <Layout /> },
    { name: 'JavaScript', icon: <Terminal /> },
    { name: '.NET', icon: <Server /> },
    { name: 'PostgreSQL', icon: <Database /> },
    { name: 'MongoDB', icon: <Database /> },
    { name: 'TypeScript', icon: <Code2 /> },
    { name: 'AWS', icon: <Cloud /> },
    { name: 'Docker', icon: <Cpu /> },
    { name: 'Git', icon: <Terminal /> },



];

const TechCarousel = () => {
    // Duplicate array for seamless infinite scroll
    const duplicatedTech = [...technologies, ...technologies];

    return (
        <div className="w-full relative overflow-hidden py-10 bg-surface/20">
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

            <motion.div
                className="flex"
                animate={{
                    x: ['0%', '-140%'],
                }}
                transition={{
                    duration: 50, // Adjust speed (higher = slower)
                    ease: 'linear',
                    repeat: Infinity,
                }}
            >
                {duplicatedTech.map((tech, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 flex items-center gap-3 px-8 py-4 mx-4 rounded-xl bg-surface/50 border border-white/5 hover:border-primary/50 hover:bg-white/10 transition-colors group cursor-default"
                    >
                        <div className="text-primary group-hover:scale-110 transition-transform">
                            {tech.icon}
                        </div>
                        <span className="text-text font-medium whitespace-nowrap">{tech.name}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default TechCarousel;
