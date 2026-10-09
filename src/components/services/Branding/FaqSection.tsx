"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is included in a complete branding project?",
    answer: "A complete branding project typically includes strategic discovery, logo system design (primary, secondary, and icon marks), bespoke color palettes, typography hierarchy, iconography style, marketing collateral, and a comprehensive brand guideline document ready for print and digital deployment.",
  },
  {
    question: "Do you redesign existing brands or build from scratch?",
    answer: "We do both. We partner with emerging startups to establish brand identities from scratch, and with established enterprises to modernize, realign, and scale their existing brands while protecting their hard-earned equity and recognition in the market.",
  },
  {
    question: "Will I receive full copyright and editable source files?",
    answer: "Yes, you retain 100% intellectual property ownership. Upon project delivery, we provide all master vector files (AI, EPS, SVG), high-resolution raster files (PNG, JPG, WebP), and organized Figma design libraries for your team and external vendors.",
  },
  {
    question: "Can you create comprehensive brand guidelines?",
    answer: "Yes. We compile detailed brand guidelines covering logo clearspace, color formulas (HEX, RGB, CMYK, Pantone), typographic hierarchy, imagery direction, and dos and don'ts so your brand remains cohesive across all future touchpoints.",
  },
  {
    question: "Can branding be completed before website development?",
    answer: "Yes, establishing your brand identity prior to website design is strongly recommended. It defines all design tokens, styling rules, typography scales, and tone of voice first, making your digital web design process faster, cleaner, and deeply cohesive.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(1); // Open the second one by default to match screenshot

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full max-w-full py-[56px] px-4 md:py-32 md:px-6 bg-[#fafafa] min-h-[730px] md:min-h-0 overflow-hidden">

      {/* Background Colorful Blurs */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-pink-300 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[120px] opacity-40 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute top-1/2 right-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-orange-300 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[120px] opacity-50 pointer-events-none translate-x-1/4"></div>

      <div className="w-full max-w-[390px] md:max-w-4xl mx-auto relative z-10">

        {/* Title */}
        <h2 
          className="font-[300] md:font-[200] text-[#000000] text-center mb-8 md:mb-16 uppercase align-middle text-[21px] md:text-[48px] leading-[31.5px] md:leading-[136%] tracking-[2.94px] md:tracking-[0px]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Answers Before You Ask
        </h2>

        {/* Accordion List */}
        <div className="flex flex-col space-y-3 md:space-y-4">
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
                className={`bg-[#69696900] border border-[#e2e2e2] rounded-[16px] md:rounded-[20px] overflow-hidden transition-colors ${isOpen ? 'bg-white/80' : ''}`}
              >
                <button
                  suppressHydrationWarning
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-4 md:py-6 md:px-10 text-left focus:outline-none"
                >
                  <span 
                    className="text-[#000000] align-middle font-[400] md:font-[300] text-[13.5px] md:text-[14px] leading-[20.25px] md:leading-[139%] tracking-[-0.34px] md:tracking-[0.05em]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {faq.question}
                  </span>
                  <span className="text-[#333] text-lg md:text-2xl font-light leading-none ml-4 md:ml-6 shrink-0">
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
                      <div 
                        className="px-4 pb-4 md:px-10 md:pb-8 text-[#555] align-middle font-[400] md:font-[300] text-[12.5px] md:text-[12px] leading-[20.63px] md:leading-[139%] tracking-[0px] md:tracking-[0.05em] max-w-3xl whitespace-pre-line"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
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
