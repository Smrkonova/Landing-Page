"use client";

import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const About = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const texts = gsap.utils.toArray('.reveal-text');

        texts.forEach((text) => {
            gsap.fromTo(text,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: text,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full bg-white text-black py-32 md:py-48 px-6 md:px-12 lg:px-24 rounded-t-[40px] z-40 relative">
            <div className="max-w-7xl mx-auto flex flex-col gap-32">

                {/* About Section */}
                <div className="flex flex-col gap-12 md:gap-4 items-center justify-center text-center">
                    <div className="md:w-1/3">
                        <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-500 reveal-text">
                            The Reality Check
                        </h2>
                    </div>
                    <div className="md:w-2/3 flex flex-col gap-12">
                        <div className="flex flex-col gap-4">
                            <p className="text-2xl md:text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tighter reveal-text uppercase">
                                MOST BUSINESSES
                                <br />
                                <span className="text-gray-400">LOOK GOOD.</span>
                            </p>
                            <p className="text-2xl md:text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tighter reveal-text uppercase">
                                VERY FEW
                                <br />
                                ACTUALLY GROW.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Businesses Right Now Section */}
            <div className="w-full bg-[#f4f4f6] mt-32 py-24 md:py-32 px-6 md:px-12 lg:px-24 rounded-[40px] overflow-hidden relative">

                {/* Background Logo Watermark */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-[0.03] pointer-events-none translate-x-1/3 -translate-y-1/3">
                    <svg viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40,160 L100,40 L160,160 M70,100 L130,100" stroke="currentColor" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                </div>

                <div className="max-w-6xl mx-auto flex flex-col relative z-10">

                    {/* Header */}
                    <div className="flex flex-col mb-20 reveal-text">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black uppercase leading-[0.9]">
                            BUSINESSES
                        </h2>
                        <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-black/60 uppercase leading-[0.9]">
                            RIGHT NOW
                        </h2>
                    </div>

                    {/* Chat Bubbles Cluster */}
                    <div className="flex flex-col gap-12 md:gap-16 max-w-4xl mx-auto w-full relative">

                        {/* Designer Bubble */}
                        <div className="flex items-end gap-6 w-full reveal-text">
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-20 h-20 rounded-full bg-[#e8e8ff] flex items-center justify-center shadow-lg shadow-blue-500/10">
                                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                </div>
                                <span className="text-base font-medium text-gray-700">Designer</span>
                            </div>
                            <div className="relative bg-white px-8 py-8 md:px-12 md:py-10 rounded-[3rem] rounded-bl-none shadow-xl shadow-black/[0.03] border border-black/[0.02] mb-6">
                                <p className="text-xl md:text-2xl font-medium text-gray-800">"Design is done"</p>
                            </div>
                        </div>

                        {/* Developer Bubble */}
                        <div className="flex items-end justify-end gap-6 w-full reveal-text md:-mt-10">
                            <div className="relative bg-white px-8 py-8 md:px-12 md:py-10 rounded-[3rem] rounded-br-none shadow-xl shadow-black/[0.03] border border-black/[0.02] mb-6">
                                <p className="text-xl md:text-2xl font-medium text-gray-800">"Website is live"</p>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-20 h-20 rounded-full bg-[#e0f7fa] flex items-center justify-center shadow-lg shadow-cyan-500/10">
                                    <svg className="w-10 h-10 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <span className="text-base font-medium text-gray-700">Developer</span>
                            </div>
                        </div>

                        {/* Marketer Bubble */}
                        <div className="flex items-end gap-6 w-full reveal-text md:-mt-10">
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-20 h-20 rounded-full bg-[#fff0e6] flex items-center justify-center shadow-lg shadow-orange-500/10">
                                    <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                    </svg>
                                </div>
                                <span className="text-base font-medium text-gray-700">Marketer</span>
                            </div>
                            <div className="relative bg-white px-8 py-8 md:px-12 md:py-10 rounded-[3rem] rounded-bl-none shadow-xl shadow-black/[0.03] border border-black/[0.02] mb-6">
                                <p className="text-xl md:text-2xl font-medium text-gray-800">"Campaign is running"</p>
                            </div>
                        </div>

                    </div>

                    {/* The "NO" Conclusion */}
                    <div className="flex flex-col items-center mt-24 md:mt-32 reveal-text">
                        <p className="text-lg md:text-xl font-medium text-gray-600 mb-8">
                            But... nothing is working.
                        </p>
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                            <span className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-[#1a1a1a]">
                                NO
                            </span>
                            <div className="flex flex-col justify-center">
                                <p className="text-3xl md:text-4xl font-light text-gray-700 leading-relaxed">
                                    system.
                                    <br />
                                    data flow.
                                    <br />
                                    real growth engine.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default About;