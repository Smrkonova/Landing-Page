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
                  <div className="bg-white/50 backdrop-blur-xl border border-white/60 rounded-[1.5rem] p-8 lg:p-10  flex flex-col h-[500px] lg:h-[634px] relative group">

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
                    <div className="mt-auto z-10 px-2 pb-2">
                      <h4 className="text-[12px] md:text-[13px] font-medium text-[#222] mb-3 tracking-[0.05em] uppercase">
                        {item.title}
                      </h4>
                      <p className="text-[13px] md:text-[14px] text-[#666] leading-relaxed">
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
