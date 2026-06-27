"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Database, Server, Activity, Shield, Globe, Cpu, Layers, Terminal, X } from "lucide-react";

import About from "@/components/home/About";
import GrowthMap from "@/components/home/GrowthMap";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Services from "@/components/home/Services";
import Projects from "@/components/home/Projects";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import StatsBento from "@/components/home/StatsBento";
import DiagonalMarquee from "@/components/home/DiagonalMarquee";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const OrbitingNode = ({ icon: Icon, angle, radius, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 pointer-events-none"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.8, type: "spring" }}
      style={{
        width: radius * 2,
        height: radius * 2,
        marginLeft: -radius,
        marginTop: -radius,
        rotate: angle,
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="w-full h-full absolute top-0 left-0"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto group" style={{ perspective: 800 }}>
          <motion.div
            animate={{
              rotate: -360,
              rotateY: isHovered ? 360 : 0,
              scale: isHovered ? 1.15 : 1
            }}
            transition={{
              rotate: { repeat: Infinity, duration: 60, ease: "linear" },
              rotateY: isHovered ? { repeat: Infinity, duration: 2, ease: "linear" } : { type: "spring", stiffness: 300, damping: 30 },
              scale: { type: "spring", stiffness: 400, damping: 20 }
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative flex items-center justify-center w-24 h-24 md:w-28 md:h-28 bg-white/80 dark:bg-[#161617]/80 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-full shadow-lg cursor-pointer transition-colors"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Icon className="w-8 h-8 md:w-10 md:h-10 text-black dark:text-white group-hover:scale-110 transition-transform duration-300" />

            {/* Magnetic Glow Effect */}
            <div className={`absolute inset-0 bg-white/50 blur-xl rounded-full transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Home() {
  const [stage, setStage] = useState(3);

  const scrollWrapperRef = useRef(null);
  const containerRef = useRef(null);
  const heroContentRef = useRef(null);
  const orbitContainerRef = useRef(null);
  const nextSectionRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(smoothMouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const hX = e.clientX - (rect.left + rect.width / 2);
      const hY = e.clientY - (rect.top + rect.height / 2);
      mouseX.set(hX * 0.3);
      mouseY.set(hY * 0.3);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };



  useGSAP(() => {
    if (stage < 3) return;

    // By setting pinSpacing: false, the next sections will slide UP over this hero section
    // creating a beautiful "reveal" effect while allowing normal page scrolling.
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollWrapperRef.current,
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
        pinSpacing: false, // The magic property that creates the slide-over reveal
      }
    });

    // 1. Hero Content scales down and fades out
    tl.fromTo(heroContentRef.current,
      { scale: 1, opacity: 1, y: 0 },
      { scale: 0.85, opacity: 0, y: -50, ease: "none" },
      0);

    // 2. Orbit Rings & Icons scale UP and fade out
    tl.fromTo(orbitContainerRef.current,
      { scale: 1, opacity: 1 },
      { scale: 1.5, opacity: 0, ease: "none" },
      0);

    // 3. Reveal the Next Section
    tl.fromTo(nextSectionRef.current,
      { opacity: 0, pointerEvents: "none" },
      { opacity: 1, pointerEvents: "auto", ease: "none" },
      0.3);

  }, { dependencies: [stage], scope: scrollWrapperRef });

  return (
    <div className="relative w-full bg-[#0a0a0a]">
      {/* Main Wrapper - Pins the whole page temporarily */}
      <div ref={scrollWrapperRef} className="relative w-full z-0 bg-black">

        {/* The Hero Canvas (100vh) */}
        <div className="relative w-full h-screen overflow-hidden">
          {/* Canvas Registration Marks (Corners) */}
          <div className={`absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-black/20 dark:border-white/20 pointer-events-none transition-opacity duration-1000 ${stage >= 3 ? "opacity-100" : "opacity-0"}`}></div>
          <div className={`absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-black/20 dark:border-white/20 pointer-events-none transition-opacity duration-1000 ${stage >= 3 ? "opacity-100" : "opacity-0"}`}></div>
          <div className={`absolute bottom-8 left-8 w-6 h-6 border-b-2 border-l-2 border-black/20 dark:border-white/20 pointer-events-none transition-opacity duration-1000 ${stage >= 3 ? "opacity-100" : "opacity-0"}`}></div>
          <div className={`absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-black/20 dark:border-white/20 pointer-events-none transition-opacity duration-1000 ${stage >= 3 ? "opacity-100" : "opacity-0"}`}></div>

          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`absolute inset-0 w-full h-full flex items-center justify-center transition-colors duration-2000 ${stage >= 3 ? "bg-white dark:bg-[#0a0a0a]" : "bg-black"}`}
            style={{ perspective: 1200 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key="hero-content"
                className="absolute inset-0 flex flex-col items-center justify-center w-full max-w-5xl mx-auto text-center px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >

                {/* Parallax Container for Rings and Icons */}
                <motion.div
                  ref={orbitContainerRef}
                  className="absolute inset-0 z-0 pointer-events-none"
                  style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                >
                  {/* Animated Rings/Orbits Background */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] border rounded-full transition-colors duration-1000 ${stage >= 3 ? "border-black/[0.04] dark:border-white/[0.04]" : "border-transparent"}`}></div>
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] border rounded-full transition-colors duration-1000 ${stage >= 3 ? "border-black/[0.04] dark:border-white/[0.04]" : "border-transparent"}`}></div>

                  {/* Orbiting Icons on Outer Ring */}
                  {stage >= 3 && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                      <OrbitingNode icon={Database} angle={0} radius={320} delay={0.1} />
                      <OrbitingNode icon={Cpu} angle={45} radius={320} delay={0.2} />
                      <OrbitingNode icon={Globe} angle={90} radius={320} delay={0.3} />
                      <OrbitingNode icon={Server} angle={135} radius={320} delay={0.4} />
                      <OrbitingNode icon={Activity} angle={180} radius={320} delay={0.5} />
                      <OrbitingNode icon={Shield} angle={225} radius={320} delay={0.6} />
                      <OrbitingNode icon={Layers} angle={270} radius={320} delay={0.7} />
                      <OrbitingNode icon={Terminal} angle={315} radius={320} delay={0.8} />
                    </div>
                  )}
                </motion.div>

                {/* Central Content */}
                <motion.div
                  ref={heroContentRef}
                  className="relative z-20 flex flex-col items-center pointer-events-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: stage >= 3 ? 1 : 0, y: stage >= 3 ? 0 : 20 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  {/* Top Logo / Icon from Reference */}
                  <div className="mb-4 flex gap-1.5 items-center justify-center opacity-80">
                    <div className="w-2.5 h-6 bg-black dark:bg-white skew-x-[-15deg]"></div>
                    <div className="w-2.5 h-6 bg-black dark:bg-white skew-x-[-15deg]"></div>
                    <div className="w-2.5 h-6 bg-black dark:bg-white skew-x-[-15deg]"></div>
                  </div>

                  <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-black dark:text-white max-w-xl mx-auto leading-tight flex flex-col items-center justify-center gap-y-2 uppercase">
                    <span>FULL-SCALE DIGITAL PRODUCTS</span>
                    <span className="font-light tracking-wide text-gray-500 dark:text-gray-300 text-center text-sm md:text-lg lg:text-xl">DESIGNED. DEVELOPED. ENGINEERED TO</span>
                    <span className="text-center">SCALE MODERN BUSINESSES.</span>
                  </h1>

                  <p className="mt-6 text-xs md:text-sm font-mono tracking-widest text-gray-500 dark:text-gray-400 max-w-[600px] mx-auto leading-relaxed uppercase flex flex-wrap justify-center gap-4">
                    <span>Platforms</span> • <span>Applications</span> • <span>Marketing</span> • <span>Automation</span>
                  </p>

                  <button className="mt-10 px-8 py-3.5 text-xs font-mono tracking-widest text-black dark:text-white border border-dashed border-black/30 dark:border-white/30 hover:bg-black/5 dark:hover:bg-white/5 transition-colors uppercase cursor-pointer">
                    START JOURNEY
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* The rest of the page flows naturally after the pinned hero. 
          This ensures all internal GSAP scroll triggers (like the About text reveal) work flawlessly. */}
      <div ref={nextSectionRef} className="relative z-10 w-full opacity-0 pointer-events-none">
        <About />
        <GrowthMap />
        <StatsBento />
        <DiagonalMarquee />
        <WhyChooseUs />
        <Services />
        <Projects />
        <Process />
        <CTA />
      </div>

    </div>
  );
}
