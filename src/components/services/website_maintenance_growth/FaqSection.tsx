"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do you only maintain platforms built by Smrkonova?",
    answer: "No. While we maintain all digital products we engineer from scratch, we also audit, refactor, and assume ongoing maintenance for websites, mobile applications, and enterprise systems originally built by external vendors or internal teams.",
  },
  {
    question: "What is included in your ongoing maintenance retainers?",
    answer: "Our retainers provide dedicated development hours covering security patches, dependency upgrades, bug fixes, automated nightly backups, uptime monitoring, CMS updates, and continuous speed and Core Web Vitals optimization.",
  },
  {
    question: "How do you handle emergency issues and site downtime?",
    answer: "Critical outages, database crashes, security incidents, or broken checkout flows trigger high-priority alerts with an immediate response within 15–30 minutes to restore service, isolate errors, and deploy urgent hotfixes.",
  },
  {
    question: "Can we use our support hours to build new features?",
    answer: "Yes. Hours can be used flexibly for both maintenance tasks and feature enhancements—such as creating new landing pages, designing modules, building third-party API integrations, or enhancing conversion funnels.",
  },
  {
    question: "How do you monitor platform health and performance?",
    answer: "We establish 24/7 automated synthetic and real-user monitoring tracking uptime, server resource utilization, latency, SSL certificates, broken links, and database load, delivering transparent monthly health reports.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full max-w-full py-[56px] px-4 md:py-32 md:px-6 bg-[#fafafa] min-h-[730px] md:min-h-0 overflow-hidden">

      {/* Background Colorful Blurs */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-emerald-200 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[120px] opacity-40 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute top-1/2 right-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[120px] opacity-50 pointer-events-none translate-x-1/4"></div>

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
