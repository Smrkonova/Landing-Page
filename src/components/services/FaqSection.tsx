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
    <section className="relative w-full max-w-full py-[56px] px-4 md:py-32 md:px-6 bg-[#fafafa] min-h-[730px] md:min-h-0 overflow-hidden">

      {/* Background Colorful Blurs */}
      <div className="absolute top-[3rem] right-1/6 w-[200px] md:w-[450px] h-[180px] md:h-[380px] bg-pink-300 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[120px] opacity-60 pointer-events-none translate-x-1/4 -translate-y-1/3"></div>
      <div className="absolute top-1/2 right-1/6 w-[250px] md:w-[550px] h-[250px] md:h-[500px] bg-orange-300 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[120px] opacity-80 pointer-events-none translate-x-1/4  -translate-y-1/3"></div>

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
                className={`border rounded-[16px] md:rounded-[20px] overflow-hidden transition-all duration-300 backdrop-blur-md ${
                  isOpen 
                    ? 'bg-white/35 border-white/60 shadow-[0_10px_30px_rgba(0,0,0,0.04)]' 
                    : 'bg-white/20 border-white/40 hover:bg-white/30 hover:border-white/50'
                }`}
                style={{
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}
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
                  <span className="text-[#000000] text-lg md:text-2xl font-light leading-none ml-4 md:ml-6 shrink-0">
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
                        className="px-4 pb-4 md:px-10 md:pb-8 text-[#212120] align-middle font-[400] md:font-[300] text-[12.5px] md:text-[12px] leading-[20.63px] md:leading-[139%] tracking-[0px] md:tracking-[0.05em] max-w-3xl whitespace-pre-line"
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
