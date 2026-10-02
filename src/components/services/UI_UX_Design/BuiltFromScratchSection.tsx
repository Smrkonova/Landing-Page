'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function BuiltFromScratchSection() {
    const cards = [
        "Business Goals",
        "User Research",
        "Strategy",
        "Information Architecture",
        "Wireframes",
        "UI Design",
        "Prototype",
        "Developer Handoff",
        "Continuous Improvement"
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Scroll upwards: so the "next" item to enter the center comes from below
            // This means we DECREASE the active index.
            setActiveIndex((current) => (current === 0 ? cards.length - 1 : current - 1));
        }, 3000);
        return () => clearInterval(interval);
    }, [cards.length]);

    return (
        <section className="w-full max-w-full bg-white text-black pt-24 md:pt-32 pb-40 md:pb-56 lg:pb-64 overflow-hidden relative">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-0 flex flex-col lg:flex-row items-center justify-between gap-16">

                {/* Left Side: Text */}
                <div className="flex-1 w-full flex flex-col justify-center">
                    <h2 className="text-[32px] sm:text-[46px] md:text-[60px] lg:text-[70px] leading-[1.05] font-light text-gray-800 tracking-tight mb-8">
                        Every Great Product Starts With<br />
                        <span className="font-bold tracking-normal text-black">Understanding Users.</span>
                    </h2>

                    <p className="text-gray-500 text-[clamp(1rem,0.5vw+0.75rem,1.125rem)] max-w-lg mb-10 leading-relaxed font-light">
                        Before we design a single screen, we focus on understanding your users, your business and the problems we're trying to solve.
                    </p>
                </div>

                {/* Right Side: Rebuilt UI Graphic */}
                <div className="flex-1 w-full relative flex justify-center lg:justify-end items-center min-h-[500px]">
                    <style>{`
                        @keyframes pulseScale {
                            0% { transform: scale(1.1); }
                            50% { transform: scale(1.15); }
                            100% { transform: scale(1.1); }
                        }
                        .animate-pulse-scale {
                            animation: pulseScale 3s ease-in-out infinite;
                        }
                    `}</style>


                    {/* Graphic & Hand Wrapper */}
                    <div className="relative w-full max-w-[600px] h-[450px] flex items-center justify-center">

                        {/* UI Element Graphic (with built.svg background) */}
                        <div className="relative w-full h-full z-10 flex flex-col items-center justify-center overflow-hidden rounded-3xl">

                            {/* Background SVG Window */}
                            <Image
                                src="/images/services/website/built.svg"
                                alt="UX UI Design Window"
                                fill
                                className="object-contain pointer-events-none z-10"
                            />

                            {/* Glow Effect from Figma */}
                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] max-w-[300px] h-[250px] z-0 pointer-events-none"
                                style={{
                                    background: 'conic-gradient(from 180deg at 20% 80%, #68AAA7 180deg, #0E6CE9 360deg)',
                                    filter: 'blur(100px)',
                                    opacity: 0.5
                                }}
                            ></div>

                            {/* Cards Container */}
                            <div className="absolute inset-0 top-[-10%] bottom-[-10%] flex items-center justify-center overflow-hidden z-20">
                                {/* Top Fade Overlay */}
                                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-40 pointer-events-none"></div>
                                {/* Bottom Fade Overlay */}
                                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-40 pointer-events-none"></div>

                                {/* Cards List (React State Driven Infinite Carousel) */}
                                <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
                                    {cards.map((text, i) => {
                                        // Calculate shortest distance in a circular array
                                        let distance = i - activeIndex;
                                        if (distance < -2) distance += cards.length;
                                        if (distance > 2) distance -= cards.length;

                                        const isActive = distance === 0;
                                        const isVisible = Math.abs(distance) <= 1;
                                        const translateY = distance * 141;

                                        return (
                                            <div
                                                key={text}
                                                className={`absolute flex items-center justify-center w-[80%] max-w-[335px] h-[100px] md:h-[129px] rounded-[24px] backdrop-blur-md transition-all duration-[1000ms] border ${isActive
                                                    ? 'bg-white/60 border-white/80 shadow-[0_24px_48px_rgba(0,0,0,0.08)] scale-100 z-30 opacity-100'
                                                    : 'bg-white/30 border-white/40 shadow-sm opacity-80 scale-95 z-20'
                                                    }`}
                                                style={{
                                                    transform: `translateY(${translateY}px) scale(${isActive ? 1 : 0.95})`,
                                                    opacity: isVisible ? (isActive ? 1 : 0.8) : 0,
                                                    zIndex: isVisible ? (isActive ? 30 : 20) : 10,
                                                }}
                                            >
                                                <span className={`text-[clamp(11px,0.4vw+7px,14px)] font-medium tracking-[0.2em] uppercase transition-colors duration-[1000ms] ${isActive ? 'text-black' : 'text-gray-700'}`}>
                                                    {text}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Hand Image Overlay */}
                        <div className="absolute z-30 left-1/2 top-[44%] sm:top-[46%] -translate-x-[92%] w-[360px] sm:w-[420px] md:w-[460px] lg:w-[480px] aspect-square pointer-events-none">
                            <Image
                                src="/images/services/website/hand.png"
                                alt="Hand interacting with UI"
                                fill
                                className="object-contain"
                                style={{
                                    filter: 'drop-shadow(42px 116px 128px rgba(79, 127, 217, 0.25))'
                                }}
                            />
                        </div>
                    </div>

                    {/* Glass Circle Effect at the base of the hand */}
                    <style>{`
                        .glass-circle {
                            position: absolute;
                            width: 294px;
                            height: 294px;
                            left: -40%;
                            top: 129%;
                            transform: translate(-50%, -50%);
                            border-radius: 207px;
                            background: rgba(0, 0, 0, 0);
                            overflow: visible;
                            pointer-events: none;
                            z-index: 40; /* Above the hand */
                        }

                        .glass-circle__frost {
                            position: absolute;
                            inset: 0;
                            border-radius: inherit;
                            background: rgba(0, 0, 0, 0);

                            backdrop-filter: blur(28.9px);
                            -webkit-backdrop-filter: blur(28.9px);

                            -webkit-mask-image: radial-gradient(
                                circle closest-side,
                                #000 0%,
                                #000 62%,
                                transparent 100%
                            );
                            mask-image: radial-gradient(
                                circle closest-side,
                                #000 0%,
                                #000 62%,
                                transparent 100%
                            );
                        }
                    `}</style>
                    <div className="glass-circle">
                        <div className="glass-circle__frost"></div>
                    </div>
                </div>

            </div>
        </section>
    );
}
