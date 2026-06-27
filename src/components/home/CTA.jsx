"use client";

import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const CTA = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo('.cta-reveal',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: containerRef.current, start: "top 80%" } }
        );
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full bg-white text-black py-32 px-6 md:px-12 lg:px-24 rounded-b-[40px] z-40 relative shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
            <div className="max-w-7xl mx-auto flex flex-col gap-24">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="flex flex-col gap-8 cta-reveal">
                        <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-500">
                            WHY SMRKONOVA
                        </h2>
                        <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight uppercase">
                            BUILT FOR BUSINESSES THAT WANT REAL, SCALABLE GROWTH
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 cta-reveal">
                        <ul className="flex flex-col gap-4 text-gray-600 font-medium">
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-black rounded-full"></div>Clear product positioning</li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-black rounded-full"></div>Scalable system foundations</li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-black rounded-full"></div>Long-term growth architecture</li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-black rounded-full"></div>Customer trust & retention</li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-black rounded-full"></div>Performance-driven marketing</li>
                        </ul>
                        <ul className="flex flex-col gap-4 text-gray-600 font-medium">
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-black rounded-full"></div>Data & analytics systems</li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-black rounded-full"></div>Automation & integrations</li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-black rounded-full"></div>Conversion-focused design</li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-black rounded-full"></div>Scalable product & system architecture</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-[#f5f5f7] rounded-[40px] p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 cta-reveal">
                    <div className="flex flex-col gap-6 md:w-2/3">
                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight uppercase">
                            MOST BUSINESSES STAY STUCK. <br/>
                            <span className="text-gray-400">A FEW DECIDE TO GROW.</span>
                        </h3>
                        <p className="text-xl md:text-2xl text-gray-600 font-medium uppercase mt-4">
                            LETʼS BUILD YOUR PRODUCT, SYSTEM AND GROWTH ENGINE.
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-6 md:w-1/3">
                        <button className="bg-black text-white px-8 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gray-800 transition-colors flex items-center gap-4 w-full justify-center group cursor-pointer">
                            START JOURNEY <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <div className="flex flex-col items-center text-gray-500 font-medium text-sm">
                            <span>+91 9606654032</span>
                            <span>www.smrkonova.com</span>
                            <span>support@smrkonova.com</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-black/10 text-gray-400 text-xs font-bold uppercase tracking-widest cta-reveal">
                    <span>24 / ENGINEERED FOR GROWTH</span>
                    <span>BEYOND SERVICES. BUILT FOR GROWTH</span>
                </div>

            </div>
        </section>
    );
};

export default CTA;
