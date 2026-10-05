"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const automationData = [
  {
    id: 1,
    title: "MANUFACTURING AND AUTOMATION",
    description:
      "by building systems that eliminate bottlenecks across production, inventory, and daily operations.",
    image: "/images/industries/manufacturing/automation/1.png",
  },
  {
    id: 2,
    title: "MANUFACTURING AND AUTOMATION",
    description:
      "by building systems that eliminate bottlenecks across production, inventory, and daily operations.",
    image: "/images/industries/manufacturing/automation/1.png",
  },
  {
    id: 3,
    title: "ERP INTEGRATIONS",
    description:
      "seamless data flow across all your departments, minimizing manual entry and costly errors.",
    image: "/images/industries/manufacturing/automation/1.png",
  },
  {
    id: 4,
    title: "QUALITY CONTROL",
    description:
      "implementing standardized digital checks that ensure every product meets your strict criteria.",
    image: "/images/industries/manufacturing/automation/1.png",
  },
  {
    id: 5,
    title: "SUPPLY CHAIN MONITORING",
    description:
      "real-time tracking and automated reordering to prevent production downtime.",
    image: "/images/industries/manufacturing/automation/1.png",
  },
];

export default function AutomationCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: false },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((api: any) => {
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
    <div className="relative w-full overflow-hidden sm:overflow-visible">
      {/* Liquid Glass SVG Filter Def for Automation Carousel */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <filter id="liquid-glass-distortion-auto" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.005 0.005" numOctaves="2" seed="9" result="noise" />
            <feGaussianBlur in="noise" stdDeviation="1" result="blurred" />
            <feDisplacementMap in="SourceGraphic" in2="blurred" scale="10" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Carousel */}
      <div className="overflow-visible relative z-10 py-2 sm:py-4" ref={emblaRef}>
        <div className="flex gap-4 sm:gap-6">
          {automationData.map((item, index) => {
            return (
              <div
                key={`${item.id}-${index}`}
                className="flex-none w-[76vw] sm:w-[380px] md:w-[420px] lg:w-[460px] relative select-none"
              >
                {/* Clean Flat Glass Card matching Figma */}
                <div 
                  className="bg-white/65 border border-white/80 rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 lg:p-9 flex flex-col h-[440px] sm:h-[500px] lg:h-[580px] justify-between relative shadow-[0_12px_36px_rgba(0,0,0,0.035)] backdrop-blur-xl overflow-hidden group transition-transform duration-300"
                  style={{ backdropFilter: "blur(24px) url(#liquid-glass-distortion-auto)" }}
                >
                  {/* Image Container */}
                  <div className="relative w-full h-[240px] sm:h-[280px] lg:h-[340px] flex items-center justify-center mb-3">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain object-bottom drop-shadow-md"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col justify-end text-left items-start z-10 pt-2">
                    <h3 className="text-[14.5px] sm:text-[16px] lg:text-[19px] font-semibold text-[#181818] leading-[1.25] mb-2 sm:mb-2.5 uppercase tracking-[0.02em] text-left">
                      {item.title}
                    </h3>
                    <p className="text-[#555] text-[12px] sm:text-[13px] lg:text-[14px] font-normal leading-[1.55] tracking-normal text-left">
                      {item.description}
                    </p>
                  </div>

                  {/* Subtle glass gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-white/10 pointer-events-none rounded-[20px] sm:rounded-[24px]"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
