"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface RealEstateSystemCTAProps {
  headline?: React.ReactNode;
  description?: string;
  primaryBtnText?: string;
  secondaryBtnText?: string;
}

export default function RealEstateSystemCTA({
  headline,
  description,
  primaryBtnText = "Build epic systems",
  secondaryBtnText = "See what we build",
}: RealEstateSystemCTAProps) {
  return (
    <section className="relative w-full h-[80vh] md:h-screen min-h-[600px] flex justify-center items-center overflow-hidden p-6 md:p-12 bg-white">
      {/* Liquid Glass SVG Filter Def for Real Estate CTA */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter
            id="liquid-glass-distortion-realestate-cta"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.005 0.005"
              numOctaves="2"
              seed="9"
              result="noise"
            />
            <feGaussianBlur in="noise" stdDeviation="1" result="blurred" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="blurred"
              scale="60"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Background Image (Rainbow prism light beam) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/industries/system.png"
          alt="System Abstract Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Center Frosted Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-5xl bg-white/30 border border-white/50 rounded-[40px] md:rounded-[60px] p-8 sm:p-12 md:p-16 lg:p-20 text-center shadow-[0_30px_80px_rgba(0,0,0,0.1)]"
        style={{
          backdropFilter:
            "blur(12px) url(#liquid-glass-distortion-realestate-cta)",
        }}
      >
        {/* Headline: 40px, leading 112%, uppercase, center, alternating weights 300 & 700 */}
        <h2
          className="text-[clamp(1.75rem,2.77vw,2.5rem)] font-[300] text-[#111] leading-[1.12] uppercase tracking-[0] text-center mb-6 md:mb-8"
          style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
        >
          {headline || (
            <>
              WHEN YOUR <span className="font-bold">VISION IS CLEAR</span>,
              <br className="hidden sm:block" />
              <span className="font-bold">STRATEGY FALLS</span> INTO PLACE EFFORTLESSLY
            </>
          )}
        </h2>

        {/* Description: font-weight 300, font-size 12px, line-height 139%, letter-spacing 5%, text-align center */}
        <p
          className="text-[12px] font-[300] text-gray-800 leading-[1.39] tracking-[0.05em] text-center max-w-3xl mx-auto mb-10 md:mb-12"
          style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
        >
          {description ||
            "Smrkonova gives your real estate projects the foundation it needs to grow. We help develop builders' branding, find brand voice, and create at every step with purpose."}
        </p>

        {/* Buttons: width 169, height 39, gap 10px, padding 12px 16px */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-[10px]">
          <Link
            href="#build"
            className="w-[169px] h-[39px] px-[16px] py-[12px] bg-[#111] text-white text-[11px] font-bold tracking-[0.05em] uppercase hover:bg-black transition-colors flex items-center justify-center shrink-0 cursor-pointer shadow-sm select-none"
            style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
          >
            {primaryBtnText}
          </Link>
          <Link
            href="#see-what-we-build"
            className="w-[169px] h-[39px] px-[16px] py-[12px] bg-transparent text-[#111] border border-[#111] text-[11px] font-bold tracking-[0.05em] uppercase hover:bg-white/20 transition-colors flex items-center justify-center shrink-0 cursor-pointer select-none"
            style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
          >
            {secondaryBtnText}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
