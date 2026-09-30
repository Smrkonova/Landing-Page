"use client";

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import FeatureCardMockup from '../FeatureCardMockup';

const features = [
    {
        title: "Feature Enhancements",
        buttonText: "SCALE",
        gradient: "bg-gradient-to-b from-[#53A18B] to-white",
        lines: [4, 4, 3, 2]
    },
    {
        title: "UI Improvements",
        buttonText: "REFRESH",
        gradient: "bg-gradient-to-b from-[#0060FB] to-white",
        lines: [3, 4, 2]
    },
    {
        title: "Performance Optimisation",
        buttonText: "SPEED",
        gradient: "bg-gradient-to-b from-[#7C3AED] to-white",
        lines: [4, 3, 4]
    },
    {
        title: "Platform Security",
        buttonText: "PROTECT",
        gradient: "bg-gradient-to-b from-[#0D9488] to-[#FFF7F7]",
        lines: [3, 3, 2]
    },
    {
        title: "Content Management",
        buttonText: "UPDATE",
        gradient: "bg-gradient-to-b from-[#4464DD] to-white",
        lines: [4, 4, 3]
    },
    {
        title: "Technical Support",
        buttonText: "RESOLVE",
        gradient: "bg-gradient-to-b from-[#3B7FBF] to-white",
        lines: [3, 4, 4, 2]
    },
];

// Duplicate items for seamless infinite carousel loop
const slideFeatures = [...features, ...features];

export default function FeaturesSliderSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { 
            loop: true, 
            align: 'start',
            dragFree: false,
        },
        [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
    );

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="w-full max-w-full bg-white py-16 md:py-24 overflow-hidden">
            {/* Header with Title and Prev/Next arrows */}
            <div className="max-w-[1400px] mx-auto px-4 md:px-12 flex items-center justify-between mb-12">
                <div>
                    <h2 className="text-[20px] md:text-[24px] font-light tracking-wide text-[#1a1a1a] uppercase ml-4 md:ml-0">
                        What We Can Help With
                    </h2>
                    <p className="text-gray-500 text-xs md:text-sm font-light ml-4 md:ml-0 mt-1">
                        As your business grows, your digital platform should grow too.
                    </p>
                </div>

                {/* Prev / Next controls */}
                <div className="hidden sm:flex items-center gap-2 mr-4 md:mr-0">
                    <button 
                        onClick={scrollPrev}
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all shadow-sm"
                        aria-label="Previous feature"
                    >
                        <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button 
                        onClick={scrollNext}
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all shadow-sm"
                        aria-label="Next feature"
                    >
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Slider Container - Full Viewport Width */}
            <div className="w-full overflow-hidden cursor-grab active:cursor-grabbing px-4 md:px-12 xl:px-[max(3rem,calc((100vw-1400px)/2+3rem))]" ref={emblaRef}>
                <div className="flex gap-6 py-4">
                    {slideFeatures.map((feature, idx) => (
                        <div 
                            key={idx} 
                            className="flex-[0_0_280px] md:flex-[0_0_320px] min-w-0"
                        >
                            <div 
                                className={`relative w-full h-[450px] md:h-[500px] rounded-[30px] p-8 flex flex-col items-center justify-between transition-transform duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl ${feature.gradient}`}
                                style={{ cursor: "url('/images/services/website/cursor.svg'), pointer" }}
                            >
                                {/* Self-Filling Video-Like Card Animation Graphic */}
                                <div className="w-full flex flex-col items-center mt-2">
                                    <FeatureCardMockup feature={feature} />
                                </div>

                                {/* Bottom Feature Details */}
                                <div className="w-full flex flex-col items-center gap-6 mb-4">
                                    <h3 className="text-black font-semibold text-lg md:text-xl text-center tracking-tight">
                                        {feature.title}
                                    </h3>

                                    <button 
                                        suppressHydrationWarning
                                        className="bg-black text-white text-[11px] font-bold px-6 py-2.5 rounded-full uppercase tracking-wider hover:scale-105 transition-transform"
                                    >
                                        {feature.buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
