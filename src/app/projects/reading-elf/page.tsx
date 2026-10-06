"use client";

import Image from "next/image";
import BookScrollFlip from "@/components/projects/reading-elf/BookScrollFlip";
import FannedCardsSlider from "@/components/projects/reading-elf/FannedCardsSlider";

export default function ReadingElfProjectPage() {
  return (
    <main className="min-h-screen bg-[#FDFCEE] text-black">
      {/* Hero Section */}
      <section 
        className="w-full flex items-center justify-center pt-24 md:pt-20 pb-12 md:pb-8 min-h-screen xl:h-[calc(100vh/var(--desktop-scale,1))] overflow-hidden"
      >
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 h-full max-h-none xl:max-h-[820px] flex flex-col xl:flex-row items-center gap-6 xl:gap-8">

        {/* Left Sidebar */}
        <div className="hidden xl:flex flex-col w-[220px] shrink-0 justify-between py-12">
          <div>
            <h4 className="text-[clamp(10px,0.6vw+4px,11px)] text-gray-500 font-bold uppercase tracking-widest mb-3">CASE STUDY 1</h4>
            <h2 className="text-[clamp(12px,0.7vw+5px,14px)] font-black text-gray-800 uppercase tracking-widest leading-relaxed w-[90%]">READING ELF<br />CHILDREN'S LIBRARY</h2>
          </div>

          <div className="flex flex-col gap-10 mt-16">
            <div>
              <h4 className="text-[clamp(11px,0.6vw+4px,13px)] text-gray-400 tracking-wider mb-3">Industry</h4>
              <span className="bg-[#EFEFDE] text-gray-900 font-bold text-[clamp(10px,0.6vw+4px,11px)] px-3 py-1.5 rounded-sm">education</span>
            </div>
            <div>
              <h4 className="text-[clamp(11px,0.6vw+4px,13px)] text-gray-400 tracking-wider mb-3">Duration</h4>
              <span className="bg-[#EFEFDE] text-gray-900 font-bold text-[clamp(10px,0.6vw+4px,11px)] px-3 py-1.5 rounded-sm">3 months</span>
            </div>
            <div>
              <h4 className="text-[clamp(11px,0.6vw+4px,13px)] text-gray-400 tracking-wider mb-3">Platforms</h4>
              <div className="flex flex-col gap-2 items-start">
                {["Social Media", "Website", "GMB Optimisation", "Digital Advertising"].map((item, i) => (
                  <span key={i} className="bg-[#EFEFDE] text-gray-900 font-bold text-[clamp(10px,0.6vw+4px,11px)] px-3 py-1.5 rounded-sm">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex-1 w-full border-[1.5px] border-[#F29F58] rounded-[30px] md:rounded-[40px] p-1.5 relative overflow-hidden flex items-stretch">
          <div className="w-full relative rounded-[26px] md:rounded-[34px] overflow-hidden aspect-[4/3] md:aspect-[16/10] xl:aspect-auto xl:h-full max-h-[580px]">
            {/* Background Image */}
            <img
              src="/images/projects/reading-elf/banner.png"
              alt="Magical Den Banner"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col justify-end items-center pb-16 md:pb-24 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
              <p className="text-white/90 text-[clamp(9px,0.6vw+4px,12px)] tracking-[0.2em] uppercase mb-1">TURNING A MOTHER & SON'S</p>
              <p className="text-white/90 text-[clamp(9px,0.6vw+4px,12px)] tracking-[0.2em] uppercase mb-3">DREAM INTO A</p>
              <h1 className="text-[clamp(2.25rem,4.5vw+0.5rem,4.5rem)] font-bold text-white tracking-widest mt-1">MAGICAL DEN</h1>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="hidden xl:flex flex-col w-[180px] shrink-0 justify-end py-16 pl-6">
          <ul className="flex flex-col gap-3.5">
            {["AI video production", "UX/UI", "Development", "Brand"].map((service, i) => (
              <li key={i} className="text-[clamp(10px,0.6vw+4px,12px)] font-bold text-gray-500 tracking-wider">{service}</li>
            ))}
          </ul>
        </div>

        {/* Mobile View Metadata (Visible only on small screens) */}
        <div className="xl:hidden w-full flex flex-wrap gap-8 mt-6 pb-12">
          <div className="w-full">
            <h4 className="text-[clamp(10px,0.6vw+4px,11px)] text-gray-500 font-bold uppercase tracking-widest mb-1">CASE STUDY 1</h4>
            <h2 className="text-[clamp(13px,0.8vw+5px,16px)] font-black text-gray-800 uppercase tracking-widest">READING ELF CHILDREN'S LIBRARY</h2>
          </div>
          <div className="flex gap-8 flex-wrap">
            <div className="flex flex-col gap-2">
              <h4 className="text-[clamp(11px,0.6vw+4px,13px)] text-gray-400 tracking-wider">Industry</h4>
              <span className="bg-[#EFEFDE] text-gray-900 font-bold text-[clamp(10px,0.6vw+4px,11px)] px-3 py-1.5 rounded-sm self-start">education</span>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-[clamp(11px,0.6vw+4px,13px)] text-gray-400 tracking-wider">Duration</h4>
              <span className="bg-[#EFEFDE] text-gray-900 font-bold text-[clamp(10px,0.6vw+4px,11px)] px-3 py-1.5 rounded-sm self-start">3 months</span>
            </div>
          </div>
          <div className="w-full">
            <h4 className="text-[clamp(11px,0.6vw+4px,13px)] text-gray-400 tracking-wider mb-2">Platforms</h4>
            <div className="flex flex-wrap gap-2 items-start">
              {["Social Media", "Website", "GMB Optimisation", "Digital Advertising"].map((item, i) => (
                <span key={i} className="bg-[#EFEFDE] text-gray-900 font-bold text-[clamp(10px,0.6vw+4px,11px)] px-3 py-1.5 rounded-sm">{item}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
      </section>

      {/* Transformed Vision & Dream Section */}
      <section className="relative w-full overflow-hidden flex flex-col items-center pt-32 pb-40">

        {/* Background Image */}
        <img
          src="/images/projects/reading-elf/transform-bg.png"
          alt="Dreamy Background"
          className="absolute inset-0 w-full h-full object-cover  z-0"
        />

        {/* Content Container */}
        <div className="relative w-full max-w-[1200px] mx-auto z-10 flex flex-col items-center px-6 md:px-12">

          {/* Top Header */}
          <div className="text-center mb-16 mt-10 md:mt-20">
            <h4 className="text-[clamp(10px,0.6vw+4px,12px)] text-gray-700 font-bold tracking-[0.2em] uppercase mb-4">WORKING ALONGSIDE EAST THEORY,</h4>
            <h2 className="text-[clamp(1.75rem,3.2vw+0.5rem,3.125rem)] font-bold text-gray-800 uppercase tracking-widest leading-[1.2]">WE TRANSFORMED<br />THE FOUNDER'S VISION</h2>
          </div>

          {/* Open Book Graphic */}
          <div className="w-full max-w-4xl flex justify-center mb-16 md:mb-24 drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-700">
            <img
              src="/images/projects/reading-elf/open-book.png"
              alt="Magical Open Book"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Small Paragraph */}
          <div className="max-w-[400px] text-center mb-24 md:mb-32">
            <p className="text-[clamp(10px,0.6vw+4px,12px)] text-gray-800/80 leading-relaxed font-bold tracking-wide">
              Smrkonova brought the founder's dream to the table, gave it shape and started building
            </p>
          </div>

          {/* Second Header */}
          <div className="text-center mb-16">
            <h4 className="text-[clamp(10px,0.6vw+4px,12px)] text-gray-700 font-bold tracking-[0.2em] uppercase mb-4">A BRAND THAT COULD BE</h4>
            <h2 className="text-[clamp(1.5rem,2.8vw+0.5rem,2.5rem)] font-black text-gray-800 uppercase tracking-widest leading-snug">SEEN, EXPERIENCED<br />AND DISCOVERED.</h2>
          </div>

          {/* Flying Book Graphic */}
          <div className="w-full max-w-[180px] md:max-w-[220px] flex justify-center mb-40 md:mb-64 drop-shadow-xl hover:-translate-y-4 transition-transform duration-500">
            <img
              src="/images/projects/reading-elf/fly-book.png"
              alt="Flying Book"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Understanding the Dream Grid */}
          <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center mb-40 mt-10">

            {/* Left Text Content */}
            <div className="flex flex-col gap-6 lg:pr-12">
              <div>
                <h2 className="text-[clamp(1.75rem,3.5vw+0.5rem,3.5rem)] font-light text-gray-800 uppercase tracking-widest leading-[1.1]">UNDERSTANDING</h2>
                <h2 className="text-[clamp(1.75rem,3.5vw+0.5rem,3.5rem)] font-black text-gray-800 uppercase tracking-widest leading-[1.1] mt-1">THE DREAM FIRST</h2>
              </div>

              <div className="flex flex-col gap-5 mt-4">
                <p className="text-[clamp(11px,0.6vw+5px,13px)] text-gray-800/90 leading-relaxed font-medium">
                  Reading Elf is a magical space where parents and children bond over stories, discover books together, and nurture a lifelong love for reading. Through books, workshops, and shared experiences, every visit is designed to spark curiosity and imagination.
                </p>
                <p className="text-[clamp(11px,0.6vw+5px,13px)] text-gray-800/90 leading-relaxed font-medium">
                  Our role was to translate that vision into a cohesive brand experience by crafting the visual identity, website, and digital ecosystem that brought Reading Elf's world to life before visiting the library.
                </p>
              </div>

              <h3 className="text-[clamp(1.125rem,1.5vw+0.5rem,1.5rem)] font-light text-gray-800 mt-10 md:mt-16 tracking-wide">
                The first piece was already there.
              </h3>
            </div>

            {/* Right Image - Torn Paper Dream Drawing */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/images/projects/reading-elf/dream.png"
                alt="Original Child's Drawing on Torn Paper"
                className="w-[85%] max-w-[450px] rotate-[6deg] drop-shadow-2xl hover:rotate-[0deg] transition-transform duration-500"
              />
            </div>

          </div>

          {/* Logo and Final Paragraph */}
          <div className="w-full flex flex-col items-center mt-12 md:mt-24 pb-20">

            {/* Circular Badge Logo */}
            <div className="w-48 md:w-64 h-48 md:h-64 mb-12 drop-shadow-2xl hover:scale-105 transition-transform duration-500 bg-white rounded-full p-2 flex items-center justify-center">
              <img
                src="/images/projects/reading-elf/logo.png"
                alt="The Reading Elf Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>

            {/* Bottom Summary Text */}
            <div className="max-w-[700px] text-center px-4">
              <p className="text-[clamp(11px,0.6vw+5px,13px)] text-gray-900 leading-relaxed font-medium mb-4">
                The logo carried the heart of Reading Elf, <span className="font-bold">a child's drawing transformed into a symbol of imagination.</span>
              </p>
              <p className="text-[clamp(11px,0.6vw+5px,13px)] text-gray-900 leading-relaxed font-medium">
                Smrkonova's role was to solve the rest of the puzzle. Keeping the logo as our foundation, we built a cohesive brand around it through colour, illustrations, digital experiences, campaigns, and every customer touchpoint. Piece by piece, the magical world the founder, also a mom and her child had imagined together began to take shape.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Book Showcase Section */}
      <section className="relative w-full flex flex-col items-center pb-24 md:pb-40 z-20 -mt-24 md:-mt-48">
        <BookScrollFlip />

        <img
          src="/images/projects/reading-elf/book/book-bg.png"
          alt="Book Showcase Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Details & Fanned Cards Container */}
        <div className="relative w-full max-w-[1200px] mx-auto z-10 flex flex-col px-6 md:px-12 mt-32 md:mt-48">



          {/* Center Text */}
          <div className="max-w-[550px] mx-auto text-center mb-32 md:mb-48">
            <p className="text-[clamp(12px,0.6vw+5px,15px)] text-gray-800 leading-relaxed font-medium">
              A cohesive brand building effort to serve <span className="font-bold">one purpose,</span> to make Reading Elf feel magical before a child even walks through the door.
            </p>
          </div>

          {/* Fanned Cards Slider */}
          <FannedCardsSlider />

          {/* Final Typography & CTA */}
          <div className="flex flex-col items-center text-center mt-20 mb-12 md:mb-24 z-10 relative">

            {/* Glowing Aura Effect behind text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/20 blur-[100px] rounded-full pointer-events-none z-0"></div>

            <div className="relative z-10">
              <h2 className="text-[clamp(1.75rem,3vw+0.5rem,2.625rem)] font-black text-white uppercase tracking-widest mb-1 drop-shadow-lg">
                BRANDS ARE BUILT
              </h2>
              <h2 className="text-[clamp(1.75rem,3vw+0.5rem,2.625rem)] font-light text-white uppercase tracking-widest mb-8 drop-shadow-lg">
                IN THE DETAILS.
              </h2>
              <p className="text-[clamp(10px,0.6vw+5px,12px)] text-white/95 leading-[1.8] max-w-[450px] mx-auto mb-12 font-medium tracking-wide drop-shadow-md">
                A child had already imagined Reading Elf. The founders had already believed in it. Our job was to remove every barrier between that idea and the families it was meant to reach.
              </p>
              <div className="flex items-center justify-center gap-4">
                <button className="bg-[#E48744] hover:bg-[#d67b3a] text-white text-[clamp(10px,0.6vw+4px,12px)] font-bold uppercase tracking-widest px-8 md:px-10 py-3 md:py-4 rounded-sm transition-all shadow-lg hover:scale-105">
                  CREATE YOURS
                </button>
                <button className="border-2 border-white/60 hover:bg-white/10 text-white text-[clamp(10px,0.6vw+4px,12px)] font-bold uppercase tracking-widest px-8 md:px-10 py-3 md:py-4 rounded-sm transition-all shadow-md hover:scale-105">
                  NEXT PROJECT
                </button>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* Footer Marquee */}
      <div className="w-full bg-[#E48744] py-3 md:py-4 overflow-hidden relative z-30">
        <div className="flex whitespace-nowrap animate-marquee">
          {/* We duplicate the content to create the infinite loop effect */}
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex items-center text-white font-black text-[clamp(10px,0.6vw+4px,11px)] uppercase tracking-widest mx-3">
              <span className="mx-3">SMRKONOVA</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="opacity-90">
                <path d="M12 2L15 8L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8L12 2Z" />
              </svg>
              <span className="mx-3">READING ELF</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="opacity-90">
                <path d="M12 2L15 8L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8L12 2Z" />
              </svg>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}