"use client";

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import FeatureCardMockup from '../FeatureCardMockup';

const features = [
    {
        title: "Inventory synchronisation",
        buttonText: "BOOK NOW",
        gradient: "bg-gradient-to-b from-[#4464DD] to-white", // Light Blue
        lines: [4, 4, 3, 2] // Mockup lines width representation
    },
    {
        title: "Warehouse management",
        buttonText: "LOGIN",
        gradient: "bg-gradient-to-b from-[#BC44DD] to-white", // Light Purple
        lines: [3, 3]
    },
    {
        title: "Stock updates",
        buttonText: "ADMIN LOGIN",
        gradient: "bg-gradient-to-b from-[#C65E5E] to-[#FFF7F7]", // Deep Blue to Light Blue
        lines: [3, 3]
    },
    {
        title: "Order fulfilment",
        buttonText: "READ NOW",
        gradient: "bg-gradient-to-b from-[#2D00DF] to-white", // Light Green
        lines: [4, 2, 4, 4, 3]
    },
    {
        title: "Barcode support",
        buttonText: "VIEW ALL",
        gradient: "bg-gradient-to-b from-[#e0f2fe] to-white", // Light Blue
        lines: [4, 4, 4]
    }, 
    {
        title: "Multi-location inventory",
        buttonText: "ENQUIRE NOW",
        gradient: "bg-gradient-to-b from-[#4464DD] to-white", // Light Blue
        lines: [4, 4, 3, 2] // Mockup lines width representation
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
        <section className="w-full bg-white py-20 overflow-hidden">
            {/* Title Container - Constrained Width */}
            <div className="max-w-[1400px] mx-auto px-4 md:px-12 flex items-center justify-between mb-12">
                <h2 className="text-[20px] md:text-[24px] font-light tracking-wide text-[#1a1a1a] uppercase ml-4 md:ml-0">
                    Warehouse & Inventory
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
                                {/* Self-Filling Video-Like Card Animation Graphic */}
                                <div className="w-full flex flex-col items-center mt-2">
                                    <FeatureCardMockup feature={feature} />
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
