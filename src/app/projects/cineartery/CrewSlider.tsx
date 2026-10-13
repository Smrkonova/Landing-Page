"use client";

import React, { useState, useEffect } from 'react';

const slides = [
    { 
        id: 1,
        type: 'text', 
        title: "DIRECTOR", 
        subtitle: "STRATEGY", 
        description: "Aligned every decision with\nCineartery's vision and user journey.",
        bg: "bg-[#555a3c]" 
    },
    { 
        id: 2,
        type: 'image', 
        src: "/images/projects/cineartery/action.png",
        bg: "bg-[#333333]" 
    },
    { id: 3, type: 'empty', bg: "bg-[#422c2a]" }, // Dark red/brown
    { id: 4, type: 'empty', bg: "bg-[#25282a]" }, // Dark grey
    { id: 5, type: 'empty', bg: "bg-[#181a1b]" }, // Darker grey
];

export default function CrewSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full bg-[#111111] text-white py-16 md:py-32 overflow-hidden relative">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center">
                
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16 flex flex-col items-center px-2">
                    <h2 className="text-[clamp(1.5rem,5.5vw,2.5rem)] md:text-[clamp(1.85rem,4vw+0.5rem,6rem)] uppercase tracking-tight md:tracking-[0.0625rem] leading-[1.15em] mb-4 md:mb-8 text-center">
                        <span className="font-[200] text-[#F7F3EB] block">EVERY GREAT PRODUCTION</span>
                        <span className="font-[800] text-white block">HAS THE BEST CREW</span>
                    </h2>
                    <p className="text-[#8C8C8C] text-[clamp(12px,0.7vw+4px,16px)] font-[400] max-w-md leading-relaxed text-center">
                        We knew the target audience, after numerous market studies, analysis of an ideal user of Cineartery, every design decision was focused on making that vision clear, memorable, and easy to trust from the very first interaction.
                    </p>
                </div>

                {/* Mobile Slider: Auto-scrolling Cards (< md) */}
                <div className="block md:hidden w-full mt-[51.4px] overflow-hidden">
                    <style>{`
                        @keyframes crew-slide-mobile {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                        .animate-crew-mobile {
                            animation: crew-slide-mobile 16s linear infinite;
                        }
                        .animate-crew-mobile:hover,
                        .animate-crew-mobile:active {
                            animation-play-state: paused;
                        }
                    `}</style>
                    <div className="flex w-max animate-crew-mobile gap-3.5 pb-2">
                        {[...slides, ...slides].map((slide, idx) => (
                            <div 
                                key={`${slide.id}-${idx}`}
                                className={`shrink-0 w-[149.6px] h-[228px] rounded-[14.6px] overflow-hidden shadow-xl relative rotate-0 opacity-100 ${slide.bg}`}
                            >
                                {slide.type === 'text' && (
                                    <div className="w-full h-full p-4 flex flex-col justify-between text-left">
                                        <div>
                                            <h3 className="text-base font-[200] text-[#e0e0e0] tracking-wide uppercase leading-tight">
                                                {slide.title}
                                            </h3>
                                            <h4 className="text-[10px] font-bold text-white tracking-widest uppercase mt-1">
                                                {slide.subtitle}
                                            </h4>
                                        </div>
                                        <p className="text-white/80 text-[10px] font-light leading-relaxed">
                                            {slide.description}
                                        </p>
                                    </div>
                                )}

                                {slide.type === 'image' && (
                                    <img 
                                        src={slide.src} 
                                        alt="Crew action" 
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop Slider Container (>= md) */}
                <div className="hidden md:flex relative w-full h-[480px] md:h-[600px] items-center justify-center mt-12 md:mt-16 max-w-7xl mx-auto overflow-visible">
                    
                    {/* Glow Effect behind Active Card */}
                    <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#d3bca8]/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

                    {slides.map((slide, index) => {
                        const distance = index - activeIndex;

                        let translateX = "0%";
                        let scale = 1;
                        let opacity = 1;
                        let zIndex = 50 - index;

                        let wrappedDistance = distance;
                        if (wrappedDistance < 0) wrappedDistance += slides.length;
                        
                        if (wrappedDistance === 0) {
                            translateX = "-35%"; // shift active card cleanly
                            scale = 1;
                            opacity = 1;
                            zIndex = 50;
                        } else if (wrappedDistance > 0 && wrappedDistance < slides.length) {
                            const translationSteps = [0, 55, 95, 125, 145];
                            const scaleSteps = [1, 0.9, 0.8, 0.7, 0.6];
                            
                            translateX = `${translationSteps[Math.min(wrappedDistance, 4)]}%`;
                            scale = scaleSteps[Math.min(wrappedDistance, 4)];
                            opacity = 1;
                            zIndex = 50 - wrappedDistance;
                        }

                        return (
                            <div 
                                key={slide.id}
                                className={`absolute left-[15%] lg:left-[25%] top-0 w-[320px] md:w-[420px] lg:w-[480px] h-[440px] md:h-[550px] rounded-[24px] md:rounded-[32px] overflow-hidden transition-all duration-[1500ms] ease-in-out shadow-2xl ${slide.bg}`}
                                style={{
                                    transform: `translateX(${translateX}) scale(${scale})`,
                                    transformOrigin: 'center left',
                                    zIndex: zIndex,
                                    opacity: opacity,
                                }}
                            >
                                {/* Slide Content */}
                                {slide.type === 'text' && (
                                    <div className="w-full h-full p-8 md:p-12 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-[clamp(1.85rem,3.5vw+0.5rem,3.75rem)] font-light text-[#e0e0e0] tracking-wide mb-2 uppercase">
                                                {slide.title}
                                            </h3>
                                            <h4 className="text-[clamp(1.15rem,1.8vw+0.4rem,1.875rem)] font-bold text-white tracking-widest uppercase">
                                                {slide.subtitle}
                                            </h4>
                                        </div>
                                        <p className="text-white/80 text-[clamp(10px,0.6vw+5px,14px)] font-light max-w-[250px] leading-relaxed whitespace-pre-line">
                                            {slide.description}
                                        </p>
                                    </div>
                                )}

                                {slide.type === 'image' && (
                                    <img 
                                        src={slide.src} 
                                        alt="Crew action" 
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
