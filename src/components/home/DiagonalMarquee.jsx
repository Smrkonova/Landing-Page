"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";

const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const HorizontalTicker = ({ children, baseVelocity = 100, outline = false }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap w-full">
      <motion.div 
        className="flex whitespace-nowrap flex-nowrap items-center" 
        style={{ x }}
      >
        {[1, 2, 3, 4].map((i) => (
          <span 
            key={i}
            className={`block text-6xl md:text-8xl lg:text-[120px] font-bold uppercase tracking-tighter mr-16 md:mr-24 transition-all duration-300 ${
              outline 
                ? 'text-transparent' 
                : 'text-white'
            }`}
            style={outline ? { WebkitTextStroke: '2px rgba(255,255,255,0.2)' } : {}}
          >
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default function DiagonalMarquee() {
  const containerRef = useRef(null);
  
  return (
    <section ref={containerRef} className="relative w-full py-24 md:py-32 bg-[#0a0a0a] overflow-hidden flex flex-col gap-8 md:gap-12 z-0 border-t border-white/[0.04]">
      
      {/* Strip 1: Solid Dark Text */}
      <div className="w-full rotate-0">
        <HorizontalTicker baseVelocity={-0.5} outline={false}>
          DIGITAL EXCELLENCE ✦
        </HorizontalTicker>
      </div>

      {/* Strip 2: Outline Light Text */}
      <div className="w-full rotate-0">
        <HorizontalTicker baseVelocity={0.5} outline={true}>
          CREATIVE INNOVATION ✦
        </HorizontalTicker>
      </div>

    </section>
  );
}
