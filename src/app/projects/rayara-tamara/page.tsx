"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CHAT_MESSAGES = [
  {
    id: 1,
    sender: "MOHIT",
    text: '"When someone walks out after eating, what do you want them to remember?"',
    type: "outline",
    align: "left",
  },
  {
    id: 2,
    sender: "CHANDRASHEKHAR",
    text: '"The atmosphere, peace & warmth."',
    type: "green",
    align: "right",
  },
  {
    id: 3,
    sender: "CHANDRASHEKHAR",
    text: '"No loud music. No flashy interiors. Everything should feel warm."',
    type: "brown",
    align: "left",
  },
  {
    id: 4,
    sender: "CHANDRASHEKHAR",
    text: '"I want people to feel like they\'ve stepped into Karnataka\'s culture."',
    type: "green",
    align: "right",
  },
  {
    id: 5,
    sender: "MOHIT",
    text: '"What should someone feel in the first ten seconds?"',
    type: "outline",
    align: "left",
  },
  {
    id: 6,
    sender: "CHANDRASHEKHAR",
    text: '"Calm. Like visiting their ancestral home."',
    type: "green",
    align: "right",
  },
];

const RAYURU_BRAND_PILLARS = [
  {
    icon: "/images/projects/rayara-tamara/Layer1.png",
    title: "Brand Name\n& Identity",
    desc: "Rooted in Karnataka's heritage, expressing warmth, peace and timeless temple-inspired hospitality.",
  },
  {
    icon: "/images/projects/rayara-tamara/Layer2.png",
    title: "Digital\nExperience",
    desc: "Seamlessly translating Karnataka's warmth, heritage and hospitality across every digital interaction.",
  },
  {
    icon: "/images/projects/rayara-tamara/Layer3.png",
    title: "Logo\nDesign",
    desc: "A timeless symbol reflecting Rayara's blessings, copper traditions and cultural pride.",
  },
  {
    icon: "/images/projects/rayara-tamara/Layer4.png",
    title: "Typography\nIconography",
    desc: "Elegant letterforms balancing traditional character with refined contemporary readability and warmth.",
  },
  {
    icon: "/images/projects/rayara-tamara/Layer5.png",
    title: "Visual\nLanguage",
    desc: "Spaces inspired by temple architecture, handcrafted textures and curated artwork that tells the story.",
  },
  {
    icon: "/images/projects/rayara-tamara/Layer6.png",
    title: "Colour\nSystem",
    desc: "Earthy tones inspired by copper, stone, wood and Karnataka's sacred landscapes.",
  },
  {
    icon: "/images/projects/rayara-tamara/Layer7.png",
    title: "Marketing\nCollaterals",
    desc: "Menus, stationery and hospitality touchpoints designed with timeless craftsmanship and cultural authenticity.",
  },
  {
    icon: "/images/projects/rayara-tamara/Layer8.png",
    title: "Future\nMarket Strategy",
    desc: "Building lasting relationships through community participation and authentic cultural experiences.",
  },
];

const GALLERY_IMAGES = [
  "/images/projects/rayara-tamara/gallery/1.png",
  "/images/projects/rayara-tamara/gallery/2.png",
  "/images/projects/rayara-tamara/gallery/3.png",
  "/images/projects/rayara-tamara/gallery/4.png",
  "/images/projects/rayara-tamara/gallery/5.png",
  "/images/projects/rayara-tamara/gallery/6.png",
  "/images/projects/rayara-tamara/gallery/7.png",
  "/images/projects/rayara-tamara/gallery/8.png",
  "/images/projects/rayara-tamara/gallery/9.png",
  "/images/projects/rayara-tamara/gallery/10.png",
  "/images/projects/rayara-tamara/gallery/11.png",
  "/images/projects/rayara-tamara/gallery/12.png",
  "/images/projects/rayara-tamara/gallery/13.png",
];

const COLOR_PALETTE = [
  {
    name: "Ancient copper",
    bg: "bg-gradient-to-tr from-[#b86d39] via-[#e59868] to-[#f4c8aa]",
    border: false,
  },
  {
    name: "Royal grove",
    bg: "bg-[#2B3524]",
    border: false,
  },
  {
    name: "Arecanut brown",
    bg: "bg-[#512D18]",
    border: false,
  },
  {
    name: "Palm leaf cream",
    bg: "bg-[#E8DCC3]",
    border: true,
  },
  {
    name: "Turmeric gold",
    bg: "bg-[#B58A36]",
    border: false,
  },
  {
    name: "Temple charcoal",
    bg: "bg-[#2D2A26]",
    border: false,
  },
  {
    name: "Lotus leaf",
    bg: "bg-[#5E6531]",
    border: false,
  },
  {
    name: "Burnt terracotta",
    bg: "bg-[#994726]",
    border: false,
  },
];

export default function RayaraTamaraProject() {
  const [chatVisibleCount, setChatVisibleCount] = useState(1);
  const [isChatPaused, setIsChatPaused] = useState(false);
  const chatScrollRef = useRef(null);

  // Auto-advance timer: reveals chat messages one by one with vertical scroll
  useEffect(() => {
    if (isChatPaused) return;

    let timeoutId;
    if (chatVisibleCount < CHAT_MESSAGES.length) {
      timeoutId = setTimeout(() => {
        setChatVisibleCount((prev) => prev + 1);
      }, 2400);
    } else {
      timeoutId = setTimeout(() => {
        setChatVisibleCount(1);
      }, 4500);
    }

    return () => clearTimeout(timeoutId);
  }, [chatVisibleCount, isChatPaused]);

  // Smooth scroll container to bottom as new messages appear
  useEffect(() => {
    if (!chatScrollRef.current) return;
    const container = chatScrollRef.current;

    if (chatVisibleCount === 1) {
      container.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const scrollTarget = container.scrollHeight - container.clientHeight;
      if (scrollTarget > 0) {
        container.scrollTo({ top: scrollTarget + 40, behavior: "smooth" });
      }
    }
  }, [chatVisibleCount]);
  return (
    <main>
      <section 
        className="bg-[#E3D6CA] relative overflow-hidden font-sans flex items-center pt-24 md:pt-16 pb-12 md:pb-4 min-h-screen md:h-[calc(100vh/var(--desktop-scale,1))]"
      >
        {/* Background Side Abstract Image - Desktop Only */}
        <div className="hidden md:flex absolute right-0 top-0 bottom-0 h-[532px] w-[533px] pointer-events-none justify-end">
          <img
            src="/images/projects/rayara-tamara/Layer_1.png"
            alt="Side Abstract"
            className="h-full object-cover object-right opacity-60"
          />
        </div>

        {/* MOBILE VIEW (matches exact mobile design) */}
        <div className="block md:hidden w-full px-5 py-6 sm:py-10 relative z-10">
          {/* 1. Header / Case Study Title */}
          <div className="block md:hidden absolute flex right-0  bottom-0 h-[370px] w-[372px] pointer-events-none justify-end">
            <img
              src="/images/projects/rayara-tamara/vector.png"
              alt="Side Abstract"
              className="h-full object-cover object-right opacity-60"
            />
          </div>
          <div className="mb-6">
            <h4 className="font-sans font-light text-[clamp(10px,0.8vw+2px,12px)] leading-[122%] tracking-[0.05em] uppercase text-[#606024] mb-2">
              Case Study 1
            </h4>
            <h1 className="font-sans font-semibold text-[clamp(11px,0.8vw+2px,12px)] leading-[122%] tracking-[0.05em] uppercase text-[#606024] mb-1">
              RAYARA TAMARA
            </h1>
            <p className="font-sans font-light text-[clamp(11px,0.8vw+2px,12px)] leading-[145%] tracking-[0.05em] text-[#606024]">
              Ancient roots, timeless taste
            </p>
          </div>

          {/* 2. Banner Card with Outer Rounded Border */}
          <div className="w-full p-2 sm:p-2.5 rounded-[32px] sm:rounded-[36px] border border-[#5c564b]/30 shadow-lg">
            <div className="relative w-full aspect-[4/5] rounded-[24px] sm:rounded-[28px] overflow-hidden">
              <img
                src="/images/projects/rayara-tamara/banner.png"
                alt="Rayara Tamara Banner"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>

              <div className="absolute bottom-6 left-5 right-5 text-white">
                <h2 className="font-sans font-bold uppercase tracking-[3px] text-[clamp(20px,2.6vw+10px,40px)] leading-[clamp(24px,2.9vw+10px,44.13px)] mb-1.5 drop-shadow-md">
                  Evoking a feeling
                </h2>
                <h3 className="font-sans font-thin uppercase tracking-[3px] text-[clamp(18px,2.6vw+8px,40px)] leading-[clamp(22px,2.9vw+10px,44.13px)] text-white/85 drop-shadow-md">
                  Before it even<br />looks beautiful
                </h3>
              </div>
            </div>
          </div>

          {/* 3. Industry & Duration */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-sans font-extralight text-[clamp(10px,0.8vw+2px,12px)] leading-[15.87px] tracking-[2px] uppercase text-[#606024] mb-2">
                Industry
              </h4>
              <span className="inline-block bg-[#c5baa9] px-4 py-1.5 font-sans font-bold text-[clamp(10px,0.8vw+2px,12px)] leading-[15.87px] tracking-[0px] rounded shadow-xs text-[#606024]">
                Restaurant
              </span>
            </div>

            <div>
              <h4 className="font-sans font-extralight text-[clamp(10px,0.8vw+2px,12px)] leading-[15.87px] tracking-[2px] uppercase text-[#606024] mb-2">
                Duration
              </h4>
              <span className="inline-block bg-[#c5baa9] px-4 py-1.5 font-sans font-bold text-[clamp(10px,0.8vw+2px,12px)] leading-[15.87px] tracking-[0px] rounded shadow-xs text-[#606024]">
                Ongoing
              </span>
            </div>
          </div>

          {/* 4. Platforms */}
          <div className="mt-6">
            <h4 className="font-sans font-extralight text-[clamp(10px,0.8vw+2px,12px)] leading-[15.87px] tracking-[2px] uppercase text-[#606024] mb-2">
              Platforms
            </h4>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="inline-block bg-[#D7CCBE] px-4 py-1.5 font-sans font-bold text-[clamp(10px,0.8vw+2px,12px)] leading-[15.87px] tracking-[0px] rounded shadow-xs text-[#606024]">Website</span>
              <span className="inline-block bg-[#D7CCBE] px-4 py-1.5 font-sans font-bold text-[clamp(10px,0.8vw+2px,12px)] leading-[15.87px] tracking-[0px] rounded shadow-xs text-[#606024]">Shopify</span>
              <span className="inline-block bg-[#D7CCBE] px-4 py-1.5 font-sans font-bold text-[clamp(10px,0.8vw+2px,12px)] leading-[15.87px] tracking-[0px] rounded shadow-xs text-[#606024]">Flutter</span>
              <span className="inline-block bg-[#D7CCBE] px-4 py-1.5 font-sans font-bold text-[clamp(10px,0.8vw+2px,12px)] leading-[15.87px] tracking-[0px] rounded shadow-xs text-[#606024]">Backend</span>
            </div>
          </div>

          {/* 5. Divider Line */}
          <div className="w-full border-t border-[#5c564b]/20 my-8"></div>

          {/* 6. Disciplines */}
          <div>
            <h4 className="font-sans font-extralight text-[clamp(10px,0.8vw+2px,12px)] leading-[15.87px] tracking-[2px] uppercase text-[#606024] mb-4">
              Disciplines
            </h4>
            <div className="flex justify-between items-end">
              <div className="space-y-3 font-sans font-normal text-[clamp(10px,0.8vw+2px,12px)] leading-[25px] tracking-[2px] text-[#606024]">
                <p className="hover:text-[#606024] transition-colors cursor-pointer">Strategy</p>
                <p className="hover:text-[#606024] transition-colors cursor-pointer">UX/UI</p>
                <p className="hover:text-[#606024] transition-colors cursor-pointer">Development</p>
                <p className="hover:text-[#606024] transition-colors cursor-pointer">Brand</p>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden md:flex max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-row items-center w-full h-full max-h-[820px]">

          {/* Left Column - Details */}
          <div className="w-full md:w-1/5 pr-8 text-[#5c564b] flex flex-col justify-between py-10">

            <div className="space-y-10">
              <div>
                <h4 className="font-sans font-light text-[clamp(10px,0.8vw+2px,12px)] leading-[122%] tracking-[0.05em] uppercase text-[#606024] mb-3">
                  Case Study 1
                </h4>
                <h2 className="font-sans font-semibold text-[clamp(11px,0.8vw+2px,12px)] leading-[122%] tracking-[0.05em] uppercase text-[#606024] mb-1">
                  RAYARA TAMARA
                </h2>
                <p className="font-sans font-light text-[clamp(11px,0.8vw+2px,12px)] leading-[145%] tracking-[0.05em] text-[#606024]">
                  Ancient roots, timeless taste
                </p>
              </div>

              <div>
                <h4 className="font-sans font-extralight text-[clamp(10px,0.8vw+2px,12px)] leading-[15.87px] tracking-[2px] uppercase text-[#606024] mb-3">
                  Industry
                </h4>
                <span className="inline-block bg-[#D7CCBE] px-4 py-1.5 font-sans font-bold text-[clamp(10px,0.8vw+2px,12px)] leading-[15.87px] tracking-[0px] rounded shadow-sm text-[#606024]">
                  Restaurant
                </span>
              </div>

              <div>
                <h4 className="font-sans font-extralight text-[clamp(10px,0.8vw+2px,12px)] leading-[15.87px] tracking-[2px] uppercase text-[#606024] mb-3">
                  Duration
                </h4>
                <span className="inline-block bg-[#c5baa9] px-4 py-1.5 font-sans font-bold text-[clamp(10px,0.8vw+2px,12px)] leading-[15.87px] tracking-[0px] rounded shadow-sm text-[#606024]">
                  Ongoing
                </span>
              </div>

              <div>
                <h4 className="font-sans font-extralight text-[clamp(10px,0.8vw+2px,12px)] leading-[15.87px] tracking-[2px] uppercase text-[#606024] mb-3">
                  Platforms
                </h4>
                <div className="flex flex-col gap-2 items-start">
                  <span className="inline-block bg-[#D7CCBE] px-4 py-1.5 font-sans font-bold text-[clamp(10px,0.8vw+2px,12px)] leading-[15.87px] tracking-[0px] rounded shadow-sm text-[#606024]">Website</span>
                  <span className="inline-block bg-[#D7CCBE] px-4 py-1.5 font-sans font-bold text-[clamp(10px,0.8vw+2px,12px)] leading-[15.87px] tracking-[0px] rounded shadow-sm text-[#606024]">Shopify</span>
                  <span className="inline-block bg-[#D7CCBE] px-4 py-1.5 font-sans font-bold text-[clamp(10px,0.8vw+2px,12px)] leading-[15.87px] tracking-[0px] rounded shadow-sm text-[#606024]">Flutter</span>
                  <span className="inline-block bg-[#D7CCBE] px-4 py-1.5 font-sans font-bold text-[clamp(10px,0.8vw+2px,12px)] leading-[15.87px] tracking-[0px] rounded shadow-sm text-[#606024]">Backend</span>
                </div>
              </div>
            </div>

          </div>

          {/* Center Column - Banner Image */}
          <div className="w-full md:w-3/5 flex justify-center py-4 relative px-4">
            <div className="p-2 sm:p-2.5 rounded-[36px] border border-[#5c564b]/30 shadow-2xl w-full h-full min-h-[480px] max-h-[600px]">
              <div className="relative rounded-[28px] overflow-hidden w-full h-full min-h-[480px] max-h-[580px]">
                <img
                  src="/images/projects/rayara-tamara/banner.png"
                  alt="Rayara Tamara Banner"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute bottom-12 left-10 text-white right-10">
                  <h1 className="font-sans font-bold uppercase tracking-[3px] text-[clamp(20px,2.6vw+10px,40px)] leading-[clamp(24px,2.9vw+10px,44.13px)] mb-2 drop-shadow-lg">
                    Evoking a feeling
                  </h1>
                  <h2 className="font-sans font-thin uppercase tracking-[3px] text-[clamp(18px,2.6vw+8px,40px)] leading-[clamp(22px,2.9vw+10px,44.13px)] text-white/80 drop-shadow-lg">
                    Before it even<br />looks beautiful
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Navigation/Services list */}
          <div className="w-full md:w-1/5 pl-4 flex flex-col justify-end items-end text-[#606024] py-10">
            <div className="mt-auto space-y-4 font-sans font-normal text-[clamp(10px,0.8vw+2px,12px)] leading-[25px] tracking-[2px] text-[#606024]">
              <p className="hover:text-[#606024] transition-colors cursor-pointer">Strategy</p>
              <p className="hover:text-[#606024] transition-colors cursor-pointer">UX/UI</p>
              <p className="hover:text-[#606024] transition-colors cursor-pointer">Development</p>
              <p className="hover:text-[#606024] transition-colors cursor-pointer">Brand</p>
            </div>
          </div>

        </div>
      </section>

      {/* Story Worth Preserving Section */}
      <section 
        className="relative flex flex-col items-center justify-center font-sans px-4 py-16 min-h-screen md:h-[calc(100vh/var(--desktop-scale,1))]"
        style={{
          backgroundColor: '#2B2D16AD',
          backgroundImage: 'url("/images/projects/rayara-tamara/story-worth.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'color-dodge'
        }}
      >
        <div className="relative z-10 text-center  flex flex-col items-center justify-center px-4 max-w-4xl mx-auto drop-shadow-2xl">
          <h3 className="text-[clamp(2.25rem,5.5vw+0.5rem,5.5rem)] font-[100] tracking-[0.05em] leading-[0.8em] text-[#d2a760] mb-2 sm:mb-3 md:mb-4 uppercase">
            Rooting in a
          </h3>
          <h2 className="text-[clamp(2.25rem,5.5vw+0.5rem,5.5rem)] font-bold uppercase tracking-wider text-[#d2a760] leading-[1em]">
            Story Worth<br />Preserving
          </h2>
          <p className="mt-6 sm:mt-8 md:mt-10 text-[clamp(0.875rem,0.8vw+0.5rem,1.25rem)] font-[600] text-[#d2a760] opacity-90 max-w-[280px] sm:max-w-md md:max-w-none leading-[1em]">
            Something all of the team<br className="block sm:hidden" /> rooted for all along.
          </p>
        </div>
      </section>
      {/* Experience Section */}
      <section 
        id="experience" 
        className="bg-[#E3D6CA] relative font-sans pt-16 pb-16 md:py-24 flex flex-col items-center justify-start min-h-[calc(100vh/var(--desktop-scale,1))]"
      >
        {/* Background Mandala Accent - Top Left on Mobile, Center Left on Desktop */}
        <div className="absolute top-0 left-0 w-36 sm:w-48 md:w-1/4 h-[396px] md:h-[533px] md:top-[20%] md:-translate-y-1/2 pointer-events-none flex justify-start opacity-45 md:opacity-60 -translate-x-4 -translate-y-4 md:translate-x-0">
          <img
            src="/images/projects/rayara-tamara/abstract-left.png"
            alt="Mandala Abstract"
            className="w-full h-auto md:h-full object-contain object-left-top md:object-left"
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 w-full relative z-10 flex flex-col items-center">

          {/* Top Text */}
          <div className="text-center text-[#5c564b] space-y-[1rem] mb-8 sm:mb-12 md:mb-16 sm:space-y-1.5 px-4 max-w-full mx-auto">
            <h3 className="text-[clamp(0.875rem,2.2vw+0.25rem,2.5rem)] leading-[1.3em] font-light uppercase text-[#606024]">The meal lasts an hour.</h3>
            <h2 className="text-[clamp(1rem,2.2vw+0.35rem,2.5rem)] font-bold uppercase leading-[1.3em] text-[#606024]">The experience lasts much longer.</h2>
            <h3 className="text-[clamp(0.875rem,2.2vw+0.25rem,2.5rem)] font-light leading-[1.3em] uppercase text-[#606024]">Smrkonova takes fine dining <br /> experience, extends beyond food.</h3>
          </div>

          {/* Center Graphic */}
          <div className="relative w-full max-w-sm sm:max-w-[392px] md:max-w-3xl lg:max-w-4xl flex items-center justify-center my-4 sm:my-8 md:my-10">
            {/* The leaf */}
            <div className="relative w-full max-w-[340px] sm:max-w-xl md:max-w-3xl flex justify-center items-center">
              <img src="/images/projects/rayara-tamara/leaf.png" alt="Leaf" className="w-[397px] md:w-[115%] max-w-none h-auto object-contain drop-shadow-xl" />

              {/* The plate centered on the leaf */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="/images/projects/rayara-tamara/plate.png" alt="Plate" className="w-[62%] sm:w-[56%] md:w-[50%] h-auto drop-shadow-2xl" />
              </div>
            </div>

            {/* The floating text words surrounding the leaf */}
            <div className="absolute inset-0 pointer-events-none drop-shadow-md select-none">
              {/* 1. CULTURE - Top Center */}
              <span className="absolute top-[1%] sm:top-[2%] left-1/2 -translate-x-1/2 font-grisons text-[clamp(1.125rem,2.5vw+0.25rem,2.5rem)] tracking-[0.25em] text-[#d2a760] font-medium uppercase animate-float-1">
                Culture
              </span>

              {/* 2. CRAFT - Top Left */}
              <span className="absolute top-[10%] sm:top-[12%] left-[8%] sm:left-[14%] font-grisons text-[clamp(1.125rem,2.5vw+0.25rem,2rem)] tracking-[0.25em] text-[#d2a760] font-medium uppercase animate-float-2">
                Craft
              </span>

              {/* 3. LEGACY - Top Right */}
              <span className="absolute top-[8%] sm:top-[10%] right-[8%] sm:right-[14%] font-grisons text-[clamp(1.125rem,2.5vw+0.25rem,3rem)] tracking-[0.25em] text-[#d2a760] font-medium uppercase animate-float-3">
                Legacy
              </span>

              {/* 4. CHARACTER - Middle Left */}
              <span className="absolute top-[42%] left-[1%] sm:left-[3%] font-grisons text-[clamp(1.125rem,2.5vw+0.25rem,1.5rem)] tracking-[0.2em] text-[#d2a760] font-medium uppercase animate-float-4">
                Character
              </span>

              {/* 5. IDENTITY - Middle Right */}
              <span className="absolute top-[43%] right-[1%] sm:right-[4%] font-grisons text-[clamp(1.125rem,2.5vw+0.25rem,1.8125rem)] tracking-[0.2em] text-[#d2a760] font-medium uppercase animate-float-1">
                Identity
              </span>

              {/* 6. MEANING - Center across plate */}
              <span className="absolute top-[54%] left-1/2 -translate-x-1/2 font-grisons text-[clamp(1.125rem,2.5vw+0.25rem,2.25rem)] font-[400] tracking-[0.25em] text-[#dfb86e] uppercase z-20 animate-float-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                Meaning
              </span>

              {/* 7. RITUAL - Bottom Right */}
              <span className="absolute bottom-[20%] right-[10%] sm:right-[16%] font-grisons text-[clamp(1.125rem,2.5vw+0.25rem,2.25rem)] tracking-[0.25em] text-[#d2a760] font-medium uppercase animate-float-3">
                Ritual
              </span>

              {/* 8. STORY - Bottom Left */}
              <span className="absolute bottom-[8%] left-[8%] sm:left-[14%] font-grisons text-[clamp(1.125rem,2.5vw+0.25rem,3rem)] tracking-[0.25em] text-[#d2a760] font-medium uppercase animate-float-4">
                Story
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Authenticity Section */}
      <section id="authenticity" className="bg-[#E3D6CA] relative overflow-hidden font-sans pt-0 pb-20 md:pt-5 md:pb-32 flex flex-col items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
          <h2 className="text-[clamp(2.5rem,6.5vw+0.5rem,6.5rem)] font-grisons text-[#555621] leading-[1.05] tracking-tight">
            authenticity is<br />the goal
          </h2>
          <p className="text-[clamp(1.125rem,2.5vw+0.25rem,1.25rem)] text-[#B9893E] font-medium tracking-wide leading-relaxed  mx-auto">
            but, how to choose a single story from many that feel true?
          </p>
        </div>
      </section>
      {/* The Road Not Taken Section */}
      <section className="bg-[#2B2D16] relative overflow-hidden font-sans py-24 flex flex-col items-center">
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 35s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
          @keyframes pop-in {
            0% { transform: scale(0.9) translateY(10px); opacity: 0; }
            70% { transform: scale(1.02) translateY(-2px); opacity: 1; }
            100% { transform: scale(1) translateY(0); opacity: 1; }
          }
          .animate-pop-in {
            animation: pop-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          }
          .chat-tail-outline::before {
            content: ''; position: absolute; bottom: -16px; left: 40px;
            border-width: 16px 16px 0 0; border-style: solid; border-color: #655d49 transparent transparent transparent;
          }
          .chat-tail-outline::after {
            content: ''; position: absolute; bottom: -14px; left: 41px;
            border-width: 14px 14px 0 0; border-style: solid; border-color: #2B2D16 transparent transparent transparent;
          }
          .chat-tail-solid-brown::after {
            content: ''; position: absolute; bottom: -16px; right: 40px;
            border-width: 16px 0 0 16px; border-style: solid; border-color: #5c3a21 transparent transparent transparent;
          }
          .chat-tail-solid-green::after {
            content: ''; position: absolute; bottom: -16px; right: 40px;
            border-width: 16px 0 0 16px; border-style: solid; border-color: #585d33 transparent transparent transparent;
          }
          .chat-tail-large::before {
            content: ''; position: absolute; bottom: -28px; left: 48px;
            border-width: 28px 28px 0 0; border-style: solid; border-color: #585d33 transparent transparent transparent;
          }
          .chat-tail-large::after {
            content: ''; position: absolute; bottom: -24px; left: 50px;
            border-width: 24px 24px 0 0; border-style: solid; border-color: #2B2D16 transparent transparent transparent;
          }
        `}} />

        <div className="max-w-[1440px] mx-auto px-4 w-full">

          {/* Top Text */}
          <div className="text-center mb-10 md:mb-24">
            <h2 className="text-[clamp(1.5rem,2.8vw+0.25rem,4rem)] font-[200] uppercase  text-[#EAD7C0] mb-6 md:mb-12 leading-[1.2em]">
              We went down<br />the road not taken
            </h2>
            <div className="flex flex-col md:flex-row gap-5 md:gap-16 justify-center max-w-sm sm:max-w-md md:max-w-4xl mx-auto  text-[clamp(0.75rem,0.4vw+0.55rem,0.875rem)] text-[#EAD7C0] font-[400] leading-relaxed">
              <p className="flex-1 leading-relaxed text-right">
                Traditionally teams begin with listening to the client and drafting a logo. We took another road. We met the founders, asked them about their aspirations with the space, explored the area, and searched for the story that could only belong to this place.
              </p>
              <p className="flex-1 leading-relaxed text-left">
                That search took us through thousands of restaurants and hospitality brands around the world. Not for inspiration, we were looking for what's deep within, what's real.
              </p>
            </div>
          </div>

        </div>

        {/* Mobile Vertical Chat View - Chats pop up one by one and scroll vertically */}
        <div className="block md:hidden w-full px-4 mb-14">
          <div className="w-full">
            {/* Framed Vertical Chat Container */}
            <div className="w-full max-w-[360px] sm:max-w-[420px] mx-auto rounded-[28px] sm:rounded-[32px] border border-[#585d33]/50 p-3 sm:p-4 bg-[#232716]/60 backdrop-blur-xs shadow-2xl relative overflow-hidden">
              {/* Top Gradient Fade Overlay */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[#202514] via-[#202514]/80 to-transparent pointer-events-none z-10 rounded-t-[28px]" />

              {/* Bottom Gradient Fade Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#202514] via-[#202514]/80 to-transparent pointer-events-none z-10 rounded-b-[28px]" />

              {/* Scrollable Chat Feed */}
              <div
                ref={chatScrollRef}
                onMouseEnter={() => setIsChatPaused(true)}
                onMouseLeave={() => setIsChatPaused(false)}
                onTouchStart={() => setIsChatPaused(true)}
                onTouchEnd={() => setIsChatPaused(false)}
                className="h-[460px] sm:h-[500px] overflow-y-auto no-scrollbar scroll-smooth flex flex-col gap-4 py-4 px-1"
              >
                {CHAT_MESSAGES.slice(0, chatVisibleCount).map((msg, index) => {
                  const isLatest = index === chatVisibleCount - 1 && chatVisibleCount > 1;

                  if (msg.type === "outline") {
                    return (
                      <div
                        key={msg.id}
                        className={`self-start w-[92%] sm:w-[88%] border border-[#756c4d]/50 bg-[#2b2f18]/60 text-[#e3d6ca] rounded-[20px] p-4 sm:p-5 shadow-sm relative ${isLatest ? "animate-pop-in" : ""
                          }`}
                      >
                        <span className="text-[clamp(10px,0.5vw+7px,12px)] font-semibold tracking-widest uppercase text-[#9e957e] block mb-1.5">
                          {msg.sender}
                        </span>
                        <p className="text-[clamp(12px,0.6vw+8px,14px)] font-normal text-[#e3d6ca] leading-relaxed">
                          {msg.text}
                        </p>
                      </div>
                    );
                  }

                  if (msg.type === "green") {
                    return (
                      <div
                        key={msg.id}
                        className={`self-end ml-auto w-[85%] sm:w-[80%] bg-[#4d5624] text-white rounded-[20px] p-4 sm:p-5 shadow-md relative ${isLatest ? "animate-pop-in" : ""
                          }`}
                      >
                        <span className="text-[clamp(10px,0.5vw+7px,12px)] font-semibold tracking-widest uppercase text-[#d5b068] block mb-1.5 text-right">
                          {msg.sender}
                        </span>
                        <p className="text-[clamp(12px,0.6vw+8px,14px)] font-medium text-white leading-relaxed text-right sm:text-left">
                          {msg.text}
                        </p>
                        {/* Bottom-right speech bubble tail */}
                        <div className="absolute -bottom-1.5 right-4 w-3.5 h-3.5 bg-[#4d5624] [clip-path:polygon(0_0,100%_0,0_100%)] pointer-events-none" />
                      </div>
                    );
                  }

                  if (msg.type === "brown") {
                    return (
                      <div
                        key={msg.id}
                        className={`self-start w-[92%] sm:w-[88%] bg-[#502515] text-white rounded-[20px] p-4 sm:p-5 shadow-md relative ${isLatest ? "animate-pop-in" : ""
                          }`}
                      >
                        <span className="text-[clamp(10px,0.5vw+7px,12px)] font-semibold tracking-widest uppercase text-[#d5b068] block mb-1.5 text-left">
                          {msg.sender}
                        </span>
                        <p className="text-[clamp(12px,0.6vw+8px,14px)] font-semibold text-white leading-relaxed text-left">
                          {msg.text}
                        </p>
                        {/* Bottom-left speech bubble tail */}
                        <div className="absolute -bottom-1.5 left-4 w-3.5 h-3.5 bg-[#502515] [clip-path:polygon(0_0,100%,100%_100%)] pointer-events-none" />
                      </div>
                    );
                  }

                  return null;
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Chat Slider (Horizontal Marquee) */}
        <div className="hidden md:block w-full overflow-hidden py-10 relative">

          {/* Wrapper for marquee */}
          <div className="flex w-max animate-marquee space-x-12 px-6">
            {/* Duplicate the items for seamless looping */}
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {/* Item 1 */}
                <div className="flex flex-col gap-4">
                  <motion.div 
                    initial={{ scale: 0.8, y: -20, opacity: 0 }}
                    whileInView={{ scale: 1, y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="relative border border-[#655d49] rounded-[2rem] p-6 w-[280px] text-[clamp(12px,0.6vw+8px,14px)] text-[#d8c3a5] chat-tail-outline shadow-lg"
                  >
                    <span className="opacity-70 text-[clamp(0.875rem,2.5vw+0.25rem,0.875rem)] block mb-1">Mohit:</span>
                    "When someone walks out after eating, what do you want them to remember?"
                  </motion.div>
                  <div className="pl-6 text-[#d8c3a5]/70 text-[clamp(1.125rem,2.5vw+0.25rem,1.5rem)] font-light mt-6">The first<br />discovery</div>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col gap-4 mt-16">
                  <motion.div 
                    initial={{ scale: 0.8, y: -20, opacity: 0 }}
                    whileInView={{ scale: 1, y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="relative bg-[#5c3a21] rounded-[2rem] p-6 w-[280px] text-[clamp(12px,0.6vw+8px,14px)] text-[#d8c3a5] chat-tail-solid-brown shadow-lg"
                  >
                    <span className="opacity-70 text-[clamp(1rem,2.5vw+0.25rem,1rem)] block mb-1">Chandrashekhar:</span>
                    <strong className="font-semibold text-[clamp(1.125rem,2.5vw+0.25rem,1.25rem)]">"No loud music. No flashy interiors. Everything should feel warm."</strong>
                  </motion.div>
                  <div className="pl-6 text-[#d8c3a5]/70 text-[clamp(1rem,0.7vw+0.65rem,1.125rem)] font-light mt-6">A design brief<br />without mentioning<br />design</div>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col gap-4">
                  <motion.div 
                    initial={{ scale: 0.8, y: -20, opacity: 0 }}
                    whileInView={{ scale: 1, y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="relative bg-[#585d33] rounded-[2rem] p-6 w-[280px] text-[clamp(12px,0.6vw+8px,14px)] text-[#d8c3a5] chat-tail-solid-green shadow-lg"
                  >
                    <span className="opacity-70 text-[clamp(10px,0.5vw+7px,12px)] block mb-1">Chandrashekhar:</span>
                    <strong className="font-semibold text-[clamp(14px,0.7vw+9px,16px)]">"I want people to feel like they've stepped into Karnataka's culture."</strong>
                  </motion.div>
                  <div className="pl-6 text-[#d8c3a5]/70 text-[clamp(1rem,0.7vw+0.65rem,1.125rem)] font-light mt-6">The philosophy</div>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col gap-4 mt-16">
                  <motion.div 
                    initial={{ scale: 0.8, y: -20, opacity: 0 }}
                    whileInView={{ scale: 1, y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="relative border border-[#655d49] rounded-[2rem] p-6 w-[280px] text-[clamp(12px,0.6vw+8px,14px)] text-[#d8c3a5] chat-tail-outline shadow-lg"
                  >
                    <span className="opacity-70 text-[clamp(10px,0.5vw+7px,12px)] block mb-1">Mohit:</span>
                    "What should someone feel in the first ten seconds?"
                  </motion.div>
                </div>

                {/* Item 5 */}
                <div className="flex flex-col gap-4">
                  <motion.div 
                    initial={{ scale: 0.8, y: -20, opacity: 0 }}
                    whileInView={{ scale: 1, y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="relative bg-[#585d33] rounded-[2rem] p-6 w-[280px] text-[clamp(12px,0.6vw+8px,14px)] text-[#d8c3a5] chat-tail-solid-green shadow-lg"
                  >
                    <span className="opacity-70 text-[clamp(10px,0.5vw+7px,12px)] block mb-1">Chandrashekhar:</span>
                    <strong className="font-semibold text-[clamp(14px,0.7vw+9px,16px)]">"Calm. Like visiting their ancestral home."</strong>
                  </motion.div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 w-full">
          {/* Bottom Project Changed */}
          <div className="mt-32 mb-10 flex flex-col md:flex-row items-center gap-16 px-4 md:px-12">
            <div className="w-full md:w-5/12">
              <img src="/images/projects/rayara-tamara/chat.png" alt="Preparation" className="w-full h-auto rounded-[3rem] shadow-2xl" />
            </div>
            <div className="w-full md:w-7/12 flex flex-col items-center md:items-start pl-0 md:pl-10">
              <h2 className="text-[clamp(1.125rem,2.5vw+0.25rem,2.5rem)] tracking-[0] font-extralight uppercase text-[#d8c3a5] mb-16 ">
                The moment<br />the project changed
              </h2>
              <div className="relative border-2 border-[#585d33] rounded-[3rem] p-10 md:p-14 max-w-lg chat-tail-large">
                <p className="text-[clamp(1.125rem,2.5vw+0.25rem,2rem)] max-w-sm font-[600] text-white leading-relaxed text-center">
                  "I want to share the happiness I once felt, so others can feel at home too."
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* Rayuru's Tamara Section */}
      <section className="bg-[#E3D6CA] relative overflow-hidden font-sans py-16 sm:py-20 lg:py-24 flex flex-col items-center">
        <div className="max-w-[1440px] mx-auto px-4 w-full">

          {/* Top text */}
          <div className="text-center mb-10 sm:mb-14 lg:mb-20 text-[#606024] px-2 sm:px-4">
            <h3 className="text-[13px] sm:text-base lg:text-[clamp(1.125rem,2.5vw+0.25rem,2.1875rem)] leading-snug lg:leading-[1em] font-[300] uppercase tracking-[0.06em] lg:-tracking-[0.01em] mb-1 opacity-90">Exploring Waywards</h3>
            <h3 className="text-[13px] sm:text-base lg:text-[clamp(1.125rem,2.5vw+0.25rem,2.1875rem)] leading-snug lg:leading-[1em] font-[300] uppercase tracking-[0.06em] lg:-tracking-[0.01em] mb-1 opacity-90">We discovered their love for Rayuru</h3>
            <h3 className="text-[13px] sm:text-base lg:text-[clamp(1.125rem,2.5vw+0.25rem,2.1875rem)] leading-snug lg:leading-[1em] font-[300] uppercase tracking-[0.06em] lg:-tracking-[0.01em] mb-3 lg:mb-4 opacity-90">More so.. we found it in</h3>
            <h2 className="text-[28px] sm:text-4xl lg:text-[clamp(1.125rem,5vw+1rem,5.25rem)] font-[900] uppercase text-[#585d33] mb-4 sm:mb-6 lg:mb-10 leading-none tracking-tight">
              Rayuru's Tamara
            </h2>
            <p className="max-w-[340px] sm:max-w-md lg:max-w-lg mx-auto text-[13px] sm:text-sm lg:text-[clamp(0.9375rem,2.5vw+0.25rem,0.9375rem)] font-[400] text-center leading-relaxed text-[#5c564b]">
              What seemed like a simple name revealed a rich cultural legacy, a unique visual language, and a story the world had yet to discover. <strong className="font-[700]">Rayara</strong> became our way of bringing that story to life.
            </p>
          </div>

          {/* Mobile Layout (Screens < lg): Center God Image first, then horizontal scrolling cards underneath */}
          <div className="lg:hidden flex flex-col items-center w-full">
            {/* Center Image */}
            <div className="w-full flex justify-center items-center mb-10 px-2">
              <img
                src="/images/projects/rayara-tamara/god.png"
                alt="Rayuru's Tamara"
                className="w-full max-w-[350px] sm:max-w-[420px] h-auto shadow-2xl rounded-sm object-contain"
              />
            </div>

            {/* Scrolling Pillars Strip */}
            <div className="w-full overflow-hidden">
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 sm:gap-7 px-4 sm:px-6 pb-6 pt-2 no-scrollbar scroll-smooth items-start">
                {RAYURU_BRAND_PILLARS.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="shrink-0 snap-start flex flex-col items-center text-center w-[160px] sm:w-[190px]"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 flex items-center justify-center opacity-65">
                      <img src={pillar.icon} alt="" className="max-w-full max-h-full object-contain" />
                    </div>
                    <h4 className="text-[#585d33] font-bold tracking-widest uppercase mb-2.5 text-[13px] sm:text-[14px] leading-tight whitespace-pre-line">
                      {pillar.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#5c564b] opacity-80 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Layout (Screens >= lg): Exact original 3-column + 4-column layout */}
          <div className="hidden lg:block">
            {/* Grid Area */}
            <div className="flex flex-row items-stretch justify-center gap-8 mb-20">

              {/* Left Column */}
              <div className="flex flex-col justify-center gap-16 w-1/4 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 mb-6 flex items-center justify-center opacity-60">
                    <img src={RAYURU_BRAND_PILLARS[0].icon} alt="" />
                  </div>
                  <h4 className="text-[#585d33] font-bold tracking-widest uppercase mb-3 text-[clamp(0.875rem,0.5vw+0.65rem,1rem)] whitespace-pre-line">{RAYURU_BRAND_PILLARS[0].title}</h4>
                  <p className="text-[clamp(0.75rem,0.35vw+0.6rem,0.8125rem)] text-[#5c564b] opacity-80 max-w-[200px] leading-relaxed">{RAYURU_BRAND_PILLARS[0].desc}</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 mb-6 flex items-center justify-center opacity-60">
                    <img src={RAYURU_BRAND_PILLARS[1].icon} alt="" />
                  </div>
                  <h4 className="text-[#585d33] font-bold tracking-widest uppercase mb-3 text-[clamp(0.875rem,0.5vw+0.65rem,1rem)] whitespace-pre-line">{RAYURU_BRAND_PILLARS[1].title}</h4>
                  <p className="text-[clamp(0.75rem,0.35vw+0.6rem,0.8125rem)] text-[#5c564b] opacity-80 max-w-[200px] leading-relaxed">{RAYURU_BRAND_PILLARS[1].desc}</p>
                </div>
              </div>

              {/* Center Image */}
              <div className="w-2/4 flex justify-center items-center py-0">
                <img src="/images/projects/rayara-tamara/god.png" alt="Rayuru's Tamara" className="w-full h-auto max-w-lg xl:max-w-xl shadow-2xl rounded-sm object-contain" />
              </div>

              {/* Right Column */}
              <div className="flex flex-col justify-center gap-16 w-1/4 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 mb-6 flex items-center justify-center opacity-60">
                    <img src={RAYURU_BRAND_PILLARS[2].icon} alt="" />
                  </div>
                  <h4 className="text-[#585d33] font-bold tracking-widest uppercase mb-3 text-[clamp(0.875rem,0.5vw+0.65rem,1rem)] whitespace-pre-line">{RAYURU_BRAND_PILLARS[2].title}</h4>
                  <p className="text-[clamp(0.75rem,0.35vw+0.6rem,0.8125rem)] text-[#5c564b] opacity-80 max-w-[200px] leading-relaxed">{RAYURU_BRAND_PILLARS[2].desc}</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 mb-6 flex items-center justify-center opacity-60">
                    <img src={RAYURU_BRAND_PILLARS[3].icon} alt="" />
                  </div>
                  <h4 className="text-[#585d33] font-bold tracking-widest uppercase mb-3 text-[clamp(0.875rem,0.5vw+0.65rem,1rem)] whitespace-pre-line">{RAYURU_BRAND_PILLARS[3].title}</h4>
                  <p className="text-[clamp(0.75rem,0.35vw+0.6rem,0.8125rem)] text-[#5c564b] opacity-80 max-w-[200px] leading-relaxed">{RAYURU_BRAND_PILLARS[3].desc}</p>
                </div>
              </div>

            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-4 gap-8 text-center pt-16 mt-8">
              {RAYURU_BRAND_PILLARS.slice(4).map((pillar, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-20 h-20 mb-6 flex items-center justify-center opacity-60">
                    <img src={pillar.icon} alt="" />
                  </div>
                  <h4 className="text-[#585d33] font-bold tracking-widest uppercase mb-3 text-[clamp(0.875rem,0.5vw+0.65rem,1rem)] whitespace-pre-line">{pillar.title}</h4>
                  <p className="text-[clamp(0.75rem,0.35vw+0.6rem,0.8125rem)] text-[#5c564b] opacity-80 max-w-[220px] mx-auto leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      {/* Venturing Deep Banner Section */}
      <section className="bg-[#C08C45] relative py-24 md:py-16 flex flex-col items-center">
        <div className="max-w-4xl mx-auto px-4 w-full text-center">
          <h2 className="text-[clamp(1.125rem,2.5vw+0.25rem,2.1875rem)] font-[300] text-white uppercase">
            Venturing deep in the world<br />
            of Rayaru, it all started<br />
            making sense
          </h2>
        </div>
      </section>
      {/* Culture Fused Section */}
      <section className="bg-[#E3D6CA] relative font-sans py-16 sm:py-20 md:py-24 flex flex-col items-center">
        <div className="max-w-[1200px] mx-auto px-4 w-full relative z-10">

          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-24 text-[#606024] px-4">
            <h2 className="text-[28px] sm:text-4xl md:text-[clamp(1.125rem,2.5vw+0.25rem,4.625rem)] lg:text-[74px] text-[#606024] font-[300] uppercase mb-4 sm:mb-6 md:mb-8 leading-[1.1em] md:leading-[1em]">
              <span className="font-[900] text-[#585d33]">Culture</span> slowly<br />
              fused into <span className="font-[900] text-[#585d33]">Design</span>
            </h2>
            <p className="max-w-[320px] sm:max-w-sm mx-auto text-[13px] sm:text-sm md:text-[clamp(0.875rem,2.5vw+0.25rem,0.875rem)] font-[400] leading-relaxed text-[#606024]">
              Remembering what we feel when we step into the humble abodes/homes, we slowly starting building the restaurant elements, creating an atmosphere.
            </p>
          </div>

          {/* Cards container */}
          <div className="flex flex-col  items-center pb-20 sm:pb-24 md:pb-36">

            {/* The Cow Card */}
            <div className="sticky top-20 sm:top-24 md:top-28 z-10 mb-10 sm:mb-14 md:mb-20 bg-[#585d33] w-full max-w-[364px] sm:max-w-[420px] md:max-w-none min-h-[250px] sm:min-h-[270px] md:min-h-[400px] rounded-[28px] md:rounded-[3rem] pt-[24px] pr-[20px] pb-[20px] pl-[24px] md:p-16 flex flex-row items-center justify-between gap-3 md:gap-10 overflow-hidden relative shadow-xl">
              <div className="w-[52%] md:w-5/12 text-white z-10 text-left md:pl-10">
                <h3 className="text-sm sm:text-base md:text-[clamp(1.75rem,1.8vw+0.75rem,2.25rem)] font-bold md:font-light tracking-wider uppercase mb-2 md:mb-8">The Cow</h3>
                <p className="text-[11px] sm:text-xs md:text-[clamp(0.875rem,2.5vw+0.25rem,0.875rem)] leading-relaxed font-[400] text-white/90">
                  Represents nourishment, purity, abundance, and sacred hospitality – reflecting the soulful connection between tradition, food, and care.
                </p>
              </div>
              <div className="w-[48%] md:w-7/12 flex justify-end items-center md:items-end relative h-full">
                <img src="/images/projects/rayara-tamara/cow.png" alt="The Cow" className="w-full h-full max-h-[210px] md:max-h-[450px] object-contain object-right md:object-right-bottom" />
              </div>
            </div>

            {/* Lotus Mandala Card */}
            <div className="sticky top-[92px] sm:top-[104px] md:top-32 z-20 mb-10 sm:mb-14 md:mb-20 bg-[#B68239] w-full max-w-[364px] sm:max-w-[420px] md:max-w-none min-h-[250px] sm:min-h-[270px] md:min-h-[400px] rounded-[28px] md:rounded-[3rem] pt-[24px] pr-[20px] pb-[20px] pl-[24px] md:p-16 flex flex-row items-center justify-between gap-3 md:gap-10 overflow-hidden relative shadow-xl">
               <div className="w-[58%] md:w-5/12 text-white z-10 text-left md:pr-10 order-2 md:order-2">
                <h3 className="text-sm sm:text-base md:text-[clamp(1.75rem,1.8vw+0.75rem,2.25rem)] font-bold md:font-light tracking-wider uppercase mb-2 md:mb-8">Lotus Mandala</h3>
                <p className="text-[11px] sm:text-xs md:text-[clamp(0.875rem,2.5vw+0.25rem,0.875rem)] leading-relaxed font-[400] text-white/90">
                  Inspired by ritual symbolism and handcrafted ornamentation, the mandala evokes harmony, timelessness, devotion, and artisanal detail.
                </p>
              </div>
              <div className="w-[42%] md:w-7/12 flex justify-start items-center md:items-end relative h-full order-1 md:order-1">
                <img src="/images/projects/rayara-tamara/flower.png" alt="Lotus Mandala" className="w-full h-full max-h-[210px] md:max-h-[450px] object-contain object-left md:object-left-bottom" />
              </div>
            </div>

            {/* Copper Plate Card */}
            <div className="sticky top-[104px] sm:top-[116px] md:top-36 z-30 mb-0 bg-[#EAE4D8] w-full max-w-[364px] sm:max-w-[420px] md:max-w-none min-h-[250px] sm:min-h-[270px] md:min-h-[400px] rounded-[28px] md:rounded-[3rem] pt-[24px] pr-[20px] pb-[20px] pl-[24px] md:p-16 flex flex-row items-center justify-between gap-2 sm:gap-3 md:gap-10 overflow-hidden relative shadow-xl">
              <div className="w-[62%] md:w-5/12 text-[#5c564b] z-10 text-left md:pl-10">
                <h3 className="text-sm sm:text-base md:text-[clamp(1.75rem,1.8vw+0.75rem,2.25rem)] font-bold md:font-light tracking-wider uppercase mb-2 md:mb-8 text-[#606024] md:text-[#5c564b]">Copper Plate</h3>
                <p className="text-[10px] sm:text-xs md:text-[clamp(0.875rem,2.5vw+0.25rem,0.875rem)] leading-relaxed font-[400] text-[#606024]">
                  The circular emblem references the traditional copper serving plate – a symbol of heritage dining, warmth, and the essence of &ldquo;Guruji&rsquo;s Copper Plate.&rdquo; The Rayara Tamara identity brings together tradition, ritual, and hospitality, creating a brand experience that honours heritage while feeling enduring, warm, and contemporary.
                </p>
              </div>
              <div className="w-[38%] md:w-7/12 flex justify-center md:justify-end items-center relative h-full">
                <img src="/images/projects/rayara-tamara/copper-plate.png" alt="Copper Plate" className="w-full max-w-[130px] sm:max-w-[145px] md:max-w-none md:w-[95%] h-auto max-h-[175px] md:max-h-[450px] object-contain object-center md:object-right" />
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Heritage Inspired Gallery Section */}
      <section className="bg-[#E3D6CA] relative overflow-hidden font-sans py-16 sm:py-20 md:py-24 flex flex-col items-center">
        <div className="max-w-[1440px] mx-auto px-4 w-full">

          {/* Header */}
          <div className="text-center mb-10 sm:mb-16 text-[#606024] px-2 sm:px-4">
            <h2 className="text-[26px] sm:text-4xl md:text-[clamp(1.125rem,2.5vw+0.25rem,4.125rem)] lg:text-[66px] font-[200] uppercase tracking-[0.02em] md:-tracking-[0.05em] mb-6 sm:mb-10 leading-[1.15em] lg:leading-[1em]">
              For a<br />
              <span className="font-[800] text-[#585d33]">Heritage-Inspired</span><br />
              South Indian Dining<br />
              Experience
            </h2>
            <div className="max-w-md sm:max-w-xl mx-auto space-y-4 sm:space-y-6 text-[13px] sm:text-sm md:text-[clamp(0.875rem,2.5vw+0.25rem,0.875rem)] font-[400] leading-relaxed text-[#606024]">
              <p>
                Rayara Tamara draws inspiration from the timeless tradition of serving food on handcrafted copper plates, symbols of warmth, nourishment, hospitality, and ritual. Rooted in cultural memory and artisanal craftsmanship, the brand reinterprets traditional dining through a refined contemporary lens.
              </p>
              <p>
                The identity combines sacred ornamental forms, earthy oxidized greens, and ancient copper tones to create a visual language that feels rooted, elegant, and enduring.
              </p>
            </div>
          </div>

          {/* Mobile Horizontal Scrolling Gallery (< md) */}
          <div className="md:hidden mt-8 sm:mt-10 -mx-4 px-4 overflow-hidden w-full">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-6 pt-2 no-scrollbar scroll-smooth items-stretch">
              {GALLERY_IMAGES.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className="shrink-0 snap-start w-[78vw] sm:w-[320px] max-w-[340px] aspect-[9/15] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-lg"
                >
                  <img
                    src={imgSrc}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Grid (>= md) */}
          <div className="hidden md:grid md:grid-cols-12 gap-4 md:gap-6 mt-20">
            {/* Row 1 */}
            <div className="md:col-span-8 overflow-hidden rounded-[2rem] shadow-md">
              <img src="/images/projects/rayara-tamara/gallery/1.png" alt="Gallery 1" className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-4 overflow-hidden rounded-[2rem] shadow-md">
              <img src="/images/projects/rayara-tamara/gallery/2.png" alt="Gallery 2" className="w-full h-full object-cover" />
            </div>

            {/* Row 2 */}
            <div className="md:col-span-12 overflow-hidden rounded-[2rem] shadow-md">
              <img src="/images/projects/rayara-tamara/gallery/3.png" alt="Gallery 3" className="w-full h-full object-cover" />
            </div>

            {/* Row 3 */}
            <div className="md:col-span-8 overflow-hidden rounded-[2rem] shadow-md">
              <img src="/images/projects/rayara-tamara/gallery/4.png" alt="Gallery 4" className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-4 overflow-hidden rounded-[2rem] shadow-md">
              <img src="/images/projects/rayara-tamara/gallery/5.png" alt="Gallery 5" className="w-full h-full object-cover" />
            </div>

            {/* Row 4 */}
            <div className="md:col-span-12 overflow-hidden rounded-[2rem] shadow-md">
              <img src="/images/projects/rayara-tamara/gallery/6.png" alt="Gallery 6" className="w-full h-full object-cover" />
            </div>

            {/* Row 5 */}
            <div className="md:col-span-6 overflow-hidden rounded-[2rem] shadow-md">
              <img src="/images/projects/rayara-tamara/gallery/7.png" alt="Gallery 7" className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-6 overflow-hidden rounded-[2rem] shadow-md">
              <img src="/images/projects/rayara-tamara/gallery/8.png" alt="Gallery 8" className="w-full h-full object-cover" />
            </div>

            {/* Row 6 */}
            <div className="md:col-span-8 overflow-hidden rounded-[2rem] shadow-md">
              <img src="/images/projects/rayara-tamara/gallery/9.png" alt="Gallery 9" className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-4 overflow-hidden rounded-[2rem] shadow-md">
              <img src="/images/projects/rayara-tamara/gallery/10.png" alt="Gallery 10" className="w-full h-full object-cover" />
            </div>

            {/* Row 7 */}
            <div className="md:col-span-12 overflow-hidden rounded-[2rem] shadow-md">
              <img src="/images/projects/rayara-tamara/gallery/11.png" alt="Gallery 11" className="w-full h-full object-cover" />
            </div>

            {/* Row 8 */}
            <div className="md:col-span-6 overflow-hidden rounded-[2rem] shadow-md">
              <img src="/images/projects/rayara-tamara/gallery/12.png" alt="Gallery 12" className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-6 overflow-hidden rounded-[2rem] shadow-md">
              <img src="/images/projects/rayara-tamara/gallery/13.png" alt="Gallery 13" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      {/* Visual Language Color Palette Section */}
      <section className="bg-[#E1D8CC] relative overflow-hidden font-sans py-16 sm:py-20 md:py-32 flex flex-col items-center">
        {/* Subtle mandala background accent */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none opacity-[0.06] md:opacity-[0.03]">
          <img src="/images/projects/rayara-tamara/flower.png" alt="" className="w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-150" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 w-full relative z-10">

          {/* Header */}
          <div className="text-center mb-10 sm:mb-16 md:mb-28 px-4">
            <h2 className="text-[22px] sm:text-[28px] md:text-[clamp(1.125rem,2.5vw+0.25rem,2.5rem)] font-[300] uppercase text-[#474c23] md:text-[#606024] leading-[1.3em] md:leading-[1.5em] tracking-[0.06em]">
              Every touchpoint<br />
              spoke the same<br />
              visual language.
            </h2>
            <div className="w-14 sm:w-20 h-[1px] bg-[#606024]/40 mx-auto mt-4 sm:mt-6" />
          </div>

          {/* Color Grid - 4 columns on mobile as in design spec */}
          <div className="grid grid-cols-4 gap-y-6 sm:gap-y-10 md:gap-y-20 gap-x-2 sm:gap-x-6 md:gap-x-8 max-w-5xl mx-auto px-1 sm:px-4">
            {COLOR_PALETTE.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center group cursor-pointer text-center">
                <div
                  className={`w-14 h-14 sm:w-20 sm:h-20 md:w-44 md:h-44 rounded-full mb-2 sm:mb-4 md:mb-8 ${item.bg} shadow-md md:shadow-lg ${item.border ? 'border border-[#5c564b]/15' : ''} group-hover:scale-105 transition-transform duration-500 ease-out`}
                />
                <p className="text-[9.5px] sm:text-[11px] md:text-[clamp(1.0625rem,2.5vw+0.25rem,1.0625rem)] font-normal text-[#5c564b] tracking-tight sm:tracking-wider text-center leading-tight max-w-[75px] sm:max-w-none">
                  {item.name}
                </p>
              </div>
            ))}
          </div>

          {/* Visual Experience Showcase Cards */}
          <div id="visual-showcase" className="mt-14 sm:mt-20 md:mt-36 w-full -mx-4 px-4 overflow-hidden">
            <div className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto md:overflow-visible pb-6 md:pb-0 px-4 sm:px-6 md:px-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] items-stretch">

              {/* Card 1: Peace, warmth, atmosphere */}
              <div className="relative flex-shrink-0 w-[78vw] sm:w-[340px] md:w-auto aspect-[9/15] md:aspect-[453/560] rounded-[28px] overflow-hidden shadow-xl snap-start group">
                <img
                  src="/images/projects/rayara-tamara/atmosphere.png"
                  alt="Peace, warmth, atmosphere"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 text-white pointer-events-none">
                  <p className="text-[17px] sm:text-[20px] md:text-[clamp(1.125rem,2.5vw+0.25rem,2.5rem)] font-[200] tracking-wide text-white/95 leading-tight">
                    Peace, warmth,
                  </p>
                  <p className="text-[17px] sm:text-[20px] md:text-[clamp(1.125rem,2.5vw+0.25rem,2.5rem)] font-[600] tracking-wide text-white leading-tight mt-0.5">
                    atmosphere
                  </p>
                </div>
              </div>

              {/* Card 2: Temple-inspired hospitality */}
              <div className="relative flex-shrink-0 w-[78vw] sm:w-[340px] md:w-auto aspect-[9/15] md:aspect-[453/560] rounded-[28px] overflow-hidden shadow-xl snap-start group">
                <img
                  src="/images/projects/rayara-tamara/hospitality.png"
                  alt="Temple-inspired hospitality"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 text-white pointer-events-none">
                  <p className="text-[17px] sm:text-[20px] md:text-[clamp(1.125rem,2.5vw+0.25rem,2.5rem)] font-[200] tracking-wide text-white/95 leading-tight">
                    Temple-inspired
                  </p>
                  <p className="text-[17px] sm:text-[20px] md:text-[clamp(1.125rem,2.5vw+0.25rem,2.5rem)] font-[600] tracking-wide text-white leading-tight mt-0.5">
                    hospitality
                  </p>
                </div>
              </div>

              {/* Card 3: Temple-inspired hospitality */}
              <div className="relative flex-shrink-0 w-[78vw] sm:w-[340px] md:w-auto aspect-[9/15] md:aspect-[453/560] rounded-[28px] overflow-hidden shadow-xl snap-start group">
                <img
                  src="/images/projects/rayara-tamara/tradition.png"
                  alt="Temple-inspired hospitality"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 text-white pointer-events-none">
                  <p className="text-[17px] sm:text-[20px] md:text-[clamp(1.125rem,2.5vw+0.25rem,2.5rem)] font-[200] tracking-wide text-white/95 leading-tight">
                    Temple-inspired
                  </p>
                  <p className="text-[17px] sm:text-[20px] md:text-[clamp(1.125rem,2.5vw+0.25rem,2.5rem)] font-[600] tracking-wide text-white leading-tight mt-0.5">
                    hospitality
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
