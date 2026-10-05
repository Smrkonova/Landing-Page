"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How much does a real estate website cost?",
    answer:
      "Pricing varies based on scale, custom features, 3D interactive master plans, and CRM integrations. We provide tailored scopes and transparent estimates after understanding your project goals and digital roadmap.",
  },
  {
    question: "Should builders invest in SEO?",
    answer:
      "Yes, If you want buyers to find you before they find your competitors. SEO helps your projects appear when people actively search for properties, locations, developers, and investment opportunities. We build SEO into the website and content strategy from the start rather than treating it as an afterthought.",
  },
  {
    question: "Can you integrate CRM?",
    answer:
      "Yes, we integrate seamlessly with leading real estate CRMs such as Salesforce, HubSpot, Zoho, LeadSquared, and custom enterprise databases to ensure real-time lead capture, automated assignments, and pipeline tracking.",
  },
  {
    question: "Can you create booking systems?",
    answer:
      "Yes, we build end-to-end digital booking systems allowing prospective buyers to explore unit availability, select specific floor plans, submit documentation, and pay token amounts securely online.",
  },
  {
    question: "Can you build virtual tours?",
    answer:
      "Yes, we integrate high-fidelity 360° virtual walkthroughs, Matterport tours, and interactive 3D site architectural models directly into your web experience for remote and NRI buyers.",
  },
  {
    question: "Can buyers book site visits?",
    answer:
      "Yes, we incorporate smart site-visit scheduling systems with calendar integrations, automated SMS/WhatsApp confirmations, driver dispatch sync, and sales team notifications.",
  },
  {
    question: "How long does development take?",
    answer:
      "A bespoke builder or project showcase website typically takes 4 to 8 weeks, while complex multi-project property portals with interactive master plans and CRM workflows take 8 to 14 weeks.",
  },
  {
    question: "Can we manage multiple projects?",
    answer:
      "Yes, our centralized CMS architecture allows developers to manage multiple ongoing and upcoming projects, unit inventories, price sheets, and media assets from a unified administrative dashboard.",
  },
];

export default function RealEstateFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // 2nd item open by default matching design

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-20 md:py-28 lg:py-36 bg-[#fafafa] overflow-hidden">
      {/* Ambient Conic Gradient Glow in top-right */}
      <div
        className="absolute top-0 right-[-10%] sm:right-[0%] lg:right-[5%] w-[500px] sm:w-[650px] lg:w-[850px] h-[500px] sm:h-[650px] lg:h-[850px] pointer-events-none z-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 175.13deg at 50% 50%, #FF00FF -107.31deg, rgba(255, 0, 255, 0) 126.35deg, #FF9D00 252.69deg, rgba(255, 0, 255, 0) 486.35deg)",
          filter: "blur(140px)",
          opacity: 0.75,
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header: font-family: Inter, font-weight: 200, font-size: 48px, line-height: 136%, uppercase */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 sm:mb-18 md:mb-20"
        >
          <h2
            className="text-[clamp(2rem,3.33vw,48px)] font-[200] text-[#111] leading-[1.36] tracking-[0] uppercase text-center"
            style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
          >
            Answers before you ask
          </h2>
        </motion.div>

        {/* FAQ Accordion List with 1144px Container */}
        <div className="max-w-[1144px] mx-auto flex flex-col space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={false}
                className={`relative w-full rounded-[19px] border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white/70 border-white/80 shadow-[0_12px_35px_rgba(0,0,0,0.05)] backdrop-blur-md min-h-[180px] md:min-h-[216px] flex flex-col justify-start"
                    : "bg-white/40 border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.02)] backdrop-blur-sm hover:bg-white/60"
                }`}
              >
                <button
                  suppressHydrationWarning
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 md:px-10 text-left focus:outline-none cursor-pointer"
                >
                  {/* Question: font-weight 300, font-size 14px, line-height 139%, letter-spacing 5% */}
                  <span
                    className="text-[#111] font-[300] text-[14px] leading-[1.39] tracking-[0.05em] pr-4"
                    style={{
                      fontFamily: "var(--font-inter), 'Inter', sans-serif",
                    }}
                  >
                    {faq.question}
                  </span>

                  {/* Toggle icon (+ / -) */}
                  <span className="text-[#333] text-[20px] font-light leading-none shrink-0 ml-4">
                    {isOpen ? "—" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      {/* Answer: font-weight 300, font-size 12px, line-height 139%, letter-spacing 5% */}
                      <div className="px-6 md:px-10 pb-8 pt-2">
                        <p
                          className="text-[#333] font-[300] text-[12px] leading-[1.39] tracking-[0.05em] max-w-3xl"
                          style={{
                            fontFamily: "var(--font-inter), 'Inter', sans-serif",
                          }}
                        >
                          {faq.answer}
                        </p>
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
