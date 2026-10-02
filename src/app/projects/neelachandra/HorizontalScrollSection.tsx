"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const slides = [
  {
    num: "01",
    title: "DISCOVERY",
    text: "Before designing anything, we understood the business behind the buildings—their experience, reputation, customers, and ambitions."
  },
  {
    num: "02",
    title: "DIRECTION",
    text: "We translated that understanding into a new brand direction, creating an identity that felt as established and credible as the work Neelachandra was already known for."
  },
  {
    num: "03",
    title: "DEVELOPMENT",
    text: "We explored hundreds of sketches, concepts, colours, and type combinations before arriving at an identity that felt distinctly Neelachandra."
  },
  {
    num: "04",
    title: "SYSTEM",
    text: "The identity expanded beyond the logo into a complete system—business cards, brochures, company profiles, stationery, signage, glass branding, and more."
  },
  {
    num: "05",
    title: "EXECUTION",
    text: "We took the brand into the real world, working directly at their office to plan, measure, and execute physical brand applications."
  },
  {
    num: "06",
    title: "EXPERIENCE",
    text: "We designed and developed a new Webflow website to showcase their projects, services, story, and credibility—while laying the foundations for SEO and lead generation."
  },
  {
    num: "07",
    title: "VISIBILITY",
    text: "We tackled the visibility gaps, restoring and optimizing their Google Business Profile so potential customers could finally discover the business online."
  },
  {
    num: "08",
    title: "ACTIVATION",
    text: "With the foundations in place, every touchpoint—from Google Search to the office walls—began speaking the same visual language."
  }
];

export default function HorizontalScrollSection() {
  const containerRef = useRef(null);

  // We have 8 slides, so we make the container 800vh tall to allow scrolling
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // x transforms from 0% to -((slides.length - 1) * 100)%
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(slides.length - 1) * 100}vw`]);

  return (
    <section ref={containerRef} className="relative bg-black" style={{ height: `${slides.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div style={{ x }} className="flex h-full w-[800vw]">
          {slides.map((slide, index) => (
            <div key={index} className="relative h-full w-[100vw] flex-shrink-0 flex items-center justify-center">
              
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="/images/projects/neelachandra/slide-1.png" 
                  alt={slide.title} 
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto p-8 md:p-16 lg:p-24 flex flex-col justify-between text-white">
                
                {/* Top Header */}
                <div className="w-full flex justify-start">
                  <p className="text-[clamp(10px,0.6vw+4px,12px)] font-light tracking-[0.3em] uppercase opacity-80">
                    Behind The Process
                  </p>
                </div>

                {/* Big Center Title */}
                <div className="w-full flex justify-center items-center pointer-events-none">
                  <h1 className="text-[clamp(3.5rem,10vw,12rem)] font-thin tracking-widest uppercase opacity-90 drop-shadow-2xl">
                    {slide.title}
                  </h1>
                </div>

                {/* Bottom Footer (Number & Text) */}
                <div className="w-full flex justify-between items-end">
                  <div className="text-[clamp(1.25rem,1.5vw+0.5rem,1.5rem)] font-light opacity-80">
                    {slide.num}
                  </div>
                  
                  <div className="max-w-[300px] md:max-w-[400px] text-right">
                    <p className="text-[clamp(10px,0.6vw+4px,13px)] font-light leading-[1.8] opacity-90">
                      {slide.text}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
