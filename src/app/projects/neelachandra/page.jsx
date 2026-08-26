import React from 'react';

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
    </main>
  );
}

