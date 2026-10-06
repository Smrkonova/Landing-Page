'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    title: "Websites",
    description: "Business websites, corporate websites, landing pages and marketing websites designed to improve engagement and conversions.",
    image: "/images/services/website/ui_uxdesign/image 57.png",
    bg: "linear-gradient(139.7deg, #51BAEF 22.55%, #BED6E1 87.59%)"
  },
  {
    title: "Mobile Applications",
    description: "Android and iOS applications designed around real user behaviour and intuitive navigation.",
    image: "/images/services/website/ui_uxdesign/image 58.png",
    bg: "linear-gradient(139.7deg, #436475 22.55%, #BED6E1 87.59%)"
  },
  {
    title: "SaaS Platforms",
    description: "Complex dashboards and enterprise software simplified into easy-to-use experiences.",
    image: "/images/services/website/ui_uxdesign/image 59.png",
    bg: "linear-gradient(139.7deg, #EFC851 22.55%, #BED6E1 87.59%)"
  },
  {
    title: "Ecommerce Experiences",
    description: "Shopping journeys focused on increasing conversions and improving customer satisfaction.",
    image: "/images/services/website/ui_uxdesign/image 60.png",
    bg: "linear-gradient(139.7deg, #51BAEF 22.55%, #BED6E1 87.59%)"
  },
  {
    title: "Enterprise Software",
    description: "Internal tools, admin panels and business platforms designed to improve productivity.",
    image: "/images/services/website/ui_uxdesign/image 61.png",
    bg: "linear-gradient(139.7deg, #436475 22.55%, #BED6E1 87.59%)"
  },
  {
    title: "Product MVPs",
    description: "Helping startups transform ideas into validated digital products.",
    image: "/images/services/website/ui_uxdesign/image 62.png",
    bg: "linear-gradient(139.7deg, #EFC851 22.55%, #BED6E1 87.59%)"
  }
];

export default function IndustriesSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' });

  return (
    <section className="w-full max-w-full bg-white text-black pt-24 pb-32 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-0">
        {/* Header Section */}
        <div className="mb-12 md:mb-16 flex flex-col gap-6">
          <div>
            <h2 
              className="leading-[1.08] tracking-tight uppercase"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '42px',
              }}
            >
              <span className="font-[200] text-gray-800">DIGITAL EXPERIENCES</span><br />
              <span className="font-[900] text-black">WE DESIGN.</span>
            </h2>
          </div>
          <div className="max-w-[420px]">
            <p 
              className="text-gray-600 leading-relaxed font-normal"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
              }}
            >
              Every digital product has unique users and distinct goals. We craft seamless interfaces that balance user delight with measurable business growth.
            </p>
          </div>
        </div>
      </div>

      {/* Embla Carousel Slider */}
      <div className="w-full">
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex py-8 px-4 sm:px-6 md:px-12">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex-[0_0_88%] sm:flex-[0_0_75%] md:flex-[0_0_60%] lg:flex-[0_0_50%] min-w-0 px-3 sm:px-4 md:px-5"
              >
                <div
                  className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 h-[350px] md:h-[450px] flex flex-col justify-between shadow-2xl shadow-black/5 w-full"
                  style={{ background: slide.bg }}
                >
                  <div className="relative z-10 w-[70%] lg:w-[60%] flex flex-col h-full">
                    <h3 className="text-white text-[clamp(1.125rem,2.5vw+0.25rem,1.5rem)] font-[500] uppercase mb-3 tracking-wide">{slide.title}</h3>
                    <p className="text-white/90 text-[clamp(13px,0.4vw+5px,14px)] font-[400] leading-relaxed mb-auto max-w-[240px]">
                      {slide.description}
                    </p>
                    <button suppressHydrationWarning className="text-white flex items-center gap-2 mt-auto text-[clamp(12px,0.5vw+4px,14px)] tracking-wide font-[500] uppercase group w-fit">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
