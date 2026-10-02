"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Why choose a custom ecommerce website instead of a template?",
    answer: "Pre-built templates often come with bloated code, rigid layout constraints, and generic user experiences that limit conversions. A custom ecommerce website is engineered from scratch around your brand identity, unique customer journey, and specific business workflows—ensuring ultra-fast load times, seamless checkout, and unlimited scalability.",
  },
  {
    question: "Do you develop custom Shopify stores?",
    answer: "Yes, we build bespoke Shopify and Shopify Plus stores. Rather than relying on off-the-shelf themes, we design custom Shopify Liquid and headless architectures with tailored product pages, custom filtering, interactive configurators, and private app integrations.",
  },
  {
    question: "Can you redesign our existing ecommerce website?",
    answer: "Absolutely. We can revamp your current store's visual design, information architecture, and checkout flow to enhance user experience, decrease cart abandonment, and significantly boost your conversion rate while retaining your existing SEO rankings and customer data.",
  },
  {
    question: "Can you migrate from WooCommerce or Magento?",
    answer: "Yes, we handle end-to-end ecommerce migrations across platforms—including moving from WooCommerce, Magento, OpenCart, or legacy setups to Shopify, Next.js, or modern headless platforms with zero data loss for products, customer accounts, and order histories.",
  },
  {
    question: "Can you integrate Razorpay or Stripe?",
    answer: "Yes, we integrate leading payment gateways including Razorpay, Stripe, PayU, Cashfree, PayPal, and Apple Pay/Google Pay. We also implement multi-currency support, automated invoicing, EMI options, and secure PCI-DSS compliant checkout flows.",
  },
  {
    question: "Can you connect our warehouse and inventory systems?",
    answer: "Yes, we connect your ecommerce platform with ERP systems, warehouse management software (WMS), point-of-sale (POS) systems, and shipping aggregators like Shiprocket, Delhivery, and Blue Dart for real-time inventory synchronization and automated order fulfillment.",
  },
  {
    question: "Do you build B2B ecommerce platforms?",
    answer: "Yes, we develop specialized B2B ecommerce solutions featuring customer-specific wholesale pricing, minimum order quantities (MOQ), custom credit terms, bulk order forms, multi-tiered accounts, and quotation workflows.",
  },
  {
    question: "Can you create multilingual online stores?",
    answer: "Yes, we build multi-language and multi-currency ecommerce websites tailored for global commerce, with automatic geo-detection, localized currency conversion, and dedicated international SEO setups.",
  },
  {
    question: "Will the website be mobile friendly?",
    answer: "Every ecommerce platform we build is mobile-first. Over 75% of ecommerce traffic originates on smartphones, so we design fluid, app-like mobile browsing experiences, quick-add drawers, sticky checkout bars, and thumb-friendly navigation.",
  },
  {
    question: "Can customers track their orders?",
    answer: "Yes, we build comprehensive customer account portals with live order tracking, automated WhatsApp/SMS/Email status notifications, return/exchange request workflows, and integration with your courier partners' APIs.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer: "Yes, we provide post-launch support and growth packages that cover security updates, speed optimization, server monitoring, bug fixes, feature enhancements, and seasonal campaign launches.",
  },
  {
    question: "Can you improve website speed and conversions?",
    answer: "Speed directly impacts sales. We optimize Core Web Vitals, asset compression, database queries, and checkout friction to achieve sub-second load times and higher checkout completion rates.",
  },
  {
    question: "How long does an ecommerce project take?",
    answer: "A standard custom Shopify or ecommerce project typically takes between 4 to 8 weeks, while complex enterprise platforms with custom ERP integrations and B2B workflows take between 8 to 14 weeks depending on scope and specifications.",
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
