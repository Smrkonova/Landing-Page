"use client";

import React from 'react';
import Image from 'next/image';

export default function ModernExperiencesSection() {
    return (
        <section className="w-full bg-[#f8f9fa] py-12 sm:py-16 md:py-24 lg:py-32 px-3 sm:px-6 md:px-12 flex justify-center overflow-hidden">

            {/* Main Rounded Card Container */}
            <div className="relative w-full max-w-7xl bg-white rounded-[28px] sm:rounded-[40px] md:rounded-[50px] lg:rounded-[60px] shadow-[0_20px_80px_rgba(0,0,0,0.05)] overflow-hidden">

                {/* --- BACKGROUND GLOWS & MESH GRADIENTS --- */}
                {/* Large soft coral glow in top-center */}
                <div className="absolute top-0 right-1/4 w-[350px] sm:w-[500px] lg:w-[600px] h-[350px] sm:h-[500px] lg:h-[600px] bg-orange-200/80 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none -translate-y-1/4" />
                {/* Blue glow on far right */}
                <div className="absolute bottom-1/4 right-0 w-[300px] sm:w-[450px] lg:w-[500px] h-[300px] sm:h-[450px] lg:h-[500px] bg-blue-300/60 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none translate-x-1/4" />

                <div className="relative z-10 flex flex-col lg:flex-row p-6 sm:p-10 md:p-16 lg:p-24 min-h-0 lg:min-h-[600px] items-center lg:items-stretch">

                    {/* Left Content Area */}
                    <div className="flex-1 flex flex-col justify-start z-20">
                        <h2 className="text-[clamp(1.125rem,2.5vw+0.25rem,3.75rem)] leading-[1.2em] tracking-tight text-[#212121] mb-8">
                            <span className="block font-[900] uppercase">PRINT & DIGITAL</span>
                            <span className="block font-[200] text-gray-500 uppercase">BRAND ASSETS.</span>
                        </h2>

                        <p className="text-[#5A5E63] text-[15px] md:text-[16px] font-[400] leading-[1.6em] max-w-[380px]">
                            We don't just design visual marks. We deliver complete, production-ready brand assets engineered for flawless print and digital execution.
                        </p>
                    </div>

                    {/* Right Graphics Area */}
                    <div className="flex-1 relative flex items-center justify-center w-full z-10">

                        {/* Graphic Canvas Container (Responsive) */}
                        <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[490px] lg:max-w-[540px] aspect-[1.12/1] sm:aspect-[1.15/1] rounded-[28px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden flex items-center justify-center p-4 sm:p-6 md:p-8">

                            {/* Top-Left Wireframe UI List */}
                            <div className="absolute top-4 left-4 sm:top-7 sm:left-7 md:top-9 md:left-9 flex flex-col gap-2 sm:gap-2.5 md:gap-3 z-10 pointer-events-none w-[110px] sm:w-[150px] md:w-[190px]">
                                {[100, 75, 55].map((w, idx) => (
                                    <div key={idx} className="flex items-center gap-2 sm:gap-2.5">
                                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-white/80 shadow-sm shrink-0" />
                                        <div className="h-1 sm:h-1.5 md:h-2 rounded-full bg-white/65 shadow-sm" style={{ width: `${w}%` }} />
                                    </div>
                                ))}
                            </div>

                            {/* 3D Gradient Sphere / Disc */}
                            <div
                                className="absolute left-[5%] sm:left-[8%] md:left-[5%] bottom-[4%] sm:bottom-[6%] w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[200px] md:h-[250px] lg:w-[285px] lg:h-[285px] rounded-full z-10 pointer-events-none shadow-[0_15px_35px_rgba(0,114,255,0.2)] transition-transform duration-500 hover:scale-105 opacity-60"
                                style={{
                                    background: 'linear-gradient(135deg, #FF8B61 0%, #004496 55%, #009BFB 100%)',
                                }}
                            />

                            {/* Crisp 3D Frosted Glass Sphere on Right */}
                            <div
                                className="absolute right-[2%] sm:right-[6%] md:right-[0%] bottom-[8%] sm:bottom-[10%] md:bottom-[0%] w-[110px] h-[110px] sm:w-[145px] sm:h-[145px] md:w-[180px] md:h-[180px] lg:w-[205px] lg:h-[205px] rounded-full backdrop-blur-xl z-10 pointer-events-none border-[1.5px] sm:border-[2px] md:border-[2.5px] border-white/80 shadow-[0_15px_35px_rgba(0,0,0,0.05),inset_0_2px_6px_rgba(255,255,255,0.9),inset_0_-4px_10px_rgba(0,0,0,0.04)]"
                                style={{
                                    background: 'radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.25) 100%)',
                                }}
                            />

                            {/* Emblem Logo overlapping both spheres */}
                            <div className="relative z-20 w-[180px] sm:w-[240px] md:w-[290px] lg:w-[330px] translate-x-1.5 sm:translate-x-3 md:translate-x-4 flex items-center justify-center pointer-events-none">
                                <Image
                                    src="/images/services/website/mobile-emblem.png"
                                    alt="Branding Emblem"
                                    width={399}
                                    height={237}
                                    className="w-full h-auto brightness-0 invert opacity-95 drop-shadow-[0_12px_24px_rgba(15,45,90,0.15)] select-none"
                                    priority
                                />
                            </div>

                        </div>
                    </div>
                </div>

                {/* Bottom Scrolling Ticker */}
                <div className="relative w-full max-w-full pb-8 sm:pb-12 overflow-hidden border-t border-gray-100/70 pt-6">
                    <div 
                        className="flex w-max hover:[animation-play-state:paused]"
                        style={{
                            animation: 'tickerScroll 35s linear infinite',
                        }}
                    >
                        {[0, 1].map((copyIdx) => (
                            <p 
                                key={copyIdx} 
                                className="text-[clamp(13px,0.5vw+5px,14px)] font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap shrink-0 pr-8"
                            >
                                Visiting Cards &nbsp;·&nbsp; Letterheads &nbsp;·&nbsp; Envelopes &nbsp;·&nbsp; Brochures &nbsp;·&nbsp; Product Catalogues &nbsp;·&nbsp; Flyers &nbsp;·&nbsp; Posters &nbsp;·&nbsp; Banners &nbsp;·&nbsp; Standees &nbsp;·&nbsp; Stickers &nbsp;·&nbsp; Packaging Design &nbsp;·&nbsp; Product Labels &nbsp;·&nbsp; Event Backdrops &nbsp;·&nbsp; Exhibition Panels &nbsp;·&nbsp; Office Branding &nbsp;·&nbsp; ID Cards &nbsp;·&nbsp; Certificates &nbsp;·&nbsp; Merchandise &nbsp;·&nbsp;
                            </p>
                        ))}
                    </div>
                </div>

                <style>{`
                    @keyframes tickerScroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                `}</style>

            </div>
        </section>
    );
}