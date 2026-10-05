'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const slides = [
    {
        title: "Website Maintenance",
        description: "Content updates, security patches, bug fixes, speed improvements, and regular backups to keep your website running at peak health.",
        image: "/images/services/website/image32.png",
        bg: "linear-gradient(139.7deg, #53A18B 22.55%, #0060FB 87.59%)"
    },
    {
        title: "Ecommerce Support",
        description: "Dedicated support for growing online stores, including catalog updates, checkout optimization, campaign pages, and feature enhancements.",
        image: "/images/services/website/shopify1.png",
        bg: "linear-gradient(139.7deg, #004496 22.55%, #3AA0FF 87.59%)"
    },
    {
        title: "Mobile App Maintenance",
        description: "Reliable version upgrades, OS compatibility checks, store compliance updates, and seamless performance tuning for iOS and Android.",
        image: "/images/services/website/mobile1.png",
        bg: "linear-gradient(139.7deg, #5B5F97 22.55%, #7C3AED 87.59%)"
    },
    {
        title: "Software Support",
        description: "Scalable backend support, module enhancements, workflow automations, and proactive security monitoring as your platform grows.",
        image: "/images/services/website/healthcare.png",
        bg: "linear-gradient(139.7deg, #1E293B 22.55%, #0D9488 87.59%)"
    }
];

export default function IndustriesSlider() {
    const [emblaRef] = useEmblaCarousel(
        { loop: true, align: 'center', direction: 'rtl' },
        [Autoplay({ delay: 3000, stopOnInteraction: false })]
    );

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
                            We Stay With You <br />
                            <span className="font-[900] text-black">After Launch.</span>
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
                            Many agencies disappear after a project goes live. We believe long-term partnerships create better products. Whether it's a website, ecommerce platform, mobile application or business software, we continue helping you improve performance, add new features and keep everything running smoothly.
                        </p>
                    </div>
                </div>
            </div>

            {/* Embla Carousel Slider */}
            <div className="w-full max-w-full overflow-hidden">
                <div className="w-full max-w-full overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef} dir="rtl">
                    <div className="flex py-8 px-4 sm:px-6 md:px-12">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                dir="ltr"
                                className="flex-[0_0_88%] sm:flex-[0_0_75%] md:flex-[0_0_60%] lg:flex-[0_0_50%] min-w-0 px-3 sm:px-4 md:px-5"
                            >
                                <div
                                    className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 h-[350px] md:h-[450px] flex flex-col justify-between shadow-2xl shadow-black/5 text-left w-full"
                                    style={{ background: slide.bg }}
                                >
                                    <div className="relative z-10 w-[70%] lg:w-[60%] flex flex-col h-full">
                                        <h3 className="text-white text-[clamp(1.125rem,2.5vw+0.25rem,1.5rem)] font-[500] mb-3 tracking-wide">{slide.title}</h3>
                                        <p className="text-white/90 font-[400] text-[clamp(13px,0.4vw+5px,14px)] leading-relaxed mb-auto max-w-[240px]">
                                            {slide.description}
                                        </p>
                                        <button suppressHydrationWarning className="text-white flex items-center gap-2 mt-auto text-[clamp(12px,0.5vw+4px,14px)] tracking-wide font-[500] group w-fit">
                                            Explore
                                            <ArrowRight className="w-[1.9rem] h-[1.5rem] group-hover:translate-x-1 transition-transform" />
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