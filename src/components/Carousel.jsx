import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ images, onImageClick }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    if (!images || images.length === 0) return null;

    return (
        <div className="relative group overflow-hidden rounded-xl border border-white/5 bg-black/20">
            <div className="viewport overflow-hidden" ref={emblaRef}>
                <div className="container flex">
                    {images.map((src, index) => (
                        <div className="slide flex-[0_0_100%] min-w-0" key={index}>
                            <div
                                className="aspect-video w-full relative cursor-pointer"
                                onClick={() => onImageClick && onImageClick(index)}
                            >
                                <img
                                    src={src}
                                    alt={`Slide ${index + 1}`}
                                    className="absolute inset-0 w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            {images.length > 1 && (
                <>
                    <button
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary"
                        onClick={scrollPrev}
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary"
                        onClick={scrollNext}
                    >
                        <ChevronRight size={20} />
                    </button>
                </>
            )}

            {/* Dots */}
            {images.length > 1 && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all ${index === selectedIndex ? 'bg-primary w-4' : 'bg-white/50 hover:bg-white'
                                }`}
                            onClick={() => scrollTo(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Carousel;
