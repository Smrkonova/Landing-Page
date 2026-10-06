"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const healthcareData = [
  {
    id: 1,
    title: "HEALTHCARE BRAND STRATEGY",
    description: "to reduce redundant tasks while the team works on what needs their attention",
    image: "/images/industries/healthcare/1.png",
  },
  {
    id: 2,
    title: "PATIENT ACQUISITION & HEALTHCARE MARKETING",
    description: "turning operational data into actionable insights for better decisions.",
    image: "/images/industries/healthcare/2.png",
  },
  {
    id: 3,
    title: "HEALTHCARE WEBSITES",
    description: "designed around your processes",
    image: "/images/industries/healthcare/3.png",
  },
  {
    id: 4,
    title: "PATIENT EXPERIENCE DESIGN",
    description: "with technology that grows with industry 4.0",
    image: "/images/industries/healthcare/4.png",
  },
  {
    id: 5,
    title: "PATIENT PORTALS",
    description: "building a brand and its presence by building brand identity, logo among other details",
    image: "/images/industries/healthcare/5.png",
  },
  {
    id: 6,
    title: "PATIENT RELATIONSHIP MANAGEMENT (CRM)",
    description: "bringing the product to the world",
    image: "/images/industries/healthcare/6.png",
  },
  {
    id: 7,
    title: "WORKFLOW AUTOMATION",
    description: "bringing the product to the world",
    image: "/images/industries/healthcare/7.png",
  },
  {
    id: 8,
    title: "HEALTHCARE INTELLIGENCE & ANALYTICS",
    description: "bringing the product to the world",
    image: "/images/industries/healthcare/8.png",
  },
  {
    id: 9,
    title: "DIGITAL INFRASTRUCTURE",
    description: "bringing the product to the world",
    image: "/images/industries/healthcare/9.png",
  },
  {
    id: 10,
    title: "CONNECTED COMMUNICATION SYSTEMS",
    description: "bringing the product to the world",
    image: "/images/industries/healthcare/10.png",
  },
  {
    id: 11,
    title: "INTEGRATED CARE PLATFORMS",
    description: "bringing the product to the world",
    image: "/images/industries/healthcare/11.png",
  },
];

export default function HealthcareCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: false },
    [Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((api: any) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative w-full max-w-[100vw] lg:max-w-[550px] xl:max-w-[620px] perspective-[1000px]">
      {/* Background Circular Ambient Glow matching screenshot */}
      <div className="absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] lg:w-[560px] lg:h-[560px] bg-gradient-to-tr from-[#ff9a44] via-[#ff6a00] to-[#ffd074] rounded-full blur-[100px] opacity-55 pointer-events-none z-0" />

      {/* Navigation Arrow Controls */}
      <div className="flex items-center justify-between mb-4 px-2 relative z-20">
        <span className="font-mono text-xs tracking-wider text-neutral-500 font-medium">
          {String(selectedIndex + 1).padStart(2, "0")} / {String(healthcareData.length).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={scrollPrev}
            className="w-9 h-9 rounded-full border border-white/60 bg-white/60 backdrop-blur-md flex items-center justify-center text-neutral-800 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all shadow-sm cursor-pointer"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={scrollNext}
            className="w-9 h-9 rounded-full border border-white/60 bg-white/60 backdrop-blur-md flex items-center justify-center text-neutral-800 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all shadow-sm cursor-pointer"
            aria-label="Next slide"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden relative z-10 p-2 py-4" ref={emblaRef}>
        <div className="flex gap-4 md:gap-6 transform-style-3d">
          {healthcareData.map((item, index) => {
            const isActive = index === selectedIndex;
            return (
              <div
                key={item.id}
                className="flex-none w-[82vw] sm:w-[360px] lg:w-[420px] relative"
              >
                {/* 3D Animated Wrapper */}
                <div
                  className={`w-full h-full transition-all duration-[700ms] ease-[0.16,1,0.3,1] origin-center ${
                    isActive
                      ? "rotate-y-0 scale-100 opacity-100 z-20"
                      : "rotate-y-[-20deg] scale-[0.88] opacity-50 z-0 translate-x-3"
                  }`}
                >
                  {/* Ultra-Premium Glassmorphic Translucent Card */}
                  <div className="bg-white/40 hover:bg-white/50 backdrop-blur-2xl border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.06),inset_0_1px_1px_0_rgba(255,255,255,0.85)] rounded-[2rem] p-7 sm:p-9 flex flex-col h-[480px] sm:h-[530px] justify-between relative group transition-all duration-500 overflow-hidden">
                    {/* Subtle Glass Diagonal Specular Sheen */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/15 to-white/40 pointer-events-none rounded-[2rem]" />

                    {/* 3D Floating Image Container */}
                    <div className="relative w-full h-[270px] sm:h-[310px] my-auto flex items-center justify-center z-20">
                      <motion.div
                        animate={{ y: [-6, 6, -6] }}
                        transition={{
                          duration: 4.5 + (index % 3) * 0.6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="relative w-full h-full flex items-center justify-center"
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          priority={index < 3}
                          className="object-contain p-2 drop-shadow-[0_18px_24px_rgba(0,0,0,0.10)] group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                      </motion.div>
                    </div>

                    {/* Text Content */}
                    <div className="relative z-10 flex flex-col justify-end pt-2">
                      <h3 className="text-[13px] sm:text-[14px] font-bold text-[#111] leading-snug uppercase tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-[#555] text-[11px] sm:text-[12px] font-normal leading-relaxed mt-1.5 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Bar */}
      <div className="flex items-center justify-center gap-1.5 pt-3 relative z-20">
        {healthcareData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => emblaApi && emblaApi.scrollTo(idx)}
            className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
              idx === selectedIndex ? "w-6 bg-neutral-900" : "w-1.5 bg-neutral-300 hover:bg-neutral-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
