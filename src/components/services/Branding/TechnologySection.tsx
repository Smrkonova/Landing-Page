"use client";

import React from 'react';
import Image from 'next/image';

const checkIcon = (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5">
        <circle cx="7" cy="7" r="7" fill="#1a1a1a" />
        <path d="M4 7L6 9L10 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const socialAssets = [
    "Social Media Templates",
    "Instagram Posts",
    "LinkedIn Templates",
    "Facebook Creatives",
    "Story Templates",
    "Highlight Covers"
];

const platformAssets = [
    "Email Signatures",
    "Website Graphics",
    "Presentation Templates",
    "App Icons",
    "Favicons"
];

const marketingAssets = [
    "Digital Banners",
    "Ad Creatives",
    "Web Illustrations"
];

const scrollWords = [
    "TEMPLATES",
    "INSTAGRAM",
    "LINKEDIN",
    "CREATIVES",
    "STORIES",
    "SIGNATURES",
    "GRAPHICS",
    "ICONS",
    "FAVICONS",
    "BANNERS",
    "ILLUSTRATIONS"
];

export default function TechnologySection() {
    return (
        <section className="w-full max-w-full bg-white py-8 sm:py-16 md:py-32 px-4 md:px-12 flex justify-center overflow-hidden">

            {/* Main Rounded Card Container */}
            <div className="relative w-full max-w-7xl min-h-[500px] sm:min-h-[620px] md:min-h-[1540px] bg-white rounded-[28px] sm:rounded-[40px] md:rounded-[60px] overflow-hidden flex flex-col justify-between">

                {/* --- BACKGROUND GRAPHICS & GLOWS --- */}
                <div className="absolute w-full inset-0 z-0 flex items-center justify-center pointer-events-none">
                    <img
                        src="/images/services/website/woman-holding-shopping-bags-looking-phone 1.png"
                        alt="Digital Brand Assets"
                        className="w-full h-full object-cover md:object-contain opacity-90 scale-110 md:scale-100"
                    />
                    <div className="absolute inset-0 bg-white/40 md:hidden pointer-events-none"></div>
                </div>

                {/* Ambient Glows */}
                <div className="absolute bottom-[10%] right-[10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-white/30 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none z-0"></div>
                <div className="absolute bottom-[5%] left-[20%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-white/20 rounded-full blur-[100px] sm:blur-[170px] pointer-events-none z-0"></div>

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
                        <h2 className="text-[28px] sm:text-[44px] md:text-[65px] lg:text-[72px] leading-[1.05] tracking-tight text-[#1a1a1a] uppercase">
                            <span className="block font-light">DIGITAL</span>
                            <span className="block font-black">BRAND ASSETS</span>
                        </h2>
                        <p className="hidden sm:block text-gray-600 text-[13px] sm:text-[15px] md:text-[16px] font-normal leading-relaxed max-w-xl mt-4">
                            A modern brand exists everywhere. We create digital assets that keep your business consistent across every platform.
                        </p>
                    </div>

                    {/* Middle Section: Asset Lists */}
                    <div className="flex flex-col lg:flex-row justify-between mt-6 sm:mt-12 md:mt-24 lg:mt-32 gap-6 lg:gap-8">
                        {/* Left Lists (Social & Web) */}
                        <div className="grid grid-cols-2 sm:flex sm:flex-row justify-start gap-4 sm:gap-12 md:gap-24">
                            {/* Social Media */}
                            <div>
                                <h4 className="text-[clamp(12px,0.5vw+6px,15px)] font-bold tracking-widest uppercase mb-2 sm:mb-6 text-gray-900">SOCIAL MEDIA</h4>
                                <ul className="space-y-1.5 sm:space-y-3">
                                    {socialAssets.map((item, idx) => (
                                        <li key={`social-${idx}`} className="flex items-start gap-2 sm:gap-2.5 text-[clamp(11px,0.4vw+6px,14px)] text-gray-600 font-medium">
                                            {checkIcon}
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Platform & Digital */}
                            <div>
                                <h4 className="text-[clamp(12px,0.5vw+6px,15px)] font-bold tracking-widest uppercase mb-2 sm:mb-6 text-gray-900">WEB & APPS</h4>
                                <ul className="space-y-1.5 sm:space-y-3">
                                    {platformAssets.map((item, idx) => (
                                        <li key={`platform-${idx}`} className="flex items-start gap-2 sm:gap-2.5 text-[clamp(11px,0.4vw+6px,14px)] text-gray-600 font-medium">
                                            {checkIcon}
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right List (Marketing & Ads) */}
                        <div className="lg:max-w-[320px] lg:mr-20 mt-2 sm:mt-6 lg:mt-0">
                            <h4 className="text-[clamp(12px,0.5vw+6px,15px)] font-bold tracking-widest uppercase mb-2 sm:mb-6 text-gray-900">MARKETING & ADS</h4>
                            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 sm:block sm:space-y-3">
                                {marketingAssets.map((item, idx) => (
                                    <li key={`marketing-${idx}`} className="flex items-start gap-2 sm:gap-2.5 text-[clamp(11px,0.4vw+6px,14px)] text-gray-600 font-medium">
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
                            <h3 className="text-[34px] sm:text-[45px] md:text-[55px] leading-[1.05] tracking-tight text-[#1a1a1a] uppercase mb-4">
                                <span className="block font-black">CONSISTENT</span>
                                <span className="block font-light text-gray-600">EVERYWHERE</span>
                            </h3>
                            <p className="text-gray-600 text-[clamp(11px,0.4vw+6px,14px)] font-medium leading-relaxed">
                                A modern brand exists everywhere. We create digital assets that keep your business consistent across every platform.
                            </p>
                        </div>

                        {/* Bottom Right Vertical Scrolling Typography */}
                        <div
                            className="w-full lg:w-auto max-w-full h-[350px] sm:h-[400px] md:h-[500px] overflow-hidden flex flex-col justify-center text-center lg:text-right pointer-events-none relative"
                            style={{
                                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 60%, transparent 100%)',
                                maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 60%, transparent 100%)'
                            }}
                        >
                            <div className="flex flex-col animate-[verticalScroll_20s_linear_infinite]">
                                {[...Array(2)].map((_, i) => (
                                    <React.Fragment key={i}>
                                        {scrollWords.map((word, j) => (
                                            <span key={`${i}-${j}`} className="text-[36px] sm:text-[50px] md:text-[80px] lg:text-[100px] font-black leading-[0.95] uppercase text-white drop-shadow-md">
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
