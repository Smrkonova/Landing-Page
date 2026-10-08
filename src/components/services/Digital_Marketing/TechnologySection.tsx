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

const googleSetup = [
    "Google Analytics 4",
    "Google Search Console",
    "Google Tag Manager",
    "Google Business Profile",
    "Google Ads"
];

const metaSetup = [
    "Meta Business Manager",
    "Facebook Page",
    "Instagram Business Profile",
    "Meta Pixel",
    "Conversion API",
    "Ad Account Configuration"
];

const trackingReporting = [
    "Conversion Tracking",
    "Event Tracking",
    "Goal Setup",
    "Call Tracking",
    "Lead Tracking",
    "Monthly Reports"
];

const emailCrm = [
    "Brevo",
    "Mailchimp",
    "HubSpot",
    "Zoho CRM",
    "Lead Automation"
];

const scrollWords = [
    "ANALYTICS 4",
    "TAG MANAGER",
    "META PIXEL",
    "CONVERSION API",
    "HUBSPOT",
    "MAILCHIMP",
    "ZOHO CRM",
    "SEARCH CONSOLE",
    "LEAD TRACKING",
    "GOOGLE ADS",
    "EVENT TRACKING",
    "AUTOMATION"
];

const mobileList1 = [
    "Google Analytics 4",
    "Search Console",
    "Tag Manager",
    "Google Ads"
];

const mobileList2 = [
    "Meta Pixel",
    "Conversion API",
    "HubSpot CRM",
    "Lead Automation"
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
                        <span className="block font-[200] text-black">MARKETING</span>
                        <span className="block font-[900] text-black">INFRASTRUCTURE</span>
                    </h2>
                </div>

                {/* Tech Columns (2-column layout - only 2 important lists) */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-8">
                    {/* Google & Ads */}
                    <div>
                        <h4 
                            className="text-[13px] font-[900] tracking-wider uppercase text-black mb-3"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            GOOGLE & ADS
                        </h4>
                        <ul className="space-y-2.5">
                            {mobileList1.map((item, idx) => (
                                <li key={`m-list1-${idx}`} className="flex items-center gap-2.5 text-[14px] text-gray-800 font-medium">
                                    {checkIcon}
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Meta & CRM */}
                    <div>
                        <h4 
                            className="text-[13px] font-[900] tracking-wider uppercase text-black mb-3"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            META & CRM
                        </h4>
                        <ul className="space-y-2.5">
                            {mobileList2.map((item, idx) => (
                                <li key={`m-list2-${idx}`} className="flex items-center gap-2.5 text-[14px] text-gray-800 font-medium">
                                    {checkIcon}
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* CONNECTED ECOSYSTEM Heading & Subtext */}
                <div className="mb-6">
                    <h3 
                        className="text-[20px] font-[900] tracking-tight text-black uppercase mb-1.5"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        CONNECTED ECOSYSTEM
                    </h3>
                    <p 
                        className="text-[14px] text-[#555] leading-relaxed font-normal"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        We configure tracking pixels, conversion APIs, CRMs, and attribution modeling to measure true customer acquisition:
                    </p>
                </div>

                {/* ANALYTICS DASHBOARDS */}
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
                        Every growth engine needs clarity. We build centralized marketing dashboards to monitor spend, leads, and conversion funnels in real time.
                    </p>
                </div>

                {/* Bottom Graphic & Vertical Tags Area */}
                <div className="relative w-full h-[470px] overflow-hidden rounded-2xl mt-2 flex items-end justify-center">
                    {/* Image */}
                    <div className="absolute inset-0 pointer-events-none flex items-end justify-start">
                        <Image
                            src="/images/services/website/woman-holding-shopping-bags-looking-phone 1.png"
                            alt="Marketing Specialist"
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
                        src="/images/services/website/woman-holding-shopping-bags-looking-phone 1.png"
                        alt="Marketing Infrastructure"
                        className="w-full h-full object-contain opacity-90 scale-100"
                    />
                </div>

                {/* Mobile overlay to ensure readability */}
                <div className="absolute inset-0 bg-white/40 md:hidden pointer-events-none z-0"></div>

                {/* Cyan/Indigo Ambient Glows */}
                <div className="absolute bottom-[10%] right-[10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-100/40 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none z-0"></div>
                <div className="absolute bottom-[5%] left-[20%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-indigo-100/30 rounded-full blur-[100px] sm:blur-[170px] pointer-events-none z-0"></div>

                {/* Glass Circle Effect */}
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
                            className="leading-[1.05] tracking-tight text-[#1a1a1a] uppercase"
                            style={{ fontFamily: "'Inter', sans-serif", fontSize: '42px' }}
                        >
                            <span className="block font-[200]">MARKETING</span>
                            <span className="block font-[900]">INFRASTRUCTURE</span>
                        </h2>
                    </div>

                    {/* Middle Section: 4 Infrastructure Lists */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 md:gap-10 lg:gap-8 mt-6 sm:mt-12 md:mt-20 lg:mt-28">
                        {/* Google Setup */}
                        <div>
                            <h4 className="text-[1.5rem] font-[600] tracking-widest uppercase mb-4 text-[#212121]">
                                GOOGLE SETUP
                            </h4>
                            <ul className="space-y-3">
                                {googleSetup.map((item, idx) => (
                                    <li key={`google-${idx}`} className="flex items-center gap-3 text-[14px] text-[#5A5E63] font-[400]">
                                        {checkIcon}
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Meta Setup */}
                        <div>
                            <h4 className="text-[1.5rem] font-[600] tracking-widest uppercase mb-4 text-[#212121]">
                                META SETUP
                            </h4>
                            <ul className="space-y-3">
                                {metaSetup.map((item, idx) => (
                                    <li key={`meta-${idx}`} className="flex items-center gap-3 text-[14px] text-[#5A5E63] font-[400]">
                                        {checkIcon}
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tracking & Reporting */}
                        <div>
                            <h4 className="text-[1.5rem] font-[600] tracking-widest uppercase mb-4 text-[#212121]">
                                TRACKING
                            </h4>
                            <ul className="space-y-3">
                                {trackingReporting.map((item, idx) => (
                                    <li key={`tracking-${idx}`} className="flex items-center gap-3 text-[14px] text-[#5A5E63] font-[400]">
                                        {checkIcon}
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Email & CRM */}
                        <div>
                            <h4 className="text-[1.5rem] font-[600] tracking-widest uppercase mb-4 text-[#212121]">
                                EMAIL & CRM
                            </h4>
                            <ul className="space-y-3">
                                {emailCrm.map((item, idx) => (
                                    <li key={`crm-${idx}`} className="flex items-center gap-3 text-[14px] text-[#5A5E63] font-[400]">
                                        {checkIcon}
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Section: Text & Typography Block */}
                    <div className="w-full max-w-full overflow-hidden flex flex-col lg:flex-row justify-between items-end mt-20 lg:mt-auto relative z-20">

                        {/* Bottom Left Text */}
                        <div className="max-w-[420px] mb-12 lg:mb-0">
                            <h3 className="text-[clamp(1.75rem,3.2vw+0.5rem,3.4375rem)] leading-[1.05] tracking-tight uppercase mb-6">
                                <span className="block font-[900] text-[#212121]">CONNECTED</span>
                                <span className="block font-[200] text-gray-500">ECOSYSTEM</span>
                            </h3>
                            <p className="text-[#5A5E63] text-[16px] font-[400] leading-relaxed">
                                A successful campaign begins with solid foundations. We configure and synchronize tracking pixels, conversion APIs, CRMs, and attribution modeling to measure true customer acquisition cost.
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
                                        {scrollWords.map((word, j) => (
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
