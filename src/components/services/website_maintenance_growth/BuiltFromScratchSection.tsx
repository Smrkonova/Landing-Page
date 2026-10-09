'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function BuiltFromScratchSection() {
    const cards = [
        "CONTINUOUS MONITORING",
        "PERFORMANCE AUDITS",
        "SECURITY PATCHING",
        "FEATURE ITERATION",
        "SCALABLE GROWTH"
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current === 0 ? cards.length - 1 : current - 1));
        }, 3000);
        return () => clearInterval(interval);
    }, [cards.length]);

    return (
        <section className="w-full max-w-full bg-white text-black py-10 md:pt-32 md:pb-56 lg:pb-64 min-h-[622px] md:min-h-0 overflow-hidden relative">
            <div className="w-full max-w-[390px] md:max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-0 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

                {/* Left Side: Text */}
                <div className="flex-1 w-full flex flex-col justify-center">
                    <h2 
                        className="uppercase text-[42px] leading-[48px] tracking-[-1.2px] md:text-[64px] md:leading-[70.83px] md:tracking-[2.06px] mb-4 md:mb-8"
                        style={{
                            fontFamily: "'Inter', sans-serif",
                        }}
                    >
                        <span
                            className="block font-[200] text-gray-800 tracking-[-1.2px] md:tracking-[2.06px]"
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 200,
                                textTransform: 'uppercase',
                            }}
                        >
                            CONTINUOUS
                        </span>
                        <span
                            className="block font-[700] md:font-[900] text-black tracking-[-1.2px] md:tracking-[2.06px]"
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                textTransform: 'uppercase',
                            }}
                        >
                            IMPROVEMENT.
                        </span>
                    </h2>

                    <p 
                        className="text-[#4B5563] max-w-md mb-6 md:mb-10 font-[400] text-[14px] leading-[28px] md:leading-[25px] tracking-[0px]"
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400,
                            letterSpacing: '0px',
                        }}
                    >
                        Launching a digital product isn't the finish line. It's the beginning of understanding how people actually use it.
                    </p>
                </div>

                {/* Right Side: Rebuilt UI Graphic */}
                <div className="flex-1 w-full relative flex justify-center lg:justify-end items-center min-h-[340px] md:min-h-[500px]">
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


                    {/* Graphic & Hand Wrapper (width: 316px, height: 317px on mobile) */}
                    <div className="relative w-[316px] h-[317px] md:w-full md:max-w-[600px] md:h-[450px] flex items-center justify-center">

                        {/* UI Element Graphic (with built.svg background) */}
                        <div className="relative w-full h-full z-10 flex flex-col items-center justify-center overflow-hidden rounded-[24px] md:rounded-3xl">

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
                                    background: 'conic-gradient(from 180deg at 50% 50%, #53A18B 0deg, #0060FB 180deg, #53A18B 360deg)',
                                    filter: 'blur(100px)',
                                    opacity: 0.5
                                }}
                            ></div>

                            {/* Cards Container */}
                            <div className="absolute inset-0 top-[-10%] bottom-[-10%] flex items-center justify-center overflow-hidden z-20 [--card-step:86px] md:[--card-step:141px]">
                                {/* Top Fade Overlay */}
                                <div className="absolute top-0 left-0 w-full h-16 md:h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-40 pointer-events-none"></div>
                                {/* Bottom Fade Overlay */}
                                <div className="absolute bottom-0 left-0 w-full h-16 md:h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-40 pointer-events-none"></div>

                                {/* Cards List (React State Driven Infinite Carousel) */}
                                <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
                                    {cards.map((text, i) => {
                                        // Calculate shortest distance in a circular array
                                        let distance = i - activeIndex;
                                        if (distance < -2) distance += cards.length;
                                        if (distance > 2) distance -= cards.length;

                                        const isActive = distance === 0;
                                        const isVisible = Math.abs(distance) <= 1;

                                        return (
                                            <div
                                                key={text}
                                                className={`absolute flex items-center justify-center w-[82%] max-w-[240px] md:max-w-[335px] h-[72px] md:h-[129px] rounded-[18px] md:rounded-[24px] backdrop-blur-md transition-all duration-[1000ms] border ${isActive
                                                    ? 'bg-white/60 border-white/80 shadow-[0_24px_48px_rgba(0,0,0,0.08)] scale-100 z-30 opacity-100'
                                                    : 'bg-white/30 border-white/40 shadow-sm opacity-80 scale-95 z-20'
                                                    }`}
                                                style={{
                                                    transform: `translateY(calc(${distance} * var(--card-step, 141px))) scale(${isActive ? 1 : 0.95})`,
                                                    opacity: isVisible ? (isActive ? 1 : 0.8) : 0,
                                                    zIndex: isVisible ? (isActive ? 30 : 20) : 10,
                                                }}
                                            >
                                                <span className={`text-[12px] md:text-[14px] font-medium tracking-[0.18em] uppercase text-center transition-colors duration-[1000ms] px-4 ${isActive ? 'text-black font-semibold' : 'text-gray-700'}`}>
                                                    {text}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Hand Image Overlay */}
                        <div className="absolute z-30 left-1/2 top-[44%] sm:top-[46%] -translate-x-[92%] w-[250px] sm:w-[340px] md:w-[460px] lg:w-[480px] aspect-square pointer-events-none">
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

                    {/* Background Decorative Rings/Glow */}
                    <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10"></div>
                </div>

            </div>
        </section>
    );
}
