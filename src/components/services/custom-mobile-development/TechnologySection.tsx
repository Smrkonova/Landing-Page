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

const mobileTechList = [
    "Flutter", "Android", "iOS"
];

const backendTechList = [
    "Node", "Laravel", "Firebase", "Supabase"
];

const mobileTags = [
    { text: "PAYMENTS", active: false },
    { text: "MAP & LOCATION", active: false },
    { text: "NOTIFICATIONS", active: false },
    { text: "AUTHENTICATION", active: false },
    { text: "BOOKING", active: true },
    { text: "ANALYTICS", active: false },
    { text: "BUSINESS", active: false },
    { text: "SYSTEMS", active: false },
    { text: "MORE", active: false },
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
                        <span className="block font-[200] text-black">TECHNOLOGY</span>
                        <span className="block font-[900] text-black">WE WORK WITH</span>
                    </h2>
                </div>

                {/* Tech Columns (2-column layout) */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-8">
                    {/* Mobile Dev */}
                    <div>
                        <h4 
                            className="text-[13px] font-[900] tracking-wider uppercase text-black mb-3"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            MOBILE DEV
                        </h4>
                        <ul className="space-y-2.5">
                            {mobileTechList.map((item, idx) => (
                                <li key={`m-mob-${idx}`} className="flex items-center gap-2.5 text-[14px] text-gray-800 font-medium">
                                    {checkIcon}
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Backend */}
                    <div>
                        <h4 
                            className="text-[13px] font-[900] tracking-wider uppercase text-black mb-3"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            BACKEND
                        </h4>
                        <ul className="space-y-2.5">
                            {backendTechList.map((item, idx) => (
                                <li key={`m-back-${idx}`} className="flex items-center gap-2.5 text-[14px] text-gray-800 font-medium">
                                    {checkIcon}
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* INTEGRATIONS */}
                <div className="mb-6">
                    <h3 
                        className="text-[20px] font-[900] tracking-tight text-black uppercase mb-1.5"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        INTEGRATIONS
                    </h3>
                    <p 
                        className="text-[14px] text-[#555] leading-relaxed font-normal"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        Modern mobile apps need to work with other systems. We integrate applications with:
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
                        Every app needs a control centre. We develop custom admin panels to manage users, content, products, reports and business operations.
                    </p>
                </div>

                {/* Bottom Graphic & Vertical Tags Area */}
                <div className="relative w-full h-[470px] overflow-hidden rounded-2xl mt-2 flex items-end justify-center">
                    {/* Person Image */}
                    <div className="absolute inset-0 pointer-events-none flex items-end justify-start">
                        <Image
                            src="/images/services/website/mobile3.png"
                            alt="Mobile Technology Specialist"
                            width={420}
                            height={460}
                            className="object-contain object-bottom w-[340px] h-[440px] -translate-x-6 translate-y-3"
                            priority
                        />
                    </div>

                    {/* Misty atmospheric gradient overlay covering lower portion */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: 'linear-gradient(to bottom, transparent 30%, rgba(180, 200, 220, 0.4) 55%, rgba(195, 215, 235, 0.75) 75%, rgba(255, 255, 255, 0.95) 100%)',
                        }}
                    />

                    {/* Soft blur over the right side mist */}
                    <div
                        className="absolute right-0 bottom-0 w-[60%] h-[65%] pointer-events-none"
                        style={{
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',
                            maskImage: 'linear-gradient(to top, black 40%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to top, black 40%, transparent 100%)',
                        }}
                    />

                    {/* Continuous Vertical Scrolling Keywords (16px font size) */}
                    <div 
                        className="absolute right-2 sm:right-3 bottom-4 top-10 w-[210px] z-20 overflow-hidden flex flex-col justify-center text-right pointer-events-none"
                        style={{
                            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                            maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
                        }}
                    >
                        <div 
                            className="flex flex-col animate-mobile-vertical-scroll gap-4 items-end pr-1"
                            style={{ animation: 'mobileVerticalScroll 16s linear infinite' }}
                        >
                            {[...Array(2)].map((_, i) => (
                                <React.Fragment key={i}>
                                    {mobileTags.map((tag, j) => (
                                        <span
                                            key={`${i}-${j}`}
                                            className="tracking-widest uppercase text-right font-black text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                                            style={{
                                                fontFamily: "'Inter', sans-serif",
                                                fontSize: '16px',
                                                lineHeight: '1.2',
                                            }}
                                        >
                                            {tag.text}
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

                {/* Center VR Image */}
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none h-full w-full">
                    <img
                        src="/images/services/website/mobile3.png"
                        alt="Mobile Technology"
                        className="w-full h-full object-contain opacity-90 scale-180"
                    />
                </div>

                {/* Cyan/Blue Glows over the image */}
                <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none z-0"></div>
                <div className="absolute bottom-[5%] left-[20%] w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none z-0"></div>

                {/* Glass Circle Effect at the bottom of the technology image */}
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
                            className="leading-[1.05] tracking-tight text-[#1a1a1a] uppercase"
                            style={{ fontFamily: "'Inter', sans-serif", fontSize: '42px' }}
                        >
                            <span className="block font-[200]">TECHNOLOGY</span>
                            <span className="block font-[900]">WE WORK WITH</span>
                        </h2>
                    </div>

                    {/* Middle Section: Tech Lists */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 md:mt-24 lg:mt-32 max-w-4xl">
                        {/* Mobile Development */}
                        <div>
                            <h4 className="text-[1.5rem] font-[600] tracking-widest uppercase mb-4 text-[#212121]">MOBILE DEV</h4>
                            <ul className="space-y-3">
                                {mobileTechList.map((item, idx) => (
                                    <li key={`mobile-${idx}`} className="flex items-center gap-3 text-[14px] text-[#5A5E63] font-[400]">
                                        {checkIcon}
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Backend */}
                        <div>
                            <h4 className="text-[1.5rem] font-[600] tracking-widest uppercase mb-4 text-[#212121]">BACKEND</h4>
                            <ul className="space-y-3">
                                {backendTechList.map((item, idx) => (
                                    <li key={`backend-${idx}`} className="flex items-center gap-3 text-[14px] text-[#5A5E63] font-[400]">
                                        {checkIcon}
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Right Section: Admin Dashboards */}
                        <div>
                            <h4 className="text-[1.5rem] font-[600] tracking-widest uppercase mb-4 text-[#212121]">DASHBOARDS</h4>
                            <p className="text-[14px] text-[#5A5E63] font-[400] leading-relaxed">
                                Custom admin panels and monitoring dashboards engineered to manage users, real-time data, permissions, and mission-critical business workflows.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Section: Text & Typography Block */}
                    <div className="w-full max-w-full overflow-hidden flex flex-col lg:flex-row justify-between items-end mt-20 lg:mt-auto relative z-20">

                        {/* Bottom Left Text */}
                        <div className="max-w-[420px] mb-12 lg:mb-0">
                            <h3 className="text-[clamp(1.75rem,3.2vw+0.5rem,3.4375rem)] leading-[1.05] tracking-tight uppercase mb-6">
                                <span className="block font-[900] text-[#212121]">CONNECT</span>
                                <span className="block font-[900] text-[#212121]">EVERYTHING</span>
                                <span className="block font-[200] text-gray-500">TOGETHER</span>
                            </h3>
                            <p className="text-[#5A5E63] text-[16px] font-[400] leading-relaxed">
                                High-performance native and cross-platform mobile architectures engineered with clean API integrations, real-time synchronization, and enterprise security.
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
                                        {[
                                            "Razorpay",
                                            "Stripe",
                                            "Cashfree",
                                            "PayU",
                                            "Maps \n& Location",
                                            "Google Maps",
                                            "Live Tracking",
                                            "Geofencing",
                                            "Firebase \nPush \n Notifications",
                                            "SMS",
                                            "Email",
                                            "WhatsApp",
                                            "OTP Login",
                                            "Google Login",
                                            "Apple Login",
                                            "Facebook Login",
                                            "Firebase\n Analytics",
                                            "Google Analytics",
                                            "Crash Reporting",
                                            "CRM",
                                            "ERP",
                                            "Inventory",
                                            "Warehouse",
                                            "APIs",
                                            "Cloud Storage"
                                        ].map((word, j) => (
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
