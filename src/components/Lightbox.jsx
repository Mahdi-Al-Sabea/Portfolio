import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Lightbox = ({ images, selectedIndex, onClose, onPrev, onNext, onSelect }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') onPrev();
            if (e.key === 'ArrowRight') onNext();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, onPrev, onNext]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
                onClick={onClose}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2 z-50"
                >
                    <X size={32} />
                </button>

                <div className="relative w-full h-full max-w-7xl flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                    {images.length > 1 && (
                        <button
                            onClick={onPrev}
                            className="absolute left-2 md:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-md z-10"
                        >
                            <ChevronLeft size={32} />
                        </button>
                    )}

                    <motion.img
                        key={selectedIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        src={images[selectedIndex]}
                        alt={`Fullscreen view ${selectedIndex + 1}`}
                        className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                    />

                    {images.length > 1 && (
                        <button
                            onClick={onNext}
                            className="absolute right-2 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-md z-10"
                        >
                            <ChevronRight size={32} />
                        </button>
                    )}


                    {/* Thumbnails */}
                    {images.length > 1 && (
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 overflow-x-auto px-4 py-2">
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => onSelect(idx)}
                                    className={`w-16 h-12 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${idx === selectedIndex ? 'border-primary opacity-100' : 'border-transparent opacity-50 hover:opacity-100'
                                        }`}
                                >
                                    <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Lightbox;
