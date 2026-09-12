'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const slides = [
    {
        title: "Brand Identity",
        description: "Create a consistent identity that reflects your business values and positioning.",
        image: "/images/services/website/image32.png",
        bg: "linear-gradient(139.7deg, #004496 22.55%, #FF8B61 87.59%)"
    },
    {
        title: "Logo Design",
        description: "Unique, scalable logos designed for both digital and print.",
        image: "/images/services/website/yre1.png",
        bg: "linear-gradient(139.7deg, #FF6B4A 22.55%, #BED6E1 87.59%)"
    },
    {
        title: "Brand Guidelines",
        description: "A complete guide covering colours, typography, spacing, iconography and logo usage.",
        image: "/images/services/website/manufacturing.png",
        bg: "linear-gradient(139.7deg, #3B7FBF 22.55%, #BED6E1 87.59%)"
    },
    {
        title: "Marketing Assets",
        description: "Designs that keep your brand consistent across campaigns.",
        image: "/images/services/website/healthcare.png",
        bg: "linear-gradient(139.7deg, #5B5F97 22.55%, #FF8B61 87.59%)"
    },
    {
        title: "Print Collateral",
        description: "Professional printed materials that strengthen your offline presence.",
        image: "/images/services/website/shopify1.png",
        bg: "linear-gradient(139.7deg, #435975 22.55%, #BED6E1 87.59%)"
    },
    {
        title: "Digital Brand Assets",
        description: "Everything needed for websites, social media and mobile applications.",
        image: "/images/services/website/mobile1.png",
        bg: "linear-gradient(139.7deg, #009BFB 22.55%, #FF8B61 87.59%)"
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
                        <h2 className="text-[40px] md:text-[50px] lg:text-[64px] leading-[1.05] font-light tracking-tight text-gray-800">
                            What We <br />
                            <span className="font-bold text-black">Create.</span>
                        </h2>
                    </div>
                    <div className="max-w-[400px]">
                        <p className="text-gray-500 text-[13px] md:text-sm leading-relaxed font-medium">
                            Every business tells a story.
                            <br className="hidden sm:block" />
                            We help shape that story through a complete visual identity.
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
                                        <h3 className="text-white text-xl md:text-2xl font-semibold mb-3 tracking-wide">{slide.title}</h3>
                                        <p className="text-white/90 text-xs md:text-[13px] leading-relaxed mb-auto max-w-[200px]">
                                            {slide.description}
                                        </p>
                                        <button suppressHydrationWarning className="text-white flex items-center gap-2 mt-auto text-sm tracking-wide font-medium group w-fit">
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