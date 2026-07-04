"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export default function NazrProjectPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  // Mouse Parallax for Collage
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const mX1 = useTransform(smoothX, [-0.5, 0.5], [20, -20]);
  const mY1 = useTransform(smoothY, [-0.5, 0.5], [20, -20]);

  const mX2 = useTransform(smoothX, [-0.5, 0.5], [-35, 35]);
  const mY2 = useTransform(smoothY, [-0.5, 0.5], [-35, 35]);

  const mX3 = useTransform(smoothX, [-0.5, 0.5], [45, -45]);
  const mY3 = useTransform(smoothY, [-0.5, 0.5], [45, -45]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth) - 0.5);
    mouseY.set((clientY / innerHeight) - 0.5);
  };

  // Text Reveal Scroll
  const textRef = useRef(null);
  const { scrollYProgress: textScroll } = useScroll({
    target: textRef,
    offset: ["start 85%", "center 50%"]
  });

  const c1 = useTransform(textScroll, [0, 0.25], ["#d1d5db", "#111111"]);
  const c2 = useTransform(textScroll, [0.25, 0.5], ["#d1d5db", "#111111"]);
  const c3 = useTransform(textScroll, [0.5, 0.75], ["#d1d5db", "#111111"]);
  const c4 = useTransform(textScroll, [0.75, 1], ["#d1d5db", "#111111"]);

  // Marquee Scroll
  const marqueeRef = useRef(null);
  const { scrollYProgress: marqueeScroll } = useScroll({
    target: marqueeRef,
    offset: ["start end", "end start"]
  });

  const smoothMarqueeScroll = useSpring(marqueeScroll, { stiffness: 60, damping: 20, mass: 1.5 });

  const marqX1 = useTransform(smoothMarqueeScroll, [0, 1], ["-10%", "-20%"]);
  const marqX2 = useTransform(smoothMarqueeScroll, [0, 1], ["-20%", "-10%"]);
  const marqX3 = useTransform(smoothMarqueeScroll, [0, 1], ["-10%", "-20%"]);

  // Timeline Scroll
  const timelineRef = useRef(null);
  const { scrollYProgress: timelineScroll } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const smoothTimelineScroll = useSpring(timelineScroll, { stiffness: 40, damping: 20, mass: 1 });
  
  const [activeNode, setActiveNode] = useState(0);

  useMotionValueEvent(smoothTimelineScroll, "change", (latest) => {
    if (latest < 0.38) setActiveNode(0);
    else if (latest < 0.56) setActiveNode(1);
    else if (latest < 0.74) setActiveNode(2);
    else if (latest < 0.92) setActiveNode(3);
    else setActiveNode(4);
  });

  return (
    <main className="relative min-h-screen flex flex-col bg-[#111111] overflow-hidden selection:bg-[#F80090]/20">
      {/* Page Entry Transition tailored to Nazr */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[60] origin-top bg-[#F80090]"
      />


      {/* Custom 3-Column Dark Section */}
      <section className="relative w-full bg-[#111111] text-white pt-12 md:pt-30 px-6 md:px-12 flex justify-center overflow-hidden z-20 min-h-[100vh] h-auto pb-24 md:pb-0">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Left Column Metadata (Top Aligned) */}
          <div className="lg:col-span-2 flex flex-col gap-12 justify-start pt-16">
            <div className="flex flex-col gap-2">
              <span className="text-[#a0a0a0] font-medium text-sm">UX/UI</span>
              <span className="text-[#606060] text-[10px] uppercase tracking-widest font-bold">WEBSITE & APP</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[#a0a0a0] font-medium text-sm">Category</span>
              <span className="text-[#606060] text-[10px] uppercase tracking-widest font-bold">WOMEN ECOSYSTEM</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[#a0a0a0] font-medium text-sm">Duration</span>
              <span className="text-[#606060] text-[10px] uppercase tracking-widest font-bold">4 MONTHS</span>
            </div>
          </div>

          {/* Center Image Container */}
          <div ref={containerRef} className="lg:col-span-7 w-full flex items-center justify-center">
            <motion.div
              style={{ y: parallaxY }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full aspect-[16/14] rounded-[40px] border border-[#3b82f6]/40 overflow-hidden relative shadow-[0_0_40px_rgba(59,130,246,0.1)] p-2"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/projects/nazr/banner.png" alt="Nazr Banner" className="w-full h-full object-contain" />
            </motion.div>
          </div>

          {/* Right Column Features (Bottom Aligned) */}
          <div className="lg:col-span-3 flex flex-col gap-10 justify-end pb-12">
            {[
              "Smart technology",
              "Instant alerts",
              "Live tracking",
              "Emergency network"
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-6 group cursor-pointer"
              >
                <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                  {/* Outer Rippling Ring */}
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                    className="absolute w-full h-full rounded-full border border-[#F80090]/50"
                  />
                  {/* Middle Ring */}
                  <div className="absolute w-8 h-8 md:w-9 md:h-9 rounded-full border-[1.5px] border-[#F80090] group-hover:scale-110 transition-transform duration-300" />
                  {/* Inner Dot */}
                  <div className="absolute w-3 h-3 md:w-3.5 md:h-3.5 bg-[#F80090] rounded-full group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-[#808080] text-sm font-medium group-hover:text-white transition-colors duration-300 whitespace-nowrap">{feature}</span>
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
            <img src="/images/projects/nazr/about.png" alt="Nazr Ecosystem" className="w-full max-w-[500px] object-contain drop-shadow-2xl" />
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
                MORE THAN <span className="font-light text-gray-300">PROTECTION.</span>
              </h2>
              <h3 className="text-lg md:text-xl lg:text-2xl text-[#a0a0a0] font-light uppercase tracking-wide leading-relaxed">
                ENGINEERING INDIA'S<br />WOMEN'S SAFETY ECOSYSTEM.
              </h3>
            </div>

            <p className="text-[#808080] text-base md:text-lg leading-relaxed max-w-xl font-light">
              Nazr wasn't built to sell a pepper spray.<br />
              It was built to create an ecosystem where technology, products, emergency response and digital experiences work together to protect women every day.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button suppressHydrationWarning className="px-8 py-4 bg-[#F80090] text-white rounded-[4px] font-medium text-sm hover:bg-[#d00078] transition-colors duration-300 shadow-[0_0_20px_rgba(248,0,144,0.2)]">
                Explore the Ecosystem
              </button>
              <button suppressHydrationWarning className="px-8 py-4 border border-[#F80090]/50 text-white rounded-[4px] font-medium text-sm flex items-center justify-center gap-4 hover:bg-[#F80090]/10 transition-colors duration-300">
                <div className="w-5 h-5 bg-[#F80090] flex items-center justify-center rounded-[2px]">
                  <span className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-white border-b-[4px] border-b-transparent ml-[2px]"></span>
                </div>
                Watch Product Demo
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
              <motion.span style={{ color: c1 }}>MOST SAFETY BRANDS</motion.span><br />
              <motion.span style={{ color: c2 }}>STOP AT PRODUCTS.</motion.span><br />
              <span className="text-[#F80090]">NAZR</span> <motion.span style={{ color: c3 }}>SET OUT TO BUILD</motion.span><br />
              <motion.span style={{ color: c4 }}>SOMETHING MUCH BIGGER.</motion.span>
            </h2>
          </div>

          <div className="relative w-full max-w-[900px] aspect-[4/3] md:aspect-[16/9] flex items-center justify-center mt-8 md:mt-12">

            {/* Center Main Image */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute z-10 w-[55%] md:w-[45%] h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <motion.div style={{ x: mX1, y: mY1 }} className="w-full h-full">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="w-full h-full rounded-[20px] overflow-hidden shadow-2xl"
                >
                  <img src="/images/projects/nazr/banner.png" alt="Center" className="w-full h-full object-cover" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Top Left Icon (Globe) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute z-20 top-0 left-[15%] w-16 h-16 md:w-24 md:h-24"
            >
              <motion.div style={{ x: mX2, y: mY2 }} className="w-full h-full">
                <motion.div
                  initial={{ opacity: 0, rotate: -45 }}
                  whileInView={{ opacity: 1, rotate: -12 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="w-full h-full"
                >
                  <img src="/images/projects/nazr/banner.png" alt="Globe" className="w-full h-full object-contain drop-shadow-lg" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Middle Left Image */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute z-20 top-[35%] left-[2%] md:left-[5%] w-[35%] md:w-[28%] aspect-[4/3]"
            >
              <motion.div style={{ x: mX3, y: mY3 }} className="w-full h-full">
                <motion.div
                  initial={{ opacity: 0, x: -50, rotate: -20 }}
                  whileInView={{ opacity: 1, x: 0, rotate: -6 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="w-full h-full rounded-[12px] overflow-hidden shadow-xl border-4 border-white/10"
                >
                  <img src="/images/projects/nazr/banner.png" alt="Left" className="w-full h-full object-cover" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Middle Right Image */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="absolute z-20 top-[25%] right-[2%] md:right-[8%] w-[35%] md:w-[28%] aspect-[4/3]"
            >
              <motion.div style={{ x: mX2, y: mY2 }} className="w-full h-full">
                <motion.div
                  initial={{ opacity: 0, x: 50, rotate: 20 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 6 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="w-full h-full rounded-[12px] overflow-hidden shadow-xl border-4 border-white/10"
                >
                  <img src="/images/projects/nazr/banner.png" alt="Right" className="w-full h-full object-cover" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Bottom Left Image */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute z-20 bottom-[5%] left-[25%] md:left-[30%] w-[30%] md:w-[22%] aspect-[4/3]"
            >
              <motion.div style={{ x: mX1, y: mY1 }} className="w-full h-full">
                <motion.div
                  initial={{ opacity: 0, rotate: -10 }}
                  whileInView={{ opacity: 1, rotate: 3 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="w-full h-full rounded-[12px] overflow-hidden shadow-xl border-4 border-white/10"
                >
                  <img src="/images/projects/nazr/banner.png" alt="Bottom" className="w-full h-full object-cover" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Bottom Right Icon (Face) */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute z-20 bottom-[10%] right-[20%] md:right-[25%] w-20 h-20 md:w-28 md:h-28"
            >
              <motion.div style={{ x: mX3, y: mY3 }} className="w-full h-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 12 }}
                  transition={{ duration: 0.5, delay: 0.9, type: "spring" }}
                  viewport={{ once: true }}
                  className="w-full h-full"
                >
                  <img src="/images/projects/nazr/banner.png" alt="Face" className="w-full h-full object-contain drop-shadow-xl" />
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
            Building an entire
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-[80px] font-black text-white uppercase tracking-tight leading-none"
          >
            Safety Ecosystem
          </motion.h2>
        </div>

        {/* Product Image Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-5xl rounded-[32px] md:rounded-[40px] border border-[#3b82f6]/40 overflow-hidden relative shadow-[0_0_40px_rgba(59,130,246,0.1)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/projects/nazr/product.png" alt="Nazr Product Ecosystem" className="w-full h-auto object-cover" />
        </motion.div>

      </section>

      {/* Marquee Section */}
      <section ref={marqueeRef} className="relative w-full h-[70vh] md:h-[95vh] bg-[#111111] overflow-hidden flex flex-col items-center justify-center">

        {/* Tilted Container */}
        <div className="absolute flex flex-col justify-center items-center w-[120%] -left-[10%]">

          {/* Top Pink Band */}
          <div className="w-full h-[120px] md:h-[204px] bg-[#F80090] z-10 flex items-center overflow-hidden" style={{ transform: 'rotate(-1.94deg)' }}>
            <motion.div
              style={{ x: marqX1 }}
              className="flex whitespace-nowrap items-center w-max"
            >
              {[...Array(12)].map((_, i) => (
                <div key={i} className="flex items-center shrink-0">
                  <span className="text-[100px] md:text-[180px] font-black text-[#111111] uppercase tracking-tighter leading-[0.8] mt-4 shrink-0">BURI NAZR</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/projects/nazr/owl.svg" alt="Owl" className="h-[70px] md:h-[140px] object-contain mx-8 md:mx-16 shrink-0" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Middle Blue Band */}
          <div className="w-full h-[120px] md:h-[204px] bg-[#3b82f6] z-20 flex items-center overflow-hidden relative mt-4 md:mt-8" style={{ transform: 'rotate(2.14deg)' }}>
            <motion.div
              style={{ x: marqX2 }}
              className="flex whitespace-nowrap items-center w-max"
            >
              {[...Array(12)].map((_, i) => (
                <div key={i} className="flex items-center shrink-0">
                  <span className="text-[100px] md:text-[180px] font-black text-[#111111] uppercase tracking-tighter leading-[0.8] mt-4 shrink-0">BURI NAZR</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/projects/nazr/owl.svg" alt="Owl" className="h-[70px] md:h-[140px] object-contain mx-8 md:mx-16 shrink-0" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Green Band */}
          <div className="w-full h-[120px] md:h-[204px] bg-[#49b57b] z-10 flex items-center overflow-hidden mt-4 md:mt-8" style={{ transform: 'rotate(-1.94deg)' }}>
            <motion.div
              style={{ x: marqX3 }}
              className="flex whitespace-nowrap items-center w-max"
            >
              {[...Array(12)].map((_, i) => (
                <div key={i} className="flex items-center shrink-0">
                  <span className="text-[100px] md:text-[180px] font-black text-[#111111] uppercase tracking-tighter leading-[0.8] mt-4 shrink-0">BURI NAZR</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/projects/nazr/owl.svg" alt="Owl" className="h-[70px] md:h-[140px] object-contain mx-8 md:mx-16 shrink-0" />
                </div>
              ))}
            </motion.div>
          </div>

        </div>

      </section>

      {/* What Smrkonova Did Section */}
      <section className="relative w-full bg-[#111111] py-24 md:py-32 flex flex-col items-center z-20">
        
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white text-4xl md:text-5xl lg:text-[64px] font-light tracking-wide mb-16 md:mb-24 text-center"
        >
          WHAT <span className="font-bold text-[#3b82f6]">SMRKONOVA</span> DID
        </motion.h2>

        {/* Image Marquees */}
        <div className="w-full flex flex-col gap-4 md:gap-6 mt-10 overflow-hidden">
          
          {/* Row 1 (Left to Right) */}
          <motion.div 
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap w-max gap-4 md:gap-6"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-4 md:gap-6 shrink-0">
                {/* Item 1 */}
                <div className="w-[300px] md:w-[450px] h-[300px] md:h-[450px] rounded-[24px] md:rounded-[32px] overflow-hidden relative group shrink-0">
                  <img src="/images/projects/nazr/banner.png" alt="Brand Strategy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-[#F80090]/80 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-95 group-hover:scale-100">
                    <h3 className="text-white text-center flex flex-col items-center">
                      <span className="font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none mb-1">BRAND</span>
                      <span className="font-light text-2xl md:text-3xl lg:text-4xl tracking-[0.15em] leading-none">STRATEGY</span>
                    </h3>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="w-[300px] md:w-[450px] h-[300px] md:h-[450px] rounded-[24px] md:rounded-[32px] overflow-hidden relative group shrink-0">
                  <img src="/images/projects/nazr/about.png" alt="Creative" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-[#F80090]/80 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-95 group-hover:scale-100">
                    <h3 className="text-white text-center flex flex-col items-center">
                      <span className="font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none mb-1">CREATIVE</span>
                      <span className="font-light text-2xl md:text-3xl lg:text-4xl tracking-[0.15em] leading-none">DIRECTION</span>
                    </h3>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="w-[300px] md:w-[450px] h-[300px] md:h-[450px] rounded-[24px] md:rounded-[32px] overflow-hidden relative group shrink-0">
                  <img src="/images/projects/nazr/product.png" alt="UI/UX" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-[#F80090]/80 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-95 group-hover:scale-100">
                    <h3 className="text-white text-center flex flex-col items-center">
                      <span className="font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none mb-1">UI/UX</span>
                      <span className="font-light text-2xl md:text-3xl lg:text-4xl tracking-[0.15em] leading-none">DESIGN</span>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Row 2 (Right to Left) */}
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap w-max gap-4 md:gap-6"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-4 md:gap-6 shrink-0">
                {/* Item 4 */}
                <div className="w-[300px] md:w-[450px] h-[300px] md:h-[450px] rounded-[24px] md:rounded-[32px] overflow-hidden relative group shrink-0">
                  <img src="/images/projects/nazr/banner.png" alt="Social" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-[#F80090]/80 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-95 group-hover:scale-100">
                    <h3 className="text-white text-center flex flex-col items-center">
                      <span className="font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none mb-1">SOCIAL</span>
                      <span className="font-light text-2xl md:text-3xl lg:text-4xl tracking-[0.15em] leading-none">MEDIA</span>
                    </h3>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="w-[300px] md:w-[450px] h-[300px] md:h-[450px] rounded-[24px] md:rounded-[32px] overflow-hidden relative group shrink-0">
                  <img src="/images/projects/nazr/about.png" alt="Content" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-[#F80090]/80 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-95 group-hover:scale-100">
                    <h3 className="text-white text-center flex flex-col items-center">
                      <span className="font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none mb-1">CONTENT</span>
                      <span className="font-light text-2xl md:text-3xl lg:text-4xl tracking-[0.15em] leading-none">CREATION</span>
                    </h3>
                  </div>
                </div>

                {/* Item 6 */}
                <div className="w-[300px] md:w-[450px] h-[300px] md:h-[450px] rounded-[24px] md:rounded-[32px] overflow-hidden relative group shrink-0">
                  <img src="/images/projects/nazr/product.png" alt="Web" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-[#F80090]/80 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-95 group-hover:scale-100">
                    <h3 className="text-white text-center flex flex-col items-center">
                      <span className="font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none mb-1">WEB</span>
                      <span className="font-light text-2xl md:text-3xl lg:text-4xl tracking-[0.15em] leading-none">DEVELOPMENT</span>
                    </h3>
                  </div>
                </div>

                {/* Item 7 */}
                <div className="w-[300px] md:w-[450px] h-[300px] md:h-[450px] rounded-[24px] md:rounded-[32px] overflow-hidden relative group shrink-0">
                  <img src="/images/projects/nazr/banner.png" alt="SEO" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-[#F80090]/80 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-95 group-hover:scale-100">
                    <h3 className="text-white text-center flex flex-col items-center">
                      <span className="font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none mb-1">SEO</span>
                      <span className="font-light text-2xl md:text-3xl lg:text-4xl tracking-[0.15em] leading-none">OPTIMIZATION</span>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

      </section>

      {/* Timeline Section */}
      <section className="relative w-full bg-[#111111] px-4 md:px-12 py-12 md:py-20 z-20 overflow-hidden">
        <div ref={timelineRef} className="relative w-full max-w-7xl mx-auto bg-[#FAF6F0] rounded-[48px] md:rounded-[64px] py-16 md:py-24 flex flex-col items-center shadow-2xl">
        
        {/* Section Title */}
        <div className="text-center mb-32 z-10">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-wide text-[#111111]">
            DESIGNING FOR<br/>
            <span className="font-black tracking-tighter">EMERGENCIES</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full max-w-[1200px] mx-auto px-6 mt-16">
          
          {/* Timeline Items */}
          {[
            { title: "TRIGGER", pos: "left" },
            { title: "CANCEL WINDOW", pos: "right" },
            { title: "BROADCAST FIRES", pos: "left" },
            { title: "GUARDIANS ALERTED", pos: "right" },
            { title: "TAKE ACTION", pos: "left" }
          ].map((item, index, arr) => {
            const isActive = activeNode >= index;
            const isCurrent = activeNode === index;
            const isLeft = item.pos === "left";
            
            const lineStart = index * 0.18 + 0.2;
            const lineEnd = lineStart + 0.18;
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const lineProgress = useTransform(smoothTimelineScroll, [lineStart, lineEnd], [0, 1]);
            
            return (
              <div key={index} className="relative w-full flex justify-between items-center mb-16 md:mb-20 last:mb-0">
                
                {/* Connecting Line to Next Node */}
                {index < arr.length - 1 && (
                  <svg 
                    className="absolute left-0 top-[50%] w-full z-0 pointer-events-none" 
                    style={{ height: 'calc(100% + 4rem)' }} 
                    preserveAspectRatio="none" 
                    viewBox="0 0 100 100"
                  >
                    {/* Dotted background line */}
                    <path 
                      d={`M ${isLeft ? 55 : 45} 0 L ${isLeft ? 55 : 45} 40 L ${!isLeft ? 55 : 45} 60 L ${!isLeft ? 55 : 45} 100`} 
                      stroke="#9ca3af" 
                      strokeWidth="2" 
                      strokeDasharray="4 4" 
                      fill="none" 
                      vectorEffect="non-scaling-stroke"
                    />
                    {/* Solid active line */}
                    <motion.path 
                      d={`M ${isLeft ? 55 : 45} 0 L ${isLeft ? 55 : 45} 40 L ${!isLeft ? 55 : 45} 60 L ${!isLeft ? 55 : 45} 100`} 
                      stroke="#F80090" 
                      strokeWidth="4" 
                      fill="none" 
                      vectorEffect="non-scaling-stroke"
                      style={{ pathLength: lineProgress }}
                    />
                  </svg>
                )}

                {/* Left Area */}
                <div className={`w-1/2 pr-3 md:pr-16 flex ${isLeft ? 'justify-end' : 'justify-end opacity-0 pointer-events-none'}`}>
                  {isLeft && (
                    <div className="flex flex-col md:flex-row items-end md:items-center gap-2 md:gap-10 w-max text-right md:text-left">
                      <img src="/images/projects/nazr/mobile.png" alt="Mobile" className="w-[80px] sm:w-[100px] md:w-[220px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)] rounded-[12px] md:rounded-[32px]" />
                      <div className="max-w-[120px] sm:max-w-[160px] md:max-w-[280px]">
                        <h3 className="text-[11px] sm:text-[14px] md:text-3xl font-black uppercase mb-1 md:mb-3 text-[#111111] tracking-tight leading-tight">{item.title}</h3>
                        <p className="text-[8px] sm:text-[10px] md:text-sm font-medium text-gray-700 leading-tight md:leading-relaxed">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Center Node */}
                <div className={`absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-all duration-700 ${isLeft ? 'left-[55%] -translate-x-1/2' : 'left-[45%] -translate-x-1/2'}`}>
                  <div className="relative flex items-center justify-center">
                    {/* Active Concentric Rings (Only on Current Node) */}
                    <div className={`absolute w-[60px] h-[60px] md:w-[120px] md:h-[120px] border-[1px] border-[#F80090]/60 rounded-full transition-opacity duration-500 ${isCurrent ? 'opacity-100' : 'opacity-0'}`} />
                    <div className={`absolute w-[80px] h-[80px] md:w-[150px] md:h-[150px] border-[1px] border-[#F80090]/30 rounded-full transition-opacity duration-500 ${isCurrent ? 'opacity-100' : 'opacity-0'}`} />
                    <div className={`absolute w-[100px] h-[100px] md:w-[180px] md:h-[180px] border-[1px] border-[#F80090]/10 rounded-full transition-opacity duration-500 ${isCurrent ? 'opacity-100' : 'opacity-0'}`} />
                    
                    {/* Main Circle */}
                    <div className={`w-10 h-10 md:w-20 md:h-20 rounded-full flex flex-col items-center justify-center text-white text-[8px] md:text-sm font-black shadow-xl transition-all duration-500 z-10 ${isActive ? 'bg-[#F80090] scale-110 shadow-[0_0_20px_rgba(248,0,144,0.5)]' : 'bg-[#111111] scale-100'}`}>
                      <span className="leading-none text-center mb-[1px]">SOS</span>
                      <span className="text-[6px] md:text-[10px] leading-none text-center">TAP</span>
                    </div>
                  </div>
                </div>

                {/* Right Area */}
                <div className={`w-1/2 pl-3 md:pl-16 flex ${!isLeft ? 'justify-start' : 'justify-start opacity-0 pointer-events-none'}`}>
                  {!isLeft && (
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-10 w-max text-left">
                      <img src="/images/projects/nazr/mobile.png" alt="Mobile" className="w-[80px] sm:w-[100px] md:w-[220px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)] rounded-[12px] md:rounded-[32px]" />
                      <div className="max-w-[120px] sm:max-w-[160px] md:max-w-[280px]">
                        <h3 className="text-[11px] sm:text-[14px] md:text-3xl font-black uppercase mb-1 md:mb-3 text-[#111111] tracking-tight leading-tight">{item.title}</h3>
                        <p className="text-[8px] sm:text-[10px] md:text-sm font-medium text-gray-700 leading-tight md:leading-relaxed">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
        </div>
      </section>

      {/* Next Project Footer (Hardcoded to Neela) */}
      <section className="relative w-full min-h-[50vh] flex flex-col items-center justify-center overflow-hidden cursor-pointer group bg-[#FFFAEE]">
        <Link href="/projects/neela" className="absolute inset-0 z-10" />

        <span className="relative z-10 text-black/40 text-xs md:text-sm tracking-[0.3em] font-bold uppercase mb-4 md:mb-8 group-hover:-translate-y-2 transition-transform duration-500">
          Next Project
        </span>

        <h2 className="relative z-10 text-5xl md:text-8xl lg:text-[10vw] font-black text-[#212121] uppercase tracking-tighter group-hover:scale-105 transition-transform duration-700 ease-out text-center">
          Neela
        </h2>

        {/* Hover image preview overlay */}
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/projects/neela.png" alt="" className="object-cover w-full h-full scale-110 group-hover:scale-100 transition-transform duration-1000 opacity-20" />
        </div>
      </section>
    </main>
  );
}
