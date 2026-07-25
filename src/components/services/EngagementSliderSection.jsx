"use client";

import React from 'react';

const engagementCards = [
    { id: 1, title: "BUSINESS\nDISCOVERY", gradient: "bg-gradient-to-br from-[#80d8db] to-[#d6f2bb]", rotate: "-rotate-[15deg]", y: "translate-y-12", z: "z-10", iconColor: "#80d8db" },
    { id: 2, title: "BUSINESS\nDISCOVERY", gradient: "bg-gradient-to-br from-[#d4bcf6] to-[#fadbf0]", rotate: "-rotate-[6deg]", y: "translate-y-4", z: "z-20", iconColor: "#d4bcf6" },
    { id: 3, title: "BUSINESS\nDISCOVERY", gradient: "bg-gradient-to-br from-[#ffa1b2] to-[#ffdbce]", rotate: "rotate-[4deg]", y: "-translate-y-2", z: "z-30", iconColor: "#ffa1b2" },
    { id: 4, title: "BUSINESS\nDISCOVERY", gradient: "bg-gradient-to-br from-[#d1f468] to-[#fbffda]", rotate: "rotate-[12deg]", y: "translate-y-4", z: "z-20", iconColor: "#badc58" },
    { id: 5, title: "BUSINESS\nDISCOVERY", gradient: "bg-gradient-to-br from-[#77e6a7] to-[#d2efdf]", rotate: "rotate-[20deg]", y: "translate-y-12", z: "z-10", iconColor: "#77e6a7" },
];

export default function EngagementSliderSection() {
    return (
        <section className="w-full bg-white py-24 overflow-hidden relative">

            {/* Title Container */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-12 mb-20">
                <h2 className="text-[36px] md:text-[54px] lg:text-[64px] leading-[1.1] tracking-tight">
                    <span className="font-black text-[#1a1a1a] block uppercase">EVERYTHING YOU NEED</span>
                    <span className="font-light text-gray-400 block uppercase">IN ONE ENGAGEMENT</span>
                </h2>
            </div>

            {/* Slider Container */}
            <div className="relative z-10 w-full overflow-visible pb-32 pt-24 flex justify-center px-4">
                <div className="flex w-max items-center">
                    {engagementCards.map((card, idx) => (
                        <div
                            key={card.id}
                            className={`group relative w-[240px] md:w-[280px] h-[320px] md:h-[380px] shrink-0 rounded-3xl p-8 flex flex-col items-center justify-center transition-all duration-500 ease-out hover:rotate-0 hover:-translate-y-8 hover:z-50 hover:scale-110 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/60 backdrop-blur-3xl ${card.gradient} ${card.rotate} ${card.y} ${card.z} ${idx !== 0 ? '-ml-12 md:-ml-16' : ''}`}
                        >
                            {/* Massive Outside Glow (blur) */}
                            <div className={`absolute inset-0 -z-10 ${card.gradient} scale-[1.25] md:scale-[1.5] blur-[60px] opacity-80 rounded-3xl group-hover:opacity-100 transition-opacity duration-500`}></div>

                            {/* Inner Glass Highlight */}
                            <div className="absolute inset-0 rounded-3xl border-[2px] border-white/20 pointer-events-none mix-blend-overlay"></div>

                            {/* Card Content */}
                            <div className="flex flex-col items-center gap-6 mt-12">
                                <h3 className="text-black font-bold text-[14px] md:text-[16px] text-center tracking-widest leading-relaxed">
                                    BUSINESS<br />DISCOVERY
                                </h3>

                                {/* White Checkmark Icon */}
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mt-4">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 6L9 17L4 12" stroke={card.iconColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
