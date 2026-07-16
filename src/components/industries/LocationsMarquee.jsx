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

export default function LocationsMarquee() {
  return (
    <section className="relative w-full bg-white text-black py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-0 flex flex-col md:flex-row items-center">

        {/* Left Content */}
        <div className="w-full md:w-[45%] mb-16 md:mb-0 pr-0 md:pr-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.3] text-[#111] mb-8 uppercase tracking-wide">
            Supporting<br />
            Manufacturers across<br />
            India's industrial hubs
          </h2>
          <p className="text-[#666] text-sm md:text-base max-w-md mb-12 leading-relaxed">
            India's manufacturing sector is expanding rapidly through industrial
            corridors, export zones, and smart manufacturing initiatives yet,
            many factories still depend on traditional sales methods.
            Smrkonova works hands-on with manufacturers to build systems
            that strengthen their digital presence while supporting the
            relationships that already drive their business.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#111] text-white px-8 py-4 text-xs md:text-sm font-bold tracking-widest uppercase hover:bg-black transition-colors">
              Build your system
            </button>
            <button className="bg-transparent text-[#111] border border-[#111] px-8 py-4 text-xs md:text-sm font-bold tracking-widest uppercase hover:bg-gray-50 transition-colors">
              See what we build
            </button>
          </div>
        </div>

        {/* Right Content - Vertical Marquee */}
        <div className="w-full md:w-[55%] relative h-[500px] md:h-[700px] overflow-hidden flex justify-end items-center select-none md:-mr-24 lg:-mr-32">

          {/* Top and Bottom Fade Overlays */}
          <div className="absolute top-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none"></div>

          {/* Base Track (Light Grey) */}
          <motion.div
            animate={{ y: [0, "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 w-full flex flex-col items-end md:items-center"
          >
            {marqueeItems.map((city, i) => (
              <div
                key={i}
                className="text-[50px] sm:text-[70px] md:text-[90px] font-black text-[#f0f0f0] leading-[1.1] uppercase tracking-tighter"
              >
                {city}
              </div>
            ))}
          </motion.div>

          {/* Masked Track (Solid Black, smoothly masked as an overlay in the center) */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, transparent 40%, black 48%, black 52%, transparent 60%)",
              maskImage: "linear-gradient(to bottom, transparent 40%, black 48%, black 52%, transparent 60%)"
            }}
          >
            <motion.div
              animate={{ y: [0, "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 w-full flex flex-col items-end md:items-center"
            >
              {marqueeItems.map((city, i) => (
                <div
                  key={i}
                  className="text-[50px] sm:text-[70px] md:text-[90px] font-black text-[#111] leading-[1.1] uppercase tracking-tighter drop-shadow-md"
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
