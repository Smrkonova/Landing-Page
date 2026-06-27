"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Smrkonova completely transformed our digital presence. Their attention to detail in UI/UX design and the seamless web development process exceeded our expectations. Our conversions have doubled since the launch.",
    name: "Arjun Reddy",
    role: "Founder, TechFlow Bangalore",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "We needed a complex e-commerce platform built from scratch, and they delivered a masterpiece. The site is blazing fast, SEO optimized, and incredibly easy for our customers to navigate. Highly recommended.",
    name: "Priya Sharma",
    role: "Marketing Director, Bloom Retail",
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    quote: "Their approach to branding and web design is simply unmatched. They took the time to understand our vision and translated it into a stunning, high-performing website that truly represents who we are.",
    name: "Rahul Desai",
    role: "CEO, Desai Enterprises",
    image: "https://i.pravatar.cc/150?img=68"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

const Testimonials = () => {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="w-full bg-[#fbfbfd] py-32 px-6 md:px-12 relative z-30">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">

        {/* Header */}
        <div className="text-center flex flex-col items-center gap-6">
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900"
          >
            Don't just take our word for it.
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-500 font-medium tracking-tight max-w-2xl"
          >
            Read what our partners have to say about collaborating with our team.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-xl hover:shadow-black/[0.04] transition-shadow duration-500 min-h-[400px]"
            >
              <div className="flex flex-col gap-8">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
                  <Quote className="w-5 h-5 text-gray-400 fill-gray-400" />
                </div>
                <p className="text-xl leading-relaxed text-gray-700 font-medium tracking-tight">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-12 pt-8 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-gray-900 tracking-tight">{testimonial.name}</span>
                  <span className="text-sm font-medium text-gray-500">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
