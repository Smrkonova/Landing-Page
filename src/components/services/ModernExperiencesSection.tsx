"use client";

import React from 'react';
import Image from 'next/image';

export default function ModernExperiencesSection() {
    return (
        <section className="w-full max-w-full bg-[#f8f9fa] py-20 md:py-32 px-4 md:px-12 flex justify-center overflow-hidden">

            {/* Main Rounded Card Container */}
            <div className="relative w-full max-w-7xl bg-white rounded-[40px] md:rounded-[60px] shadow-[0_20px_80px_rgba(0,0,0,0.05)] overflow-hidden">

                {/* --- BACKGROUND GLOWS & MESH GRADIENTS --- */}
                {/* Large soft pink/purple glow in the center/right */}
                <div className="absolute top-1/4 right-1/5 w-[150px] sm:w-[400px] h-[350px] sm:h-[600px] bg-pink-300 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none -translate-y-1/4"></div>
                {/* Orange glow on the far right */}
                <div className="absolute bottom-1/4 right-[7rem] w-[120px] sm:w-[300px] h-[200px] sm:h-[300px] bg-orange-400 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none translate-x-1/4"></div>

                <div className="relative z-10 flex flex-col lg:flex-row p-6 sm:p-10 md:p-20 lg:p-20  min-h-[600px]">

                    {/* Left Content Area */}
                    <div className="flex-1 flex flex-col justify-start z-20">
                        <h2 className="text-[clamp(1.125rem,2.5vw+0.25rem,3.75rem)] leading-[1.2em] tracking-tight text-[#212121] mb-8">
                            <span className="block font-[900] uppercase">Modern <br/> websites are</span>
                            <span className="block font-[200] text-gray-500 uppercase">no longer <br/> static pages.</span>
                        </h2>

                        <p className="text-[#212121] text-[clamp(1.125rem,2.5vw+0.25rem,0.875rem)] font-[400] leading-[1.5em] max-w-[380px]">
                           We create interactive experiences that keep visitors engaged and make your brand memorable.
                        </p>
                    </div>

                    {/* Right Graphics Area */}
                    <div className="flex-1 relative flex items-center justify-center w-full z-10">

                        {/* Graphic Canvas Container (Responsive) */}
                        <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[490px] lg:max-w-[540px] aspect-[1.12/1] sm:aspect-[1.15/1] rounded-[28px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden flex items-center justify-center p-4 sm:p-6 md:p-8">

                            {/* Top-Left Wireframe UI List */}
                            <div className="absolute top-4 left-4 sm:top-7 sm:left-7 md:top-9 md:left-9 flex flex-col gap-2 sm:gap-2.5 md:gap-3 z-10 pointer-events-none w-[110px] sm:w-[150px] md:w-[190px]">
                                {[100, 75, 55].map((w, idx) => (
                                    <div key={idx} className="flex items-center gap-2 sm:gap-2.5 ">
                                        <div className="w-3 h-3 sm:w-2.3 sm:h-2.3 md:w-4 md:h-4 rounded-full bg-white/60 shadow-sm shrink-0 " />
                                        <div className="h-1 sm:h-1.5 md:h-2 rounded-full bg-white/60 shadow-sm" style={{ width: `${w}%` }} />
                                    </div>
                                ))}
                            </div>

                            {/* 3D Cyan-to-Blue Gradient Sphere / Disc */}
                            <div
                                className="absolute left-[5%] sm:left-[8%] md:left-[5%] bottom-[4%] sm:bottom-[6%] w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[200px] md:h-[250px] lg:w-[285px] lg:h-[285px] rounded-full z-10 pointer-events-none shadow-[0_15px_35px_rgba(0,114,255,0.2)] transition-transform duration-500 hover:scale-105 opacity-60"
                                style={{
                                    background: 'linear-gradient(135deg, #00B4D8 0%, #0077F4 55%, #0056D2 100%)',
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
                                    alt="Mobile App Emblem"
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
                                className="text-[clamp(13px,0.5vw+5px,14px)] font-medium text-[#212121] tracking-wider whitespace-nowrap shrink-0 pr-8"
                            >
                                Smooth scrolling &nbsp;·&nbsp; Interactive sections &nbsp;·&nbsp; Micro animations &nbsp;·&nbsp; Hover effects &nbsp;·&nbsp; 3D experiences &nbsp;·&nbsp; Storytelling pages &nbsp;·&nbsp; Product showcases &nbsp;·&nbsp; Animated landing pages &nbsp;·&nbsp; Custom transitions &nbsp;·&nbsp;
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
