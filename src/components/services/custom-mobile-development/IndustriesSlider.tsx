'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    title: "Bussiness Apps",
    description: "Applications that help companies manage operations, customers and teams.",
    image: "/images/services/website/yre1.png", // Placeholder image for now
    bg: "linear-gradient(139.7deg, #4C9B94 22.55%, #BED6E1 87.59%)"
  },
  {
    title: "Customer Apps",
    description: "Apps that improve customer engagement, bookings, purchases and support.",
    image: "/images/services/website/yre1.png", // Placeholder image for now
    bg: "linear-gradient(139.7deg, #4C9B94 22.55%, #BED6E1 87.59%)"
  },
  {
    title: "Ecommerce Apps",
    description: "Shopping experiences with secure payments, order tracking and customer accounts.",
    image: "/images/services/website/yre1.png",
    bg: "linear-gradient(139.7deg, #435975 22.55%, #BED6E1 87.59%)"
  }, {
    title: "Healthcare Apps",
    description: "Appointment booking, patient records, teleconsultation and healthcare management.",
    image: "/images/services/website/yre1.png", // Placeholder image for now
    bg: "linear-gradient(139.7deg, #4C9B94 22.55%, #BED6E1 87.59%)"
  },
  {
    title: "Educational Apps",
    description: "Student portals, online learning, assignments and course management.",
    image: "/images/services/website/yre1.png", // Placeholder image for now
    bg: "linear-gradient(139.7deg, #4C9B94 22.55%, #BED6E1 87.59%)"
  },
  {
    title: "Enterprise Apps",
    description: "Large-scale applications with dashboards, reporting and internal workflows.",
    image: "/images/services/website/yre1.png",
    bg: "linear-gradient(139.7deg, #435975 22.55%, #BED6E1 87.59%)"
  }
];

export default function IndustriesSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' });

  return (
    <section className="w-full bg-white text-black pt-24 pb-32 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-0">
        {/* Header Section */}
        <div className="mb-10 md:mb-16 flex flex-col gap-4 md:gap-6">
          <div>
            <h2 
              className="font-[200] tracking-tight text-gray-800 uppercase leading-[1.08]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '42px',
              }}
            >
              MOBILE APPS <br />
              <span className="font-[900] text-black">WE BUILD.</span>
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
              Every business has different users, workflows and goals. <br />
              That's why every app we develop is built specifically for your business.
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
                    <h3 className="text-white text-[clamp(1.125rem,2.5vw+0.25rem,1.5rem)] font-[500] mb-3 tracking-wide">{slide.title}</h3>
                    <p className="text-white/90 font-[400] text-[clamp(13px,0.4vw+5px,14px)] leading-relaxed mb-auto max-w-[200px]">
                      {slide.description}
                    </p>
                    <button suppressHydrationWarning className="text-white flex items-center gap-2 mt-auto text-[clamp(12px,0.5vw+4px,14px)] tracking-wide font-[500] group w-fit">
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
