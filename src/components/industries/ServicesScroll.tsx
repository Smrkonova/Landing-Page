"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Image from "next/image";

export interface ServiceItem {
  id: number;
  title: string;
  image: string;
  category?: string;
  description?: string;
}

export const defaultServices: ServiceItem[] = [
  {
    id: 1,
    title: "SOFTWARE DEVELOPMENT",
    image: "/software.png",
    category: "ENGINEERING",
    description: "Custom software architecture, full-stack systems, and robust enterprise software engineered for scale.",
  },
  {
    id: 2,
    title: "UI/UX DESIGN",
    image: "/uiux.png",
    category: "PRODUCT DESIGN",
    description: "Human-centric interfaces, design systems, and modern digital experiences crafted for engagement.",
  },
  {
    id: 3,
    title: "HOSTING & MAINTENANCE",
    image: "/hosting.png",
    category: "CLOUD INFRASTRUCTURE",
    description: "Enterprise server architecture, cloud management, and continuous uptime monitoring.",
  },
  {
    id: 4,
    title: "BRAND IDENTITY",
    image: "/brand-identity.png",
    category: "BRAND STRATEGY",
    description: "Distinct visual identities, typography guidelines, and iconic corporate stationery systems.",
  },
  {
    id: 5,
    title: "DIGITAL MARKETING",
    image: "/digitalmarketing.png",
    category: "PERFORMANCE GROWTH",
    description: "Targeted digital marketing funnels, performance advertising, and multi-channel acquisition.",
  },
  {
    id: 6,
    title: "PHOTOGRAPHY & VIDEO",
    image: "/photography.png",
    category: "CREATIVE PRODUCTION",
    description: "Commercial photography, cinematography, and high-impact visual content production.",
  },
  {
    id: 7,
    title: "CATALOGUE DESIGN",
    image: "/catalogue.png",
    category: "EDITORIAL & PRINT",
    description: "Editorial catalogue design, luxury lookbooks, and high-conversion commercial print collateral.",
  },
  {
    id: 8,
    title: "ANALYTICS & REPORTING",
    image: "/analytics.png",
    category: "DATA INTELLIGENCE",
    description: "Executive business intelligence, real-time KPI tracking dashboards, and user behavior analytics.",
  },
  {
    id: 9,
    title: "SEO",
    image: "/seo.png",
    category: "SEARCH OPTIMIZATION",
    description: "Technical search engine optimization, content indexing, and organic ranking dominance.",
  },
];

interface ServicesScrollProps {
  services?: ServiceItem[];
}

export default function ServicesScroll({
  services = defaultServices,
}: ServicesScrollProps = {}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const progressChunks = services.length;
    let index = Math.floor(latest * progressChunks);
    if (index >= progressChunks) index = progressChunks - 1;
    if (index < 0) index = 0;
    setActiveIndex(index);
  });

  // Calculate previous and next services for the 3-item list
  const currentService = services[activeIndex] || services[0];
  const prevIndex = (activeIndex - 1 + services.length) % services.length;
  const nextIndex = (activeIndex + 1) % services.length;
  const prevService = services[prevIndex];
  const nextService = services[nextIndex];

  // Smooth scroll jump to a specific service step
  const handleSelect = (index: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;
    const containerTop = rect.top + scrollTop;
    const totalHeight = container.offsetHeight;
    const stepHeight = totalHeight / services.length;
    const targetScroll = containerTop + (index + 0.3) * stepHeight;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-black select-none"
      style={{
        height: `calc(${services.length * 100}vh / var(--desktop-scale, 1))`,
      }}
      id="what-we-do-section"
    >
      {/* Sticky container pinned to viewport during the entire scroll runway */}
      <div
        className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-between bg-black"
        style={{ height: "calc(100vh / var(--desktop-scale, 1))" }}
      >
        {/* Soft Blue Atmospheric Glow & Glare - Positioned at z-20 IN FRONT of the 3D image */}
        <div className="absolute top-[4%] md:top-[6%] left-1/2 -translate-x-[12%] w-[420px] md:w-[640px] lg:w-[840px] h-[240px] md:h-[320px] bg-gradient-to-b from-[#244274]/35 via-[#1a3260]/25 to-transparent blur-[90px] md:blur-[130px] rounded-full pointer-events-none z-20" />

        {/* Ambient Warm Floor Reflection behind 3D render */}
        <div className="absolute bottom-[4%] right-[6%] lg:right-[10%] w-[380px] md:w-[580px] h-[90px] bg-gradient-to-t from-black via-white/[0.02] to-transparent blur-[60px] rounded-full pointer-events-none z-10" />

        {/* Top Header "WHAT WE DO" - Crisp HTML typography at z-30 in front of glare & image */}
        <div className="w-full flex justify-center items-center pointer-events-none z-30 select-none pt-4 sm:pt-6 md:pt-8 lg:pt-10 px-4 shrink-0">
          <h2 className="leading-none tracking-tight flex items-baseline justify-center">
            {/* WHAT - Elegant, thin typography */}
            <span className="font-extralight text-[#303030] md:text-[#3a3a3a] text-[clamp(2.4rem,6.4vw,5.2rem)] tracking-[0.08em] mr-2 sm:mr-4 md:mr-6 lg:mr-8 uppercase">
              WHAT
            </span>

            {/* WE - Deep navy-blue gradient & bold typography */}
            <span className="font-black text-[clamp(3.2rem,8.6vw,7.6rem)] tracking-tight bg-gradient-to-b from-[#244274] via-[#1a2d4f] to-[#0c1626] bg-clip-text text-transparent mr-1.5 sm:mr-3 md:mr-5 uppercase drop-shadow-[0_0_40px_rgba(26,44,79,0.35)]">
              WE
            </span>

            {/* DO - Charcoal dark bold typography */}
            <span className="font-black text-[clamp(3.2rem,8.6vw,7.6rem)] tracking-tight text-[#161616] md:text-[#1c1c1c] uppercase">
              DO
            </span>
          </h2>
        </div>

        {/* Content Area */}
        <div className="flex-1 w-full max-w-[1520px] mx-auto px-6 sm:px-10 md:px-14 lg:px-18 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative pb-6 md:pb-10 min-h-0">

          {/* Left Side: 3-Item Vertical Service Selector (z-30 clickable controls) */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-30 w-full pl-0 lg:pl-4">
            <div className="relative flex flex-col items-center lg:items-start justify-center h-[170px] sm:h-[200px] md:h-[230px] lg:h-[260px] w-full">

              {/* Previous Item (Dimmed) */}
              <button
                type="button"
                onClick={() => handleSelect(prevIndex)}
                className="text-[#3c3c3c] hover:text-[#777] transition-all duration-300 uppercase font-bold text-xs sm:text-sm md:text-[14px] lg:text-[15px] tracking-[0.16em] mb-2 sm:mb-3 md:mb-5 cursor-pointer transform hover:-translate-y-0.5 active:scale-95"
                title={`View ${prevService.title}`}
              >
                {prevService.title}
              </button>

              {/* Active Item (Pure White, Bold, Highlighted) */}
              <div className="relative my-2 sm:my-2.5">
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={currentService.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="text-white uppercase font-black text-lg sm:text-2xl md:text-3xl lg:text-[32px] tracking-[0.12em] leading-tight drop-shadow-[0_2px_20px_rgba(255,255,255,0.25)]"
                  >
                    {currentService.title}
                  </motion.h3>
                </AnimatePresence>
              </div>

              {/* Next Item (Dimmed) */}
              <button
                type="button"
                onClick={() => handleSelect(nextIndex)}
                className="text-[#3c3c3c] hover:text-[#777] transition-all duration-300 uppercase font-bold text-xs sm:text-sm md:text-[14px] lg:text-[15px] tracking-[0.16em] mt-2 sm:mt-3 md:mt-5 cursor-pointer transform hover:translate-y-0.5 active:scale-95"
                title={`View ${nextService.title}`}
              >
                {nextService.title}
              </button>

            </div>

            {/* Subtle Step Counter Indicator */}
            <div className="hidden lg:flex items-center gap-3 mt-3 text-[11px] font-mono tracking-[0.2em] uppercase text-white/35">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
              <span>
                {String(activeIndex + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Right Side: 3D Product Showcase Image (Shifted higher up toward the blue glare) */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end items-center relative w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[640px] z-10 -translate-y-4 sm:-translate-y-7 md:-translate-y-10 lg:-translate-y-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.id}
                initial={{ opacity: 0, scale: 0.94, y: 16 }}
                animate={{ opacity: 1, scale: 1.02, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -16 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full flex items-center justify-center p-2 sm:p-4"
                style={{
                  mixBlendMode: "screen", // Blends true black pixels so image frame borders never cut or occlude
                }}
              >
                <div className="relative w-full h-full max-w-[480px] sm:max-w-[580px] md:max-w-[680px] lg:max-w-[760px] flex items-center justify-center">
                  <Image
                    src={currentService.image}
                    alt={currentService.title}
                    fill
                    priority
                    className="object-contain object-center pointer-events-none select-none drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)]"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 760px"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Mobile Step Dots Bar */}
        <div className="lg:hidden w-full flex justify-center items-center gap-2 pb-5 z-30 shrink-0">
          {services.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleSelect(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? "w-6 bg-white"
                  : "w-1.5 bg-white/25 hover:bg-white/50"
              }`}
              aria-label={`Jump to service ${item.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
