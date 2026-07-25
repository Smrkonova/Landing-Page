"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Projects = () => {
  const [isHovering, setIsHovering] = useState(false);

  // Mouse tracking for custom cursor
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 150, damping: 15, mass: 0.5 });
  const springY = useSpring(cursorY, { stiffness: 150, damping: 15, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 64); // 64 is half of 128px (w-32)
      cursorY.set(e.clientY - 64);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.14) {
      setActiveIndex(-1);
    } else if (latest < 0.28) {
      setActiveIndex(0);
    } else if (latest < 0.42) {
      setActiveIndex(1);
    } else if (latest < 0.56) {
      setActiveIndex(2);
    } else if (latest < 0.70) {
      setActiveIndex(3);
    } else if (latest < 0.84) {
      setActiveIndex(4);
    } else {
      setActiveIndex(5);
    }
  });

  return (
    <div ref={containerRef} className="w-full relative h-[700vh]">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <AnimatePresence>
          {activeIndex === 0 && (
            <motion.div
              key="nazr"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex items-center justify-center font-sans"
              style={{
                background: 'radial-gradient(104.83% 101.86% at 51.9% 100%, #FF3EAE 0%, #FF1D9D 82.43%, #CD0074 100%)'
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Giant Background Text */}
              <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center pointer-events-none select-none z-0">
                <h1
                  className="text-center text-[18vw] md:text-[12vw] font-black font-good-times leading-none m-0 p-0 tracking-tighter"
                  style={{ color: '#FFFFFF4D' }}
                >
                  YOU ARE<br />SAFE
                </h1>
              </div>

              {/* Main Content Container */}
              <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-24 flex flex-col md:flex-row items-center justify-center h-full">

                {/* Left Side: Product Images */}
                <div className="relative w-full md:w-1/2 h-[500px] md:h-[700px] flex items-center justify-center mb-12 md:mb-0">
                  <motion.div
                    initial={{ opacity: 0, y: 50, rotate: -15 }}
                    animate={{ opacity: 1, y: 0, rotate: -5 }}
                    transition={{ duration: 1, type: "spring", delay: 0.3 }}
                    className="absolute w-[70%] md:w-[60%] left-0 md:left-[5%] z-30 drop-shadow-2xl"
                  >
                    <Image
                      src="/images/project/nazr/left.png"
                      alt="Nazr Mobile App"
                      width={600}
                      height={800}
                      className="w-full h-auto object-contain"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50, rotate: 15 }}
                    animate={{ opacity: 1, y: 0, rotate: 5 }}
                    transition={{ duration: 1, delay: 0.5, type: "spring" }}
                    className="absolute w-[60%] md:w-[70%] right-[-5%] md:-right-[10%] z-40 drop-shadow-2xl"
                  >
                    <Image
                      src="/images/project/nazr/right.png"
                      alt="Nazr Pepper Spray"
                      width={600}
                      height={700}
                      className=" object-contain"
                    />
                  </motion.div>
                </div>

                {/* Right Side: Description */}
                <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-16">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-col"
                  >
                    {/* Logo */}
                    <div className=" mb-6">
                      <Image
                        src="/images/projects/logo-nazr.svg"
                        alt="NAZR"
                        width={140}
                        height={40}
                        className=" object-contain brightness-0 invert"

                      />
                    </div>

                    {/* Paragraph */}
                    <p className="text-sm  font-medium leading-relaxed text-white/90 max-w-md">
                      A custom-built platform designed with dual-user architecture, gamification logic, and reward-driven engagement systems to increase user retention and activity.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Bottom Footer Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute bottom-10 left-8 right-8 md:left-12 md:right-12 flex flex-col md:flex-row justify-between items-start md:items-end z-20 gap-8"
              >
                <div className="text-[10px] md:text-xs tracking-widest text-white/70 uppercase font-bold">
                  CONSTRUCTION COMPANY IN BENGALURU
                </div>

                <div className="flex gap-8 md:gap-16">
                  {[
                    { value: "72%", label: "higher\nengagement" },
                    { value: "4X", label: "higher\nengagement" },
                    { value: "60%", label: "higher\nengagement" }
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-xl md:text-2xl font-bold text-white mb-1 leading-none">{stat.value}</span>
                      <span className="text-[10px] md:text-xs text-white/60 whitespace-pre-line leading-tight">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Bottom Curve Image */}
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                className="absolute bottom-0 left-0 w-full h-auto z-1 pointer-events-none"
              >
                <Image
                  src="/images/project/nazr/bottom.svg"
                  alt="Bottom curve"
                  width={1920}
                  height={300}
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>
          )}

          {activeIndex === 1 && (
            <motion.div
              key="neelachandra"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex flex-col justify-end font-sans"
              style={{
                background: 'radial-gradient(104.83% 101.86% at 51.9% 100%, #FFA700 0%, #FF7F00 82.43%, #CC5200 100%)'
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Giant Background Text */}
              <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center pointer-events-none select-none z-0">
                <h1
                  className="text-center text-[18vw] md:text-[12vw] font-black font-good-times leading-none m-0 p-0 tracking-tighter"
                  style={{ color: '#FFFFFF4D' }}
                >
                  BUILDING<br />TRUST
                </h1>
              </div>

              {/* Main Content Container */}
              <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pb-32 pt-24 flex flex-col md:flex-row items-end justify-between h-full mt-auto">
                {/* Left Side: Center Image */}
                <div className="relative w-full md:w-1/2 flex items-end justify-center mb-12 md:mb-0">
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, type: "spring", delay: 0.3 }}
                    className="relative w-[100%] md:w-[110%] z-30 drop-shadow-2xl md:-ml-[10%]"
                  >
                    <Image
                      src="/images/project/neelachandra/center.png"
                      alt="Neelachandra"
                      width={1000}
                      height={800}
                      className="w-full h-auto object-contain"
                    />
                  </motion.div>
                </div>

                {/* Right Side: Description */}
                <div className="w-full md:w-1/2 flex flex-col justify-end md:pl-16 pb-12">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-col"
                  >
                    {/* Logo */}
                    <div className="mb-6">
                      <Image
                        src="/images/projects/logo-neela.svg"
                        alt="NEELACHANDRA"
                        width={200}
                        height={60}
                        className="object-contain brightness-0 invert"
                      />
                    </div>

                    {/* Paragraph */}
                    <p className="text-sm font-medium leading-relaxed text-white/90 max-w-md">
                      A custom-built platform designed with dual-user architecture, gamification logic, and reward-driven engagement systems to increase user retention and activity.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Bottom Footer Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute bottom-10 left-8 right-8 md:left-12 md:right-12 flex flex-col md:flex-row justify-between items-start md:items-end z-20 gap-8"
              >
                <div className="text-[10px] md:text-xs tracking-widest text-white/70 uppercase font-bold">
                  CONSTRUCTION COMPANY IN BENGALURU
                </div>

                <div className="flex gap-8 md:gap-16">
                  {[
                    { value: "72%", label: "higher\nengagement" },
                    { value: "4X", label: "higher\nengagement" },
                    { value: "60%", label: "higher\nengagement" }
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-xl md:text-2xl font-bold text-white mb-1 leading-none">{stat.value}</span>
                      <span className="text-[10px] md:text-xs text-white/60 whitespace-pre-line leading-tight">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Bottom Curve Image */}
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                className="absolute bottom-0 left-0 w-full h-auto z-1 pointer-events-none"
              >
                <Image
                  src="/images/project/neelachandra/bottom.svg"
                  alt="Bottom curve"
                  width={1920}
                  height={300}
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>
          )}

          {activeIndex === 2 && (
            <motion.div
              key="hiro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex items-center justify-center font-sans"
              style={{
                background: 'radial-gradient(104.83% 101.86% at 51.9% 100%, #1E1E1E 0%, #1E1E1E 82.43%, #121212 100%)'
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Giant Background Text */}
              <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center pointer-events-none select-none z-0">
                <h1
                  className="text-center text-[18vw] md:text-[14vw] font-black font-good-times leading-none m-0 p-0 tracking-tighter"
                  style={{ color: '#FFFFFF4D' }}
                >
                  GAMIFIED
                </h1>
              </div>

              {/* Main Content Container */}
              <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-24 flex flex-col md:flex-row items-center justify-center h-full">
                {/* Left Side: Product Images */}
                <div className="relative w-full md:w-1/2 h-[500px] md:h-[700px] flex items-center justify-center mb-12 md:mb-0">
                  <motion.div
                    initial={{ opacity: 0, y: 50, rotate: -15 }}
                    animate={{ opacity: 1, y: 0, rotate: -5 }}
                    transition={{ duration: 1, type: "spring", delay: 0.3 }}
                    className="absolute w-[70%] md:w-[60%] left-0 md:left-[5%] z-40 drop-shadow-2xl"
                  >
                    <Image
                      src="/images/project/hiro/left.png"
                      alt="Hiro Mobile App"
                      width={600}
                      height={800}
                      className="w-full h-auto object-contain"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50, rotate: 15 }}
                    animate={{ opacity: 1, y: 0, rotate: 5 }}
                    transition={{ duration: 1, delay: 0.5, type: "spring" }}
                    className="absolute w-[60%] md:w-[50%] right-[-5%] md:right-[5%] z-30 drop-shadow-2xl"
                  >
                    <Image
                      src="/images/project/hiro/right.png"
                      alt="Hiro App Screen"
                      width={500}
                      height={700}
                      className="w-full h-auto object-contain"
                    />
                  </motion.div>
                </div>

                {/* Right Side: Description */}
                <div className="w-full md:w-1/2 flex flex-col justify-center pt-12 md:pl-16">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-col"
                  >
                    {/* Logo */}
                    <div className="mb-6">
                      <Image
                        src="/images/projects/logo-hero.svg"
                        alt="HiroGuild"
                        width={180}
                        height={60}
                        className="object-contain"
                      />
                    </div>

                    {/* Paragraph */}
                    <p className="text-sm font-medium leading-relaxed text-white/90 max-w-md">
                      A custom-built platform designed with dual-user architecture, gamification logic, and reward-driven engagement systems to increase user retention and activity.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Bottom Footer Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute bottom-10 left-8 right-8 md:left-12 md:right-12 flex flex-col md:flex-row justify-between items-start md:items-end z-20 gap-8"
              >
                <div className="text-[10px] md:text-xs tracking-widest text-white/70 uppercase font-bold">
                  CONSTRUCTION COMPANY IN BENGALURU
                </div>

                <div className="flex gap-8 md:gap-16">
                  {[
                    { value: "72%", label: "higher\nengagement" },
                    { value: "4X", label: "higher\nengagement" },
                    { value: "60%", label: "higher\nengagement" }
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-xl md:text-2xl font-bold text-white mb-1 leading-none">{stat.value}</span>
                      <span className="text-[10px] md:text-xs text-white/60 whitespace-pre-line leading-tight">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Bottom Curve Image */}
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                className="absolute bottom-0 left-0 w-full h-auto z-1 pointer-events-none"
              >
                <Image
                  src="/images/project/hiro/bottom.svg"
                  alt="Bottom curve"
                  width={1920}
                  height={300}
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>
          )}

          {activeIndex === 3 && (
            <motion.div
              key="rayara"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex items-center justify-center font-sans"
              style={{
                background: 'radial-gradient(104.83% 101.86% at 51.9% 100%, #606016 0%, #606016 82.43%, #2B2D12 100%)'
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Giant Background Text */}
              <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center pointer-events-none select-none z-0">
                <h1
                  className="text-center text-[18vw] md:text-[14vw] font-black font-good-times leading-none m-0 p-0 tracking-tighter"
                  style={{ color: '#FFFFFF4D' }}
                >
                  TIMELESS<br />TASTE
                </h1>
              </div>

              {/* Main Content Container */}
              <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-24 flex flex-col md:flex-row items-center justify-center h-full">
                {/* Left Side: Product Images */}
                <div className="relative w-full md:w-1/2 h-[500px] md:h-[700px] flex items-center justify-center mb-12 md:mb-0">
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, type: "spring", delay: 0.3 }}
                    className="absolute w-[75%] md:w-[70%] left-[0%] md:left-[-5%] top-[15%] md:top-[15%] z-30 drop-shadow-2xl"
                  >
                    <Image
                      src="/images/project/rayara/left.png"
                      alt="Rayara Left"
                      width={800}
                      height={800}
                      className="w-full h-auto object-contain"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5, type: "spring" }}
                    className="absolute w-[85%] md:w-[95%] right-[-5%] md:-right-[5%] top-[45%] md:top-[45%] z-40 drop-shadow-2xl"
                  >
                    <Image
                      src="/images/project/rayara/right.png"
                      alt="Rayara Right"
                      width={900}
                      height={800}
                      className="w-full h-auto object-contain"
                    />
                  </motion.div>
                </div>

                {/* Right Side: Description */}
                <div className="w-full md:w-1/2 flex flex-col justify-center pt-24 md:pt-48 md:pl-16">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-col"
                  >
                    {/* Logo */}
                    <div className="mb-6">
                      <Image
                        src="/images/project/rayara/logo.svg"
                        alt="RAYARA TAMARA"
                        width={240}
                        height={60}
                        className="object-contain"
                      />
                    </div>

                    {/* Paragraph */}
                    <p className="text-sm font-medium leading-relaxed text-white/90 max-w-md">
                      A custom-built platform designed with dual-user architecture, gamification logic, and reward-driven engagement systems to increase user retention and activity.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Bottom Footer Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute bottom-10 left-8 right-8 md:left-12 md:right-12 flex flex-col md:flex-row justify-between items-start md:items-end z-20 gap-8"
              >
                <div className="text-[10px] md:text-xs tracking-widest text-white/70 uppercase font-bold">
                  CONSTRUCTION COMPANY IN BENGALURU
                </div>

                <div className="flex gap-8 md:gap-16">
                  {[
                    { value: "72%", label: "higher\nengagement" },
                    { value: "4X", label: "higher\nengagement" },
                    { value: "60%", label: "higher\nengagement" }
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-xl md:text-2xl font-bold text-white mb-1 leading-none">{stat.value}</span>
                      <span className="text-[10px] md:text-xs text-white/60 whitespace-pre-line leading-tight">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Bottom Curve Image */}
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                className="absolute bottom-0 left-0 w-full h-auto z-1 pointer-events-none"
              >
                <Image
                  src="/images/project/rayara/bottom.svg"
                  alt="Bottom curve"
                  width={1920}
                  height={300}
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>
          )}

          {activeIndex === 4 && (
            <motion.div
              key="cine"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex items-center justify-center font-sans"
              style={{
                background: 'radial-gradient(104.83% 101.86% at 51.9% 100%, #2D2D2D 0%, #181818 82.43%, #161616 100%)'
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Giant Background Text */}
              <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center pointer-events-none select-none z-0">
                <h1
                  className="text-center text-[18vw] md:text-[14vw] font-black font-good-times leading-none m-0 p-0 tracking-tighter"
                  style={{ color: '#FFFFFF1A' }}
                >
                  READY<br />FOR FILMS
                </h1>
              </div>

              {/* Main Content Container */}
              <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-24 flex flex-col md:flex-row items-center justify-center h-full">
                {/* Left Side: Product Images */}
                <div className="relative w-full md:w-1/2 h-[500px] md:h-[700px] flex items-center justify-center mb-12 md:mb-0">
                  {/* Clapperboard (take.png) */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, type: "spring", delay: 0.3 }}
                    className="absolute w-[95%] md:w-[90%] z-20 drop-shadow-2xl"
                  >
                    <Image
                      src="/images/project/cine/take.png"
                      alt="Cine Take"
                      width={800}
                      height={800}
                      className="w-full h-auto object-contain"
                    />
                  </motion.div>

                  {/* Gallery Icon */}
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, type: "spring", delay: 0.5 }}
                    className="absolute w-[20%] md:w-[18%] left-[-5%] md:left-[5%] top-[20%] md:top-[25%] z-10 drop-shadow-xl"
                  >
                    <Image src="/images/project/cine/gallery.png" alt="Gallery" width={200} height={200} className="w-full h-auto" />
                  </motion.div>

                  {/* Book Icon */}
                  <motion.div
                    initial={{ opacity: 0, x: -50, scale: 0 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.6, type: "spring", delay: 0.6 }}
                    className="absolute w-[22%] md:w-[20%] left-[0%] md:left-[10%] top-[45%] md:top-[45%] z-[15] drop-shadow-xl"
                  >
                    <Image src="/images/project/cine/book.png" alt="Book" width={200} height={200} className="w-full h-auto" />
                  </motion.div>

                  {/* Camera Icon (Pink) */}
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, type: "spring", delay: 0.7 }}
                    className="absolute w-[25%] md:w-[22%] left-[25%] md:left-[30%] bottom-[15%] md:bottom-[15%] z-30 drop-shadow-xl"
                  >
                    <Image src="/images/project/cine/camera.png" alt="Camera" width={200} height={200} className="w-full h-auto" />
                  </motion.div>

                  {/* Video Icon (Red) */}
                  <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.6, type: "spring", delay: 0.8 }}
                    className="absolute w-[25%] md:w-[22%] right-[10%] md:right-[20%] bottom-[20%] md:bottom-[20%] z-10 drop-shadow-xl"
                  >
                    <Image src="/images/project/cine/video.png" alt="Video" width={200} height={200} className="w-full h-auto" />
                  </motion.div>
                </div>

                {/* Right Side: Description */}
                <div className="w-full md:w-1/2 flex flex-col justify-center pt-24 md:pt-48 md:pl-16">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-col"
                  >
                    {/* Logo */}
                    <div className="mb-6">
                      <Image
                        src="/images/project/cine/logo.png"
                        alt="CineArtery"
                        width={240}
                        height={60}
                        className="object-contain"
                      />
                    </div>

                    {/* Paragraph */}
                    <p className="text-sm font-medium leading-relaxed text-white/90 max-w-md">
                      A custom-built platform designed with dual-user architecture, gamification logic, and reward-driven engagement systems to increase user retention and activity.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Bottom Footer Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute bottom-10 left-8 right-8 md:left-12 md:right-12 flex flex-col md:flex-row justify-between items-start md:items-end z-20 gap-8"
              >
                <div className="text-[10px] md:text-xs tracking-widest text-white/70 uppercase font-bold">
                  CONSTRUCTION COMPANY IN BENGALURU
                </div>

                <div className="flex gap-8 md:gap-16">
                  {[
                    { value: "72%", label: "higher\nengagement" },
                    { value: "4X", label: "higher\nengagement" },
                    { value: "60%", label: "higher\nengagement" }
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-xl md:text-2xl font-bold text-white mb-1 leading-none">{stat.value}</span>
                      <span className="text-[10px] md:text-xs text-white/60 whitespace-pre-line leading-tight">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Bottom Curve Image */}
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                className="absolute bottom-0 left-0 w-full h-auto z-1 pointer-events-none"
              >
                <Image
                  src="/images/project/cine/bottom.svg"
                  alt="Bottom curve"
                  width={1920}
                  height={300}
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>
          )}

          {activeIndex === 5 && (
            <motion.div
              key="reading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex items-center justify-center font-sans"
              style={{
                background: 'radial-gradient(104.83% 101.86% at 51.9% 100%, #E0CEBB 0%, #73706B 82.43%, #59524E 100%)'
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Giant Background Text */}
              <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center pointer-events-none select-none z-0">
                <h1
                  className="text-center text-[18vw] md:text-[14vw] font-black font-good-times leading-none m-0 p-0 tracking-tighter"
                  style={{ color: '#FFFFFF33' }}
                >
                  READING<br />SIMPLIFIED
                </h1>
              </div>

              {/* Main Content Container */}
              <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-24 flex flex-col md:flex-row items-center justify-center h-full">
                {/* Left Side: Product Images */}
                <div className="relative w-full md:w-1/2 h-[500px] md:h-[700px] flex items-center justify-center mb-12 md:mb-0">
                  {/* Desktop Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, type: "spring", delay: 0.3 }}
                    className="absolute w-[95%] md:w-[90%] right-[0%] md:right-[-5%] top-[10%] md:top-[15%] z-20 drop-shadow-2xl"
                  >
                    <Image
                      src="/images/project/reading/desktop.png"
                      alt="Reading Desktop"
                      width={800}
                      height={800}
                      className="w-full h-auto object-contain"
                    />
                  </motion.div>

                  {/* Mobile Image */}
                  <motion.div
                    initial={{ opacity: 0, x: -50, y: 50, rotate: -15 }}
                    animate={{ opacity: 1, x: 0, y: 0, rotate: -5 }}
                    transition={{ duration: 1, delay: 0.5, type: "spring" }}
                    className="absolute w-[45%] md:w-[40%] left-[-5%] md:left-[0%] bottom-[10%] md:bottom-[5%] z-30 drop-shadow-2xl"
                  >
                    <Image
                      src="/images/project/reading/mobile.png"
                      alt="Reading Mobile"
                      width={400}
                      height={700}
                      className="w-full h-auto object-contain"
                    />
                  </motion.div>
                </div>

                {/* Right Side: Description */}
                <div className="w-full md:w-1/2 flex flex-col justify-center pt-24 md:pt-48 md:pl-16">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-col"
                  >
                    {/* Logo */}
                    <div className="mb-6">
                      <Image
                        src="/images/project/reading/logo.png"
                        alt="The Reading Elf"
                        width={120}
                        height={120}
                        className="object-contain"
                      />
                    </div>

                    {/* Paragraph */}
                    <p className="text-sm font-medium leading-relaxed text-white/90 max-w-md">
                      A custom-built platform designed with dual-user architecture, gamification logic, and reward-driven engagement systems to increase user retention and activity.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Bottom Footer Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute bottom-10 left-8 right-8 md:left-12 md:right-12 flex flex-col md:flex-row justify-between items-start md:items-end z-20 gap-8"
              >
                <div className="text-[10px] md:text-xs tracking-widest text-white/70 uppercase font-bold">
                  CONSTRUCTION COMPANY IN BENGALURU
                </div>

                <div className="flex gap-8 md:gap-16">
                  {[
                    { value: "72%", label: "higher\nengagement" },
                    { value: "4X", label: "higher\nengagement" },
                    { value: "60%", label: "higher\nengagement" }
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-xl md:text-2xl font-bold text-white mb-1 leading-none">{stat.value}</span>
                      <span className="text-[10px] md:text-xs text-white/60 whitespace-pre-line leading-tight">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Bottom Curve Image */}
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                className="absolute bottom-0 left-0 w-full h-auto z-1 pointer-events-none"
              >
                <Image
                  src="/images/project/reading/bottom.svg"
                  alt="Bottom curve"
                  width={1920}
                  height={300}
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Custom Glass Cursor */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: isHovering ? 1 : 0.8,
            opacity: isHovering ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            x: springX,
            y: springY,
          }}
          className="fixed top-0 left-0 w-32 h-32 rounded-full border border-white/40 bg-white/10 backdrop-blur-md shadow-[0_8px_32px_0_rgba(255,255,255,0.15)] pointer-events-none z-[100] flex items-center justify-center text-white z-[200]"
        >
          <span className="text-[12px] font-bold tracking-widest text-center uppercase leading-tight">
            See<br />More
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
