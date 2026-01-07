import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <div className="min-h-screen bg-background text-text selection:bg-primary selection:text-white transition-colors duration-300">
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
                <Outlet />
            </main>
            <footer className="border-t border-white/5 py-8 mt-auto">
                <div className="max-w-7xl mx-auto px-4 text-center text-text-secondary text-sm">
                    &copy; {new Date().getFullYear()} Portfolio. Built with React & Tailwind.
                </div>
            </footer>
        </div>
    );
};

export default Layout;
