'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    title: "SAAS WEBSITES",
    description: "Professional websites that build trust and generate enquiries.",
    image: "/images/services/website/healthcare.png", // Placeholder image for now
    bg: "linear-gradient(139.7deg, #E0B85C 22.55%, #F4DFA8 87.59%)"
  },
  {
    title: "HEALTHCARE WEBSITES",
    description: "Professional websites that build trust and generate enquiries.",
    image: "/images/services/website/healthcare.png",
    bg: "linear-gradient(139.7deg, #51BAEF 22.55%, #BED6E1 87.59%)"
  },
  {
    title: "MANUFACTURING WEBSITES",
    description: "Professional websites that build trust and generate enquiries.",
    image: "/images/services/website/manufacturing.png",
    bg: "linear-gradient(139.7deg, #436475 22.55%, #BED6E1 87.59%)"
  }
];

export default function IndustriesSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' });

  return (
    <section className="w-full bg-white text-black pt-24 pb-32 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-0">
        {/* Header Section */}
        <div className="mb-12 md:mb-16 flex flex-col gap-6">
          <div>
            <h2 className="text-[40px] md:text-[50px] lg:text-[64px] leading-[1.05] font-light tracking-tight text-gray-800">
              EVERY BUSINESS NEEDS <br />
              <span className="font-bold text-black">A DIFFERENT WEBSITE.</span>
            </h2>
          </div>
          <div className="max-w-[400px]">
            <p className="text-gray-500 text-[13px] md:text-sm leading-relaxed font-medium">
              Immediately your customer thinks: they've <br className="hidden sm:block" />
              worked with businesses like mine.
            </p>
          </div>
        </div>
      </div>

      {/* Embla Carousel Slider */}
      <div className="w-full">
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-6 md:gap-8 py-8 px-4 md:px-8">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex-[0_0_85%] sm:flex-[0_0_70%] md:flex-[0_0_55%] lg:flex-[0_0_45%] min-w-0 relative rounded-[2rem] overflow-hidden p-8 md:p-12 h-[350px] md:h-[450px] flex flex-col justify-between shadow-2xl shadow-black/5"
                style={{ background: slide.bg }}
              >
                <div className="relative z-10 w-[70%] lg:w-[60%] flex flex-col h-full">
                  <h3 className="text-white text-xl md:text-2xl font-semibold mb-3 tracking-wide">{slide.title}</h3>
                  <p className="text-white/90 text-xs md:text-[13px] leading-relaxed mb-auto max-w-[200px]">
                    {slide.description}
                  </p>
                  <button suppressHydrationWarning className="text-white flex items-center gap-2 mt-auto text-sm tracking-wide font-medium group w-fit">
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                {/* Background Image Overlay */}
                <div className="absolute right-4 md:right-8 bottom-0 h-[90%] w-[50%] z-0">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-contain object-bottom drop-shadow-2xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
