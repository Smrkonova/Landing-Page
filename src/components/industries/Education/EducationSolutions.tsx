"use client";

import React from "react";
import { motion } from "framer-motion";

const solutionsData = [
  { id: 1, number: "01", title: "ADMISSION PORTALS" },
  {
    id: 2,
    number: "02",
    title: "LEARNING MANAGEMENT\nSYSTEMS (LMS)",
    highlight: false,
  },
  { id: 3, number: "03", title: "STUDENT INFORMATION\nSYSTEMS" },
  { id: 4, number: "04", title: "ONLINE EXAMINATION PLATFORMS" },
  { id: 5, number: "05", title: "COURSE DISCOVERY\nWEBSITES" },
  { id: 6, number: "06", title: "STUDENT MOBILE\nAPPS" },
  { id: 7, number: "07", title: "FACULTY\nPORTALS" },
  { id: 8, number: "08", title: "PARENT\nDASHBOARDS" },
  { id: 9, number: "09", title: "ONLINE FEE\nPAYMENT SYSTEMS" },
  { id: 10, number: "10", title: "PLACEMENT\nPORTALS" },
  { id: 11, number: "11", title: "ATTENDANCE\nSYSTEMS" },
  { id: 12, number: "12", title: "LIBRARY\nMANAGEMENT" },
  { id: 13, number: "13", title: "VIRTUAL CAMPUS\nTOURS" },
  { id: 14, number: "14", title: "AI STUDENT ASSISTANTS" },
  { id: 15, number: "15", title: "ANALYTICS\nDASHBOARDS" },
];

export default function EducationSolutions() {
  return (
    <section className="relative w-full bg-white text-black py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Background Radiant Conic Glow */}
      <div
        className="absolute top-[28%] right-[-5%] sm:right-[5%] lg:right-[10%] w-[500px] sm:w-[650px] lg:w-[850px] h-[500px] sm:h-[650px] lg:h-[850px] pointer-events-none z-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 175.13deg at 50% 50%, #FF9D00 -107.31deg, rgba(255, 0, 255, 0) 126.35deg, #FF9D00 252.69deg, rgba(255, 0, 255, 0) 486.35deg)",
          filter: "blur(140px)",
          opacity: 0.75,
        }}
      />

      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 relative z-10">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20 space-y-4 md:space-y-6 text-center md:text-left"
        >
          {/* Subtitle: SOLUTIONS WE BUILD */}
          <p
            className="text-[#888888] font-normal text-[clamp(16px,1.67vw,24px)] leading-[1.36] tracking-[0] uppercase text-center md:text-left"
            style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
          >
            SOLUTIONS WE BUILD
          </p>

          {/* Main Title: BUILD A STRONG FOUNDATION AND SCALE... */}
          <h2
            className="text-black font-[300] text-[clamp(2.25rem,4.44vw,4rem)] leading-[1.22] tracking-[0] uppercase max-w-7xl text-center md:text-left mx-auto md:mx-0"
            style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
          >
            BUILD A STRONG FOUNDATION AND
            <br />
            SCALE STUDENTS AND OPERATIONAL
            <br />
            GROWTH.
          </h2>

          {/* Paragraph */}
          <p
            className="text-[#212120] font-normal text-[clamp(15px,1.67vw,24px)] leading-[1.36] tracking-[0] uppercase max-w-3xl pt-2 text-center md:text-left mx-auto md:mx-0"
            style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
          >
            DIGITAL SOLUTIONS DESIGNED AROUND THE
            <br className="hidden sm:block" />
            WAY EDUCATIONAL INSTITUTIONS WORK
          </p>
        </motion.div>

        {/* 15 Solutions Grid (2 columns on mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 sm:gap-x-6 gap-y-10 sm:gap-y-16 md:gap-y-20">
          {solutionsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: (index % 4) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative group pt-8 sm:pt-12 md:pt-14"
            >
              {/* Number behind glassy container (128px, Inter Regular) */}
              <div
                className="absolute -top-1/6 left-2 sm:left-3 md:left-4 text-[clamp(52px,12vw,128px)] font-normal text-[#E2E2E2] leading-[1.36] tracking-[0] select-none pointer-events-none z-0 transition-transform duration-500 group-hover:-translate-y-1"
                style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
              >
                {item.number}
              </div>

              {/* Glassy Container (width: 312px, height: 128px, border-radius: 9px) */}
              <div
                className="relative z-10 w-full max-w-[312px] h-[116px] sm:h-[128px] rounded-[9px] p-3 sm:p-5 flex flex-col justify-end border border-white/80 bg-white/45 backdrop-blur-[5px] shadow-[0_8px_25px_-5px_rgba(0,0,0,0.03)] transition-all duration-300 group-hover:bg-white/60 group-hover:shadow-[0_12px_32px_-5px_rgba(0,0,0,0.06)]"
                style={{
                  WebkitBackdropFilter: "blur(16px)",
                }}
              >
                <h3
                  className={`text-[clamp(10px,2.8vw,14px)] sm:text-[clamp(12px,0.97vw,14px)] leading-[1.32] sm:leading-[1.36] tracking-[0] uppercase whitespace-pre-line text-[#212120] ${
                    item.highlight ? "font-bold" : "font-normal"
                  }`}
                  style={{
                    fontFamily: "var(--font-inter), 'Inter', sans-serif",
                  }}
                >
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
