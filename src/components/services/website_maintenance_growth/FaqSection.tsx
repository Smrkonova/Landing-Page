"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do you only support projects built by Smrkonova?",
    answer: "No. While we maintain and scale all products we build from scratch, we also take over, audit, and provide ongoing maintenance for websites, applications, and platforms originally developed by third-party agencies or internal teams.",
  },
  {
    question: "Can you maintain our existing website?",
    answer: "Yes. We start by conducting a comprehensive code and infrastructure audit of your current site. Once verified, we establish routine backup protocols, update dependencies, monitor uptime, and implement continuous content and performance updates.",
  },
  {
    question: "Do you provide emergency support?",
    answer: "Yes. Our maintenance retainers include high-priority incident response for critical outages, security breaches, database errors, or broken checkout funnels to restore operations as swiftly as possible.",
  },
  {
    question: "Can you improve an existing Shopify store?",
    answer: "Yes. We support Shopify and Shopify Plus merchants with speed optimization, checkout flow refinements, theme customizations, private app integrations, inventory synchronization, and custom landing page development.",
  },
  {
    question: "Will you update our mobile application?",
    answer: "Yes. We provide complete maintenance for iOS and Android apps, including updating SDKs for the latest OS versions, ensuring App Store and Google Play Store policy compliance, bug fixing, and continuous feature enhancements.",
  },
  {
    question: "Can you add new features later?",
    answer: "Yes. Growth support is designed specifically for iterative feature rollouts. Whether you need a new customer portal, payment gateway, custom calculator, API integration, or dashboard module, we engineer and deploy features seamlessly.",
  },
  {
    question: "Do you monitor website performance?",
    answer: "Yes. We establish 24/7 automated uptime and performance observability covering Core Web Vitals, page speed benchmarks, SSL validity, DNS health, broken link detection, and server resource utilization.",
  },
  {
    question: "Do you provide monthly maintenance plans?",
    answer: "Yes. We offer flexible monthly and annual support retainers based on your product's scale, update frequency, and dedicated development hours, with transparent hour tracking and rollover options.",
  },
  {
    question: "Can you optimise our existing software?",
    answer: "Yes. We review database queries, server infrastructure, API response latency, and frontend bundle sizes to resolve bottlenecks, boost responsiveness, and improve user satisfaction across your business applications.",
  },
  {
    question: "How quickly are support requests handled?",
    answer: "Emergency issues (e.g. site downtime or checkout failures) are acknowledged within 15–30 minutes and resolved with urgent priority. Standard support requests and feature updates are typically completed within 24 to 48 hours depending on scope.",
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
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-emerald-200 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[120px] opacity-40 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute top-1/2 right-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[120px] opacity-50 pointer-events-none translate-x-1/4"></div>

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
