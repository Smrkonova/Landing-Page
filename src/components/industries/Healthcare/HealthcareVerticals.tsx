"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HealthcareVerticalCard {
  id: number;
  title: string;
  image: string;
}

const healthcareVerticals: HealthcareVerticalCard[] = [
  {
    id: 1,
    title: "MULTI-SPECIALTY\nHOSPITALS",
    image: "/images/industries/education/cards/card1.png",
  },
  {
    id: 2,
    title: "DIAGNOSTIC &\nPATHOLOGY CHAINS",
    image: "/images/industries/education/cards/card3.png",
  },
  {
    id: 3,
    title: "TELEHEALTH &\nVIRTUAL CARE",
    image: "/images/industries/education/cards/card2.png",
  },
  {
    id: 4,
    title: "DENTAL & SPECIALTY\nCLINICS",
    image: "/images/industries/education/cards/card1.png",
  },
  {
    id: 5,
    title: "PHARMACEUTICALS &\nBIOTECH",
    image: "/images/industries/education/cards/card2.png",
  },
  {
    id: 6,
    title: "AYURVEDA & WELLNESS\nINSTITUTIONS",
    image: "/images/industries/education/cards/card3.png",
  },
  {
    id: 7,
    title: "MEDICAL DEVICES &\nHEALTH-TECH APPS",
    image: "/images/industries/education/cards/card1.png",
  },
];

interface HealthcareVerticalsProps {
  tag?: string;
  title?: React.ReactNode;
  items?: HealthcareVerticalCard[];
}

export default function HealthcareVerticals({
  tag = "INDUSTRIES WITHIN HEALTHCARE",
  title = (
    <>
      20+ HEALTHCARE SECTORS<br />
      WE HELP TRANSFORM
    </>
  ),
  items = healthcareVerticals,
}: HealthcareVerticalsProps) {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play interval for continuous movement
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [isPaused, items.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section className="relative w-full bg-white text-black py-20 md:py-28 lg:py-36 overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12">
        {/* Section Header - Left aligned as in design */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 sm:mb-18 md:mb-20 text-left"
        >
          {/* Top Line: SemiBold 600 */}
          <h3
            className="font-semibold text-[clamp(1.75rem,3.65vw,3.286rem)] leading-[1.22] tracking-[0] uppercase text-black text-left"
            style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
          >
            {tag}
          </h3>

          {/* Bottom Line: Extra Light 200 */}
          <h2
            className="font-[200] text-[clamp(2.25rem,4.44vw,4rem)] leading-[1.22] tracking-[0] uppercase text-black text-left mt-1"
            style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
          >
            {title}
          </h2>
        </motion.div>

        {/* Slider Container with Pan gestures & 3D perspective from Real Estate */}
        <motion.div
          className="relative w-full h-[360px] sm:h-[440px] md:h-[500px] flex justify-center items-center perspective-[1000px] cursor-grab active:cursor-grabbing select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onPanEnd={(e, info) => {
            if (info.offset.x < -50) {
              handleNext();
            } else if (info.offset.x > 50) {
              handlePrev();
            }
          }}
        >
          {items.map((card, index) => {
            // Calculate shortest distance in a circular array
            let offset = index - activeIndex;
            if (offset > Math.floor(items.length / 2)) {
              offset -= items.length;
            } else if (offset < -Math.floor(items.length / 2)) {
              offset += items.length;
            }

            const isCenter = offset === 0;
            const absOffset = Math.abs(offset);

            // Motion calculations based on offset (from RealEstateVerticals)
            const scale = isCenter ? 1 : Math.max(0.65, 1 - absOffset * 0.15);
            const x =
              Math.sign(offset) *
              (absOffset * 85 - (absOffset > 1 ? (absOffset - 1) * 20 : 0));
            const zIndex = 20 - absOffset;
            const opacity = absOffset > 2 ? 0 : 1;

            return (
              <motion.div
                key={card.id}
                className="absolute w-[260px] sm:w-[340px] md:w-[424px] h-[260px] sm:h-[340px] md:h-[425px] rounded-[19px] overflow-hidden border border-white/60 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.18)] cursor-pointer"
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
                {/* Background Image */}
                <Image
                  src={card.image}
                  alt={card.title.replace("\n", " ")}
                  fill
                  className="object-cover pointer-events-none"
                  sizes="(max-width: 768px) 340px, 424px"
                  onError={(e) => {
                    e.currentTarget.src =
                      "/images/industries/education/cards/card1.png";
                  }}
                />

                {/* Frosted Glass Overlay with Centered Typography */}
                <div
                  className={`absolute inset-0 flex items-center justify-center p-6 text-center transition-all duration-700 pointer-events-none ${
                    isCenter
                      ? "backdrop-blur-[10px] bg-white/20"
                      : "bg-black/25 backdrop-blur-[1px]"
                  }`}
                >
                  <motion.h4
                    animate={{
                      opacity: isCenter ? 1 : 0,
                      scale: isCenter ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-white font-semibold text-[clamp(14px,1.35vw,19.26px)] leading-[1.28] tracking-[0.05em] uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] max-w-[280px] whitespace-pre-line"
                    style={{
                      fontFamily: "var(--font-inter), 'Inter', sans-serif",
                    }}
                  >
                    {card.title}
                  </motion.h4>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Navigation Controls: Arrows & Indicator Dots */}
        <div className="flex items-center justify-center gap-4 mt-8 sm:mt-12">
          <button
            onClick={handlePrev}
            aria-label="Previous card"
            className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center text-black/70 hover:text-black hover:border-black/50 transition-colors cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to card ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === activeIndex
                    ? "w-6 bg-black"
                    : "w-1.5 bg-black/20 hover:bg-black/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next card"
            className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center text-black/70 hover:text-black hover:border-black/50 transition-colors cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
