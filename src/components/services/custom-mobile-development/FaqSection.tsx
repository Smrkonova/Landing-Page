"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do you build Android and iOS apps from a single codebase?",
    answer: "Yes, we build cross-platform mobile applications using Flutter and modern frameworks. This gives you native performance, fluid 60–120fps animations, platform-specific UI nuances, and identical reliability across both iOS and Android while dramatically lowering development and maintenance overhead.",
  },
  {
    question: "Do you handle the complete App Store and Google Play publishing process?",
    answer: "Yes. We take full responsibility for app store compliance, certificates, provisioning profiles, store listing metadata, preview assets, and review submission for both Google Play Console and Apple App Store Connect until your application is approved and live.",
  },
  {
    question: "Can we integrate custom backends, databases, and third-party APIs?",
    answer: "Absolutely. We architect secure REST and GraphQL API layers connecting your mobile app with custom databases (Node, Laravel, Supabase, Firebase), CRM/ERP systems, payment gateways, push notifications, map routing, and legacy internal platforms.",
  },
  {
    question: "How do you guarantee security, speed, and offline capability?",
    answer: "We incorporate strict security standards including encrypted local storage, biometric authentication, SSL pinning, and automated vulnerability scanning. When needed, we implement local caching and offline-first data synchronization so users can continue work seamlessly during intermittent connectivity.",
  },
  {
    question: "What does your post-launch support and maintenance include?",
    answer: "We provide comprehensive ongoing support including operating system compatibility updates for new iOS and Android releases, performance tracking, crash analytics monitoring, bug fixes, and feature enhancements as your user base scales.",
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
        <h2 className="text-[clamp(1.125rem,2.5vw+0.25rem,3rem)] font-[200] text-[#111] text-center mb-12 md:mb-16 uppercase tracking-wide">
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
                  <span className="text-[#333] font-medium text-[17px] md:text-[19px]">
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
                      <div className="px-6 md:px-10 pb-8 text-[#555] text-[14px] md:text-[15px] font-normal leading-relaxed max-w-3xl whitespace-pre-line">
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
