"use client";

import React, { useRef } from 'react';
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const projects = [
  {
    num: "01",
    title: "Gamified Task Platform",
    category: "WORK BUT... LIKE A GAME",
    desc: "Built to turn tasks into an interactive product experience. A custom-built platform designed with dual-user architecture, gamification logic, and reward-driven engagement systems to increase user retention and activity.",
    tags: ["SCALABLE PLATFORM ARCHITECTURE", "HIGH-ENGAGEMENT USER FLOWS", "GAMIFICATION ENGINE"],
    image: "/images/projects/hiroguild.png",
    gradient: "bg-gradient-to-br from-[#0d1217] to-[#1a232b]",
    textColor: "text-white",
    tagStyle: "bg-white/10 text-white/80 border border-white/10"
  },
  {
    num: "02",
    title: "Neela Chandra",
    category: "TRADITION MEETS DIGITAL SYSTEM",
    desc: "Complete branding and custom-built digital system designed to transform a traditional business into a scalable online presence. Built for visibility, trust, and consistent lead generation.",
    tags: ["BRANDING", "DIGITAL INFRASTRUCTURE", "WEBSITE SYSTEM", "SEO ARCHITECTURE"],
    image: "/images/projects/neelachandra.png",
    gradient: "bg-gradient-to-br from-[#fdfbf7] to-[#f4eee4]",
    textColor: "text-gray-900",
    tagStyle: "bg-black/5 text-gray-700 border border-black/10"
  },
  {
    num: "03",
    title: "CineArtery",
    category: "CREATIVITY MEETS ENGINEERING",
    desc: "Built from scratch — high-performance, interactive, and system-driven. A fully custom-built platform designed to handle complex content, advanced animations, and seamless interactions at scale.",
    tags: ["CUSTOM FRONTEND + BACKEND", "COMPLEX CONTENT ARCHITECTURE", "SMOOTH UX ENGINE"],
    image: "/images/projects/cineartery.png",
    gradient: "bg-gradient-to-br from-[#050505] to-[#111111]",
    textColor: "text-white",
    tagStyle: "bg-white/10 text-white/80 border border-white/10"
  },
  {
    num: "04",
    title: "Nazr - Women Safety Ecosystem",
    category: "MORE THAN A PRODUCT. A COMPLETE SYSTEM.",
    desc: "A custom-built product ecosystem combining e-commerce, mobile application, and backend systems with full payment, real-time functionality, and integrations.",
    tags: ["WOMEN SAFETY ECOSYSTEM", "E-COMMERCE INTEGRATION", "REAL-TIME SYSTEM ARCHITECTURE"],
    image: "/images/projects/nazr.png",
    gradient: "bg-gradient-to-br from-[#e6007e] to-[#ff1493]",
    textColor: "text-white",
    tagStyle: "bg-black/20 text-white/90 border border-black/10"
  },
  {
    num: "05",
    title: "SPJ Legal",
    category: "A STRUCTURED DIGITAL SYSTEM",
    desc: "A custom-designed and developed digital platform with structured backend, SEO architecture, and lead tracking system built for conversion and authority. Built to scale content, capture leads, and position long-term digital authority.",
    tags: ["SEO-OPTIMIZED ARCHITECTURE", "HIGH-INTENT LEAD GENERATION", "AUTHORITY BUILDING SYSTEM"],
    image: "/images/projects/spjlegal.png",
    gradient: "bg-gradient-to-br from-[#ffffff] to-[#f5f7fa]",
    textColor: "text-gray-900",
    tagStyle: "bg-black/5 text-gray-700 border border-black/10"
  }
];

const Projects = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Project reveal animations removed
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-[#fbfbfd] text-black py-32 md:py-48 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/10 pb-12 project-header">
          <div className="flex flex-col gap-6 max-w-3xl">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-500">
              04 / ENGINEERED FOR GROWTH
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-black leading-[1.1] uppercase">
              OUR WORK. REAL WORK. <br />
              <span className="text-gray-400">REAL IMPACT.</span>
            </h3>
            <p className="text-lg text-gray-600 font-light uppercase tracking-wide mt-4">
              Not just designs. Not templates. Every solution is built from scratch.
              <br/> SCAN. SEE IT LIVE. STRATEGY. DESIGN. SYSTEMS. BUILT FOR IMPACT.
            </p>
          </div>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-12 md:gap-24">
          {projects.map((project, index) => (
            <div 
                key={index} 
                className={`project-card group relative flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24 p-8 md:p-16 lg:p-24 rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-3xl hover:-translate-y-2 ${project.gradient} ${project.textColor}`}
            >
              
              {/* Content Side */}
              <div className="flex flex-col gap-8 w-full md:w-1/2 z-10">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                      <span className="text-2xl font-light opacity-50 font-mono tracking-tighter">
                        {project.num}
                      </span>
                      <span className="text-xs font-bold tracking-widest uppercase opacity-70">
                        {project.category}
                      </span>
                  </div>
                  <h4 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase leading-[1.1]">
                    {project.title}
                  </h4>
                </div>
                <p className="text-lg md:text-xl leading-relaxed font-light opacity-80 max-w-xl">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className={`px-4 py-2 text-xs font-semibold tracking-wider rounded-full ${project.tagStyle}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <button className={`mt-8 w-fit flex items-center gap-4 px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${project.tagStyle} hover:bg-white hover:text-black hover:scale-105`}>
                  VIEW PLATFORM
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
                </button>
              </div>

              {/* Image Side */}
              <div className="w-full md:w-1/2 relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group-hover:scale-[1.02] transition-transform duration-700">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
