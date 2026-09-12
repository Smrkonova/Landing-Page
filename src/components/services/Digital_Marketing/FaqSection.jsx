"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does SEO take to show results?",
    answer: "SEO is a compound growth strategy that typically begins showing tangible organic visibility and keyword rank improvements within 3 to 6 months. Timelines depend on existing domain authority, competitive density in your market, technical site health, and the consistency of content and authority-building efforts.",
  },
  {
    question: "Do I need Google Ads and SEO together?",
    answer: "Combining Google Ads and SEO produces the strongest search footprint. Google Ads delivers immediate traffic, leads, and conversion testing data from day one, while SEO builds long-term organic authority and lowers blended acquisition costs. Leveraging both maximizes search engine real estate across high-intent queries.",
  },
  {
    question: "Can you optimise my existing website?",
    answer: "Yes. We begin with an exhaustive audit of your current site covering technical SEO, page speed, mobile performance, on-page structure, and conversion funnels. We then implement technical fixes, optimize content and metadata, and streamline user journeys without requiring a rebuild if your current platform is viable.",
  },
  {
    question: "Do you manage Google Business Profiles?",
    answer: "Yes. We handle end-to-end Google Business Profile (formerly GMB) setup, category optimization, business verification, local citations, review generation strategies, photo updates, and location-based local SEO to help you rank in Google Maps and local 3-pack search results.",
  },
  {
    question: "Can you create Meta ad campaigns?",
    answer: "Yes. We configure your Meta Business Manager, Pixel, and Conversions API (CAPI), build custom and lookalike audiences, design high-converting creative variations (images, carousels, videos), and manage continuous A/B testing and retargeting campaigns across Facebook and Instagram.",
  },
  {
    question: "How do you track conversions?",
    answer: "We implement advanced server-side and client-side conversion tracking using Google Tag Manager, Google Analytics 4, and Meta Pixel/CAPI. We track phone calls, form submissions, purchases, button clicks, and lead events so you have complete attribution for every dollar spent.",
  },
  {
    question: "Will I receive monthly reports?",
    answer: "Yes. Every month you receive a transparent, easy-to-understand performance report detailing impressions, website traffic, rankings, lead conversions, cost-per-acquisition (CPA), and return on ad spend (ROAS), accompanied by strategic recommendations for the upcoming month.",
  },
  {
    question: "Can you work with our internal marketing team?",
    answer: "Absolutely. We often collaborate alongside in-house marketing leaders, designers, or developers. We can handle specialized areas like performance advertising, technical SEO, and conversion analytics, or provide strategic roadmaps while your team focuses on content and brand execution.",
  },
  {
    question: "How much should I spend on advertising?",
    answer: "Ad spend depends on your industry, target geography, customer acquisition goals, and average customer lifetime value. We usually recommend starting with a focused monthly testing budget to validate audiences, ad creatives, and conversion rates, and then scaling budgets profitably based on validated ROAS and lead cost.",
  },
  {
    question: "Do you create landing pages?",
    answer: "Yes. We design and develop dedicated, fast-loading landing pages specifically tailored for your advertising campaigns. Every landing page is optimized for conversion with compelling headlines, clear value propositions, trust signals, and distraction-free inquiry forms.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(1); // Open the second one by default to match screenshot

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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#111] text-center mb-12 md:mb-16 uppercase tracking-wide">
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
