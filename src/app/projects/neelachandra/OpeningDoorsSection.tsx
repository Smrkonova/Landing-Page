"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function OpeningDoorsSection() {
  const containerRef = useRef(null);
  
  // Track scroll progress within this 200vh section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // The green door starts at 0% width (fully hidden) and expands to cover the whole screen
  const stripeWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // Expanding from the center
  const stripeLeft = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#F48120]" style={{ height: "calc(200vh / var(--desktop-scale, 1))" }}>
      {/* Sticky container pins to the viewport during the scroll */}
      <div 
        className="sticky top-0 w-full overflow-hidden flex flex-col items-center"
        style={{ height: "calc(100vh / var(--desktop-scale, 1))" }}
      >
        
        {/* Animated Green Stripe */}
        <motion.div 
          style={{ width: stripeWidth, left: stripeLeft }}
          className="absolute top-0 bottom-0 bg-[#5F873D] z-0" 
        />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col items-center text-center h-full pt-12 md:pt-16 pb-0">
          
          <h2 className="text-[clamp(2.5rem,5.5vw+0.5rem,4.5rem)] font-thin uppercase tracking-tight leading-[1.1] text-white">
            Opening
          </h2>
          <h2 className="text-[clamp(2.5rem,5.5vw+0.5rem,4.5rem)] font-black uppercase tracking-tight leading-[1.1] text-white mb-4">
            The Doors
          </h2>
          <p className="text-white/90 text-[clamp(10px,0.6vw+4px,13px)] max-w-[550px] font-medium leading-[1.8] mb-4 md:mb-6">
            The most tricky part of the job is to unblock an already blocked GMB and<br className="hidden md:block" />
            strengthen it. That's what we worked towards, ensuring the brand shows<br className="hidden md:block" />
            up correctly where customers were looking.
          </p>

          <div className="w-full flex justify-center mt-auto">
            <img 
              src="/images/projects/neelachandra/opening.png" 
              alt="City Skyline Reflection" 
              className="w-full max-w-[950px] max-h-[280px] md:max-h-[340px] lg:max-h-[380px] object-contain object-bottom"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
