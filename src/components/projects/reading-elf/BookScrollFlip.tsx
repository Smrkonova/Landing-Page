"use client";

import React, { useRef, useEffect } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";

export default function BookScrollFlip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollYProgress = useMotionValue(0);

  // Custom scroll tracker that perfectly handles DesktopScaler zooming
  // by calculating progress strictly based on viewport bounding rectangles.
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const stickyChild = containerRef.current.firstElementChild as HTMLElement;
      if (!stickyChild) return;

      const stickyRect = stickyChild.getBoundingClientRect();

      // Total scrollable distance inside the container
      const totalScrollable = rect.height - stickyRect.height;
      if (totalScrollable <= 0) return;

      // Current scroll amount (how far the top of the container is above the viewport)
      const scrolled = -rect.top;

      let progress = scrolled / totalScrollable;
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      scrollYProgress.set(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [scrollYProgress]);

  const numFlips = 6;

  return (
    <div ref={containerRef} className="relative w-full z-20" style={{ height: "calc(500vh / var(--desktop-scale, 1))" }}>
      <div className="sticky top-0 w-full flex flex-col items-center justify-center overflow-hidden" style={{ height: "calc(100vh / var(--desktop-scale, 1))" }}>

        {/* Background Image inside the sticky container so it stays fixed while flipping */}


        {/* Book Container */}
        <div className="relative w-full max-w-[1000px] aspect-[1/1.2] md:aspect-[1.5/1] perspective-[2500px] z-10 px-4 md:px-8">

          {/* Base Left (Book 1 Left) */}
          <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden">
            <img src="/images/projects/reading-elf/book/book-1.png" alt="book-1" className="absolute top-0 left-0 w-[200%] h-full max-w-none object-contain" />
          </div>

          {/* Base Right (Book 7 Right) */}
          <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
            {/* The book closes on the left, so the base right is left empty! */}
          </div>

          {/* Flips */}
          {[1, 2, 3, 4, 5, 6].map((i) => {
            const scrollOffset = 0.25; // wait for 25% (after hitting top) to start
            const endOffset = 0.15; // 15% pause delay at end
            const flipDuration = (1 - scrollOffset - endOffset) / numFlips;

            const start = scrollOffset + (i - 1) * flipDuration;
            const end = scrollOffset + i * flipDuration;
            const mid = start + (end - start) / 2;

            // eslint-disable-next-line react-hooks/rules-of-hooks
            const rotateY = useTransform(scrollYProgress, [start, end], [0, -180]);

            // Opacity toggles replace buggy backface-visibility for transparent PNGs
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const frontOpacity = useTransform(scrollYProgress, [start, mid, mid, end], [1, 1, 0, 0]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const backOpacity = useTransform(scrollYProgress, [start, mid, mid, end], [0, 0, 1, 1]);

            // eslint-disable-next-line react-hooks/rules-of-hooks
            const zIndex = useTransform(scrollYProgress,
              [start, mid, mid, end],
              [50 - i, 50 - i, 10 + i, 10 + i]
            );

            return (
              <motion.div
                key={i}
                style={{ rotateY, zIndex }}
                className="absolute top-0 left-[50%] w-1/2 h-full origin-left transform-style-3d"
              >
                {/* Front (Book {i} Right) */}
                <motion.div className="absolute inset-0 overflow-hidden" style={{ opacity: frontOpacity }}>
                  <img src={`/images/projects/reading-elf/book/book-${i}.png`} alt="book-front" className="absolute top-0 left-[-100%] w-[200%] h-full max-w-none object-contain" />
                </motion.div>

                {/* Back (Book {i+1} Left) */}
                <motion.div className="absolute inset-0 overflow-hidden" style={{ opacity: backOpacity, transform: "rotateY(180deg)" }}>
                  <img src={`/images/projects/reading-elf/book/book-${i + 1}.png`} alt="book-back" className={`absolute top-0 left-0 h-full max-w-none object-contain ${i + 1 === 7 ? 'w-full' : 'w-[200%]'}`} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
