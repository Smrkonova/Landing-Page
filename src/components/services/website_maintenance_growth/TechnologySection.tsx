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
        <section
            id="technology-section"
            className="relative w-full h-auto md:h-[1540px] bg-white overflow-hidden flex justify-center py-6 md:py-0"
        >

            {/* Main Full-Width Container */}
            <div className="relative w-full h-full bg-white overflow-hidden flex flex-col justify-between">

                {/* --- BACKGROUND GRAPHICS & GLOWS --- */}
                <div className="absolute w-full inset-0 z-0 flex items-center justify-center pointer-events-none">
                    <img
                        src="/images/services/website/woman-holding-shopping-bags-looking-phone 1.png"
                        alt="Support Specialist"
                        className="w-full h-full object-cover md:object-contain opacity-90 scale-110 md:scale-100"
                    />
                </div>

                {/* Mobile overlay to ensure readability */}
                <div className="absolute inset-0 bg-white/40 md:hidden pointer-events-none z-0"></div>

                {/* Ambient Glows over the image */}
                <div className="absolute bottom-[10%] right-[10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-emerald-100/40 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none z-0"></div>
                <div className="absolute bottom-[5%] left-[20%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-blue-100/30 rounded-full blur-[100px] sm:blur-[170px] pointer-events-none z-0"></div>

                {/* Glass Circle Effect at bottom */}
                <style>{`
                    .tech-glass-circle {
                        position: absolute;
                        width: 100%;
                        height: 140px;
                        left: 0;
                        bottom: 0;
                        background: rgba(0, 0, 0, 0);
                        pointer-events: none;
                        z-index: 10;
                    }

                    @media (min-width: 768px) {
                        .tech-glass-circle {
                            height: 350px;
                        }
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
                <div className="relative z-10 w-full flex-grow flex flex-col justify-between p-5 sm:p-10 md:p-14 lg:p-16">

                    {/* Top Heading */}
                    <div>
                        <h2 
                            className="leading-[1.15] tracking-tight uppercase"
                            style={{ fontFamily: "'Inter', sans-serif", fontSize: '42px' }}
                        >
                            <span className="font-[200] text-gray-800">ONGOING </span><br />
                            <span className="font-[900] text-black">SUPPORT SERVICES</span>
                        </h2>
                    </div>

                    {/* Middle Section: Support Lists */}
                    <div className="grid grid-cols-2 sm:flex sm:flex-row justify-start gap-4 sm:gap-12 md:gap-20 lg:gap-24 mt-6 sm:mt-12 md:mt-24 lg:mt-32">
                        {/* Marketing Support */}
                        <div className="flex-1 max-w-sm">
                            <h4 className="text-[1.5rem] font-[600] tracking-widest uppercase mb-4 text-[#212121] flex items-center gap-1.5 sm:gap-2">
                                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#53A18B]"></span>
                                MARKETING SUPPORT
                            </h4>
                            <ul className="space-y-1.5 sm:space-y-3">
                                {marketingSupport.map((item, idx) => (
                                    <li key={`marketing-${idx}`} className="flex items-start gap-2 sm:gap-3 text-[14px] text-[#5A5E63] font-[400]">
                                        {checkIcon}
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Technical Support */}
                        <div className="flex-1 max-w-sm">
                            <h4 className="text-[1.5rem] font-[600] tracking-widest uppercase mb-4 text-[#212121] flex items-center gap-1.5 sm:gap-2">
                                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#0060FB]"></span>
                                TECHNICAL SUPPORT
                            </h4>
                            <ul className="space-y-1.5 sm:space-y-3">
                                {technicalSupport.map((item, idx) => (
                                    <li key={`technical-${idx}`} className="flex items-start gap-2 sm:gap-3 text-[14px] text-[#5A5E63] font-[400]">
                                        {checkIcon}
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Section: Text & Typography Block (Hidden on mobile) */}
                    <div className="hidden md:flex w-full max-w-full overflow-hidden flex-col lg:flex-row justify-between items-start mt-16 sm:mt-20 lg:mt-auto relative z-20">

                        {/* Bottom Left Text */}
                        <div className="max-w-[340px] mb-12 lg:mb-0">
                            <h3 className="text-[clamp(1.75rem,3.2vw+0.5rem,3.4375rem)] leading-[1.05] tracking-tight uppercase mb-6 text-[#212121]">
                                <span className="block font-[900]">COMPLETE</span>
                                <span className="block font-[900]">GROWTH </span>
                                <span className="block font-[200] text-gray-500">PARTNERSHIP</span>
                            </h3>
                            <p className="text-[#5A5E63] text-[16px] font-[400] leading-relaxed">
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
                                            <span key={`${i}-${j}`} className="text-[clamp(1.75rem,5.5vw+0.5rem,5.5rem)] font-black leading-[0.95] uppercase text-white drop-shadow-md">
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
