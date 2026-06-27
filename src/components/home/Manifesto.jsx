"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const words = "WE DON'T JUST BUILD EXPERIENCES. WE ENGINEER DIGITAL ECOSYSTEMS.".split(" ");

export default function Manifesto() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <motion.div
      ref={containerRef}
      onViewportEnter={() => {
        if (typeof document !== "undefined") {
          document.body.style.backgroundColor = "#ffffff";
        }
      }}
      className="relative w-full h-[200vh] bg-transparent flex items-start justify-center z-10"
    >
      <div className="sticky top-0 w-full h-screen flex items-center justify-center px-4 md:px-16 overflow-hidden">
        
        {/* Subtle Background noise matching Banner */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          />
        </div>

        {/* Text Container */}
        <div className="max-w-7xl w-full flex flex-wrap justify-center gap-x-4 gap-y-2 md:gap-x-8 md:gap-y-4">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
            
            return (
              <motion.span
                key={i}
                style={{ opacity }}
                className="text-[#212121] text-4xl md:text-7xl lg:text-8xl font-black uppercase font-sans tracking-tighter"
              >
                {word}
              </motion.span>
            );
          })}
        </div>

      </div>
    </motion.div>
  );
}
