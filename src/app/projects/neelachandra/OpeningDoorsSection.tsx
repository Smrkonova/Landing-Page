"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function OpeningDoorsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Custom motion value tracking exact pinned scroll progress via getBoundingClientRect
  const scrollProgress = useMotionValue(0);

  useEffect(() => {
    const updateProgress = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // When the top of the section has not yet reached the top of the viewport (rect.top > 0),
      // the section is still scrolling into view -> progress is strictly 0 (doors 100% closed).
      if (rect.top > 0) {
        scrollProgress.set(0);
        return;
      }

      const scrollableDistance = rect.height - viewportHeight;
      if (scrollableDistance <= 0) {
        scrollProgress.set(0);
        return;
      }

      // Progress is strictly measured once the section is pinned at top: 0
      const scrolled = -rect.top;
      const p = Math.min(1, Math.max(0, scrolled / scrollableDistance));
      scrollProgress.set(p);
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    updateProgress();

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [scrollProgress]);

  // Green doors stay 100% CLOSED (0% width) while entering and for the first 15% of pinned full view,
  // then smoothly expand from center seam to 100% width.
  const stripeWidth = useTransform(scrollProgress, [0, 0.15, 0.65, 1], ["0%", "0%", "100%", "100%"]);

  // Mobile stays completely off-screen below (90vh) until doors start opening, then rises to center (0vh)
  const phoneY = useTransform(scrollProgress, [0, 0.18, 0.65, 1], ["90vh", "90vh", "0vh", "0vh"]);
  const phoneScale = useTransform(scrollProgress, [0, 0.18, 0.65, 1], [0.85, 0.85, 1, 1]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#F48120] overflow-x-clip"
      style={{ height: "calc(500vh / var(--desktop-scale, 1))" }}
    >
      {/* Sticky container pins to the viewport during the scroll with increased container size */}
      <div
        className="sticky top-0 w-full overflow-hidden flex flex-col items-center justify-between h-screen md:h-[calc(115vh/var(--desktop-scale,1))] md:min-h-[860px]"
      >

        {/* Animated Green Doors - Starts at 0% (fully closed, solid orange) and opens from center seam */}
        <motion.div
          style={{ width: stripeWidth, left: "50%", x: "-50%" }}
          className="absolute top-0 bottom-0 bg-[#5F873D] z-0"
        />

        {/* Content Container (Title & Subtitle) - Stays 100% visible at all times */}
        <div
          className="relative z-20 w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col items-center text-center pt-6 md:pt-8"
        >
          <h2
            className="font-['Inter',sans-serif] uppercase text-white"
            style={{
              fontWeight: 200,
              fontSize: "clamp(2rem, 4.2vw, 76px)",
              lineHeight: "clamp(2rem, 4.2vw, 74px)",
              letterSpacing: "1.73px",
              textAlign: "center",
            }}
          >
            Opening
          </h2>
          <h2
            className="font-['Inter',sans-serif] uppercase text-white mb-2 md:mb-3"
            style={{
              fontWeight: 900,
              fontSize: "clamp(2rem, 4.2vw, 76px)",
              lineHeight: "clamp(2rem, 4.2vw, 74px)",
              letterSpacing: "1.73px",
              textAlign: "center",
            }}
          >
            The Doors
          </h2>
          <p
            className="font-['Inter',sans-serif] text-white/95 max-w-[640px]"
            style={{
              fontWeight: 300,
              fontSize: "clamp(12px, 1.05vw, 16px)",
              lineHeight: "clamp(18px, 1.5vw, 24px)",
              letterSpacing: "0px",
              textAlign: "center",
            }}
          >
            The most tricky part of the job is to unblock an already blocked GMB and strengthen it. That's what we worked towards, ensuring the brand shows up correctly where customers were looking.
          </p>
        </div>

        {/* City Skyline Reflection - 40px margin on left and right, moved 80px down */}
        <div 
          className="absolute -bottom-[80px] left-0 right-0 px-[40px] flex justify-center items-end pointer-events-none z-10"
        >
          <img 
            src="/images/projects/neelachandra/opening.png" 
            alt="City Skyline Reflection" 
            className="w-full h-auto object-contain object-bottom"
          />
        </div>

        {/* Mobile Phone Mockup - Stays hidden off-screen, reveals to center on scroll */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 overflow-hidden">
          <motion.div
            style={{ y: phoneY, scale: phoneScale }}
            className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[480px] px-4 flex justify-center"
          >
            <img
              src="/images/projects/neelachandra/phone.png"
              alt="Neelachandra Google My Business Mobile View"
              className="w-full h-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.45)]"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
