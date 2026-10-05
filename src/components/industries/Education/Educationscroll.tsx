"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";

const processes = [
  {
    id: 1,
    title: "RESEARCH",
    desc: "Market, customers,\ncompetitors",
    img: "/images/industries/manufacturing/process/1.png",
  },
  {
    id: 2,
    title: "ENGINEER",
    desc: "Architect the right system",
    img: "/images/industries/manufacturing/process/2.png",
  },
  {
    id: 3,
    title: "DEVELOP",
    desc: "Build with precision and\npurpose",
    img: "/images/industries/manufacturing/process/3.png",
  },
  {
    id: 4,
    title: "TEST",
    desc: "Rigorous quality assurance",
    img: "/images/industries/manufacturing/process/1.png",
  },
  {
    id: 5,
    title: "DEPLOY",
    desc: "Seamless launch execution",
    img: "/images/industries/manufacturing/process/1.png",
  },
  {
    id: 6,
    title: "SCALE",
    desc: "Expand and optimize operations",
    img: "/images/industries/manufacturing/process/1.png",
  },
];

export default function Educationscroll() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const progressChunks = processes.length;
    let index = Math.floor(latest * progressChunks);
    if (index >= progressChunks) index = progressChunks - 1;
    if (index < 0) index = 0;
    setActiveIndex(index);
  });

  // Keep a stable window of 3 items visible, matching the design mock
  const windowStart = Math.min(Math.max(0, activeIndex - 1), processes.length - 3);
  const visibleProcesses = processes.slice(windowStart, windowStart + 3);

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ height: "calc(600vh / var(--desktop-scale, 1))" }}
    >
      {/* Liquid Glass SVG Filter Def */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter
            id="liquid-glass-distortion-educationscroll"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.005 0.005"
              numOctaves="2"
              seed="9"
              result="noise"
            />
            <feGaussianBlur in="noise" stdDeviation="1" result="blurred" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="blurred"
              scale="10"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Sticky container */}
      <div
        className="sticky top-0 w-full flex items-start sm:items-center justify-start overflow-hidden"
        style={{ height: "calc(100vh / var(--desktop-scale, 1))" }}
      >
        {/* Background Images (Crossfading) */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            {processes.map(
              (process, index) =>
                index === activeIndex && (
                  <motion.div
                    key={process.id}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={process.img}
                      alt={process.title}
                      fill
                      priority
                      className="object-cover object-center"
                    />
                  </motion.div>
                )
            )}
          </AnimatePresence>
          {/* Subtle gradient to ensure contrast */}
          <div className="absolute inset-0 bg-black/20 sm:bg-black/15 pointer-events-none" />
        </div>

        {/* Mobile: Floating Glass Card */}
        <div className="block xl:hidden relative z-10 w-full px-4 sm:px-6 pt-5 sm:pt-0 max-w-[460px] sm:max-w-[500px]">
          <div
            className="w-full bg-white/[0.12] sm:bg-white/[0.10] border border-white/35 rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden backdrop-blur-2xl"
            style={{
              backdropFilter: "blur(24px) url(#liquid-glass-distortion-educationscroll)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            {/* Top Label: OUR PROCESS */}
            <h4
              className="text-[12px] sm:text-[13px] font-medium text-white/70 tracking-[0.12em] uppercase text-left mb-6 sm:mb-8"
              style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
            >
              OUR PROCESS
            </h4>

            {/* 3 Visible Process Steps */}
            <div className="flex flex-col space-y-5 sm:space-y-6 text-left">
              {visibleProcesses.map((process) => {
                const isActive = processes[activeIndex]?.id === process.id;

                return (
                  <div
                    key={process.id}
                    className="transition-all duration-500 flex flex-col items-start text-left"
                  >
                    <h2
                      className={`font-black tracking-tight uppercase transition-colors duration-300 text-[clamp(28px,7vw,36px)] sm:text-[38px] leading-[1.1] text-left ${
                        isActive
                          ? "text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.2)]"
                          : "text-white/40"
                      }`}
                      style={{
                        fontFamily: "var(--font-inter), 'Inter', sans-serif",
                      }}
                    >
                      {process.title}
                    </h2>

                    <p
                      className={`text-[12.5px] sm:text-[13.5px] font-normal tracking-wide transition-colors duration-300 mt-1 text-left ${
                        isActive ? "text-white/95" : "text-white/40"
                      }`}
                      style={{
                        fontFamily: "var(--font-inter), 'Inter', sans-serif",
                      }}
                    >
                      {process.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Inner specular reflection highlight */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent pointer-events-none rounded-[24px] sm:rounded-[28px]" />
          </div>
        </div>

        {/* Desktop: Full-Height Left Glass Panel (Original h-full layout) */}
        <div
          className="hidden xl:flex relative z-10 w-[50%] h-full bg-gradient-to-r from-black/60 via-black/40 to-transparent flex-col justify-center p-12 md:p-24 border-r border-[#E2E2E2]/20 items-start text-left"
          style={{
            backdropFilter:
              "blur(4px) url(#liquid-glass-distortion-educationscroll)",
            WebkitBackdropFilter: "blur(4px)",
          }}
        >
          {/* Top Label: OUR PROCESS */}
          <div className="absolute top-10 sm:top-12 left-12 md:left-24 text-left">
            <h4
              className="text-[clamp(16px,1.67vw,24px)] font-normal text-white/70 tracking-[0] leading-[1.36] uppercase text-left"
              style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
            >
              OUR PROCESS
            </h4>
          </div>

          {/* Scrolling Text List */}
          <div className="flex flex-col justify-center space-y-8 h-[400px] items-start w-full">
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
                  className="overflow-hidden flex flex-col justify-center items-start text-left origin-left"
                >
                  {/* Title (64px, Extra Bold, 136% line-height) */}
                  <h2
                    className="font-[800] tracking-[0] uppercase transition-all duration-500 text-[clamp(2.25rem,4.44vw,4rem)] leading-[1.36] text-white text-left"
                    style={{
                      fontFamily: "var(--font-inter), 'Inter', sans-serif",
                    }}
                  >
                    {process.title}
                  </h2>

                  {/* Paragraph */}
                  <motion.p
                    initial={false}
                    animate={{
                      opacity: isCenter ? 1 : 0,
                      height: isCenter ? "auto" : 0,
                      marginTop: isCenter ? 8 : 0,
                    }}
                    className="text-white/70 text-[clamp(11px,0.833vw,12px)] tracking-[0.05em] font-[300] leading-[1.39] whitespace-pre-line text-left"
                    style={{
                      fontFamily: "var(--font-inter), 'Inter', sans-serif",
                    }}
                  >
                    {process.desc}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Clear Panel (Empty, allows background image to show) */}
        <div className="hidden xl:block relative z-10 w-[50%] h-full" />
      </div>
    </section>
  );
}
