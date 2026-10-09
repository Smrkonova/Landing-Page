"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useContactModal } from "@/context/ContactModalContext";
import { trackContactButtonClick } from "@/lib/analytics";

export default function EcommerceHero() {
  const { openContactModal } = useContactModal();
  return (
    <section
      className="relative w-full overflow-hidden bg-black text-white flex items-center pt-24 pb-14 md:py-0"
      style={{
        minHeight: "calc(100vh / var(--desktop-scale, 1))",
      }}
    >
      {/* Background Graphic Image (Desktop Only) */}
      <div className="hidden md:block absolute inset-0 z-0">
        <Image
          src="/images/industries/ecommerce/banner.png"
          alt="Futuristic eCommerce Experience"
          fill
          priority
          quality={95}
          className="object-cover object-[72%_center] md:object-center select-none pointer-events-none"
        />
      </div>

      {/* The bg colour behind the contents (Desktop Only) */}
      <div
        className="hidden md:block absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(269.5deg, #FFA10000 0%, #000000 100.17%)",
        }}
      />

      {/* Blurry ambient glow behind contents (Desktop Only) */}
      <div
        className="hidden md:block absolute top-0 bottom-0 left-5 w-[clamp(600px,35vw,700px)] h-full pointer-events-none z-[2] bg-[#482D03] blur-[60px] md:blur-[100px] opacity-80"
        style={{
          filter: "blur(50px)",
        }}
      />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-12 flex flex-col justify-center">
        {/* Mobile Graphic Image Showcase (Visible only on mobile, placed above text) */}
        <div className="block md:hidden relative w-full h-[280px] sm:h-[340px] mb-8">
          <Image
            src="/images/industries/ecommerce/banner.png"
            alt="Futuristic eCommerce Experience"
            fill
            priority
            quality={95}
            className="object-contain object-center scale-100"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[950px] flex flex-col items-start text-left w-full"
        >
          {/* Top Line: BEAUTIFUL STORES */}
          <h2
            className="uppercase text-white tracking-[0.05em] leading-[1.22] font-[200] text-[clamp(1.5rem,2.5vw,2.25rem)] mb-2 md:mb-3 text-left"
            style={{
              fontFamily: "var(--font-inter), 'Inter', sans-serif",
              fontStyle: "normal",
            }}
          >
            BEAUTIFUL STORES
          </h2>

          {/* Main Headline: DON'T WIN ANYMORE. */}
          <h1
            className="uppercase text-white tracking-[0.05em] leading-[0.91] font-bold text-[clamp(2.5rem,6.67vw,6rem)] mb-5 md:mb-7 text-left"
            style={{
              fontFamily:
                "var(--font-good-times), 'good-times', 'Good Timing', sans-serif",
            }}
          >
            <span className="block">
              DON&apos;T WIN <br /> ANYMORE.
            </span>
          </h1>

          {/* Paragraph Description */}
          <p
            className="text-[#888888] sm:text-[#D4D4D4] font-[300] tracking-[0.05em] leading-[1.6] text-[clamp(12px,0.833vw,13px)] max-w-[500px] mb-8 md:mb-10 text-left"
            style={{
              fontFamily: "var(--font-inter), 'Inter', sans-serif",
            }}
          >
            Create a connected eCommerce experience that takes customers from
            discovery to repeat purchase. From high-performance eCommerce website
            development and product discovery to checkout, payments, fulfilment,
            and retention, Smrkonova builds digital commerce experiences designed
            around how modern customers shop.
          </p>

          {/* Action Buttons: Stacked full-width on mobile */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => {
                trackContactButtonClick("START YOUR PROJECT", "ecommerce_hero");
                openContactModal();
              }}
              className="inline-flex items-center justify-center bg-white text-black font-bold text-[clamp(11px,0.76vw,12px)] tracking-[0.08em] uppercase w-full sm:w-[167px] h-[46px] sm:h-[39px] px-2 py-3.5 transition-all duration-300 hover:bg-neutral-200 select-none text-center cursor-pointer"
              style={{
                fontFamily: "var(--font-inter), 'Inter', sans-serif",
              }}
            >
              START YOUR PROJECT
            </button>

            <Link
              href="#solutions"
              className="inline-flex items-center justify-center bg-transparent border border-white text-white font-bold text-[clamp(11px,0.76vw,12px)] tracking-[0.08em] uppercase w-full sm:w-[167px] h-[46px] sm:h-[39px] px-2 py-3.5 transition-all duration-300 hover:border-white hover:bg-white/10 select-none text-center"
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
