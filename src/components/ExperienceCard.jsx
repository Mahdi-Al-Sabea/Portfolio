import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const ExperienceCard = ({ experience, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex flex-col md:flex-row gap-4 md:gap-8 bg-surface/50 p-6 md:p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all hover:bg-surface/80"
        >
            {/* Icon/Logo Column (Optional, can replace with company logo if available) */}
            <div className="flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                    <Briefcase size={24} className="md:w-8 md:h-8" />
                </div>
            </div>

            {/* Content Column */}
            <div className="flex-1 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-text">{experience.role}</h3>
                        <div className="flex items-center gap-2 text-primary font-medium">
                            <span>{experience.company}</span>
                            {experience.companyUrl && (
                                <a
                                    href={experience.companyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-text-secondary hover:text-white transition-colors"
                                >
                                    <ExternalLink size={14} />
                                </a>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-text-secondary text-sm bg-white/5 px-3 py-1 rounded-full w-fit">
                        <Calendar size={14} />
                        <span>{experience.period}</span>
                    </div>
                </div>

                <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                    {experience.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                    {experience.skills.map((skill) => (
                        <span
                            key={skill}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-surface border border-white/10 text-text-secondary"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ExperienceCard;
