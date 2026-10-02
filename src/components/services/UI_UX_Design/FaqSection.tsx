"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is the difference between UI and UX design?",
    answer: "UX (User Experience) focuses on how a product works—understanding user needs, organizing information architecture, and mapping out seamless user journeys. UI (User Interface) focuses on how a product looks and feels—visual styling, typography, colors, iconography, component design, and interactive states. Together, they create digital products that are both intuitive and visually compelling.",
  },
  {
    question: "Do you redesign existing products?",
    answer: "Yes. We conduct in-depth UX audits of existing applications, websites, and platforms to identify usability bottlenecks, drop-off points, and outdated design patterns. We then modernize the user experience, optimize conversion flows, and revamp the visual interface while preserving brand identity.",
  },
  {
    question: "Can you design before development starts?",
    answer: "Yes, designing before development is the industry best practice. It allows you to explore product concepts, validate user flows with clickable prototypes, align stakeholders, and make adjustments early when changes are quick and cost-effective—saving significant engineering time and budget.",
  },
  {
    question: "Do you provide design systems?",
    answer: "Yes. We build scalable, production-ready design systems in Figma complete with color palettes, typography scales, spacing grids, icons, and reusable component libraries with comprehensive variants and states to keep your product consistent as it grows.",
  },
  {
    question: "Will I receive the Figma files?",
    answer: "Yes, you will have 100% ownership of all design deliverables. We provide cleanly organized, fully editable Figma files with structured pages, component libraries, Auto Layout, and design tokens ready for developer handoff.",
  },
  {
    question: "Do you conduct user research?",
    answer: "Yes. We conduct quantitative and qualitative research including user interviews, competitor benchmarking, surveys, and journey mapping. This ensures design decisions are driven by real user behavior and business goals rather than assumptions.",
  },
  {
    question: "Can you design SaaS platforms?",
    answer: "Yes, we specialize in complex SaaS and enterprise platforms. We simplify data-heavy dashboards, multi-step workflows, permission hierarchies, and settings into clean, intuitive, and efficient user experiences.",
  },
  {
    question: "Do you create mobile app designs?",
    answer: "Yes. We design native iOS and Android apps adhering to Apple's Human Interface Guidelines and Google's Material Design standards, ensuring natural gestures, fluid animations, and touch-optimized navigation.",
  },
  {
    question: "Can you work with our developers?",
    answer: "Yes, we believe in close collaboration with development teams. We provide detailed developer handoffs in Figma with exact specifications, responsive breakpoints, interaction guidelines, and remain available for Design QA reviews during the implementation phase.",
  },
  {
    question: "How long does a UI/UX project take?",
    answer: "Timelines depend on project complexity and scope. A standard website or product MVP typically takes 3 to 6 weeks, while comprehensive mobile apps or complex SaaS platforms usually take 6 to 12 weeks from discovery to final handoff.",
  },
  {
    question: "Do you provide ongoing design support?",
    answer: "Yes. After initial delivery, we offer ongoing design partnerships to help you design new features, iterate based on user analytics, maintain your design system, and support continuous product growth.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full max-w-full py-24 md:py-32 bg-[#fafafa] overflow-hidden">

      {/* Background Colorful Blurs */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-pink-300 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[120px] opacity-40 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute top-1/2 right-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-orange-300 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[120px] opacity-50 pointer-events-none translate-x-1/4"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Title */}
        <h2 className="text-[clamp(1.75rem,3.5vw+0.5rem,3rem)] font-light text-[#111] text-center mb-12 md:mb-16 uppercase tracking-wide">
          Answers Before You Ask
        </h2>

        {/* Accordion List */}
        <div className="flex flex-col space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  boxShadow: isOpen ? "0 10px 30px rgba(0,0,0,0.06)" : "0 0px 0px rgba(0,0,0,0)",
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`bg-[#69696900] border border-[#e2e2e2] rounded-[20px] overflow-hidden transition-colors ${isOpen ? 'bg-white/80' : ''}`}
              >
                <button
                  suppressHydrationWarning
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 md:px-10 text-left focus:outline-none"
                >
                  <span className="text-[#333] font-medium text-[clamp(0.875rem,0.6vw+0.7rem,1.0625rem)]">
                    {faq.question}
                  </span>
                  <span className="text-[#333] text-[clamp(1.25rem,1.5vw+0.5rem,1.5rem)] font-light leading-none ml-6">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 md:px-10 pb-8 text-[#555] text-[clamp(0.8125rem,0.5vw+0.65rem,0.9375rem)] leading-relaxed max-w-3xl whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
