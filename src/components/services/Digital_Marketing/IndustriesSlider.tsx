'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const slides = [
    {
        title: "Search Engine Optimization (SEO)",
        description: "Improve your visibility on Google and attract customers searching for your products or services.",
        image: "/images/services/website/Digitalmarketing/image 69.png",
        bg: "linear-gradient(139.7deg, #4C9B94 22.55%, #BED6E1 87.59%)"
    },
    {
        title: "Performance Marketing",
        description: "Run targeted advertising campaigns designed to generate leads and sales.",
        image: "/images/services/website/Digitalmarketing/image 70.png",
        bg: "linear-gradient(139.7deg, #3B7FBF 22.55%, #BED6E1 87.59%)"
    },
    {
        title: "Social Media Marketing",
        description: "Build a consistent brand presence across platforms where your audience spends time.",
        image: "/images/services/website/Digitalmarketing/image 71.png",
        bg: "linear-gradient(139.7deg, #435975 22.55%, #BED6E1 87.59%)"
    },
    {
        title: "Local Business Marketing",
        description: "Help local businesses appear in Google Maps, local search results and location-based searches.",
        image: "/images/services/website/Digitalmarketing/image 72.png",
        bg: "linear-gradient(139.7deg, #4C9B94 22.55%, #BED6E1 87.59%)"
    },
    {
        title: "Content Marketing",
        description: "Create valuable content that builds trust, improves rankings and educates potential customers.",
        image: "/images/services/website/Digitalmarketing/image 73.png",
        bg: "linear-gradient(139.7deg, #3B7FBF 22.55%, #BED6E1 87.59%)"
    },
    {
        title: "Analytics & Reporting",
        description: "Track every campaign and measure what's working with real business insights.",
        image: "/images/services/website/Digitalmarketing/image 74.png",
        bg: "linear-gradient(139.7deg, #435975 22.55%, #BED6E1 87.59%)"
    },
    {
        title: "Analytics & Reporting",
        description: "Apps that improve customer engagement, bookings, purchases and support.",
        image: "/images/services/website/Digitalmarketing/image 75.png",
        bg: "linear-gradient(139.7deg, #4C9B94 22.55%, #BED6E1 87.59%)"
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
                            className="tracking-tight text-black uppercase leading-[1.08]"
                            style={{ fontFamily: "'Inter', sans-serif", fontSize: '42px' }}
                        >
                            <span className="block font-[200]">GROWTH SOLUTIONS</span>
                            <span className="block font-[900]">WE EXECUTE</span>
                        </h2>
                    </div>
                    <div className="max-w-[420px]">
                        <p 
                            className="text-gray-600 leading-relaxed font-normal text-[14px]"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Every brand requires a distinct acquisition funnel. We design and manage performance marketing architectures built around high conversion and verifiable ROI.
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
                                        <h3 className="text-white text-[clamp(1.125rem,2.5vw+0.25rem,1.5rem)] font-[500] mb-3 tracking-wide uppercase">{slide.title}</h3>
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