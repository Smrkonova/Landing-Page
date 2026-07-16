"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const solutions = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  number: String(i + 1).padStart(2, "0"),
  title: "CORPORATE\nMANUFACTURING\nWEBSITE DEVELOPMENT",
}));

export default function SolutionsGrid() {
  return (
    <section className="relative w-full bg-[#fcfcfc] text-black py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">

        {/* Header Content */}
        <div className="max-w-3xl mb-20 space-y-6">
          <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#888]">
            SOLUTIONS WE BUILD
          </h4>
          <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-light text-[#222] leading-[1.1] tracking-tight">
            BUT WINNING A CUSTOMER IS<br />
            <span className="font-extrabold text-black">ONLY THE BEGINNING</span>
          </h2>
          <p className="text-[13px] md:text-sm text-[#444] font-medium tracking-wide max-w-sm mt-4 leading-relaxed uppercase">
            GROWTH SOLUTIONS DESIGNED FOR EVERY<br />STAGE OF BUSINESS OPERATIONS
          </p>
        </div>

        {/* Grid Container */}
        <div className="relative">
          {/* Animated Background Glow */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] -mt-[300px] -ml-[300px] md:-mt-[400px] md:-ml-[400px] z-0 pointer-events-none rounded-full overflow-hidden blur-[80px] opacity-80"
            animate={{
              x: [0, 50, -50, 0, 50, -20, 0],
              y: [0, -50, 20, 50, -30, 40, 0],
              scale: [1, 1.1, 0.9, 1.05, 0.95, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Image
              src="/images/industries/glow.svg"
              alt="Glow Background"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 relative z-10 mt-12">
            {solutions.map((item) => (
              <div
                key={item.id}
                className="relative group pt-8"
              >
                {/* Huge Watermark Number (Behind the glass) */}
                <div className="absolute top-0 left-4 md:left-6 text-[100px] md:text-[120px] font-light text-[#cccccc] leading-none tracking-tighter select-none z-0 transition-transform duration-700 group-hover:scale-105 origin-left">
                  {item.number}
                </div>

                {/* Glass Card */}
                <div className="relative z-10 mt-12 bg-[#D9D9D933] backdrop-blur-sm border-[1.5px] border-white/60 rounded-xl p-6 md:p-8 h-[160px] md:h-[180px] flex flex-col justify-end shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] transition-all duration-500 hover:bg-white/30 hover:shadow-[0_8px_40px_0_rgba(0,0,0,0.08)]">
                  <h3 className="text-[11px] md:text-[12px] font-semibold text-[#222] uppercase tracking-[0.1em] leading-[1.8] whitespace-pre-line">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
