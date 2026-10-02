"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const processes = [
  { id: 1, title: "understands", desc: "Market, customers,\ncompetitors", img: "/images/industries/manufacturing/process/1.png" },
  { id: 2, title: "plan", desc: "Architect the right system", img: "/images/industries/manufacturing/process/2.png" },
  { id: 3, title: "design", desc: "Build with precision and\npurpose", img: "/images/industries/manufacturing/process/3.png" },
];

export default function ProcessScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;

      if (scrollableDistance <= 0) return;

      if (rect.top > 0) {
        setActiveIndex((prev) => (prev !== 0 ? 0 : prev));
        return;
      }

      if (rect.bottom <= window.innerHeight) {
        const lastIndex = processes.length - 1;
        setActiveIndex((prev) => (prev !== lastIndex ? lastIndex : prev));
        return;
      }

      let progress = -rect.top / scrollableDistance;
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      const progressChunks = processes.length;
      let index = Math.floor(progress * progressChunks);
      if (index >= progressChunks) index = progressChunks - 1;
      if (index < 0) index = 0;

      setActiveIndex((prev) => (prev !== index ? index : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    let lenisUnsub: (() => void) | null = null;
    const lenis = (window as any).__lenis;
    if (lenis && typeof lenis.on === "function") {
      lenis.on("scroll", handleScroll);
      lenisUnsub = () => lenis.off("scroll", handleScroll);
    } else {
      const timer = setTimeout(() => {
        const l = (window as any).__lenis;
        if (l && typeof l.on === "function") {
          l.on("scroll", handleScroll);
          lenisUnsub = () => l.off("scroll", handleScroll);
        }
      }, 300);
    }

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (lenisUnsub) lenisUnsub();
    };
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full"
      style={{ height: "calc(400vh / var(--desktop-scale, 1))" }}
    >
      {/* Liquid Glass SVG Filter Def */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="liquid-glass-distortion" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.005 0.005" numOctaves="2" seed="9" result="noise" />
            <feGaussianBlur in="noise" stdDeviation="1" result="blurred" />
            <feDisplacementMap in="SourceGraphic" in2="blurred" scale="10" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Sticky container */}
      <div 
        className="sticky top-0 w-full flex overflow-hidden"
        style={{ height: "calc(100vh / var(--desktop-scale, 1))" }}
      >

        {/* Background Images (Crossfading) */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            {processes.map((process, index) => (
              index === activeIndex && (
                <motion.div
                  key={process.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={process.img}
                    alt={process.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        {/* Left Glass Panel */}
        <div 
          className="relative z-10 w-full xl:w-[50%] h-full bg-gradient-to-r from-black/60 via-black/40 to-transparent flex flex-col justify-center p-12 md:p-24 xl:border-r xl:border-[#E2E2E2] items-center md:items-start text-center md:text-left"
          style={{ backdropFilter: "blur(4px) url(#liquid-glass-distortion)" }}
        >

          {/* Top Label */}
          <div className="absolute top-12 left-0 right-0 md:left-24 md:right-auto">
            <h4 className="text-[clamp(11px,0.5vw+4px,13px)] font-medium text-white/60 tracking-[0.2em] uppercase">
              OUR PROCESS
            </h4>
          </div>

          {/* Scrolling Text List */}
          <div className="flex flex-col justify-center space-y-8 h-[400px] items-center md:items-start w-full">
            {processes.map((process, index) => {
              const offset = index - activeIndex;
              const isVisible = Math.abs(offset) <= 1;
              const isCenter = offset === 0;

              return (
                <motion.div
                  key={process.id}
                  initial={false}
                  animate={{
                    opacity: isVisible ? (isCenter ? 1 : 0.4) : 0,
                    height: isVisible ? "auto" : 0,
                    y: isVisible ? offset * 20 : offset > 0 ? 50 : -50,
                    marginBottom: isVisible ? (isCenter ? 16 : 0) : -16,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="overflow-hidden flex flex-col justify-center origin-left"
                >
                  <h2
                    className="font-black tracking-tight uppercase transition-all duration-500 text-[clamp(1.85rem,3.8vw+0.5rem,3.875rem)] leading-[1.1] text-white"
                  >
                    {process.title}
                  </h2>

                  <motion.p
                    initial={false}
                    animate={{
                      opacity: isCenter ? 1 : 0,
                      height: isCenter ? "auto" : 0,
                      marginTop: isCenter ? 8 : 0,
                    }}
                    className="text-white/60 text-[clamp(12px,0.5vw+4px,14px)] tracking-wide font-medium whitespace-pre-line"
                  >
                    {process.desc}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Right Clear Panel (Empty, just to allow image to show) */}
        <div className="hidden xl:block relative z-10 w-[50%] h-full"></div>

      </div>
    </section>
  );
}
