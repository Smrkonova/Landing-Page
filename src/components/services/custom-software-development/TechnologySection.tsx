"use client";

import React from 'react';
import Image from 'next/image';

const checkIcon = (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5">
        <circle cx="7" cy="7" r="7" fill="#1a1a1a" />
        <path d="M4 7L6 9L10 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const coreTechList = [
    "TypeScript", "React / Next.js", "Node.js", "Python", "Go"
];

const backendTechList = [
    "PostgreSQL", "Redis", "Docker", "AWS", "GraphQL"
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
                {/* Center VR Image */}
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none h-full w-full">
                    <img
                        src="/images/services/website/mobile3.png"
                        alt="VR Technology Person"
                        className="w-full h-full object-cover md:object-contain opacity-90 scale-110 md:scale-160"
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
                        <div>
                            <h4 className="text-[1.5rem] font-[600] tracking-widest uppercase mb-4 text-[#212121]">CORE STACK</h4>
                            <ul className="space-y-3">
                                {coreTechList.map((item, idx) => (
                                    <li key={`core-${idx}`} className="flex items-center gap-3 text-[14px] text-[#5A5E63] font-[400]">
                                        {checkIcon}
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[1.5rem] font-[600] tracking-widest uppercase mb-4 text-[#212121]">BACKEND & CLOUD</h4>
                            <ul className="space-y-3">
                                {backendTechList.map((item, idx) => (
                                    <li key={`backend-${idx}`} className="flex items-center gap-3 text-[14px] text-[#5A5E63] font-[400]">
                                        {checkIcon}
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[1.5rem] font-[600] tracking-widest uppercase mb-4 text-[#212121]">ARCHITECTURE</h4>
                            <p className="text-[14px] text-[#5A5E63] font-[400] leading-relaxed">
                                Highly scalable microservices, automated CI/CD pipelines, containerized deployments, and zero-trust enterprise security protocols.
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
                                Seamlessly synchronize your custom software platform with legacy enterprise databases, third-party payment providers, and cloud infrastructure.
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
                                        {["PAYMENT", "WHATSAPP", "MAPS", "CRM", "BOOKING", "EMAIL", "ANALYTICS", "SHIPPING", "SOCIAL"].map((word, j) => (
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
