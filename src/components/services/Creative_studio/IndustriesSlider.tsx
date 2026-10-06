'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const slides = [
    {
        title: "3D Product Visualisation",
        description: "Photorealistic product renders and animations that showcase products before they're manufactured or photographed.",
        image: "/images/services/website/Creative_studio/image 75.png",
        bg: "linear-gradient(139.7deg, #51BAEF 22.55%, #BED6E1 87.59%)"
    },
    {
        title: "Motion Graphics",
        description: "Animated graphics for presentations, explainers, websites and marketing campaigns.",
        image: "/images/services/website/Creative_studio/image 76.png",
        bg: "linear-gradient(139.7deg, #436475 22.55%, #BED6E1 87.59%)"
    },
    {
        title: "Website Animations",
        description: "Interactive scrolling experiences, transitions and modern web animations that make websites memorable.",
        image: "/images/services/website/Creative_studio/image 77.png",
        bg: "linear-gradient(139.7deg, #EFC851 22.55%, #BED6E1 87.59%)"
    },
    {
        title: "Corporate Videos",
        description: "Professional videos for company introductions, presentations and brand storytelling.",
        image: "/images/services/website/Creative_studio/image 78.png",
        bg: "linear-gradient(139.7deg, #51BAEF 22.55%, #BED6E1 87.59%)"
    },
    {
        title: "Product Videos",
        description: "Videos designed to highlight features, demonstrate products and improve customer understanding.",
        image: "/images/services/website/Creative_studio/image 79.png",
        bg: "linear-gradient(139.7deg, #436475 22.55%, #BED6E1 87.59%)"
    },
    {
        title: "Social Media Content",
        description: "Creative assets designed for Instagram, LinkedIn, YouTube, Facebook and other digital platforms.",
        image: "/images/services/website/Creative_studio/image 80.png",
        bg: "linear-gradient(139.7deg, #EFC851 22.55%, #BED6E1 87.59% 87.59%)"
    }
];

export default function IndustriesSlider() {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' });

    return (
        <section className="w-full max-w-full bg-white text-black pt-24 pb-32 overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-0">
                {/* Header Section */}
                <div className="mb-12 md:mb-16 flex flex-col gap-6">
                    <div>
                        <h2 
                            className="leading-[1.08] tracking-tight uppercase"
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '42px',
                            }}
                        >
                            <span className="font-[200] text-gray-800">CREATIVE SOLUTIONS</span><br />
                            <span className="font-[900] text-black">WE OFFER.</span>
                        </h2>
                    </div>
                    <div className="max-w-[420px]">
                        <p 
                            className="text-gray-600 leading-relaxed font-normal"
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '14px',
                            }}
                        >
                            Every business communicates differently. We craft high-impact visual media tailored to your audience, products, and growth goals.
                        </p>
                    </div>
                </div>
            </div>

            {/* Embla Carousel Slider */}
            <div className="w-full">
                <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                    <div className="flex py-8 px-4 sm:px-6 md:px-12">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="flex-[0_0_88%] sm:flex-[0_0_75%] md:flex-[0_0_60%] lg:flex-[0_0_50%] min-w-0 px-3 sm:px-4 md:px-5"
                            >
                                <div
                                    className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 h-[350px] md:h-[450px] flex flex-col justify-between shadow-2xl shadow-black/5 w-full"
                                    style={{ background: slide.bg }}
                                >
                                    <div className="relative z-10 w-[70%] lg:w-[60%] flex flex-col h-full">
                                        <h3 className="text-white text-[clamp(1.125rem,2.5vw+0.25rem,1.5rem)] font-[500] uppercase mb-3 tracking-wide">{slide.title}</h3>
                                        <p className="text-white/90 text-[clamp(13px,0.4vw+5px,14px)] font-[400] leading-relaxed mb-auto max-w-[240px]">
                                            {slide.description}
                                        </p>
                                        <button suppressHydrationWarning className="text-white flex items-center gap-2 mt-auto text-[clamp(12px,0.5vw+4px,14px)] tracking-wide font-[500] uppercase group w-fit">
                                            Explore
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                    {/* Background Image Overlay */}
                                    <div className="absolute right-4 md:right-8 bottom-0 h-[90%] w-[50%] z-0">
                                        <Image
                                            src={slide.image}
                                            alt={slide.title}
                                            fill
                                            className="object-contain object-bottom drop-shadow-2xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}