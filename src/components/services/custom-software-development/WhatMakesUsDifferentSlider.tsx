"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
    { 
        id: 1, 
        type: 'text', 
        title: "CRM & ERP\nSYSTEMS", 
        subtitle: "Assign roles, monitor progress, and coordinate enterprise workflows seamlessly.", 
        bg:"bg-[linear-gradient(150deg,#D8CFBE_22.55%,#E9AB39_87.59%)]"
    },
    { 
        id: 2, 
        type: 'image', 
        src: "/images/services/website/mobile2.png", // Runner placeholder
        bg: "bg-gray-300" 
    },
    { id: 3, type: 'empty', bg: "bg-[#C6DCFC]" }, // Light blue
    { id: 4, type: 'empty', bg: "bg-[#ECD9BB]" }, // Tan
    { id: 5, type: 'empty', bg: "bg-[#DFE8B4]" }, // Light green
    { id: 6, type: 'empty', bg: "bg-[#EED3D9]" }, // Pink
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
                        Types of Software We Develop
                    </h2>
                </div>

                {/* Slider Container */}
                <div className="relative w-full h-[400px] md:h-[600px] flex items-center mt-12">
                    
                    {/* Glow Effect behind Active Card */}
                    <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-black/30 rounded-full blur-[120px] pointer-events-none z-0"></div>

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
                            // Use a diminishing translation formula for the stacked effect
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

                        // For infinite loop effect (when index is less than activeIndex but we want to show it on the right if it's wrapping)
                        // Simple array rotation logic:
                        let wrappedDistance = distance;
                        if (wrappedDistance < 0) wrappedDistance += slides.length;
                        
                        // We will use wrapped distance to make it infinite
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
                                className={`absolute left-0 top-0 w-[280px] md:w-[450px] h-[350px] md:h-[550px] rounded-[32px] md:rounded-[40px] overflow-hidden transition-all duration-[1500ms] ease-in-out shadow-2xl ${slide.bg}`}
                                style={{
                                    transform: `translateX(${translateX}) scale(${scale})`,
                                    transformOrigin: 'center left',
                                    zIndex: zIndex,
                                    opacity: opacity,
                                }}
                            >
                                {/* Slide Content */}
                                {slide.type === 'text' && (
                                    <div className="w-full h-full p-8 md:p-12 flex flex-col justify-between bg-gradient-to-br from-white/10 to-black/10">
                                        <h3 className="text-[clamp(1.5rem,2.2vw+0.25rem,2.5rem)] leading-[1.12] font-light text-white tracking-tight break-words whitespace-pre-line">
                                            {slide.title}
                                        </h3>
                                        <p className="text-white/80 text-[clamp(0.8125rem,0.4vw+0.65rem,0.9375rem)] font-light max-w-[250px] leading-relaxed">
                                            {slide.subtitle}
                                        </p>
                                    </div>
                                )}

                                {slide.type === 'image' && (
                                    <img 
                                        src={slide.src} 
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
