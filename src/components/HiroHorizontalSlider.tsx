"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion, useTransform, useMotionValue, useMotionValueEvent, MotionValue, useSpring } from 'framer-motion';

const AnimatedMapRoute = ({ progress }: { progress: MotionValue<number> }) => {
  const pathRef = useRef<SVGPathElement>(null);

  // Smooth the raw scroll value so the dot glides fluidly
  const smoothProgress = useSpring(progress, { stiffness: 50, damping: 15, mass: 0.5 });

  const cx = useTransform(smoothProgress, (latest) => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      const clamped = Math.max(0, Math.min(1, latest));
      return pathRef.current.getPointAtLength(clamped * length).x;
    }
    return 65;
  });

  const cy = useTransform(smoothProgress, (latest) => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      const clamped = Math.max(0, Math.min(1, latest));
      return pathRef.current.getPointAtLength(clamped * length).y;
    }
    return 140;
  });

  return (
    <div className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] xl:w-[240px] xl:h-[240px] relative flex items-center justify-center opacity-90 transition-transform hover:scale-105">
      <svg className="w-full h-full absolute inset-0 z-10" viewBox="0 0 200 200" fill="none">

        {/* Background City Streets Simulation */}
        <g stroke="#ffffff" strokeWidth="0.2" strokeOpacity="0.08" strokeLinecap="round" strokeLinejoin="round">
          {/* Horizontal-ish roads */}
          <path d="M -10 20 Q 50 10 100 30 T 210 20 M -10 40 Q 30 50 80 40 T 210 50 M -10 60 Q 60 80 120 60 T 210 70 M -10 90 Q 40 80 100 100 T 210 90 M -10 120 Q 50 130 90 110 T 210 130 M -10 150 Q 70 140 130 160 T 210 150 M -10 180 Q 40 190 100 170 T 210 180" />
          {/* Vertical-ish roads */}
          <path d="M 20 -10 Q 10 50 30 100 T 20 210 M 40 -10 Q 50 40 40 90 T 50 210 M 70 -10 Q 60 60 80 120 T 70 210 M 100 -10 Q 110 50 90 100 T 100 210 M 130 -10 Q 120 60 140 120 T 130 210 M 160 -10 Q 170 50 150 100 T 160 210 M 180 -10 Q 170 60 190 120 T 180 210" />
          {/* Diagonal intersecting roads */}
          <path d="M 10 10 L 190 190 M 190 10 L 10 190 M 50 0 L 200 150 M 0 50 L 150 200 M 150 0 L 0 150 M 200 50 L 50 200" />
        </g>

        {/* Main Yellow Route Path */}
        <path ref={pathRef} id="active-route" d="M 65 140 C 40 140, 45 110, 55 95 C 65 80, 80 100, 95 90 C 110 80, 105 50, 125 45 C 145 40, 175 40, 175 55 C 175 70, 145 65, 125 75 C 105 85, 120 115, 100 125 C 80 135, 90 140, 65 140 Z" stroke="#FFC700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

        {/* Blue Dot Animating Along the Route based on scroll */}
        <motion.circle cx={cx} cy={cy} r="3.5" fill="#3b82f6" className="drop-shadow-[0_0_8px_rgba(59,130,246,1)]" />

        {/* Text "ACTIVE" */}
        <text x="45" y="170" fill="#FFC700" fontSize="11" fontFamily="sans-serif" fontWeight="300" letterSpacing="1">ACTIVE</text>
      </svg>
    </div>
  );
};

export const HiroHorizontalSlider = ({ children }: { children: React.ReactNode }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Create motion values
  const scrollYProgress = useMotionValue(0);
  const enterProgress = useMotionValue(0); // 0 = below viewport, 1 = stuck at top

  // Custom precise scroll listener that works flawlessly even when DesktopScaler transforms the page
  useEffect(() => {
    const handleScroll = () => {
      if (!targetRef.current) return;

      const rect = targetRef.current.getBoundingClientRect();

      // If the top of the section is below the top of the viewport, it hasn't stuck yet.
      if (rect.top > 0) {
        let p = 1 - (rect.top / window.innerHeight);
        if (p < 0) p = 0;
        enterProgress.set(p);
        scrollYProgress.set(0);
        return;
      }

      enterProgress.set(1);

      const scrollableDistance = rect.height - window.innerHeight;

      if (scrollableDistance <= 0) return;

      // Progress is how far the top has moved past 0, divided by the total scrollable distance.
      let progress = -rect.top / scrollableDistance;

      // Clamp progress between 0 and 1
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      scrollYProgress.set(progress);
    };

    // Use passive listener for smooth performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [scrollYProgress]);

  // Auto-snap logic to prevent getting stuck between slides
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScrollSnap = () => {
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        if (!targetRef.current) return;

        const rect = targetRef.current.getBoundingClientRect();

        // Check if we are currently inside the slider (top is at or above viewport, bottom is at or below viewport)
        if (rect.top <= 0 && rect.bottom > window.innerHeight) {
          const scrollableDistance = rect.height - window.innerHeight;
          const currentProgress = -rect.top / scrollableDistance;

          // Only snap if we're not exactly at the start or end
          if (currentProgress > 0 && currentProgress < 1) {
            // Find the nearest slide index (0 to 5)
            const nearestIndex = Math.round(currentProgress * 5);
            const targetProgress = nearestIndex / 5;

            // Calculate the exact physical scroll position for this slide
            const sectionPhysicalTop = window.scrollY + rect.top;
            const targetScroll = sectionPhysicalTop + (scrollableDistance * targetProgress);

            // Only scroll if we are noticeably off-center (prevents micro-jitters)
            if (Math.abs(window.scrollY - targetScroll) > 5) {
              window.scrollTo({ top: targetScroll, behavior: 'smooth' });
            }
          }
        }
      }, 150); // Wait 150ms after scroll stops to trigger snap
    };

    window.addEventListener("scroll", handleScrollSnap, { passive: true });
    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScrollSnap);
    };
  }, []);

  // Update the activeIndex state (for the pagination dots) whenever the progress changes
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.round(latest * 5);
    setActiveIndex(index);
  });

  // Dynamic map position transforms based on enterProgress!
  // Outer wrapper handles screen movement
  // mapY uses vh so it ignores the scaled container height, placing it exactly 10vh above the container.
  const mapY = useTransform(enterProgress, [0, 1], ["-100vh", "0vh"]);
  // mapX starts at 38vw instead of 50vw to visually center the asymmetrical SVG drawing!
  const mapX = useTransform(enterProgress, [0, 1], ["38vw", "0vw"]);
  // scale is 2.5 for maximum visual impact
  const mapScale = useTransform(enterProgress, [0, 1], [2.5, 1]);

  // Inner wrapper handles self-centering offset which smoothly resolves to 0 when stuck
  const mapCenterX = useTransform(enterProgress, [0, 1], ["-50%", "0%"]);
  const mapCenterY = useTransform(enterProgress, [0, 1], ["50%", "0%"]);

  return (
    <section ref={targetRef} className="relative bg-[#111111]" style={{ height: "calc(600vh / var(--desktop-scale, 1))" }}>
      <div
        className="sticky top-0 w-full border-t border-white/5 bg-[#111111]"
        style={{ height: "calc(100vh / var(--desktop-scale, 1))" }}
      >

        {/* The Animated Map that flies from the center into the bottom left corner */}
        <motion.div
          className="absolute bottom-0 left-0 z-[100] pointer-events-none origin-bottom-left"
          style={{ y: mapY, x: mapX, scale: mapScale }}
        >
          <motion.div style={{ x: mapCenterX, y: mapCenterY }}>
            <AnimatedMapRoute progress={scrollYProgress} />
          </motion.div>
        </motion.div>

        <div className="pointer-events-auto flex items-center lg:items-start justify-end gap-6 absolute top-8 right-8 xl:top-12 xl:right-12 z-[100]">
          <div className="flex flex-col gap-3 text-[clamp(10px,0.6vw+4px,12px)] font-bold text-gray-500 tracking-widest text-right">
            <p>REWARDS <span className="text-[#FFC700]">₹567</span></p>
            <p>MISSIONS <span className="text-[#FFC700]">4</span></p>
            <p>NEXT Pick UP <span className="text-[#FFC700]">2.3KM</span></p>
          </div>
          <svg width="24" height="80" viewBox="0 0 24 80" fill="none" className="opacity-50 hidden md:block">
            <path d="M24 0 L0 40 L24 80" stroke="#666666" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>

        <div className="absolute bottom-8 xl:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-[100] pointer-events-auto">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={activeIndex === i ? 'h-2 w-8 bg-[#FFC700] rounded-full cursor-pointer transition-all duration-300' : 'h-2 w-4 bg-gray-700 hover:bg-gray-500 rounded-full cursor-pointer transition-all duration-300'}
              onClick={() => {
                if (targetRef.current) {
                  const rect = targetRef.current.getBoundingClientRect();
                  const sectionPhysicalTop = window.scrollY + rect.top;
                  const scrollableDistance = rect.height - window.innerHeight;
                  const targetScroll = sectionPhysicalTop + (scrollableDistance * (i / 5));
                  window.scrollTo({ top: targetScroll, behavior: 'smooth' });
                }
              }}
            ></div>
          ))}
        </div>

        <div className="w-full h-full overflow-hidden flex items-center">
          <motion.div
            animate={{ x: `-${(activeIndex / 6) * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.8 }}
            className="flex w-[600%] h-full items-center"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
