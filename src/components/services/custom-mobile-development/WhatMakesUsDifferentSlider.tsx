"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
    { 
        id: 1,
        type: 'text', 
        title: "User Friendly\nExperience",   
        subtitle: "Simple navigation that helps users complete tasks quickly.", 
        bg: "bg-[linear-gradient(150deg,#D8CFBE_22.55%,#E9AB39_87.59%)]",
        image: "/images/services/website/mobile/image 94.png"
    },
    { 
        id: 2,
        type: 'text', 
        title: "Fast\nPerformance", 
        subtitle: "Apps designed to load quickly and run smoothly across devices.", 
        bg: "bg-[linear-gradient(150deg,#435975_22.55%,#2A3B4C_87.59%)]",
        image: "/images/services/website/mobile/image 95.png"
    },
    { 
        id: 3, 
        type: 'text', 
        title: "Secure\nAuthentication", 
        subtitle: "Safe login systems with modern security standards.", 
        bg: "bg-[#BFD4FF]",
        image: "/images/services/website/mobile/image 96.png"
    },
    { 
        id: 4, 
        type: 'text', 
        title: "Built To\nScale", 
        subtitle: "Whether you have 500 users or 5 million, your application can grow with your business.", 
        bg: "bg-[#E6D6B8]",
        image: "/images/services/website/mobile/image 97.png"
    },
    { 
        id: 5, 
        type: 'text', 
        title: "Easy Content\nManagement", 
        subtitle: "Manage users, products and content from an admin dashboard.", 
        bg: "bg-[#DFE8B4]",
        image: "/images/services/website/mobile/image 98.png"
    },
    { 
        id: 6, 
        type: 'text', 
        title: "Reliable &\nSecure", 
        subtitle: "Built using modern development standards with regular updates and maintenance.", 
        bg: "bg-[#EED3D9]",
        image: "/images/services/website/mobile/image 99.png"
    },
];

export default function WhatMakesUsDifferentSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [mobileIndex, setMobileIndex] = useState(0);
    const mobileTrackRef = React.useRef<HTMLDivElement>(null);

    // Desktop auto-rotation
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // Mobile auto-slide
    useEffect(() => {
        if (typeof window === "undefined") return;
        const interval = setInterval(() => {
            if (window.innerWidth < 768 && mobileTrackRef.current) {
                setMobileIndex((prev) => {
                    const next = (prev + 1) % slides.length;
                    const cardWidth = mobileTrackRef.current?.firstElementChild?.clientWidth || 280;
                    mobileTrackRef.current?.scrollTo({
                        left: next * (cardWidth + 16),
                        behavior: "smooth"
                    });
                    return next;
                });
            }
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const handleMobileScroll = () => {
        if (mobileTrackRef.current) {
            const cardWidth = mobileTrackRef.current.firstElementChild?.clientWidth || 280;
            const newIndex = Math.round(mobileTrackRef.current.scrollLeft / (cardWidth + 16));
            if (newIndex >= 0 && newIndex < slides.length && newIndex !== mobileIndex) {
                setMobileIndex(newIndex);
            }
        }
    };

    const scrollMobileTo = (index: number) => {
        if (mobileTrackRef.current) {
            const cardWidth = mobileTrackRef.current.firstElementChild?.clientWidth || 280;
            mobileTrackRef.current.scrollTo({
                left: index * (cardWidth + 16),
                behavior: "smooth"
            });
            setMobileIndex(index);
        }
    };

    return (
        <section className="w-full max-w-full bg-white text-black py-12 md:py-20 overflow-hidden relative">
            <div className="w-full max-w-8xl mx-auto px-6 md:px-12 flex flex-col gap-8 overflow-hidden">
                
                {/* Section Header */}
                <div>
                    <h2 className="text-[clamp(1.125rem,2.5vw+0.25rem,2rem)] font-[300] text-gray-800 tracking-wide uppercase">
                        WHAT MAKES OUR APPS DIFFERENT.
                    </h2>
                </div>

                {/* Desktop Slider Container (md and up) */}
                <div className="hidden md:flex relative w-full max-w-full h-[600px] items-center mt-12 overflow-hidden">
                    
                    {/* Glow Effect behind Active Card */}
                    <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-black/30 rounded-full blur-[120px] pointer-events-none z-0"></div>

                    {slides.map((slide, index) => {
                        const distance = index - activeIndex;

                        // Calculate styling based on distance
                        let translateX = "0%";
                        let scale = 1;
                        let opacity = 1;
                        let zIndex = 50 - index;

                        if (distance === 0) {
                            // Active Slide
                            translateX = "0%";
                            scale = 1;
                            opacity = 1;
                        } else if (distance > 0) {
                            // Stacked to the right
                            const translationSteps = [0, 45, 80, 105, 120, 130];
                            translateX = `${translationSteps[Math.min(distance, 5)]}%`;
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
                        
                        if (wrappedDistance === 0) {
                            translateX = "0%";
                            scale = 1;
                            opacity = 1;
                            zIndex = 50;
                        } else if (wrappedDistance > 0 && wrappedDistance < 6) {
                            const translationSteps = [0, 110, 150, 185, 215, 240];
                            const scaleSteps = [1, 0.95, 0.86, 0.76, 0.65, 0.53];
                            
                            translateX = `${translationSteps[Math.min(wrappedDistance, 5)]}%`;
                            scale = scaleSteps[Math.min(wrappedDistance, 5)];
                            opacity = 1;
                            zIndex = 50 - wrappedDistance;
                        }

                        return (
                            <div 
                                key={slide.id}
                                className={`absolute left-0 top-0 w-[450px] h-[550px] rounded-[40px] overflow-hidden transition-all duration-[1500ms] ease-in-out shadow-2xl ${slide.bg}`}
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
                                    <div className={`relative z-10 w-full h-full p-12 flex flex-col justify-between ${slide.image ? 'bg-gradient-to-t from-black/85 via-black/25 to-black/45' : 'bg-gradient-to-br from-white/10 to-black/10'}`}>
                                        <h3 className="text-[clamp(1.5rem,2.2vw+0.25rem,2.5rem)] leading-[1.12] font-light text-white tracking-tight break-words whitespace-pre-line drop-shadow-md">
                                            {slide.title}
                                        </h3>
                                        <p className="text-white/80 text-[clamp(0.875rem,0.5vw+0.65rem,1rem)] font-light max-w-[250px] leading-relaxed drop-shadow-md">
                                            {slide.subtitle}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}

                </div>

                {/* Mobile Slide Carousel (< md) */}
                <div className="flex md:hidden flex-col gap-4 mt-6">
                    <div
                        ref={mobileTrackRef}
                        onScroll={handleMobileScroll}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-4 py-4 px-1 no-scrollbar scroll-smooth -mx-6 px-6"
                    >
                        {slides.map((slide) => (
                            <div
                                key={slide.id}
                                className={`shrink-0 w-[80vw] max-w-[320px] h-[460px] snap-center rounded-[32px] overflow-hidden relative shadow-xl ${slide.bg}`}
                            >
                                {slide.image && (
                                    <img
                                        src={slide.image}
                                        alt=""
                                        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                                    />
                                )}

                                <div className={`relative z-10 w-full h-full p-8 flex flex-col justify-between ${slide.image ? 'bg-gradient-to-t from-black/85 via-black/25 to-black/45' : 'bg-gradient-to-br from-white/10 to-black/10'}`}>
                                    <h3 className="text-[28px] leading-[1.15] font-light text-white tracking-tight break-words whitespace-pre-line drop-shadow-md">
                                        {slide.title}
                                    </h3>
                                    <p className="text-white/85 text-[14px] font-light max-w-[260px] leading-relaxed drop-shadow-md">
                                        {slide.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Slide Indicator Dots */}
                    <div className="flex items-center justify-center gap-1.5 pt-2">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => scrollMobileTo(i)}
                                className={`transition-all duration-300 rounded-full cursor-pointer ${
                                    i === mobileIndex ? 'w-5 h-1.5 bg-black' : 'w-1.5 h-1.5 bg-gray-300'
                                }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
