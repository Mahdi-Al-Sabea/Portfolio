import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from '../components/ExperienceCard';
import experienceData from '../data/experience.json';

const Experience = () => {
    const sortedExperience = experienceData;

    return (
        <div className="space-y-12">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-4"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-text bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                    Professional Experience
                </h1>
                <p className="text-text-secondary max-w-2xl mx-auto text-lg">
                    My journey in the tech industry, including internships and professional roles.
                </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6 relative">
                {/* Vertical Line for Timeline effect (Visible on Desktop) */}
                <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/10 to-transparent" />

                {sortedExperience.map((exp, index) => (
                    <ExperienceCard key={exp.id} experience={exp} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Experience;
