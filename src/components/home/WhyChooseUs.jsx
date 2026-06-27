"use client";

import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CyberGlassCard from "@/components/ui/CyberGlassCard";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const reasons = [
  {
    title: "Campaign launched.",
    desc: "No one tracked what happened after.",
    glow: "rgba(0, 195, 255, 0.3)", // Vibrant Cyan
    border: "rgba(0, 195, 255, 0.6)",
  },
  {
    title: "Leads came in.",
    desc: "Sales never saw them.",
    glow: "rgba(255, 42, 133, 0.3)", // Vibrant Pink
    border: "rgba(255, 42, 133, 0.6)",
  },
  {
    title: "Content posted.",
    desc: "No conversation followed.",
    glow: "rgba(138, 43, 226, 0.3)", // Vibrant Purple
    border: "rgba(138, 43, 226, 0.6)",
  },
  {
    title: "Data collected.",
    desc: "Insights lost somewhere in between.",
    glow: "rgba(255, 140, 0, 0.3)", // Vibrant Orange
    border: "rgba(255, 140, 0, 0.6)",
  },
  {
    title: "Ads are running.",
    desc: "Nobody knows what’s working.",
    glow: "rgba(0, 230, 118, 0.3)", // Vibrant Spring Green
    border: "rgba(0, 230, 118, 0.6)",
  },
  {
    title: "Traffic increased.",
    desc: "Revenue stayed silent.",
    glow: "rgba(255, 61, 0, 0.3)", // Vibrant Deep Orange/Red
    border: "rgba(255, 61, 0, 0.6)",
  }
];

const WhyChooseUs = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        // Animations removed
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full bg-[#f2f2f6] text-black py-32 md:py-48 px-6 md:px-12 lg:px-24 relative overflow-hidden">
            
            {/* Background Grid & Arcs (Reference Image Style) */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-40">
                <svg className="w-full h-full min-w-[1400px]" viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Perspective Grid */}
                    <path d="M0 512H1440" stroke="black" strokeOpacity="0.05" strokeWidth="1" />
                    <path d="M0 640H1440" stroke="black" strokeOpacity="0.05" strokeWidth="1" />
                    <path d="M0 768H1440" stroke="black" strokeOpacity="0.05" strokeWidth="1" />
                    <path d="M720 0V1024" stroke="black" strokeOpacity="0.05" strokeWidth="1" />
                    <path d="M520 0V1024" stroke="black" strokeOpacity="0.05" strokeWidth="1" />
                    <path d="M920 0V1024" stroke="black" strokeOpacity="0.05" strokeWidth="1" />
                    
                    {/* Concentric Arcs */}
                    <circle cx="1100" cy="512" r="400" stroke="black" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="1100" cy="512" r="500" stroke="black" strokeOpacity="0.05" strokeWidth="1" />
                    <circle cx="1100" cy="512" r="700" stroke="black" strokeOpacity="0.05" strokeWidth="1" />
                    
                    {/* Tech details */}
                    <text x="1100" y="100" fontSize="10" fill="black" fillOpacity="0.3" fontFamily="monospace">GRID-01</text>
                    <text x="750" y="500" fontSize="10" fill="black" fillOpacity="0.3" fontFamily="monospace">INTERSECT_004</text>
                    <circle cx="720" cy="512" r="3" fill="black" fillOpacity="0.2" />
                    <circle cx="920" cy="512" r="3" fill="black" fillOpacity="0.2" />
                </svg>
            </div>

            {/* Ambient Cyber Glow - Light Theme (Huge Blue Arc on the Right) */}
            <div className="absolute top-1/2 right-0 w-[1000px] h-[1000px] bg-blue-500/30 rounded-full blur-[200px] mix-blend-multiply pointer-events-none translate-x-1/3 -translate-y-1/2 z-0" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-slate-300/40 rounded-full blur-[150px] mix-blend-multiply pointer-events-none -translate-x-1/2 translate-y-1/2 z-0" />

            <div className="max-w-7xl mx-auto flex flex-col gap-24 relative z-10">
                
                {/* Section Header */}
                <div className="text-center flex flex-col gap-6 max-w-4xl mx-auto">
                    <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-500 reveal-text">
                        03 / THE BROKEN SYSTEM
                    </h2>
                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black leading-[1.1] reveal-text uppercase">
                        LOOKS BUSY. <br className="hidden md:block" />
                        <span className="text-gray-400">BUT IT'S BROKEN.</span>
                    </h3>
                    <p className="text-xl md:text-3xl font-light uppercase tracking-widest text-gray-500 reveal-text mt-8">
                        EVERYTHING IS SEPARATE. NOTHING IS CONNECTED.
                    </p>
                    <p className="text-base md:text-lg text-gray-400 font-mono reveal-text max-w-2xl mx-auto mt-4">
                        [ Just activity. No results. Everything is moving. Nothing is growing. ]
                    </p>
                </div>

                {/* Staggered Cyber Glass Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-start">
                    
                    {/* Column 1 */}
                    <div className="flex flex-col gap-8 md:gap-12">
                        {reasons.slice(0, 2).map((reason, i) => (
                            <CyberGlassCard 
                                key={i} 
                                glowColor={reason.glow} 
                                borderGlowColor={reason.border}
                                delay={i * 0.2}
                            >
                                <div className="flex flex-col gap-6 p-10 md:p-14 h-full min-h-[320px] justify-center">
                                    <div className="w-12 h-1 bg-black/10 rounded-full mb-4" />
                                    <h4 className="text-3xl font-bold uppercase tracking-tighter text-black">{reason.title}</h4>
                                    <p className="text-gray-600 font-medium text-lg leading-relaxed">
                                        {reason.desc}
                                    </p>
                                </div>
                            </CyberGlassCard>
                        ))}
                    </div>

                    {/* Column 2 (Staggered Down) */}
                    <div className="flex flex-col gap-8 md:gap-12 lg:mt-24">
                        {reasons.slice(2, 4).map((reason, i) => (
                            <CyberGlassCard 
                                key={i + 2} 
                                glowColor={reason.glow} 
                                borderGlowColor={reason.border}
                                delay={0.2 + (i * 0.2)}
                            >
                                <div className="flex flex-col gap-6 p-10 md:p-14 h-full min-h-[320px] justify-center">
                                    <div className="w-12 h-1 bg-black/10 rounded-full mb-4" />
                                    <h4 className="text-3xl font-bold uppercase tracking-tighter text-black">{reason.title}</h4>
                                    <p className="text-gray-600 font-medium text-lg leading-relaxed">
                                        {reason.desc}
                                    </p>
                                </div>
                            </CyberGlassCard>
                        ))}
                    </div>

                    {/* Column 3 (Staggered Further Down) */}
                    <div className="flex flex-col gap-8 md:gap-12 lg:mt-48">
                        {reasons.slice(4, 6).map((reason, i) => (
                            <CyberGlassCard 
                                key={i + 4} 
                                glowColor={reason.glow} 
                                borderGlowColor={reason.border}
                                delay={0.4 + (i * 0.2)}
                            >
                                <div className="flex flex-col gap-6 p-10 md:p-14 h-full min-h-[320px] justify-center">
                                    <div className="w-12 h-1 bg-black/10 rounded-full mb-4" />
                                    <h4 className="text-3xl font-bold uppercase tracking-tighter text-black">{reason.title}</h4>
                                    <p className="text-gray-600 font-medium text-lg leading-relaxed">
                                        {reason.desc}
                                    </p>
                                </div>
                            </CyberGlassCard>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
