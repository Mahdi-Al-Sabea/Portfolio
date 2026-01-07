import React, { useState } from 'react';
import Carousel from './Carousel';
import { ExternalLink, Github, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ project }) => {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface/50 border border-white/5 rounded-2xl overflow-hidden glass hover:border-primary/30 transition-colors"
        >
            <div className="p-4 sm:p-6 space-y-6">
                {/* Media Section */}
                <div className="space-y-4">
                    {project.videoUrl ? (
                        <div className="space-y-2">
                            <div className="flex justify-center gap-4 text-sm mb-2">
                                <button
                                    onClick={() => setShowVideo(false)}
                                    className={`px-3 py-1 rounded-full transition-colors ${!showVideo ? 'bg-primary text-white' : 'bg-white/10 hover:bg-white/20'}`}
                                >
                                    Screenshots
                                </button>
                                <button
                                    onClick={() => setShowVideo(true)}
                                    className={`flex items-center gap-1 px-3 py-1 rounded-full transition-colors ${showVideo ? 'bg-primary text-white' : 'bg-white/10 hover:bg-white/20'}`}
                                >
                                    <Play size={14} /> Demo
                                </button>
                            </div>

                            <AnimatePresence mode="wait">
                                {showVideo ? (
                                    <motion.div
                                        key="video"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="aspect-video w-full rounded-xl overflow-hidden border border-white/5 bg-black"
                                    >
                                        <iframe
                                            src={project.videoUrl}
                                            title={project.title}
                                            className="w-full h-full"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="carousel"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <Carousel images={project.images} />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </div>
                    ) : (
                        <Carousel images={project.images} />
                    )}
                </div>

                {/* Content Section */}
                <div className="space-y-4">
                    <div>
                        <h3 className="text-2xl font-bold text-text mb-2">{project.title}</h3>
                        <p className="text-text-secondary leading-relaxed whitespace-pre-line">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-text hover:text-primary transition-colors"
                            >
                                <Github size={20} />
                                <span>Source Code</span>
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-text hover:text-primary transition-colors"
                            >
                                <ExternalLink size={20} />
                                <span>Live Demo</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
