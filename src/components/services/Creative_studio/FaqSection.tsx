"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Can you create 3D product animations?",
    answer: "Yes. We specialize in photorealistic 3D product modelling, texturing, lighting, and cinematic motion. From exploded component views and technical assembly demos to high-energy commercial reveals, we showcase your products from every angle before or after manufacturing.",
  },
  {
    question: "Do you produce corporate videos?",
    answer: "Yes. We produce complete corporate video packages including company overview videos, executive interviews, culture highlights, client testimonials, and investor presentations with professional scripting, visual styling, sound design, and color grading.",
  },
  {
    question: "Can you create animated website experiences?",
    answer: "Yes. We design and develop custom web animations including interactive scroll sequences, micro-interactions, hero canvas motion, and lightweight Lottie animations optimized for smooth 60fps performance across all devices and browsers.",
  },
  {
    question: "Do you provide source files?",
    answer: "Yes. Upon project completion and final sign-off, we hand over all agreed deliverables along with organized production source files—including Blender projects, After Effects files, Figma design boards, layered PSD/AI artwork, and master render exports.",
  },
  {
    question: "Can you design social media campaigns?",
    answer: "Yes. We craft multi-platform social media creative suites including Instagram Reels, TikTok motion ads, LinkedIn carousel graphics, YouTube thumbnails, and paid social video advertisements designed to maximize click-through rates and brand recall.",
  },
  {
    question: "Do you create logo animations?",
    answer: "Yes. We create bespoke 2D and 3D logo animations, brand idents, intro/outro stingers, and kinetic brand marks tailored for website headers, video openers, presentations, and digital advertising.",
  },
  {
    question: "Can you produce product launch videos?",
    answer: "Yes. Product launch videos are a core studio capability. We craft compelling visual narratives that highlight your product’s key innovations, aesthetic details, and real-world value propositions through dynamic 3D rendering, motion design, and high-impact pacing.",
  },
  {
    question: "Do you work with existing brand guidelines?",
    answer: "Yes. We strictly adhere to your existing visual identity systems, color codes, typography standards, and brand voice. Alternatively, if your brand guidelines need visual evolution or motion design rules added, we can establish them as part of the project.",
  },
  {
    question: "Can you create exhibition graphics?",
    answer: "Yes. We design large-format print and digital exhibition materials including trade show booth graphics, high-resolution video wall displays, interactive kiosk visuals, banner stands, and experiential event presentations.",
  },
  {
    question: "How long does a creative project take?",
    answer: "Timelines vary depending on complexity and scope. A single motion graphic or product render typically takes 1 to 2 weeks, while full 3D product animation suites, comprehensive video productions, or interactive web motion projects usually take 3 to 6 weeks from initial concept to final delivery.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(1); // Open the second one by default

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
