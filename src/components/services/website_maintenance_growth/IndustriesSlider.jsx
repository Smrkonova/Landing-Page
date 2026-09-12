'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const slides = [
    {
        title: "Website Maintenance",
        description: "Keep your website secure, updated and performing at its best.",
        includes: [
            "Content Updates",
            "New Pages",
            "Bug Fixes",
            "Speed Improvements",
            "Security Updates",
            "Backup Management",
            "CMS Updates",
            "Form Maintenance"
        ],
        image: "/images/services/website/image32.png",
        bg: "linear-gradient(139.7deg, #53A18B 22.55%, #0060FB 87.59%)"
    },
    {
        title: "Ecommerce Support",
        description: "Support for growing ecommerce businesses.",
        includes: [
            "Product Uploads",
            "Collection Updates",
            "Landing Pages",
            "Campaign Pages",
            "Shopify Improvements",
            "Checkout Optimisation",
            "Store Performance",
            "Feature Enhancements"
        ],
        image: "/images/services/website/shopify1.png",
        bg: "linear-gradient(139.7deg, #004496 22.55%, #3AA0FF 87.59%)"
    },
    {
        title: "Mobile App Maintenance",
        description: "Keep Android and iOS applications up to date.",
        includes: [
            "Bug Fixes",
            "Version Updates",
            "Play Store Updates",
            "App Store Updates",
            "Performance Improvements",
            "Feature Development",
            "Device Compatibility",
            "Security Updates"
        ],
        image: "/images/services/website/mobile1.png",
        bg: "linear-gradient(139.7deg, #5B5F97 22.55%, #7C3AED 87.59%)"
    },
    {
        title: "Software Support",
        description: "Improve your business software as your company grows.",
        includes: [
            "Module Development",
            "Dashboard Updates",
            "Workflow Improvements",
            "User Management",
            "API Updates",
            "Reporting Features",
            "Security Monitoring",
            "System Optimisation"
        ],
        image: "/images/services/website/healthcare.png",
        bg: "linear-gradient(139.7deg, #1E293B 22.55%, #0D9488 87.59%)"
    }
];

export default function IndustriesSlider() {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });

    return (
        <section className="w-full max-w-full bg-white text-black pt-24 pb-32 overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-0">
                {/* Header Section */}
                <div className="mb-12 md:mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div>
                      
                        <h2 className="text-[38px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.05] font-light tracking-tight text-gray-800">
                            We Stay With You <br />
                            <span className="font-bold text-black">After Launch.</span>
                        </h2>
                    </div>
                    <div className="max-w-[500px]">
                        <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-normal">
                            Many agencies disappear after a project goes live. We believe long-term partnerships create better products. Whether it's a website, ecommerce platform, mobile application or business software, we continue helping you improve performance, add new features and keep everything running smoothly.
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
                                className="flex-[0_0_88%] sm:flex-[0_0_78%] md:flex-[0_0_62%] lg:flex-[0_0_48%] xl:flex-[0_0_42%] min-w-0 px-3 sm:px-4 md:px-5"
                            >
                                <div
                                    className="relative w-full rounded-[2rem] overflow-hidden p-8 md:p-10 h-[470px] sm:h-[450px] flex flex-col justify-between shadow-2xl shadow-black/5"
                                    style={{ background: slide.bg }}
                                >
                                    <div className="relative z-10 w-full sm:w-[68%] flex flex-col h-full justify-between">
                                        <div>
                                            <h3 className="text-white text-xl md:text-2xl font-bold mb-2 tracking-wide">{slide.title}</h3>
                                            <p className="text-white/90 text-xs md:text-[13px] leading-relaxed mb-4 max-w-[280px]">
                                                {slide.description}
                                            </p>
                                            
                                            <div className="mb-4">
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-white/70 block mb-2">Includes</span>
                                                <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 max-w-[300px]">
                                                    {slide.includes.map((item, idx) => (
                                                        <div key={idx} className="flex items-center gap-1.5 text-[11px] text-white/90 font-medium">
                                                            <span className="w-1 h-1 rounded-full bg-white/70 flex-shrink-0"></span>
                                                            <span className="truncate">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <button suppressHydrationWarning className="text-white flex items-center gap-2 text-xs md:text-sm tracking-wide font-medium group w-fit bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-full backdrop-blur-md transition-all">
                                            Explore Services
                                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>

                                    {/* Background Image Overlay */}
                                    <div className="absolute right-2 md:right-4 bottom-0 h-[65%] sm:h-[75%] w-[38%] sm:w-[35%] z-0 pointer-events-none opacity-85">
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