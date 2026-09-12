"use client";

import React from 'react';
import Image from 'next/image';

const checkIcon = (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0">
        <circle cx="7" cy="7" r="7" fill="#53A18B" />
        <path d="M4 7L6 9L10 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const marketingSupport = [
    "Landing Page Updates",
    "Campaign Pages",
    "SEO Improvements",
    "Blog Publishing",
    "Creative Design",
    "Website Banners",
    "Promotional Pages",
    "Conversion Improvements",
    "Analytics Reviews"
];

const technicalSupport = [
    "Bug Fixes",
    "Feature Requests",
    "API Updates",
    "Third-Party Integrations",
    "Payment Gateway Updates",
    "Performance Improvements",
    "CMS Assistance",
    "Backup Recovery",
    "Emergency Fixes"
];

export default function TechnologySection() {
    return (
        <section className="w-full max-w-full bg-white py-20 md:py-32 px-4 md:px-12 flex justify-center overflow-hidden">

            {/* Main Rounded Card Container */}
            <div className="relative w-full max-w-7xl min-h-[900px] md:min-h-[1400px] bg-white rounded-[40px] md:rounded-[60px]">

                {/* --- BACKGROUND GRAPHICS & GLOWS --- */}
                <div className="absolute w-full inset-0 z-0 flex items-center justify-center pointer-events-none">
                    <img
                        src="/images/services/website/woman-holding-shopping-bags-looking-phone 1.png"
                        alt="Support Specialist"
                        className="w-full h-full object-cover md:object-contain opacity-90 scale-110 md:scale-100"
                    />
                </div>

                {/* Ambient Glows over the image */}
                <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[160px] pointer-events-none z-0"></div>
                <div className="absolute bottom-[5%] left-[20%] w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[170px] pointer-events-none z-0"></div>

                {/* Glass Circle Effect at bottom */}
                <style>{`
                    .tech-glass-circle {
                        position: absolute;
                        width: 100%;
                        height: 350px;
                        left: 0;
                        bottom: 0;
                        background: rgba(0, 0, 0, 0);
                        pointer-events: none;
                        z-index: 10;
                    }

                    .tech-glass-circle__frost {
                        position: absolute;
                        inset: 0;
                        background: rgba(0, 0, 0, 0);
                        backdrop-filter: blur(28.9px);
                        -webkit-backdrop-filter: blur(28.9px);
                        -webkit-mask-image: linear-gradient(to top, black 0%, black 30%, transparent 100%);
                        mask-image: linear-gradient(to top, black 0%, black 30%, transparent 100%);
                    }
                `}</style>
                <div className="tech-glass-circle">
                    <div className="tech-glass-circle__frost"></div>
                </div>

                {/* --- FOREGROUND CONTENT --- */}
                <div className="relative z-10 w-full h-full flex flex-col justify-between">

                    {/* Top Heading */}
                    <div>
                        <h2 className="text-[40px] md:text-[60px] lg:text-[70px] leading-[1.05] tracking-tight text-[#1a1a1a] uppercase">
                            <span className="block font-light">ONGOING</span>
                            <span className="block font-black">SUPPORT SERVICES</span>
                        </h2>
                    </div>

                    {/* Middle Section: Support Lists */}
                    <div className="flex flex-col md:flex-row justify-between mt-16 md:mt-24 lg:mt-32 px-0 lg:px-4 gap-12 md:gap-16">
                        {/* Marketing Support */}
                        <div className="flex-1 max-w-sm">
                            <h4 className="text-sm md:text-base font-bold tracking-widest uppercase mb-6 text-gray-900 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#53A18B]"></span>
                                MARKETING SUPPORT
                            </h4>
                            <ul className="space-y-3">
                                {marketingSupport.map((item, idx) => (
                                    <li key={`marketing-${idx}`} className="flex items-start gap-3 text-[13px] md:text-[14px] text-gray-600 font-medium">
                                        {checkIcon}
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Technical Support */}
                        <div className="flex-1 max-w-sm">
                            <h4 className="text-sm md:text-base font-bold tracking-widest uppercase mb-6 text-gray-900 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#0060FB]"></span>
                                TECHNICAL SUPPORT
                            </h4>
                            <ul className="space-y-3">
                                {technicalSupport.map((item, idx) => (
                                    <li key={`technical-${idx}`} className="flex items-start gap-3 text-[13px] md:text-[14px] text-gray-600 font-medium">
                                        {checkIcon}
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Section: Text & Typography Block */}
                    <div className="flex flex-col lg:flex-row justify-between items-start mt-32 lg:mt-auto relative z-20">

                        {/* Bottom Left Text */}
                        <div className="max-w-[340px] mb-12 lg:mb-0">
                            <h3 className="text-[36px] md:text-[48px] leading-[1.05] tracking-tight text-[#1a1a1a] uppercase mb-6">
                                <span className="block font-black">COMPLETE</span>
                                <span className="block font-black">GROWTH </span>
                                <span className="block font-light text-gray-600"> PARTNERSHIP</span>
                            </h3>
                            <p className="text-gray-600 text-[13px] md:text-[14px] font-medium leading-relaxed">
                                We manage continuous improvements, routine updates, marketing adjustments, and emergency technical troubleshooting so you can focus on scaling your business.
                            </p>
                        </div>

                        {/* Bottom Right Vertical Scrolling Typography */}
                        <div
                            className="h-[400px] md:h-[500px] overflow-hidden flex flex-col justify-center text-right pointer-events-none relative"
                            style={{
                                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 60%, transparent 100%)',
                                maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 60%, transparent 100%)'
                            }}
                        >
                            <div className="flex flex-col animate-[verticalScroll_15s_linear_infinite]">
                                {[...Array(2)].map((_, i) => (
                                    <React.Fragment key={i}>
                                        {["SUPPORT", "SECURITY", "UPDATES", "SPEED", "BACKUPS", "GROWTH", "OPTIMISE", "SCALING", "MONITORING"].map((word, j) => (
                                            <span key={`${i}-${j}`} className="text-[50px] md:text-[80px] lg:text-[100px] font-black leading-[0.9] uppercase text-white drop-shadow-md">
                                                {word}
                                            </span>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <style>{`
                    @keyframes verticalScroll {
                        0% { transform: translateY(0); }
                        100% { transform: translateY(-50%); }
                    }
                `}</style>

            </div>
        </section>
    );
}
