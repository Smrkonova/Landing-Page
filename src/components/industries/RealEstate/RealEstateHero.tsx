"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RealEstateHero() {
  return (
    <section
      className="relative bg-black text-white flex items-center pt-32 md:pt-0 pb-16 md:pb-0 overflow-hidden"
      style={{
        minHeight: "calc(115vh / var(--desktop-scale, 1))",
      }}
    >
      {/* Full Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/industries/real-estate/hero-bg.jpg"
          alt="The Way People Buy Real Estate Has Changed"
          fill
          priority
          quality={95}
          className="object-cover object-[72%_center] md:object-center select-none pointer-events-none"
        />
        {/* Gradient overlays to blend smoothly and keep text legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 md:via-black/75 to-transparent w-full md:w-[65%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Blurry ambient glow behind contents */}
      <div
        className="absolute top-0 bottom-0 left-5 md:left-30 w-[clamp(300px,35vw,700px)] h-full pointer-events-none z-[2] bg-[#482D03] blur-[60px] md:blur-[100px] opacity-80"
        style={{
          filter: "blur(50px)",
        }}
      />

      {/* Hero Content Container */}
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start text-left space-y-6 md:space-y-8 max-w-5xl"
        >
          {/* Headline block */}
          <div className="space-y-3 md:space-y-4">
            <h2
              className="font-sans font-extralight text-[clamp(1.5rem,2.4vw+0.5rem,36px)] leading-[1.22] tracking-[0.05em] uppercase text-white/90 block"
              style={{
                fontFamily: "var(--font-inter), 'Inter', sans-serif",
                fontStyle: "normal",
              }}
            >
              The way people buy
            </h2>

            <h1
              className="font-good-times font-bold text-[clamp(2.75rem,5.8vw+1rem,96px)] leading-[0.91] tracking-[0.05em] uppercase text-white break-words"
              style={{
                fontFamily:
                  "var(--font-good-times), 'good-times', 'Good Timing', sans-serif",
              }}
            >
              REAL <br/> ESTATE<br/>
              HAS <br /> CHANGED
            </h1>
          </div>

          {/* Paragraph Description */}
          <p
            className="font-sans font-light text-[12px] leading-[1.55] tracking-[0.05em] text-[#ccc] max-w-xl"
            style={{
              fontFamily: "var(--font-inter), 'Inter', sans-serif",
            }}
          >
            Over the years, we have made the shift from offline to a combination
            of offline and online strategies to convert a hot lead into a deal.
            Now, customers flow into your business several ways, through search,
            physical meetings, events, referrals, to grab downloadables and more.
            Once they are your client, it’s a whole new journey. As a
            manufacturing company, you need to think further ahead of your
            customers.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
            <Link
              href="#build-system"
              className="px-8 py-4 bg-white text-black text-[clamp(10px,0.4vw+4px,12px)] font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors text-center w-full sm:w-auto shadow-lg"
              style={{
                fontFamily: "var(--font-inter), 'Inter', sans-serif",
              }}
            >
              BUILD YOUR SYSTEM
            </Link>

            <Link
              href="#see-what-we-build"
              className="px-8 py-4 bg-transparent border border-white text-white text-[clamp(10px,0.4vw+4px,12px)] font-bold tracking-widest uppercase hover:bg-white/10 transition-colors text-center w-full sm:w-auto"
              style={{
                fontFamily: "var(--font-inter), 'Inter', sans-serif",
              }}
            >
              SEE WHAT WE BUILD
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
