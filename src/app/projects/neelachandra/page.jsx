import React from 'react';
import OpeningDoorsSection from './OpeningDoorsSection';
import HorizontalScrollSection from './HorizontalScrollSection';

export default function NeelachandraProjectPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden font-sans flex items-center min-h-screen">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 flex flex-col md:flex-row items-stretch w-full min-h-[80vh]">

          {/* Left Column - Details */}
          <div className="w-full md:w-1/5 pr-8 flex flex-col justify-between py-10">
            <div className="space-y-10">
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3 text-[#a3a3a3]">Case Study 1</h4>
                <h2 className="text-[13px] font-bold tracking-widest uppercase text-[#333333] mb-1">NEELACHANDRA</h2>
                <p className="text-[11px] text-[#777777] font-medium">construction company in 'luru</p>
              </div>

              <div>
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3 text-[#a3a3a3]">Industry</h4>
                <span className="inline-block bg-[#f4f4f4] px-2.5 py-1.5 text-[11px] font-bold rounded-sm text-[#333333] leading-tight">real estate<br />construction</span>
              </div>

              <div>
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3 text-[#a3a3a3]">Duration</h4>
                <span className="inline-block bg-[#f4f4f4] px-2.5 py-1.5 text-[11px] font-bold rounded-sm text-[#333333]">Ongoing</span>
              </div>

              <div>
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3 text-[#a3a3a3]">Platforms</h4>
                <div className="flex flex-col gap-2 items-start">
                  <span className="inline-block bg-[#f4f4f4] px-2.5 py-1.5 text-[11px] font-bold rounded-sm text-[#333333]">Branding</span>
                  <span className="inline-block bg-[#f4f4f4] px-2.5 py-1.5 text-[11px] font-bold rounded-sm text-[#333333]">Website</span>
                  <span className="inline-block bg-[#f4f4f4] px-2.5 py-1.5 text-[11px] font-bold rounded-sm text-[#333333]">GMB Optimisation</span>
                  <span className="inline-block bg-[#f4f4f4] px-2.5 py-1.5 text-[11px] font-bold rounded-sm text-[#333333]">Backend</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column - Banner Image */}
          <div className="w-full md:w-3/5 flex justify-center py-4 relative px-4">
            {/* The outer container with the orange border */}
            <div className="relative rounded-[1.5rem] border-[1.5px] border-[#f98845] w-full h-full min-h-[500px] p-[6px] shadow-sm">
              {/* Inner container for image */}
              <div className="relative rounded-[1.25rem] overflow-hidden w-full h-full shadow-md bg-[#111]">
                <img
                  src="/images/projects/neelachandra/banner.png"
                  alt="Neelachandra Banner"
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />

                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-end text-white px-4 md:px-8 text-center pb-12 md:pb-16 lg:pb-20">
                  <p className="text-[8px] md:text-[10px] lg:text-xs font-light tracking-[0.15em] uppercase mb-2 text-white/80 leading-relaxed">
                    The company trusted to<br />build lasting structures
                  </p>
                  <h1 className="text-2xl md:text-3xl lg:text-[40px] font-bold uppercase tracking-widest mb-2 drop-shadow-lg">
                    Chose us to build
                  </h1>
                  <p className="text-sm md:text-lg lg:text-[22px] font-light tracking-[0.15em] uppercase text-white/90 drop-shadow-md leading-tight">
                    Their digital<br />foundation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Navigation/Services list */}
          <div className="w-full md:w-1/5 pl-4 flex flex-col justify-end items-end text-[#5c564b] py-10">
            <div className="mt-auto space-y-3 font-semibold text-[11px] md:text-xs tracking-widest text-[#777777] uppercase">
              <p className="hover:text-[#333333] transition-colors cursor-pointer text-right">Strategy</p>
              <p className="hover:text-[#333333] transition-colors cursor-pointer text-right">UX/UI</p>
              <p className="hover:text-[#333333] transition-colors cursor-pointer text-right">Development</p>
              <p className="hover:text-[#333333] transition-colors cursor-pointer text-right">Brand</p>
            </div>
          </div>

        </div>
      </section>

      {/* Network / Foundation Section */}
      <section className="relative w-full h-[1500px] flex flex-col bg-white">

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
            <h2 className="text-[#F48120] text-lg md:text-2xl lg:text-[28px] font-medium tracking-[0.02em] uppercase leading-snug">
              The real estate company<br />had a great network but,
            </h2>
          </div>

          {/* Bottom Solid Orange Content Area */}
          <div className="w-full text-center text-white max-w-4xl mx-auto flex flex-col items-center pb-48 px-4">
            <h3 className="text-2xl md:text-4xl lg:text-[44px] font-light tracking-widest uppercase leading-tight mb-8">
              Nobody knew them beyond.<br />
              So we started<br />
              <span className="font-bold">Building the foundation.</span>
            </h3>
            <p className="text-[10px] md:text-xs font-medium opacity-90 max-w-[340px] leading-relaxed">
              Smrkonova immediately identified a gap in the real estate<br />
              company's presence, turning it into an immediate to-do.
            </p>
          </div>

        </div>
      </section>

      {/* Staggered Images Section */}
      <section className="w-full bg-white py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Left Image Column */}
            <div className="w-full">
              <img
                src="/images/projects/neelachandra/left.png"
                alt="Neelachandra property showcase"
                className="w-full h-auto object-cover rounded-[2rem] shadow-xl"
              />
            </div>

            {/* Right Image Column - Staggered downwards */}
            <div className="w-full md:mt-32 lg:mt-48">
              <img
                src="/images/projects/neelachandra/right.png"
                alt="Neelachandra high-rise showcase"
                className="w-full h-auto object-cover rounded-[2rem] shadow-xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Laying the Foundation Section */}
      <section className="relative w-full bg-white py-24 md:py-32 overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col">

          {/* Text Content */}
          <div className="mb-20 md:mb-32">
            <h2 className="text-5xl md:text-6xl lg:text-[72px] font-thin uppercase tracking-tight leading-[1.1] text-[#222222]">
              Laying
            </h2>
            <h2 className="text-5xl md:text-6xl lg:text-[72px] font-black uppercase tracking-tight leading-[1.1] text-[#F48120] mb-6">
              The Foundation
            </h2>
            <p className="text-[#666666] text-[10px] md:text-xs max-w-[350px] font-medium leading-[1.8]">
              We clarified who Neelachandra is, what it stands for, and<br className="hidden md:block" />
              how it should be perceived in a crowded real estate market.
            </p>
          </div>

          {/* Images Container */}
          <div className="relative w-full flex justify-center items-center h-[300px] md:h-[500px] lg:h-[700px]">
            {/* Outer Image (Blurred Logos) */}
            <img
              src="/images/projects/neelachandra/laying.png"
              alt="Brand Explorations"
              className="absolute inset-0 w-full h-full object-contain object-center z-0"
            />
            {/* Center Image (Sharp Logo) */}
            <img
              src="/images/projects/neelachandra/center.png"
              alt="Final Brand Logo"
              className="relative z-10 w-[50%] md:w-[40%] lg:w-[35%] max-w-[400px] object-contain drop-shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* Raising The Structure Section */}
      <section className="relative w-full bg-white py-24 md:py-32 overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center">

          {/* Text Content */}
          <div className="w-full md:w-5/12 mb-20 md:mb-0">
            <h2 className="text-5xl md:text-6xl lg:text-[72px] font-thin uppercase tracking-tight leading-[1.1] text-[#222222]">
              Raising
            </h2>
            <h2 className="text-5xl md:text-6xl lg:text-[72px] font-black uppercase tracking-tight leading-[1.1] text-[#F48120] mb-6">
              The<br />Structure
            </h2>
            <p className="text-[#666666] text-[10px] md:text-xs max-w-[350px] font-medium leading-[1.8]">
              We brought the brand to life through a cohesive identity and<br className="hidden md:block" />
              a suite of marketing assets built for every customer touchpoint.
            </p>
          </div>

          {/* Image Container */}
          <div className="relative w-full md:w-7/12 flex justify-center items-center h-[400px] md:h-[600px] lg:h-[800px]">
            <img
              src="/images/projects/neelachandra/raising.png"
              alt="Raising the Structure Assets"
              className="w-full h-full object-contain"
            />
          </div>

        </div>
      </section>

      <OpeningDoorsSection />

      {/* Phone Mockup Section */}
      <section className="relative w-full bg-white pt-10 pb-24 md:pb-32 flex justify-center z-20">
        <div className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[700px] mx-auto px-4 -mt-[20%] md:-mt-[15%]">
          <img
            src="/images/projects/neelachandra/phone.png"
            alt="Google My Business Mobile View"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </section>

      {/* Map Section */}
      <section className="relative w-full bg-[#5F873D] py-24 md:py-32 lg:py-40 overflow-hidden flex items-center">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center">

          {/* Text Content */}
          <div className="w-full md:w-5/12 mb-16 md:mb-0 relative z-10">
            <h2 className="text-5xl md:text-6xl lg:text-[72px] font-thin uppercase tracking-tight leading-[1.1] text-white">
              Putting It
            </h2>
            <h2 className="text-5xl md:text-6xl lg:text-[72px] font-black uppercase tracking-tight leading-[1.1] text-white mb-6">
              On The Map
            </h2>
            <p className="text-white/90 text-[10px] md:text-xs max-w-[350px] font-medium leading-[1.8]">
              We improved its digital discoverability, helping people<br className="hidden md:block" />
              searching for real estate properties in India find<br className="hidden md:block" />
              Neelachandra more easily.
            </p>
          </div>

          {/* Image Container */}
          <div className="w-full md:w-7/12 flex justify-center items-center relative z-0">
            <img
              src="/images/projects/neelachandra/map.png"
              alt="Neelachandra Map Discoverability"
              className="w-[110%] md:w-[125%] max-w-none h-auto object-contain translate-x-[5%] md:translate-x-[10%]"
            />
          </div>

        </div>
      </section>

      {/* Building Recognition Section */}
      <section className="relative w-full h-[600px] md:h-[800px] lg:h-[100vh] min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/projects/neelachandra/building.png"
            alt="Building Recognition Background"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark Gradient Overlay for text readability on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent w-full md:w-3/4"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="w-full md:w-5/12 lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold uppercase tracking-tight leading-[1.1] text-white mb-8 drop-shadow-lg">
              Building<br />
              Recognition
            </h2>
            <div className="space-y-6 text-white/90 text-[10px] md:text-xs font-light leading-[1.8] max-w-[400px]">
              <p>
                Every touchpoint now works together to make the brand<br className="hidden md:block" />
                more recognizable, memorable, and credible.
              </p>
              <p>
                Designed in Webflow, trained the internal team the flexibly<br className="hidden md:block" />
                manage content without depending on developers.
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
                <span className="text-[10px] md:text-xs text-gray-500">highlighted</span>

                {/* Center Content */}
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                  <div className="flex items-center justify-center">
                    <span className="text-2xl md:text-4xl lg:text-[50px] font-thin tracking-wider text-[#333] transition-all duration-300 group-hover:font-black group-hover:-translate-x-2">
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

                    <span className="text-2xl md:text-4xl lg:text-[50px] font-thin tracking-wider text-[#333] transition-all duration-300 group-hover:font-black group-hover:text-[#F48120] group-hover:translate-x-2">
                      &nbsp;{item.word2}
                    </span>
                  </div>
                </div>

                {/* Right Text */}
                <span className="text-[10px] md:text-xs text-gray-500">on website</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branding Section */}
      <section className="relative w-full bg-white py-24 md:py-32">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="relative w-full h-[500px] md:h-[700px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.2)]">
            {/* Background Image */}
            <img
              src="/images/projects/neelachandra/branding.png"
              alt="Branding background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Subtle dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end items-center text-center pb-16 md:pb-24 px-4 z-10">
              <h2 className="text-3xl md:text-5xl lg:text-[64px] font-thin uppercase tracking-wide text-white mb-1 drop-shadow-md">
                Branding Is Not
              </h2>
              <h2 className="text-3xl md:text-5xl lg:text-[64px] font-black uppercase tracking-wide text-white mb-6 drop-shadow-md">
                The End Of Story
              </h2>
              <p className="text-white/90 text-[10px] md:text-sm font-light tracking-wide drop-shadow-md">
                Every touchpoint is important in the real estate business.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Logo Section */}
      <section className="w-full bg-white py-32 md:py-48 lg:py-56 flex justify-center items-center">
        <img
          src="/images/projects/neelachandra/logo.svg"
          alt="Neelachandra Construction & Interiors"
          className="w-full max-w-[250px] md:max-w-[350px] lg:max-w-[400px] h-auto object-contain"
        />
      </section>
      {/* Horizontal Scroll Process Section */}
      <HorizontalScrollSection />

      {/* Conclusion Text Section */}
      <section className="w-full bg-white py-24 md:py-32 lg:py-40 flex justify-center items-center">
        <div className="w-full max-w-[600px] mx-auto px-6 text-center">
          <p className="text-[#F48120] text-xl md:text-2xl lg:text-3xl font-semibold leading-snug">
            Neelachandra is now<br />
            discoverable by people<br />
            searching for real estate<br />
            properties in India, while also<br />
            building stronger brand<br />
            positioning.
          </p>
        </div>
      </section>

      {/* Built To Grow Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex flex-col justify-end overflow-hidden">
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
        <div className="relative z-10 w-full flex flex-col items-center justify-end flex-1 pb-16 md:pb-24 lg:pb-32">
          <h1 className="text-4xl md:text-6xl lg:text-[90px] font-thin text-white tracking-[0.2em] uppercase mb-10 drop-shadow-xl text-center">
            Built To Grow.
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button className="px-10 py-3 md:py-4 bg-[#F48120] hover:bg-[#d6701c] transition-colors text-white text-[10px] md:text-xs tracking-widest uppercase font-medium rounded-sm">
              Create Yours
            </button>
            <button className="px-10 py-3 md:py-4 border border-white/50 hover:bg-white/10 transition-colors text-white text-[10px] md:text-xs tracking-widest uppercase font-medium rounded-sm backdrop-blur-sm">
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
                    <span className="text-white font-bold tracking-widest uppercase text-sm md:text-base mx-4">SMRKONOVA</span>
                    <span className="text-white opacity-80 mx-4">✦</span>
                    <span className="text-white font-bold tracking-widest uppercase text-sm md:text-base mx-4">NEELACHANDRA</span>
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

