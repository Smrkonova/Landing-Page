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

const getImageWrapperClass = (img: string, fallbackStyle: string) => {
  if (img.includes("nazr") || img.includes("nzar")) {
    return "absolute right-2 -top-1 md:right-2 md:top-4 w-[49px] h-[108px] md:w-[170px] md:h-[220px] -rotate-[16.42deg] md:rotate-[12deg] object-contain z-10 pointer-events-none";
  }
  if (img.includes("neelachandra")) {
    return "absolute -top-16 -right-1 md:-top-14 md:-right-4 w-[96px] h-[98px] md:w-[190px] md:h-[230px] rotate-0 object-contain z-10 pointer-events-none";
  }
  if (img.includes("wing")) {
    return "absolute left-1/2 -translate-x-1/2 -top-10 md:-top-8 w-[90px] h-[105px] md:w-[180px] md:h-[230px] object-contain z-10 pointer-events-none";
  }
  return fallbackStyle;
};

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
    <section className="relative w-full max-w-full bg-white py-6 md:py-28 lg:py-36 min-h-[407px] md:min-h-0 overflow-hidden">
      {/* Header Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 mb-4 md:mb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center md:text-left"
          >
            {/* Subtitle: Extra Light 200, 16px on mobile, 32px on desktop */}
            <p
              className="text-[#111] uppercase tracking-[0px] text-[16px] md:text-[clamp(1.25rem,2.22vw,2rem)] leading-[20px] md:leading-[1.36] mb-1 font-[200] text-center md:text-left"
              style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
            >
              {tag}
            </p>

            {/* Main Title: Bold 700 / 24px on mobile, Extra Bold 800 / 64px on desktop */}
            <h2
              className="text-[24px] md:text-[clamp(2.25rem,4.44vw,4rem)] font-[700] md:font-[800] text-[#111] leading-[26px] md:leading-[1.36] tracking-[-1.2px] md:tracking-[0px] uppercase text-center md:text-left"
              style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
            >
              {title}
            </h2>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3 self-center md:self-end">
            <button
              onClick={scrollPrev}
              aria-label="Previous case study"
              className="w-8 h-8 md:w-11 md:h-11 rounded-full border border-black/20 flex items-center justify-center text-black/70 hover:text-black hover:border-black/60 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next case study"
              className="w-8 h-8 md:w-11 md:h-11 rounded-full border border-black/20 flex items-center justify-center text-black/70 hover:text-black hover:border-black/60 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Slider Container powered by Embla */}
      <div className="w-full relative pl-4 sm:pl-6 md:pl-12 lg:pl-16">
        <div className="overflow-visible" ref={emblaRef}>
          <div className="flex gap-4 sm:gap-8 pt-16 md:pt-12 pb-8 md:pb-16 pr-[10vw]">
            {items.map((study) => (
              <motion.div
                key={study.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="relative flex-none w-[191px] sm:w-[320px] md:w-[424px] h-[159px] sm:h-[260px] md:h-[353px] bg-white border-[0.45px] md:border border-gray-200/90 rounded-[8.56px] md:rounded-[19px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] md:shadow-[0_6px_30px_rgba(0,0,0,0.04)] p-3 md:p-8 flex flex-col justify-end overflow-visible select-none cursor-grab active:cursor-grabbing"
              >
                {/* Floating Image (overflows the card) */}
                <div className={getImageWrapperClass(study.img, study.imgStyle)}>
                  <Image
                    src={study.img}
                    alt={study.title}
                    fill
                    className="object-contain pointer-events-none drop-shadow-md"
                    sizes="(max-width: 768px) 100px, 220px"
                  />
                </div>

                {/* Card Text Content */}
                <div className="relative z-20">
                  <h3
                    className="font-[600] md:font-[800] text-[14px] md:text-[clamp(1.25rem,1.8vw+0.5rem,1.75rem)] leading-[136%] tracking-[0px] text-[#111] uppercase mb-1 md:mb-3"
                    style={{
                      fontFamily: "var(--font-inter), 'Inter', sans-serif",
                    }}
                  >
                    {study.title}
                  </h3>
                  <p
                    className="font-[300] text-[10px] md:text-[12px] leading-[139%] tracking-[0.05em] text-gray-500 max-w-[170px] md:max-w-[280px]"
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
