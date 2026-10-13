"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import CrewSlider from './CrewSlider';
import DisplayScaler from '@/components/DisplayScaler';

const CINE_NODES = [
  {
    id: 1,
    domeX: 49,
    domeY: 18,
    text: "The brand is already\nestablished.",
    size: "w-11 h-5.5 sm:w-13 sm:h-6.5 md:w-16 md:h-8",
  },
  {
    id: 2,
    domeX: 54,
    domeY: 48,
    text: "It has to work beautifully\nacross every screen.",
    size: "w-8 h-4 sm:w-9 sm:h-4.5 md:w-11 md:h-5.5",
  },
  {
    id: 3,
    domeX: 69,
    domeY: 55,
    text: "Motion should tell the\nstory, not distract from it.",
    size: "w-7 h-3.5 sm:w-8 sm:h-4 md:w-9 md:h-4.5",
  },
  {
    id: 4,
    domeX: 72,
    domeY: 33,
    text: "The website should be\nsimple yet cinematic.",
    size: "w-9 h-4.5 sm:w-11 sm:h-5.5 md:w-13 md:h-6.5",
  },
  {
    id: 5,
    domeX: 85,
    domeY: 38,
    text: "Can we make it feel\ncinematic without\nslowing it down?",
    size: "w-7 h-3.5 sm:w-8 sm:h-4 md:w-9 md:h-4.5",
  },
  {
    id: 6,
    domeX: 87,
    domeY: 64,
    text: "Build something\ncinematic, tell the story\nwe're proud to grow on.",
    size: "w-5 h-2.5 sm:w-6 sm:h-3 md:w-7 md:h-3.5",
  },
];

const SHOWCASE_SERVICES = [
  'Digital Transformation', 
  'Website Redesign', 
  'Website Modernization', 
  'Brand Enhancement', 
  'Technology Partner', 
  'Digital Product Design', 
  'Interactive Web Experiences', 
  'Enterprise Web Development', 
  'Digital Innovation'
];

export default function CineArteryProjectPage() {
  const [activeNodeId, setActiveNodeId] = useState<number | null>(1);
  const [hoveredNodeId, setHoveredNodeId] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#111111] text-white">
      <section 
        className="relative font-sans flex items-center pt-20 md:pt-16 pb-12 md:pb-4 min-h-screen md:h-[calc(100vh/var(--desktop-scale,1))] overflow-hidden"
      >
        {/* Mobile Layout (< md) */}
        <div className="block md:hidden w-full max-w-md mx-auto px-5 pt-2 pb-8">
          {/* Top Header: Case Study & Logo */}
          <div className="mb-5">
            <h4 className="text-xs font-[300] tracking-[0.2em] uppercase text-white/80 mb-2">Case Study 1</h4>
            <div className="relative w-36 h-9">
              <img 
                src="/images/projects/cineartery/logo.png" 
                alt="CineArtery Logo" 
                className="object-contain object-left w-full h-full"
              />
            </div>
          </div>

          {/* Banner Image Card */}
          <div className="relative rounded-[1.75rem] overflow-hidden w-full aspect-[4/5] min-h-[430px] shadow-2xl bg-[#0a0a0a] flex flex-col justify-end mb-6">
            <img
              src="/images/projects/cineartery/banner.png"
              alt="CineArtery Banner"
              className="absolute inset-0 w-full h-full object-cover opacity-95"
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-start justify-end text-white p-6">
              <h1 className="text-[clamp(1.5rem,6.5vw,2rem)] font-[200] uppercase tracking-wide leading-tight drop-shadow-md text-white/90">
                The Heartbeat
              </h1>
              <h1 className="text-[clamp(1.5rem,6.5vw,2rem)] uppercase tracking-wide leading-tight drop-shadow-md">
                <span className="font-[200] text-white/90">Of </span>
                <span className="font-[800] text-white">Creative</span>
              </h1>
              <h1 className="text-[clamp(1.5rem,6.5vw,2rem)] font-[800] uppercase tracking-wide leading-tight drop-shadow-md text-white">
                Collaboration
              </h1>
            </div>
          </div>

          {/* Horizontal Divider Line */}
          <div className="w-full border-t border-[#333333] mb-6" />

          {/* Metadata Grid: Industry & Duration */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div>
              <h4 className="text-xs font-normal text-[#888888] mb-2">Industry</h4>
              <div className="border border-[#444444] rounded-[10px] px-3 py-2 text-xs text-[#a3a3a3] font-normal text-center truncate">
                Media & Entertainment
              </div>
            </div>
            <div>
              <h4 className="text-xs font-normal text-[#888888] mb-2">Duration</h4>
              <div className="border border-[#444444] rounded-[10px] px-3 py-2 text-xs text-[#a3a3a3] font-normal text-center">
                Ongoing
              </div>
            </div>
          </div>

          {/* Platforms */}
          <div className="mb-8">
            <h4 className="text-xs font-normal text-[#888888] mb-2">Platforms</h4>
            <div className="grid grid-cols-4 gap-2">
              {['Website', 'Shopify', 'Flutter', 'Backend'].map((platform, idx) => (
                <span
                  key={idx}
                  className="border border-[#444444] rounded-[10px] py-2 text-xs text-[#a3a3a3] font-normal text-center"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>

          {/* Bulleted Services List */}
          <div className="flex flex-col space-y-3.5 text-[13px] text-[#999999] font-[300]">
            {[
              'Motion Website Development',
              'Cinematic Web Design',
              'Next.js Development',
              'GSAP Animations',
              'Responsive Website Design',
              'Interactive Digital Experiences',
              'Film Industry Platform',
            ].map((service, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#666666] shrink-0" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout (>= md) */}
        <div className="hidden md:flex max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-col md:flex-row items-center w-full md:h-full md:max-h-[820px] gap-8 md:gap-0">
          
          {/* Left Column - Details */}
          <div className="w-full md:w-1/5 pr-0 md:pr-8 flex flex-col justify-center py-4 md:py-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:flex md:flex-col gap-6 md:space-y-12">
              <div className="col-span-2 sm:col-span-1">
                <h4 className="text-[clamp(0.75rem,2.5vw+0.25rem,0.75rem)] font-[300] tracking-[0.2em] uppercase mb-2 md:mb-4 text-[#FFFFFF]">Case Study 1</h4>
                <div className="relative w-32 h-8">
                   <img 
                      src="/images/projects/cineartery/logo.png" 
                      alt="CineArtery Logo" 
                      className="object-contain object-left w-full h-full"
                   />
                </div>
              </div>

              <div>
                <h4 className="text-[clamp(0.75rem,2.5vw+0.25rem,0.75rem)] font-[300] tracking-[0.2em] mb-2 md:mb-3 text-[#FFFFFF] capitalize">Industry</h4>
                <span className="inline-block bg-[#222222] px-3 py-1.5 text-[clamp(10px,0.6vw+4px,12px)] font-semibold rounded-sm text-white">Media & Entertainment</span>
              </div>

              <div>
                <h4 className="text-[clamp(0.75rem,2.5vw+0.25rem,0.75rem)] font-[300] tracking-[0.2em] mb-2 md:mb-3 text-[#FFFFFF] capitalize">Duration</h4>
                <span className="inline-block bg-[#222222] px-3 py-1.5 text-[clamp(10px,0.6vw+4px,12px)] font-semibold rounded-sm text-white">Ongoing</span>
              </div>

              <div>
                <h4 className="text-[clamp(0.75rem,2.5vw+0.25rem,0.75rem)] font-[300] tracking-[0.2em] mb-2 md:mb-3 text-[#FFFFFF] capitalize">Platforms</h4>
                <div className="flex flex-wrap md:flex-col gap-2 items-start">
                  <span className="inline-block bg-[#222222] px-3 py-1.5 text-[clamp(10px,0.6vw+4px,12px)] font-semibold rounded-sm text-white">Website</span>
                  <span className="inline-block bg-[#222222] px-3 py-1.5 text-[clamp(10px,0.6vw+4px,12px)] font-semibold rounded-sm text-white">Next.js</span>
                  <span className="inline-block bg-[#222222] px-3 py-1.5 text-[clamp(10px,0.6vw+4px,12px)] font-semibold rounded-sm text-white">GSAP</span>
                  <span className="inline-block bg-[#222222] px-3 py-1.5 text-[clamp(10px,0.6vw+4px,12px)] font-semibold rounded-sm text-white">Web Experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column - Banner Image */}
          <div className="w-full md:w-3/5 flex justify-center items-center py-4 relative px-0 sm:px-4">
            {/* The outer container with the blue border */}
            <div className="relative rounded-[1.5rem] md:rounded-[2rem] border-[1.5px] border-[#3a5a7b] w-full max-w-[850px] aspect-[16/11] md:aspect-[16/10] min-h-[340px] sm:min-h-[420px] md:max-h-[580px] p-[4px] sm:p-[6px] shadow-[0_0_40px_rgba(58,90,123,0.25)] flex flex-col overflow-hidden">
              {/* Inner container for image */}
              <div className="relative rounded-[1.25rem] md:rounded-[1.65rem] overflow-hidden w-full h-full shadow-md bg-[#0a0a0a] flex flex-col justify-end">
                <img
                  src="/images/projects/cineartery/banner.png"
                  alt="CineArtery Banner"
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
                
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-start justify-end text-white px-6 sm:px-8 md:px-12 pb-8 sm:pb-10 md:pb-14">
                  <h1 className="text-[clamp(1.5rem,3.2vw+0.5rem,2.75rem)] font-[100] uppercase tracking-wide leading-tight drop-shadow-lg text-white/80">
                    The Heartbeat
                  </h1>
                  <h1 className="text-[clamp(1.5rem,3.2vw+0.5rem,2.75rem)] font-[100] uppercase tracking-wide leading-tight drop-shadow-lg text-white/80">
                    Of <span className="font-[700] text-white">Creative</span>
                  </h1>
                  <h1 className="text-[clamp(1.5rem,3.2vw+0.5rem,2.75rem)] font-[700] uppercase tracking-wide leading-tight drop-shadow-lg text-white">
                    Collaboration
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Navigation/Services list */}
          <div className="w-full md:w-1/5 pl-0 md:pl-8 flex flex-col justify-center items-start text-[#FFFFFF] pt-4 md:pt-[6rem]">
            <div className="grid grid-cols-2 md:flex md:flex-col gap-3 md:space-y-4 text-[clamp(10px,0.8vw+2px,12px)] tracking-widest uppercase font-[200] w-full">
              <p className="flex items-center gap-2"><span className="w-1 h-1 bg-[#a3a3a3] rounded-full shrink-0"></span> Motion Website Development</p>
              <p className="flex items-center gap-2"><span className="w-1 h-1 bg-[#a3a3a3] rounded-full shrink-0"></span> Cinematic Web Design</p>
              <p className="flex items-center gap-2"><span className="w-1 h-1 bg-[#a3a3a3] rounded-full shrink-0"></span> Next.js Development</p>
              <p className="flex items-center gap-2"><span className="w-1 h-1 bg-[#a3a3a3] rounded-full shrink-0"></span> GSAP Animations</p>
              <p className="flex items-center gap-2"><span className="w-1 h-1 bg-[#a3a3a3] rounded-full shrink-0"></span> Responsive Website Design</p>
              <p className="flex items-center gap-2"><span className="w-1 h-1 bg-[#a3a3a3] rounded-full shrink-0"></span> Interactive Digital Experiences</p>
              <p className="flex items-center gap-2"><span className="w-1 h-1 bg-[#a3a3a3] rounded-full shrink-0"></span> Film Industry Platform</p>
            </div>
          </div>

        </div>
      </section>
      {/* Back Story / Rolling Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center py-20 bg-[#111111] overflow-hidden">
        {/* Background Image */}
        <div className="absolute -bottom-[3rem]  w-full h-[clamp(350px,38vw,550px)] z-0 flex items-center justify-center">
          <img 
            src="/images/projects/cineartery/rolling.png" 
            alt="Rolling Background" 
            className="w-full h-full object-cover object-center opacity-150 mix-blend-lighten"
          />
          {/* Gradient overlays to fade out edges if needed */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-transparent to-[#111111]"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center px-4 mt-8">
          
          <p className="text-[clamp(0.875rem,2.5vw+0.25rem,0.875rem)] text-[#F7F3EBCC] font-medium tracking-wide mb-6">
            Back story
          </p>
          
          <p className="text-[#F7F3EBCC] text-[clamp(0.875rem,2.5vw+0.25rem,0.875rem)] max-w-[420px] mx-auto leading-[1.8] mb-20 text-center font-light">
            The vision was already there, Smrkonova<br/>
            stepped in to translate it into an<br/>
            experience that people could see, feel<br/>
            and enjoy interacting with. Every<br/>
            animation, transition, motion and<br/>
            interaction was engineered to strengthen<br/>
            the story behind the brand.
          </p>

          <h2 className="text-[#979797] text-[clamp(1.125rem,2.5vw+0.25rem,36px)] font-[200] tracking-[0.1em] uppercase leading-[1.4] mb-8">
            THE VISION WAS ALIVE.<br/>
            THE EXPERIENCE IS
          </h2>

          <h1 className="text-[clamp(5.5rem,14vw,12.5rem)] mt-[clamp(40px,20px,30px)] font-black uppercase tracking-tight bg-gradient-to-t from-[#4B4B4B] to-[#1A1A1A] bg-clip-text text-transparent leading-[0.8] select-none w-full text-center drop-shadow-2xl opacity-95">
            ROLLING
          </h1>
        </div>
      </section>

      {/* Hand Section */}
      <section className="relative w-full py-16 md:py-0 min-h-0 md:min-h-[100vh] lg:min-h-[120vh] flex flex-col justify-center items-center bg-[#0a0a0a] overflow-hidden">
        {/* Hand Container */}
        <div className="relative md:absolute md:inset-0 w-full max-w-[390px] h-[225px] md:max-w-none md:w-full md:h-full z-0 flex items-center justify-center">
          <img 
            src="/images/projects/cineartery/hand.png" 
            alt="Hands Framing" 
            className="w-[390px] h-[225px] max-w-full object-contain object-center rotate-0 opacity-100 md:w-[110%] lg:w-full md:h-full md:opacity-90 md:scale-105"
          />
          {/* Subtle gradient to blend edges into background on desktop */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-transparent to-[#0a0a0a] pointer-events-none hidden md:block"></div>

          {/* Text Overlay centered between hands (Mobile: exactly 148x96 framed between index fingers and thumbs) */}
          <div className="absolute top-[16px] left-1/2 -translate-x-1/2 w-[148px] h-[96px] rotate-0 opacity-100 flex md:hidden flex-col justify-between items-center text-center z-10 pointer-events-none">
            <h3 className="text-[#7E7E7E] text-[12px] leading-[16px] tracking-[2.59px] font-[700] uppercase drop-shadow-md">
              CREATIVITY
            </h3>
            <p className="text-[#7E7E7E] text-[12px] leading-[16px] tracking-[2.59px] font-[300] uppercase">
              SET THE<br />DIRECTION.
            </p>
            <h3 className="text-[#7E7E7E] text-[12px] leading-[16px] tracking-[2.59px] font-[700] uppercase drop-shadow-md">
              TECHNOLOGY
            </h3>
            <p className="text-[#7E7E7E] text-[12px] leading-[16px] tracking-[2.59px] font-[300] uppercase">
              BROUGHT IT TO<br />LIFE.
            </p>
          </div>
        </div>

        {/* Text Overlay centered between hands (Desktop) */}
        <div className="relative z-10 w-full max-w-lg mx-auto hidden md:flex flex-col items-center text-center px-4 -mt-[20%]">
          <h3 className="text-[#7E7E7E] text-[clamp(0.8125rem,0.6vw+0.65rem,1.125rem)] font-[700] tracking-[0.25em] uppercase mb-1 md:mb-2 drop-shadow-md">
            CREATIVITY
          </h3>
          <p className="text-[#7E7E7E] text-[clamp(0.6875rem,0.5vw+0.55rem,1rem)] font-[300] tracking-[0.2em] uppercase mb-4 md:mb-6">
            SET THE DIRECTION.
          </p>
          <h3 className="text-[#7E7E7E] text-[clamp(0.8125rem,0.6vw+0.65rem,1.125rem)] font-[700] tracking-[0.25em] uppercase mb-1 md:mb-2 drop-shadow-md">
            TECHNOLOGY
          </h3>
          <p className="text-[#7E7E7E] text-[clamp(0.6875rem,0.5vw+0.55rem,1rem)] font-[300] tracking-[0.2em] uppercase">
            BROUGHT IT TO LIFE.
          </p>
        </div>
      </section>

      {/* Cine Section */}
      <section className="relative w-full py-24 flex flex-col justify-center items-center bg-[#111111] overflow-hidden">
        <div className="w-full max-w-6xl px-4 md:px-8">
          <div className="relative w-full aspect-[16/10] md:aspect-video rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              src="/images/projects/cineartery/cine.png" 
              alt="Cineartery Concept" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            
            {/* Overlays Container */}
            <div className="absolute inset-0 w-full h-full text-[clamp(9px,0.7vw+4px,14px)] text-[#F7F3EB] select-none pointer-events-none">
              {CINE_NODES.map((node) => {
                const isHovered = hoveredNodeId === node.id;
                const isActive = hoveredNodeId !== null ? isHovered : activeNodeId === node.id;

                return (
                  <div
                    key={node.id}
                    style={{ left: `${node.domeX}%`, bottom: `${node.domeY}%` }}
                    className="absolute z-20 pointer-events-auto group cursor-pointer"
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    onClick={() => setActiveNodeId(node.id)}
                  >
                    {/* White Dome Button */}
                    <button
                      type="button"
                      aria-label={node.text.replace(/\n/g, ' ')}
                      onFocus={() => setHoveredNodeId(node.id)}
                      onBlur={() => setHoveredNodeId(null)}
                      className={`relative ${node.size} rounded-t-full rounded-b-none border-t border-x cursor-pointer backdrop-blur-xs transition-all duration-300 ease-out focus:outline-none flex items-center justify-center ${
                        isActive
                          ? "bg-gradient-to-t from-white/70 to-white/95 border-white shadow-[0_0_24px_rgba(255,255,255,0.95)] scale-115 opacity-100"
                          : "bg-gradient-to-t from-white/20 to-white/40 border-white/40 opacity-60 shadow-[0_2px_8px_rgba(0,0,0,0.4)] group-hover:bg-gradient-to-t group-hover:from-white/60 group-hover:to-white/85 group-hover:border-white group-hover:scale-110 group-hover:opacity-100 group-hover:shadow-[0_0_18px_rgba(255,255,255,0.7)]"
                      }`}
                    >
                      {/* Ambient beacon pulse */}
                      <span
                        className={`absolute inset-0 rounded-t-full bg-white/50 pointer-events-none transition-all duration-300 ${
                          isActive
                            ? "animate-ping opacity-60"
                            : "opacity-0 group-hover:animate-ping group-hover:opacity-40"
                        }`}
                      />
                    </button>

                    {/* Text Beside Button */}
                    <div
                      className={`absolute right-full mr-2.5 sm:mr-3.5 bottom-0 w-max max-w-[170px] sm:max-w-[220px] md:max-w-[280px] text-right leading-snug whitespace-pre-line text-[clamp(9px,0.75vw+2px,13px)] sm:text-[clamp(11px,0.8vw+2px,14px)] transition-all duration-300 ease-out select-none ${
                        isActive
                          ? "opacity-100 blur-0 font-bold md:font-semibold text-white scale-100 md:scale-105 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]"
                          : "opacity-45 blur-[2.5px] font-normal text-white/75 scale-95 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] group-hover:opacity-100 group-hover:blur-0 group-hover:text-white group-hover:scale-100"
                      }`}
                    >
                      {node.text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Crew Slider Section */}
      <CrewSlider />

      {/* Connection / Iframe Section */}
      <section className="relative w-full py-24 md:py-32 flex flex-col justify-center items-center bg-[#111111] overflow-hidden">
        
        {/* Header Text */}
        <div className="text-center mb-16 flex flex-col items-center px-4">
          <h2 className="text-[clamp(1.85rem,4vw+0.5rem,3.75rem)] font-light uppercase tracking-wide leading-tight mb-8">
            <span className="text-[#F7F3EB] font-[100]">Before "Action"</span><br/>
            <span className="font-[800] text-[#F7F3EB]">There's connection</span>
          </h2>
          <p className="text-[#FFFFFF] mb-[1rem] mt-[1rem] text-[clamp(1.125rem,2.5vw+0.25rem,1.25rem)] max-w-sm leading-[1.3em] text-center font-[300]">
            A responsive website that<br/>
            combines storytelling with<br/>
            interaction design
          </p>
        </div>

        {/* Iframe Container */}
        <div className="w-full max-w-6xl px-4 md:px-8">
          <div className="relative w-full aspect-video rounded-[1.5rem] md:rounded-[2rem] border-[1.5px] border-[#3a5a7b] p-[2px] shadow-2xl overflow-hidden bg-[#0a0a0a]">
            <div className="relative w-full h-full rounded-[1.4rem] md:rounded-[1.9rem] overflow-hidden bg-black">
              <DisplayScaler 
                src="https://www.cineartery.com/" 
                title="Cineartery Live Website"
                baseWidth={1440}
                aspectRatio={16 / 9}
                showOpenButton={true}
              />
            </div>
          </div>
        </div>
        
      </section>

      {/* Phone Showcase Section */}
      <section 
        className="relative w-full py-16 md:py-20 lg:py-0 bg-[#0c0c0c] overflow-hidden flex items-center justify-center min-h-screen lg:h-[calc(150vh/var(--desktop-scale,1))]"
      >
        {/* Ambient radial glow centered behind the middle column */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none opacity-40 blur-[130px]"
          style={{
            background: 'radial-gradient(circle, rgba(235, 115, 30, 0.45) 0%, rgba(180, 50, 10, 0.18) 50%, transparent 75%)'
          }}
        />

        {/* Mobile View (< lg): Title -> Phone + Clapperboard -> Numbered List -> Bottom Copy */}
        <div className="flex lg:hidden flex-col w-full max-w-md mx-auto px-6 py-8 relative z-10 text-white">
          {/* 1. Top Title */}
          <div className="mb-6 text-left">
            <h2 className="text-[clamp(2.1rem,8vw,2.75rem)] uppercase leading-[1em] tracking-tight">
              <span className="font-[200] text-white/80 block">Building</span>
              <span className="font-[200] text-white/80 block">Foundation</span>
              <span className="font-[200] text-white/80 block mb-1">With</span>
              <span className="font-[900] text-white block">High-Quality</span>
              <span className="font-[900] text-white block">Output</span>
            </h2>
          </div>

          {/* 2. Center Phone + Clapperboard */}
          <div className="relative w-full flex justify-center items-center my-8">
            <div className="relative w-[clamp(240px,72vw,320px)] max-w-[90vw]">
              <img 
                src="/images/projects/cineartery/glow.svg" 
                alt="" 
                aria-hidden="true" 
                className="absolute -top-[25%] left-1/2 -translate-x-1/2 w-[220%] max-w-[850px] object-contain pointer-events-none z-0 opacity-85"
              />
              <img 
                src="/images/projects/cineartery/phone.png" 
                alt="Cineartery Mobile App / Web Experience" 
                className="relative z-10 w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)]"
              />
              <img 
                src="/images/projects/cineartery/clapperboard.png" 
                alt="Movie Clapperboard" 
                className="absolute top-[42%] left-[-2%] w-[198%] max-w-none h-auto object-contain z-20 pointer-events-none"
              />
            </div>
          </div>

          {/* 3. Numbered List (01 to 09) */}
          <div className="flex flex-col space-y-4 my-10 text-left">
            {SHOWCASE_SERVICES.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-white/40 font-mono text-[11px] w-5 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-white/80 uppercase tracking-[0.14em] font-[200] text-xs">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* 4. Bottom Copy */}
          <div className="flex flex-col text-left pt-6 border-t border-white/10">
            <p className="text-[#8e8e8e] text-xs leading-[1.75] mb-8 font-light">
              CineArtery now has a scalable architecture, intuitive user experience, and a premium digital presence designed to increase engagement, encourage loyalty, and adapt as the platform expands.
            </p>
            <div className="text-xs font-light tracking-[0.2em] text-white/90 uppercase leading-[1.6]">
              Creative<br />
              Technology<br />
              For Entertainment
            </div>
          </div>
        </div>

        {/* Desktop View (>= lg) */}
        <div className="hidden lg:flex max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 h-full max-h-none lg:max-h-[850px] items-center w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_minmax(280px,380px)_1.1fr] xl:grid-cols-[1.15fr_minmax(320px,400px)_1.15fr] gap-20 lg:gap-12 xl:gap-22 items-stretch w-full">
            
            {/* Left Column */}
            <div className="flex flex-col justify-between h-full order-1 lg:order-1 py-2 sm:py-4">
              {/* Top Title */}
              <div className="mb-8 lg:mb-0 ml-0 lg:ml-20 text-center lg:text-left">
                <h2 className="text-[clamp(1.75rem,2.5vw+0.25rem,4.625rem)] uppercase leading-[1em] tracking-tight">
                  <span className="font-[200] text-white/80 block">Building</span>
                  <span className="font-[200] text-white/80 block">Foundation</span>
                  <span className="font-[200] text-white/80 block mb-1">With</span>
                  <span className="font-[900] text-white block">High-Quality</span>
                  <span className="font-[900] text-white block">Output</span>
                </h2>
              </div>
              
              {/* Bottom Copy */}
              <div className="flex flex-col items-center lg:items-end text-center lg:text-right mt-auto pt-6 lg:pt-16">
                <p className="text-[#8e8e8e] text-[clamp(0.75rem,0.7vw+0.25rem,0.75rem)] max-w-[320px] leading-[1.65] mb-8 font-light">
                  Cineartery now has a scalable architecture, intuitive user experience, and a premium digital presence designed to increase engagement, encourage loyalty, and adapt as the platform expands.
                </p>
                <div className="text-[clamp(1.125rem,2.5vw+0.25rem,1.25rem)] font-bold tracking-[0.14em] text-white uppercase leading-[1.35]">
                  Creative<br />
                  Technology<br />
                  For Entertainment
                </div>
              </div>
            </div>

            {/* Center Column - Phone + Clapperboard + Glow */}
            <div className="relative w-full flex justify-center md:translate-y-30 items-center order-2 lg:order-2 my-6 lg:my-0">
              {/* Phone Wrapper with fluid clamp width that scales according to display scaler */}
              <div className="relative w-[clamp(240px,24vw,360px)] max-w-[90vw]">
                {/* SVG Background Glow */}
                <img 
                  src="/images/projects/cineartery/glow.svg" 
                  alt="" 
                  aria-hidden="true"
                  className="absolute -top-[25%] left-1/2 -translate-x-1/2 w-[220%] max-w-[850px] object-contain pointer-events-none z-0 opacity-85"
                />
                
                {/* Phone Mockup */}
                <img 
                  src="/images/projects/cineartery/phone.png" 
                  alt="Cineartery Mobile App / Web Experience" 
                  className="relative z-10 w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)]"
                />

                {/* Movie Clapperboard - positioned overlapping bottom right of phone */}
                <img 
                  src="/images/projects/cineartery/clapperboard.png" 
                  alt="Movie Clapperboard" 
                  className="absolute top-[42%] left-[-2%] w-[198%] max-w-none h-auto object-contain z-20 pointer-events-none"
                />
              </div>
            </div>

            {/* Right Column - Numbered List */}
            <div className="flex flex-col justify-between h-full order-3 lg:order-3 py-2 sm:py-4 lg:pl-4 xl:pl-8 space-y-4 sm:space-y-5 lg:space-y-0">
              {SHOWCASE_SERVICES.map((item, i) => (
                <div key={i} className="flex items-center gap-4 sm:gap-5 group">
                  <span className="flex flex-shrink-0 items-center justify-center w-[clamp(28px,1.8vw+14px,36px)] h-[clamp(28px,1.8vw+14px,36px)] rounded-full bg-white/[0.06] border border-white/10 text-white/50 text-[clamp(10px,0.4vw+5px,12px)] font-mono font-medium shadow-inner group-hover:border-white/30 group-hover:text-white/80 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[clamp(1.125rem,2.5vw+0.25rem,1.25rem)] text-[#FFFFFF] group-hover:text-white uppercase tracking-[0.14em] font-[100] transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Film Reel Auto Slide Section */}
      <section className="relative w-full py-24 bg-[#111111] overflow-hidden flex flex-col items-center justify-center">
        <style>{`
          @keyframes slide-left {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-slide-left {
            animation: slide-left 25s linear infinite;
          }
          .animate-slide-left:hover {
            animation-play-state: paused;
          }
        `}</style>
        
        <div className="w-full max-w-[1920px] mx-auto bg-[#181818] shadow-2xl py-4 flex flex-col">
          
          {/* Top Film Track */}
          <div className="w-full overflow-hidden flex gap-4 px-2 py-3 border-y border-[#2a2a2a] bg-[#151515]">
            {[...Array(60)].map((_, i) => (
              <div key={i} className="w-3 h-4 md:w-5 md:h-6 rounded-[2px] bg-[#333333] flex-shrink-0 opacity-50"></div>
            ))}
          </div>

          {/* Marquee Container */}
          <div className="w-full overflow-hidden py-8">
            <div className="flex w-max animate-slide-left gap-8 px-4">
              
              {/* We duplicate the set of 3 items multiple times to ensure seamless infinite scroll */}
              {[...Array(4)].map((_, setIndex) => (
                <React.Fragment key={setIndex}>
                  
                  {/* Slide 1 */}
                  <div className="w-[300px] md:w-[450px] lg:w-[550px] aspect-[16/10] md:aspect-video rounded-xl overflow-hidden shadow-xl flex-shrink-0 border border-white/5">
                    <img 
                      src="/images/projects/cineartery/slide-1.png" 
                      alt="Cineartery Slide 1" 
                      className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  {/* Text Block */}
                  <div className="w-[300px] md:w-[450px] lg:w-[550px] aspect-[16/10] md:aspect-video rounded-xl shadow-xl flex-shrink-0 border border-white/10 bg-[#111111] flex items-center justify-center p-8 md:p-12 text-center transition-all duration-500 hover:border-white/20">
                    <p className="text-[clamp(1rem,1.5vw+0.5rem,1.875rem)] font-light text-[#a3a3a3] leading-relaxed">
                      To <span className="font-semibold text-white">start a brand</span> is one thing. <span className="font-semibold text-white">Smrkonova</span> elevated the brand experience. A whole new conversation <span className="font-semibold text-white">we can handle</span>.
                    </p>
                  </div>

                  {/* Slide 2 */}
                  <div className="w-[300px] md:w-[450px] lg:w-[550px] aspect-[16/10] md:aspect-video rounded-xl overflow-hidden shadow-xl flex-shrink-0 border border-white/5">
                    <img 
                      src="/images/projects/cineartery/slide-2.png" 
                      alt="Cineartery Slide 2" 
                      className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  
                </React.Fragment>
              ))}
              
            </div>
          </div>

          {/* Bottom Film Track */}
          <div className="w-full overflow-hidden flex gap-4 px-2 py-3 border-y border-[#2a2a2a] bg-[#151515]">
            {[...Array(60)].map((_, i) => (
              <div key={i} className="w-3 h-4 md:w-5 md:h-6 rounded-[2px] bg-[#333333] flex-shrink-0 opacity-50"></div>
            ))}
          </div>

        </div>
      </section>

      {/* Cave / Final Section */}
      <section 
        className="relative w-full py-16 md:py-24 flex flex-col justify-center items-center bg-[#0a0a0a] overflow-hidden min-h-screen md:h-[calc(100vh/var(--desktop-scale,1))]"
      >
        
        {/* Background Cave Image with Fade */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1069px] h-[70%] lg:h-[80%] z-0">
          <img 
            src="/images/projects/cineartery/cave.png" 
            alt="Cave Perspective" 
            className="w-full h-full object-cover object-center opacity-80"
          />
          {/* Gradient fade to blend image into the dark background */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/40 to-[#0a0a0a]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center mt-12 sm:mt-24 md:mt-48">
          
          <h2 className="text-[clamp(2.25rem,4vw+0.5rem,4rem)] font-thin uppercase tracking-wide text-white leading-[1.2] mb-12">
            A Foundation<br/>
            For <span className="font-bold">What's Next</span>
          </h2>

          <div className="flex flex-col gap-8 text-[#888888] text-[clamp(11px,0.6vw+5px,14px)] font-light max-w-xl mx-auto leading-[1.8] mb-16">
            <p>
              The project was not limited to motion graphics and about<br className="hidden md:block"/>
              building the digital experience of Cineartery.
            </p>
            <p>
              Today, the platform has a scalable technical architecture, a<br className="hidden md:block"/>
              seamless user experience, and is designed to grow<br className="hidden md:block"/>
              alongside the business—supporting future features,<br className="hidden md:block"/>
              increasing engagement, and strengthening user trust with<br className="hidden md:block"/>
              every interaction.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full max-w-md justify-center">
            <button className="w-full sm:w-auto px-10 py-4 bg-[#333333] hover:bg-[#444444] text-white text-[clamp(10px,0.6vw+4px,12px)] font-semibold tracking-[0.2em] uppercase rounded-[4px] transition-colors duration-300">
              Create Yours
            </button>
            <button className="w-full sm:w-auto px-10 py-4 bg-transparent border border-[#444444] hover:border-white text-white text-[clamp(10px,0.6vw+4px,12px)] font-semibold tracking-[0.2em] uppercase rounded-[4px] transition-colors duration-300">
              Next Project
            </button>
          </div>

        </div>

      </section>
    </main>
  );
}
