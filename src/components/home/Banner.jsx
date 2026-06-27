"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Banner() {
  const bannerRef = useRef(null);
  
  // Track scroll progress within the banner
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start start", "end start"]
  });

  // Fade out elements as you scroll down (from 1 to 0)
  const fadeOutOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const slideUpY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <motion.div 
      ref={bannerRef}
      onViewportEnter={() => {
        if (typeof document !== "undefined") {
          document.body.style.backgroundColor = "#ffffff";
        }
      }}
      viewport={{ amount: 0.1 }}
      className="relative w-full h-screen bg-transparent text-[#212121] overflow-hidden font-mono selection:bg-[#212121]/20"
    >
      <motion.div 
        style={{ opacity: fadeOutOpacity, y: slideUpY }}
        className="w-full h-full relative"
      >
        {/* Decorative Corners */}
        {/* Top Left */}
        <div className="absolute top-12 left-12 flex flex-col gap-10 opacity-60 text-xs z-0">
          <div className="w-2 h-2 border border-[#212121]" />
          <div className="flex text-[#212121] tracking-widest">
            <span className="text-[14px]">79</span>
            <span className="text-[8px] leading-none pt-0.5">16</span>
          </div>
        </div>

        {/* Top Right */}
        <div className="absolute top-12 right-12 flex flex-col items-end gap-10 opacity-60 text-xs z-0">
          <div className="w-2 h-2 border border-[#212121]" />
          <div className="flex text-[#212121] tracking-widest">
            <span className="text-[14px]">19</span>
            <span className="text-[8px] leading-none pt-0.5">95</span>
          </div>
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-12 left-12 flex text-xs opacity-60 z-0">
          <div className="flex text-[#212121] tracking-widest">
            <span className="text-[20px] leading-none">32</span>
            <span className="text-[10px] leading-none pt-1">75</span>
          </div>
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-12 right-12 flex text-xs opacity-60 z-0">
          <div className="flex text-[#212121] tracking-widest">
            <span className="text-[20px] leading-none">14</span>
            <span className="text-[10px] leading-none pt-1">36</span>
          </div>
        </div>

        {/* Vertical Side Rulers */}
        {/* Left Ruler */}
        <div className="absolute left-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 opacity-40 text-[8px] text-[#212121] z-0">
          <div className="text-[#212121]">┌</div>
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={`l-${i}`} className="relative flex items-center justify-center w-4 h-2">
              {i === 2 && <span className="absolute left-6">10</span>}
              {i === 5 && <span className="absolute left-6">78</span>}
              {i === 8 && <span className="absolute left-6">92</span>}
              {i === 11 && <span className="absolute left-6">55</span>}
              {i === 14 && <span className="absolute left-6">94</span>}
              <div className="w-1.5 h-px bg-[#212121]" />
            </div>
          ))}
          <div className="text-[#212121]">└</div>
        </div>

        {/* Right Ruler */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 opacity-40 text-[8px] text-[#212121] z-0">
          <div className="text-[#212121]">┐</div>
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={`r-${i}`} className="relative flex items-center justify-center w-4 h-2">
              <div className="w-1.5 h-px bg-[#212121]" />
              {i === 3 && <span className="absolute right-6">23</span>}
              {i === 6 && <span className="absolute right-6">51</span>}
              {i === 9 && <span className="absolute right-6">22</span>}
              {i === 12 && <span className="absolute right-6">59</span>}
              {i === 14 && <span className="absolute right-6">10</span>}
            </div>
          ))}
          <div className="text-[#212121]">┘</div>
        </div>

        {/* Center Content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center gap-8"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#212121]/70">
              THE PRESENT
            </span>

            <h1 className="text-3xl md:text-5xl lg:text-[4rem] font-sans font-medium text-[#212121] text-center uppercase tracking-wide leading-tight max-w-5xl px-4">
              WE ARE A DIGITAL CONSULTANCY<br />
              HELPING BUSINESSES GROW GLOBALLY
            </h1>
          </motion.div>

          {/* Scroll to discover - Circular Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-[20%] mt-20"
          >
            <div className="relative w-28 h-28 flex items-center justify-center">
              {/* Center Dot */}
              <div className="w-1.5 h-1.5 bg-[#212121]/50 rounded-full" />

              {/* Circular Text SVG */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                className="absolute inset-0"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible opacity-70">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                    fill="transparent"
                  />
                  <text className="text-[7.5px] tracking-[0.2em] uppercase font-mono" fill="#212121">
                    <textPath href="#circlePath" startOffset="0%">
                      SCROLL TO DISCOVER • SCROLL TO DISCOVER •
                    </textPath>
                  </text>
                </svg>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </motion.div>
  );
}
