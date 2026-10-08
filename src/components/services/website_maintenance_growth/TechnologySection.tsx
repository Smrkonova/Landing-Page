"use client";

import React from 'react';
import Image from 'next/image';

const checkIcon = (
    <span className="flex-shrink-0 w-[15px] h-[15px] rounded-full bg-black flex items-center justify-center">
        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
            <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </span>
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

const mobileMarketing = [
    "Landing Page Updates",
    "Campaign Pages",
    "SEO Improvements",
    "Conversion Optimization"
];

const mobileTechnical = [
    "Bug Fixes",
    "Emergency Fixes",
    "Performance Updates",
    "Backup Recovery"
];

const scrollWords = [
    "SUPPORT",
    "SECURITY",
    "UPDATES",
    "SPEED",
    "BACKUPS",
    "GROWTH",
    "OPTIMISE",
    "SCALING",
    "MONITORING"
];

export default function TechnologySection() {
    return (
        <section
            id="technology-section"
            className="relative w-full h-auto md:h-[1540px] bg-white overflow-hidden flex justify-center py-6 md:py-0"
        >
            {/* ===== MOBILE LAYOUT (<md, 390px base in DesktopScaler) ===== */}
            <div className="md:hidden flex flex-col w-full max-w-[390px] mx-auto px-2 pt-4 pb-8 bg-white font-sans">
                {/* Header */}
                <div className="mb-7">
                    <h2 
                        className="uppercase leading-[1.05] tracking-tight"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: '42px' }}
                    >
                        <span className="block font-[200] text-black">ONGOING</span>
                        <span className="block font-[900] text-black">SUPPORT SERVICES</span>
                    </h2>
                </div>

                {/* Tech Columns (2-column layout - only 2 important lists) */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-8">
                    {/* Marketing Support */}
                    <div>
                        <h4 
                            className="text-[13px] font-[900] tracking-wider uppercase text-black mb-3"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            MARKETING
                        </h4>
                        <ul className="space-y-2.5">
                            {mobileMarketing.map((item, idx) => (
                                <li key={`m-mkt-${idx}`} className="flex items-center gap-2.5 text-[14px] text-gray-800 font-medium">
                                    {checkIcon}
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Technical Support */}
                    <div>
                        <h4 
                            className="text-[13px] font-[900] tracking-wider uppercase text-black mb-3"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            TECHNICAL
                        </h4>
                        <ul className="space-y-2.5">
                            {mobileTechnical.map((item, idx) => (
                                <li key={`m-tech-${idx}`} className="flex items-center gap-2.5 text-[14px] text-gray-800 font-medium">
                                    {checkIcon}
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* PROACTIVE CARE Heading & Subtext */}
                <div className="mb-6">
                    <h3 
                        className="text-[20px] font-[900] tracking-tight text-black uppercase mb-1.5"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        PROACTIVE SUPPORT
                    </h3>
                    <p 
                        className="text-[14px] text-[#555] leading-relaxed font-normal"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        Your website shouldn&apos;t degrade over time. We proactively optimize performance, security and stability:
                    </p>
                </div>

                {/* ADMIN DASHBOARDS */}
                <div className="mb-4">
                    <h4 
                        className="text-[13px] font-[900] tracking-wider text-black uppercase mb-1.5"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        ADMIN DASHBOARDS
                    </h4>
                    <p 
                        className="text-[13px] text-[#666] leading-relaxed font-normal"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        Every client gets continuous visibility. We provide real-time uptime reports, speed benchmarks, and dedicated ticket management.
                    </p>
                </div>

                {/* Bottom Graphic & Vertical Tags Area */}
                <div className="relative w-full h-[470px] overflow-hidden rounded-2xl mt-2 flex items-end justify-center">
                    {/* Person Image */}
                    <div className="absolute inset-0 pointer-events-none flex items-end justify-start">
                        <Image
                            src="/images/services/website/website_maintanenece/woman-repairer-isolated-with-laptop 1.png"
                            alt="Support Specialist"
                            width={420}
                            height={460}
                            className="object-contain object-bottom w-[340px] h-[440px] -translate-x-6 translate-y-3"
                            priority
                        />
                    </div>

                    {/* Misty atmospheric gradient overlay */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: 'linear-gradient(to bottom, transparent 30%, rgba(180, 200, 220, 0.4) 55%, rgba(195, 215, 235, 0.75) 75%, rgba(255, 255, 255, 0.95) 100%)',
                        }}
                    />

                    {/* Soft blur */}
                    <div
                        className="absolute right-0 bottom-0 w-[60%] h-[65%] pointer-events-none"
                        style={{
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',
                            maskImage: 'linear-gradient(to top, black 40%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to top, black 40%, transparent 100%)',
                        }}
                    />

                    {/* Continuous Vertical Scrolling Keywords */}
                    <div 
                        className="absolute right-2 sm:right-3 bottom-4 top-10 w-[210px] z-20 overflow-hidden flex flex-col justify-center text-right pointer-events-none"
                        style={{
                            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)',
                            maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)'
                        }}
                    >
                        <div 
                            className="flex flex-col animate-mobile-vertical-scroll gap-4 items-end pr-1"
                            style={{ animation: 'mobileVerticalScroll 16s linear infinite' }}
                        >
                            {[...Array(2)].map((_, i) => (
                                <React.Fragment key={i}>
                                    {scrollWords.map((word, j) => (
                                        <span
                                            key={`${i}-${j}`}
                                            className="tracking-widest uppercase text-right font-black text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                                            style={{
                                                fontFamily: "'Inter', sans-serif",
                                                fontSize: '16px',
                                                lineHeight: '1.2',
                                            }}
                                        >
                                            {word}
                                        </span>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== DESKTOP LAYOUT (>=md) ===== */}
            <div className="hidden md:flex relative w-full h-full bg-white overflow-hidden flex-col justify-between">

                {/* --- BACKGROUND GRAPHICS & GLOWS --- */}
                <div className="absolute w-full inset-0 z-0 flex items-center justify-center pointer-events-none">
                    <img
                        src="/images/services/website/website_maintanenece/woman-repairer-isolated-with-laptop 1.png"
                        alt="Support Specialist"
                        className="w-full h-full object-contain opacity-90 scale-100"
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
                <div className="relative z-10 w-full flex-grow flex flex-col justify-between p-10 md:p-14 lg:p-16">

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
                    <div className="flex flex-row justify-start gap-12 md:gap-20 lg:gap-24 mt-12 md:mt-24 lg:mt-32">
                        {/* Marketing Support */}
                        <div className="flex-1 max-w-sm">
                            <h4 className="text-[1.5rem] font-[600] tracking-widest uppercase mb-4 text-[#212121] flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#53A18B]"></span>
                                MARKETING SUPPORT
                            </h4>
                            <ul className="space-y-3">
                                {marketingSupport.map((item, idx) => (
                                    <li key={`marketing-${idx}`} className="flex items-start gap-3 text-[14px] text-[#5A5E63] font-[400]">
                                        {checkIcon}
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Technical Support */}
                        <div className="flex-1 max-w-sm">
                            <h4 className="text-[1.5rem] font-[600] tracking-widest uppercase mb-4 text-[#212121] flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#0060FB]"></span>
                                TECHNICAL SUPPORT
                            </h4>
                            <ul className="space-y-3">
                                {technicalSupport.map((item, idx) => (
                                    <li key={`technical-${idx}`} className="flex items-start gap-3 text-[14px] text-[#5A5E63] font-[400]">
                                        {checkIcon}
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Section: Text & Typography Block */}
                    <div className="w-full max-w-full overflow-hidden flex flex-col lg:flex-row justify-between items-start mt-16 sm:mt-20 lg:mt-auto relative z-20">

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
                            className="w-full lg:w-auto max-w-full h-[320px] sm:h-[380px] md:h-[450px] overflow-hidden flex flex-col justify-center text-center lg:text-right pointer-events-none relative"
                            style={{
                                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 60%, transparent 100%)',
                                maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 60%, transparent 100%)'
                            }}
                        >
                            <div 
                                className="flex flex-col animate-desktop-vertical-scroll"
                                style={{ animation: 'verticalScroll 20s linear infinite' }}
                            >
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

            </div>

            <style>{`
                @keyframes mobileVerticalScroll {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
                @keyframes verticalScroll {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
            `}</style>
        </section>
    );
}
