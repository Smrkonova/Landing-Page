"use client";

import React from "react";
import { motion } from "framer-motion";

const cities = [
  "COIMBATORE",
  "PUNE",
  "CHENNAI",
  "HYDERABAD",
  "BANGALORE",
  "MUMBAI",
  "AHMEDABAD",
];

// Duplicate enough times so it can scroll seamlessly
const marqueeItems = [...cities, ...cities, ...cities, ...cities];

interface LocationsMarqueeProps {
  badge?: string;
  title?: React.ReactNode;
  titleClassName?: string;
  description?: string;
  descriptionClassName?: string;
  primaryBtn?: string;
  primaryBtnClassName?: string;
  secondaryBtn?: string;
  secondaryBtnClassName?: string;
}

export default function LocationsMarquee({
  badge,
  title = (
    <>
      Supporting <br className="hidden sm:block" />
      Manufacturers across <br className="hidden sm:block" />
      India's industrial hubs
    </>
  ),
  titleClassName,
  description = "India's manufacturing sector is expanding rapidly through industrial corridors, export zones, and smart manufacturing initiatives yet, many factories still depend on traditional sales methods. Smrkonova works hands-on with manufacturers to build systems that strengthen their digital presence while supporting the relationships that already drive their business.",
  descriptionClassName,
  primaryBtn = "Build your system",
  primaryBtnClassName,
  secondaryBtn = "See what we build",
  secondaryBtnClassName,
}: LocationsMarqueeProps) {
  return (
    <section className="relative w-full bg-white text-black py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center">

        <div className="w-full md:w-[50%] mb-12 md:mb-0 pr-0 md:pr-12 flex flex-col items-start text-left">
          {badge && (
            <div className="mb-4">
              <span className="bg-[#0091ff] text-white text-[clamp(10px,0.4vw+5px,12px)] font-bold px-3 py-1.5 uppercase tracking-wider rounded">
                {badge}
              </span>
            </div>
          )}
          <h2 className={titleClassName || "text-[clamp(1.75rem,5.5vw,2.75rem)] font-normal leading-[1.2] text-[#111] mb-5 uppercase tracking-normal text-left max-w-[440px]"}>
            {title}
          </h2>

          <div className={descriptionClassName || "text-[#555] text-[12.5px] sm:text-[13.5px] md:text-[14px] max-w-lg mb-8 sm:mb-10 leading-[1.65] font-normal text-left whitespace-pre-line"}>
            {description}
          </div>

          {/* Action Buttons: Stacked full-width on mobile */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-10 md:mb-0">
            <button
              suppressHydrationWarning
              className={primaryBtnClassName || "inline-flex items-center justify-center bg-[#181818] text-white px-6 py-3.5 sm:py-3 text-[11px] sm:text-[12px] font-bold tracking-[0.08em] uppercase hover:bg-black transition-colors w-full sm:w-[170px] h-[46px] sm:h-[42px] select-none text-center"}
            >
              {primaryBtn}
            </button>
            <button
              suppressHydrationWarning
              className={secondaryBtnClassName || "inline-flex items-center justify-center bg-white text-[#181818] border border-[#181818] px-6 py-3.5 sm:py-3 text-[11px] sm:text-[12px] font-bold tracking-[0.08em] uppercase hover:bg-neutral-50 transition-colors w-full sm:w-[170px] h-[46px] sm:h-[42px] select-none text-center"}
            >
              {secondaryBtn}
            </button>
          </div>
        </div>

        {/* Right Content - Vertical Marquee (Left-aligned on mobile, right-aligned on desktop) */}
        <div className="w-full md:w-[50%] relative h-[440px] sm:h-[520px] md:h-[650px] overflow-hidden flex justify-start md:justify-end items-center select-none">
          <div
            className="absolute inset-0 z-10 w-full flex flex-col justify-center"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.3) 18%, rgba(0,0,0,0.6) 36%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.6) 64%, rgba(0,0,0,0.3) 82%, rgba(0,0,0,0.12) 100%)",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.3) 18%, rgba(0,0,0,0.6) 36%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.6) 64%, rgba(0,0,0,0.3) 82%, rgba(0,0,0,0.12) 100%)",
            }}
          >
            <motion.div
              animate={{ y: [0, "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="w-full flex flex-col items-start md:items-end pl-0"
            >
              {marqueeItems.map((city, i) => (
                <div
                  key={i}
                  className="text-[clamp(2.75rem,8.5vw,5.5rem)] font-black text-[#111] leading-[1.08] uppercase tracking-tighter text-left"
                >
                  {city}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
