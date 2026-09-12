"use client";

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const features = [
    {
        title: "Appointment booking",
        buttonText: "BOOK NOW",
        gradient: "bg-gradient-to-b from-[#e0f2fe] to-white", // Light Blue
        lines: [4, 4, 3, 2] // Mockup lines width representation
    },
    {
        title: "Customer login",
        buttonText: "LOGIN",
        gradient: "bg-gradient-to-b from-[#f3e8ff] to-white", // Light Purple
        lines: [3, 3]
    },
    {
        title: "Admin dashboard",
        buttonText: "ADMIN LOGIN",
        gradient: "bg-gradient-to-b from-[#0ea5e9] to-[#bae6fd]", // Deep Blue to Light Blue
        lines: [3, 3]
    },
    {
        title: "Blogs",
        buttonText: "READ NOW",
        gradient: "bg-gradient-to-b from-[#dcfce7] to-white", // Light Green
        lines: [4, 2, 4, 4, 3]
    },
    {
        title: "Product catalog",
        buttonText: "VIEW ALL",
        gradient: "bg-gradient-to-b from-[#e0f2fe] to-white", // Light Blue
        lines: [4, 4, 4]
    },
    {
        title: "Lead Forms",
        buttonText: "GET IN TOUCH",
        gradient: "bg-gradient-to-b from-[#f3e8ff] to-white", // Light Blue
        lines: [4, 4, 4]
    },
    {
        title: "Payment gateway",
        buttonText: "PAY NOW",
        gradient: "bg-gradient-to-b from-[#e0f2fe] to-white", // Light Purple
        lines: [3, 2, 3]
    }, 
    {
        title: "Membership",
        buttonText: "VIEW PLANS",
        gradient: "bg-gradient-to-b from-[#0ea5e9] to-[#bae6fd]", // Deep Blue to Light Blue
        lines: [3, 3]
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
            <div className="max-w-[1400px] mx-auto px-4 md:px-12 flex items-center justify-between mb-8 md:mb-12">
                <h2 className="text-[20px] md:text-[24px] font-light tracking-wide text-[#1a1a1a] uppercase ml-4 md:ml-0">
                    FEATURES WE CAN BUILD
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
            <div className="w-full max-w-full overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                <div className="flex gap-4 md:gap-6 py-4 pl-4 md:pl-12">
                    {slideFeatures.map((feature, idx) => (
                        <div 
                            key={idx} 
                            className="flex-[0_0_240px] sm:flex-[0_0_280px] md:flex-[0_0_320px] min-w-0"
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
