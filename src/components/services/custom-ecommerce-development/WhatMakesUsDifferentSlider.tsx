"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
    {
        id: 1,
        type: 'text',
        title: "Premium\nShopping\nExperience",
        subtitle: "Beautiful product pages, smooth browsing and modern interfaces that build trust.",
        bg: "bg-[linear-gradient(150deg,#D8CFBE_22.55%,#421812_87.59%)]",
        image: "/images/services/website/ecommerce/image 89.png"
    },
    {
        id: 2,
        type: 'text',
        title: "Fast &\nMobile\nFriendly",
        subtitle: "Designed for customers shopping on phones, tablets and desktops.",
        bg: "bg-gray-300",
        image: "/images/services/website/ecommerce/image 90.png"
    },
    {
        id: 3, 
        type: 'text',
        title: "Easy\nProduct\nManagement",
        subtitle: "Update products, prices, inventory and promotions without technical knowledge.", 
        bg: "bg-[#BFD4FF]",
        image: "/images/services/website/ecommerce/image 91.png"
    },
    {
        id: 4, 
        type: 'text',
        title: "Built\nTo Scale",
        subtitle: "Whether you sell 50 products or 50,000, your platform grows with your business.", 
        bg: "bg-[#E6D6B8]",
        image: "/images/services/website/ecommerce/image 92.png"
    },
    {
        id: 5, 
        type: 'text',
        title: "Conversion\nFocused",
        subtitle: "Every page is designed to reduce friction and increase completed purchases.", 
        bg: "bg-[#DFE8B4]",
        image: "/images/services/website/ecommerce/image 93.png"
    },
];

export default function WhatMakesUsDifferentSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % slides.length);
        }, 4000); // Increased wait time to 4s
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full max-w-full bg-white text-black py-15 md:py-20 overflow-hidden relative">
            <div className="w-full max-w-8xl mx-auto px-6 md:px-12 flex flex-col gap-8 overflow-hidden">

                {/* Section Header */}
                <div>
                    <h2 className="text-[clamp(1.125rem,2.5vw+0.25rem,2rem)] font-[300] text-gray-800 tracking-wide uppercase">
                        WHAT MAKES OUR STORES DIFFERENT.
                    </h2>
                </div>

                {/* Slider Container */}
                <div className="relative w-full max-w-full h-[400px] md:h-[600px] flex items-center mt-12 overflow-hidden">

                    {/* Glow Effect behind Active Card */}
                    <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-[240px] md:w-[400px] h-[240px] md:h-[400px] bg-black/30 rounded-full blur-[60px] md:blur-[120px] pointer-events-none z-0"></div>

                    {slides.map((slide, index) => {
                        const distance = index - activeIndex;

                        // Calculate styling based on distance
                        let translateX = "0%";
                        let scale = 1;
                        let opacity = 1;
                        let zIndex = 50 - index;
                        let blur = "blur(0px)";

                        if (distance === 0) {
                            // Active Slide
                            translateX = "0%";
                            scale = 1;
                            opacity = 1;
                        } else if (distance > 0) {
                            // Stacked to the right
                            const translationSteps = [0, 45, 80, 105, 120];
                            translateX = `${translationSteps[Math.min(distance, 4)]}%`;
                            scale = 1 - (distance * 0.1);
                            opacity = 1;
                        } else {
                            // Slid out to the left (past active)
                            translateX = "-100%";
                            scale = 0.8;
                            opacity = 0;
                            zIndex = 0;
                        }

                        // For infinite loop effect
                        let wrappedDistance = distance;
                        if (wrappedDistance < 0) wrappedDistance += slides.length;

                        // We will use wrapped distance to make it infinite
                        if (wrappedDistance === 0) {
                            translateX = "0%";
                            scale = 1;
                            opacity = 1;
                            zIndex = 50;
                        } else if (wrappedDistance > 0 && wrappedDistance < 5) {
                            const translationSteps = [0, 110, 150, 185, 215];
                            const scaleSteps = [1, 0.95, 0.86, 0.76, 0.65];

                            translateX = `${translationSteps[Math.min(wrappedDistance, 4)]}%`;
                            scale = scaleSteps[Math.min(wrappedDistance, 4)];
                            opacity = 1;
                            zIndex = 50 - wrappedDistance;
                        }

                        return (
                            <div
                                key={slide.id}
                                className={`absolute left-0 top-0 w-[260px] sm:w-[280px] md:w-[450px] h-[350px] md:h-[550px] rounded-[32px] md:rounded-[40px] overflow-hidden transition-all duration-[1500ms] ease-in-out shadow-2xl ${slide.bg}`}
                                style={{
                                    transform: `translateX(${translateX}) scale(${scale})`,
                                    transformOrigin: 'center left',
                                    zIndex: zIndex,
                                    opacity: opacity,
                                }}
                            >
                                {slide.image && (
                                    <img
                                        src={slide.image}
                                        alt=""
                                        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                                    />
                                )}

                                {/* Slide Content */}
                                {slide.type === 'text' && (
                                    <div className={`relative z-10 w-full h-full p-8 md:p-12 flex flex-col justify-between ${slide.image ? 'bg-gradient-to-t from-black/85 via-black/25 to-black/45' : 'bg-gradient-to-br from-white/10 to-black/10'}`}>
                                        <h3 className="text-[clamp(1.5rem,2.2vw+0.25rem,2.5rem)] leading-[1.12] font-light text-white tracking-tight break-words whitespace-pre-line drop-shadow-md">
                                            {slide.title}
                                        </h3>
                                        <p className="text-white/80 text-[clamp(0.875rem,0.5vw+0.65rem,1rem)] font-light max-w-[250px] leading-relaxed drop-shadow-md">
                                            {slide.subtitle}
                                        </p>
                                    </div>
                                )}

                                {slide.type === 'image' && (
                                    <img
                                        src={(slide as any).src}
                                        alt="Slide image"
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}
