"use client";

import React from 'react';
import Image from 'next/image';

const checkIcon = (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5">
        <circle cx="7" cy="7" r="7" fill="#1a1a1a" />
        <path d="M4 7L6 9L10 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const designTools = [
    "Figma", "FigJam", "Adobe Photoshop", "Adobe Illustrator"
];

const prototypingTools = [
    "Figma Prototype", "Principle", "ProtoPie"
];

const motionTools = [
    "Lottie", "Rive", "Spline", "Blender"
];

const scrollTools = [
    "Figma",
    "FigJam",
    "Photoshop",
    "Illustrator",
    "Prototype",
    "Principle",
    "ProtoPie",
    "Lottie",
    "Rive",
    "Spline",
    "Blender"
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
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none h-full w-full">
                    <img
                        src="/images/services/website/mobile3.png"
                        alt="Design Technology"
                        className="w-full h-full object-cover md:object-contain opacity-90 scale-110 md:scale-180"
                    />
                    <div className="absolute inset-0 bg-white/40 md:hidden pointer-events-none"></div>
                </div>

                {/* Ambient Glows */}
                <div className="absolute bottom-[10%] right-[10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full blur-[100px] sm:blur-[120px] pointer-events-none z-0"></div>
                <div className="absolute bottom-[5%] left-[20%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full blur-[100px] sm:blur-[140px] pointer-events-none z-0"></div>

                {/* Glass Circle Effect at the bottom */}
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
                            className="leading-[1.05em] tracking-tight text-[#1a1a1a] uppercase"
                            style={{ fontFamily: "'Inter', sans-serif", fontSize: '42px' }}
                        >
                            <span className="block font-[200]">TOOLS</span>
                            <span className="block font-[900]">WE WORK WITH</span>
                        </h2>
                        <p className="hidden sm:block text-[#5A5E63] text-[14px] font-normal leading-relaxed max-w-xl mt-4">
                            We use industry-standard tools to research, design, prototype and collaborate seamlessly with your engineering team.
                        </p>
                    </div>

                    {/* Middle Section: Tech Lists */}
                    <div className="flex flex-col lg:flex-row justify-between mt-6 sm:mt-12 md:mt-24 lg:mt-32 gap-6 lg:gap-8">
                        {/* Left Lists (Design & Prototyping) */}
                        <div className="grid grid-cols-2 sm:flex sm:flex-row justify-start gap-4 sm:gap-12 md:gap-20">
                            {/* Design */}
                            <div>
                                <h4 className="text-[1.5rem] font-[600] tracking-widest uppercase mb-4 text-[#212121]" style={{ fontFamily: "'Inter', sans-serif" }}>DESIGN</h4>
                                <ul className="space-y-3">
                                    {designTools.map((item, idx) => (
                                        <li key={`design-${idx}`} className="flex items-start gap-3 text-[14px] text-[#5A5E63] font-[400]">
                                            {checkIcon}
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Prototyping */}
                            <div>
                                <h4 className="text-[1.5rem] font-[600] tracking-widest uppercase mb-4 text-[#212121]" style={{ fontFamily: "'Inter', sans-serif" }}>PROTOTYPING</h4>
                                <ul className="space-y-3">
                                    {prototypingTools.map((item, idx) => (
                                        <li key={`proto-${idx}`} className="flex items-start gap-3 text-[14px] text-[#5A5E63] font-[400]">
                                            {checkIcon}
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Section: Motion & Interaction */}
                        <div className="lg:max-w-[340px] lg:mr-18 mt-2 sm:mt-6 lg:mt-0">
                            <h4 className="text-[1.5rem] font-[600] tracking-widest uppercase mb-4 text-[#212121]" style={{ fontFamily: "'Inter', sans-serif" }}>MOTION & INTERACTION</h4>
                            <ul className="space-y-3 mb-2 sm:mb-6">
                                {motionTools.map((item, idx) => (
                                    <li key={`motion-${idx}`} className="flex items-start gap-3 text-[14px] text-[#5A5E63] font-[400]">
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
                            <h3 className="text-[clamp(1.75rem,3.2vw+0.5rem,3.4375rem)] leading-[1.05] tracking-tight text-[#1a1a1a] uppercase mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                                <span className="block font-[900]">INTERACTIVE</span>
                                <span className="block font-[900]">EXPERIENCES</span>
                                <span className="block font-[200] text-gray-600">AT SCALE</span>
                            </h3>
                            <p className="text-[#5A5E63] text-[16px] font-[400] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                                Every product interface connects users to your core business value. We engineer prototypes and design systems that make growth effortless.
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
                                        {scrollTools.map((word, j) => (
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
