"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Image from "next/image";

const processes = [
  { id: 1, title: "RESEARCH", desc: "Market, customers,\ncompetitors", img: "/images/industries/manufacturing/process/1.png" },
  { id: 2, title: "ENGINEER", desc: "Architect the right system", img: "/images/industries/manufacturing/process/2.png" },
  { id: 3, title: "DEVELOP", desc: "Build with precision and\npurpose", img: "/images/industries/manufacturing/process/3.png" },
  { id: 4, title: "TEST", desc: "Rigorous quality assurance", img: "/images/industries/manufacturing/process/1.png" },
  { id: 5, title: "DEPLOY", desc: "Seamless launch execution", img: "/images/industries/manufacturing/process/1.png" },
  { id: 6, title: "SCALE", desc: "Expand and optimize operations", img: "/images/industries/manufacturing/process/1.png" },
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
    <section ref={containerRef} className="relative w-full h-[600vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full flex overflow-hidden">

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
        <div className="relative z-10 w-full xl:w-[50%] h-full bg-gradient-to-r from-black/60 via-black/40 to-transparent backdrop-blur-xs flex flex-col justify-center p-12 md:p-24 xl:border-r border-white/10">

          {/* Top Label */}
          <div className="absolute top-12 left-12 md:top-16 md:left-24">
            <h4 className="text-sm font-medium text-white/60 tracking-[0.2em] uppercase">
              OUR PROCESS
            </h4>
          </div>

          {/* Scrolling Text List */}
          <div className="flex flex-col justify-center space-y-8 h-[400px]">
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
                    className="font-black tracking-tight uppercase transition-all duration-500 text-[50px] sm:text-[48px] md:text-[64px] leading-[1.1] text-white"
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
