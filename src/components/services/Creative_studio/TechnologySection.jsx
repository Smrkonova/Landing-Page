"use client";

import React from 'react';

const checkIcon = (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0">
        <circle cx="7" cy="7" r="7" fill="#1a1a1a" />
        <path d="M4 7L6 9L10 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const softwareCategories = [
    {
        title: "3D",
        tools: ["Blender"]
    },
    {
        title: "MOTION GRAPHICS",
        tools: ["Adobe After Effects", "Lottie"]
    },
    {
        title: "VIDEO EDITING",
        tools: ["Adobe Premiere Pro"]
    },
    {
        title: "DESIGN",
        tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator"]
    }
];

const scrollWords = [
    "BLENDER",
    "AFTER EFFECTS",
    "FIGMA",
    "PREMIERE PRO",
    "PHOTOSHOP",
    "ILLUSTRATOR",
    "LOTTIE",
    "3D RENDER",
    "MOTION",
    "CINEMATIC"
];

export default function TechnologySection() {
    return (
        <section className="w-full max-w-full bg-white py-8 sm:py-16 md:py-32 px-4 md:px-12 flex justify-center overflow-hidden">

            {/* Main Rounded Card Container */}
            <div className="relative w-full max-w-7xl min-h-[500px] sm:min-h-[620px] md:min-h-[1440px] bg-white rounded-[28px] sm:rounded-[40px] md:rounded-[60px] overflow-hidden flex flex-col justify-between">

                {/* --- BACKGROUND GRAPHICS & GLOWS --- */}
                <div className="absolute w-full inset-0 z-0 flex items-center justify-center pointer-events-none">
                    <img
                        src="/images/services/website/woman-holding-shopping-bags-looking-phone 1.png"
                        alt="Creative Software Showcase"
                        className="w-full h-full object-cover md:object-contain opacity-90 scale-110 md:scale-100"
                    />
                </div>

                {/* Mobile overlay to ensure readability */}
                <div className="absolute inset-0 bg-white/40 md:hidden pointer-events-none z-0"></div>

                {/* Violet/Purple Ambient Glows */}
                <div className="absolute bottom-[10%] right-[10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-100/40 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none z-0"></div>
                <div className="absolute bottom-[5%] left-[20%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-blue-100/30 rounded-full blur-[100px] sm:blur-[170px] pointer-events-none z-0"></div>

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
                        <h2 className="text-[28px] sm:text-[44px] md:text-[60px] lg:text-[72px] leading-[1.05] tracking-tight text-[#1a1a1a] uppercase">
                            <span className="block font-light">SOFTWARE</span>
                            <span className="block font-black">WE WORK WITH</span>
                        </h2>
                    </div>

                    {/* Middle Section: 4 Software Categories */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 md:gap-10 lg:gap-8 mt-6 sm:mt-12 md:mt-20 lg:mt-28">
                        {softwareCategories.map((cat, idx) => (
                            <div key={idx}>
                                <h4 className="text-[clamp(11px,0.4vw+6px,14px)] font-bold tracking-widest uppercase mb-2 sm:mb-6 text-gray-900">
                                    {cat.title}
                                </h4>
                                <ul className="space-y-1.5 sm:space-y-3">
                                    {cat.tools.map((tool, tIdx) => (
                                        <li key={tIdx} className="flex items-start gap-2 sm:gap-2.5 text-[clamp(11px,0.4vw+6px,14px)] text-gray-700 font-medium">
                                            {checkIcon}
                                            <span>{tool}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Section: Text & Typography Block (Hidden on mobile) */}
                    <div className="hidden md:flex w-full max-w-full overflow-hidden flex-col lg:flex-row justify-between items-start mt-16 sm:mt-20 lg:mt-auto relative z-20">

                        {/* Bottom Left Text */}
                        <div className="max-w-[340px] mb-12 lg:mb-0">
                            <h3 className="text-[34px] sm:text-[45px] md:text-[55px] leading-[1.05] tracking-tight text-[#1a1a1a] uppercase mb-4">
                                <span className="block font-black">CREATIVE</span>
                                <span className="block font-light text-gray-600">TOOLKIT</span>
                            </h3>
                            <p className="text-gray-600 text-[clamp(11px,0.4vw+6px,14px)] font-medium leading-relaxed">
                                We use industry-standard creative software to craft high-fidelity 3D assets, fluid motion animations and professional video productions.
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
