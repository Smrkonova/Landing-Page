"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do you build Android and iPhone apps?",
    answer: "Yes, we develop cross-platform mobile applications that run smoothly on both Android and iOS devices from a unified codebase. We ensure native performance, platform-specific UI nuances, and compliance with Google Play Store and Apple App Store guidelines.",
  },
  {
    question: "Why do you use Flutter?",
    answer: "Flutter allows us to build natively compiled, beautiful applications for both iOS and Android from a single codebase. This significantly reduces development time and costs, provides consistent 60–120fps UI performance, and ensures faster rollout of future features without sacrificing native capabilities.",
  },
  {
    question: "Can you redesign our existing mobile app?",
    answer: "Yes, we can conduct a comprehensive UI/UX and technical audit of your current app. We redesign user flows, modernize the visual design, optimize performance, refactor underlying code, and migrate legacy applications to modern frameworks like Flutter.",
  },
  {
    question: "Can you publish the app on Google Play and the App Store?",
    answer: "Yes, we handle the entire app submission and store approval process for both Google Play and the Apple App Store. This includes configuring developer accounts, generating release certificates, preparing store metadata and screenshots, and ensuring compliance with store review policies.",
  },
  {
    question: "Can you integrate payment gateways?",
    answer: "Yes, we integrate secure payment gateways including Razorpay, Stripe, Cashfree, PayU, and in-app purchases (Apple IAP and Google Play Billing). We support multiple payment modes like UPI, cards, net banking, digital wallets, and recurring subscriptions.",
  },
  {
    question: "Can you build admin dashboards?",
    answer: "Yes, every mobile application needs a centralized control center. We build custom web-based admin dashboards that give you full control to manage users, content, orders, products, push notifications, reports, and business operations.",
  },
  {
    question: "Can users receive push notifications?",
    answer: "Yes, we integrate Firebase Cloud Messaging (FCM), OneSignal, and custom backend notification engines. You can send transactional alerts, promotional campaigns, automated reminders, and segment-targeted push notifications.",
  },
  {
    question: "Can the app work offline?",
    answer: "Yes, we can implement local caching and offline data synchronization using technologies like SQLite, Hive, or Firebase offline persistence. Users can view key content and queue actions even with low or no internet connectivity, syncing automatically once back online.",
  },
  {
    question: "Do you provide app maintenance?",
    answer: "Yes, we offer ongoing post-launch maintenance packages. This includes OS compatibility updates for new iOS and Android versions, security patches, bug fixes, performance monitoring, and regular feature updates.",
  },
  {
    question: "Can you connect our existing software?",
    answer: "Yes, we build robust RESTful or GraphQL APIs to integrate your mobile app seamlessly with your existing CRM, ERP, warehouse management systems, inventory databases, accounting software, and third-party SaaS tools.",
  },
  {
    question: "How long does mobile app development take?",
    answer: "A focused MVP or standard business application typically takes 6 to 10 weeks. Larger, feature-dense platforms with custom backends, extensive third-party integrations, and complex admin panels take between 12 to 18 weeks depending on scope.",
  },
  {
    question: "Can we manage the app after launch?",
    answer: "Yes, through your custom web admin dashboard, non-technical team members can easily update content, view analytics, manage customer data, configure app settings, and trigger communications without writing code. We also provide thorough training and documentation.",
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
