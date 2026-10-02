'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    title: "Websites",
    description: "Business websites, corporate websites, landing pages and marketing websites designed to improve engagement and conversions.",
    image: "/images/services/website/yre1.png",
    bg: "linear-gradient(139.7deg, #4C9B94 22.55%, #BED6E1 87.59%)"
  },
  {
    title: "Mobile Applications",
    description: "Android and iOS applications designed around real user behaviour and intuitive navigation.",
    image: "/images/services/website/mobile1.png",
    bg: "linear-gradient(139.7deg, #3B7FBF 22.55%, #BED6E1 87.59%)"
  },
  {
    title: "SaaS Platforms",
    description: "Complex dashboards and enterprise software simplified into easy-to-use experiences.",
    image: "/images/services/website/yre1.png",
    bg: "linear-gradient(139.7deg, #5B5F97 22.55%, #BED6E1 87.59%)"
  },
  {
    title: "Ecommerce Experiences",
    description: "Shopping journeys focused on increasing conversions and improving customer satisfaction.",
    image: "/images/services/website/shopify1.png",
    bg: "linear-gradient(139.7deg, #435975 22.55%, #BED6E1 87.59%)"
  },
  {
    title: "Enterprise Software",
    description: "Internal tools, admin panels and business platforms designed to improve productivity.",
    image: "/images/services/website/yre1.png",
    bg: "linear-gradient(139.7deg, #3E6B89 22.55%, #BED6E1 87.59%)"
  },
  {
    title: "Product MVPs",
    description: "Helping startups transform ideas into validated digital products.",
    image: "/images/services/website/mobile2.png",
    bg: "linear-gradient(139.7deg, #4C9B94 22.55%, #BED6E1 87.59%)"
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
            <h2 className="text-[clamp(1.75rem,3.8vw+0.5rem,4rem)] leading-[1.05] font-light tracking-tight text-gray-800">
              What We<br />
              <span className="font-bold text-black">Design.</span>
            </h2>
          </div>
          <div className="max-w-[400px]">
            <p className="text-gray-500 text-[clamp(12px,0.5vw+4px,14px)] leading-relaxed font-medium">
              Every digital product has different users and different goals. <br className="hidden sm:block" />
              We design experiences that balance business objectives with user needs.
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
                    <h3 className="text-white text-[clamp(1.125rem,1.4vw+0.5rem,1.5rem)] font-semibold mb-3 tracking-wide">{slide.title}</h3>
                    <p className="text-white/90 text-[clamp(11px,0.4vw+5px,13px)] leading-relaxed mb-auto max-w-[200px]">
                      {slide.description}
                    </p>
                    <button suppressHydrationWarning className="text-white flex items-center gap-2 mt-auto text-[clamp(12px,0.5vw+4px,14px)] tracking-wide font-medium group w-fit">
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
