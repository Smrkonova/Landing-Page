"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Image from "next/image";

const processes = [
  { id: 1, title: "UNDERSTAND",  img: "/images/industries/manufacturing/process/1.png" },
  { id: 2, title: "PLAN",img: "/images/industries/manufacturing/process/2.png" },
  { id: 3, title: "DESIGN", img: "/images/industries/manufacturing/process/3.png" },
  { id: 4, title: "DEVELOP",  img: "/images/industries/manufacturing/process/1.png" },
  { id: 5, title: "TEST", img: "/images/industries/manufacturing/process/2.png" },
  { id: 6, title: "LAUNCH",  img: "/images/industries/manufacturing/process/3.png" },
  { id: 7, title: "SUPPORT",  img: "/images/industries/manufacturing/process/1.png" },
];

export default function ProcessScroll() {
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

  return (
    <section ref={containerRef} className="relative w-full max-w-full h-[600vh]">
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
      <div className="sticky top-0 h-screen w-full max-w-full flex overflow-hidden">

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
          className="relative z-10 w-full max-w-full xl:w-[50%] h-full bg-gradient-to-r from-black/60 via-black/40 to-transparent flex flex-col justify-center p-6 sm:p-12 md:p-24 xl:border-r xl:border-[#E2E2E2] items-center md:items-start text-center md:text-left overflow-hidden"
          style={{ backdropFilter: "blur(4px) url(#liquid-glass-distortion)" }}
        >

          {/* Top Label */}
          <div className="absolute top-8 sm:top-12 left-0 right-0 md:left-24 md:right-auto">
            <h4 className="text-xs sm:text-sm font-medium text-white/60 tracking-[0.2em] uppercase">
              OUR PROCESS
            </h4>
          </div>

          {/* Scrolling Text List */}
          <div className="flex flex-col justify-center space-y-8 h-[400px] items-center md:items-start w-full max-w-full">
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
                  className="overflow-hidden flex flex-col justify-center origin-left w-full max-w-full"
                >
                  <h2
                    className="font-black tracking-tight uppercase transition-all duration-500 text-[32px] sm:text-[48px] md:text-[64px] leading-[1.1] text-white break-words"
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
                    className="text-white/60 text-sm md:text-sm tracking-wide font-medium whitespace-pre-line"
                  >
                    {(process as any).desc}
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
