"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { drawImageCover, resizeCanvasToElement } from "@/lib/canvas";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 240;

function getFramePath(index) {
  const padded = String(index + 1).padStart(3, "0");
  return `/images/industries/manufacturing/frame/${padded}.webp`;
}

interface ManufacturingScrollCanvasProps {
  badge?: string;
  showBadgeUnderline?: boolean;
  hideDetails?: boolean;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  thinkHeading?: string;
  thinkLines?: string[];
  thinkKeywords?: string[];
}

export default function ManufacturingScrollCanvas({
  badge,
  showBadgeUnderline = true,
  hideDetails = false,
  title,
  subtitle,
  thinkHeading = "HOW SMRKONOVA THINKS",
  thinkLines = [
    "Replace disconnected processes with systems",
    "that gives every team, from marketing to",
    "operational teams the clarity to",
  ],
  thinkKeywords = ["execute", "analyze", "improve", "and scale."],
}: ManufacturingScrollCanvasProps) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const frameIndexRef = useRef(0);
  const rafIdRef = useRef(null);
  const renderQueuedRef = useRef(false);

  const textOverlayRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let isMounted = true;
    let scrollTrigger = null;
    let loadTrigger = null;
    const images = [];
    const INITIAL_FRAMES = 10;
    let hasStartedLoadingRemaining = false;

    const renderFrame = (index) => {
      const image = images[index];
      if (!image?.complete) return;
      drawImageCover(ctx, image, canvas.clientWidth, canvas.clientHeight);
    };

    const scheduleRender = (index) => {
      frameIndexRef.current = index;
      if (renderQueuedRef.current) return;
      renderQueuedRef.current = true;
      rafIdRef.current = requestAnimationFrame(() => {
        renderQueuedRef.current = false;
        renderFrame(frameIndexRef.current);
      });
    };

    const handleResize = () => {
      resizeCanvasToElement(canvas);
      scheduleRender(frameIndexRef.current);
    };

    // 1. Preload only the first 10 frames
    const preloadInitialFrames = () =>
      new Promise<void>((resolve) => {
        let loadedCount = 0;
        for (let i = 0; i < INITIAL_FRAMES; i++) {
          const image = new Image();
          images[i] = image;

          const onLoad = () => {
            loadedCount += 1;
            if (loadedCount === INITIAL_FRAMES) {
              resolve();
            }
          };

          image.addEventListener("load", onLoad);
          image.addEventListener("error", onLoad);
          image.src = getFramePath(i);
        }
      });

    // 2. Load the remaining 230 frames in the background
    const loadRemainingFrames = () => {
      if (hasStartedLoadingRemaining) return;
      hasStartedLoadingRemaining = true;
      
      for (let i = INITIAL_FRAMES; i < TOTAL_FRAMES; i++) {
        const image = new Image();
        images[i] = image;
        image.src = getFramePath(i);
        // We don't need to await these; the browser will cache them 
        // and renderFrame will skip drawing until they are complete.
      }
    };

    const initScrollAnimation = () => {
      resizeCanvasToElement(canvas);
      scheduleRender(0);

      // Trigger animation on scroll
      scrollTrigger = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        onUpdate: (self) => {
          const TEXT_STAY_PHASE = 0.10; 
          const TEXT_FADE_PHASE = 0.10;  
          const ANIM_START_PHASE = TEXT_STAY_PHASE + TEXT_FADE_PHASE; 

          if (textOverlayRef.current) {
            if (self.progress <= TEXT_STAY_PHASE) {
              textOverlayRef.current.style.opacity = 1;
            } else if (self.progress < ANIM_START_PHASE) {
              const fadeProgress = (self.progress - TEXT_STAY_PHASE) / TEXT_FADE_PHASE;
              textOverlayRef.current.style.opacity = Math.max(0, 1 - fadeProgress);
            } else {
              textOverlayRef.current.style.opacity = 0;
            }
          }

          let frameIndex = 0;
          if (self.progress > ANIM_START_PHASE) {
            const animProgress = (self.progress - ANIM_START_PHASE) / (1 - ANIM_START_PHASE);
            frameIndex = Math.min(
              TOTAL_FRAMES - 1,
              Math.floor(animProgress * (TOTAL_FRAMES - 1))
            );
          }
          
          scheduleRender(frameIndex);
        },
      });

      // Trigger background loading of remaining frames when user gets close
      loadTrigger = ScrollTrigger.create({
        trigger: container,
        start: "top 200%", // Starts loading when the section is 2 viewport heights away
        once: true,
        onEnter: () => loadRemainingFrames(),
      });
    };

    preloadInitialFrames().then(() => {
      if (!isMounted) return;
      setIsLoading(false);
      initScrollAnimation();
      ScrollTrigger.refresh();
    });

    window.addEventListener("resize", handleResize);

    return () => {
      isMounted = false;
      window.removeEventListener("resize", handleResize);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
      scrollTrigger?.kill();
      loadTrigger?.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full relative" style={{ height: "calc(400vh / var(--desktop-scale, 1))" }}>
      <div className="sticky top-0 w-full overflow-hidden flex justify-center items-center" style={{ height: "calc(100vh / var(--desktop-scale, 1))" }}>
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
          aria-hidden="true"
        />

        {/* Text Overlay for First Frame */}
        <motion.div 
          ref={textOverlayRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
          }}
          className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-start max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-16 pt-12 md:pt-16 space-y-6 md:space-y-8"
        >
          {/* Badge if provided (e.g. MAKE THE SHIFT) */}
          {badge && (
            <div className="overflow-hidden">
              <motion.div
                variants={{ hidden: { y: "110%" }, visible: { y: "0%", transition: { duration: 0.6 } } }}
                className="inline-block"
              >
                <span
                  className={`text-[clamp(1.125rem,2.2vw+0.5rem,2rem)] font-black uppercase tracking-wider text-black ${
                    showBadgeUnderline ? "border-b-[4px] border-[#0091ff] pb-1" : ""
                  }`}
                >
                  {badge}
                </span>
              </motion.div>
            </div>
          )}

          {/* Top Heading */}
          {title ? (
            <div className="text-center md:text-left text-[clamp(1.25rem,2.8vw+0.5rem,3rem)] leading-[1.2] tracking-tight uppercase text-[#777] font-light max-w-4xl">
              {title}
            </div>
          ) : (
            <h2 className="text-center md:text-left text-[clamp(1.5rem,3.5vw+0.5rem,3.5rem)] leading-[1.2] md:leading-[1.1] tracking-normal uppercase text-[#111]">
                <div className="overflow-hidden pb-2"><motion.span variants={{ hidden: { y: "110%" }, visible: { y: "0%", transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } } }} className="inline-block font-extrabold">BUILD</motion.span> <motion.span variants={{ hidden: { y: "110%" }, visible: { y: "0%", transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } } }} className="inline-block font-light text-[#777]">360-DEGREE</motion.span> <motion.span variants={{ hidden: { y: "110%" }, visible: { y: "0%", transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } } }} className="inline-block font-extrabold">SYSTEMS</motion.span></div>
                <div className="overflow-hidden pb-2"><motion.span variants={{ hidden: { y: "110%" }, visible: { y: "0%", transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } } }} className="inline-block font-extrabold">THAT</motion.span> <motion.span variants={{ hidden: { y: "110%" }, visible: { y: "0%", transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } } }} className="inline-block font-light text-[#777]">NURTURE AND</motion.span> <motion.span variants={{ hidden: { y: "110%" }, visible: { y: "0%", transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } } }} className="inline-block font-extrabold">GROW YOUR</motion.span></div>
                <div className="overflow-hidden pb-2"><motion.span variants={{ hidden: { y: "110%" }, visible: { y: "0%", transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } } }} className="inline-block font-light text-[#777]">MANUFACTURING</motion.span> <motion.span variants={{ hidden: { y: "110%" }, visible: { y: "0%", transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } } }} className="inline-block font-extrabold">BUSINESS</motion.span></div>
            </h2>
          )}

          {/* Middle Content Grid */}
          {!hideDetails && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-start pt-2 md:pt-4 text-center md:text-left">
                <div className="text-[clamp(1.125rem,2vw+0.5rem,2rem)] leading-[1.3] font-light text-[#999] uppercase tracking-wide">
                    {subtitle ? (
                      subtitle
                    ) : (
                      <>
                        <div className="overflow-hidden"><motion.div variants={{ hidden: { y: "110%" }, visible: { y: "0%", transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } } }}>SCALE SYSTEMS THAT</motion.div></div>
                        <div className="overflow-hidden"><motion.div variants={{ hidden: { y: "110%" }, visible: { y: "0%", transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } } }}>RUN YOUR BUSINESS.</motion.div></div>
                      </>
                    )}
                </div>

                <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-6 max-w-sm mx-auto md:mx-0 pt-2">
                    <div className="overflow-hidden">
                      <motion.h3 variants={{ hidden: { y: "110%" }, visible: { y: "0%", transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } } }} className="text-[clamp(9px,0.4vw+4px,11px)] font-bold uppercase tracking-widest text-black">
                          {thinkHeading}
                      </motion.h3>
                    </div>
                    <div className="text-[clamp(11px,0.4vw+5px,13px)] text-[#666] leading-loose">
                        {thinkLines.map((line, idx) => (
                          <div key={idx} className="overflow-hidden">
                            <motion.div variants={{ hidden: { y: "110%" }, visible: { y: "0%", transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } } }}>
                              {line}
                            </motion.div>
                          </div>
                        ))}
                        <span className="block mt-4 font-medium text-black">
                            {thinkKeywords.map((kw, idx) => (
                              <div key={idx} className="overflow-hidden">
                                <motion.div variants={{ hidden: { y: "110%" }, visible: { y: "0%", transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } } }}>
                                  {kw}
                                </motion.div>
                              </div>
                            ))}
                        </span>
                    </div>
                </div>
            </div>
          )}
        </motion.div>

        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#f8f9fa] z-30">
            <p className="text-gray-500 font-medium tracking-widest text-sm uppercase">
              Loading...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
