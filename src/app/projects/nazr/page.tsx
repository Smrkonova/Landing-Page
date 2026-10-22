"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import DisplayScaler from '@/components/DisplayScaler';

export default function NazrProjectPage() {
  const alreadyExistedRef = useRef<HTMLDivElement>(null);
  const isAlreadyExistedInView = useInView(alreadyExistedRef, { once: true, amount: 0.2 });

  const protectSectionRef = useRef<HTMLDivElement>(null);
  const isProtectInView = useInView(protectSectionRef, { once: true, amount: 0.2 });
  return (
    <main className="min-h-screen bg-[#111111] text-white selection:bg-[#F80090]/20 flex flex-col font-sans">
      {/* Hero Section */}
      <section 
        className="relative w-full pt-24 pb-16 px-5 sm:px-6 md:px-12 flex justify-center items-start lg:items-center overflow-hidden min-h-screen lg:h-[calc(100vh/var(--desktop-scale,1))]"
      >
        {/* Mobile View (< lg) */}
        <div className="block lg:hidden w-full max-w-[420px] mx-auto">
          {/* Header */}
          <div className="mb-6 text-left">
            <p className="text-[11px] text-gray-500 uppercase tracking-widest mb-1.5 font-normal">CASE STUDY 1</p>
            <h2 className="text-base font-bold uppercase tracking-wider text-gray-100">NAZR</h2>
            <p className="text-xs text-gray-400 font-normal">Women safety Ecosystem</p>
          </div>

          {/* Banner Card */}
          <div className="w-full aspect-[16/10] min-h-[220px] relative rounded-2xl overflow-hidden shadow-2xl bg-[#0a0a0a] flex flex-col justify-end mb-6">
            <img
              src="/images/projects/nazr/banner.png"
              alt="Nazr Banner"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

            <div className="relative z-10 w-full flex justify-between items-end gap-3 p-4">
              {/* Left Headline */}
              <h1 className="w-[58%] text-[clamp(1.1rem,4.5vw,1.35rem)] font-black text-white uppercase leading-[0.95] tracking-tight">
                IT IS A LONG<br />ESTABLISHED FACT<br />THAT A READER
              </h1>

              {/* Right Text & Button */}
              <div className="w-[42%] flex flex-col items-start gap-2">
                <p className="text-[clamp(9px,2.4vw,10.5px)] font-semibold text-white leading-tight">
                  It is a long established<br />
                  fact that a reader will<br />
                  be distracted
                </p>
                <button className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-100 transition-colors text-black px-2.5 py-1.5 rounded-md text-[9.5px] font-bold whitespace-nowrap shadow-sm">
                  <img src="/images/projects/nazr/owl.svg" alt="Owl Icon" className="w-3.5 h-3.5 object-contain" />
                  Join Ecosystem
                </button>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full border-t border-[#222222] my-6" />

          {/* Metadata: Industry & Duration */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div>
              <p className="text-xs text-gray-400 font-normal mb-2.5">Industry</p>
              <div className="inline-flex px-4 py-2.5 bg-[#222222] text-xs font-semibold rounded-lg text-gray-300">
                Women safety
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-400 font-normal mb-2.5">Duration</p>
              <div className="inline-flex px-4 py-2.5 bg-[#222222] text-xs font-semibold rounded-lg text-gray-300">
                Ongoing
              </div>
            </div>
          </div>

          {/* Platforms */}
          <div className="mb-8">
            <p className="text-xs text-gray-400 font-normal mb-2.5">Platforms</p>
            <div className="flex flex-wrap items-center gap-2">
              {['Website', 'Shopify', 'Flutter', 'Backend'].map((platform, idx) => (
                <span
                  key={idx}
                  className="inline-flex px-3.5 py-2.5 bg-[#222222] text-xs font-semibold rounded-lg text-gray-300"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>

          {/* Services List with Bullets */}
          <div className="flex flex-col space-y-4 text-sm text-gray-400 font-normal">
            {['Strategy', 'UX/UI', 'Development', 'Brand'].map((service, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View (>= lg) */}
        <div className="hidden lg:grid w-full max-w-[1440px] grid-cols-[1fr_3fr_1fr] gap-8 xl:gap-12 h-full max-h-[850px] items-center">

          {/* Left Column - Metadata */}
          <div className="flex flex-col gap-6 lg:gap-10 pt-2 lg:pt-4 xl:pt-12">
            <div>
              <p className="text-[clamp(10px,0.8vw+2px,12px)] text-gray-500 uppercase tracking-widest mb-2 lg:mb-4">CASE STUDY 1</p>
              <h2 className="text-[clamp(13px,0.8vw+3px,16px)] font-bold uppercase tracking-wide text-gray-200">NAZR</h2>
              <p className="text-[clamp(11px,0.6vw+4px,13px)] text-gray-400">Women safety Ecosystem</p>
            </div>

            <div className="flex flex-col gap-2 lg:gap-3">
              <p className="text-[clamp(10px,0.8vw+2px,12px)] text-gray-500 uppercase tracking-widest">Industry</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-[#222] text-[clamp(10px,0.6vw+4px,12px)] font-semibold rounded-md text-gray-300">Women safety</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 lg:gap-3">
              <p className="text-[clamp(10px,0.8vw+2px,12px)] text-gray-500 uppercase tracking-widest">Duration</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-[#222] text-[clamp(10px,0.6vw+4px,12px)] font-semibold rounded-md text-gray-300">Ongoing</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 lg:gap-3">
              <p className="text-[clamp(10px,0.8vw+2px,12px)] text-gray-500 uppercase tracking-widest">Platforms</p>
              <div className="flex flex-col items-start gap-2">
                <span className="px-3 py-1.5 bg-[#222] text-[clamp(10px,0.6vw+4px,12px)] font-semibold rounded-md text-gray-300">Website</span>
                <span className="px-3 py-1.5 bg-[#222] text-[clamp(10px,0.6vw+4px,12px)] font-semibold rounded-md text-gray-300">Shopify</span>
                <span className="px-3 py-1.5 bg-[#222] text-[clamp(10px,0.6vw+4px,12px)] font-semibold rounded-md text-gray-300">Flutter</span>
                <span className="px-3 py-1.5 bg-[#222] text-[clamp(10px,0.6vw+4px,12px)] font-semibold rounded-md text-gray-300">Backend</span>
              </div>
            </div>
          </div>

          {/* Center Column - Banner */}
          <div className="w-full min-h-[380px] sm:min-h-[440px] lg:max-h-[580px] aspect-[904/587] relative rounded-[1.5rem] lg:rounded-[2rem] border-[1.5px] border-[#3b82f6]/40 overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.15)] flex flex-col justify-end">
            <img
              src="/images/projects/nazr/banner.png"
              alt="Nazr Banner"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>

            <div className="relative z-10 w-full flex flex-row justify-between items-end gap-6 p-6 sm:p-8 md:p-12 xl:p-16">
              {/* Left Text */}
              <h1 className="w-[55%] text-[clamp(1.75rem,4vw+0.5rem,4rem)] font-black text-white uppercase leading-[0.95] tracking-tighter">
                IT IS A LONG<br />ESTABLISHED FACT<br />THAT A READER
              </h1>

              {/* Right Text & Button */}
              <div className="w-[40%] flex flex-col items-start gap-4 sm:gap-6">
                <p className="text-[clamp(1rem,1.3vw+0.4rem,1.5rem)] font-semibold text-white leading-tight">
                  It is a long established<br />
                  fact that a reader will<br />
                  be distracted
                </p>
                <button className="flex items-center gap-2 bg-white hover:bg-gray-200 transition-colors text-black px-5 py-2.5 rounded-lg text-[clamp(11px,0.6vw+4px,13px)] font-semibold">
                  <img src="/images/projects/nazr/owl.svg" alt="Owl Icon" className="w-5 h-5 object-contain" />
                  Join Ecosystem
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Services */}
          <div className="flex flex-col justify-end pb-2 lg:pb-8 xl:pb-16 pl-0 lg:pl-12 gap-3 lg:gap-4">
            <ul className="flex flex-col gap-3 lg:gap-4 text-[clamp(11px,0.6vw+4px,13px)] tracking-widest text-gray-500 font-medium uppercase">
              <li className="hover:text-white transition-colors cursor-default">Strategy</li>
              <li className="hover:text-white transition-colors cursor-default">UX/UI</li>
              <li className="hover:text-white transition-colors cursor-default">Development</li>
              <li className="hover:text-white transition-colors cursor-default">Brand</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Already Existed Section */}
      <section 
        ref={alreadyExistedRef}
        className="relative w-full flex justify-center items-center overflow-hidden min-h-screen md:h-[calc(100vh/var(--desktop-scale,1))] py-16 md:py-0"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/projects/nazr/eyes.png"
            alt="Eyes background"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1440px] px-3 sm:px-6 md:px-12 lg:px-20 py-12 h-full flex items-center justify-between">

          {/* Left Column */}
          <div className="flex flex-col gap-8 sm:gap-16 md:gap-24 text-right w-[47%] sm:w-[42%] md:w-[35%] lg:w-[30%]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.6, y: 15 }}
              animate={isAlreadyExistedInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.6, y: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 22, delay: 0.1 }}
              className="flex flex-col gap-1 origin-right"
            >
              <span className="text-[clamp(9px,0.6vw+4px,13px)] font-semibold text-gray-300">Pepper sprays</span>
              <span className="text-[clamp(0.85rem,2vw+0.3rem,1.875rem)] font-bold uppercase tracking-wide text-pink-200 drop-shadow-lg leading-tight">ALREADY EXISTED</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.6, y: 15 }}
              animate={isAlreadyExistedInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.6, y: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 22, delay: 1.1 }}
              className="flex flex-col gap-1 origin-right"
            >
              <span className="text-[clamp(9px,0.6vw+4px,13px)] font-semibold text-gray-300">Emergency helplines</span>
              <span className="text-[clamp(0.85rem,2vw+0.3rem,1.875rem)] font-bold uppercase tracking-wide text-pink-200 drop-shadow-lg leading-tight">ALREADY EXISTED</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.6, y: 15 }}
              animate={isAlreadyExistedInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.6, y: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 22, delay: 2.1 }}
              className="flex flex-col gap-1 origin-right"
            >
              <span className="text-[clamp(9px,0.6vw+4px,13px)] font-semibold text-gray-300">Safety apps</span>
              <span className="text-[clamp(0.85rem,2vw+0.3rem,1.875rem)] font-bold uppercase tracking-wide text-pink-200 drop-shadow-lg leading-tight">ALREADY EXISTED</span>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 sm:gap-16 md:gap-24 text-left w-[47%] sm:w-[42%] md:w-[35%] lg:w-[30%]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.6, y: 15 }}
              animate={isAlreadyExistedInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.6, y: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 22, delay: 0.6 }}
              className="flex flex-col gap-1 origin-left"
            >
              <span className="text-[clamp(9px,0.6vw+4px,13px)] font-semibold text-gray-300">Self-defence classes</span>
              <span className="text-[clamp(0.85rem,2vw+0.3rem,1.875rem)] font-bold uppercase tracking-wide text-pink-100 lg:text-pink-200 drop-shadow-lg leading-tight">ALREADY EXISTED</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.6, y: 15 }}
              animate={isAlreadyExistedInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.6, y: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 22, delay: 1.6 }}
              className="flex flex-col gap-1 origin-left"
            >
              <span className="text-[clamp(9px,0.6vw+4px,13px)] font-semibold text-gray-300">CCTV</span>
              <span className="text-[clamp(0.85rem,2vw+0.3rem,1.875rem)] font-bold uppercase tracking-wide text-pink-100 lg:text-pink-200 drop-shadow-lg leading-tight">ALREADY EXISTED</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.6, y: 15 }}
              animate={isAlreadyExistedInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.6, y: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 22, delay: 2.6 }}
              className="flex flex-col gap-1 origin-left"
            >
              <span className="text-[clamp(9px,0.6vw+4px,13px)] font-semibold text-gray-300">Laws</span>
              <span className="text-[clamp(0.85rem,2vw+0.3rem,1.875rem)] font-bold uppercase tracking-wide text-pink-100 lg:text-pink-200 drop-shadow-lg leading-tight">ALREADY EXISTED</span>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Stay Quiet Marquee Section */}
      <section className="relative w-full h-[40vh] min-h-[300px] bg-[#111111] flex flex-col items-center justify-center overflow-hidden">
        <style>{`
          @keyframes marquee-left-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          @keyframes marquee-right-left {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-lr {
            animation: marquee-left-right 25s linear infinite;
          }
          .animate-marquee-rl {
            animation: marquee-right-left 25s linear infinite;
          }
        `}</style>

        {/* Container for angled strips */}
        <div className="absolute w-[110%] md:w-[120%] flex flex-col justify-center items-center">

          {/* First Strip: Left to Right */}
          <div className="w-full bg-[#1a1a1a] py-4 md:py-5 flex overflow-hidden z-10 shadow-2xl" style={{ transform: 'rotate(4deg)' }}>
            <div className="flex w-max animate-marquee-lr">
              {[1, 2].map((groupIndex) => (
                <div key={groupIndex} className="flex shrink-0 items-center gap-4 md:gap-8 px-2 md:px-4">
                  {[...Array(6)].map((_, i) => (
                    <React.Fragment key={i}>
                      <span className="text-white font-bold tracking-widest uppercase text-[clamp(1.25rem,2.5vw+0.5rem,2.25rem)] whitespace-nowrap shrink-0">STAY QUIET</span>
                      <img src="/images/projects/nazr/quit.png" alt="Quiet" className="h-12 md:h-16 object-contain shrink-0" />
                      <span className="text-gray-500 font-light tracking-widest uppercase text-[clamp(1.25rem,2.5vw+0.5rem,2.25rem)] whitespace-nowrap shrink-0">STAY QUIET</span>
                      <img src="/images/projects/nazr/quit.png" alt="Quiet" className="h-12 md:h-16 object-contain shrink-0" />
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Second Strip: Right to Left */}
          <div className="w-full bg-[#1a1a1a] py-4 md:py-5 flex overflow-hidden z-0 -mt-16 md:-mt-24 shadow-xl" style={{ transform: 'rotate(-4deg)' }}>
            <div className="flex w-max animate-marquee-rl">
              {[1, 2].map((groupIndex) => (
                <div key={groupIndex} className="flex shrink-0 items-center gap-4 md:gap-8 px-2 md:px-4">
                  {[...Array(6)].map((_, i) => (
                    <React.Fragment key={i}>
                      <span className="text-white font-bold tracking-widest uppercase text-[clamp(1.25rem,2.5vw+0.5rem,2.25rem)] whitespace-nowrap shrink-0">STAY QUIET</span>
                      <img src="/images/projects/nazr/quit.png" alt="Quiet" className="h-12 md:h-16 object-contain shrink-0" />
                      <span className="text-gray-500 font-light tracking-widest uppercase text-[clamp(1.25rem,2.5vw+0.5rem,2.25rem)] whitespace-nowrap shrink-0">STAY QUIET</span>
                      <img src="/images/projects/nazr/quit.png" alt="Quiet" className="h-12 md:h-16 object-contain shrink-0" />
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* The Problem Section */}
      <section className="relative w-full min-h-[80vh] bg-[#111111] flex justify-center items-center py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Paper Images */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[550px] xl:max-w-[700px] aspect-[4/3] mt-8 lg:mt-0">
              {/* Working Women (Top Left) */}
              <img
                src="/images/projects/nazr/paper/working-women.png"
                alt="Working women article"
                className="absolute top-[0%] left-[0%] w-[42%] object-contain drop-shadow-xl z-10 hover:scale-105 hover:z-40 transition-transform duration-300"
              />
              {/* Hyderabad Techie (Top Right) */}
              <img
                src="/images/projects/nazr/paper/hyderabad-techie.png"
                alt="Hyderabad techie article"
                className="absolute top-[5%] right-[5%] w-[55%] object-contain drop-shadow-xl z-20 hover:scale-105 hover:z-40 transition-transform duration-300"
              />
              {/* Two Minor (Bottom Left) */}
              <img
                src="/images/projects/nazr/paper/two-minor.png"
                alt="Two minor article"
                className="absolute bottom-[10%] left-[5%] w-[42%] object-contain drop-shadow-xl z-20 hover:scale-105 hover:z-40 transition-transform duration-300"
              />
              {/* Working Women Duplicate (Bottom Right) */}
              <img
                src="/images/projects/nazr/paper/working-women.png"
                alt="Working women article duplicate"
                className="absolute bottom-[0%] right-[10%] w-[35%] object-contain drop-shadow-xl z-10 hover:scale-105 transition-transform duration-300 opacity-95"
              />
              {/* Women Stabbed (Center / Front) */}
              <img
                src="/images/projects/nazr/paper/women-stabbed.png"
                alt="Women stabbed article"
                className="absolute top-[30%] left-[18%] w-[65%] object-contain drop-shadow-2xl z-30 hover:scale-105 hover:z-40 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="w-full flex flex-col items-start text-left max-w-[550px]">
            <h2 className="text-[clamp(1.75rem,2.5vw+0.5rem,2.5rem)] font-light text-gray-200 tracking-[0.15em] uppercase leading-snug mb-12">
              The problem was<br />
              never the product
            </h2>

            <div className="flex flex-col gap-6 text-gray-300 text-[clamp(0.875rem,0.6vw+0.65rem,1rem)] font-light leading-relaxed">
              <p>
                The problem was that every solution existed separately. One app shared locations. Another called contacts. Another sold products.
              </p>
              <p className="text-pink-600 font-normal">
                Nothing worked together.
              </p>
              <p>
                Safety had become fragmented. Instead of solving one feature, NAZR wanted to solve the entire experience.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Protection Connected System Section */}
      <section 
        ref={protectSectionRef}
        className="relative w-full bg-[#111111] flex flex-col items-center pt-16 pb-24 overflow-hidden"
      >
        
        {/* Title */}
        <div className="text-center z-20 px-4 mb-8">
          <h2 className="text-[clamp(1.85rem,4vw+0.5rem,4rem)] font-thin text-gray-200 tracking-widest uppercase leading-[1.2]">
            Protection isn't a product<br />
            it's a <span className="font-black text-[#F80090]">connected system</span>
          </h2>
        </div>

        {/* Complex Layout Container - Fixed Aspect Ratio (1440x850) */}
        <div className="relative w-full max-w-[1440px] aspect-[1440/850] mt-8 text-white hidden md:block">
          
          {/* Background Girl */}
          <div className="absolute top-0 left-0 w-[50%] h-full z-0 opacity-60 mix-blend-lighten pointer-events-none">
            <img 
              src="/images/projects/nazr/protect/girl.png" 
              alt="Girl" 
              className="w-full h-full object-cover object-left-top"
            />
          </div>

          
          <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none w-full text-center">
            <span className="text-[clamp(6rem,14vw,13.75rem)] font-black italic text-[#2563eb] opacity-80 drop-shadow-2xl tracking-tighter" style={{ fontFamily: 'cursive' }}>
              NAZR
            </span>
          </div>

         
          <img 
            src="/images/projects/nazr/protect/sos-mobile.png" 
            alt="Mobile App" 
            className="absolute top-[18%] left-[14%] w-[22%] object-contain z-30 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
          />

         
          <img 
            src="/images/projects/nazr/protect/pink.png" 
            alt="Pink Box" 
            className="absolute top-[8%] left-[54%] w-[18%] object-contain z-20 -rotate-[12deg] drop-shadow-2xl"
          />

       
          <img 
            src="/images/projects/nazr/protect/blue.png" 
            alt="Blue Box" 
            className="absolute top-[20%] left-[68%] w-[18%] object-contain z-20 rotate-[14deg] drop-shadow-2xl"
          />

         
          <img 
            src="/images/projects/nazr/protect/spray.png" 
            alt="Pepper Spray" 
            className="absolute top-[45%] left-[48%] w-[10%] object-contain z-30 rotate-[12deg] drop-shadow-2xl"
          />

      
          <div className="absolute top-[22%] left-[4%] z-40 flex items-start gap-2">
            <motion.div 
              initial={{ opacity: 0, x: -12 }}
              animate={isProtectInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 2.1 }}
              className="flex flex-col text-left"
            >
              <h4 className="text-[#F80090] font-bold text-[clamp(12px,1.1vw,18px)] tracking-widest uppercase mb-1">Software</h4>
              <p className="text-gray-300 text-[clamp(10px,0.75vw,13px)] leading-relaxed">
                Intelligent app that<br/>anticipates, alerts<br/>and protects.
              </p>
            </motion.div>
            <svg className="w-[5vw] h-[4vw] overflow-visible pointer-events-none shrink-0 mt-1" viewBox="0 0 70 55" fill="none">
              <motion.path
                d="M 6 6 L 50 6 Q 68 6 68 24 L 68 55"
                stroke="#F80090"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="drop-shadow-[0_0_6px_#F80090]"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isProtectInView ? { pathLength: 1, opacity: 0.8 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 1.5 }}
              />
              <motion.circle
                cx="6"
                cy="6"
                r="3.5"
                fill="#F80090"
                className="drop-shadow-[0_0_8px_#F80090]"
                initial={{ scale: 0, opacity: 0 }}
                animate={isProtectInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 1.4 }}
                style={{ transformOrigin: "6px 6px" }}
              />
            </svg>
          </div>

         
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-35 overflow-visible" viewBox="0 0 1440 850" fill="none">
            
            <motion.circle
              cx="268"
              cy="455"
              r="3.5"
              fill="#F80090"
              className="drop-shadow-[0_0_8px_#F80090]"
              initial={{ scale: 0, opacity: 0 }}
              animate={isProtectInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 20, delay: 2.5 }}
            />

            {/* Feature 1 Line & Dot (Real time Location) */}
            <motion.path
              d="M 268 455 C 245 411, 225 305, 195 305 L 155 305"
              stroke="#F80090"
              strokeWidth="2"
              strokeLinecap="round"
              className="drop-shadow-[0_0_8px_#F80090]"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isProtectInView ? { pathLength: 1, opacity: 0.85 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 2.6 }}
            />
            <motion.circle
              cx="155"
              cy="305"
              r="4.5"
              fill="#F80090"
              className="drop-shadow-[0_0_10px_#F80090]"
              initial={{ scale: 0, opacity: 0 }}
              animate={isProtectInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 20, delay: 3.1 }}
            />

            {/* Feature 2 Line & Dot (Smart Alerts) */}
            <motion.path
              d="M 268 455 C 238 428, 230 375, 205 375 L 155 375"
              stroke="#F80090"
              strokeWidth="2"
              strokeLinecap="round"
              className="drop-shadow-[0_0_8px_#F80090]"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isProtectInView ? { pathLength: 1, opacity: 0.85 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 2.7 }}
            />
            <motion.circle
              cx="155"
              cy="375"
              r="4.5"
              fill="#F80090"
              className="drop-shadow-[0_0_10px_#F80090]"
              initial={{ scale: 0, opacity: 0 }}
              animate={isProtectInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 20, delay: 3.2 }}
            />

            {/* Feature 3 Line & Dot (Voice Detection) */}
            <motion.path
              d="M 268 455 C 244 449, 235 440, 215 440 L 155 440"
              stroke="#F80090"
              strokeWidth="2"
              strokeLinecap="round"
              className="drop-shadow-[0_0_8px_#F80090]"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isProtectInView ? { pathLength: 1, opacity: 0.85 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 2.8 }}
            />
            <motion.circle
              cx="155"
              cy="440"
              r="4.5"
              fill="#F80090"
              className="drop-shadow-[0_0_10px_#F80090]"
              initial={{ scale: 0, opacity: 0 }}
              animate={isProtectInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 20, delay: 3.3 }}
            />

            {/* Feature 4 Line & Dot (Trusted Circle) */}
            <motion.path
              d="M 268 455 C 241 477, 230 510, 205 510 L 155 510"
              stroke="#F80090"
              strokeWidth="2"
              strokeLinecap="round"
              className="drop-shadow-[0_0_8px_#F80090]"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isProtectInView ? { pathLength: 1, opacity: 0.85 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 2.9 }}
            />
            <motion.circle
              cx="155"
              cy="510"
              r="4.5"
              fill="#F80090"
              className="drop-shadow-[0_0_10px_#F80090]"
              initial={{ scale: 0, opacity: 0 }}
              animate={isProtectInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 20, delay: 3.4 }}
            />

            {/* Feature 5 Line & Dot (One-tap Emergency) */}
            <motion.path
              d="M 268 455 C 241 503, 220 575, 190 575 L 155 575"
              stroke="#F80090"
              strokeWidth="2"
              strokeLinecap="round"
              className="drop-shadow-[0_0_8px_#F80090]"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isProtectInView ? { pathLength: 1, opacity: 0.85 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 3.0 }}
            />
            <motion.circle
              cx="155"
              cy="575"
              r="4.5"
              fill="#F80090"
              className="drop-shadow-[0_0_10px_#F80090]"
              initial={{ scale: 0, opacity: 0 }}
              animate={isProtectInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 20, delay: 3.5 }}
            />
          </svg>

          {/* Features Labels on Desktop */}
          <div className="absolute inset-0 pointer-events-none z-40">
            {[
              { title: 'Real time\nLocation', top: '34%' },
              { title: 'Smart\nAlerts', top: '42%' },
              { title: 'Voice\nDetection', top: '50%' },
              { title: 'Trusted\nCircle', top: '58%' },
              { title: 'One-tap\nEmergency', top: '66%' }
            ].map((item, i) => (
              <motion.div
                key={i}
                style={{ position: 'absolute', top: item.top, left: '2.5%', width: '7%' }}
                className="text-right"
                initial={{ opacity: 0, x: -8 }}
                animate={isProtectInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                transition={{ duration: 0.35, ease: 'easeOut', delay: 3.0 + i * 0.1 }}
              >
                <span className="text-[clamp(10px,0.8vw,13px)] text-gray-300 whitespace-pre-line leading-tight block">
                  {item.title}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Hardware */}
          <div className="absolute top-[8%] left-[40%] z-40 flex items-start gap-2">
            <motion.div 
              initial={{ opacity: 0, x: -12 }}
              animate={isProtectInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
              className="flex flex-col text-left"
            >
              <h4 className="text-[#F80090] font-bold text-[clamp(12px,1.1vw,18px)] tracking-widest uppercase mb-1">Hardware</h4>
              <p className="text-gray-300 text-[clamp(10px,0.75vw,13px)] leading-relaxed">
                Intelligent app that<br/>anticipates, alerts<br/>and protects.
              </p>
            </motion.div>
            <svg className="w-[8vw] h-[5vw] overflow-visible pointer-events-none shrink-0 mt-1" viewBox="0 0 100 65" fill="none">
              <motion.path
                d="M 6 6 L 80 6 Q 98 6 98 24 L 98 65"
                stroke="#F80090"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="drop-shadow-[0_0_6px_#F80090]"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isProtectInView ? { pathLength: 1, opacity: 0.8 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
              />
              <motion.circle
                cx="6"
                cy="6"
                r="3.5"
                fill="#F80090"
                className="drop-shadow-[0_0_8px_#F80090]"
                initial={{ scale: 0, opacity: 0 }}
                animate={isProtectInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                style={{ transformOrigin: "6px 6px" }}
              />
            </svg>
          </div>

          {/* Trusted Circle (Pointing to bottom of phone) */}
          <div className="absolute top-[85%] left-[24.5%] z-40 flex items-start">
            <svg className="w-[3.5vw] h-[5vw] -mt-[3.5vw] overflow-visible pointer-events-none shrink-0" viewBox="0 0 52 60" fill="none">
              <motion.path
                d="M 2 0 L 2 45 Q 2 57 14 57 L 48 57"
                stroke="#F80090"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="drop-shadow-[0_0_6px_#F80090]"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isProtectInView ? { pathLength: 1, opacity: 0.8 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 4.1 }}
              />
              <motion.circle
                cx="48"
                cy="57"
                r="3.5"
                fill="#F80090"
                className="drop-shadow-[0_0_8px_#F80090]"
                initial={{ scale: 0, opacity: 0 }}
                animate={isProtectInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 4.0 }}
                style={{ transformOrigin: "48px 57px" }}
              />
            </svg>
            <motion.div 
              initial={{ opacity: 0, x: -12 }}
              animate={isProtectInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 4.6 }}
              className="flex flex-col text-left pl-2 pt-[0.2vw]"
            >
              <h4 className="text-[#F80090] font-bold text-[clamp(12px,1.1vw,18px)] tracking-widest uppercase mb-1">Trusted Circle</h4>
              <p className="text-gray-300 text-[clamp(10px,0.75vw,13px)] leading-relaxed">
                Intelligent app that<br/>anticipates, alerts<br/>and protects.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isProtectInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 4.9 }}
            className="absolute top-[50%] right-[8%] w-[25%] z-40 flex flex-col gap-6 text-left"
          >
            <h3 className="text-[clamp(1rem,1.5vw,1.75rem)] text-gray-300 leading-snug tracking-wide">
              Hardware<br/>
              Software<br/>
              Network<br/>
              All working as<br/>
              <span className="text-[#F80090] font-bold">ONE</span>
            </h3>
            <p className="text-[clamp(11px,0.85vw,14px)] text-gray-400 leading-loose">
              The founders approached Smrkonova with one ambitious idea. The goal wasn't another eCommerce site. It wasn't another mobile app. The goal was to engineer India's next women's safety ecosystem — where hardware, software, emergency communication, technology and trust all work together.
            </p>
          </motion.div>

        </div>

        
        <div className="w-full max-w-[420px] mx-auto flex flex-col items-center relative text-white px-2 mt-4 md:hidden overflow-hidden">
          
         
          <div className="relative w-full flex flex-col items-center pt-2">
            
    
            <div className="relative w-full max-w-[340px] flex justify-center">
              <motion.img 
                src="/images/projects/nazr/protect/girl.png" 
                alt="Girl" 
                className="w-[88%] object-cover grayscale contrast-125 opacity-80 pointer-events-none"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isProtectInView ? { opacity: 0.8, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
        
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]/70 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-transparent to-transparent pointer-events-none" />
            </div>

    
            <motion.div 
              className="absolute top-[130px] sm:top-[150px] left-1/2 -translate-x-1/2 z-20 pointer-events-none w-full text-center"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isProtectInView ? { opacity: 0.9, scale: 1 } : { opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span 
                className="text-[clamp(4.5rem,19vw,5.75rem)] font-black italic text-[#2563eb] drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] tracking-tighter" 
                style={{ fontFamily: 'cursive' }}
              >
                NAZR
              </span>
            </motion.div>

          </div>

     
          <div className="relative w-[360px] max-w-full h-[540px] mx-auto mt-[-30px] mb-4">
            
           
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-30 overflow-visible" viewBox="0 0 360 540" fill="none">
              
          
              <motion.path
                d="M 105 38 L 158 38 Q 168 38 168 48 L 168 95"
                stroke="#F80090"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="drop-shadow-[0_0_6px_#F80090]"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isProtectInView ? { pathLength: 1, opacity: 0.85 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
              <motion.circle
                cx="105"
                cy="38"
                r="3.5"
                fill="#F80090"
                className="drop-shadow-[0_0_8px_#F80090]"
                initial={{ scale: 0, opacity: 0 }}
                animate={isProtectInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.4 }}
              />

              
              <motion.circle
                cx="110"
                cy="298"
                r="2.5"
                fill="#F80090"
                className="drop-shadow-[0_0_6px_#F80090]"
                initial={{ scale: 0, opacity: 0 }}
                animate={isProtectInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 20, delay: 1.1 }}
              />

              {/* 2. Feature 1 Line & Dot (Real time Location) */}
              <motion.path
                d="M 110 298 C 99 277, 84 195, 72 195 L 56 195"
                stroke="#F80090"
                strokeWidth="1.3"
                strokeLinecap="round"
                className="drop-shadow-[0_0_5px_#F80090]"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isProtectInView ? { pathLength: 1, opacity: 0.85 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
              />
              <motion.circle
                cx="56"
                cy="195"
                r="3"
                fill="#F80090"
                className="drop-shadow-[0_0_6px_#F80090]"
                initial={{ scale: 0, opacity: 0 }}
                animate={isProtectInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 20, delay: 1.6 }}
              />

              {/* 3. Feature 2 Line & Dot (Smart Alerts) */}
              <motion.path
                d="M 110 298 C 97 286, 88 248, 78 248 L 56 248"
                stroke="#F80090"
                strokeWidth="1.3"
                strokeLinecap="round"
                className="drop-shadow-[0_0_5px_#F80090]"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isProtectInView ? { pathLength: 1, opacity: 0.85 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 1.3 }}
              />
              <motion.circle
                cx="56"
                cy="248"
                r="3"
                fill="#F80090"
                className="drop-shadow-[0_0_6px_#F80090]"
                initial={{ scale: 0, opacity: 0 }}
                animate={isProtectInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 20, delay: 1.7 }}
              />

              {/* 4. Feature 3 Line & Dot (Voice Detection) */}
              <motion.path
                d="M 110 298 C 98 296, 90 300, 82 300 L 56 300"
                stroke="#F80090"
                strokeWidth="1.3"
                strokeLinecap="round"
                className="drop-shadow-[0_0_5px_#F80090]"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isProtectInView ? { pathLength: 1, opacity: 0.85 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 1.4 }}
              />
              <motion.circle
                cx="56"
                cy="300"
                r="3"
                fill="#F80090"
                className="drop-shadow-[0_0_6px_#F80090]"
                initial={{ scale: 0, opacity: 0 }}
                animate={isProtectInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 20, delay: 1.8 }}
              />

              {/* 5. Feature 4 Line & Dot (Trusted Circle) */}
              <motion.path
                d="M 110 298 C 98 308, 88 352, 78 352 L 56 352"
                stroke="#F80090"
                strokeWidth="1.3"
                strokeLinecap="round"
                className="drop-shadow-[0_0_5px_#F80090]"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isProtectInView ? { pathLength: 1, opacity: 0.85 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
              />
              <motion.circle
                cx="56"
                cy="352"
                r="3"
                fill="#F80090"
                className="drop-shadow-[0_0_6px_#F80090]"
                initial={{ scale: 0, opacity: 0 }}
                animate={isProtectInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 20, delay: 1.9 }}
              />

              {/* 6. Feature 5 Line & Dot (One-tap Emergency) */}
              <motion.path
                d="M 110 298 C 98 319, 82 404, 70 404 L 56 404"
                stroke="#F80090"
                strokeWidth="1.3"
                strokeLinecap="round"
                className="drop-shadow-[0_0_5px_#F80090]"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isProtectInView ? { pathLength: 1, opacity: 0.85 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 1.6 }}
              />
              <motion.circle
                cx="56"
                cy="404"
                r="3"
                fill="#F80090"
                className="drop-shadow-[0_0_6px_#F80090]"
                initial={{ scale: 0, opacity: 0 }}
                animate={isProtectInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 20, delay: 2.0 }}
              />

              {/* 7. Trusted Circle Bottom-Right Line & Dot */}
              <motion.path
                d="M 248 416 L 248 454"
                stroke="#F80090"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="drop-shadow-[0_0_6px_#F80090]"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isProtectInView ? { pathLength: 1, opacity: 0.85 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 2.3 }}
              />
              <motion.circle
                cx="248"
                cy="416"
                r="3.5"
                fill="#F80090"
                className="drop-shadow-[0_0_8px_#F80090]"
                initial={{ scale: 0, opacity: 0 }}
                animate={isProtectInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 2.2 }}
              />
            </svg>

            {/* Software Callout (Top-Left) */}
            <motion.div 
              className="absolute left-[16px] top-[15px] z-30 flex flex-col text-left max-w-[125px]"
              initial={{ opacity: 0, x: -12 }}
              animate={isProtectInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h4 className="text-[#F80090] font-bold text-[13px] tracking-widest uppercase mb-1">
                SOFTWARE
              </h4>
              <p className="text-gray-300 text-[10px] leading-tight">
                Intelligent app that<br/>anticipates, alerts<br/>and protects.
              </p>
            </motion.div>

            {/* Phone Mockup - Exact Figma Properties */}
            <motion.img 
              src="/images/projects/nazr/protect/sos-mobile.png" 
              alt="Mobile App" 
              style={{
                position: 'absolute',
                width: '225px',
                height: '342.60px',
                top: '92.46px',
                left: '65.02px',
                opacity: 1
              }}
              className="object-contain z-20 pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)]"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={isProtectInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            />

            {/* 5 Feature Labels on the Left */}
            <div className="absolute left-[4px] top-0 z-30 flex flex-col pointer-events-none">
              {[
                { title: 'Real time\nLocation', top: 185 },
                { title: 'Smart\nAlerts', top: 238 },
                { title: 'Voice\nDetection', top: 290 },
                { title: 'Trusted\nCircle', top: 342 },
                { title: 'One-tap\nEmergency', top: 394 }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  style={{ position: 'absolute', top: `${item.top}px`, left: 0, width: '50px' }}
                  className="text-right"
                  initial={{ opacity: 0, x: -8 }}
                  animate={isProtectInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                  transition={{ duration: 0.4, delay: 1.5 + i * 0.1 }}
                >
                  <span className="text-[9.5px] font-medium text-gray-300 leading-tight whitespace-pre-line block">
                    {item.title}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Trusted Circle Callout (Bottom-Right) */}
            <motion.div 
              className="absolute left-[195px] top-[458px] z-30 flex flex-col text-left max-w-[145px]"
              initial={{ opacity: 0, y: 8 }}
              animate={isProtectInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.5, delay: 2.5 }}
            >
              <h4 className="text-[#F80090] font-bold text-[13px] tracking-widest uppercase mb-1">
                TRUSTED CIRCLE
              </h4>
              <p className="text-gray-300 text-[10px] leading-tight">
                Intelligent app that<br/>anticipates, alerts<br/>and protects.
              </p>
            </motion.div>

          </div>

          {/* Hardware Row: Pink Spray + Pink Box + Blue Box */}
          <motion.div 
            className="flex items-center justify-center gap-2.5 w-full max-w-[360px] my-8 px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isProtectInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 2.7 }}
          >
            {/* Pepper Spray */}
            <img 
              src="/images/projects/nazr/protect/spray.png" 
              alt="Pepper Spray" 
              className="w-[22%] max-w-[75px] object-contain rotate-[12deg] drop-shadow-2xl hover:scale-105 transition-transform"
            />
            {/* Pink Box */}
            <img 
              src="/images/projects/nazr/protect/pink.png" 
              alt="Pink Box" 
              className="w-[38%] max-w-[130px] object-contain -rotate-[8deg] drop-shadow-2xl hover:scale-105 transition-transform"
            />
            {/* Blue Box */}
            <img 
              src="/images/projects/nazr/protect/blue.png" 
              alt="Blue Box" 
              className="w-[38%] max-w-[130px] object-contain rotate-[10deg] drop-shadow-2xl hover:scale-105 transition-transform"
            />
          </motion.div>

          {/* Bottom Headline & Narrative Text Block (Left-Aligned) */}
          <motion.div 
            className="w-full max-w-[360px] flex flex-col text-left px-3 pt-4 pb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isProtectInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 3.0 }}
          >
            <h3 className="text-[20px] font-normal text-gray-200 leading-[1.3] tracking-wide mb-5">
              Hardware<br/>
              Software<br/>
              Network<br/>
              All working as<br/>
              <span className="text-[#F80090] font-bold">ONE</span>
            </h3>
            <p className="text-[12px] text-gray-400 leading-relaxed font-normal">
              The founders approached Smrkonova with one ambitious idea. The goal wasn&apos;t another eCommerce site. It wasn&apos;t another mobile app. The goal was to engineer India&apos;s next women&apos;s safety ecosystem — where hardware, software, emergency communication, technology and trust all work together.
            </p>
          </motion.div>

        </div>

      </section>

      {/* Product Strategy Section */}
      <section className="relative w-full bg-[#111111] px-4 md:px-8 py-10 md:py-20">
        <div className="w-full max-w-[1440px] mx-auto bg-[#e2e3e5] rounded-[40px] md:rounded-[60px] p-8 md:p-16 lg:p-24 overflow-hidden">
          
          {/* Top Half: Sticky Notes Flowchart */}
          <div className="relative w-full aspect-[1440/800] hidden md:block border-b border-gray-300 pb-20 mb-20">
            
            {/* Title */}
            <div className="absolute top-0 left-0 z-30 pointer-events-none">
              <h2 className="text-[clamp(2rem,4vw+0.5rem,4rem)] font-light text-gray-800 leading-[1.1] tracking-tight">
                BUILD A BRAND<br/>
                WOMEN RELY ON<br/>
                <span className="font-black text-[#F80090]">EVERY DAY</span><br/>
                NOT ONLY EMERGENCIES
              </h2>
            </div>

            {/* SVG Connecting Arrows */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1440 800" preserveAspectRatio="none">
              <defs>
                <marker id="pink-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                  <path d="M 0 0 L 8 4 L 0 8 z" fill="#F80090" />
                </marker>
              </defs>
              {/* Shopify to Mobile App */}
              <path d="M 340 460 Q 370 460 400 460" stroke="#F80090" strokeWidth="2.5" fill="none" markerEnd="url(#pink-arrow)" />
              
              {/* Guardian to Tracking */}
              <path d="M 570 660 Q 590 680 610 680" stroke="#F80090" strokeWidth="2.5" fill="none" markerEnd="url(#pink-arrow)" />
              
              {/* Mobile App to SOS */}
              <path d="M 700 470 Q 740 470 780 470" stroke="#F80090" strokeWidth="2.5" fill="none" markerEnd="url(#pink-arrow)" />
              
              {/* Pepper Spray to Website */}
              <path d="M 940 270 Q 960 300 1010 330" stroke="#F80090" strokeWidth="2.5" fill="none" markerEnd="url(#pink-arrow)" />
              
              {/* Tracking to Future Products */}
              <path d="M 850 670 Q 900 680 950 650" stroke="#F80090" strokeWidth="2.5" fill="none" markerEnd="url(#pink-arrow)" />
            </svg>

            {/* Sticky Notes */}
            <img src="/images/projects/nazr/build/shopify.png" className="absolute top-[42%] left-[6%] w-[18%] drop-shadow-xl z-20 hover:scale-105 transition-transform" alt="Shopify" />
            <img src="/images/projects/nazr/build/mobile-app.png" className="absolute top-[38%] left-[28%] w-[21%] drop-shadow-xl z-20 hover:scale-105 transition-transform" alt="Mobile App" />
            
            <img src="/images/projects/nazr/build/guardian.png" className="absolute top-[64%] left-[22%] w-[18%] drop-shadow-2xl z-30 hover:scale-105 transition-transform" alt="Guardian Network" />
            <img src="/images/projects/nazr/build/tracking.png" className="absolute top-[70%] left-[42%] w-[18%] drop-shadow-2xl z-30 hover:scale-105 transition-transform" alt="Tracking" />
            
            <img src="/images/projects/nazr/build/sos.png" className="absolute top-[44%] left-[55%] w-[18%] drop-shadow-xl z-20 hover:scale-105 transition-transform" alt="SOS" />
            <img src="/images/projects/nazr/build/pepper-spray.png" className="absolute top-[5%] left-[56%] w-[18%] drop-shadow-xl z-20 hover:scale-105 transition-transform" alt="Pepper Spray" />
            
            <img src="/images/projects/nazr/build/website.png" className="absolute top-[22%] left-[74%] w-[18%] drop-shadow-xl z-20 hover:scale-105 transition-transform" alt="Website" />
            <img src="/images/projects/nazr/build/future.png" className="absolute top-[62%] left-[70%] w-[20%] drop-shadow-xl z-20 hover:scale-105 transition-transform" alt="Future Products" />
          </div>

          {/* Mobile Fallback for top half */}
          <div className="md:hidden flex flex-col gap-6 mb-16 border-b border-gray-300 pb-16">
            <h2 className="text-[clamp(1.75rem,4vw+0.5rem,2.5rem)] font-light text-gray-800 leading-[1.1] tracking-tight mb-8">
              BUILD A BRAND<br/>
              WOMEN RELY ON<br/>
              <span className="font-black text-[#F80090]">EVERY DAY</span><br/>
              NOT ONLY EMERGENCIES
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/projects/nazr/build/shopify.png" className="w-full drop-shadow-lg" />
              <img src="/images/projects/nazr/build/mobile-app.png" className="w-full drop-shadow-lg" />
              <img src="/images/projects/nazr/build/sos.png" className="w-full drop-shadow-lg" />
              <img src="/images/projects/nazr/build/tracking.png" className="w-full drop-shadow-lg" />
              <img src="/images/projects/nazr/build/pepper-spray.png" className="w-full drop-shadow-lg" />
              <img src="/images/projects/nazr/build/website.png" className="w-full drop-shadow-lg" />
            </div>
          </div>

          {/* Bottom Half: Turning Insights Into Product Strategy */}
          <div className="w-full mt-10 md:mt-0">
            <h2 className="text-[clamp(1.85rem,3.5vw+0.5rem,3.5rem)] font-thin text-gray-800 mb-12 md:mb-16 leading-[1.1] uppercase tracking-wide">
              Turning Insights Into<br/>
              <span className="font-black text-[#F80090]">Product Strategy</span>
            </h2>
            
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              
              {/* Left Column */}
              <div className="w-full lg:w-[45%] flex flex-col gap-10">
                <p className="text-gray-700 text-[clamp(0.875rem,0.5vw+0.65rem,1rem)] leading-relaxed">
                  Before writing a single line of code or designing a single screen, we focused on understanding how women actually experience unsafe situations — before panic, during panic, and after.
                </p>
                <p className="text-gray-700 text-[clamp(0.875rem,0.5vw+0.65rem,1rem)] leading-relaxed">
                  Over <span className="font-bold text-[#F80090]">10-15 iterations</span> were completed across documentation, UX, product architecture, and user journeys before moving into development.
                </p>
                
                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mt-6">
                  {['DISCOVERY WORKSHOPS', 'RESEARCH', 'USER INTERVIEWS', 'COMPETITOR ANALYSIS'].map((title, i) => (
                    <div key={i} className="border-l-[3px] border-[#F80090] pl-4">
                      <h4 className="font-bold text-gray-800 text-[clamp(10px,0.6vw+3px,12px)] tracking-widest mb-3">{title}</h4>
                      <p className="text-[clamp(10px,0.5vw+4px,11px)] text-gray-600 leading-relaxed pr-4">
                        Multiple strategy sessions with founders to understand vision, technical feasibility, and roadmap.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Column (Numbered List) */}
              <div className="w-full lg:w-[45%] flex flex-col gap-6">
                {[
                  "PRODUCT REQUIREMENT DOCUMENT",
                  "INFORMATION ARCHITECTURE",
                  "WEBSITE SITEMAP",
                  "USER FLOWS",
                  "WIREFRAMES",
                  "FEATURE PRIORITISATION",
                  "BRAND STRATEGY",
                  "TECHNICAL PLANNING",
                  "DEVELOPMENT ROADMAP"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-6">
                    <div className="w-9 h-9 shrink-0 rounded-full bg-[#d5d5d5] flex items-center justify-center text-gray-500 font-medium text-xs">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <span className="text-gray-800 font-bold uppercase text-[clamp(11px,0.5vw+4px,13px)] tracking-widest">{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Features Real Situations Section (Sticky Cards) */}
      <section className="relative w-full bg-[#111111] pt-32 pb-40 px-4 md:px-8 overflow-visible">
        
        {/* Title */}
        <div className="text-center mb-16 md:mb-24 relative z-10 px-4">
          <h2 className="text-center uppercase font-sans">
            <span className="block font-thin text-[24px] leading-[28px] tracking-[0%] md:text-[clamp(1.85rem,4vw+0.5rem,4rem)] md:leading-[1.2] md:tracking-widest text-gray-300">
              FEATURES DESIGNED AROUND
            </span>
            <span className="block font-black text-[#F80090] text-[24px] leading-[28px] tracking-[0%] md:text-[clamp(1.85rem,4vw+0.5rem,4rem)] md:leading-[1.2] md:tracking-widest">
              REAL SITUATIONS
            </span>
          </h2>
        </div>

        {/* Mobile Cards Container (block md:hidden with sticky stacking animation) */}
        <div className="relative w-full flex flex-col items-center md:hidden pb-16">
          {[
            {
              num: 1,
              title: "A WOMAN IS WALKING\nHOME AFTER WORK.",
              desc: "Shield Mode continuously checks whether she is safe. If she doesn't respond, guardians are automatically alerted."
            },
            {
              num: 2,
              title: "TRAVELLING\nALONE IN A CAB",
              desc: "Shield Mode continuously checks whether she is safe. If she doesn't respond, guardians are automatically alerted."
            },
            {
              num: 3,
              title: "UNABLE TO\nUNLOCK THE PHONE",
              desc: "Shield Mode continuously checks whether she is safe. If she doesn't respond, guardians are automatically alerted."
            },
            {
              num: 4,
              title: "DON'T KNOW\nWHAT'S HAPPENING",
              desc: "Shield Mode continuously checks whether she is safe. If she doesn't respond, guardians are automatically alerted."
            }
          ].map((card, i) => (
            <div 
              key={card.num}
              className="sticky w-[358px] max-w-[calc(100vw-32px)] h-[539px] rounded-[32px] overflow-hidden bg-black flex flex-col justify-between shadow-[0_-10px_40px_rgba(0,0,0,0.8)] border border-neutral-800/80 shrink-0 transition-all duration-500"
              style={{ 
                top: `${8 + i * 2}vh`,
                marginBottom: i === 3 ? '55vh' : '40vh',
                zIndex: 20 + i,
                opacity: 1, 
                transform: 'rotate(0deg)' 
              }}
            >
              {/* Top Text Area */}
              <div className="px-6 pt-7 pb-3 flex flex-col text-left">
                {/* Title */}
                <h3 className="text-[17px] sm:text-[18px] font-bold text-white uppercase leading-[1.25] tracking-tight whitespace-pre-line">
                  {card.title}
                </h3>
                
                {/* Description */}
                <p className="text-[11px] text-neutral-400 leading-relaxed mt-2.5 mb-4 font-normal">
                  {card.desc}
                </p>

                {/* 3 Status Items */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  <div className="flex flex-col text-left">
                    <span className="text-[9.5px] text-neutral-400 font-semibold tracking-wider uppercase leading-tight">CHECKING</span>
                    <span className="text-[9.5px] text-neutral-400 font-semibold tracking-wider uppercase leading-tight">SAFETY</span>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[9.5px] text-neutral-400 font-semibold tracking-wider uppercase leading-tight">NO RESPONSE</span>
                    <span className="text-[9.5px] text-neutral-400 font-semibold tracking-wider uppercase leading-tight">DETECTED</span>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[9.5px] text-neutral-400 font-semibold tracking-wider uppercase leading-tight">GUARDIANS</span>
                    <span className="text-[9.5px] text-neutral-400 font-semibold tracking-wider uppercase leading-tight">ALERTED</span>
                  </div>
                </div>
              </div>

              {/* Bottom Image Area */}
              <div className="w-full h-[335px] relative overflow-hidden shrink-0 mt-auto">
                <img 
                  src={`/images/projects/nazr/features/${card.num}.png`}
                  alt={card.title.replace('\n', ' ')}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Sticky Cards Container (hidden md:flex) */}
        <div className="relative w-full max-w-[1200px] mx-auto hidden md:flex flex-col">
          {[
            {
              num: 1,
              title: "A WOMAN IS WALKING HOME\nAFTER WORK.",
              desc: "Shield Mode continuously checks whether she is safe. If she doesn't respond, guardians are automatically alerted.",
              align: "left"
            },
            {
              num: 2,
              title: "TRAVELLING\nALONE IN A CAB",
              desc: "Shield Mode continuously checks whether she is safe. If she doesn't respond, guardians are automatically alerted.",
              align: "right"
            },
            {
              num: 3,
              title: "UNABLE TO\nUNLOCK THE PHONE",
              desc: "Shield Mode continuously checks whether she is safe. If she doesn't respond, guardians are automatically alerted.",
              align: "left"
            },
            {
              num: 4,
              title: "DON'T KNOW\nWHAT'S HAPPENING",
              desc: "Shield Mode continuously checks whether she is safe. If she doesn't respond, guardians are automatically alerted.",
              align: "right"
            }
          ].map((card, i) => (
            <div 
              key={card.num} 
              className="sticky w-full transition-all duration-500 rounded-[30px] md:rounded-[50px] shadow-[0_-10px_40px_rgba(0,0,0,0.6)] border border-gray-800 overflow-hidden aspect-[4/5] md:aspect-[16/9] lg:aspect-[2/1]"
              style={{ 
                top: `${12 + i * 4}vh`, 
                marginBottom: '50vh', 
                zIndex: 20 + i 
              }}
            >
              {/* Background Image */}
              <img 
                src={`/images/projects/nazr/features/${card.num}.png`} 
                className="absolute inset-0 w-full h-full object-cover z-0" 
                alt={`Feature Scenario ${card.num}`} 
              />
              
              {/* Dark Gradient Overlay for Text Readability */}
              <div className={`absolute inset-0 z-10 ${card.align === 'left' ? 'bg-gradient-to-r from-black/80 via-black/40 to-transparent' : 'bg-gradient-to-l from-black/80 via-black/40 to-transparent'}`} />

              {/* Text Content Container */}
              <div className="absolute inset-0 z-20 w-full h-full p-8 md:p-16 lg:p-24 flex flex-col justify-center">
                <div className={`w-full md:w-[50%] flex flex-col gap-6 ${card.align === 'right' ? 'ml-auto' : ''}`}>
                  
                  <h3 className="text-[clamp(1.75rem,2.8vw+0.5rem,2.75rem)] font-bold text-white uppercase leading-[1.1] whitespace-pre-line">
                    {card.title}
                  </h3>
                  
                  <p className="text-[clamp(12px,0.6vw+6px,15px)] text-gray-300 leading-relaxed max-w-[420px]">
                    {card.desc}
                  </p>
                  
                  {/* Bottom Stats / Process */}
                  <div className="flex flex-wrap gap-8 md:gap-12 mt-6 md:mt-10">
                    <div className="flex flex-col gap-1">
                      <span className="text-[clamp(9px,0.6vw+3px,12px)] text-gray-400 font-medium tracking-widest uppercase">Checking</span>
                      <span className="text-[clamp(9px,0.6vw+3px,12px)] text-white font-medium tracking-widest uppercase">Safety</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[clamp(9px,0.6vw+3px,12px)] text-gray-400 font-medium tracking-widest uppercase">No Response</span>
                      <span className="text-[clamp(9px,0.6vw+3px,12px)] text-white font-medium tracking-widest uppercase">Detected</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[clamp(9px,0.6vw+3px,12px)] text-gray-400 font-medium tracking-widest uppercase">Guardians</span>
                      <span className="text-[clamp(9px,0.6vw+3px,12px)] text-white font-medium tracking-widest uppercase">Alerted</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>
        
      </section>

      {/* Connected Ecosystem Section */}
      <section className="relative w-full bg-[#111111] px-2.5 sm:px-4 md:px-8 py-8 md:py-10 pb-20 md:pb-32">
        <div className="w-full max-w-[1440px] mx-auto bg-[#e2e3e5] rounded-[24px] sm:rounded-[40px] md:rounded-[60px] px-3 py-8 sm:p-8 md:p-16 lg:p-24 overflow-hidden flex flex-col items-center">
          
          {/* Header */}
          <div className="text-center mb-16 relative z-30">
            <h2 className="text-[clamp(2.5rem,6vw+0.5rem,5.625rem)] font-black text-gray-800 tracking-tighter uppercase leading-[0.9]">
              CONNECTED<br/>
              <span className="text-[#F80090]">ECOSYSTEM</span>
            </h2>
          </div>

          {/* Center Graphic Layout - Desktop */}
          <div className="relative w-full max-w-[1100px] h-[700px] hidden lg:flex justify-center items-center mb-20 mt-10">
            
            {/* Images */}
            {/* Middle Phone */}
            <img 
              src="/images/projects/nazr/ecosystem/sos.png" 
              className="absolute w-[30%] z-20 drop-shadow-2xl left-1/2 -translate-x-1/2 top-0" 
              alt="Mobile SOS App" 
            />
            
            {/* Pink Spray */}
            <img 
              src="/images/projects/nazr/ecosystem/pink.png" 
              className="absolute w-[14%] left-[28%] top-[52%] z-30 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] rotate-[-12deg] hover:scale-105 transition-transform" 
              alt="Pink Pepper Spray" 
            />
            
            {/* White Spray */}
            <img 
              src="/images/projects/nazr/ecosystem/white.png" 
              className="absolute w-[13%] left-[56%] top-[68%] z-30 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] rotate-[15deg] hover:scale-105 transition-transform" 
              alt="White Pepper Spray" 
            />

            {/* Annotations (Dashed Ellipses) */}
            
            {/* 1. Volume Button SOS */}
            <div className="absolute left-[5%] top-[30%] w-[260px] h-[140px] border-[1.5px] border-dashed border-gray-400 rounded-[50%] flex flex-col justify-center items-center text-center px-10 z-10">
              <div className="absolute -top-3 left-[20%] bg-[#F80090] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
              <h4 className="font-bold text-gray-800 text-[clamp(11px,0.5vw+4px,13px)] mb-2">Volume Button SOS</h4>
              <p className="text-[clamp(9px,0.5vw+3px,11px)] text-gray-600 leading-tight">Press your volume button three times to instantly trigger SOS.</p>
            </div>

            {/* 2. In-App SOS Button */}
            <div className="absolute right-[5%] top-[10%] w-[260px] h-[140px] border-[1.5px] border-dashed border-gray-400 rounded-[50%] flex flex-col justify-center items-center text-center px-10 z-10">
              <div className="absolute -top-3 left-[20%] bg-[#F80090] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
              <h4 className="font-bold text-gray-800 text-[clamp(11px,0.5vw+4px,13px)] mb-2">In-App SOS Button</h4>
              <p className="text-[clamp(9px,0.5vw+3px,11px)] text-gray-600 leading-tight">Tap the SOS button in the NAZR app to alert your support network.</p>
            </div>

            {/* 3. Home Screen SOS Widget */}
            <div className="absolute right-[3%] top-[48%] w-[260px] h-[140px] border-[1.5px] border-dashed border-gray-400 rounded-[50%] flex flex-col justify-center items-center text-center px-10 z-10">
              <div className="absolute -top-3 left-[20%] bg-[#F80090] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
              <h4 className="font-bold text-gray-800 text-[clamp(11px,0.5vw+4px,13px)] mb-2">Home Screen SOS Widget</h4>
              <p className="text-[clamp(9px,0.5vw+3px,11px)] text-gray-600 leading-tight">Trigger SOS directly from your home screen without opening the app.</p>
            </div>

            {/* Left Checklists */}
            <div className="absolute left-[2%] bottom-[5%] flex flex-col gap-4 z-30">
              {["LARGE TOUCH TARGETS", "MINIMAL DISTRACTIONS", "RELIABLE NAVIGATION"].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#F80090] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-black text-gray-900 text-[clamp(10px,0.6vw+4px,12px)] tracking-widest">{text}</span>
                </div>
              ))}
            </div>

            {/* Right Checklists */}
            <div className="absolute right-[8%] bottom-[5%] flex flex-col gap-4 z-30">
              {["HIGH CONTRAST", "FAST INTERACTION", "SIMPLE LANGUAGE"].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#F80090] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-black text-gray-900 text-[clamp(10px,0.6vw+4px,12px)] tracking-widest">{text}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Center Graphic Layout - Mobile */}
          <div className="flex lg:hidden flex-col items-center gap-7 w-full mb-16 mt-2 px-2">
            
            {/* Phone & Pepper Sprays Mockup */}
            <div className="relative w-full max-w-[280px] h-[330px] flex justify-center items-center mx-auto">
              <img 
                src="/images/projects/nazr/ecosystem/sos.png" 
                className="w-[58%] max-w-[165px] z-20 drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)]" 
                alt="Mobile SOS App" 
              />
              <img 
                src="/images/projects/nazr/ecosystem/pink.png" 
                className="w-[28%] max-w-[82px] absolute left-[4%] bottom-[8%] z-30 drop-shadow-xl -rotate-12" 
                alt="Pink Pepper Spray" 
              />
              <img 
                src="/images/projects/nazr/ecosystem/white.png" 
                className="w-[27%] max-w-[78px] absolute right-[4%] bottom-[5%] z-30 drop-shadow-xl rotate-12" 
                alt="White Pepper Spray" 
              />
            </div>

            {/* 3 Dashed Oval Annotations */}
            <div className="flex flex-col items-center gap-5 w-full max-w-[340px]">
              
              {/* 1. Volume Button SOS */}
              <div className="relative w-full max-w-[310px] h-[112px] border-[1.5px] border-dashed border-neutral-600/70 rounded-[50%] flex flex-col justify-center items-center text-center px-8 z-10">
                <div className="absolute -top-2 left-[15%] bg-[#F80090] text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs shadow-md">
                  1
                </div>
                <h4 className="font-bold text-gray-900 text-[13px] mb-1 leading-snug">
                  Volume Button SOS
                </h4>
                <p className="text-[10.5px] text-gray-700 leading-tight">
                  Press your volume button three times to instantly trigger SOS.
                </p>
              </div>

              {/* 2. In-App SOS Button */}
              <div className="relative w-full max-w-[310px] h-[112px] border-[1.5px] border-dashed border-neutral-600/70 rounded-[50%] flex flex-col justify-center items-center text-center px-8 z-10">
                <div className="absolute -top-2 left-[15%] bg-[#F80090] text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs shadow-md">
                  2
                </div>
                <h4 className="font-bold text-gray-900 text-[13px] mb-1 leading-snug">
                  In-App SOS Button
                </h4>
                <p className="text-[10.5px] text-gray-700 leading-tight">
                  Tap the SOS button in the NAZR app to alert your support network.
                </p>
              </div>

              {/* 3. Home Screen SOS Widget */}
              <div className="relative w-full max-w-[310px] h-[112px] border-[1.5px] border-dashed border-neutral-600/70 rounded-[50%] flex flex-col justify-center items-center text-center px-8 z-10">
                <div className="absolute -top-2 left-[15%] bg-[#F80090] text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs shadow-md">
                  3
                </div>
                <h4 className="font-bold text-gray-900 text-[13px] mb-1 leading-snug">
                  Home Screen SOS Widget
                </h4>
                <p className="text-[10.5px] text-gray-700 leading-tight">
                  Trigger SOS directly from your home screen without opening the app.
                </p>
              </div>

            </div>

            {/* Bottom 2-Column Checklists */}
            <div className="flex justify-between items-start w-full max-w-[340px] px-2 pt-3 mx-auto">
              <div className="flex flex-col gap-2.5">
                {["LARGE TOUCH TARGETS", "MINIMAL DISTRACTIONS", "RELIABLE NAVIGATION"].map((text, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-[#F80090] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-extrabold text-gray-900 text-[9px] sm:text-[9.5px] tracking-wide uppercase whitespace-nowrap">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2.5">
                {["HIGH CONTRAST", "FAST INTERACTION", "SIMPLE LANGUAGE"].map((text, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-[#F80090] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-extrabold text-gray-900 text-[9px] sm:text-[9.5px] tracking-wide uppercase whitespace-nowrap">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Iframe to NAZR website */}
          <div className="w-full max-w-[348px] aspect-[348.14/194.55] md:max-w-[1000px] md:aspect-video border-[2.5px] md:border-[10px] border-gray-400 rounded-[7.21px] md:rounded-[40px] overflow-hidden shadow-2xl mb-16 md:mb-24 relative bg-black mx-auto">
            <DisplayScaler
              src="https://www.nazrco.in/"
              title="NAZR Website"
              baseWidth={1440}
              aspectRatio={16 / 9}
              showOpenButton={true}
            />
          </div>

          {/* Footer Typography */}
          <div className="text-center max-w-[800px] mb-20 relative">
             <p className="text-[clamp(1.25rem,2vw+0.5rem,2.25rem)] font-bold text-gray-800 leading-tight">
               <span className="text-[#F80090]">Launching NAZR wasn&apos;t limited to<br/>publishing an application.</span> Smrkonova<br/>supported the complete technical<br/>launch, ensuring every moving part<br/>worked together.
             </p>
          </div>

          {/* Grid of 15 Flutter Applications */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 w-full max-w-[1200px]">
             {[...Array(15)].map((_, i) => (
                <div key={i} className="border-l-[3px] border-[#F80090] pl-3 py-1">
                  <h4 className="font-bold text-gray-900 text-[clamp(9px,0.5vw+3px,10px)] tracking-widest uppercase mb-1.5 leading-tight">FLUTTER<br/>APPLICATION</h4>
                  <p className="text-[clamp(8px,0.4vw+3px,9px)] text-gray-600 leading-tight">Multiple strategy sessions with<br/>founders to understand vision</p>
                </div>
             ))}
          </div>

        </div>
      </section>

      {/* The Journey Section */}
      <section className="relative w-full bg-[#111111] pt-32 pb-0 flex flex-col items-center">
        
        {/* Huge Typography */}
        <div className="text-center px-4 mb-16">
          <h2 className="text-[clamp(3.5rem,8.5vw+0.5rem,8.75rem)] font-black text-white tracking-tighter uppercase leading-[0.9]">
            THE<br/>
            JOURNEY<br/>
            HAS<br/>
            ONLY <span className="text-[#F80090]">BEGUN</span>
          </h2>
        </div>

        {/* Small Paragraphs */}
        <div className="flex flex-col gap-6 text-center max-w-[600px] px-6 text-[clamp(11px,0.6vw+5px,13px)] text-gray-400 mb-16">
          <p>NAZR started with a simple question. How can technology make women feel safer?</p>
          <p>Today it has become a foundation for a growing ecosystem that connects products, software, emergency response, and community into one unified experience.</p>
          <p>And for Smrkonova, this is exactly why we exist.</p>
          <p>Not to build websites. Not to design applications. But to partner with ambitious founders, solve meaningful problems, and engineer digital systems that continue growing long after launch.</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-32 w-full max-w-[500px] px-6">
          <button className="flex-1 bg-[#F80090] text-white font-bold py-4 px-6 rounded-[4px] tracking-widest text-[clamp(10px,0.6vw+4px,12px)] hover:bg-pink-600 transition-colors">
            CREATE YOURS
          </button>
          <button className="flex-1 bg-transparent border-[1.5px] border-gray-600 text-white font-bold py-4 px-6 rounded-[4px] tracking-widest text-[clamp(10px,0.6vw+4px,12px)] hover:bg-white/5 transition-colors">
            NEXT PROJECT
          </button>
        </div>

        {/* Infinite Marquee Banner */}
        <style>{`
          @keyframes bottom-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-bottom-marquee {
            animation: bottom-marquee 15s linear infinite;
          }
        `}</style>
        
        <div className="w-full bg-[#111111] border-y border-gray-900 py-6 overflow-hidden flex whitespace-nowrap">
          <div className="flex items-center gap-10 animate-bottom-marquee w-max">
             {/* Repeat contents enough times to ensure seamless loop */}
             {[...Array(6)].map((_, i) => (
               <div key={i} className="flex items-center gap-10">
                 {/* NAZR Item */}
                 <div className="flex items-center gap-4">
                   <svg className="w-8 h-8 text-[#F80090]" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm6 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zM12 16c-1.86 0-3.41-1.28-3.86-3h7.72c-.45 1.72-2 3-3.86 3z" />
                   </svg>
                   <span className="font-black text-2xl tracking-widest text-white">NAZR</span>
                 </div>
                 {/* SMRKONOVA Item */}
                 <div className="flex items-center gap-4">
                   <svg className="w-8 h-8 text-[#F80090]" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                   </svg>
                   <span className="font-black text-2xl tracking-widest text-white">SMRKONOVA</span>
                 </div>
               </div>
             ))}
          </div>
        </div>

      </section>

    </main>
  );
}
