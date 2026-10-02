"use client";

import React from 'react';
import Image from 'next/image';

const checkIcon = (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5">
        <circle cx="7" cy="7" r="7" fill="#1a1a1a" />
        <path d="M4 7L6 9L10 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const mobileTechList = [
    "Flutter", "Android", "iOS"
];

const backendTechList = [
    "Node.js", "Laravel", "Firebase", "Supabase"
];

export default function TechnologySection() {
    return (
        <section className="w-full max-w-full bg-white py-8 sm:py-16 md:py-32 px-4 md:px-12 flex justify-center overflow-hidden">

            {/* Main Rounded Card Container */}
            <div className="relative w-full max-w-7xl min-h-[500px] sm:min-h-[620px] md:min-h-[1540px] bg-white rounded-[28px] sm:rounded-[40px] md:rounded-[60px] overflow-hidden flex flex-col justify-between">

                {/* --- BACKGROUND GRAPHICS & GLOWS --- */}
                {/* Center VR Image */}
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none h-full w-full">
                    <img
                        src="/images/services/website/mobile3.png"
                        alt="Mobile Technology"
                        className="w-full h-full object-cover md:object-contain opacity-90 scale-110 md:scale-180"
                    />
                    <div className="absolute inset-0 bg-white/40 md:hidden pointer-events-none"></div>
                </div>

                {/* Cyan/Blue Glows over the image */}
                <div className="absolute bottom-[10%] right-[10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full blur-[100px] sm:blur-[120px] pointer-events-none z-0"></div>
                <div className="absolute bottom-[5%] left-[20%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full blur-[100px] sm:blur-[140px] pointer-events-none z-0"></div>

                {/* Glass Circle Effect at the bottom of the technology image */}
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
                        <h2 className="text-[clamp(1.75rem,4vw+0.5rem,4.25rem)] leading-[1.05] tracking-tight text-[#1a1a1a] uppercase">
                            <span className="block font-light">TECHNOLOGY</span>
                            <span className="block font-black">WE WORK WITH</span>
                        </h2>
                    </div>

                    {/* Middle Section: Tech Lists */}
                    <div className="flex flex-col lg:flex-row justify-between mt-6 sm:mt-12 md:mt-24 lg:mt-32 gap-6 lg:gap-8">
                        {/* Left Lists (Mobile Dev & Backend) */}
                        <div className="grid grid-cols-2 sm:flex sm:flex-row justify-start gap-4 sm:gap-12 md:gap-20">
                            {/* Mobile Development */}
                            <div>
                                <h4 className="text-[clamp(12px,0.5vw+6px,15px)] font-bold tracking-widest uppercase mb-2 sm:mb-4 text-gray-900">MOBILE DEV</h4>
                                <ul className="space-y-1.5 sm:space-y-3">
                                    {mobileTechList.map((item, idx) => (
                                        <li key={`mobile-${idx}`} className="flex items-start gap-2 sm:gap-3 text-[clamp(11px,0.4vw+6px,14px)] text-gray-700 md:text-gray-500 font-medium">
                                            {checkIcon}
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Backend */}
                            <div>
                                <h4 className="text-[clamp(12px,0.5vw+6px,15px)] font-bold tracking-widest uppercase mb-2 text-gray-900">BACKEND</h4>
                                <p className="hidden sm:block text-[clamp(10px,0.4vw+4px,12px)] tracking-wide text-gray-500 mb-4 sm:mb-6">The engine behind your application.</p>
                                <ul className="space-y-1.5 sm:space-y-3">
                                    {backendTechList.map((item, idx) => (
                                        <li key={`backend-${idx}`} className="flex items-start gap-2 sm:gap-3 text-[clamp(11px,0.4vw+6px,14px)] text-gray-700 md:text-gray-500 font-medium">
                                            {checkIcon}
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Section: Admin Dashboards */}
                        <div className="lg:max-w-[340px] lg:mr-12 mt-2 sm:mt-6 lg:mt-0">
                            <h4 className="text-[clamp(12px,0.5vw+6px,15px)] font-bold tracking-widest uppercase mb-1.5 sm:mb-2 text-gray-900">ADMIN DASHBOARDS</h4>
                            <p className="hidden sm:block text-[clamp(10px,0.4vw+4px,12px)] tracking-wide text-gray-500 mb-3 sm:mb-4">Every app needs a control centre.</p>
                            <p className="text-[clamp(11px,0.4vw+6px,14px)] text-gray-600 md:text-gray-500 font-normal leading-relaxed line-clamp-3 sm:line-clamp-none">
                                We develop custom admin panels to manage users, content, products, reports and business operations.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Section: Text & Typography Block (Hidden on mobile) */}
                    <div className="hidden md:flex w-full max-w-full overflow-hidden flex-col lg:flex-row justify-between items-start mt-16 sm:mt-20 lg:mt-auto relative z-20">

                        {/* Bottom Left Text */}
                        <div className="max-w-[320px] mb-12 lg:mb-0">
                            <h3 className="text-[clamp(1.75rem,2.8vw+0.5rem,3.25rem)] leading-[1.05] tracking-tight text-[#1a1a1a] uppercase mb-6">
                                <span className="block font-black">Integrations</span>
                            </h3>
                            <p className="text-gray-600 text-[clamp(11px,0.4vw+6px,14px)] font-medium leading-relaxed">
                                Modern mobile apps need to work with other systems. We integrate applications with.
                            </p>
                        </div>

                        {/* Bottom Right Vertical Scrolling Typography */}
                        <div
                            className="w-full lg:w-auto max-w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden flex flex-col justify-center text-center lg:text-right pointer-events-none relative"
                            style={{
                                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 60%, transparent 100%)',
                                maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 60%, transparent 100%)'
                            }}
                        >
                            <div className="flex flex-col animate-[verticalScroll_20s_linear_infinite]">
                                {/* Duplicated list for seamless infinite scroll */}
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
