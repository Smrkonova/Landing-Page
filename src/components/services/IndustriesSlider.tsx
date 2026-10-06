'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const slides = [
  {
    title: "Corporate Websites",
    description: "Professional websites that build trust and generate enquiries.",
    image: "/images/services/website/web development/image 38 (1).png", // Placeholder image for now
    bg: "linear-gradient(139.7deg, #E0B85C 22.55%, #F4DFA8 87.59%)"
  },
  {
    title: "HEALTHCARE WEBSITES",
    description: "Appointment booking, doctor profiles and patient information.",
    image: "/images/services/website/web development/healthcare.png",
    bg: "linear-gradient(139.7deg, #51BAEF 22.55%, #BED6E1 87.59%)"
  },
  {
    title: "Real Estate Websites",
    description: "Admissions, courses, student portals and online applications.",
    image: "/images/services/website/web development/image 35.png",
    bg: "linear-gradient(139.7deg, #436475 22.55%, #BED6E1 87.59%)"
  },
  {
    title: "Manufacturing Websites",
    description: "Product catalogues, certifications and enquiry systems.",
    image: "/images/services/website/web development/manufacturing.png", // Placeholder image for now
    bg: "linear-gradient(139.7deg, #E0B85C 22.55%, #F4DFA8 87.59%)"
  },
  {
    title: "Educational Websites",
    description: "Admissions, courses, student portals and online applications.",
    image: "/images/services/website/web development/image 36.png",
    bg: "linear-gradient(139.7deg, #436475 22.55%, #BED6E1 87.59%)"
  }, {
    title: "Ecommerce Websites",
    description: "Custom shopping experiences built for conversions.",
    image: "/images/services/website/web development/image 37.png",
    bg: "linear-gradient(139.7deg, #51BAEF 22.55%, #BED6E1 87.59%)"
  }
];

export default function IndustriesSlider() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'center', direction: 'rtl' },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <section className="w-full bg-white text-black pt-20 md:pt-28 pb-20 md:pb-32 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-0">
        {/* Header Section */}
        <div className="mb-10 md:mb-14 flex flex-col gap-4 md:gap-5">
          <div>
            <h2
              className="text-[#111111] uppercase"
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <span
                className="block text-[32px] sm:text-[44px] md:text-[60px] leading-[40px] sm:leading-[54px] md:leading-[75px]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 200,
                  letterSpacing: '-1.2px',
                  textTransform: 'uppercase',
                }}
              >
                EVERY BUSINESS NEEDS
              </span>
              <span
                className="block text-[32px] sm:text-[44px] md:text-[60px] leading-[40px] sm:leading-[54px] md:leading-[75px]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  letterSpacing: '-1.2px',
                  textTransform: 'uppercase',
                }}
              >
                A DIFFERENT WEBSITE.
              </span>
            </h2>
          </div>
          <div className="max-w-[560px]">
            <p
              className="text-[#4B5563]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '28px',
                letterSpacing: '0px',
              }}
            >
              Every business has different users, workflows and goals. <br className="hidden sm:inline" />
              That's why every website we build is built specifically for your business.
            </p>
          </div>
        </div>
      </div>

      {/* Embla Carousel Slider */}
      <div className="w-full max-w-full overflow-hidden">
        <div className="w-full max-w-full overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef} dir="rtl">
          <div className="flex py-6 px-4 sm:px-6 md:px-12">
            {slides.map((slide, index) => (
              <div
                key={index}
                dir="ltr"
                className="flex-[0_0_auto] min-w-0 px-3 sm:px-4 md:px-5"
              >
                <div
                  className="relative overflow-hidden p-7 sm:p-9 md:p-11 flex flex-col justify-between shadow-2xl shadow-black/5 text-left w-[88vw] sm:w-[560px] md:w-[731px] h-[360px] sm:h-[390px] md:h-[413px]"
                  style={{
                    background: slide.bg,
                    borderRadius: '21px',
                    opacity: 1,
                  }}
                >
                  {/* Left Content */}
                  <div className="relative z-10 w-[55%] sm:w-[52%] md:w-[320px] flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-3">
                      <h3
                        className="text-white uppercase"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 500,
                          fontSize: '24px',
                          lineHeight: '32px',
                          letterSpacing: '-0.48px',
                          textTransform: 'uppercase',
                        }}
                      >
                        {slide.title}
                      </h3>
                      <p
                        className="text-white"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 400,
                          fontSize: '14px',
                          lineHeight: '20px',
                          letterSpacing: '0px',
                        }}
                      >
                        {slide.description}
                      </p>
                    </div>

                    <button
                      suppressHydrationWarning
                      className="text-white flex items-center gap-3.5 mt-auto group w-fit cursor-pointer"
                    >
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 500,
                          fontSize: '16px',
                          lineHeight: '32px',
                          letterSpacing: '-0.48px',
                        }}
                      >
                        Explore
                      </span>
                      <svg
                        width="31"
                        height="15"
                        viewBox="0 0 31 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        style={{
                          width: '31px',
                          height: '15px',
                          opacity: 1,
                        }}
                      >
                        <path
                          d="M0 7.5H29M29 7.5L22 1M29 7.5L22 14"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Graphic Image Showcase */}
                  <div
                    className="absolute right-0 bottom-0 pointer-events-none z-0 flex items-end justify-end overflow-hidden w-[45%] h-[85%] md:w-[403px] md:h-[403px]"
                    style={{
                      opacity: 1,
                    }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        width={403}
                        height={403}
                        className="w-full h-full object-contain object-bottom-right drop-shadow-2xl"
                      />
                    </div>
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
