import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <div className="space-y-12">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-4"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-text bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                    My Projects
                </h1>
                <p className="text-text-secondary max-w-2xl mx-auto text-lg">
                    Here is a selection of my recent work, showcasing my technical skills and creative solutions.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
