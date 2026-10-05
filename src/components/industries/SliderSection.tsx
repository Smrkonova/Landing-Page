"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const defaultItems = [
  { id: 1, img: "/images/industries/manufacturing/slider/1.png", title: "INDUSTRIAL PRODUCT\nCATALOGUES" },
  { id: 2, img: "/images/industries/manufacturing/slider/2.png", title: "SUPPLY CHAIN\nMANAGEMENT" },
  { id: 3, img: "/images/industries/manufacturing/slider/3.png", title: "QUALITY CONTROL\nSYSTEMS" },
  { id: 4, img: "/images/industries/manufacturing/slider/4.png", title: "PREDICTIVE\nMAINTENANCE" },
  { id: 5, img: "/images/industries/manufacturing/slider/1.png", title: "WORKFORCE\nMANAGEMENT" },
  { id: 6, img: "/images/industries/manufacturing/slider/2.png", title: "INVENTORY\nTRACKING" },
  { id: 7, img: "/images/industries/manufacturing/slider/3.png", title: "AUTOMATED\nREPORTING" },
];

interface SliderItem {
  id: number | string;
  img: string;
  title: string;
}

interface SliderSectionProps {
  headerTag?: string;
  headerTagClassName?: string;
  headerContainerClassName?: string;
  title?: React.ReactNode;
  titleClassName?: string;
  items?: SliderItem[];
  borderBox?: boolean;
}

export default function SliderSection({
  headerTag,
  headerTagClassName,
  headerContainerClassName,
  title = (
    <>
      <span className="font-bold text-black">21 MANUFACTURING</span><br className="hidden sm:block" />
      <span className="font-light text-[#444]"> VERTICALS ENGINEERED</span>
    </>
  ),
  titleClassName,
  items = defaultItems,
  borderBox = false,
}: SliderSectionProps) {
  const [activeIndex, setActiveIndex] = useState(3);

  // Auto-play interval for continuous movement
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [items.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section className="relative w-full bg-white text-black py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Header Content */}
        <div className={headerContainerClassName || "mb-14 md:mb-20 text-center md:text-left"}>
          {headerTag && (
            <h4 className={headerTagClassName || "text-[clamp(11px,0.5vw+6px,14px)] font-black uppercase tracking-[0.2em] text-[#111] mb-3"}>
              {headerTag}
            </h4>
          )}
          <h2 className={titleClassName || "text-[clamp(1.875rem,3.5vw+0.5rem,3.5rem)] leading-[1.2] tracking-tight"}>
            {title}
          </h2>
        </div>

        {/* Outer Frame Wrapper */}
        <div className={borderBox ? "relative p-4 md:p-8 rounded-2xl md:rounded-3xl border-[2.5px] border-[#0091ff] shadow-[0_0_40px_rgba(0,145,255,0.15)] bg-white" : ""}>
          {/* Slider Container */}
          <motion.div 
            className="relative w-full h-[450px] md:h-[500px] flex justify-center items-center perspective-[1000px] cursor-grab active:cursor-grabbing"
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
            // Increase the x-offset to prevent overlapping too much on mobile
            const x = Math.sign(offset) * (absOffset * 85 - (absOffset > 1 ? (absOffset - 1) * 20 : 0));
            const zIndex = 20 - absOffset;
            const opacity = absOffset > 2 ? 0 : 1; // Hide cards further than 2 slots away to keep mobile clean
            
            return (
              <motion.div
                key={item.id}
                className="absolute w-[240px] sm:w-[280px] md:w-[350px] h-[340px] sm:h-[350px] md:h-[450px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
                animate={{
                  x: `${x}%`,
                  scale: scale,
                  zIndex: zIndex,
                  opacity: opacity,
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
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

                {/* Dim overlay for inactive cards */}
                <motion.div
                  className="absolute inset-0 bg-black pointer-events-none"
                  animate={{ opacity: isCenter ? 0 : 0.5 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Center Glass Label (Bottom) */}
                <motion.div 
                  className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-white/20 backdrop-blur-md rounded-xl flex flex-col justify-center items-center text-center p-4 border border-white/40 pointer-events-none shadow-lg"
                  initial={false}
                  animate={{
                    opacity: isCenter ? 1 : 0,
                    y: isCenter ? 0 : 20
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-white font-bold text-[clamp(11px,0.4vw+7px,14px)] tracking-widest uppercase whitespace-pre-line drop-shadow-md">
                    {item.title}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
        </div>

      </div>
    </section>
  );
}
