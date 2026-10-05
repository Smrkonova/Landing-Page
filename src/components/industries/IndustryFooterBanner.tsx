"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface IndustryFooterBannerProps {
  title?: string;
  subtext?: string;
  buttonText?: string;
}

export default function IndustryFooterBanner({
  title = "Build a future-ready digital system",
  subtext = "Partner with Smrkonova to architect high-performance digital ecosystems that elevate operations and convert at scale.",
  buttonText = "Start Your Project",
}: IndustryFooterBannerProps) {
  return (
    <footer className="relative w-full bg-black text-white overflow-hidden pt-28 pb-12">
      {/* Background Eagle Image */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-45 mix-blend-screen flex items-center justify-center">
        <Image
          src="/images/services/website/eagle.png"
          alt="Eagle Background"
          fill
          className="object-cover object-center filter brightness-90 contrast-125"
          priority
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative z-10 flex flex-col items-center text-center">
        
        {/* Main CTA Content */}
        <div className="max-w-3xl space-y-6 md:space-y-8 mb-20">
          <h2 className="text-[clamp(2.25rem,4.5vw+0.5rem,4.25rem)] font-light uppercase tracking-tight leading-[1.1] text-white">
            {title}
          </h2>
          <p className="text-neutral-400 text-[clamp(13px,0.4vw+7px,15px)] max-w-xl mx-auto leading-relaxed">
            {subtext}
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-black text-[clamp(11px,0.4vw+6px,13px)] font-bold tracking-widest uppercase hover:bg-neutral-200 transition-all rounded shadow-lg hover:scale-105"
            >
              {buttonText}
            </Link>
          </div>
        </div>

        {/* Minimal Footer Navigation Bar */}
        <div className="w-full pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-neutral-500 text-[clamp(10px,0.4vw+5px,12px)] tracking-wider uppercase gap-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/industries" className="hover:text-white transition-colors">Industries</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <p>© {new Date().getFullYear()} Smrkonova. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
