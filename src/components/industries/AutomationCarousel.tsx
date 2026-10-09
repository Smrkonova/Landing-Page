"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface ManufacturingEcosystemItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const manufacturingCarouselData: ManufacturingEcosystemItem[] = [
  {
    id: 1,
    title: "MANUFACTURING AND AUTOMATION",
    description:
      "Building systems that eliminate bottlenecks across production, inventory, and daily operations.",
    image: "/images/industries/manufacturing/automation/ma1.png",
  },
  {
    id: 2,
    title: "INDUSTRIAL AUTOMATION & TELEMETRY",
    description:
      "Synchronizing smart machinery, factory floor sensors, and automated workflow triggers.",
    image: "/images/industries/manufacturing/automation/ma2.png",
  },
  {
    id: 3,
    title: "ERP INTEGRATIONS",
    description:
      "Seamless data flow across all your departments, minimizing manual entry and costly errors.",
    image: "/images/industries/manufacturing/automation/ma3.png",
  },
  {
    id: 4,
    title: "QUALITY CONTROL & COMPLIANCE",
    description:
      "Implementing standardized digital checks that ensure every product meets your strict criteria.",
    image: "/images/industries/manufacturing/automation/ma4.png",
  },
  {
    id: 5,
    title: "SUPPLY CHAIN MONITORING",
    description:
      "Real-time tracking and automated reordering to prevent production downtime.",
    image: "/images/industries/manufacturing/automation/ma5.png",
  },
  {
    id: 6,
    title: "DIGITAL CATALOGS & B2B PORTALS",
    description:
      "Streamlining interactive product specs, distributor ordering, and digital inventory workflows.",
    image: "/images/industries/manufacturing/automation/ma6.png",
  },
  {
    id: 7,
    title: "MODULAR ENTERPRISE SYSTEMS",
    description:
      "Scalable digital architectures uniting factory operations, logistics, and executive management.",
    image: "/images/industries/manufacturing/automation/ma7.png",
  },
];

export default function AutomationCarousel() {
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
            id="liquid-glass-distortion-auto"
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
                MEET YOUR
                <br />
                EXTENDED
                <br />
                WING
              </h2>
            </div>

            {/* Bottom Sub-Paragraph */}
            <div className="mt-8 sm:mt-12 lg:mt-0 max-w-[440px] text-left">
              <p
                className="font-[300] text-[clamp(11px,0.833vw,12px)] leading-[1.45] tracking-[0.05em] text-[#555555] text-left"
                style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
              >
                Once your business is on-board, we will study it, begin building seamless
                systems for enterprises, ERP planners among others. With Smrkonova, build
                brand specific operational systems for your business, keeping your
                customers&apos; needs right on the top. We don&apos;t just build factory
                websites, we engineer digital business systems using:
              </p>
            </div>
          </motion.div>

          {/* Right Column: Glass Card Slider (Only Active Card Visible) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-end justify-center relative">
            {/* Ambient Radiant Golden/Amber Glow Blob behind the active glass card */}
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
                  {manufacturingCarouselData.map((item, index) => {
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
                                "blur(24px) url(#liquid-glass-distortion-auto)",
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
                              {/* Card Header: 16px Regular, uppercase */}
                              <h3
                                className="font-normal text-[16px] leading-[1.22] tracking-[0] uppercase text-[#212120] mb-3 text-left"
                                style={{
                                  fontFamily:
                                    "var(--font-inter), 'Inter', sans-serif",
                                }}
                              >
                                {item.title}
                              </h3>

                              {/* Card Paragraph: 14px Light, leading 139%, letter-spacing 5% */}
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
                {manufacturingCarouselData.map((_, i) => (
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
