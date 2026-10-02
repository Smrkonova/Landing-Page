"use client";

import React, { useState, useEffect } from 'react';

const slides = [
    { 
        id: 1, 
        title: "Feature\nEnhancements",   
        subtitle: "Add new pages, modules and functionality without rebuilding your platform.", 
        bg: "bg-[linear-gradient(150deg,#53A18B_22.55%,#0060FB_87.59%)]"
    },
    { 
        id: 2, 
        title: "UI\nImprovements", 
        subtitle: "Refresh interfaces, improve navigation and modernise the user experience.", 
        bg: "bg-[linear-gradient(150deg,#004496_22.55%,#3AA0FF_87.59%)]" 
    },
    { 
        id: 3, 
        title: "Performance\nOptimisation", 
        subtitle: "Improve loading speed and overall user experience.", 
        bg: "bg-[linear-gradient(150deg,#5B5F97_22.55%,#7C3AED_87.59%)]" 
    },
    { 
        id: 4, 
        title: "Platform\nSecurity", 
        subtitle: "Keep your platform protected with regular updates and security improvements.", 
        bg: "bg-[linear-gradient(150deg,#1E293B_22.55%,#0D9488_87.59%)]" 
    },
    { 
        id: 5, 
        title: "Content\nManagement", 
        subtitle: "Update text, images, videos, blogs and other content whenever required.", 
        bg: "bg-[linear-gradient(150deg,#435975_22.55%,#53A18B_87.59%)]" 
    },
    { 
        id: 6, 
        title: "Technical\nSupport", 
        subtitle: "Resolve bugs, troubleshoot issues and provide technical assistance when needed.", 
        bg: "bg-[linear-gradient(150deg,#0060FB_22.55%,#53A18B_87.59%)]" 
    },
];

export default function WhatMakesUsDifferentSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full max-w-full bg-white text-black py-24 md:py-32 overflow-hidden relative">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col gap-12 overflow-hidden">
                
                {/* Section Header */}
                <div className="flex flex-col gap-3">
                    <h2 className="text-[clamp(1.25rem,1.8vw+0.5rem,1.75rem)] font-light text-gray-800 tracking-wide uppercase">
                        What We Can Help With
                    </h2>
                    <p className="text-gray-500 text-[clamp(0.875rem,0.5vw+0.65rem,1rem)] font-light max-w-xl leading-relaxed">
                        As your business grows, your digital platform should grow too.
                    </p>
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

                        if (distance === 0) {
                            translateX = "0%";
                            scale = 1;
                            opacity = 1;
                        } else if (distance > 0) {
                            const translationSteps = [0, 45, 80, 105, 120, 130];
                            translateX = `${translationSteps[Math.min(distance, 5)]}%`;
                            scale = 1 - (distance * 0.1);
                            opacity = 1;
                        } else {
                            translateX = "-100%";
                            scale = 0.8;
                            opacity = 0;
                            zIndex = 0;
                        }

                        // Infinite loop wrapping
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
                                className={`absolute left-0 top-0 w-[260px] sm:w-[280px] md:w-[450px] h-[350px] md:h-[550px] rounded-[32px] md:rounded-[40px] overflow-hidden transition-all duration-[1500ms] ease-in-out shadow-2xl ${slide.bg}`}
                                style={{
                                    transform: `translateX(${translateX}) scale(${scale})`,
                                    transformOrigin: 'center left',
                                    zIndex: zIndex,
                                    opacity: opacity,
                                }}
                            >
                                <div className="w-full h-full p-8 md:p-12 flex flex-col justify-between bg-gradient-to-br from-white/15 to-black/30">
                                    <h3 className="text-[34px] sm:text-[38px] md:text-[52px] leading-[1.1] font-light text-white tracking-tight whitespace-pre-line">
                                        {slide.title}
                                    </h3>
                                    <p className="text-white/90 text-[clamp(0.8125rem,0.4vw+0.65rem,0.9375rem)] font-light max-w-[280px] leading-relaxed">
                                        {slide.subtitle}
                                    </p>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}
