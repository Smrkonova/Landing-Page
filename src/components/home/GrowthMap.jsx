"use client";

import { motion } from "framer-motion";
import { Target, ClipboardList, Code2, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Understand",
    desc: "We dive deep into your business, aligning product vision with real-world market demands.",
    icon: Target,
    color: "bg-[#FF5722] text-white", // Vibrant Orange/Red
    bg: "bg-gradient-to-br from-[#1a120c] to-[#0a0a0a]", // Dark tinted Orange
    text: "text-white"
  },
  {
    id: "02",
    title: "Plan",
    desc: "Mapping out UX, system architecture, and a concrete growth strategy before writing a line of code.",
    icon: ClipboardList,
    color: "bg-[#00897B] text-white", // Deep Teal
    bg: "bg-gradient-to-br from-[#0c1a18] to-[#0a0a0a]", // Dark tinted Teal
    text: "text-white"
  },
  {
    id: "03",
    title: "Build",
    desc: "Executing the strategy with cutting-edge design, scalable development, and seamless integrations.",
    icon: Code2,
    color: "bg-[#5E35B1] text-white", // Deep Violet
    bg: "bg-gradient-to-br from-[#120a1a] to-[#0a0a0a]", // Dark tinted Violet
    text: "text-white"
  },
  {
    id: "04",
    title: "Launch",
    desc: "Going live with a fully optimized, battle-tested system ready to capture users.",
    icon: Rocket,
    color: "bg-[#D81B60] text-white", // Vibrant Magenta
    bg: "bg-gradient-to-br from-[#1a0a12] to-[#0a0a0a]", // Dark tinted Magenta
    text: "text-white"
  },
  {
    id: "05",
    title: "Scale",
    desc: "We don't stop at launch. We automate, optimize, and engineer relentless growth.",
    icon: TrendingUp,
    color: "bg-[#C6FF00] text-black", // Neon Lime
    bg: "bg-gradient-to-br from-[#121a0a] to-[#0a0a0a]", // Dark tinted Lime
    text: "text-white"
  }
];

export default function GrowthMap() {
  return (
    <section className="w-full bg-[#0a0a0a] py-32 px-6 md:px-12 lg:px-24 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-start relative">
        
        {/* Left Side: Sticky Header */}
        <div className="lg:w-1/3 lg:sticky top-32 flex flex-col gap-6">
          <motion.div>
            <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-4">
              The Blueprint
            </h2>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[0.9] uppercase mb-2">
              HOW WE
            </h2>
            <h2 
              className="text-5xl md:text-7xl font-light tracking-tighter text-transparent uppercase leading-[0.9]"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
            >
              BUILD
              <br />
              GROWTH
            </h2>
          </motion.div>
          <motion.p 
            className="text-lg text-gray-400 font-medium max-w-sm mt-6 leading-relaxed"
          >
            A systematic, engineering-first approach to turning ideas into high-converting digital products.
          </motion.p>
        </div>

        {/* Right Side: Stacking Cards */}
        <div className="lg:w-2/3 flex flex-col w-full relative pb-32">
          {steps.map((step, index) => {
            // Calculate a sticky top offset so they stack nicely
            // Desktop: top-32, top-40, top-48...
            // We use standard CSS for precise control
            const topOffset = `calc(8rem + ${index * 2.5}rem)`;

            return (
              <motion.div
                key={step.id}
                className="sticky w-full shadow-2xl shadow-black/50 rounded-[2.5rem] border border-white/[0.08] overflow-hidden mb-12 origin-top"
                style={{ 
                  top: topOffset,
                  zIndex: index + 10
                }}
              >
                <div className={`p-10 md:p-14 ${step.bg} w-full h-[300px] md:h-[350px] flex flex-col justify-between transition-colors duration-500 backdrop-blur-3xl`}>
                  
                  {/* Card Header: Number & Icon */}
                  <div className="flex items-start justify-between">
                    <span className={`text-6xl md:text-8xl font-black tracking-tighter opacity-20 ${step.text}`}>
                      {step.id}
                    </span>
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${step.color} shadow-lg flex items-center justify-center text-white transform -rotate-12 group-hover:rotate-0 transition-transform`}>
                      <step.icon strokeWidth={1.5} className="w-8 h-8 md:w-10 md:h-10" />
                    </div>
                  </div>

                  {/* Card Body: Title & Desc */}
                  <div className="flex flex-col gap-3">
                    <h3 className={`text-3xl md:text-5xl font-bold tracking-tight uppercase ${step.text}`}>
                      {step.title}
                    </h3>
                    <p className={`text-base md:text-xl font-medium opacity-70 max-w-lg ${step.text}`}>
                      {step.desc}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
