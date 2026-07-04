"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRef, useState } from "react";

export default function CineArteryProjectPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  // Collage Section Hooks
  const textRef = useRef(null);
  const { scrollYProgress: textProgress } = useScroll({
    target: textRef,
    offset: ["start end", "center center"]
  });

  const c1 = useTransform(textProgress, [0, 0.2], ["#d1d5db", "#111111"]);
  const c2 = useTransform(textProgress, [0.2, 0.4], ["#d1d5db", "#E91E63"]);
  const c3 = useTransform(textProgress, [0.4, 0.6], ["#d1d5db", "#111111"]);
  const c4 = useTransform(textProgress, [0.6, 0.8], ["#d1d5db", "#EAB308"]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  };
  
  const mX1 = mousePos.x * 20;
  const mY1 = mousePos.y * 20;
  const mX2 = mousePos.x * -30;
  const mY2 = mousePos.y * -30;
  const mX3 = mousePos.x * 40;
  const mY3 = mousePos.y * 40;

  const marqueeItemsRow1 = [
    { img: "/images/projects/cineartery/1.png", bold: "CINEMA", light: "STRATEGY" },
    { img: "/images/projects/cineartery/5.png", bold: "DIGITAL", light: "PLATFORM" },
    { img: "/images/projects/cineartery/banner.png", bold: "MOTION", light: "DESIGN" },
    { img: "/images/projects/cineartery/mobile.png", bold: "CREATIVE", light: "DIRECTION" },
  ];
  
  const marqueeItemsRow2 = [
    { img: "/images/projects/cineartery/4.png", bold: "USER", light: "EXPERIENCE" },
    { img: "/images/projects/cineartery/2.png", bold: "BRAND", light: "IDENTITY" },
    { img: "/images/projects/cineartery/3.png", bold: "WEB", light: "DEVELOPMENT" },
    { img: "/images/projects/cineartery/1.png", bold: "3D", light: "ANIMATION" },
    { img: "/images/projects/cineartery/5.png", bold: "UI/UX", light: "DESIGN" },
  ];

  return (
    <main className="relative min-h-screen flex flex-col bg-[#111111] overflow-hidden selection:bg-[#EAB308]/20">
      
      {/* Page Entry Transition */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[60] origin-top bg-[#EAB308]"
      />

      {/* Main 3-Column Section */}
      <section className="relative w-full bg-[#111111] text-white pt-12 md:pt-30 px-6 md:px-12 flex justify-center overflow-hidden z-20 min-h-[100vh] h-auto pb-24 md:pb-0">
        
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Left Column Metadata */}
          <div className="lg:col-span-2 flex flex-col gap-12 justify-start pt-16">
            <div className="flex flex-col gap-2">
              <span className="text-[#a0a0a0] font-medium text-sm">UX/UI</span>
              <span className="text-[#666666] text-[10px] uppercase tracking-widest font-bold">WEBSITE & MOTION</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[#a0a0a0] font-medium text-sm">Category</span>
              <span className="text-[#666666] text-[10px] uppercase tracking-widest font-bold">FILM & DIGITAL</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[#a0a0a0] font-medium text-sm">Duration</span>
              <span className="text-[#666666] text-[10px] uppercase tracking-widest font-bold">6 MONTHS</span>
            </div>
          </div>

          {/* Center Column (Hero Image) */}
          <div ref={containerRef} className="lg:col-span-7 w-full flex items-center justify-center">
            <motion.div
              style={{ y: parallaxY }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full aspect-[16/11] md:aspect-[16/14] rounded-[32px] md:rounded-[40px] border border-[#EAB308]/40 overflow-hidden relative shadow-[0_0_40px_rgba(234,179,8,0.15)] p-6 md:p-10 flex items-center justify-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/projects/cineartery/banner.png" 
                alt="CineArtery Website Mockup" 
                className="w-full h-full object-contain rounded-[16px] md:rounded-[24px]" 
              />
            </motion.div>
          </div>

          {/* Right Column (Features List) */}
          <div className="lg:col-span-3 flex flex-col gap-10 justify-end pb-12">
            
            {[
              "Cinematic storytelling",
              "Motion design",
              "Scroll animations",
              "Film grain effects"
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-6 group cursor-pointer"
              >
                {/* Custom Bullet Point (Animated concentric rings) */}
                <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center shrink-0">
                  {/* Outer Rippling Ring */}
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                    className="absolute w-full h-full rounded-full border border-[#E91E63]/40"
                  />
                  {/* Middle Ring */}
                  <div className="absolute w-8 h-8 md:w-9 md:h-9 rounded-full border-[1.5px] border-[#E91E63] group-hover:scale-110 transition-transform duration-300" />
                  {/* Inner Yellow Dot */}
                  <div className="absolute w-3 h-3 md:w-3.5 md:h-3.5 bg-[#EAB308] rounded-full group-hover:scale-110 transition-transform duration-300 shadow-[0_0_8px_rgba(234,179,8,0.6)]" />
                </div>
                {/* Feature Text */}
                <span className="text-[#a0a0a0] font-light text-sm tracking-wide group-hover:text-white transition-colors duration-300">
                  {feature}
                </span>
              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* About / Ecosystem Section */}
      <section className="relative w-full bg-[#111111] text-white py-24 md:py-32 px-6 md:px-12 flex justify-center overflow-hidden z-20">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full flex justify-center lg:justify-start"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/projects/cineartery/mobile.png" alt="CineArtery Mobile View" className="w-full max-w-[500px] object-contain drop-shadow-2xl" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-black uppercase tracking-tight">
                WHERE CINEMA<br />MEETS CODE.
              </h2>
              <h3 className="text-lg md:text-xl lg:text-2xl text-[#a0a0a0] font-light uppercase tracking-wide leading-relaxed">
                WHERE STORYTELLING<br />MEETS TECHNOLOGY.
              </h3>
            </div>

            <p className="text-[#808080] text-sm md:text-base leading-[1.8] max-w-xl font-light">
              Cineartery wasn't built to launch another website.<br className="hidden md:block" />
              It was built to create a cinematic digital platform where storytelling,<br className="hidden md:block" />
              technology, motion design and creative engineering come together<br className="hidden md:block" />
              to elevate the world of film.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button suppressHydrationWarning className="px-8 py-4 bg-[#EAB308] text-[#111111] rounded-[4px] font-semibold text-sm hover:bg-[#FACC15] transition-colors duration-300 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                Explore the Platform
              </button>
              <button suppressHydrationWarning className="px-8 py-4 border border-[#E91E63]/50 text-[#a0a0a0] hover:text-white rounded-[4px] font-medium text-sm flex items-center justify-center gap-4 hover:bg-[#E91E63]/10 transition-colors duration-300">
                <div className="w-5 h-5 bg-[#E91E63] flex items-center justify-center rounded-[2px]">
                  <span className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-white border-b-[4px] border-b-transparent ml-[2px]"></span>
                </div>
                Watch the Trailer
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Collage Section */}
      <section
        onMouseMove={handleMouseMove}
        className="relative w-full bg-[#111111] pb-24 md:pb-32 px-6 md:px-12 flex justify-center z-20"
      >
        <div className="w-full max-w-7xl bg-[#FAF6EC] rounded-[40px] px-8 md:px-16 lg:px-24 py-16 md:py-24 flex flex-col items-center gap-16 md:gap-24">
          <div ref={textRef} className="w-full">
            <h2 className="text-4xl md:text-5xl lg:text-[64px] leading-[1.1] font-black uppercase tracking-tight">
              <motion.span style={{ color: c1 }}>THEY SETTLE</motion.span><br />
              <motion.span style={{ color: c1 }}>FOR STREAMING.</motion.span><br />
              <motion.span style={{ color: c2 }}>CINEARTERY</motion.span><br />
              <motion.span style={{ color: c3 }}>CAME TO</motion.span><br />
              <motion.span style={{ color: c4 }}>REWIRE CINEMA.</motion.span>
            </h2>
          </div>

          <div className="relative w-full max-w-[900px] aspect-[4/3] md:aspect-[16/9] flex items-center justify-center mt-8 md:mt-12">

            {/* Left Image */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute z-10 w-[40%] md:w-[28%] left-[0%] md:left-[2%] top-[0%]"
            >
              <motion.div style={{ x: mX1, y: mY1 }} className="w-full">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="w-full drop-shadow-xl"
                >
                  <img src="/images/projects/cineartery/1.png" alt="CineArtery Graphic 1" className="w-full h-auto object-contain" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute z-20 w-[40%] md:w-[28%] right-[0%] md:right-[2%] top-[0%]"
            >
              <motion.div style={{ x: mX2, y: mY2 }} className="w-full">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="w-full drop-shadow-xl"
                >
                  <img src="/images/projects/cineartery/5.png" alt="CineArtery Graphic 5" className="w-full h-auto object-contain" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Center Orb */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute z-30 w-[22%] md:w-[16%] top-[10%] md:top-[12%] left-[39%] md:left-[42%]"
            >
              <motion.div style={{ x: mX3, y: mY3 }} className="w-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <img src="/images/projects/cineartery/2.png" alt="CineArtery Graphic 2" className="w-full h-auto object-contain drop-shadow-xl" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Bottom Squiggle */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute z-20 w-[38%] md:w-[30%] bottom-[-5%] md:-bottom-[10%] left-[25%] md:left-[28%]"
            >
              <motion.div style={{ x: mX1, y: mY1 }} className="w-full">
                <motion.div
                  initial={{ opacity: 0, rotate: -20 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <img src="/images/projects/cineartery/3.png" alt="CineArtery Graphic 3" className="w-full h-auto object-contain drop-shadow-lg" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Bottom Ring */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute z-20 w-[26%] md:w-[18%] bottom-[5%] md:bottom-[0%] right-[22%] md:right-[28%]"
            >
              <motion.div style={{ x: mX2, y: mY2 }} className="w-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <img src="/images/projects/cineartery/4.png" alt="CineArtery Graphic 4" className="w-full h-auto object-contain drop-shadow-xl" />
                </motion.div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="relative w-full bg-[#111111] pb-24 md:pb-32 px-6 md:px-12 flex flex-col items-center z-20">

        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl lg:text-[40px] font-light text-[#808080] uppercase tracking-[0.1em] mb-2 md:mb-4"
          >
            CINEMATIC DIGITAL
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-[80px] font-black text-[#FAF6EC] uppercase tracking-tight leading-none"
          >
            EXPERIENCE
          </motion.h2>
        </div>

        {/* Product Image Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-5xl rounded-[32px] md:rounded-[40px] border border-[#3b82f6]/40 overflow-hidden relative shadow-[0_0_40px_rgba(59,130,246,0.1)] aspect-[4/3] md:aspect-video bg-white"
        >
          <iframe 
            src="https://www.cineartery.com/" 
            title="CineArtery Website" 
            className="w-full h-full absolute inset-0"
            style={{ border: 'none' }}
          />
        </motion.div>

      </section>

      {/* What Smrkonova Did Section */}
      <section className="relative w-full bg-[#111111] py-24 md:py-32 flex flex-col items-center overflow-hidden z-20">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-light text-white uppercase tracking-[0.2em] mb-16 md:mb-24 text-center">
          WHAT SMRKONOVA DID
        </h2>

        {/* Marquee Row 1 */}
        <div className="relative w-full flex overflow-hidden mb-4 md:mb-6">
          <motion.div
            className="flex gap-4 md:gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...marqueeItemsRow1, ...marqueeItemsRow1].map((item, i) => (
              <div key={i} className="relative group w-[280px] h-[220px] md:w-[400px] md:h-[320px] rounded-[16px] md:rounded-[24px] overflow-hidden cursor-pointer shrink-0">
                <img src={item.img} alt={item.bold} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#EAB308]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                  <span className="font-black text-3xl md:text-4xl tracking-tight uppercase leading-none">{item.bold}</span>
                  <span className="font-light text-2xl md:text-3xl uppercase tracking-widest leading-tight">{item.light}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Marquee Row 2 (Reverse) */}
        <div className="relative w-full flex overflow-hidden">
          <motion.div
            className="flex gap-4 md:gap-6 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            {[...marqueeItemsRow2, ...marqueeItemsRow2].map((item, i) => (
              <div key={i} className="relative group w-[280px] h-[220px] md:w-[400px] md:h-[320px] rounded-[16px] md:rounded-[24px] overflow-hidden cursor-pointer shrink-0">
                <img src={item.img} alt={item.bold} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#EAB308]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                  <span className="font-black text-3xl md:text-4xl tracking-tight uppercase leading-none">{item.bold}</span>
                  <span className="font-light text-2xl md:text-3xl uppercase tracking-widest leading-tight">{item.light}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </section>

    </main>
  );
}
