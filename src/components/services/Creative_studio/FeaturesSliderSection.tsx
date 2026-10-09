"use client";

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import FeatureCardMockup from '../FeatureCardMockup';

const features = [
    {
        title: "Product Exploded Views",
        buttonText: "3D TECHNICAL",
        gradient: "bg-gradient-to-b from-[#4464DD] to-white",
        lines: [4, 4, 3, 2]
    },
    {
        title: "Product Animation",
        buttonText: "3D RENDER",
        gradient: "bg-gradient-to-b from-[#BC44DD] to-white",
        lines: [3, 4, 2]
    },
    {
        title: "Packaging Visualisation",
        buttonText: "3D PACKAGING",
        gradient: "bg-gradient-to-b from-[#C65E5E] to-[#FFF7F7]",
        lines: [4, 3, 4]
    },
    {
        title: "Architectural Visualisation",
        buttonText: "SPATIAL 3D",
        gradient: "bg-gradient-to-b from-[#008EDF] to-white",
        lines: [3, 3, 2]
    },
    {
        title: "Logo Animation",
        buttonText: "BRAND MOTION",
        gradient: "bg-gradient-to-b from-[#2D00DF] to-white",
        lines: [4, 4, 3]
    },
    {
        title: "Explainer Motion Graphics",
        buttonText: "EXPLAINER",
        gradient: "bg-gradient-to-b from-[#4464DD] to-[#008EDF]",
        lines: [3, 4, 4, 2]
    },
    {
        title: "UI Motion Graphics",
        buttonText: "APP & WEB",
        gradient: "bg-gradient-to-b from-[#BC44DD] to-[#FFF7F7]",
        lines: [4, 3, 3]
    },
    {
        title: "Social Media Motion",
        buttonText: "SOCIAL DESIGN",
        gradient: "bg-gradient-to-b from-[#008EDF] to-[#FFF7F7]",
        lines: [4, 4, 2]
    },
    {
        title: "Scroll Animations",
        buttonText: "WEB EXPERIENCE",
        gradient: "bg-gradient-to-b from-[#4464DD] to-white",
        lines: [3, 4, 3]
    },
    {
        title: "Interactive Sections",
        buttonText: "INTERACTION",
        gradient: "bg-gradient-to-b from-[#BC44DD] to-white",
        lines: [4, 3, 2]
    },
    {
        title: "Lottie Animations",
        buttonText: "VECTOR MOTION",
        gradient: "bg-gradient-to-b from-[#C65E5E] to-[#FFF7F7]",
        lines: [4, 4, 3]
    },
    {
        title: "Storytelling Experiences",
        buttonText: "IMMERSIVE",
        gradient: "bg-gradient-to-b from-[#2D00DF] to-white",
        lines: [3, 4, 4]
    },
    {
        title: "Brand Films",
        buttonText: "CINEMATIC",
        gradient: "bg-gradient-to-b from-[#008EDF] to-white",
        lines: [4, 3, 4, 2]
    },
    {
        title: "Product Launch Videos",
        buttonText: "COMMERCIAL",
        gradient: "bg-gradient-to-b from-[#4464DD] to-[#008EDF]",
        lines: [4, 4, 3]
    },
    {
        title: "Company Introductions",
        buttonText: "CORPORATE",
        gradient: "bg-gradient-to-b from-[#BC44DD] to-[#FFF7F7]",
        lines: [3, 4, 2]
    },
    {
        title: "Customer Stories",
        buttonText: "TESTIMONIALS",
        gradient: "bg-gradient-to-b from-[#008EDF] to-[#FFF7F7]",
        lines: [4, 3, 3]
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
        <section className="w-full max-w-full bg-white py-8 md:py-20 min-h-[541px] md:min-h-0 overflow-hidden">
            {/* Title Container - Constrained Width */}
            <div className="w-full max-w-[390px] md:max-w-[1400px] mx-auto px-4 md:px-12 flex items-center justify-between mb-8 md:mb-12">
                <h2 
                    className="uppercase text-[#1a1a1a] font-[200] md:font-[300] text-[24px] md:text-[32px] leading-[26px] md:leading-[77px] tracking-[-1.2px] md:tracking-[0px] ml-4 md:ml-0"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                >
                    CREATIVE PRODUCTIONS WE BUILD
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

                                {/* Title */}
                                <h3 
                                    className="text-black font-[500] text-center text-[22px] md:text-[32px] leading-[26.33px] md:leading-[37px] tracking-[0px] max-w-[260px]"
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                >
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
