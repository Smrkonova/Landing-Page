"use client";

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const faqs = [
  {
    question: "What is the typical timeline for a website design project?",
    answer: "Our typical timeline ranges from 4 to 8 weeks, depending on the complexity of the project. This includes everything from initial strategy and UI/UX design to development, SEO optimization, and final launch."
  },
  {
    question: "Do you provide ongoing maintenance after the website is launched?",
    answer: "Yes, we offer comprehensive post-launch support and maintenance packages. We ensure your website remains secure, up-to-date, and optimized for peak performance as your business grows."
  },
  {
    question: "Will my website be optimized for search engines (SEO)?",
    answer: "Absolutely. SEO is baked into our development process from day one. We ensure best practices for site speed, mobile responsiveness, structured data, and semantic HTML to give you a strong foundation for organic growth."
  },
  {
    question: "What makes Smrkonova different from other web design agencies?",
    answer: "We combine stunning, conversion-focused design with cutting-edge engineering. We don't just build websites; we build scalable digital experiences designed specifically to elevate your brand and drive measurable business results."
  }
];

const FaqItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-black/10">
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full py-8 text-left group"
      >
        <h4 className="text-2xl md:text-3xl font-medium tracking-tight text-black group-hover:text-gray-600 transition-colors duration-300 pr-8">
          {faq.question}
        </h4>
        <div className={`w-12 h-12 flex-shrink-0 rounded-full border border-black/10 flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-black text-white rotate-45' : 'bg-transparent text-black group-hover:bg-black/5'}`}>
          <Plus className="w-6 h-6" />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed pb-8 max-w-4xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default
  const containerRef = useRef(null);

  useGSAP(() => {
    const faqItems = gsap.utils.toArray('.faq-item');

    gsap.fromTo(faqItems,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Header animation
    gsap.fromTo('.faq-header',
      { opacity: 0, x: -50 },
      {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-white py-32 md:py-48 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">

        {/* Left Side Header */}
        <div className="md:w-1/3 flex flex-col gap-6 faq-header">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-500">
            Got Questions?
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black leading-tight">
            Frequently <br />
            Asked <br />
            Questions.
          </h3>
        </div>

        {/* Right Side Accordion */}
        <div className="md:w-2/3 flex flex-col">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <FaqItem
                faq={faq}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Faq;
