"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export default function ReadingElfProjectPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const marqueeRef = useRef(null);
  const { scrollYProgress: marqueeScroll } = useScroll({
    target: marqueeRef,
    offset: ["start end", "end start"]
  });
  const smoothMarqueeScroll = useSpring(marqueeScroll, { stiffness: 60, damping: 20, mass: 1.5 });
  const marqX1 = useTransform(smoothMarqueeScroll, [0, 1], ["0%", "-50%"]);
  const marqX2 = useTransform(smoothMarqueeScroll, [0, 1], ["-50%", "0%"]);

  return (
    <main className="relative min-h-screen flex flex-col bg-[#FDF5E6] overflow-hidden selection:bg-[#3B82F6]/20">
      {/* Page Entry Transition tailored to Nazr */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[60] origin-top bg-[#3B82F6]"
      />


      {/* Custom 3-Column Dark Section */}
      <section className="relative w-full bg-[#FDF5E6] text-[#333333] pt-12 md:pt-30 px-6 md:px-12 flex justify-center overflow-hidden z-20 min-h-[100vh] h-auto pb-24 md:pb-0">

        {/* Full Page Floating Clouds */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <motion.img animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} src="/images/projects/reading-elf/cloud-1.png" alt="" className="absolute top-[5%] left-[30%] w-32 md:w-56 opacity-80" />
          <motion.img animate={{ y: [15, -15, 15], x: [10, -10, 10] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} src="/images/projects/reading-elf/cloud-2.png" alt="" className="absolute top-[10%] right-[10%] w-40 md:w-64 opacity-90" />
          <motion.img animate={{ y: [-20, 20, -20], x: [-5, 5, -5] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} src="/images/projects/reading-elf/cloud-1.png" alt="" className="absolute top-[40%] -left-[5%] w-48 md:w-72 opacity-70" />
          <motion.img animate={{ y: [20, -20, 20], x: [5, -5, 5] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} src="/images/projects/reading-elf/cloud-2.png" alt="" className="absolute top-[50%] right-[0%] w-36 md:w-60 opacity-80" />
          <motion.img animate={{ y: [-10, 10, -10], x: [-15, 15, -15] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} src="/images/projects/reading-elf/cloud-1.png" alt="" className="absolute bottom-[10%] left-[15%] w-32 md:w-56 opacity-90" />
          <motion.img animate={{ y: [10, -10, 10], x: [15, -15, 15] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} src="/images/projects/reading-elf/cloud-2.png" alt="" className="absolute bottom-[5%] right-[25%] w-40 md:w-64 opacity-70" />
        </div>

        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">

          {/* Left Column Metadata (Top Aligned) */}
          <div className="lg:col-span-2 flex flex-col gap-12 justify-start pt-16">
            <div className="flex flex-col gap-2">
              <span className="text-[#666666] font-medium text-sm">UX/UI</span>
              <span className="text-[#555555] text-[10px] uppercase tracking-widest font-bold">WEBSITE & APP</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[#666666] font-medium text-sm">Category</span>
              <span className="text-[#555555] text-[10px] uppercase tracking-widest font-bold">WOMEN ECOSYSTEM</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[#666666] font-medium text-sm">Duration</span>
              <span className="text-[#555555] text-[10px] uppercase tracking-widest font-bold">4 MONTHS</span>
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
              <img src="/images/projects/reading-elf/banner.png" alt="Reading Elf Banner" className="w-full h-full object-contain relative z-10" />

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
                    className="absolute w-full h-full rounded-full border border-[#3B82F6]/50"
                  />
                  {/* Middle Ring */}
                  <div className="absolute w-8 h-8 md:w-9 md:h-9 rounded-full border-[1.5px] border-[#3B82F6] group-hover:scale-110 transition-transform duration-300" />
                  {/* Inner Dot */}
                  <div className="absolute w-3 h-3 md:w-3.5 md:h-3.5 bg-[#3B82F6] rounded-full group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-[#666666] text-sm font-medium group-hover:text-[#333333] transition-colors duration-300 whitespace-nowrap">{feature}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Every Great Story Section */}
      <section className="relative w-full bg-[#FDF5E6] flex flex-col items-center justify-center px-6 md:px-12 z-20 pt-24">

        {/* Headings */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-12 z-10">
          <h2 className="text-4xl md:text-6xl font-black text-[#DD6B4D] uppercase tracking-wide">
            EVERY GREAT STORY
          </h2>
          <h3 className="text-3xl md:text-5xl font-light text-[#DD6B4D] uppercase mt-2 md:mt-4 tracking-wide">
            BEGINS WITH ONE IDEA
          </h3>
        </div>

        {/* Book Image */}
        <div className="w-full max-w-3xl mx-auto flex justify-center items-center relative z-10">
          <img
            src="/images/projects/reading-elf/book.png"
            alt="Magical Open Book"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Description Text */}
        <div className="max-w-2xl mx-auto text-center mt-8 md:mt-12 mb-10 z-10">
          <p className="text-[#888888] text-xs md:text-sm leading-[1.8] font-medium">
            Reading Elf is more than a bookstore—it's a magical reading experience where<br className="hidden md:block" />
            stories spark imagination and every child discovers the joy of books. We<br className="hidden md:block" />
            partnered with Reading Elf to design a complete digital ecosystem that inspires<br className="hidden md:block" />
            families, builds trust, and supports long-term growth.
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center pb-24 md:pb-32 z-10">
          <button suppressHydrationWarning className="px-10 md:px-12 py-3 md:py-4 bg-[#FACC15] text-[#333333] border-[3px] border-[#DD6B4D] rounded-[12px] font-normal text-lg md:text-xl hover:bg-[#FDE047] transition-all hover:scale-105 shadow-sm">
            Explore The Story
          </button>
        </div>

      </section>

      {/* Digital Growth Strategy Section */}
      <section ref={marqueeRef} className="relative w-full bg-[#FDF5E6] px-4 md:px-12 py-12 md:py-24 z-20">
        <div className="w-full max-w-7xl mx-auto bg-[#F6DECA] rounded-[40px] md:rounded-[60px] flex flex-col items-center justify-center py-20 md:py-28 overflow-hidden relative shadow-sm">
          
          {/* Title */}
          <div className="flex flex-col items-center text-center mb-16 z-10 relative">
            <div className="absolute -top-12 -left-12 opacity-80 pointer-events-none w-32 h-32">
              <img src="/images/projects/reading-elf/book.png" alt="" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-3xl md:text-5xl font-light text-[#DD6B4D] uppercase tracking-wide">
              BUILDING A
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-[#DD6B4D] uppercase mt-1 md:mt-2 tracking-wide">
              DIGITAL GROWTH<br/>STRATEGY
            </h3>
          </div>

          {/* Marquee Rows */}
          <div className="w-full flex flex-col gap-6 md:gap-8 overflow-visible">
            {/* Top Row - scrolls left */}
            <motion.div 
              animate={{ x: ["0%", "-50%"] }} 
              transition={{ repeat: Infinity, ease: "linear", duration: 35 }} 
              className="flex whitespace-nowrap w-max"
            >
              {[...Array(12)].map((_, i) => (
                <div key={`top-${i}`} className="w-[280px] h-[200px] md:w-[400px] md:h-[280px] mr-6 md:mr-8 rounded-[24px] overflow-hidden shrink-0 bg-[#E8DCCB] shadow-sm relative group cursor-pointer">
                  <img src="/images/projects/reading-elf/banner.png" alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#0076CE]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <span className="text-white text-2xl md:text-3xl font-black uppercase tracking-wider">WEBSITE</span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Bottom Row - scrolls right */}
            <motion.div 
              animate={{ x: ["-50%", "0%"] }} 
              transition={{ repeat: Infinity, ease: "linear", duration: 35 }} 
              className="flex whitespace-nowrap w-max mt-6 md:mt-8"
            >
              {[...Array(12)].map((_, i) => (
                <div key={`bottom-${i}`} className="w-[280px] h-[200px] md:w-[400px] md:h-[280px] mr-6 md:mr-8 rounded-[24px] overflow-hidden shrink-0 bg-[#D4C3AC] shadow-sm relative group cursor-pointer">
                  <img src="/images/projects/reading-elf/book.png" alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#0076CE]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <span className="text-white text-2xl md:text-3xl font-black uppercase tracking-wider">WEBSITE</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Description Text */}
          <div className="max-w-3xl mx-auto text-center mt-16 md:mt-24 px-6 z-10">
            <p className="text-[#888888] text-sm md:text-base leading-relaxed font-medium">
              Every illustration, animation, and interaction was designed to reflect<br className="hidden md:block"/>
              the magic children experience when opening a book. Our visual<br className="hidden md:block"/>
              language transformed digital experiences into playful moments that<br className="hidden md:block"/>
              feel welcoming, memorable, and full of imagination.
            </p>
          </div>

        </div>
      </section>

      {/* Bringing the Story Online Section */}
      <section className="relative w-full bg-[#FDF5E6] flex flex-col items-center justify-center py-24 md:py-32 px-6 md:px-12 z-20">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16 z-10 relative">
          <h2 className="text-3xl md:text-5xl font-light text-[#DD6B4D] uppercase tracking-wide">
            BRINGING THE
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-[#DD6B4D] uppercase mt-1 md:mt-2 tracking-wide">
            STORY ONLINE
          </h3>
        </div>

        {/* Website Embed */}
        <div className="w-full max-w-6xl mx-auto rounded-[24px] md:rounded-[40px] overflow-hidden shadow-2xl border border-gray-200/50 bg-white aspect-[4/3] md:aspect-video relative">
          <iframe 
            src="https://thereadingelf.in/" 
            title="Reading Elf Website" 
            className="w-full h-full absolute inset-0"
            style={{ border: 'none' }}
          />
        </div>

      </section>

      {/* Every Great Brand Section */}
      <section className="relative w-full bg-[#DD6B4D] flex flex-col items-center justify-center py-24 md:py-32 px-6 md:px-12 z-20 mt-12 md:mt-24">
        
        {/* Floating Logo Badge */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full border-[6px] border-[#FDF5E6] bg-white flex items-center justify-center overflow-hidden shadow-sm z-30">
          {/* We're using book.png as a placeholder for the logo since it has the mushroom house */}
          <img 
            src="/images/projects/reading-elf/book.png" 
            alt="Reading Elf Logo" 
            className="w-full h-full object-cover scale-[1.3] -translate-y-2" 
          />
        </div>

        {/* Text Content */}
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-6 md:gap-8 mt-4 md:mt-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-wide leading-tight">
            EVERY GREAT BRAND<br/>BEGINS WITH A STORY.
          </h2>
          <p className="text-white/90 text-xs md:text-sm lg:text-base tracking-[0.15em] font-medium uppercase leading-loose max-w-2xl mx-auto">
            LET'S BUILD YOURS WITH STRATEGY,<br className="hidden md:block"/>
            CREATIVITY, AND EXPERIENCES THAT<br className="hidden md:block"/>
            PEOPLE REMEMBER.
          </p>
        </div>

      </section>

    </main>
  );
}