'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const slides = [
    {
        title: "Shopify Stores",
        description: "Premium Shopify websites with completely custom designs and advanced functionality.",
        image: "/images/services/website/ecommerce/image 39.png", // Placeholder image for now
        bg: "linear-gradient(139.7deg, #EF7151 22.55%, #BED6E1 87.59%)"
    },
    {
        title: "Shopify Plus",
        description: "Enterprise ecommerce solutions for growing brands handling large product catalogues and high order volumes.",
        image: "/images/services/website/ecommerce/image 40.png",
        bg: "linear-gradient(139.7deg, #3B7FBF 22.55%, #BED6E1  87.59%)"
    },
    {
        title: "Custom Ecommerce Platforms",
        description: "Completely custom-built ecommerce platforms for businesses with unique workflows and business models.",
        image: "/images/services/website/ecommerce/image 41.png",
        bg: "linear-gradient(139.7deg, #435975 22.55%, #BED6E1 87.59%)"
    },   {
        title: "B2B Commerce",
        description: "Dealer portals, wholesale pricing, distributor management and business ordering systems.",
        image: "/images/services/website/ecommerce/image 42.png", // Placeholder image for now
        bg: "linear-gradient(139.7deg, #EF7151 22.55%, #BED6E1 87.59%)"
    },
    {
        title: "D2C Brands",
        description: "High-converting online stores focused on customer experience and brand storytelling.",
        image: "/images/services/website/ecommerce/image 43.png",
        bg: "linear-gradient(139.7deg, #3B7FBF 22.55%, #BED6E1  87.59%)"
    },
    {
        title: "Marketplace Platforms",
        description: "Platforms connecting multiple vendors, products and customers within one ecosystem.",
        image: "/images/services/website/ecommerce/image 44.png",
        bg: "linear-gradient(139.7deg, #435975 22.55%, #BED6E1 87.59%)"
    }
];

export default function IndustriesSlider() {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' });

    return (
        <section className="w-full bg-white text-black pt-24 pb-32 overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-0">
                {/* Header Section */}
                <div className="mb-10 md:mb-16 flex flex-col gap-4 md:gap-6">
                    <div>
                        <h2 
                            className="font-[200] tracking-tight text-gray-800 uppercase leading-[1.08]"
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '42px',
                            }}
                        >
                            ECOMMERCE SOLUTIONS <br />
                            <span className="font-[900] text-black">WE BUILD.</span>
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
                            Every business has different products, checkout flows and buyers. <br />
                            That's why every ecommerce store we build is tailored specifically for your brand.
                        </p>
                    </div>
                </div>
            </div>

            {/* Embla Carousel Slider */}
            <div className="w-full max-w-full overflow-hidden">
                <div className="w-full max-w-full overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
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
                                        <h3 className="text-white text-[clamp(1.125rem,2.5vw+0.25rem,1.5rem)] font-[500] mb-3 tracking-wide">{slide.title}</h3>
                                        <p className="text-white/90 font-[400] text-[clamp(13px,0.4vw+5px,14px)] leading-relaxed mb-auto max-w-[200px]">
                                            {slide.description}
                                        </p>
                                        <button suppressHydrationWarning className="text-white flex items-center gap-2 mt-auto text-[clamp(12px,0.5vw+4px,14px)] tracking-wide font-[500] group w-fit">
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