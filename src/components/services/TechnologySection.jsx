"use client";

import React from 'react';
import Image from 'next/image';

const checkIcon = (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5">
        <circle cx="7" cy="7" r="7" fill="#1a1a1a" />
        <path d="M4 7L6 9L10 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const techList = [
    "Next.js", "React", "HTML", "CSS", "Javascript", "Next.js", "Next.js", "Next.js", "Next.js"
];

export default function TechnologySection() {
    return (
        <section className="w-full bg-white py-20 md:py-32 px-4 md:px-12 flex justify-center overflow-hidden">

            {/* Main Rounded Card Container */}
            <div className="relative w-full max-w-7xl min-h-[900px] md:min-h-[1540px] bg-white rounded-[40px] md:rounded-[60px] ">

                {/* --- BACKGROUND GRAPHICS & GLOWS --- */}
                {/* Center VR Image */}
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                    <img
                        src="/images/services/website/technology.png"
                        alt="VR Technology Person"
                        className="w-full h-full object-cover md:object-contain opacity-90 scale-110 md:scale-100"
                    />
                </div>

                {/* Cyan/Blue Glows over the image */}
                <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-cyan-400/50 rounded-full blur-[120px] pointer-events-none z-0"></div>
                <div className="absolute bottom-[5%] left-[20%] w-[400px] h-[400px] bg-indigo-500/40 rounded-full blur-[140px] pointer-events-none z-0"></div>

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
                <div className="relative z-10 w-full h-full flex flex-col justify-between">

                    {/* Top Heading */}
                    <div>
                        <h2 className="text-[40px] md:text-[60px] lg:text-[70px] leading-[1.05] tracking-tight text-[#1a1a1a] uppercase">
                            <span className="block font-light">TECHNOLOGY</span>
                            <span className="block font-black">WE WORK WITH</span>
                        </h2>
                    </div>

                    {/* Middle Section: Tech Lists */}
                    <div className="flex flex-col lg:flex-row justify-between mt-16 md:mt-24 lg:mt-32 px-0 lg:px-4">
                        {/* Left Lists (Frontend & Backend) */}
                        <div className="flex gap-12 md:gap-24">
                            {/* Frontend */}
                            <div>
                                <h4 className="text-sm md:text-base font-bold tracking-widest uppercase mb-6 text-gray-900">FRONTEND</h4>
                                <ul className="space-y-3">
                                    {techList.map((item, idx) => (
                                        <li key={`frontend-${idx}`} className="flex items-start gap-3 text-[13px] md:text-[14px] text-gray-500 font-medium">
                                            {checkIcon}
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Backend */}
                            <div>
                                <h4 className="text-sm md:text-base font-bold tracking-widest uppercase mb-6 text-gray-900">BACKEND</h4>
                                <ul className="space-y-3">
                                    {techList.map((item, idx) => (
                                        <li key={`backend-${idx}`} className="flex items-start gap-3 text-[13px] md:text-[14px] text-gray-500 font-medium">
                                            {checkIcon}
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right List (CMS) */}
                        <div className="mt-12 lg:mt-0 lg:mr-24">
                            <h4 className="text-sm md:text-base font-bold tracking-widest uppercase mb-6 text-gray-900">CMS</h4>
                            <ul className="space-y-3">
                                {techList.map((item, idx) => (
                                    <li key={`cms-${idx}`} className="flex items-start gap-3 text-[13px] md:text-[14px] text-gray-500 font-medium">
                                        {checkIcon}
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Section: Text & Typography Block */}
                    <div className="flex flex-col lg:flex-row justify-between items-start mt-40 lg:mt-auto relative z-20">

                        {/* Bottom Left Text */}
                        <div className="max-w-[320px] mb-12 lg:mb-0">
                            <h3 className="text-[40px] md:text-[55px] leading-[1.05] tracking-tight text-[#1a1a1a] uppercase mb-6">
                                <span className="block font-black">CONNECT</span>
                                <span className="block font-black">EVERYTHING</span>
                                <span className="block font-light text-gray-600">TOGETHER</span>
                            </h3>
                            <p className="text-gray-600 text-[13px] md:text-[14px] font-medium leading-relaxed">
                                We don't start with templates. Every project starts by understanding your business, your customers and your goals before a single screen is designed.
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
                                {/* Duplicated list for seamless infinite scroll */}
                                {[...Array(2)].map((_, i) => (
                                    <React.Fragment key={i}>
                                        {["PAYMENT", "WHATSAPP", "MAPS", "CRM", "BOOKING", "EMAIL", "ANALYTICS", "SHIPPING", "SOCIAL"].map((word, j) => (
                                            <span key={`${i}-${j}`} className="text-[50px] md:text-[80px] lg:text-[100px] font-black leading-[0.9] uppercase text-white drop-shadow-md">
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
