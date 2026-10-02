import React from 'react';
import OpeningDoorsSection from './OpeningDoorsSection';
import InteractiveMap from './InteractiveMap';
import HorizontalScrollSection from './HorizontalScrollSection';
import RaisingStructureCards from './RaisingStructureCards';

export default function NeelachandraProjectPage() {
  return (
    <main className="min-h-screen bg-white">
      <section 
        className="relative overflow-hidden font-sans flex items-center pt-16 pb-4"
        style={{ height: "calc(100vh / var(--desktop-scale, 1))" }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center w-full h-full max-h-[820px]">

          {/* Left Column - Details */}
          <div className="w-full md:w-1/5 pr-8 flex flex-col justify-between py-10">
            <div className="space-y-10">
              <div>
                <h4 className="text-[clamp(9px,0.6vw+4px,11px)] font-bold tracking-[0.2em] uppercase mb-3 text-[#a3a3a3]">Case Study 1</h4>
                <h2 className="text-[clamp(12px,0.7vw+5px,14px)] font-bold tracking-widest uppercase text-[#333333] mb-1">NEELACHANDRA</h2>
                <p className="text-[clamp(10px,0.6vw+4px,12px)] text-[#777777] font-medium">construction company in 'luru</p>
              </div>

              <div>
                <h4 className="text-[clamp(9px,0.6vw+4px,11px)] font-bold tracking-[0.2em] uppercase mb-3 text-[#a3a3a3]">Industry</h4>
                <span className="inline-block bg-[#f4f4f4] px-2.5 py-1.5 text-[clamp(10px,0.6vw+4px,12px)] font-bold rounded-sm text-[#333333] leading-tight">real estate<br />construction</span>
              </div>

              <div>
                <h4 className="text-[clamp(9px,0.6vw+4px,11px)] font-bold tracking-[0.2em] uppercase mb-3 text-[#a3a3a3]">Duration</h4>
                <span className="inline-block bg-[#f4f4f4] px-2.5 py-1.5 text-[clamp(10px,0.6vw+4px,12px)] font-bold rounded-sm text-[#333333]">Ongoing</span>
              </div>

              <div>
                <h4 className="text-[clamp(9px,0.6vw+4px,11px)] font-bold tracking-[0.2em] uppercase mb-3 text-[#a3a3a3]">Platforms</h4>
                <div className="flex flex-col gap-2 items-start">
                  <span className="inline-block bg-[#f4f4f4] px-2.5 py-1.5 text-[clamp(10px,0.6vw+4px,12px)] font-bold rounded-sm text-[#333333]">Branding</span>
                  <span className="inline-block bg-[#f4f4f4] px-2.5 py-1.5 text-[clamp(10px,0.6vw+4px,12px)] font-bold rounded-sm text-[#333333]">Website</span>
                  <span className="inline-block bg-[#f4f4f4] px-2.5 py-1.5 text-[clamp(10px,0.6vw+4px,12px)] font-bold rounded-sm text-[#333333]">GMB Optimisation</span>
                  <span className="inline-block bg-[#f4f4f4] px-2.5 py-1.5 text-[clamp(10px,0.6vw+4px,12px)] font-bold rounded-sm text-[#333333]">Backend</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column - Banner Image */}
          <div className="w-full md:w-3/5 flex justify-center py-2 relative px-2 sm:px-4">
            {/* The outer container with the orange border */}
            <div className="relative rounded-[1.5rem] border-[1.5px] border-[#f98845] w-full max-w-[850px] max-h-[580px] aspect-[16/10] p-[6px] shadow-sm flex flex-col">
              {/* Inner container for image */}
              <div className="relative rounded-[1.25rem] overflow-hidden w-full h-full shadow-md bg-[#111] flex flex-col justify-end">
                <img
                  src="/images/projects/neelachandra/banner.png"
                  alt="Neelachandra Banner"
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />

                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-end text-white px-4 md:px-8 text-center pb-8 md:pb-12 lg:pb-16">
                  <p className="text-[clamp(9px,0.7vw+4px,12px)] font-light tracking-[0.15em] uppercase mb-2 text-white/80 leading-relaxed">
                    The company trusted to<br />build lasting structures
                  </p>
                  <h1 className="text-[clamp(1.5rem,2.5vw+0.5rem,2.5rem)] font-bold uppercase tracking-widest mb-2 drop-shadow-lg">
                    Chose us to build
                  </h1>
                  <p className="text-[clamp(0.875rem,1.2vw+0.5rem,1.375rem)] font-light tracking-[0.15em] uppercase text-white/90 drop-shadow-md leading-tight">
                    Their digital<br />foundation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Navigation/Services list */}
          <div className="w-full md:w-1/5 pl-4 flex flex-col justify-end items-end text-[#5c564b] py-10">
            <div className="mt-auto space-y-3 font-semibold text-[clamp(10px,0.6vw+4px,12px)] tracking-widest text-[#777777] uppercase">
              <p className="hover:text-[#333333] transition-colors cursor-pointer text-right">Strategy</p>
              <p className="hover:text-[#333333] transition-colors cursor-pointer text-right">UX/UI</p>
              <p className="hover:text-[#333333] transition-colors cursor-pointer text-right">Development</p>
              <p className="hover:text-[#333333] transition-colors cursor-pointer text-right">Brand</p>
            </div>
          </div>

        </div>
      </section>

      {/* Network / Foundation Section */}
      <section className="relative w-full min-h-[750px] md:min-h-[850px] lg:h-[950px] flex flex-col bg-white">

        {/* Background Image & Orange Gradient */}
        <div className="absolute inset-0 w-full h-full bg-[#F48120]">
          {/* Image */}
          <img
            src="/images/projects/neelachandra/network.png"
            alt="Network Background"
            className="w-full h-full object-cover object-center"
          />
          {/* Top White Fade specifically for Text Visibility - Reduced so it doesn't cover the image */}
          <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-white via-white/80 to-transparent"></div>

          {/* Orange Gradient Overlay - Adjusted percentages so the middle of the image is visible */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{ background: 'linear-gradient(180deg, rgba(244, 129, 32, 0) 40%, #F48120 65%)' }}
          ></div>
        </div>

        {/* Content Container */}
        <div className="relative z-20 w-full h-full flex flex-col justify-between">

          {/* Top text floating over the white fade */}
          <div className="w-full text-center pt-8 md:pt-12 px-4">
            <h2 className="text-[#F48120] text-[clamp(1.125rem,1.5vw+0.5rem,1.75rem)] font-medium tracking-[0.02em] uppercase leading-snug">
              The real estate company<br />had a great network but,
            </h2>
          </div>

          {/* Bottom Solid Orange Content Area */}
          <div className="w-full text-center text-white max-w-4xl mx-auto flex flex-col items-center pb-20 md:pb-28 px-4">
            <h3 className="text-[clamp(1.5rem,2.5vw+0.5rem,2.75rem)] font-light tracking-widest uppercase leading-tight mb-6">
              Nobody knew them beyond.<br />
              So we started<br />
              <span className="font-bold">Building the foundation.</span>
            </h3>
            <p className="text-[clamp(10px,0.6vw+4px,12px)] font-medium opacity-90 max-w-[340px] leading-relaxed">
              Smrkonova immediately identified a gap in the real estate<br />
              company's presence, turning it into an immediate to-do.
            </p>
          </div>

        </div>
      </section>

      {/* Staggered Images Section */}
      <section className="w-full bg-white py-16 md:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Left Image Column */}
            <div className="w-full">
              <img
                src="/images/projects/neelachandra/left.png"
                alt="Neelachandra property showcase"
                className="w-full max-h-[580px] object-cover rounded-[2rem] shadow-xl"
              />
            </div>

            {/* Right Image Column - Staggered downwards */}
            <div className="w-full md:mt-16 lg:mt-24">
              <img
                src="/images/projects/neelachandra/right.png"
                alt="Neelachandra high-rise showcase"
                className="w-full max-h-[580px] object-cover rounded-[2rem] shadow-xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Laying the Foundation Section */}
      <section className="relative w-full bg-white py-12 md:py-16 overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col">

          {/* Text Content */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-[clamp(2.25rem,4vw+0.5rem,4rem)] font-thin uppercase tracking-tight leading-[1.1] text-[#222222]">
              Laying
            </h2>
            <h2 className="text-[clamp(2.25rem,4vw+0.5rem,4rem)] font-black uppercase tracking-tight leading-[1.1] text-[#F48120] mb-4">
              The Foundation
            </h2>
            <p className="text-[#666666] text-[clamp(10px,0.6vw+5px,13px)] max-w-[350px] font-medium leading-[1.8]">
              We clarified who Neelachandra is, what it stands for, and<br className="hidden md:block" />
              how it should be perceived in a crowded real estate market.
            </p>
          </div>

          {/* Brand Concept Explorations with Seamless Center Logo */}
          <div className="relative w-full flex justify-center items-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[560px]">
            {/* Outer Logo Concepts Background */}
            <img
              src="/images/projects/neelachandra/laying.png"
              alt="Brand Explorations"
              className="absolute inset-0 w-full h-full object-contain object-center z-0 pointer-events-none"
            />
            {/* Center Logo Sketch - seamless blend, no drop shadow */}
            <img
              src="/images/projects/neelachandra/center.png"
              alt="Final Brand Logo"
              className="relative z-10 w-[24%] sm:w-[22%] md:w-[19%] lg:w-[17%] max-w-[210px] object-contain mix-blend-multiply pointer-events-none"
            />
          </div>

        </div>
      </section>

      {/* Raising The Structure Section */}
      <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center">

          {/* Text Content */}
          <div className="w-full md:w-5/12 mb-8 md:mb-0">
            <h2 className="text-[clamp(2.25rem,4vw+0.5rem,4rem)] font-thin uppercase tracking-tight leading-[1.1] text-[#222222]">
              Raising
            </h2>
            <h2 className="text-[clamp(2.25rem,4vw+0.5rem,4rem)] font-black uppercase tracking-tight leading-[1.1] text-[#F48120] mb-4">
              The<br />Structure
            </h2>
            <p className="text-[#666666] text-[clamp(10px,0.6vw+5px,13px)] max-w-[350px] font-medium leading-[1.8]">
              We brought the brand to life through a cohesive identity and<br className="hidden md:block" />
              a suite of marketing assets built for every customer touchpoint.
            </p>
          </div>

          {/* Interactive Card Slides Container */}
          <div className="w-full md:w-7/12 flex justify-center items-center">
            <RaisingStructureCards />
          </div>

        </div>
      </section>

      <OpeningDoorsSection />

      {/* Map Section */}
      <section className="relative w-full bg-[#5F873D] pt-36 md:pt-48 lg:pt-60 pb-16 md:py-24 overflow-hidden flex items-center">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center">

          {/* Text Content */}
          <div className="w-full md:w-5/12 mb-12 md:mb-0 relative z-10">
            <h2 className="text-[clamp(2.5rem,4.5vw+0.5rem,4.5rem)] font-thin uppercase tracking-tight leading-[1.1] text-white">
              Putting It
            </h2>
            <h2 className="text-[clamp(2.5rem,4.5vw+0.5rem,4.5rem)] font-black uppercase tracking-tight leading-[1.1] text-white mb-6">
              On The Map
            </h2>
            <p className="text-white/90 text-[clamp(10px,0.6vw+5px,13px)] max-w-[350px] font-medium leading-[1.8]">
              We improved its digital discoverability, helping people<br className="hidden md:block" />
              searching for real estate properties in India find<br className="hidden md:block" />
              Neelachandra more easily.
            </p>
          </div>

          {/* Image Container */}
          <div className="w-full md:w-7/12 flex justify-center items-center relative z-0">
            <InteractiveMap />
          </div>

        </div>
      </section>

      {/* Building Recognition Section */}
      <section className="relative w-full bg-[#181818] min-h-[600px] md:min-h-[720px] lg:min-h-[820px] flex items-start overflow-hidden">
        {/* Full Bleed Background Image on Right with Dark Gradient on Left */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/projects/neelachandra/building.png"
            alt="Neelachandra Website on Laptop"
            className="w-full h-full object-cover object-right"
          />
          {/* Gradient Overlay to seamlessly blend into text background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#181818] from-25% via-[#181818]/85 via-50% to-transparent w-full md:w-[65%]" />
        </div>

        {/* Content Container - Placed top-left with top 91px space and left 84px space as per Figma */}
        <div className="relative z-10 w-full pt-[60px] md:pt-[91px] pl-6 sm:pl-10 md:pl-[84px] pr-6 pb-16">
          <div className="max-w-[480px]">
            <h2 
              className="font-['Inter',sans-serif] uppercase text-white mb-6 md:mb-8"
              style={{
                fontWeight: 700,
                fontSize: "clamp(2.5rem, 4.5vw, 64px)",
                lineHeight: "clamp(2.8rem, 5.2vw, 77.73px)",
                letterSpacing: "1.73px",
              }}
            >
              Building<br />
              Recognition
            </h2>
            <div 
              className="space-y-4 md:space-y-6 text-white max-w-[440px]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0px",
              }}
            >
              <p>
                Every touchpoint now works together to make the brand more recognizable, memorable, and credible.
              </p>
              <p>
                Designed in Webflow, trained the internal team the flexibly manage content without depending on developers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hover List Section */}
      <section className="relative w-full bg-white py-24 md:py-32">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col w-full border-t border-[#F48120]/30">
            {[
              { word1: "COMPLETED", word2: "PROJECTS" },
              { word1: "CONSTRUCTION", word2: "PROJECTS" },
              { word1: "INTERIOR", word2: "DESIGNS" },
              { word1: "COMPANY", word2: "STORY" },
              { word1: "LEAD", word2: "GENERATIONS" },
              { word1: "SEO", word2: "FOUNDATIONS" },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative flex items-center justify-between border-b border-[#F48120]/30 py-8 md:py-10 cursor-pointer overflow-hidden"
              >
                {/* Left Text */}
                <span className="text-[clamp(10px,0.6vw+4px,12px)] text-gray-500">highlighted</span>

                {/* Center Content */}
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                  <div className="flex items-center justify-center">
                    <span className="text-[clamp(1.5rem,2.8vw+0.5rem,3.125rem)] font-thin tracking-wider text-[#333] transition-all duration-300 group-hover:font-black group-hover:-translate-x-2">
                      {item.word1}
                    </span>

                    {/* Image Wrapper */}
                    <div className="w-0 h-[60px] md:h-[80px] lg:h-[100px] overflow-hidden transition-all duration-500 ease-in-out group-hover:w-[100px] md:group-hover:w-[140px] lg:group-hover:w-[160px] group-hover:mx-4 opacity-0 group-hover:opacity-100 rounded-[2rem] shadow-2xl flex-shrink-0 flex justify-center items-center">
                      <img
                        src="/images/projects/neelachandra/hover.png"
                        alt="Hover thumbnail"
                        className="w-[160px] h-full object-cover rounded-[2rem] max-w-none"
                      />
                    </div>

                    <span className="text-[clamp(1.5rem,2.8vw+0.5rem,3.125rem)] font-thin tracking-wider text-[#333] transition-all duration-300 group-hover:font-black group-hover:text-[#F48120] group-hover:translate-x-2">
                      &nbsp;{item.word2}
                    </span>
                  </div>
                </div>

                {/* Right Text */}
                <span className="text-[clamp(10px,0.6vw+4px,12px)] text-gray-500">on website</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branding Section */}
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[50px] flex justify-center">
          <div
            className="relative w-full overflow-hidden select-none"
            style={{
              maxWidth: 1340,
              aspectRatio: "1340 / 893",
              borderRadius: "clamp(20px, 3.43vw, 46px)",
              boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.3)",
              backgroundColor: "#0d1322",
            }}
          >
            {/* Background Image */}
            <img
              src="/images/projects/neelachandra/branding-card.png"
              alt="Branding background"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Subtle dark overlay for text contrast */}
            <div className="absolute inset-0 bg-black/25 pointer-events-none" />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-8 z-10">
              <h2
                className="text-white text-center uppercase"
                style={{
                  fontFamily: "var(--font-inter), 'Inter', sans-serif",
                  fontWeight: 100,
                  fontSize: "clamp(28px, 5.97vw, 80px)",
                  lineHeight: "clamp(30px, 6.04vw, 81px)",
                  letterSpacing: "4px",
                }}
              >
                Branding Is Not
              </h2>
              <h2
                className="text-white text-center uppercase"
                style={{
                  fontFamily: "var(--font-inter), 'Inter', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(28px, 5.97vw, 80px)",
                  lineHeight: "clamp(30px, 6.04vw, 81px)",
                  letterSpacing: "4px",
                }}
              >
                The End Of Story
              </h2>
              <p
                className="text-white text-center"
                style={{
                  fontFamily: "var(--font-inter), 'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(12px, 1.49vw, 20px)",
                  lineHeight: "clamp(20px, 2.54vw, 34px)",
                  letterSpacing: "2px",
                  marginTop: "clamp(14px, 2.4vw, 32px)",
                }}
              >
                Every touchpoint is important in the real estate business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="w-full bg-white py-16 md:py-24 lg:py-28 flex justify-center items-center">
        <img
          src="/images/projects/neelachandra/logo.svg"
          alt="Neelachandra Construction & Interiors"
          className="w-full max-w-[220px] md:max-w-[300px] lg:max-w-[360px] h-auto object-contain"
        />
      </section>

      {/* Horizontal Scroll Process Section */}
      <HorizontalScrollSection />

      {/* The Result Section */}
      <section className="w-full bg-[#B9893E] py-20 md:py-28 lg:py-36 px-6 flex flex-col justify-center items-center text-center">
        <div className="w-full max-w-[1100px] mx-auto flex flex-col items-center">
          <p className="text-white/80 text-[clamp(11px,0.7vw+4px,13px)] font-medium tracking-[0.3em] uppercase mb-8">
            The Result
          </p>
          <p
            className="font-['Inter',sans-serif] font-normal text-white text-center max-w-[1000px]"
            style={{
              fontSize: "clamp(1.25rem, 2vw + 0.5rem, 32px)",
              lineHeight: "clamp(2.4rem, 4.2vw + 0.5rem, 69px)",
              letterSpacing: "0px",
            }}
          >
            A complete brand transformation—from an established construction company known through word of mouth to a business with the identity, digital presence, and visibility to be discovered by its next generation of customers.
          </p>
        </div>
      </section>

      {/* Built To Grow Section */}
      <section 
        className="relative w-full flex flex-col justify-end overflow-hidden"
        style={{ height: "calc(100vh / var(--desktop-scale, 1))" }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/projects/neelachandra/built.png" 
            alt="Built to Grow" 
            className="w-full h-full object-cover"
          />
          {/* Subtle dark overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full flex flex-col items-center justify-end flex-1 pb-10 md:pb-16 lg:pb-20">
          <h1 className="text-[clamp(2.5rem,5.5vw+0.5rem,5.625rem)] font-thin text-white tracking-[0.2em] uppercase mb-6 md:mb-8 drop-shadow-xl text-center">
            Built To Grow.
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button className="px-10 py-3 md:py-4 bg-[#F48120] hover:bg-[#d6701c] transition-colors text-white text-[clamp(10px,0.6vw+4px,12px)] tracking-widest uppercase font-medium rounded-sm">
              Create Yours
            </button>
            <button className="px-10 py-3 md:py-4 border border-white/50 hover:bg-white/10 transition-colors text-white text-[clamp(10px,0.6vw+4px,12px)] tracking-widest uppercase font-medium rounded-sm backdrop-blur-sm">
              Next Project
            </button>
          </div>
        </div>

        {/* Marquee Ticker */}
        <style>{`
          @keyframes infinite-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 25s linear infinite;
          }
        `}</style>
        <div className="relative z-10 w-full bg-[#F48120] py-4 overflow-hidden flex whitespace-nowrap">
          <div className="flex w-[200%] animate-infinite-scroll">
            {[1, 2].map((groupIndex) => (
              <div key={groupIndex} className="flex w-1/2 justify-around items-center">
                {[...Array(5)].map((_, i) => (
                  <React.Fragment key={i}>
                    <span className="text-white font-bold tracking-widest uppercase text-[clamp(12px,0.6vw+5px,16px)] mx-4">SMRKONOVA</span>
                    <span className="text-white opacity-80 mx-4">✦</span>
                    <span className="text-white font-bold tracking-widest uppercase text-[clamp(12px,0.6vw+5px,16px)] mx-4">NEELACHANDRA</span>
                    <span className="text-white opacity-80 mx-4">✦</span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

