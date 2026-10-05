"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const hubs = [
  "DUBAI",
  "LONDON",
  "NEW YORK",
  "SINGAPORE",
  "MUMBAI",
  "TORONTO",
  "SYDNEY",
  "BANGALORE",
];

// Duplicate enough times for seamless infinite vertical scroll
const marqueeItems = [...hubs, ...hubs, ...hubs, ...hubs];

export default function RealEstateLocationsMarquee() {
  return (
    <section className="relative w-full bg-white text-black py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-[48%] mb-12 md:mb-0 pr-0 md:pr-10 lg:pr-14 flex flex-col items-start text-left"
        >
          {/* Title: 40px, Regular (400), 122% line-height, 0% tracking, uppercase */}
          <h2
            className="text-[clamp(1.75rem,5.5vw,2.75rem)] font-normal leading-[1.2] tracking-[0] text-[#111] mb-5 uppercase text-left max-w-[440px]"
            style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
          >
            Supporting <br />
            Real Estate initiatives <br />
            around the world
          </h2>

          {/* Paragraph */}
          <p
            className="text-[#555] font-[300] text-[12.5px] sm:text-[13.5px] md:text-[14px] leading-[1.65] tracking-[0.02em] max-w-lg mb-8 sm:mb-10 text-left"
            style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
          >
            Real estate sector is expanding rapidly throughout the world yet,
            many builders still depend on traditional sales methods. Smrkonova
            works hands-on with real estate companies to build systems like real
            estate softwares, builder website, AI chatbot for your website,
            property portal development among other systems that strengthen
            their digital presence while supporting the relationships that
            already drive their business around the world.
          </p>

          {/* Buttons: Stacked full-width on mobile */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-10 md:mb-0">
            <Link
              href="#build"
              className="inline-flex items-center justify-center bg-[#181818] text-white px-6 py-3.5 sm:py-3 text-[11px] sm:text-[12px] font-bold tracking-[0.08em] uppercase hover:bg-black transition-colors w-full sm:w-[170px] h-[46px] sm:h-[42px] select-none text-center"
              style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
            >
              Build your system
            </Link>
            <Link
              href="#see-what-we-build"
              className="inline-flex items-center justify-center bg-white text-[#181818] border border-[#181818] px-6 py-3.5 sm:py-3 text-[11px] sm:text-[12px] font-bold tracking-[0.08em] uppercase hover:bg-neutral-50 transition-colors w-full sm:w-[170px] h-[46px] sm:h-[42px] select-none text-center"
              style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
            >
              See what we build
            </Link>
          </div>
        </motion.div>

        {/* Right Content - Vertical Marquee (Left-aligned on mobile, right-aligned on desktop) */}
        <div className="w-full md:w-[52%] relative h-[440px] sm:h-[520px] md:h-[650px] overflow-hidden flex justify-start md:justify-end items-center select-none">
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
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="w-full flex flex-col items-start md:items-end pl-0 pr-0 md:pr-4"
            >
              {marqueeItems.map((hub, i) => (
                <div
                  key={i}
                  className="text-[clamp(2.75rem,8.5vw,5.5rem)] font-black text-[#111] leading-[1.08] uppercase tracking-tighter text-left select-none"
                  style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
                >
                  {hub}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
