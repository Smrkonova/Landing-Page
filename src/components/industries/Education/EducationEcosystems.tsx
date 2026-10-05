"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface EcosystemItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const ecosystemCarouselData: EcosystemItem[] = [
  {
    id: 1,
    title: "Healthcare Brand Strategy",
    description:
      "to reduce redundant tasks while the team works on what needs their attention",
    image:
      "/images/industries/education/caruosel/3D Healthcare Shield Emblem 1.png",
  },
  {
    id: 2,
    title: "Patient Acquisition & Healthcare Marketing",
    description:
      "turning operational data into actionable insights for better decisions.",
    image:
      "/images/industries/education/caruosel/Glossy Target Rings with Minimal Human Icon 1.png",
  },
  {
    id: 3,
    title: "Healthcare Websites",
    description: "designed around your processes",
    image:
      "/images/industries/education/caruosel/Futuristic Glass Portal Doorway 1.png",
  },
  {
    id: 4,
    title: "designed around your processes",
    description: "designed around your processes",
    image:
      "/images/industries/education/caruosel/Futuristic Capsule Medical Record 1.png",
  },
  {
    id: 5,
    title: "Patient Portals",
    description:
      "building a brand and its presence by building brand identity, logo among other details",
    image:
      "/images/industries/education/caruosel/Protective Hands Embracing a Glowing Orb 1.png",
  },
];

export default function EducationEcosystems() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: false },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((api: typeof emblaApi) => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-full bg-white text-[#212120] py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Liquid Glass SVG Filter Def */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <filter
            id="liquid-glass-distortion-edu"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.005 0.005"
              numOctaves="2"
              seed="9"
              result="noise"
            />
            <feGaussianBlur in="noise" stdDeviation="1" result="blurred" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="blurred"
              scale="8"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Heading & Description */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between min-h-[440px] lg:min-h-[634px] py-2 z-10 items-start text-left"
          >
            {/* Top Block: Subtitle + Main Header */}
            <div>
              {/* Subtitle: HOW SMRKONOVA THINKS */}
              <p
                className="font-normal text-[clamp(12px,0.97vw,14px)] leading-[1.22] tracking-[0.05em] uppercase text-[#212120] mb-6 sm:mb-8 text-left"
                style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
              >
                HOW SMRKONOVA THINKS
              </p>

              {/* Main Header (64px, Extra Light) */}
              <h2
                className="font-[200] text-[clamp(2.25rem,4.44vw,4rem)] leading-[1.22] tracking-[0.05em] uppercase text-[#212120] text-left"
                style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
              >
                WE ENGINEER
                <br />
                DIGITAL
                <br />
                ECOSYSTEMS FOR
                <br />
                EDUCATIONAL
                <br />
                INSTITUTIONS
              </h2>
            </div>

            {/* Bottom Paragraph (12px, Light) */}
            <div className="mt-8 sm:mt-12 lg:mt-0 max-w-[420px] text-left">
              <p
                className="font-[300] text-[clamp(11px,0.833vw,12px)] leading-[1.45] tracking-[0.05em] text-[#555555] text-left"
                style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
              >
                Nothing operates in isolation. Every touchpoint, platform, and
                process work together to improve the student experience while
                making admissions, communication, and institutional operations
                more efficient.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Glass Card Slider (Only Active Card Visible) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-end justify-center relative">
            {/* Ambient Radiant Orange/Amber Glow Blob behind the active glass card */}
            <div
              className="absolute top-1/2 right-1/2 lg:right-16 translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[340px] sm:w-[440px] md:w-[500px] h-[340px] sm:h-[440px] md:h-[500px] rounded-full pointer-events-none z-0"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, #FFA100 0%, #FF9000 40%, rgba(255, 161, 0, 0) 75%)",
                filter: "blur(90px)",
                opacity: 0.75,
              }}
            />

            {/* Carousel Viewport: clipped to card width so only the active card is visible */}
            <div className="w-full max-w-[524px] relative z-10">
              <div className="overflow-hidden rounded-[10px]" ref={emblaRef}>
                <div className="flex">
                  {ecosystemCarouselData.map((item, index) => {
                    const isActive = index === selectedIndex;
                    return (
                      <div
                        key={item.id}
                        className="flex-none w-full relative select-none"
                      >
                        {/* Inner animated wrapper: only active card is visible */}
                        <div
                          className={`w-full h-full transition-all duration-[700ms] ease-[0.16,1,0.3,1] ${
                            isActive
                              ? "opacity-100 scale-100 pointer-events-auto"
                              : "opacity-0 scale-[0.96] pointer-events-none"
                          }`}
                        >
                          {/* Glassy Effect Card (524px x 634px, rounded 10px) */}
                          <div
                            className="relative z-10 w-full h-[480px] sm:h-[540px] md:h-[634px] rounded-[10px] p-8 sm:p-10 md:p-12 flex flex-col justify-between border border-white/70 overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)]"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0.18) 100%)",
                              backdropFilter:
                                "blur(24px) url(#liquid-glass-distortion-edu)",
                              WebkitBackdropFilter: "blur(24px)",
                            }}
                          >
                            {/* Inner Specular Sheen */}
                            <div
                              className="absolute inset-0 pointer-events-none rounded-[10px]"
                              style={{
                                background:
                                  "linear-gradient(125deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%)",
                              }}
                            />

                            {/* 3D Floating Artwork Container */}
                            <div className="relative w-full h-[240px] sm:h-[280px] md:h-[340px] flex items-center justify-center z-10 mt-2">
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.14)] pointer-events-none"
                                sizes="(max-width: 768px) 300px, 460px"
                              />
                            </div>

                            {/* Card Content at bottom */}
                            <div className="relative z-10 max-w-[420px] mt-auto text-left">
                              {/* Card Header: font-family: Inter, font-weight: 400, font-size: 16px, line-height: 122%, uppercase */}
                              <h3
                                className="font-normal text-[16px] leading-[1.22] tracking-[0] uppercase text-[#212120] mb-3 text-left"
                                style={{
                                  fontFamily:
                                    "var(--font-inter), 'Inter', sans-serif",
                                }}
                              >
                                {item.title}
                              </h3>

                              {/* Card Paragraph: font-family: Inter, font-weight: 300, font-size: 14px, line-height: 139%, letter-spacing: 5% */}
                              <p
                                className="font-[300] text-[14px] leading-[1.39] tracking-[0.05em] text-[#555555] text-left"
                                style={{
                                  fontFamily:
                                    "var(--font-inter), 'Inter', sans-serif",
                                }}
                              >
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

              {/* Dots Indicator */}
              <div className="flex items-center justify-center lg:justify-start gap-1.5 mt-6 z-20 relative">
                {ecosystemCarouselData.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => emblaApi && emblaApi.scrollTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      i === selectedIndex
                        ? "w-6 bg-black"
                        : "w-1.5 bg-black/20 hover:bg-black/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
