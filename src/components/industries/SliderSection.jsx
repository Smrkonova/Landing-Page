"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const items = [
  { id: 1, img: "/images/industries/manufacturing/slider/1.png", title: "INDUSTRIAL PRODUCT\nCATALOGUES" },
  { id: 2, img: "/images/industries/manufacturing/slider/2.png", title: "SUPPLY CHAIN\nMANAGEMENT" },
  { id: 3, img: "/images/industries/manufacturing/slider/3.png", title: "QUALITY CONTROL\nSYSTEMS" },
  { id: 4, img: "/images/industries/manufacturing/slider/4.png", title: "PREDICTIVE\nMAINTENANCE" },
  { id: 5, img: "/images/industries/manufacturing/slider/1.png", title: "WORKFORCE\nMANAGEMENT" },
  { id: 6, img: "/images/industries/manufacturing/slider/2.png", title: "INVENTORY\nTRACKING" },
  { id: 7, img: "/images/industries/manufacturing/slider/3.png", title: "AUTOMATED\nREPORTING" },
];

export default function SliderSection() {
  const [activeIndex, setActiveIndex] = useState(3);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section className="relative w-full bg-white text-black py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Header Content */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.2] tracking-tight">
            <span className="font-bold text-black">21 MANUFACTURING</span><br />
            <span className="font-light text-[#444]">VERTICALS ENGINEERED</span>
          </h2>
        </div>

        {/* Slider Container */}
        <motion.div 
          className="relative w-full h-[400px] md:h-[500px] flex justify-center items-center perspective-[1000px] cursor-grab active:cursor-grabbing"
          onPanEnd={(e, info) => {
            if (info.offset.x < -50) {
              handleNext();
            } else if (info.offset.x > 50) {
              handlePrev();
            }
          }}
        >
          {items.map((item, index) => {
            // Calculate shortest distance in a circular array
            let offset = index - activeIndex;
            if (offset > Math.floor(items.length / 2)) {
              offset -= items.length;
            } else if (offset < -Math.floor(items.length / 2)) {
              offset += items.length;
            }

            const isCenter = offset === 0;
            const absOffset = Math.abs(offset);

            // Styling calculations based on offset
            const scale = isCenter ? 1 : Math.max(0.6, 1 - absOffset * 0.15);
            // Decrease the x-offset for further items to prevent gaps caused by scale-floor
            const x = Math.sign(offset) * (absOffset * 65 - (absOffset > 1 ? (absOffset - 1) * 15 : 0));
            const zIndex = 20 - absOffset;
            const opacity = absOffset > 3 ? 0 : 1;
            
            return (
              <motion.div
                key={item.id}
                className="absolute w-[200px] sm:w-[280px] md:w-[350px] h-[280px] sm:h-[350px] md:h-[450px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
                animate={{
                  x: `${x}%`,
                  scale: scale,
                  zIndex: zIndex,
                  opacity: opacity,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.32, 0.72, 0, 1],
                }}
                onClick={() => setActiveIndex(index)}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover pointer-events-none"
                  onError={(e) => {
                    // Fallback if image doesn't exist yet
                    e.currentTarget.src = "/images/industries/manufacturing/service/1.png";
                  }}
                />
                
                {/* Center Glass Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-white/20 backdrop-blur-md flex flex-col justify-center items-center text-center p-6 border border-white/40 pointer-events-none"
                  initial={false}
                  animate={{
                    opacity: isCenter ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-white font-bold text-xs md:text-sm tracking-wider uppercase whitespace-pre-line drop-shadow-md">
                    {item.title}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
