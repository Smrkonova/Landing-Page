"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EducationSystems() {
  return (
    <section className="w-full bg-white text-black py-20 md:py-28 lg:py-36 overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12">
        {/* Main Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-14 md:mb-24 text-left"
        >
          <h2
            className="text-[clamp(2.25rem,4.44vw,4rem)] leading-[1.08] md:leading-[1.22] tracking-[0] uppercase text-black text-left"
            style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
          >
            <span className="font-bold">BUILD </span>
            <span className="font-[200]">SYSTEMS THAT</span>
            <br />
            <span className="font-bold">GUIDE </span>
            <span className="font-[200]">STUDENTS AND </span>
            <span className="font-bold">STRENGTHEN</span>
            <br />
            <span className="font-[200]">INSTITUTIONAL EXCELLENCE</span>
          </h2>
        </motion.div>

        {/* Content Row: Down Left Content + Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-16 md:mb-20">
          {/* Down Left Content (48px Extra Light) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 text-left"
          >
            <p
              className="text-[#888888] font-[200] text-[clamp(1.5rem,3.33vw,3rem)] leading-[1.15] md:leading-[1.22] tracking-[0] uppercase text-left"
              style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
            >
              <span>SCALE SYSTEMS THAT</span>
              <br />
              <span>RUN YOUR BUSINESS.</span>
            </p>
          </motion.div>

          {/* Right Content Title & Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col justify-start max-w-[420px] items-start text-left"
          >
            <h3
              className="text-black font-bold text-[clamp(11px,0.833vw,12px)] leading-[1.22] tracking-[0.05em] uppercase mb-3 text-left"
              style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
            >
              HOW SMRKONOVA THINKS
            </h3>
            <p
              className="text-[#444444] font-normal text-[clamp(12px,0.833vw,13px)] leading-[1.4] tracking-[0.02em] text-left"
              style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
            >
              Replace disconnected processes with systems that gives every team,
              from marketing to manufacturing teams the clarity to
              <span className="block mt-2">execute</span>
              <span className="block">analyse</span>
              <span className="block">improve</span>
              <span className="block">and scale.</span>
            </p>
          </motion.div>
        </div>

        {/* Exploded Gear System Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-center items-center mt-6 sm:mt-10 md:mt-14"
        >
          <div className="relative w-full max-w-[1157px] aspect-[1157/517]">
            <Image
              src="/images/industries/education/system-gears.png"
              alt="Build Systems Architecture Exploded Mechanical Components"
              fill
              priority
              className="object-contain scale-x-[-1] pointer-events-none select-none"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
