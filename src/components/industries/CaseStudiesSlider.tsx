"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const caseStudies = [
  {
    id: 1,
    title: "WING",
    desc: "India's manufacturing sector is expanding rapidly through",
    img: "/images/industries/case-studies/nazr.png",
    imgStyle: "absolute -left-8 -top-8 w-[180px] h-[240px] object-contain z-10",
  },
  {
    id: 2,
    title: "NAZR",
    desc: "India's manufacturing sector is expanding rapidly through",
    img: "/images/industries/case-studies/neelachandra.png",
    imgStyle: "absolute -right-1 -top-6 w-[160px] h-[220px] object-contain z-10 rotate-[15deg]",
  },
  {
    id: 3,
    title: "NEELACHANDRA",
    desc: "India's manufacturing sector is expanding rapidly through",
    img: "/images/industries/case-studies/nazr.png",
    imgStyle: "absolute -top-16 -right-4 w-[200px] h-[240px] object-contain z-10",
  },
  {
    id: 4,
    title: "NAZR",
    desc: "India's manufacturing sector is expanding rapidly through",
    img: "/images/industries/case-studies/nazr.png",
    imgStyle: "absolute -right-8 bottom-12 w-[160px] h-[220px] object-contain z-10 rotate-[15deg]",
  },
  {
    id: 5,
    title: "NEELACHANDRA",
    desc: "India's manufacturing sector is expanding rapidly through",
    img: "/images/industries/case-studies/nazr.png",
    imgStyle: "absolute -top-16 -right-4 w-[200px] h-[240px] object-contain z-10",
  },
];

export default function CaseStudiesSlider() {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps"
  });

  return (
    <section className="relative w-full bg-white py-24 md:py-32 overflow-hidden">

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-20 text-center md:text-left">
        <p className="text-gray-500 uppercase tracking-widest text-sm md:text-base mb-2 font-medium">
          Built for the long run
        </p>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#111] tracking-tight uppercase">
          Case Studies
        </h2>
      </div>

      {/* Slider Container powered by Embla */}
      <div className="w-full relative pl-6 md:pl-12 lg:pl-16">
        <div className="overflow-visible" ref={emblaRef}>
          <div className="flex gap-6 pt-16 pb-20 pr-[10vw]">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="relative flex-none w-[300px] md:w-[350px] h-[350px] md:h-[400px] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-3xl p-8 flex flex-col justify-end"
              >

                {/* Floating Image (overflows the card) */}
                <div className={study.imgStyle}>
                  <Image
                    src={study.img}
                    alt={study.title}
                    fill
                    className="object-contain pointer-events-none"
                  />
                </div>

                {/* Card Text */}
                <div className="relative z-20">
                  <h3 className="text-2xl md:text-3xl font-black text-[#111] uppercase tracking-tight mb-3">
                    {study.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400 font-medium leading-relaxed max-w-[200px]">
                    {study.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
