"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Why choose a custom ecommerce website instead of a template?",
    answer: "Pre-built templates come with bloated code, rigid layout constraints, and generic user experiences that harm conversions. A custom ecommerce platform is engineered from zero around your product catalog, customer journey, and checkout flow—ensuring lightning-fast speeds and higher sales.",
  },
  {
    question: "Do you develop custom Shopify and Shopify Plus stores?",
    answer: "Yes, we build bespoke Shopify and Shopify Plus experiences. Rather than relying on off-the-shelf themes, we craft custom Shopify Liquid or headless Next.js frontends with tailored product pages, custom filtering, and bespoke app integrations.",
  },
  {
    question: "Can you integrate payment gateways and courier shipping?",
    answer: "Yes, we integrate leading payment gateways including Razorpay, Stripe, Cashfree, PayU, and PayPal. We also connect your store with shipping aggregators like Shiprocket, Delhivery, and Blue Dart for real-time rates, label generation, and tracking.",
  },
  {
    question: "Can you connect our ERP, warehouse and inventory systems?",
    answer: "Yes, we build secure API integrations connecting your online store directly with your ERP, warehouse management systems, and point-of-sale software for real-time inventory synchronization across all sales channels.",
  },
  {
    question: "How long does a custom ecommerce project take?",
    answer: "A standard custom ecommerce project typically takes between 4 to 8 weeks, while complex platforms with custom ERP integrations and B2B workflows take 8 to 12 weeks. We also provide dedicated post-launch support and growth retainers.",
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
        <h2 className="text-[clamp(1.125rem,2.5vw+0.25rem,3rem)] font-[200] text-[#000000] text-center mb-12 md:mb-16 uppercase tracking-wide">
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
                  <span className="text-[17px] md:text-[19px] font-medium text-[#111111]">
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
                      <div className="px-6 md:px-10 pb-8 text-gray-600 text-[14px] md:text-[15px] font-normal leading-relaxed max-w-3xl whitespace-pre-line">
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
