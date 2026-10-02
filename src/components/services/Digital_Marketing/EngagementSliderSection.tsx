"use client";

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const engagementCards = [
    { 
        id: 1, 
        title: "MARKETING\nSTRATEGY", 
        gradient: "bg-white bg-[radial-gradient(ellipse_at_top_left,#6B86DF_0%,transparent_60%),radial-gradient(ellipse_at_bottom_left,#E03667_0%,transparent_70%)]", 
        rotate: "-rotate-[7deg]", 
        y: "translate-y-2 md:translate-y-3", 
        iconColor: "#E03667" 
    },
    { 
        id: 2, 
        title: "COMPETITOR\nANALYSIS", 
        gradient: "bg-white bg-[radial-gradient(ellipse_at_top_left,#B8B0EA_0%,transparent_60%),radial-gradient(ellipse_at_bottom_left,#EA9FC0_0%,transparent_70%)]", 
        rotate: "rotate-[6deg]", 
        y: "-translate-y-1 md:-translate-y-2", 
        iconColor: "#B89FD6" 
    },
    { 
        id: 3, 
        title: "KEYWORD\nRESEARCH", 
        gradient: "bg-white bg-[radial-gradient(ellipse_at_top,#FFF0F3_0%,transparent_55%),radial-gradient(ellipse_at_bottom,#F55779_0%,transparent_75%)]", 
        rotate: "-rotate-[6deg]", 
        y: "translate-y-1 md:translate-y-2", 
        iconColor: "#F55779" 
    },
    { 
        id: 4, 
        title: "WEBSITE\nAUDIT", 
        gradient: "bg-white bg-[radial-gradient(ellipse_at_top_left,#79B3BF_0%,transparent_60%),radial-gradient(ellipse_at_bottom_left,#DE5F59_0%,transparent_70%)]", 
        rotate: "rotate-[5deg]", 
        y: "-translate-y-1 md:-translate-y-2", 
        iconColor: "#DE5F59" 
    },
    { 
        id: 5, 
        title: "GOOGLE BUSINESS\nPROFILE SETUP", 
        gradient: "bg-white bg-[radial-gradient(ellipse_at_top_left,#7A8EC7_0%,transparent_60%),radial-gradient(ellipse_at_bottom_left,#CE3F68_0%,transparent_70%)]", 
        rotate: "-rotate-[6deg]", 
        y: "translate-y-2 md:translate-y-3", 
        iconColor: "#CE3F68" 
    },
    { 
        id: 6, 
        title: "SEO\nOPTIMISATION", 
        gradient: "bg-white bg-[radial-gradient(ellipse_at_top,#A1FFF7_0%,transparent_55%),radial-gradient(ellipse_at_bottom,#3AA0FF_0%,transparent_75%)]", 
        rotate: "rotate-[6deg]", 
        y: "-translate-y-1 md:-translate-y-2", 
        iconColor: "#0060FB" 
    },
    { 
        id: 7, 
        title: "GOOGLE ADS\nSETUP", 
        gradient: "bg-white bg-[radial-gradient(ellipse_at_top_left,#3AA0FF_0%,transparent_60%),radial-gradient(ellipse_at_bottom_left,#6FB29E_0%,transparent_70%)]", 
        rotate: "-rotate-[6deg]", 
        y: "translate-y-2 md:translate-y-3", 
        iconColor: "#E03667" 
    },
    { 
        id: 8, 
        title: "META ADS\nSETUP", 
        gradient: "bg-white bg-[radial-gradient(ellipse_at_top_left,#A1A7FD_0%,transparent_60%),radial-gradient(ellipse_at_bottom_left,#F7A9D8_0%,transparent_70%)]", 
        rotate: "rotate-[5deg]", 
        y: "-translate-y-1 md:-translate-y-2", 
        iconColor: "#B89FD6" 
    },
    { 
        id: 9, 
        title: "CONVERSION\nTRACKING", 
        gradient: "bg-white bg-[radial-gradient(ellipse_at_top,#FFDF88_0%,transparent_55%),radial-gradient(ellipse_at_bottom,#F55779_0%,transparent_75%)]", 
        rotate: "-rotate-[5deg]", 
        y: "translate-y-1 md:translate-y-2", 
        iconColor: "#F55779" 
    },
    { 
        id: 10, 
        title: "ANALYTICS\nSETUP", 
        gradient: "bg-white bg-[radial-gradient(ellipse_at_top_left,#6EF3FF_20%,transparent_60%),radial-gradient(ellipse_at_bottom_left,#1530C8_0%,transparent_70%)]", 
        rotate: "rotate-[6deg]", 
        y: "-translate-y-1 md:-translate-y-2", 
        iconColor: "#DE5F59" 
    },
    { 
        id: 11, 
        title: "MONTHLY\nREPORTS", 
        gradient: "bg-white bg-[radial-gradient(ellipse_at_top,#3AA0FF_10%,transparent_60%),radial-gradient(ellipse_at_bottom_left,#6FB29E_0%,transparent_70%)]", 
        rotate: "-rotate-[6deg]", 
        y: "translate-y-2 md:translate-y-3", 
        iconColor: "#CE3F68" 
    },
    { 
        id: 12, 
        title: "LANDING PAGE\nRECOMMENDATIONS", 
        gradient: "bg-white bg-[radial-gradient(ellipse_at_top_left,#A1A7FD_0%,transparent_60%),radial-gradient(ellipse_at_bottom_left,#3AA0FF_0%,transparent_70%)]", 
        rotate: "rotate-[5deg]", 
        y: "-translate-y-1 md:-translate-y-2", 
        iconColor: "#3AA0FF" 
    },
    { 
        id: 13, 
        title: "ONGOING\nOPTIMISATION", 
        gradient: "bg-white bg-[radial-gradient(ellipse_at_top,#A1FFF7_0%,transparent_55%),radial-gradient(ellipse_at_bottom,#6FB29E_0%,transparent_75%)]", 
        rotate: "-rotate-[5deg]", 
        y: "translate-y-1 md:translate-y-2", 
        iconColor: "#10B981" 
    }
];

// Duplicate items for infinite carousel wrap
const slideCards = [...engagementCards, ...engagementCards];

export default function EngagementSliderSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { 
            loop: true, 
            align: 'start',
            dragFree: false,
        },
        [Autoplay({ delay: 2800, stopOnInteraction: false, stopOnMouseEnter: true })]
    );

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="w-full max-w-full bg-white py-16 md:py-24 overflow-hidden relative">
            {/* Ambient Background Glow Aura */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-[#6B86DF]/15 via-[#F55779]/20 to-[#7A8EC7]/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>

            {/* Title Container */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 mb-8 md:mb-12 flex items-end justify-between">
                <div>
                    <h2 className="text-[clamp(1.75rem,3.8vw+0.5rem,3.875rem)] leading-[1.1] tracking-tight uppercase">
                        <span className="font-black text-[#1a1a1a]">WHAT'S </span>
                        <span className="font-light text-gray-400">INCLUDED</span>
                    </h2>
                </div>

                {/* Prev / Next controls */}
                <div className="hidden sm:flex items-center gap-3">
                    <button 
                        onClick={scrollPrev}
                        className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all shadow-sm"
                        aria-label="Previous card"
                    >
                        <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button 
                        onClick={scrollNext}
                        className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all shadow-sm"
                        aria-label="Next card"
                    >
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Embla Carousel Viewport */}
            <div className="w-full overflow-hidden cursor-grab active:cursor-grabbing py-4 md:py-8" ref={emblaRef}>
                <div className="flex gap-4 md:gap-6 px-6 md:px-12 items-center">
                    {slideCards.map((card, idx) => (
                        <div
                            key={`${card.id}-${idx}`}
                            className="flex-[0_0_240px] sm:flex-[0_0_260px] md:flex-[0_0_280px] lg:flex-[0_0_300px] min-w-0 py-8 px-2"
                        >
                            <div
                                className={`group relative w-full h-[340px] md:h-[380px] lg:h-[400px] rounded-3xl p-7 flex flex-col items-center justify-center transition-all duration-500 ease-out 
                                hover:rotate-0 hover:-translate-y-5 hover:scale-105 hover:z-30 
                                shadow-[0_15px_35px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] border border-gray-200 hover:border-gray-300 backdrop-blur-2xl 
                                ${card.gradient} ${idx % 2 === 0 ? "-rotate-[6deg] translate-y-2 md:translate-y-3" : "rotate-[6deg] -translate-y-1 md:-translate-y-2"}`}
                            >
                                {/* Soft Blurred Glow Behind */}
                                <div className={`absolute inset-0 -z-10 ${card.gradient} scale-[1.15] blur-[30px] opacity-70 rounded-3xl group-hover:opacity-100 group-hover:scale-[1.25] transition-all duration-500`}></div>

                                {/* Inner Glass Highlight */}
                                <div className="absolute inset-0 rounded-3xl border-[1.5px] border-white/30 pointer-events-none mix-blend-overlay"></div>

                                {/* Card Content */}
                                <div className="flex flex-col items-center gap-5 my-auto">
                                    <h3 className="text-black font-bold text-[clamp(12px,0.4vw+8px,15px)] text-center tracking-widest leading-relaxed whitespace-pre-line">
                                        {card.title}
                                    </h3>

                                    {/* White Checkmark Icon */}
                                    <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.08)] mt-2 transition-transform duration-300 group-hover:scale-110">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 6L9 17L4 12" stroke={card.iconColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Swipe Hint */}
            <div className="px-6 flex md:hidden items-center justify-between mt-2">
                <span className="text-[clamp(10px,0.4vw+5px,12px)] font-semibold tracking-wider text-gray-400 uppercase flex items-center gap-1.5">
                    Swipe or auto-advances
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </span>
            </div>
        </section>
    );
}
