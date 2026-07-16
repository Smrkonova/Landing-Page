"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Can you build websites for manufacturing companies?",
    answer: "India's manufacturing sector is expanding rapidly through industrial corridors, export zones, and smart manufacturing initiatives yet, many factories still depend on traditional sales methods.\nSmrkonova works hands-on with manufacturers to build systems that strengthen their digital presence while supporting the relationships that already drive their business.",
  },
  {
    question: "Can you build websites for manufacturing companies?",
    answer: "India's manufacturing sector is expanding rapidly through industrial corridors, export zones, and smart manufacturing initiatives yet, many factories still depend on traditional sales methods.\nSmrkonova works hands-on with manufacturers to build systems that strengthen their digital presence while supporting the relationships that already drive their business.",
  },
  {
    question: "Can you build websites for manufacturing companies?",
    answer: "India's manufacturing sector is expanding rapidly through industrial corridors, export zones, and smart manufacturing initiatives yet, many factories still depend on traditional sales methods.\nSmrkonova works hands-on with manufacturers to build systems that strengthen their digital presence while supporting the relationships that already drive their business.",
  },
  {
    question: "Can you build websites for manufacturing companies?",
    answer: "India's manufacturing sector is expanding rapidly through industrial corridors, export zones, and smart manufacturing initiatives yet, many factories still depend on traditional sales methods.\nSmrkonova works hands-on with manufacturers to build systems that strengthen their digital presence while supporting the relationships that already drive their business.",
  },
  {
    question: "Can you build websites for manufacturing companies?",
    answer: "India's manufacturing sector is expanding rapidly through industrial corridors, export zones, and smart manufacturing initiatives yet, many factories still depend on traditional sales methods.\nSmrkonova works hands-on with manufacturers to build systems that strengthen their digital presence while supporting the relationships that already drive their business.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(1); // Open the second one by default to match screenshot

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#fafafa] overflow-hidden">

      {/* Background Colorful Blurs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-orange-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-50 pointer-events-none translate-x-1/4"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-light text-[#111] text-center mb-16 uppercase tracking-wide">
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
                  marginLeft: isOpen ? -32 : 0,
                  marginRight: isOpen ? -32 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#69696900] border border-[#e2e2e2] rounded-[20px] overflow-hidden"
              >
                <button
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
