"use client";

import React from 'react';

const checkIcon = (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0">
        <circle cx="7" cy="7" r="7" fill="#1a1a1a" />
        <path d="M4 7L6 9L10 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
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

export default function TechnologySection() {
    return (
        <section className="w-full max-w-full bg-white py-20 md:py-32 px-4 md:px-12 flex justify-center overflow-hidden">

            {/* Main Rounded Card Container */}
            <div className="relative w-full max-w-7xl min-h-[900px] md:min-h-[1440px] bg-white rounded-[40px] md:rounded-[60px] overflow-hidden">

                {/* --- BACKGROUND GRAPHICS & GLOWS --- */}
                <div className="absolute w-full inset-0 z-0 flex items-center justify-center pointer-events-none">
                    <img
                        src="/images/services/website/woman-holding-shopping-bags-looking-phone 1.png"
                        alt="Marketing Infrastructure"
                        className="w-full h-full object-cover md:object-contain opacity-90 scale-110 md:scale-100"
                    />
                </div>

                {/* Cyan/Indigo Ambient Glows */}
                <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[160px] pointer-events-none z-0"></div>
                <div className="absolute bottom-[5%] left-[20%] w-[400px] h-[400px] bg-indigo-100/30 rounded-full blur-[170px] pointer-events-none z-0"></div>

                {/* Glass Circle Effect */}
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
                <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16">

                    {/* Top Heading */}
                    <div>
                        <h2 className="text-[36px] sm:text-[50px] md:text-[65px] lg:text-[72px] leading-[1.05] tracking-tight text-[#1a1a1a] uppercase">
                            <span className="block font-light">MARKETING</span>
                            <span className="block font-black">INFRASTRUCTURE</span>
                        </h2>
                    </div>

                    {/* Middle Section: 4 Infrastructure Lists */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-8 mt-14 md:mt-20 lg:mt-28">
                        {/* Google Setup */}
                        <div>
                            <h4 className="text-xs md:text-sm font-bold tracking-widest uppercase mb-6 text-gray-900">
                                GOOGLE SETUP
                            </h4>
                            <ul className="space-y-3">
                                {googleSetup.map((item, idx) => (
                                    <li key={`google-${idx}`} className="flex items-start gap-2.5 text-[13px] md:text-[14px] text-gray-700 font-medium">
                                        {checkIcon}
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Meta Setup */}
                        <div>
                            <h4 className="text-xs md:text-sm font-bold tracking-widest uppercase mb-6 text-gray-900">
                                META SETUP
                            </h4>
                            <ul className="space-y-3">
                                {metaSetup.map((item, idx) => (
                                    <li key={`meta-${idx}`} className="flex items-start gap-2.5 text-[13px] md:text-[14px] text-gray-700 font-medium">
                                        {checkIcon}
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tracking & Reporting */}
                        <div>
                            <h4 className="text-xs md:text-sm font-bold tracking-widest uppercase mb-6 text-gray-900">
                                TRACKING & REPORTING
                            </h4>
                            <ul className="space-y-3">
                                {trackingReporting.map((item, idx) => (
                                    <li key={`tracking-${idx}`} className="flex items-start gap-2.5 text-[13px] md:text-[14px] text-gray-700 font-medium">
                                        {checkIcon}
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Email & CRM */}
                        <div>
                            <h4 className="text-xs md:text-sm font-bold tracking-widest uppercase mb-6 text-gray-900">
                                EMAIL & CRM
                            </h4>
                            <ul className="space-y-3">
                                {emailCrm.map((item, idx) => (
                                    <li key={`crm-${idx}`} className="flex items-start gap-2.5 text-[13px] md:text-[14px] text-gray-700 font-medium">
                                        {checkIcon}
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Section: Text & Typography Block */}
                    <div className="w-full max-w-full overflow-hidden flex flex-col lg:flex-row justify-between items-start mt-32 lg:mt-auto relative z-20">

                        {/* Bottom Left Text */}
                        <div className="max-w-[340px] mb-12 lg:mb-0">
                            <h3 className="text-[34px] sm:text-[45px] md:text-[55px] leading-[1.05] tracking-tight text-[#1a1a1a] uppercase mb-4">
                                <span className="block font-black">CONNECTED</span>
                                <span className="block font-light text-gray-600">ECOSYSTEM</span>
                            </h3>
                            <p className="text-gray-600 text-[13px] md:text-[14px] font-medium leading-relaxed">
                                A successful campaign starts with the right foundation. We configure and connect all the tools needed to track and optimise your marketing.
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
                            <div className="flex flex-col animate-[verticalScroll_20s_linear_infinite]">
                                {[...Array(2)].map((_, i) => (
                                    <React.Fragment key={i}>
                                        {scrollWords.map((word, j) => (
                                            <span key={`${i}-${j}`} className="text-[36px] sm:text-[50px] md:text-[75px] lg:text-[90px] font-black leading-[0.95] uppercase text-white drop-shadow-md">
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
