"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const defaultFaqs = [
  {
    question: "Can you build websites for manufacturing companies?",
    answer: "India's manufacturing sector is expanding rapidly through industrial corridors, export zones, and smart manufacturing initiatives yet, many factories still depend on traditional sales methods.\nSmrkonova works hands-on with manufacturers to build systems that strengthen their digital presence while supporting the relationships that already drive their business.",
  },
  {
    question: "How long does a full system deployment typically take?",
    answer: "Project timelines vary depending on complexity. Standard digital presence and marketing websites take 4–6 weeks, while comprehensive enterprise system integrations and ERP workflows take 8–14 weeks.",
  },
  {
    question: "Do you integrate with our existing ERP or CRM software?",
    answer: "Yes, we build custom APIs and connectors to sync seamlessly with SAP, Salesforce, Microsoft Dynamics, Zoho, and custom legacy enterprise software.",
  },
  {
    question: "Can you handle complex product catalogues and dynamic pricing?",
    answer: "Absolutely. We engineer scalable catalogue architectures capable of handling tens of thousands of SKUs, tier-based distributor pricing, and real-time stock sync.",
  },
  {
    question: "Do you provide post-launch maintenance and support?",
    answer: "Yes, we offer ongoing managed support, proactive uptime monitoring, speed optimization, and continuous feature expansion to ensure your systems never lag.",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title?: React.ReactNode;
  titleClassName?: string;
  subtitle?: React.ReactNode;
  subtitleClassName?: string;
  questionClassName?: string;
  faqs?: FaqItem[];
}

export default function FaqSection({
  title = "Answers Before You Ask",
  titleClassName,
  subtitle,
  subtitleClassName,
  questionClassName,
  faqs = defaultFaqs,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Open the second one by default to match screenshot

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#fafafa] overflow-hidden">

      {/* Background Colorful Blurs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-orange-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-50 pointer-events-none translate-x-1/4"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className={titleClassName || "text-[clamp(1.75rem,3.5vw+0.5rem,3rem)] font-light text-[#111] uppercase tracking-wide"}>
            {title}
          </h2>
          {subtitle && (
            <p className={subtitleClassName || "text-gray-500 text-[clamp(12px,0.5vw+6px,14px)] mt-2 font-normal"}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Accordion List */}
        <div className="flex flex-col space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  marginLeft: isOpen ? -12 : 0,
                  marginRight: isOpen ? -12 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#69696900] border border-[#e2e2e2] rounded-[20px] overflow-hidden"
              >
                <button
                  suppressHydrationWarning
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 md:px-10 text-left focus:outline-none"
                >
                  <span className={questionClassName || "text-[#333] font-medium text-[clamp(0.875rem,0.6vw+0.7rem,1.0625rem)]"}>
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
