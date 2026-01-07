import React, { useEffect, useState } from 'react';
import { Palette } from 'lucide-react';

const themes = [
    { name: 'default', color: '#8b5cf6', label: 'Violet' },
    { name: 'green', color: '#10b981', label: 'Emerald' },
    { name: 'red', color: '#ef4444', label: 'Rose' },
    { name: 'light', color: '#6366f1', label: 'Light' },
];

const ThemeSwitcher = () => {
    const [currentTheme, setCurrentTheme] = useState('default');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'default';
        setCurrentTheme(savedTheme);
        applyTheme(savedTheme);
    }, []);

    const applyTheme = (themeName) => {
        const root = document.documentElement;
        // Remove all theme attributes first to be safe, though setAttribute replaces.
        if (themeName === 'default') {
            root.removeAttribute('data-theme');
        } else {
            root.setAttribute('data-theme', themeName);
        }
    };

    const handleThemeChange = (themeName) => {
        setCurrentTheme(themeName);
        localStorage.setItem('theme', themeName);
        applyTheme(themeName);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full hover:bg-surface transition-colors duration-200 text-text active:scale-95"
                title="Change Theme"
            >
                <Palette size={20} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-32 py-2 bg-surface rounded-lg shadow-xl border border-white/10 glass z-50">
                    {themes.map((theme) => (
                        <button
                            key={theme.name}
                            onClick={() => handleThemeChange(theme.name)}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-white/5 flex items-center gap-2 ${currentTheme === theme.name ? 'text-primary' : 'text-text'
                                }`}
                        >
                            <span
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: theme.color }}
                            />
                            {theme.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ThemeSwitcher;
