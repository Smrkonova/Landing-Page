"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const processes = [
  { id: 1, title: "UNDERSTAND", desc: "Understanding your brand vision, target audience and creative objectives.", img: "/images/industries/manufacturing/process/1.png" },
  { id: 2, title: "CONCEPT", desc: "Exploring creative themes, artistic directions and visual treatments.", img: "/images/industries/manufacturing/process/2.png" },
  { id: 3, title: "STORYBOARD", desc: "Mapping scene-by-scene progression, narrative flow and visual timing.", img: "/images/industries/manufacturing/process/3.png" },
  { id: 4, title: "DESIGN", desc: "Crafting high-fidelity styleframes, 3D models, textures and graphic assets.", img: "/images/industries/manufacturing/process/1.png" },
  { id: 5, title: "ANIMATE", desc: "Bringing designs to life with fluid motion, dynamic lighting and rendering.", img: "/images/industries/manufacturing/process/2.png" },
  { id: 6, title: "REVIEW", desc: "Collaborative feedback, fine-tuning visual details and audio mastering.", img: "/images/industries/manufacturing/process/3.png" },
  { id: 7, title: "DELIVER", desc: "Exporting production-ready video files, web assets and source deliverables.", img: "/images/industries/manufacturing/process/1.png" },
];

export default function ProcessScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;

      if (scrollableDistance <= 0) return;

      if (rect.top > 0) {
        setActiveIndex((prev) => (prev !== 0 ? 0 : prev));
        return;
      }

      if (rect.bottom <= window.innerHeight) {
        const lastIndex = processes.length - 1;
        setActiveIndex((prev) => (prev !== lastIndex ? lastIndex : prev));
        return;
      }

      let progress = -rect.top / scrollableDistance;
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      const progressChunks = processes.length;
      let index = Math.floor(progress * progressChunks);
      if (index >= progressChunks) index = progressChunks - 1;
      if (index < 0) index = 0;

      setActiveIndex((prev) => (prev !== index ? index : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    let lenisUnsub: (() => void) | null = null;
    const lenis = (window as any).__lenis;
    if (lenis && typeof lenis.on === "function") {
      lenis.on("scroll", handleScroll);
      lenisUnsub = () => lenis.off("scroll", handleScroll);
    } else {
      const timer = setTimeout(() => {
        const l = (window as any).__lenis;
        if (l && typeof l.on === "function") {
          l.on("scroll", handleScroll);
          lenisUnsub = () => l.off("scroll", handleScroll);
        }
      }, 300);
    }

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (lenisUnsub) lenisUnsub();
    };
  }, []);

  const handleItemClick = (targetIndex: number) => {
    setActiveIndex(targetIndex);
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const scrollableDistance = rect.height - window.innerHeight;
    if (scrollableDistance <= 0) return;

    const targetProgress = (targetIndex + 0.5) / processes.length;
    const sectionPhysicalTop = window.scrollY + rect.top;
    const targetScrollY = sectionPhysicalTop + (scrollableDistance * targetProgress);

    const lenis = (window as any).__lenis;
    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(targetScrollY, { duration: 0.8 });
    } else {
      window.scrollTo({ top: targetScrollY, behavior: "smooth" });
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-black flex justify-center"
      style={{ height: "calc(450vh / var(--desktop-scale, 1))" }}
    >
      {/* Sticky container matching DesktopScaler viewport height */}
      <div 
        className="sticky top-0 w-full flex items-center justify-center overflow-hidden bg-black"
        style={{ height: "calc(100vh / var(--desktop-scale, 1))" }}
      >

        {/* ===== MOBILE LAYOUT (<md, 390px base in DesktopScaler) ===== */}
        <div className="md:hidden relative w-full max-w-[390px] h-full flex items-center justify-center overflow-hidden">
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
                      className="object-cover object-[70%_center]"
                    />
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

          {/* Centered Frosted Glass Container */}
          <div 
            className="relative z-10 w-[350px] h-[520px] mx-auto rounded-[28px] overflow-hidden flex flex-col justify-between p-6 sm:p-7"
            style={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "rgba(255, 255, 255, 0.25)",
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(20, 30, 42, 0.35) 100%)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6), inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)",
            }}
          >
            {/* Ambient Glow */}
            <div 
              className="absolute -bottom-10 -left-10 w-[220px] h-[220px] rounded-full pointer-events-none z-0"
              style={{
                background: "radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, rgba(147, 51, 234, 0.12) 45%, transparent 70%)",
                filter: "blur(30px)",
              }}
            />

            {/* Top Label */}
            <div className="z-10">
              <h4 
                className="text-[13px] font-[400] text-white/70 tracking-[0.2em] uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                OUR PROCESS
              </h4>
            </div>

            {/* Middle Scrolling Text List */}
            <div className="relative z-10 w-full h-[360px] flex items-center overflow-hidden">
              <div className="relative w-full h-full flex items-center">
                {processes.map((process, index) => {
                  const offset = index - activeIndex;
                  const isVisible = Math.abs(offset) <= 1;
                  const isCenter = offset === 0;

                  return (
                    <motion.div
                      key={`mob-${process.id}`}
                      initial={false}
                      animate={{
                        y: offset * 115,
                        opacity: isCenter ? 1 : isVisible ? 0.35 : 0,
                        scale: isCenter ? 1 : 0.88,
                      }}
                      transition={{
                        duration: 0.45,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      className="absolute left-0 w-full cursor-pointer select-none origin-left"
                      style={{ pointerEvents: isVisible ? "auto" : "none" }}
                      onClick={() => handleItemClick(index)}
                    >
                      <h2
                        className="font-[900] tracking-tight uppercase leading-[0.95]"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: isCenter ? "38px" : "32px",
                          color: isCenter ? "#FFFFFF" : "rgba(255, 255, 255, 0.35)",
                        }}
                      >
                        {process.title}
                      </h2>
                      <p
                        className="tracking-wide whitespace-pre-line leading-relaxed font-sans"
                        style={{
                          fontSize: "13px",
                          fontWeight: 300,
                          marginTop: isCenter ? "8px" : "4px",
                          color: isCenter ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.35)",
                        }}
                      >
                        {process.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom spacer */}
            <div className="z-10" />
          </div>
        </div>

        {/* ===== DESKTOP LAYOUT (>=md, 1440px base in DesktopScaler) ===== */}
        <div className="hidden md:block relative overflow-hidden w-full h-full">
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
                      className="object-cover object-[70%_center]"
                      priority
                    />
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

          {/* Left Glass Container - Exact Fixed Width Floating Box */}
          <div 
            className="absolute z-10 flex flex-col justify-between overflow-hidden w-[820px] lg:w-[740px] xl:w-[610px] h-[780px] lg:h-[720px] xl:h-[618px]"
            style={{ 
              left: "65px",
              top: "50%",
              transform: "translateY(-50%)",
              opacity: 1,
              borderRadius: "19px",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "rgba(255, 255, 255, 0.22)",
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(31, 29, 29, 0.2) 80%)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.54), inset 0 1px 1px 0 rgba(255, 255, 255, 0.13)",
            }}
          >
            {/* Ambient Glow at Bottom Left of Glass Box */}
            <div 
              className="absolute -bottom-16 -left-16 w-[340px] h-[340px] rounded-full pointer-events-none z-10"
              style={{
                background: "radial-gradient(circle, rgba(168, 85, 247, 0.38) 0%, rgba(147, 51, 234, 0.15) 45%, transparent 70%)",
                filter: "blur(35px)",
              }}
            />

            {/* Top Label */}
            <div className="pt-12 pl-12 pr-12 z-20">
              <h4 
                className="text-[14px] font-[400] text-white/70 tracking-[0.2em] uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                OUR PROCESS
              </h4>
            </div>

            {/* Middle Scrolling Text List (Centered inside card) */}
            <div className="relative flex-grow flex items-center pl-12 pr-14 z-20">
              <div className="relative w-full h-[440px] lg:h-[390px] xl:h-[360px] flex items-center">
                {processes.map((process, index) => {
                  const offset = index - activeIndex;
                  const isVisible = Math.abs(offset) <= 1;
                  const isCenter = offset === 0;

                  return (
                    <motion.div
                      key={process.id}
                      initial={false}
                      animate={{
                        y: offset * 140,
                        opacity: isCenter ? 1 : isVisible ? 0.38 : 0,
                        scale: isCenter ? 1 : 0.88,
                      }}
                      transition={{
                        duration: 0.45,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      className="absolute left-0 w-full cursor-pointer select-none origin-left"
                      style={{ pointerEvents: isVisible ? "auto" : "none" }}
                      onClick={() => handleItemClick(index)}
                    >
                      <h2
                        className="font-[900] tracking-tight uppercase transition-colors duration-300 leading-[0.95]"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: isCenter ? "56px" : "40px",
                          color: isCenter ? "#FFFFFF" : "rgba(255, 255, 255, 0.38)",
                        }}
                      >
                        {process.title}
                      </h2>
                      <p
                        className="tracking-wide whitespace-pre-line leading-relaxed transition-colors duration-300"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "13px",
                          fontWeight: 300,
                          marginTop: isCenter ? "10px" : "6px",
                          color: isCenter ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.35)",
                        }}
                      >
                        {process.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom spacer */}
            <div className="pb-10 pl-12 pr-12 z-20" />

          </div>
        </div>
      </div>
    </section>
  );
}
