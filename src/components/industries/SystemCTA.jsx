"use client";

import React from "react";
import Image from "next/image";

export default function SystemCTA() {
  return (
    <section className="relative w-full h-[80vh] md:h-screen min-h-[600px] flex justify-center items-center overflow-hidden p-6 md:p-12">
      {/* Liquid Glass SVG Filter Def for CTA */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="liquid-glass-distortion-cta" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.005 0.005" numOctaves="2" seed="9" result="noise" />
            <feGaussianBlur in="noise" stdDeviation="1" result="blurred" />
            <feDisplacementMap in="SourceGraphic" in2="blurred" scale="60" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/industries/system.png"
          alt="System Abstract Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Center Glass Card */}
      <div
        className="relative z-10 w-full max-w-5xl bg-white/30 border border-white/50 rounded-[40px] md:rounded-[60px] p-10 md:p-20 text-center shadow-[0_30px_80px_rgba(0,0,0,0.1)]"
        style={{ backdropFilter: "blur(12px) url(#liquid-glass-distortion-cta)" }}
      >

        {/* Headline */}
        <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-light text-[#111] leading-[1.2] uppercase tracking-tight mb-8">
          We <span className="font-black">DESIGN</span> and build <span className="font-black">SYSTEMS</span>
          <span className="md:hidden"> </span>
          <br className="hidden md:block" />
          <span className="font-black">THAT HELP</span> companies <span className="font-black">GROW</span>
        </h2>

        {/* Description Paragraph */}
        <p className="text-xs md:text-sm lg:text-base text-gray-800 font-medium max-w-3xl mx-auto mb-12 leading-relaxed">
          Smrkonova gives your manufacturing business the foundation it needs to grow by connecting seamless
          business operations with strategic marketing and brand-building solutions. Bridging the gap between your
          ERP and customer-facing systems, we help streamline processes, strengthen your brand, and support the
          relationships that drive long-term business success.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button suppressHydrationWarning className="bg-[#111] text-white px-8 py-4 text-xs md:text-sm font-bold tracking-widest uppercase hover:bg-black transition-colors w-full sm:w-auto">
            Build epic systems
          </button>
          <button suppressHydrationWarning className="bg-transparent text-[#111] border border-[#111] px-8 py-4 text-xs md:text-sm font-bold tracking-widest uppercase hover:bg-white/20 transition-colors w-full sm:w-auto">
            See what we build
          </button>
        </div>

      </div>

    </section>
  );
}
