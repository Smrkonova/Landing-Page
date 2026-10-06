import React from 'react';
import DisplayScaler from '@/components/DisplayScaler';

export default function NazrProjectPage() {
  return (
    <main className="min-h-screen bg-[#111111] text-white selection:bg-[#F80090]/20 flex flex-col font-sans">
      {/* Hero Section */}
      <section 
        className="relative w-full pt-24 md:pt-20 pb-12 md:pb-8 px-4 sm:px-6 md:px-12 flex justify-center items-center overflow-hidden min-h-screen lg:h-[calc(100vh/var(--desktop-scale,1))]"
      >
        <div className="w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-[1fr_3fr_1fr] gap-8 xl:gap-12 h-full max-h-none lg:max-h-[850px] items-center">

          {/* Left Column - Metadata */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex lg:flex-col gap-6 lg:gap-10 pt-2 lg:pt-4 xl:pt-12">
            <div className="col-span-2 sm:col-span-1">
              <p className="text-[clamp(10px,0.8vw+2px,12px)] text-gray-500 uppercase tracking-widest mb-2 lg:mb-4">CASE STUDY 1</p>
              <h2 className="text-[clamp(13px,0.8vw+3px,16px)] font-bold uppercase tracking-wide text-gray-200">NAZR</h2>
              <p className="text-[clamp(11px,0.6vw+4px,13px)] text-gray-400">Women safety Ecosystem</p>
            </div>

            <div className="flex flex-col gap-2 lg:gap-3">
              <p className="text-[clamp(10px,0.8vw+2px,12px)] text-gray-500 uppercase tracking-widest">Industry</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-[#222] text-[clamp(10px,0.6vw+4px,12px)] font-semibold rounded-md text-gray-300">Women safety</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 lg:gap-3">
              <p className="text-[clamp(10px,0.8vw+2px,12px)] text-gray-500 uppercase tracking-widest">Duration</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-[#222] text-[clamp(10px,0.6vw+4px,12px)] font-semibold rounded-md text-gray-300">Ongoing</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 lg:gap-3">
              <p className="text-[clamp(10px,0.8vw+2px,12px)] text-gray-500 uppercase tracking-widest">Platforms</p>
              <div className="flex flex-wrap lg:flex-col items-start gap-2">
                <span className="px-3 py-1.5 bg-[#222] text-[clamp(10px,0.6vw+4px,12px)] font-semibold rounded-md text-gray-300">Website</span>
                <span className="px-3 py-1.5 bg-[#222] text-[clamp(10px,0.6vw+4px,12px)] font-semibold rounded-md text-gray-300">Shopify</span>
                <span className="px-3 py-1.5 bg-[#222] text-[clamp(10px,0.6vw+4px,12px)] font-semibold rounded-md text-gray-300">Flutter</span>
                <span className="px-3 py-1.5 bg-[#222] text-[clamp(10px,0.6vw+4px,12px)] font-semibold rounded-md text-gray-300">Backend</span>
              </div>
            </div>
          </div>

          {/* Center Column - Banner */}
          <div className="w-full min-h-[380px] sm:min-h-[440px] lg:max-h-[580px] aspect-auto lg:aspect-[904/587] relative rounded-[1.5rem] lg:rounded-[2rem] border-[1.5px] border-[#3b82f6]/40 overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.15)] flex flex-col justify-end">
            <img
              src="/images/projects/nazr/banner.png"
              alt="Nazr Banner"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

            <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 p-6 sm:p-8 md:p-12 xl:p-16">
              {/* Left Text */}
              <h1 className="w-full md:w-[55%] text-[clamp(1.75rem,4vw+0.5rem,4rem)] font-black text-white uppercase leading-[0.95] tracking-tighter">
                IT IS A LONG<br />ESTABLISHED FACT<br />THAT A READER
              </h1>

              {/* Right Text & Button */}
              <div className="w-full md:w-[40%] flex flex-col items-start gap-4 sm:gap-6">
                <p className="text-[clamp(1rem,1.3vw+0.4rem,1.5rem)] font-semibold text-white leading-tight">
                  It is a long established<br />
                  fact that a reader will<br />
                  be distracted
                </p>
                <button className="flex items-center gap-2 bg-white hover:bg-gray-200 transition-colors text-black px-5 py-2.5 rounded-lg text-[clamp(11px,0.6vw+4px,13px)] font-semibold">
                  <img src="/images/projects/nazr/owl.svg" alt="Owl Icon" className="w-5 h-5 object-contain" />
                  Join Ecosystem
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Services */}
          <div className="flex flex-row flex-wrap lg:flex-col justify-start lg:justify-end pb-2 lg:pb-8 xl:pb-16 pl-0 lg:pl-12 gap-3 lg:gap-4">
            <ul className="flex flex-row flex-wrap lg:flex-col gap-3 lg:gap-4 text-[clamp(11px,0.6vw+4px,13px)] tracking-widest text-gray-500 font-medium uppercase">
              <li className="hover:text-white transition-colors cursor-default bg-[#1a1a1a] lg:bg-transparent px-3 py-1 lg:px-0 lg:py-0 rounded-sm">Strategy</li>
              <li className="hover:text-white transition-colors cursor-default bg-[#1a1a1a] lg:bg-transparent px-3 py-1 lg:px-0 lg:py-0 rounded-sm">UX/UI</li>
              <li className="hover:text-white transition-colors cursor-default bg-[#1a1a1a] lg:bg-transparent px-3 py-1 lg:px-0 lg:py-0 rounded-sm">Development</li>
              <li className="hover:text-white transition-colors cursor-default bg-[#1a1a1a] lg:bg-transparent px-3 py-1 lg:px-0 lg:py-0 rounded-sm">Brand</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Already Existed Section */}
      <section 
        className="relative w-full flex justify-center items-center overflow-hidden min-h-screen md:h-[calc(100vh/var(--desktop-scale,1))] py-16 md:py-0"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/projects/nazr/eyes.png"
            alt="Eyes background"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1440px] px-3 sm:px-6 md:px-12 lg:px-20 py-12 h-full flex items-center justify-between">

          {/* Left Column */}
          <div className="flex flex-col gap-8 sm:gap-16 md:gap-24 text-right w-[47%] sm:w-[42%] md:w-[35%] lg:w-[30%]">
            <div className="flex flex-col gap-1">
              <span className="text-[clamp(9px,0.6vw+4px,13px)] font-semibold text-gray-300">Pepper sprays</span>
              <span className="text-[clamp(0.85rem,2vw+0.3rem,1.875rem)] font-bold uppercase tracking-wide text-pink-200 drop-shadow-lg leading-tight">ALREADY EXISTED</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[clamp(9px,0.6vw+4px,13px)] font-semibold text-gray-300">Emergency helplines</span>
              <span className="text-[clamp(0.85rem,2vw+0.3rem,1.875rem)] font-bold uppercase tracking-wide text-pink-200 drop-shadow-lg leading-tight">ALREADY EXISTED</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[clamp(9px,0.6vw+4px,13px)] font-semibold text-gray-300">Safety apps</span>
              <span className="text-[clamp(0.85rem,2vw+0.3rem,1.875rem)] font-bold uppercase tracking-wide text-pink-200 drop-shadow-lg leading-tight">ALREADY EXISTED</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 sm:gap-16 md:gap-24 text-left w-[47%] sm:w-[42%] md:w-[35%] lg:w-[30%]">
            <div className="flex flex-col gap-1">
              <span className="text-[clamp(9px,0.6vw+4px,13px)] font-semibold text-gray-300">Self-defence classes</span>
              <span className="text-[clamp(0.85rem,2vw+0.3rem,1.875rem)] font-bold uppercase tracking-wide text-pink-100 lg:text-pink-200 drop-shadow-lg leading-tight">ALREADY EXISTED</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[clamp(9px,0.6vw+4px,13px)] font-semibold text-gray-300">CCTV</span>
              <span className="text-[clamp(0.85rem,2vw+0.3rem,1.875rem)] font-bold uppercase tracking-wide text-pink-100 lg:text-pink-200 drop-shadow-lg leading-tight">ALREADY EXISTED</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[clamp(9px,0.6vw+4px,13px)] font-semibold text-gray-300">Laws</span>
              <span className="text-[clamp(0.85rem,2vw+0.3rem,1.875rem)] font-bold uppercase tracking-wide text-pink-100 lg:text-pink-200 drop-shadow-lg leading-tight">ALREADY EXISTED</span>
            </div>
          </div>

        </div>
      </section>

      {/* Stay Quiet Marquee Section */}
      <section className="relative w-full h-[40vh] min-h-[300px] bg-[#111111] flex flex-col items-center justify-center overflow-hidden">
        <style>{`
          @keyframes marquee-left-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          @keyframes marquee-right-left {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-lr {
            animation: marquee-left-right 25s linear infinite;
          }
          .animate-marquee-rl {
            animation: marquee-right-left 25s linear infinite;
          }
        `}</style>

        {/* Container for angled strips */}
        <div className="absolute w-[110%] md:w-[120%] flex flex-col justify-center items-center">

          {/* First Strip: Left to Right */}
          <div className="w-full bg-[#1a1a1a] py-4 md:py-5 flex overflow-hidden z-10 shadow-2xl" style={{ transform: 'rotate(4deg)' }}>
            <div className="flex w-max animate-marquee-lr">
              {[1, 2].map((groupIndex) => (
                <div key={groupIndex} className="flex shrink-0 items-center gap-4 md:gap-8 px-2 md:px-4">
                  {[...Array(6)].map((_, i) => (
                    <React.Fragment key={i}>
                      <span className="text-white font-bold tracking-widest uppercase text-[clamp(1.25rem,2.5vw+0.5rem,2.25rem)] whitespace-nowrap shrink-0">STAY QUIET</span>
                      <img src="/images/projects/nazr/quit.png" alt="Quiet" className="h-12 md:h-16 object-contain shrink-0" />
                      <span className="text-gray-500 font-light tracking-widest uppercase text-[clamp(1.25rem,2.5vw+0.5rem,2.25rem)] whitespace-nowrap shrink-0">STAY QUIET</span>
                      <img src="/images/projects/nazr/quit.png" alt="Quiet" className="h-12 md:h-16 object-contain shrink-0" />
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Second Strip: Right to Left */}
          <div className="w-full bg-[#1a1a1a] py-4 md:py-5 flex overflow-hidden z-0 -mt-16 md:-mt-24 shadow-xl" style={{ transform: 'rotate(-4deg)' }}>
            <div className="flex w-max animate-marquee-rl">
              {[1, 2].map((groupIndex) => (
                <div key={groupIndex} className="flex shrink-0 items-center gap-4 md:gap-8 px-2 md:px-4">
                  {[...Array(6)].map((_, i) => (
                    <React.Fragment key={i}>
                      <span className="text-white font-bold tracking-widest uppercase text-[clamp(1.25rem,2.5vw+0.5rem,2.25rem)] whitespace-nowrap shrink-0">STAY QUIET</span>
                      <img src="/images/projects/nazr/quit.png" alt="Quiet" className="h-12 md:h-16 object-contain shrink-0" />
                      <span className="text-gray-500 font-light tracking-widest uppercase text-[clamp(1.25rem,2.5vw+0.5rem,2.25rem)] whitespace-nowrap shrink-0">STAY QUIET</span>
                      <img src="/images/projects/nazr/quit.png" alt="Quiet" className="h-12 md:h-16 object-contain shrink-0" />
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* The Problem Section */}
      <section className="relative w-full min-h-[80vh] bg-[#111111] flex justify-center items-center py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Paper Images */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[550px] xl:max-w-[700px] aspect-[4/3] mt-8 lg:mt-0">
              {/* Working Women (Top Left) */}
              <img
                src="/images/projects/nazr/paper/working-women.png"
                alt="Working women article"
                className="absolute top-[0%] left-[0%] w-[42%] object-contain drop-shadow-xl z-10 hover:scale-105 hover:z-40 transition-transform duration-300"
              />
              {/* Hyderabad Techie (Top Right) */}
              <img
                src="/images/projects/nazr/paper/hyderabad-techie.png"
                alt="Hyderabad techie article"
                className="absolute top-[5%] right-[5%] w-[55%] object-contain drop-shadow-xl z-20 hover:scale-105 hover:z-40 transition-transform duration-300"
              />
              {/* Two Minor (Bottom Left) */}
              <img
                src="/images/projects/nazr/paper/two-minor.png"
                alt="Two minor article"
                className="absolute bottom-[10%] left-[5%] w-[42%] object-contain drop-shadow-xl z-20 hover:scale-105 hover:z-40 transition-transform duration-300"
              />
              {/* Working Women Duplicate (Bottom Right) */}
              <img
                src="/images/projects/nazr/paper/working-women.png"
                alt="Working women article duplicate"
                className="absolute bottom-[0%] right-[10%] w-[35%] object-contain drop-shadow-xl z-10 hover:scale-105 transition-transform duration-300 opacity-95"
              />
              {/* Women Stabbed (Center / Front) */}
              <img
                src="/images/projects/nazr/paper/women-stabbed.png"
                alt="Women stabbed article"
                className="absolute top-[30%] left-[18%] w-[65%] object-contain drop-shadow-2xl z-30 hover:scale-105 hover:z-40 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="w-full flex flex-col items-start text-left max-w-[550px]">
            <h2 className="text-[clamp(1.75rem,2.5vw+0.5rem,2.5rem)] font-light text-gray-200 tracking-[0.15em] uppercase leading-snug mb-12">
              The problem was<br />
              never the product
            </h2>

            <div className="flex flex-col gap-6 text-gray-300 text-[clamp(0.875rem,0.6vw+0.65rem,1rem)] font-light leading-relaxed">
              <p>
                The problem was that every solution existed separately. One app shared locations. Another called contacts. Another sold products.
              </p>
              <p className="text-pink-600 font-normal">
                Nothing worked together.
              </p>
              <p>
                Safety had become fragmented. Instead of solving one feature, NAZR wanted to solve the entire experience.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Protection Connected System Section */}
      <section className="relative w-full bg-[#111111] flex flex-col items-center pt-16 pb-24 overflow-hidden">
        
        {/* Title */}
        <div className="text-center z-20 px-4 mb-8">
          <h2 className="text-[clamp(1.85rem,4vw+0.5rem,4rem)] font-thin text-gray-200 tracking-widest uppercase leading-[1.2]">
            Protection isn't a product<br />
            it's a <span className="font-black text-[#F80090]">connected system</span>
          </h2>
        </div>

        {/* Complex Layout Container - Fixed Aspect Ratio (1440x850) */}
        <div className="relative w-full max-w-[1440px] aspect-[1440/850] mt-8 text-white hidden md:block">
          
          {/* Background Girl */}
          <div className="absolute top-0 left-0 w-[50%] h-full z-0 opacity-60 mix-blend-lighten pointer-events-none">
            <img 
              src="/images/projects/nazr/protect/girl.png" 
              alt="Girl" 
              className="w-full h-full object-cover object-left-top"
            />
          </div>

          {/* NAZR Text Behind Everything */}
          <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none w-full text-center">
            <span className="text-[clamp(6rem,14vw,13.75rem)] font-black italic text-[#2563eb] opacity-80 drop-shadow-2xl tracking-tighter" style={{ fontFamily: 'cursive' }}>
              NAZR
            </span>
          </div>

          {/* --- Images --- */}
          {/* Mobile Phone */}
          <img 
            src="/images/projects/nazr/protect/sos-mobile.png" 
            alt="Mobile App" 
            className="absolute top-[18%] left-[14%] w-[22%] object-contain z-30 rotate-[8deg] drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
          />

          {/* Pink Box */}
          <img 
            src="/images/projects/nazr/protect/pink.png" 
            alt="Pink Box" 
            className="absolute top-[8%] left-[54%] w-[18%] object-contain z-20 -rotate-[12deg] drop-shadow-2xl"
          />

          {/* Blue Box */}
          <img 
            src="/images/projects/nazr/protect/blue.png" 
            alt="Blue Box" 
            className="absolute top-[20%] left-[68%] w-[18%] object-contain z-20 rotate-[14deg] drop-shadow-2xl"
          />

          {/* Spray */}
          <img 
            src="/images/projects/nazr/protect/spray.png" 
            alt="Pepper Spray" 
            className="absolute top-[45%] left-[48%] w-[10%] object-contain z-30 rotate-[12deg] drop-shadow-2xl"
          />

          {/* --- Text Labels & Connecting Lines --- */}
          
          {/* Software */}
          <div className="absolute top-[22%] left-[4%] z-40">
            <div className="flex items-start gap-2">
              <div className="flex flex-col text-left">
                <h4 className="text-[#F80090] font-bold text-[clamp(12px,1.1vw,18px)] tracking-widest uppercase mb-1">Software</h4>
                <p className="text-gray-300 text-[clamp(10px,0.75vw,13px)] leading-relaxed">
                  Intelligent app that<br/>anticipates, alerts<br/>and protects.
                </p>
              </div>
              <div className="relative mt-1">
                <div className="w-1.5 h-1.5 bg-[#F80090] rounded-full shadow-[0_0_10px_#F80090]" />
                {/* Connecting Line (Right then Down) */}
                <div className="absolute top-[3px] left-[3px] w-[5vw] h-[4vw] border-t border-r border-[#F80090] rounded-tr-xl opacity-60 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Features list next to mobile */}
          <div className="absolute top-[55%] left-[6%] z-40 flex flex-col gap-[2vw] text-right text-[clamp(10px,0.8vw,13px)] text-gray-300">
            {['Real time\nLocation', 'Smart\nAlerts', 'Voice\nDetection', 'Trusted\nCircle', 'One-tap\nEmergency'].map((text, i) => (
              <div key={i} className="flex items-center justify-end gap-2">
                <span className="whitespace-pre-line leading-tight">{text}</span>
                <div className="relative flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#F80090] rounded-full shadow-[0_0_10px_#F80090] z-10" />
                  {/* Horizontal Connecting Line */}
                  <div className="absolute top-[3px] left-[3px] w-[2.5vw] border-t border-[#F80090] opacity-60 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          {/* Hardware */}
          <div className="absolute top-[8%] left-[40%] z-40">
            <div className="flex items-start gap-2">
              <div className="flex flex-col text-left">
                <h4 className="text-[#F80090] font-bold text-[clamp(12px,1.1vw,18px)] tracking-widest uppercase mb-1">Hardware</h4>
                <p className="text-gray-300 text-[clamp(10px,0.75vw,13px)] leading-relaxed">
                  Intelligent app that<br/>anticipates, alerts<br/>and protects.
                </p>
              </div>
              <div className="relative mt-1">
                <div className="w-1.5 h-1.5 bg-[#F80090] rounded-full shadow-[0_0_10px_#F80090]" />
                {/* Connecting Line (Right then Down) */}
                <div className="absolute top-[3px] left-[3px] w-[8vw] h-[5vw] border-t border-r border-[#F80090] rounded-tr-xl opacity-60 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Trusted Circle (Pointing to bottom of phone) */}
          <div className="absolute top-[85%] left-[28%] z-40">
            <div className="flex items-start gap-2">
              <div className="relative mt-1">
                <div className="w-1.5 h-1.5 bg-[#F80090] rounded-full shadow-[0_0_10px_#F80090]" />
                {/* Connecting Line (Left then Up) */}
                <div className="absolute bottom-[3px] right-[3px] w-[3vw] h-[5vw] border-b border-l border-[#F80090] rounded-bl-xl opacity-60 pointer-events-none" />
              </div>
              <div className="flex flex-col text-left">
                <h4 className="text-[#F80090] font-bold text-[clamp(12px,1.1vw,18px)] tracking-widest uppercase mb-1">Trusted Circle</h4>
                <p className="text-gray-300 text-[clamp(10px,0.75vw,13px)] leading-relaxed">
                  Intelligent app that<br/>anticipates, alerts<br/>and protects.
                </p>
              </div>
            </div>
          </div>

          {/* Right Text Block */}
          <div className="absolute top-[50%] right-[8%] w-[25%] z-40 flex flex-col gap-6 text-left">
            <h3 className="text-[clamp(1rem,1.5vw,1.75rem)] text-gray-300 leading-snug tracking-wide">
              Hardware<br/>
              Software<br/>
              Network<br/>
              All working as<br/>
              <span className="text-[#F80090] font-bold">ONE</span>
            </h3>
            <p className="text-[clamp(11px,0.85vw,14px)] text-gray-400 leading-loose">
              The founders approached Smrkonova with one ambitious idea. The goal wasn't another eCommerce site. It wasn't another mobile app. The goal was to engineer India's next women's safety ecosystem — where hardware, software, emergency communication, technology and trust all work together.
            </p>
          </div>

        </div>

        {/* Mobile Fallback - Stacks neatly on small screens */}
        <div className="w-full flex flex-col items-center gap-12 mt-8 px-6 md:hidden">
          <img src="/images/projects/nazr/protect/sos-mobile.png" className="w-[60%] rotate-6 drop-shadow-2xl" />
          <div className="text-center">
            <h4 className="text-[#F80090] font-bold text-[clamp(14px,1vw+10px,18px)] mb-2">Software</h4>
            <p className="text-gray-300 text-[clamp(12px,0.6vw+6px,14px)]">Intelligent app that anticipates,<br/>alerts and protects.</p>
          </div>
          
          <div className="flex gap-4">
            <img src="/images/projects/nazr/protect/pink.png" className="w-[45%] -rotate-6 drop-shadow-xl" />
            <img src="/images/projects/nazr/protect/blue.png" className="w-[45%] rotate-6 drop-shadow-xl" />
          </div>
          <div className="text-center">
            <h4 className="text-[#F80090] font-bold text-[clamp(14px,1vw+10px,18px)] mb-2">Hardware</h4>
            <p className="text-gray-300 text-[clamp(12px,0.6vw+6px,14px)]">Intelligent app that anticipates,<br/>alerts and protects.</p>
          </div>

          <img src="/images/projects/nazr/protect/spray.png" className="w-[20%] rotate-12 drop-shadow-2xl" />
          <div className="text-center">
            <h4 className="text-[#F80090] font-bold text-[clamp(14px,1vw+10px,18px)] mb-2">Trusted Circle</h4>
            <p className="text-gray-300 text-[clamp(12px,0.6vw+6px,14px)]">Intelligent app that anticipates,<br/>alerts and protects.</p>
          </div>

          <div className="text-center mt-10">
            <h3 className="text-[clamp(1.25rem,2vw+0.5rem,1.5rem)] text-gray-300 leading-snug tracking-wide mb-6">
              Hardware<br/>Software<br/>Network<br/>All working as <span className="text-[#F80090] font-bold">ONE</span>
            </h3>
            <p className="text-[clamp(11px,0.6vw+5px,13px)] text-gray-400 leading-loose">
              The founders approached Smrkonova with one ambitious idea...
            </p>
          </div>
        </div>

      </section>

      {/* Product Strategy Section */}
      <section className="relative w-full bg-[#111111] px-4 md:px-8 py-10 md:py-20">
        <div className="w-full max-w-[1440px] mx-auto bg-[#e2e3e5] rounded-[40px] md:rounded-[60px] p-8 md:p-16 lg:p-24 overflow-hidden">
          
          {/* Top Half: Sticky Notes Flowchart */}
          <div className="relative w-full aspect-[1440/800] hidden md:block border-b border-gray-300 pb-20 mb-20">
            
            {/* Title */}
            <div className="absolute top-0 left-0 z-30 pointer-events-none">
              <h2 className="text-[clamp(2rem,4vw+0.5rem,4rem)] font-light text-gray-800 leading-[1.1] tracking-tight">
                BUILD A BRAND<br/>
                WOMEN RELY ON<br/>
                <span className="font-black text-[#F80090]">EVERY DAY</span><br/>
                NOT ONLY EMERGENCIES
              </h2>
            </div>

            {/* SVG Connecting Arrows */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1440 800" preserveAspectRatio="none">
              <defs>
                <marker id="pink-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                  <path d="M 0 0 L 8 4 L 0 8 z" fill="#F80090" />
                </marker>
              </defs>
              {/* Shopify to Mobile App */}
              <path d="M 340 460 Q 370 460 400 460" stroke="#F80090" strokeWidth="2.5" fill="none" markerEnd="url(#pink-arrow)" />
              
              {/* Guardian to Tracking */}
              <path d="M 570 660 Q 590 680 610 680" stroke="#F80090" strokeWidth="2.5" fill="none" markerEnd="url(#pink-arrow)" />
              
              {/* Mobile App to SOS */}
              <path d="M 700 470 Q 740 470 780 470" stroke="#F80090" strokeWidth="2.5" fill="none" markerEnd="url(#pink-arrow)" />
              
              {/* Pepper Spray to Website */}
              <path d="M 940 270 Q 960 300 1010 330" stroke="#F80090" strokeWidth="2.5" fill="none" markerEnd="url(#pink-arrow)" />
              
              {/* Tracking to Future Products */}
              <path d="M 850 670 Q 900 680 950 650" stroke="#F80090" strokeWidth="2.5" fill="none" markerEnd="url(#pink-arrow)" />
            </svg>

            {/* Sticky Notes */}
            <img src="/images/projects/nazr/build/shopify.png" className="absolute top-[42%] left-[6%] w-[18%] drop-shadow-xl z-20 hover:scale-105 transition-transform" alt="Shopify" />
            <img src="/images/projects/nazr/build/mobile-app.png" className="absolute top-[38%] left-[28%] w-[21%] drop-shadow-xl z-20 hover:scale-105 transition-transform" alt="Mobile App" />
            
            <img src="/images/projects/nazr/build/guardian.png" className="absolute top-[64%] left-[22%] w-[18%] drop-shadow-2xl z-30 hover:scale-105 transition-transform" alt="Guardian Network" />
            <img src="/images/projects/nazr/build/tracking.png" className="absolute top-[70%] left-[42%] w-[18%] drop-shadow-2xl z-30 hover:scale-105 transition-transform" alt="Tracking" />
            
            <img src="/images/projects/nazr/build/sos.png" className="absolute top-[44%] left-[55%] w-[18%] drop-shadow-xl z-20 hover:scale-105 transition-transform" alt="SOS" />
            <img src="/images/projects/nazr/build/pepper-spray.png" className="absolute top-[5%] left-[56%] w-[18%] drop-shadow-xl z-20 hover:scale-105 transition-transform" alt="Pepper Spray" />
            
            <img src="/images/projects/nazr/build/website.png" className="absolute top-[22%] left-[74%] w-[18%] drop-shadow-xl z-20 hover:scale-105 transition-transform" alt="Website" />
            <img src="/images/projects/nazr/build/future.png" className="absolute top-[62%] left-[70%] w-[20%] drop-shadow-xl z-20 hover:scale-105 transition-transform" alt="Future Products" />
          </div>

          {/* Mobile Fallback for top half */}
          <div className="md:hidden flex flex-col gap-6 mb-16 border-b border-gray-300 pb-16">
            <h2 className="text-[clamp(1.75rem,4vw+0.5rem,2.5rem)] font-light text-gray-800 leading-[1.1] tracking-tight mb-8">
              BUILD A BRAND<br/>
              WOMEN RELY ON<br/>
              <span className="font-black text-[#F80090]">EVERY DAY</span><br/>
              NOT ONLY EMERGENCIES
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/projects/nazr/build/shopify.png" className="w-full drop-shadow-lg" />
              <img src="/images/projects/nazr/build/mobile-app.png" className="w-full drop-shadow-lg" />
              <img src="/images/projects/nazr/build/sos.png" className="w-full drop-shadow-lg" />
              <img src="/images/projects/nazr/build/tracking.png" className="w-full drop-shadow-lg" />
              <img src="/images/projects/nazr/build/pepper-spray.png" className="w-full drop-shadow-lg" />
              <img src="/images/projects/nazr/build/website.png" className="w-full drop-shadow-lg" />
            </div>
          </div>

          {/* Bottom Half: Turning Insights Into Product Strategy */}
          <div className="w-full mt-10 md:mt-0">
            <h2 className="text-[clamp(1.85rem,3.5vw+0.5rem,3.5rem)] font-thin text-gray-800 mb-12 md:mb-16 leading-[1.1] uppercase tracking-wide">
              Turning Insights Into<br/>
              <span className="font-black text-[#F80090]">Product Strategy</span>
            </h2>
            
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              
              {/* Left Column */}
              <div className="w-full lg:w-[45%] flex flex-col gap-10">
                <p className="text-gray-700 text-[clamp(0.875rem,0.5vw+0.65rem,1rem)] leading-relaxed">
                  Before writing a single line of code or designing a single screen, we focused on understanding how women actually experience unsafe situations — before panic, during panic, and after.
                </p>
                <p className="text-gray-700 text-[clamp(0.875rem,0.5vw+0.65rem,1rem)] leading-relaxed">
                  Over <span className="font-bold text-[#F80090]">10-15 iterations</span> were completed across documentation, UX, product architecture, and user journeys before moving into development.
                </p>
                
                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mt-6">
                  {['DISCOVERY WORKSHOPS', 'RESEARCH', 'USER INTERVIEWS', 'COMPETITOR ANALYSIS'].map((title, i) => (
                    <div key={i} className="border-l-[3px] border-[#F80090] pl-4">
                      <h4 className="font-bold text-gray-800 text-[clamp(10px,0.6vw+3px,12px)] tracking-widest mb-3">{title}</h4>
                      <p className="text-[clamp(10px,0.5vw+4px,11px)] text-gray-600 leading-relaxed pr-4">
                        Multiple strategy sessions with founders to understand vision, technical feasibility, and roadmap.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Column (Numbered List) */}
              <div className="w-full lg:w-[45%] flex flex-col gap-6">
                {[
                  "PRODUCT REQUIREMENT DOCUMENT",
                  "INFORMATION ARCHITECTURE",
                  "WEBSITE SITEMAP",
                  "USER FLOWS",
                  "WIREFRAMES",
                  "FEATURE PRIORITISATION",
                  "BRAND STRATEGY",
                  "TECHNICAL PLANNING",
                  "DEVELOPMENT ROADMAP"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-6">
                    <div className="w-9 h-9 shrink-0 rounded-full bg-[#d5d5d5] flex items-center justify-center text-gray-500 font-medium text-xs">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <span className="text-gray-800 font-bold uppercase text-[clamp(11px,0.5vw+4px,13px)] tracking-widest">{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Features Real Situations Section (Sticky Cards) */}
      <section className="relative w-full bg-[#111111] pt-32 pb-40 px-4 md:px-8 overflow-visible">
        
        {/* Title */}
        <div className="text-center mb-24 relative z-10">
          <h2 className="text-[clamp(1.85rem,4vw+0.5rem,4rem)] font-thin text-gray-300 tracking-widest uppercase leading-[1.2]">
            FEATURES DESIGNED AROUND<br/>
            <span className="font-black text-[#F80090]">REAL SITUATIONS</span>
          </h2>
        </div>

        {/* Sticky Cards Container */}
        <div className="relative w-full max-w-[1200px] mx-auto flex flex-col">
          {[
            {
              num: 1,
              title: "A WOMAN IS WALKING HOME\nAFTER WORK.",
              desc: "Shield Mode continuously checks whether she is safe. If she doesn't respond, guardians are automatically alerted.",
              align: "left"
            },
            {
              num: 2,
              title: "TRAVELLING\nALONE IN A CAB",
              desc: "Shield Mode continuously checks whether she is safe. If she doesn't respond, guardians are automatically alerted.",
              align: "right"
            },
            {
              num: 3,
              title: "UNABLE TO\nUNLOCK THE PHONE",
              desc: "Shield Mode continuously checks whether she is safe. If she doesn't respond, guardians are automatically alerted.",
              align: "left"
            },
            {
              num: 4,
              title: "DON'T KNOW\nWHAT'S HAPPENING",
              desc: "Shield Mode continuously checks whether she is safe. If she doesn't respond, guardians are automatically alerted.",
              align: "right"
            }
          ].map((card, i) => (
            <div 
              key={card.num} 
              className="sticky w-full transition-all duration-500 rounded-[30px] md:rounded-[50px] shadow-[0_-10px_40px_rgba(0,0,0,0.6)] border border-gray-800 overflow-hidden aspect-[4/5] md:aspect-[16/9] lg:aspect-[2/1]"
              style={{ 
                top: `${12 + i * 4}vh`, 
                marginBottom: '50vh', 
                zIndex: 20 + i 
              }}
            >
              {/* Background Image */}
              <img 
                src={`/images/projects/nazr/features/${card.num}.png`} 
                className="absolute inset-0 w-full h-full object-cover z-0" 
                alt={`Feature Scenario ${card.num}`} 
              />
              
              {/* Dark Gradient Overlay for Text Readability */}
              <div className={`absolute inset-0 z-10 ${card.align === 'left' ? 'bg-gradient-to-r from-black/80 via-black/40 to-transparent' : 'bg-gradient-to-l from-black/80 via-black/40 to-transparent'}`} />

              {/* Text Content Container */}
              <div className="absolute inset-0 z-20 w-full h-full p-8 md:p-16 lg:p-24 flex flex-col justify-center">
                <div className={`w-full md:w-[50%] flex flex-col gap-6 ${card.align === 'right' ? 'ml-auto' : ''}`}>
                  
                  <h3 className="text-[clamp(1.75rem,2.8vw+0.5rem,2.75rem)] font-bold text-white uppercase leading-[1.1] whitespace-pre-line">
                    {card.title}
                  </h3>
                  
                  <p className="text-[clamp(12px,0.6vw+6px,15px)] text-gray-300 leading-relaxed max-w-[420px]">
                    {card.desc}
                  </p>
                  
                  {/* Bottom Stats / Process */}
                  <div className="flex flex-wrap gap-8 md:gap-12 mt-6 md:mt-10">
                    <div className="flex flex-col gap-1">
                      <span className="text-[clamp(9px,0.6vw+3px,12px)] text-gray-400 font-medium tracking-widest uppercase">Checking</span>
                      <span className="text-[clamp(9px,0.6vw+3px,12px)] text-white font-medium tracking-widest uppercase">Safety</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[clamp(9px,0.6vw+3px,12px)] text-gray-400 font-medium tracking-widest uppercase">No Response</span>
                      <span className="text-[clamp(9px,0.6vw+3px,12px)] text-white font-medium tracking-widest uppercase">Detected</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[clamp(9px,0.6vw+3px,12px)] text-gray-400 font-medium tracking-widest uppercase">Guardians</span>
                      <span className="text-[clamp(9px,0.6vw+3px,12px)] text-white font-medium tracking-widest uppercase">Alerted</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>
        
      </section>

      {/* Connected Ecosystem Section */}
      <section className="relative w-full bg-[#111111] px-4 md:px-8 py-10 pb-32">
        <div className="w-full max-w-[1440px] mx-auto bg-[#e2e3e5] rounded-[40px] md:rounded-[60px] p-8 md:p-16 lg:p-24 overflow-hidden flex flex-col items-center">
          
          {/* Header */}
          <div className="text-center mb-16 relative z-30">
            <h2 className="text-[clamp(2.5rem,6vw+0.5rem,5.625rem)] font-black text-gray-800 tracking-tighter uppercase leading-[0.9]">
              CONNECTED<br/>
              <span className="text-[#F80090]">ECOSYSTEM</span>
            </h2>
          </div>

          {/* Center Graphic Layout - Desktop */}
          <div className="relative w-full max-w-[1100px] h-[700px] hidden lg:flex justify-center items-center mb-20 mt-10">
            
            {/* Images */}
            {/* Middle Phone */}
            <img 
              src="/images/projects/nazr/ecosystem/sos.png" 
              className="absolute w-[30%] z-20 drop-shadow-2xl left-1/2 -translate-x-1/2 top-0" 
              alt="Mobile SOS App" 
            />
            
            {/* Pink Spray */}
            <img 
              src="/images/projects/nazr/ecosystem/pink.png" 
              className="absolute w-[14%] left-[28%] top-[52%] z-30 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] rotate-[-12deg] hover:scale-105 transition-transform" 
              alt="Pink Pepper Spray" 
            />
            
            {/* White Spray */}
            <img 
              src="/images/projects/nazr/ecosystem/white.png" 
              className="absolute w-[13%] left-[56%] top-[68%] z-30 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] rotate-[15deg] hover:scale-105 transition-transform" 
              alt="White Pepper Spray" 
            />

            {/* Annotations (Dashed Ellipses) */}
            
            {/* 1. Volume Button SOS */}
            <div className="absolute left-[5%] top-[30%] w-[260px] h-[140px] border-[1.5px] border-dashed border-gray-400 rounded-[50%] flex flex-col justify-center items-center text-center px-10 z-10">
              <div className="absolute -top-3 left-[20%] bg-[#F80090] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
              <h4 className="font-bold text-gray-800 text-[clamp(11px,0.5vw+4px,13px)] mb-2">Volume Button SOS</h4>
              <p className="text-[clamp(9px,0.5vw+3px,11px)] text-gray-600 leading-tight">Press your volume button three times to instantly trigger SOS.</p>
            </div>

            {/* 2. In-App SOS Button */}
            <div className="absolute right-[5%] top-[10%] w-[260px] h-[140px] border-[1.5px] border-dashed border-gray-400 rounded-[50%] flex flex-col justify-center items-center text-center px-10 z-10">
              <div className="absolute -top-3 left-[20%] bg-[#F80090] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
              <h4 className="font-bold text-gray-800 text-[clamp(11px,0.5vw+4px,13px)] mb-2">In-App SOS Button</h4>
              <p className="text-[clamp(9px,0.5vw+3px,11px)] text-gray-600 leading-tight">Tap the SOS button in the NAZR app to alert your support network.</p>
            </div>

            {/* 3. Home Screen SOS Widget */}
            <div className="absolute right-[3%] top-[48%] w-[260px] h-[140px] border-[1.5px] border-dashed border-gray-400 rounded-[50%] flex flex-col justify-center items-center text-center px-10 z-10">
              <div className="absolute -top-3 left-[20%] bg-[#F80090] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
              <h4 className="font-bold text-gray-800 text-[clamp(11px,0.5vw+4px,13px)] mb-2">Home Screen SOS Widget</h4>
              <p className="text-[clamp(9px,0.5vw+3px,11px)] text-gray-600 leading-tight">Trigger SOS directly from your home screen without opening the app.</p>
            </div>

            {/* Left Checklists */}
            <div className="absolute left-[2%] bottom-[5%] flex flex-col gap-4 z-30">
              {["LARGE TOUCH TARGETS", "MINIMAL DISTRACTIONS", "RELIABLE NAVIGATION"].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#F80090] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-black text-gray-900 text-[clamp(10px,0.6vw+4px,12px)] tracking-widest">{text}</span>
                </div>
              ))}
            </div>

            {/* Right Checklists */}
            <div className="absolute right-[8%] bottom-[5%] flex flex-col gap-4 z-30">
              {["HIGH CONTRAST", "FAST INTERACTION", "SIMPLE LANGUAGE"].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#F80090] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-black text-gray-900 text-[clamp(10px,0.6vw+4px,12px)] tracking-widest">{text}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Center Graphic Layout - Mobile */}
          <div className="flex lg:hidden flex-col items-center gap-8 w-full mb-16 mt-6 px-2">
            <div className="relative w-full max-w-[320px] h-[340px] flex justify-center items-center mx-auto">
              <img 
                src="/images/projects/nazr/ecosystem/sos.png" 
                className="w-[60%] z-20 drop-shadow-2xl" 
                alt="Mobile SOS App" 
              />
              <img 
                src="/images/projects/nazr/ecosystem/pink.png" 
                className="w-[28%] absolute left-[6%] bottom-[12%] z-30 drop-shadow-xl -rotate-12" 
                alt="Pink Pepper Spray" 
              />
              <img 
                src="/images/projects/nazr/ecosystem/white.png" 
                className="w-[26%] absolute right-[6%] bottom-[8%] z-30 drop-shadow-xl rotate-12" 
                alt="White Pepper Spray" 
              />
            </div>

            <div className="flex flex-col gap-4 w-full max-w-md">
              <div className="flex items-start gap-3 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-gray-300 shadow-sm">
                <div className="bg-[#F80090] text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-bold text-gray-800 text-xs sm:text-sm mb-1">Volume Button SOS</h4>
                  <p className="text-[11px] sm:text-xs text-gray-600 leading-tight">Press your volume button three times to instantly trigger SOS.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-gray-300 shadow-sm">
                <div className="bg-[#F80090] text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-bold text-gray-800 text-xs sm:text-sm mb-1">In-App SOS Button</h4>
                  <p className="text-[11px] sm:text-xs text-gray-600 leading-tight">Tap the SOS button in the NAZR app to alert your support network.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-gray-300 shadow-sm">
                <div className="bg-[#F80090] text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-bold text-gray-800 text-xs sm:text-sm mb-1">Home Screen SOS Widget</h4>
                  <p className="text-[11px] sm:text-xs text-gray-600 leading-tight">Trigger SOS directly from your home screen without opening the app.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full max-w-md pt-2">
              {["LARGE TOUCH TARGETS", "MINIMAL DISTRACTIONS", "RELIABLE NAVIGATION", "HIGH CONTRAST", "FAST INTERACTION", "SIMPLE LANGUAGE"].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#F80090] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-bold text-gray-900 text-[10px] sm:text-[11px] tracking-wider">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Iframe to NAZR website */}
          <div className="w-full max-w-[1000px] aspect-video border-[6px] md:border-[10px] border-gray-400 rounded-2xl md:rounded-[40px] overflow-hidden shadow-2xl mb-24 relative bg-black">
            <DisplayScaler
              src="https://www.nazrco.in/"
              title="NAZR Website"
              baseWidth={1440}
              aspectRatio={16 / 9}
              showOpenButton={true}
            />
          </div>

          {/* Footer Typography */}
          <div className="text-center max-w-[800px] mb-20 relative">
             <p className="text-[clamp(1.25rem,2vw+0.5rem,2.25rem)] font-bold text-gray-800 leading-tight">
               <span className="text-[#F80090]">Launching NAZR wasn&apos;t limited to<br/>publishing an application.</span> Smrkonova<br/>supported the complete technical<br/>launch, ensuring every moving part<br/>worked together.
             </p>
          </div>

          {/* Grid of 15 Flutter Applications */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 w-full max-w-[1200px]">
             {[...Array(15)].map((_, i) => (
                <div key={i} className="border-l-[3px] border-[#F80090] pl-3 py-1">
                  <h4 className="font-bold text-gray-900 text-[clamp(9px,0.5vw+3px,10px)] tracking-widest uppercase mb-1.5 leading-tight">FLUTTER<br/>APPLICATION</h4>
                  <p className="text-[clamp(8px,0.4vw+3px,9px)] text-gray-600 leading-tight">Multiple strategy sessions with<br/>founders to understand vision</p>
                </div>
             ))}
          </div>

        </div>
      </section>

      {/* The Journey Section */}
      <section className="relative w-full bg-[#111111] pt-32 pb-0 flex flex-col items-center">
        
        {/* Huge Typography */}
        <div className="text-center px-4 mb-16">
          <h2 className="text-[clamp(3.5rem,8.5vw+0.5rem,8.75rem)] font-black text-white tracking-tighter uppercase leading-[0.9]">
            THE<br/>
            JOURNEY<br/>
            HAS<br/>
            ONLY <span className="text-[#F80090]">BEGUN</span>
          </h2>
        </div>

        {/* Small Paragraphs */}
        <div className="flex flex-col gap-6 text-center max-w-[600px] px-6 text-[clamp(11px,0.6vw+5px,13px)] text-gray-400 mb-16">
          <p>NAZR started with a simple question. How can technology make women feel safer?</p>
          <p>Today it has become a foundation for a growing ecosystem that connects products, software, emergency response, and community into one unified experience.</p>
          <p>And for Smrkonova, this is exactly why we exist.</p>
          <p>Not to build websites. Not to design applications. But to partner with ambitious founders, solve meaningful problems, and engineer digital systems that continue growing long after launch.</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-32 w-full max-w-[500px] px-6">
          <button className="flex-1 bg-[#F80090] text-white font-bold py-4 px-6 rounded-[4px] tracking-widest text-[clamp(10px,0.6vw+4px,12px)] hover:bg-pink-600 transition-colors">
            CREATE YOURS
          </button>
          <button className="flex-1 bg-transparent border-[1.5px] border-gray-600 text-white font-bold py-4 px-6 rounded-[4px] tracking-widest text-[clamp(10px,0.6vw+4px,12px)] hover:bg-white/5 transition-colors">
            NEXT PROJECT
          </button>
        </div>

        {/* Infinite Marquee Banner */}
        <style>{`
          @keyframes bottom-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-bottom-marquee {
            animation: bottom-marquee 15s linear infinite;
          }
        `}</style>
        
        <div className="w-full bg-[#111111] border-y border-gray-900 py-6 overflow-hidden flex whitespace-nowrap">
          <div className="flex items-center gap-10 animate-bottom-marquee w-max">
             {/* Repeat contents enough times to ensure seamless loop */}
             {[...Array(6)].map((_, i) => (
               <div key={i} className="flex items-center gap-10">
                 {/* NAZR Item */}
                 <div className="flex items-center gap-4">
                   <svg className="w-8 h-8 text-[#F80090]" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm6 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zM12 16c-1.86 0-3.41-1.28-3.86-3h7.72c-.45 1.72-2 3-3.86 3z" />
                   </svg>
                   <span className="font-black text-2xl tracking-widest text-white">NAZR</span>
                 </div>
                 {/* SMRKONOVA Item */}
                 <div className="flex items-center gap-4">
                   <svg className="w-8 h-8 text-[#F80090]" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                   </svg>
                   <span className="font-black text-2xl tracking-widest text-white">SMRKONOVA</span>
                 </div>
               </div>
             ))}
          </div>
        </div>

      </section>

    </main>
  );
}
