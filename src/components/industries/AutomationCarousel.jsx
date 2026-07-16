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
    title: "ERP INTEGRATIONS",
    description:
      "seamless data flow across all your departments, minimizing manual entry and costly errors.",
    image: "/images/industries/manufacturing/automation/1.png", // reusing for demo
  },
  {
    id: 3,
    title: "QUALITY CONTROL",
    description:
      "implementing standardized digital checks that ensure every product meets your strict criteria.",
    image: "/images/industries/manufacturing/automation/1.png", // reusing for demo
  },
  {
    id: 4,
    title: "QUALITY CONTROL",
    description:
      "implementing standardized digital checks that ensure every product meets your strict criteria.",
    image: "/images/industries/manufacturing/automation/1.png", // reusing for demo
  },
  {
    id: 5,
    title: "QUALITY CONTROL",
    description:
      "implementing standardized digital checks that ensure every product meets your strict criteria.",
    image: "/images/industries/manufacturing/automation/1.png", // reusing for demo
  },
];

export default function AutomationCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: false },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-[100vw] max-w-[150vw] md:w-[100vw] lg:w-[80vw] xl:w-[70vw] perspective-[1000px]">
      {/* Liquid Glass SVG Filter Def for Automation Carousel */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="liquid-glass-distortion-auto" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.005 0.005" numOctaves="2" seed="9" result="noise" />
            <feGaussianBlur in="noise" stdDeviation="1" result="blurred" />
            <feDisplacementMap in="SourceGraphic" in2="blurred" scale="10" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
      {/* Background Circular Glow */}
      <div className="absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] bg-[#ffb466] rounded-full blur-[100px] opacity-30 pointer-events-none z-0"></div>

      {/* Carousel */}
      <div className="overflow-hidden relative z-10 p-4 md:py-12" ref={emblaRef}>
        <div className="flex gap-4 md:gap-6 transform-style-3d">
          {automationData.map((item, index) => {
            const isActive = index === selectedIndex;
            return (
              <div
                key={item.id}
                className="flex-none w-[85vw] sm:w-[400px] lg:w-[524px] relative"
              >
                {/* Inner animated wrapper */}
                <div
                  className={`w-full h-full transition-all duration-[800ms] ease-[0.16,1,0.3,1] origin-center ${isActive
                    ? "rotate-y-0 rotate-z-0 scale-100 opacity-100 z-20 "
                    : "rotate-y-[-25deg] scale-[0.85] opacity-40 z-0 translate-x-4"
                    }`}
                >
                  {/* Glass Card */}
                  <div 
                    className="bg-white/50 border border-white/60 rounded-[1.5rem] p-8 lg:p-10 flex flex-col h-[500px] lg:h-[634px] relative group"
                    style={{ backdropFilter: "blur(24px) url(#liquid-glass-distortion-auto)" }}
                  >

                    {/* Image Container */}
                    <div className="relative w-[120%] h-[280px] lg:h-[400px] -ml-[15%] -mt-4 mb-8 z-20">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain object-left-bottom drop-shadow-xl"
                      />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col justify-end flex-grow text-center lg:text-left items-center lg:items-start z-10">
                      <h2 className="text-[20px] lg:text-[24px] font-black text-[#111] leading-[1.1] mb-2 uppercase tracking-tight">
                        {item.title}
                      </h2>
                      <p className="text-[#555] text-[11px] lg:text-[13px] font-medium leading-[1.6] uppercase tracking-wider">
                        {item.description}
                      </p>
                    </div>

                    {/* Subtle gradient overlay for extra glass feel */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-white/20 pointer-events-none rounded-[1.5rem]"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
