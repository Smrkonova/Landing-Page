"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface HealthcareCaseStudyItem {
  id: number;
  title: string;
  desc: string;
  img: string;
  imgStyle: string;
}

const defaultCaseStudies: HealthcareCaseStudyItem[] = [
  {
    id: 1,
    title: "WING HEALTH",
    desc: "End-to-end digital patient journeys, integrated EHR/EMR workflows, and ABDM-compliant clinical record access.",
    img: "/images/industries/case-studies/wing.png",
    imgStyle: "absolute left-1/2 -top-8 w-[180px] h-[230px] object-contain z-10",
  },
  {
    id: 2,
    title: "NAZR CLINICS",
    desc: "Patient acquisition engine and automated WhatsApp booking driving 3.2x verified consultation growth.",
    img: "/images/industries/case-studies/nazr.png",
    imgStyle: "absolute right-2 top-4 w-[170px] h-[220px] object-contain z-10 rotate-[12deg]",
  },
  {
    id: 3,
    title: "NEELACHANDRA DIAGNOSTICS",
    desc: "Real-time diagnostic report delivery, digital sample tracking, and integrated telemedicine consultation suites.",
    img: "/images/industries/case-studies/neelachandra.png",
    imgStyle: "absolute -top-14 -right-4 w-[190px] h-[230px] object-contain z-10",
  },
  {
    id: 4,
    title: "VERDANT CARE",
    desc: "Multi-specialty hospital management platform with real-time doctor availability and transparent billing.",
    img: "/images/industries/case-studies/nazr.png",
    imgStyle: "absolute right-2 top-4 w-[170px] h-[220px] object-contain z-10 rotate-[10deg]",
  },
  {
    id: 5,
    title: "METROPOLIS MEDTECH",
    desc: "HIPAA-compliant remote patient monitoring, IoT device telemetry, and post-operative recovery tracking.",
    img: "/images/industries/case-studies/neelachandra.png",
    imgStyle: "absolute -top-14 -right-2 w-[190px] h-[230px] object-contain z-10",
  },
];

interface HealthcareCaseStudiesSliderProps {
  tag?: string;
  title?: string;
  items?: HealthcareCaseStudyItem[];
}

export default function HealthcareCaseStudiesSlider({
  tag = "BUILT TO BECOME A LANDMARK",
  title = "CASE STUDIES",
  items = defaultCaseStudies,
}: HealthcareCaseStudiesSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative w-full bg-white py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Header Container */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-14 sm:mb-18 md:mb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center md:text-left"
          >
            {/* Subtitle: Extra Light 200, 32px, leading 136%, uppercase */}
            <p
              className="text-[#111] uppercase tracking-[0] text-[clamp(1.25rem,2.22vw,2rem)] leading-[1.36] mb-1 font-[200] text-center md:text-left"
              style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
            >
              {tag}
            </p>

            {/* Main Title: Extra Bold 800, 64px, leading 136%, uppercase */}
            <h2
              className="text-[clamp(2.25rem,4.44vw,4rem)] font-[800] text-[#111] leading-[1.36] tracking-[0] uppercase text-center md:text-left"
              style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
            >
              {title}
            </h2>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center md:justify-start gap-3 self-center md:self-end">
            <button
              onClick={scrollPrev}
              aria-label="Previous case study"
              className="w-11 h-11 rounded-full border border-black/20 flex items-center justify-center text-black/70 hover:text-black hover:border-black/60 transition-colors cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next case study"
              className="w-11 h-11 rounded-full border border-black/20 flex items-center justify-center text-black/70 hover:text-black hover:border-black/60 transition-colors cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Slider Container powered by Embla */}
      <div className="w-full relative pl-6 md:pl-12 lg:pl-16">
        <div className="overflow-visible" ref={emblaRef}>
          <div className="flex gap-6 sm:gap-8 pt-12 pb-16 pr-[10vw]">
            {items.map((study) => (
              <motion.div
                key={study.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="relative flex-none w-[300px] sm:w-[360px] md:w-[424px] h-[320px] sm:h-[353px] bg-white border border-gray-200/90 rounded-[19px] shadow-[0_6px_30px_rgba(0,0,0,0.04)] p-8 flex flex-col justify-end overflow-visible select-none cursor-grab active:cursor-grabbing"
              >
                {/* Floating Image (overflows the card) */}
                <div className={study.imgStyle}>
                  <Image
                    src={study.img}
                    alt={study.title}
                    fill
                    className="object-contain pointer-events-none drop-shadow-md"
                    sizes="(max-width: 768px) 180px, 220px"
                  />
                </div>

                {/* Card Text Content */}
                <div className="relative z-20">
                  <h3
                    className="text-[clamp(1.25rem,1.8vw+0.5rem,1.75rem)] font-[800] text-[#111] uppercase tracking-[0] mb-3"
                    style={{
                      fontFamily: "var(--font-inter), 'Inter', sans-serif",
                    }}
                  >
                    {study.title}
                  </h3>
                  <p
                    className="text-[12px] text-gray-500 font-[300] leading-[1.39] tracking-[0.05em] max-w-[280px]"
                    style={{
                      fontFamily: "var(--font-inter), 'Inter', sans-serif",
                    }}
                  >
                    {study.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
