"use client";

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const features = [
    {
        title: "Logo Usage",
        buttonText: "RULES",
        gradient: "bg-gradient-to-b from-[#4464DD] to-white",
        lines: [4, 4, 3, 2]
    },
    {
        title: "Logo Spacing",
        buttonText: "CLEARSPACE",
        gradient: "bg-gradient-to-b from-[#BC44DD] to-white",
        lines: [3, 4, 2]
    },
    {
        title: "Colour Palette",
        buttonText: "PALETTE",
        gradient: "bg-gradient-to-b from-[#C65E5E] to-[#FFF7F7]",
        lines: [4, 3, 4]
    },
    {
        title: "Typography",
        buttonText: "HIERARCHY",
        gradient: "bg-gradient-to-b from-[#2D00DF] to-white",
        lines: [3, 3, 2]
    },
    {
        title: "Icon Usage",
        buttonText: "ICONS",
        gradient: "bg-gradient-to-b from-[#008EDF] to-white",
        lines: [4, 4, 3]
    },
    {
        title: "Photography Style",
        buttonText: "ART DIRECTION",
        gradient: "bg-gradient-to-b from-[#4464DD] to-[#008EDF]",
        lines: [3, 4, 4, 2]
    },
    {
        title: "Illustration Style",
        buttonText: "ARTWORK",
        gradient: "bg-gradient-to-b from-[#BC44DD] to-[#FFF7F7]",
        lines: [4, 3, 3]
    },
    {
        title: "Brand Voice",
        buttonText: "TONE",
        gradient: "bg-gradient-to-b from-[#2D00DF] to-white",
        lines: [4, 4, 2]
    },
    {
        title: "Social Media Style",
        buttonText: "SOCIAL",
        gradient: "bg-gradient-to-b from-[#C65E5E] to-[#FFF7F7]",
        lines: [3, 4, 3]
    },
    {
        title: "Print Guidelines",
        buttonText: "PRINT SPECS",
        gradient: "bg-gradient-to-b from-[#008EDF] to-[#FFF7F7]",
        lines: [4, 3, 4, 2]
    },
    {
        title: "Digital Guidelines",
        buttonText: "DIGITAL",
        gradient: "bg-gradient-to-b from-[#4464DD] to-white",
        lines: [4, 4, 3]
    }
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
        <section className="w-full max-w-full bg-white py-16 md:py-20 overflow-hidden">
            {/* Title Container - Constrained Width */}
            <div className="max-w-[1400px] mx-auto px-4 md:px-12 flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
                <div>
                    <h2 className="text-[24px] md:text-[32px] font-light tracking-wide text-[#1a1a1a] uppercase ml-4 md:ml-0">
                        Brand Guidelines
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base font-light max-w-xl leading-relaxed mt-2 ml-4 md:ml-0">
                        As your business grows, multiple people create content. A brand guideline ensures everyone follows the same visual language and maintains consistency across every platform.
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
                                {/* UI Mockup Graphic */}
                                <div className="w-full mt-8 flex flex-col items-center gap-4">
                                    {/* Mockup Lines */}
                                    <div className="w-full flex flex-col gap-3">
                                        {feature.lines.map((lineWidth, i) => (
                                            <div 
                                                key={i} 
                                                className={`h-3 rounded-full ${feature.gradient.includes('0ea5e9') ? 'bg-white/40' : 'bg-gray-200/60'} ${
                                                    lineWidth === 4 ? 'w-full' : 
                                                    lineWidth === 3 ? 'w-3/4' : 'w-1/2'
                                                }`}
                                            ></div>
                                        ))}
                                    </div>

                                    {/* Mockup Button */}
                                    <div className="mt-4 bg-white shadow-sm w-full py-3 rounded-sm flex items-center justify-center">
                                        <span className="text-[10px] font-bold text-black tracking-widest uppercase">
                                            {feature.buttonText}
                                        </span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-[22px] md:text-[26px] font-medium text-center text-black leading-tight max-w-[200px]">
                                    {feature.title.split(' ').map((word, i) => (
                                        <React.Fragment key={i}>
                                            {word}
                                            {i !== feature.title.split(' ').length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
