"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface HealthcareCardItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

export const healthcareCardsData: HealthcareCardItem[] = [
  {
    id: 1,
    image: "/images/industries/healthcare/1.png",
    title: "HEALTHCARE BRAND STRATEGY",
    description: "to reduce redundant tasks while the team works on what needs their attention",
  },
  {
    id: 2,
    image: "/images/industries/healthcare/2.png",
    title: "PATIENT ACQUISITION & HEALTHCARE MARKETING",
    description: "turning operational data into actionable insights for better decisions.",
  },
  {
    id: 3,
    image: "/images/industries/healthcare/3.png",
    title: "HEALTHCARE WEBSITES",
    description: "designed around your processes",
  },
  {
    id: 4,
    image: "/images/industries/healthcare/4.png",
    title: "PATIENT EXPERIENCE DESIGN",
    description: "with technology that grows with industry 4.0",
  },
  {
    id: 5,
    image: "/images/industries/healthcare/5.png",
    title: "PATIENT PORTALS",
    description: "building a brand and its presence by building brand identity, logo among other details",
  },
  {
    id: 6,
    image: "/images/industries/healthcare/6.png",
    title: "PATIENT RELATIONSHIP MANAGEMENT (CRM)",
    description: "bringing the product to the world",
  },
  {
    id: 7,
    image: "/images/industries/healthcare/7.png",
    title: "WORKFLOW AUTOMATION",
    description: "bringing the product to the world",
  },
  {
    id: 8,
    image: "/images/industries/healthcare/8.png",
    title: "HEALTHCARE INTELLIGENCE & ANALYTICS",
    description: "bringing the product to the world",
  },
  {
    id: 9,
    image: "/images/industries/healthcare/9.png",
    title: "DIGITAL INFRASTRUCTURE",
    description: "bringing the product to the world",
  },
  {
    id: 10,
    image: "/images/industries/healthcare/10.png",
    title: "CONNECTED COMMUNICATION SYSTEMS",
    description: "bringing the product to the world",
  },
  {
    id: 11,
    image: "/images/industries/healthcare/11.png",
    title: "INTEGRATED CARE PLATFORMS",
    description: "bringing the product to the world",
  },
];

interface HealthcareCardsSliderProps {
  tag?: string;
  title?: React.ReactNode;
  subtitle?: string;
  items?: HealthcareCardItem[];
}

export default function HealthcareCardsSlider({
  tag = "HEALTHCARE DIGITAL CAPABILITIES",
  title = (
    <>
      <span className="font-extrabold text-black">11 HEALTHCARE SOLUTIONS</span>
      <br className="hidden sm:block" />
      <span className="font-light text-[#444]"> WE ENGINEER FOR GROWTH</span>
    </>
  ),
  subtitle = "Designed to streamline operations, enhance clinical trust, and connect every patient touchpoint.",
  items = healthcareCardsData,
}: HealthcareCardsSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
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
    <section className="relative w-full bg-[#fdfdfd] py-24 md:py-32 overflow-hidden border-t border-neutral-100">
      {/* Ambient Warm Gradient Glow Behind First Cards (recreating the screenshot look) */}
      <div className="absolute top-1/2 left-[5%] -translate-y-1/2 w-[460px] h-[460px] md:w-[560px] md:h-[560px] rounded-full bg-gradient-to-tr from-[#ff9a44]/30 via-[#ff7a18]/20 to-[#ffd074]/25 blur-[110px] pointer-events-none -z-0" />
      <div className="absolute top-1/3 right-[10%] w-[380px] h-[380px] rounded-full bg-gradient-to-bl from-[#ffd074]/15 via-transparent to-transparent blur-[90px] pointer-events-none -z-0" />

      {/* Header Container */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-12 md:mb-16 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          {tag && (
            <span className="text-[clamp(11px,0.4vw+6px,13px)] font-bold tracking-[0.2em] uppercase text-neutral-500 block mb-3">
              {tag}
            </span>
          )}
          <h2 className="text-[clamp(1.875rem,3.5vw+0.5rem,3.25rem)] leading-[1.15] tracking-tight uppercase">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[clamp(12px,0.4vw+6px,14px)] text-neutral-500 font-normal leading-relaxed mt-3 max-w-xl">
              {subtitle}
            </p>
          )}
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center gap-4 self-start md:self-end">
          <span className="font-mono text-xs tracking-wider text-neutral-400 font-medium">
            {String(selectedIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={scrollPrev}
              className="w-11 h-11 rounded-full border border-neutral-200 bg-white/80 backdrop-blur-sm flex items-center justify-center text-neutral-700 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 shadow-sm cursor-pointer"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollNext}
              className="w-11 h-11 rounded-full border border-neutral-200 bg-white/80 backdrop-blur-sm flex items-center justify-center text-neutral-700 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 shadow-sm cursor-pointer"
              aria-label="Next slide"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Slider Carousel Container */}
      <div className="w-full relative pl-6 md:pl-12 lg:pl-16 z-10">
        <div className="overflow-visible cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-5 md:gap-7 pb-8 pr-[10vw]">
            {items.map((item, index) => {
              // Float animation duration variation for natural organic feel
              const floatDuration = 4.2 + (index % 4) * 0.6;
              const floatDelay = (index % 3) * 0.4;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="relative flex-none w-[300px] sm:w-[350px] md:w-[380px] lg:w-[410px] h-[460px] sm:h-[490px] md:h-[520px] bg-white rounded-[28px] md:rounded-[34px] border border-neutral-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_22px_50px_rgba(0,0,0,0.08)] hover:border-neutral-200/90 transition-all duration-500 ease-out p-7 sm:p-9 flex flex-col justify-between overflow-hidden group select-none"
                >
                  {/* Subtle inner card sheen on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-orange-50/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* 3D Floating Graphic Container */}
                  <div className="relative w-full h-[260px] sm:h-[285px] md:h-[305px] flex items-center justify-center z-10">
                    <motion.div
                      animate={{
                        y: [-6, 6, -6],
                      }}
                      transition={{
                        duration: floatDuration,
                        delay: floatDelay,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative w-full h-full flex items-center justify-center"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain p-2 drop-shadow-[0_16px_32px_rgba(0,0,0,0.08)] group-hover:scale-105 transition-transform duration-500 ease-out pointer-events-none"
                      />
                    </motion.div>
                  </div>

                  {/* Bottom Text Content Area */}
                  <div className="relative z-10 flex flex-col justify-end pt-3">
                    <h3 className="font-sans font-semibold text-[13px] sm:text-[14px] uppercase tracking-[0.05em] text-neutral-900 leading-[1.3] group-hover:text-black transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans font-normal text-[11px] sm:text-[12px] text-neutral-500 leading-[1.65] mt-2 group-hover:text-neutral-700 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Pagination Dots */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-start gap-1.5 pt-4">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => emblaApi && emblaApi.scrollTo(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                idx === selectedIndex ? "w-8 bg-neutral-900" : "w-1.5 bg-neutral-300 hover:bg-neutral-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
