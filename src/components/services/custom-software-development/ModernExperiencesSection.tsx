"use client";

import React from 'react';
import Image from 'next/image';

export default function ModernExperiencesSection() {
    return (
        <section className="w-full max-w-full bg-[#f8f9fa] py-8 sm:py-16 md:py-24 lg:py-32 px-4 md:px-12 flex justify-center overflow-hidden">

            {/* Main Rounded Card Container */}
            <div className="relative w-full max-w-[390px] lg:max-w-7xl min-h-[553px] lg:min-h-[629px] bg-white rounded-[40px] md:rounded-[60px] shadow-[0_20px_80px_rgba(0,0,0,0.05)] overflow-hidden" >

                {/* --- AMBIENT BACKGROUND GLOWS --- */}
                {/* Soft teal glow */}
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#53A18B]/15 rounded-full blur-[120px] pointer-events-none -translate-y-1/4"></div>
                {/* Soft blue glow on the right */}
                <div className="absolute bottom-1/4 right-0 w-[550px] h-[550px] bg-[#0060FB]/15 rounded-full blur-[130px] pointer-events-none translate-x-1/4"></div>

                <div className="relative z-10 flex flex-col lg:flex-row p-6 sm:p-10 md:p-16 lg:p-20 min-h-[553px] lg:min-h-[629px] items-center justify-between">

                    {/* Left Content Area */}
                    <div className="w-full lg:w-[716px] lg:min-h-[629px] flex flex-col justify-center z-20">
                        <h2 className="mb-6 md:mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                            <span className="block font-[700] md:font-[900] text-[42px] md:text-[60px] leading-[48px] md:leading-[75px] tracking-[-1.2px] text-[#212121] uppercase">
                                FEATURES
                            </span>
                            <span className="block font-[200] text-[42px] md:text-[60px] leading-[48px] md:leading-[75px] tracking-[-1.2px] text-gray-500 uppercase">
                                WE CAN BUILD.
                            </span>
                        </h2>

                        <p
                            className="text-[#212121] text-[12px] md:text-[14px] leading-[16px] md:leading-[25px] font-[400] tracking-[0px] max-w-[380px] md:max-w-[420px]"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Every enterprise workflow has unique demands. We engineer purpose-built software features tailored directly to your team's operational goals.
                        </p>
                    </div>

                    {/* Right Graphics Area */}
                    <div className="flex-1 relative flex items-center justify-center w-full z-10 mt-6 lg:mt-0">

                        {/* Graphic Canvas Container (Responsive) */}
                        <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[580px] aspect-[1.12/1] sm:aspect-[1.15/1] md:aspect-[1.1/1] rounded-[28px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden md:overflow-visible flex items-center justify-center p-4 sm:p-6 md:p-8">

                            {/* Top-Left Wireframe UI List (Equal length lines on desktop, moved up by 15px) */}
                            <div className="absolute top-4 left-4 sm:top-7 sm:left-7 md:top-1.5 md:left-5 lg:top-2 lg:left-6 flex flex-col gap-2 sm:gap-2.5 md:gap-3 z-10 pointer-events-none w-[110px] sm:w-[150px] md:w-[210px] lg:w-[235px]">
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                                        <div className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 rounded-full bg-white/70 shadow-sm shrink-0" />
                                        <div className="h-1 sm:h-1.5 md:h-1.5 lg:h-2 rounded-full bg-white/55 shadow-sm flex-1 md:w-[160px] lg:w-[185px]" />
                                    </div>
                                ))}
                            </div>

                            {/* 3D Cyan-to-Blue Gradient Sphere / Disc (Placed at left end leg of logo) */}
                            <div
                                className="absolute left-[5%] sm:left-[8%] md:-left-[20%] lg:-left-[25%] bottom-[4%] sm:bottom-[6%] md:-bottom-[7%] lg:-bottom-[7%] w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[280px] lg:h-[280px] rounded-full z-10 pointer-events-none shadow-[0_15px_35px_rgba(0,114,255,0.2)] md:shadow-[0_22px_45px_rgba(2,132,199,0.32)] transition-transform duration-500 hover:scale-105 opacity-60 md:opacity-100"
                                style={{
                                    background: 'linear-gradient(135deg, #22d3ee 0%, #0ea5e9 28%, #2563eb 68%, #1d4ed8 100%)',
                                }}
                            />

                            {/* Crisp 3D Frosted Glass Sphere (Right - z-10 behind the Emblem) */}
                            <div
                                className="absolute right-[2%] sm:right-[6%] md:-right-[10%] lg:-right-[10%] bottom-[8%] sm:bottom-[10%] md:-bottom-[10%] lg:-bottom-[15%] w-[110px] h-[110px] sm:w-[145px] sm:h-[145px] md:w-[190px] md:h-[190px] lg:w-[220px] lg:h-[220px] rounded-full backdrop-blur-xl md:backdrop-blur-2xl z-10 pointer-events-none border-[1.5px] sm:border-[2px] md:border-[1.5px] border-white/60 shadow-[0_15px_35px_rgba(0,0,0,0.05),inset_0_2px_6px_rgba(255,255,255,0.9),inset_0_-4px_10px_rgba(0,0,0,0.04)] md:shadow-[0_20px_45px_rgba(0,0,0,0.06),inset_0_2px_10px_rgba(255,255,255,0.7),inset_0_-2px_10px_rgba(0,0,0,0.03)]"
                                style={{
                                    background: 'radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.15) 55%, rgba(255, 255, 255, 0.22) 100%)',
                                }}
                            />

                            {/* Emblem Logo overlapping both spheres (z-20 in FRONT of both discs) */}
                            <div className="relative z-20 w-[180px] sm:w-[240px] md:w-[315px] lg:w-[355px] translate-x-1.5 sm:translate-x-3 md:translate-x-3 lg:translate-x-4 flex items-center justify-center pointer-events-none">
                                <Image
                                    src="/images/services/website/mobile-emblem.png"
                                    alt="Mobile App Emblem"
                                    width={399}
                                    height={237}
                                    className="w-full h-auto brightness-0 invert opacity-95 drop-shadow-[0_12px_24px_rgba(15,45,90,0.15)] md:drop-shadow-[0_16px_32px_rgba(15,45,90,0.18)] select-none"
                                    priority
                                />
                            </div>

                        </div>
                    </div>
                </div>

                {/* Bottom Scrolling Ticker */}
                <div className="relative w-full max-w-full pb-8 sm:pb-10 overflow-hidden border-t border-gray-100/70 pt-6">
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
                                in-app chat &nbsp;·&nbsp; social login &nbsp;·&nbsp; payments &nbsp;·&nbsp; custom integrations &nbsp;·&nbsp; automated workflows &nbsp;·&nbsp; secure APIs &nbsp;·&nbsp; real-time notifications &nbsp;·&nbsp; multi-tenant architecture &nbsp;·&nbsp; cloud deployment &nbsp;·&nbsp;
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
