"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Why choose custom software development over commercial off-the-shelf software?",
    answer: "Off-the-shelf software forces your teams to adapt to rigid workflows, recurring per-seat subscription fees, and vendor lock-in. Custom software is designed entirely around your proprietary business logic, automates repetitive internal tasks, scales indefinitely without licensing penalties, and belongs completely to your company as intellectual property.",
  },
  {
    question: "How do you ensure data security and compliance in custom platforms?",
    answer: "Security is integrated at every architectural level. We enforce role-based access control (RBAC), end-to-end data encryption at rest and in transit (AES-256, TLS 1.3), automated security testing, zero-trust network policies, and compliance with industry standards such as SOC2, ISO 27001, and GDPR.",
  },
  {
    question: "Can custom software integrate with our existing legacy databases and ERPs?",
    answer: "Yes. We specialize in non-disruptive integrations. We build high-throughput REST and GraphQL APIs, webhooks, and secure event-driven middleware to bridge your modern web applications with SAP, Salesforce, Oracle, legacy SQL servers, accounting systems, and internal data warehouses.",
  },
  {
    question: "How long does it take to develop an enterprise software system?",
    answer: "A targeted Minimum Viable Product (MVP) or internal automation tool typically ships within 8 to 12 weeks. Large-scale enterprise platforms with complex multi-role workflows and extensive system integrations typically progress in iterative two-week milestones over 4 to 6 months.",
  },
  {
    question: "Who owns the source code and infrastructure after launch?",
    answer: "You own 100% of the intellectual property, source code, data, and cloud infrastructure. We configure all repositories and cloud accounts (AWS, GCP, Azure) directly under your organization with comprehensive documentation and engineering handover.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#fafafa] overflow-hidden">

      {/* Background Colorful Blurs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px]  bg-[#0011FF] rounded-full mix-blend-multiply filter blur-[120px] opacity-40 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#00CCFF00] rounded-full mix-blend-multiply filter blur-[120px] opacity-50 pointer-events-none translate-x-1/4"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Title */}
        <h2 className="text-[clamp(1.125rem,2.5vw+0.25rem,3rem)] font-[200] text-[#111] text-center mb-16 uppercase tracking-wide">
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
