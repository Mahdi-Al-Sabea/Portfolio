import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileText, Download } from 'lucide-react';

const ContactPage = () => {
    // Function to handle resume download
    const handleDownloadResume = () => {
        // Assuming resume.pdf is in the public folder
        const resumeUrl = '/resume.pdf';
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Mahdi_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const contactMethods = [
        {
            icon: <Mail size={24} />,
            label: 'Email',
            value: 'mahdi@example.com',
            href: 'mailto:mahdi@example.com',
            color: 'text-blue-400'
        },
        {
            icon: <Linkedin size={24} />,
            label: 'LinkedIn',
            value: 'linkedin.com/in/mahdi',
            href: 'https://linkedin.com',
            color: 'text-blue-600'
        },
        {
            icon: <Github size={24} />,
            label: 'GitHub',
            value: 'github.com/mahdi',
            href: 'https://github.com',
            color: 'text-gray-200'
        }
    ];

    return (
        <div className="max-w-4xl mx-auto space-y-12">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-4"
            >
                <h1 className="text-4xl font-bold text-text">Get in Touch</h1>
                <p className="text-text-secondary text-lg">
                    Interested in working together? Feel free to reach out to me directly.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Contact info cards */}
                <div className="space-y-4">
                    {contactMethods.map((method, index) => (
                        <motion.a
                            key={method.label}
                            href={method.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-4 p-4 rounded-xl glass bg-surface/30 hover:bg-surface/50 border border-white/5 transition-all group"
                        >
                            <div className={`p-3 rounded-full bg-white/5 group-hover:bg-primary/20 transition-colors ${method.color}`}>
                                {method.icon}
                            </div>
                            <div>
                                <h3 className="text-sm text-text-secondary font-medium">{method.label}</h3>
                                <p className="text-text font-semibold">{method.value}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Resume Section */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20 flex flex-col items-center justify-center text-center space-y-6"
                >
                    <div className="p-4 rounded-full bg-primary/20 text-primary mb-2">
                        <FileText size={40} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-text">My Resume</h2>
                        <p className="text-text-secondary mt-2">Download my resume to see my full work history and skills.</p>
                    </div>
                    <button
                        onClick={handleDownloadResume}
                        className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
                    >
                        <Download size={20} />
                        Download CV
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage;
