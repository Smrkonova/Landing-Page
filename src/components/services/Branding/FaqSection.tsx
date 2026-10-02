"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is included in a branding project?",
    answer: "A complete branding project typically includes brand discovery, logo design (primary, secondary, and icon marks), color palette, typography hierarchy, iconography style, brand patterns, collateral design (visiting cards, letterheads, social templates), and comprehensive brand guidelines. Deliverables are customized to fit your business goals and market needs.",
  },
  {
    question: "Do you redesign existing brands?",
    answer: "Yes. We assist established businesses in refreshing or completely rebranding their identity. We can modernize outdated visuals, realign brand positioning, resolve consistency issues across departments, or execute an evolutionary rebrand while protecting your existing market recognition.",
  },
  {
    question: "Will I receive editable files?",
    answer: "Yes, you will have 100% ownership and receive all master, editable files upon project completion. This includes vector source files (AI, EPS, SVG), high-resolution exports (PNG, JPG, WebP), and organized Figma / Adobe design files for your internal team or future partners.",
  },
  {
    question: "Can you create brand guidelines?",
    answer: "Yes. We build detailed brand guidelines (brand books) that clearly outline rules for logo clearspace and misuse, color codes (HEX, RGB, CMYK, Pantone), font pairings, photography art direction, iconography, and voice/tone so your team and external vendors never break consistency.",
  },
  {
    question: "Do you design brochures and company profiles?",
    answer: "Yes. We design multi-page company profiles, product catalogues, corporate brochures, and digital pitch decks. All layouts are engineered with clear hierarchy and compelling visuals, delivered in both interactive digital PDF format and commercial print-ready specifications.",
  },
  {
    question: "Can you design packaging?",
    answer: "Yes. We design packaging systems, product labels, boxes, pouches, shopping bags, and retail displays. We provide precise dieline setups with bleed, trim, and color separations ready for professional manufacturing and print production.",
  },
  {
    question: "Do you provide print-ready files?",
    answer: "Yes. All print collateral is provided in print-ready PDF formats configured with CMYK color profiles, vector typography, bleed margins, crop marks, and high-resolution 300+ DPI settings ready for commercial offset or digital printing.",
  },
  {
    question: "Can you create social media templates?",
    answer: "Yes. We create editable, reusable social media templates for platforms including Instagram (posts, carousels, stories, highlights), LinkedIn, Facebook, and Twitter. We can provide these in Figma, Canva, or Photoshop so your team can easily produce on-brand content.",
  },
  {
    question: "How long does branding take?",
    answer: "A focused brand identity or startup MVP package typically takes 2 to 4 weeks. A comprehensive brand transformation including extensive research, collateral design, packaging, and exhaustive brand guidelines usually takes 4 to 8 weeks depending on feedback rounds and scope.",
  },
  {
    question: "Can branding be done before website development?",
    answer: "Yes, establishing your brand identity before website development is strongly recommended. It defines your design tokens, colors, typography, imagery direction, and messaging first, ensuring the website design phase is fast, cohesive, and perfectly aligned with your brand.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(1); // Open the second one by default to match screenshot

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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#111] text-center mb-12 md:mb-16 uppercase tracking-wide">
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
                  <span className="text-[#333] font-medium text-sm md:text-base">
                    {faq.question}
                  </span>
                  <span className="text-[#333] text-2xl font-light leading-none ml-6">
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
                      <div className="px-6 md:px-10 pb-8 text-[#555] text-xs md:text-sm leading-relaxed max-w-3xl whitespace-pre-line">
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
