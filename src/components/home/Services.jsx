"use client";

import React, { useRef } from 'react';
import { Globe, Layout, Palette, ShoppingCart, TrendingUp, Check } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CyberGlassCard from "@/components/ui/CyberGlassCard";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const services = [
  {
    title: "SAAS PLATFORM",
    icon: Layout,
    subtitle: "Custom-built tools for businesses to manage, automate, and scale operations.",
  },
  {
    title: "WEB APPLICATIONS",
    icon: Globe,
    subtitle: "Dashboards, portals, and systems built for real-world usage.",
  },
  {
    title: "MOBILE APPS",
    icon: Palette,
    subtitle: "Android & iOS apps designed for performance and user experience.",
  },
  {
    title: "E-COMMERCE SYSTEMS",
    icon: ShoppingCart,
    subtitle: "Custom or Shopify-based solutions with full backend integration.",
  },
  {
    title: "AUTOMATION SYSTEMS",
    icon: TrendingUp,
    subtitle: "CRM, workflows, and integrations that reduce manual work.",
  },
  {
    title: "BACKEND & INFRASTRUCTURE",
    icon: TrendingUp,
    subtitle: "APIs, databases, and scalable systems that power everything.",
  }
];

const Services = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        // Services animations removed
    }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-[#0a0a0a] py-32 md:py-48 relative overflow-hidden flex flex-col items-center min-h-screen">
      
      {/* Background Central Silhouette / Glow Effect (Mimicking the image) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="w-[800px] h-[1000px] bg-gradient-to-b from-blue-500/20 via-slate-600/10 to-transparent rounded-[100%] blur-[100px] mix-blend-screen opacity-60"></div>
          
          {/* Subtle noise over the gradient */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center relative z-10">

        {/* Top Minimal Text */}
        <p className="text-xl md:text-3xl font-light tracking-[0.2em] text-gray-500 uppercase reveal-up mb-16 md:mb-24">
            NOT JUST SERVICES
        </p>

        {/* Huge Typography (WE BUILD) */}
        <div className="flex flex-col items-center justify-center w-full relative mb-12 reveal-up">
            <div className="flex flex-row items-center justify-center gap-6 md:gap-12 w-full px-4 md:px-0">
                <h2 className="text-[60px] md:text-[140px] font-thin tracking-tighter text-white leading-none uppercase">WE</h2>
                <h2 className="text-[60px] md:text-[140px] font-thin tracking-tighter text-white leading-none uppercase">BUILD</h2>
            </div>
        </div>

        {/* Huge Typography (DIGITAL PRODUCTS & SYSTEMS) */}
        <div className="flex flex-col items-center justify-center text-center reveal-up z-20 mb-32">
            <h3 className="text-[50px] md:text-[100px] font-black tracking-tighter text-white leading-[0.9] uppercase">
                DIGITAL PRODUCTS
            </h3>
            <h3 className="text-[50px] md:text-[100px] font-black tracking-tighter text-white/60 leading-[0.9] uppercase">
                & SYSTEMS
            </h3>
        </div>

        {/* Left Aligned Subtext */}
        <div className="w-full max-w-7xl flex flex-col md:flex-row justify-start mb-24 reveal-up">
            <div className="md:w-1/3 flex flex-col gap-4">
                <p className="text-sm tracking-widest text-gray-400 uppercase">WE</p>
                <p className="text-xl md:text-2xl font-light text-gray-300 tracking-wide leading-relaxed">
                    DESIGN, DEVELOP, <br />
                    AND SCALE <br />
                    <span className="text-sm font-medium text-gray-500 mt-4 block">
                        COMPLETE DIGITAL SOLUTIONS FROM IDEA TO FULL-FLEDGED PLATFORMS.
                    </span>
                </p>
            </div>
        </div>

        {/* Glass Cards Grid overlapping the center */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl w-full z-30 reveal-up relative">
          
          {services.map((service, index) => {
            const Icon = service.icon;
            // Shift middle column slightly for a staggered look without vertical overlap
            const translateY = index % 3 === 1 ? "lg:translate-y-12" : "lg:translate-y-0";
            
            return (
              <div key={index} className={`w-full ${translateY}`}>
                  <CyberGlassCard 
                    glowColor="rgba(0, 150, 255, 0.2)" 
                    borderGlowColor="rgba(255, 255, 255, 0.8)"
                    tiltSensitivity={10}
                    className="h-full"
                    theme="dark"
                  >
                    <div className="flex flex-col gap-6 p-8 md:p-10 h-full min-h-[300px]">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                        <Icon strokeWidth={1.5} className="w-5 h-5 text-gray-200" />
                      </div>
                      <h4 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white">
                        {service.title}
                      </h4>
                      <p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed">
                        {service.subtitle}
                      </p>
                    </div>
                  </CyberGlassCard>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
