"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

const services = [
  { id: 1, title: "CUSTOM SOFTWARE DEVELOPMENT" },
  { id: 2, title: "WEBSITE DEVELOPMENT" },
  { id: 3, title: "HOSTING & MAINTENANCE" },
  { id: 4, title: "UI/UX DESIGN" },
  { id: 5, title: "IT CONSULTING" },
  { id: 6, title: "DATA ANALYTICS" },
];

export default function ServicesScroll() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // We have 6 items, so divide progress into 6 chunks
    const progressChunks = services.length;
    let index = Math.floor(latest * progressChunks);
    if (index >= progressChunks) index = progressChunks - 1;
    if (index < 0) index = 0;
    setActiveIndex(index);
  });

  return (
    <section ref={containerRef} className="relative w-full bg-black h-[600vh]">
      {/* Sticky container stays on screen while we scroll through the 600vh */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden pt-20 lg:pt-[120px]">

        {/* Background "WHAT WE DO" Text */}
        <div className="absolute top-[8%] md:top-[5%] left-0 w-full flex justify-center items-center pointer-events-none z-0">
          <h2 className="leading-none tracking-tighter flex gap-3 md:gap-6 lg:gap-12 opacity-80">
            <span className="text-[#333] text-[16vw] lg:text-[96px] font-thin">WHAT</span>
            <span className="bg-gradient-to-br from-[#1a2b5f] to-[#0a1128] bg-clip-text text-transparent text-[16vw] lg:text-[12vw] font-bold">WE</span>
            <span className="text-[#111] text-[16vw] lg:text-[12vw] font-bold">DO</span>
          </h2>
        </div>

        {/* Foreground Content */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 h-full">

          {/* Left Side: Text List */}
          <div className="flex flex-col space-y-4 md:space-y-6 relative z-20 h-[180px] md:h-[250px] lg:h-[300px] justify-center gap-4">
            {services.map((service, index) => {
              const offset = index - activeIndex;
              // Only show the active item, one above, and one below
              const isVisible = Math.abs(offset) <= 1;

              return (
                <motion.div
                  key={service.id}
                  initial={false}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    height: isVisible ? "auto" : 0,
                    marginBottom: isVisible ? 0 : -16, // counter space-y
                    scale: offset === 0 ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.5 }}
                  className="relative origin-left overflow-hidden"
                >
                  <h3
                    className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wider cursor-pointer transition-colors duration-500 ${offset === 0 ? "text-white" : "text-[#444]"
                      }`}
                  >
                    {service.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side: Stacked Image Cards */}
          <div className="relative w-full h-[280px] md:h-[400px] lg:h-[600px] flex justify-center lg:justify-end items-center perspective-[1200px]">
            {services.map((service, index) => {
              // Calculate relative position to active index
              const offset = index - activeIndex;

              let scale = 1;
              let y = 0;
              let zIndex = 10;
              let opacity = 1;
              let rotateX = 0;
              let brightness = 1;

              if (offset < 0) {
                // Passed cards animate up and out
                scale = 1.05;
                y = -80;
                zIndex = 40;
                opacity = 0;
                rotateX = -10;
              } else if (offset === 0) {
                // Active Card
                scale = 1;
                y = 0; // Centered
                zIndex = 30;
                opacity = 1;
                rotateX = -5; // Slight tilt towards viewer
                brightness = 1;
              } else if (offset === 1) {
                // Second Card
                scale = 0.9;
                y = -40; // Shifted up behind active
                zIndex = 20;
                opacity = 0.8;
                rotateX = 0;
                brightness = 0.6; // Darkened via overlay conceptually
              } else if (offset === 2) {
                // Third Card
                scale = 0.8;
                y = -80; // Shifted further up behind active
                zIndex = 10;
                opacity = 0.4;
                rotateX = 5;
                brightness = 0.3; // Very dark
              } else {
                // Future cards (hidden in the back)
                scale = 0.7;
                y = -120;
                zIndex = 0;
                opacity = 0;
                rotateX = 10;
                brightness = 0.1;
              }

              return (
                <motion.div
                  key={service.id}
                  initial={false}
                  animate={{
                    scale,
                    y,
                    rotateX,
                    opacity,
                    zIndex,
                    filter: `brightness(${brightness})`,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.32, 0.72, 0, 1], // Custom spring-like easing
                  }}
                  className="absolute lg:right-0 w-[95%] sm:w-[80%] lg:w-[100%] h-[200px] md:h-[350px] lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 transform-style-3d origin-bottom"
                >
                  <Image
                    src="/images/industries/manufacturing/service/1.png"
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  {/* Subtle glass reflection overlay on the cards */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
