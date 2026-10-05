"use client";

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import FeatureCardMockup from '../FeatureCardMockup';

const features = [
    {
        title: "Feature Enhancements",
        buttonText: "ENHANCE",
        gradient: "bg-gradient-to-b from-[#4464DD] to-[#FFF7F7]",
        lines: [4, 4, 3, 2]
    },
    {
        title: "Bug Fixes",
        buttonText: "RESOLVE",
        gradient: "bg-gradient-to-b from-[#BC44DD] to-white",
        lines: [3, 4, 2]
    },
    {
        title: "Performance Improvements",
        buttonText: "OPTIMIZE",
        gradient: "bg-gradient-to-b from-[#008EDF] to-[#FFF7F7]",
        lines: [4, 3, 4]
    },
    {
        title: "OS Compatibility Updates",
        buttonText: "UPDATE",
        gradient: "bg-gradient-to-b from-[#2D00DF] to-[#FFF7F7]",
        lines: [3, 3, 2]
    },
    {
        title: "Security Updates",
        buttonText: "SECURE",
        gradient: "bg-gradient-to-b from-[#C65E5E] to-[#FFF7F7]",
        lines: [4, 4, 3]
    },
    {
        title: "Analytics Monitoring",
        buttonText: "MONITOR",
        gradient: "bg-gradient-to-b from-[#4464DD] to-[#008EDF]",
        lines: [3, 4, 4, 2]
    },
    {
        title: "User Feedback Improvements",
        buttonText: "IMPROVE",
        gradient: "bg-gradient-to-b from-[#BC44DD] to-[#FFF7F7]",
        lines: [4, 3, 3]
    },
    {
        title: "New Module Development",
        buttonText: "BUILD",
        gradient: "bg-gradient-to-b from-[#2D00DF] to-white",
        lines: [4, 4, 2]
    },
    {
        title: "Store Updates",
        buttonText: "PUBLISH",
        gradient: "bg-gradient-to-b from-[#008EDF] to-white",
        lines: [3, 4, 3]
    },
    {
        title: "Long-Term Maintenance",
        buttonText: "MAINTAIN",
        gradient: "bg-gradient-to-b from-[#4464DD] to-[#FFF7F7]",
        lines: [4, 3, 4, 2]
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
            <div className="max-w-[1400px] mx-auto px-4 md:px-12 flex items-center justify-between mb-12">
                <h2 className="text-[clamp(1.125rem,2.5vw+0.25rem,2rem)] font-[300] tracking-wide text-[#1a1a1a] uppercase ml-4 md:ml-0">
                    after launch support
                </h2>

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
            <div className="w-full max-w-full overflow-hidden cursor-grab active:cursor-grabbing px-4 md:px-12 xl:px-[max(3rem,calc((100vw-1400px)/2+3rem))]" ref={emblaRef}>
                <div className="flex gap-6 py-4">
                    {slideFeatures.map((feature, idx) => (
                        <div 
                            key={idx} 
                            className="flex-[0_0_260px] sm:flex-[0_0_280px] md:flex-[0_0_320px] min-w-0"
                        >
                            <div 
                                className={`relative w-full h-[440px] md:h-[480px] rounded-[30px] p-7 md:p-8 flex flex-col items-center justify-between transition-transform duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl ${feature.gradient}`}
                                style={{ cursor: "url('/images/services/website/cursor.svg'), pointer" }}
                            >
                                {/* Self-Filling Video-Like Card Animation Graphic */}
                                <div className="w-full flex flex-col items-center mt-2">
                                    <FeatureCardMockup feature={feature} />
                                </div>

                                {/* Title */}
                                <h3 className="text-[clamp(1.125rem,1.4vw+0.5rem,1.5rem)] font-medium text-center text-black leading-snug max-w-[220px]">
                                    {feature.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
