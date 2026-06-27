"use client";

import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const Process = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        // Process animations removed
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full bg-[#0a0a0a] text-white py-32 px-6 md:px-12 lg:px-24 overflow-hidden z-20">
            {/* Ambient Glass Glow Backgrounds (Soft Light Theme) */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] mix-blend-multiply pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-[150px] mix-blend-multiply pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-24">

                <div className="flex flex-col gap-6 max-w-4xl process-reveal">
                    <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-400">
                        11 / ENGINEERED FOR GROWTH
                    </h2>
                    <h3 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight uppercase text-white">
                        EVERYTHING CONNECTED
                    </h3>
                </div>

                {/* Light Glass Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 process-reveal">
                    {[
                        { title: "Strategy", desc: "Clear product direction. Business + tech aligned." },
                        { title: "Development", desc: "Full-stack systems. Scalable, secure, high-performance." },
                        { title: "Design", desc: "Built for usability, clarity, and conversion." },
                        { title: "Marketing & Lead Gen", desc: "Data-driven growth, funnels, and acquisition systems." },
                        { title: "Automation", desc: "Workflows, integrations, and smart processes." }
                    ].map((item, i) => (
                        <div key={i} className="group relative flex flex-col gap-4 p-8 rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:bg-white/10 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            <h4 className="text-2xl font-bold uppercase tracking-tight text-white">{item.title}</h4>
                            <p className="text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                    ))}

                    <div className="group relative flex flex-col gap-2 p-8 rounded-[2rem] bg-white/5 backdrop-blur-3xl border border-white/10 justify-center items-center text-center shadow-xl hover:-translate-y-1 transition-transform duration-500">
                        <h4 className="text-3xl font-bold uppercase tracking-tight text-white drop-shadow-md">One system.</h4>
                        <h4 className="text-3xl font-bold uppercase tracking-tight text-gray-500">No chaos.</h4>
                        <h4 className="text-3xl font-bold uppercase tracking-tight text-gray-600">No chaos.</h4>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Process;
