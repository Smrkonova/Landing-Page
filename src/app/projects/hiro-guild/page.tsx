"use client";

import Image from "next/image";

export default function HiroGuildProjectPage() {
  return (
    <main className="min-h-screen bg-[#111111] pt-32 md:pt-40 flex flex-col justify-center overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 pb-12 flex flex-col xl:flex-row items-stretch gap-6 xl:gap-8">
        
        {/* Left Sidebar */}
        <div className="hidden xl:flex flex-col w-[220px] shrink-0 justify-between py-12">
          <div>
            <h4 className="text-[clamp(10px,0.8vw+2px,12px)] text-gray-500 font-bold uppercase tracking-widest mb-3">CASE STUDY 1</h4>
            <div className="w-20 h-auto">
              <img src="/images/projects/hiro-guild/logo.svg" alt="Hiro Guild Logo" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="flex flex-col gap-10 mt-16">
            <div>
              <h4 className="text-[clamp(11px,0.8vw+2px,13px)] text-gray-500 tracking-wider mb-3">Industry</h4>
              <span className="bg-[#222222] text-gray-300 font-bold text-[clamp(10px,0.6vw+4px,12px)] px-3 py-1.5 rounded-sm">Task Marketplace</span>
            </div>
            <div>
              <h4 className="text-[clamp(11px,0.8vw+2px,13px)] text-gray-500 tracking-wider mb-3">Duration</h4>
              <span className="bg-[#222222] text-gray-300 font-bold text-[clamp(10px,0.6vw+4px,12px)] px-3 py-1.5 rounded-sm">Ongoing</span>
            </div>
            <div>
              <h4 className="text-[clamp(11px,0.8vw+2px,13px)] text-gray-500 tracking-wider mb-3">Platforms</h4>
              <div className="flex flex-col gap-2 items-start">
                {["App design", "Research", "Strategy", "UI/UX"].map((item, i) => (
                  <span key={i} className="bg-[#222222] text-gray-300 font-bold text-[clamp(10px,0.6vw+4px,12px)] px-3 py-1.5 rounded-sm">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex-1 w-full border-[2px] border-[#374c63] rounded-[30px] md:rounded-[40px] p-1.5 relative overflow-hidden flex items-stretch">
          <div className="w-full relative rounded-[26px] md:rounded-[34px] overflow-hidden aspect-[4/3] md:aspect-[16/10] xl:aspect-auto xl:h-full min-h-[60vh]">
            {/* Background Image */}
            <img 
              src="/images/projects/hiro-guild/banner.png" 
              alt="Hiro Guild Banner" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col justify-end items-center pb-16 md:pb-24 bg-gradient-to-t from-black/90 via-black/40 to-transparent px-4">
              <h1 className="text-[clamp(2rem,4.5vw+0.5rem,4rem)] font-black text-white uppercase tracking-wider text-center leading-tight">
                IT WAS JUST <span className="text-[#FFC700]">AN IDEA</span>
              </h1>
              <h2 className="text-[clamp(1.5rem,3.5vw+0.5rem,3.375rem)] font-light text-white/80 uppercase tracking-widest text-center mt-2">
                WHEN IT CAME TO US
              </h2>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="hidden xl:flex flex-col w-[180px] shrink-0 justify-end py-16 pl-6">
          <ul className="flex flex-col gap-4">
            {[
              "PRODUCT RESEARCH", 
              "WIREFRAMING", 
              "USER FLOWS", 
              "HIGH-FIDELITY UI", 
              "INTERACTIVE", 
              "PROTOTYPING", 
              "LOGO DEVELOPMENT", 
              "DESIGN SYSTEM"
            ].map((service, i) => (
              <li key={i} className="text-[clamp(9px,0.6vw+3px,11px)] font-bold text-gray-500 tracking-widest leading-snug">{service}</li>
            ))}
          </ul>
        </div>

        {/* Mobile View Metadata (Visible only on small screens) */}
        <div className="xl:hidden w-full flex flex-wrap gap-8 mt-6 pb-12">
          <div className="w-full">
            <h4 className="text-[clamp(10px,0.8vw+2px,12px)] text-gray-500 font-bold uppercase tracking-widest mb-3">CASE STUDY 1</h4>
            <div className="w-24 h-auto">
              <img src="/images/projects/hiro-guild/logo.svg" alt="Hiro Guild Logo" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="flex gap-8 flex-wrap">
            <div className="flex flex-col gap-2">
              <h4 className="text-[clamp(11px,0.8vw+2px,13px)] text-gray-500 tracking-wider">Industry</h4>
              <span className="bg-[#222222] text-gray-300 font-bold text-[clamp(10px,0.6vw+4px,12px)] px-3 py-1.5 rounded-sm self-start">Task Marketplace</span>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-[clamp(11px,0.8vw+2px,13px)] text-gray-500 tracking-wider">Duration</h4>
              <span className="bg-[#222222] text-gray-300 font-bold text-[clamp(10px,0.6vw+4px,12px)] px-3 py-1.5 rounded-sm self-start">Ongoing</span>
            </div>
          </div>
          <div className="w-full">
            <h4 className="text-[clamp(11px,0.8vw+2px,13px)] text-gray-500 tracking-wider mb-2">Platforms</h4>
            <div className="flex flex-wrap gap-2 items-start">
              {["App design", "Research", "Strategy", "UI/UX"].map((item, i) => (
                <span key={i} className="bg-[#222222] text-gray-300 font-bold text-[clamp(10px,0.6vw+4px,12px)] px-3 py-1.5 rounded-sm">{item}</span>
              ))}
            </div>
          </div>
          <div className="w-full mt-4">
             <ul className="flex flex-wrap gap-4">
                {[
                  "PRODUCT RESEARCH", 
                  "WIREFRAMING", 
                  "USER FLOWS", 
                  "HIGH-FIDELITY UI", 
                  "INTERACTIVE", 
                  "PROTOTYPING", 
                  "LOGO DEVELOPMENT", 
                  "DESIGN SYSTEM"
                ].map((service, i) => (
                  <li key={i} className="text-[clamp(9px,0.6vw+3px,11px)] font-bold text-gray-400 tracking-widest bg-[#222222] px-3 py-1 rounded-sm">{service}</li>
                ))}
             </ul>
          </div>
        </div>

      </div>

      {/* Transform Product Section */}
      <section className="relative w-full flex flex-col items-center pt-24 md:pt-40 pb-20 md:pb-32 px-4 z-10">
        
        {/* Typography overlapping the map */}
        <div className="w-full max-w-[900px] text-center relative z-20 pointer-events-none">
          <h2 className="text-[clamp(1rem,1.8vw+0.5rem,2.125rem)] font-light text-gray-400 uppercase tracking-widest leading-[1.6] text-center">
            BUILDING TO TRANSFORM PRODUCT<br/>
            INTO AN BUILDING TO <span className="text-[#FFC700] font-normal">TRANSFORM</span><br/>
            PRODUCT INTO ANBUILDING TO<br/>
            TRANSFORM PRODUCT
          </h2>
        </div>
        
        {/* Map Graphic - pulled up with negative margin to sit behind text */}
        <div className="w-full max-w-[700px] flex justify-center relative z-10 -mt-16 md:-mt-24">
          <img 
            src="/images/projects/hiro-guild/transform.png" 
            alt="Transformation Map Routing" 
            className="w-full h-auto object-contain opacity-90 drop-shadow-2xl"
          />
        </div>
        
      </section>

      {/* Experience Section */}
      <section className="relative w-full min-h-screen bg-[#111111] overflow-hidden flex flex-col lg:block pt-20 pb-32">
        
        {/* Background Text (Always centered behind everything) */}
        <div className="absolute top-[40%] lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none mt-20 lg:mt-0">
          <h1 className="text-[clamp(3.75rem,15vw,18.75rem)] font-thin text-white/10 tracking-widest uppercase leading-none">
            EXPERIENCE
          </h1>
        </div>

        {/* Central Graphic */}
        <div className="relative z-10 w-full max-w-[900px] mx-auto mt-10 lg:mt-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 pointer-events-none">
          <img 
            src="/images/projects/hiro-guild/man.png" 
            alt="Experience Rider" 
            className="w-full h-auto object-contain drop-shadow-[0_0_100px_rgba(255,255,255,0.05)]"
          />
        </div>

        {/* Content Wrapper for Absolute Positioning on Large Screens */}
        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:h-[90vh] flex flex-col gap-16 lg:gap-0 lg:flex-none mt-20 lg:mt-0 pointer-events-none">
          
          {/* Top Left */}
          <div className="pointer-events-auto lg:absolute lg:top-12 lg:left-12 xl:top-24 xl:left-24 text-left">
            <h3 className="text-[clamp(1.5rem,2.5vw+0.5rem,2.5rem)] font-light text-gray-400 uppercase tracking-widest leading-[1.4] text-left">
              BUILDING TO<br/>
              TRANSFORM<br/>
              PRODUCT<br/>
              INTO AN
            </h3>
          </div>
          
          {/* Top Right */}
          <div className="pointer-events-auto flex items-center lg:items-start justify-end lg:justify-end gap-6 lg:absolute lg:top-12 lg:right-12 xl:top-24 xl:right-24">
            <div className="flex flex-col gap-3 text-[clamp(10px,0.6vw+4px,12px)] font-bold text-gray-500 tracking-widest text-right">
              <p>REWARDS <span className="text-[#FFC700]">₹567</span></p>
              <p>MISSIONS <span className="text-[#FFC700]">4</span></p>
              <p>NEXT PICK UP <span className="text-[#FFC700]">2.3KM</span></p>
            </div>
            {/* Minimalist Chevron SVG */}
            <svg width="24" height="80" viewBox="0 0 24 80" fill="none" className="opacity-50 hidden md:block">
              <path d="M24 0 L0 40 L24 80" stroke="#666666" strokeWidth="1.5" vectorEffect="non-scaling-stroke"/>
            </svg>
          </div>

          {/* Bottom Left - (Mobile Flow Only) */}
          <div className="pointer-events-auto lg:hidden w-[250px] md:w-[350px]">
            <img src="/images/projects/hiro-guild/active.png" alt="Active Map" className="w-full h-auto object-contain opacity-80" />
          </div>

          {/* Bottom Right */}
          <div className="pointer-events-auto lg:absolute lg:bottom-12 lg:right-12 xl:bottom-24 xl:right-24 max-w-[400px]">
            <p className="text-[clamp(11px,0.6vw+5px,13px)] text-gray-400 leading-[1.8] font-medium tracking-wide lg:text-right">
              Hiro Guild, a task management platform is what the client had come up with. We took the complex business idea and turned it into a product people could understand, experience, and believe in.
            </p>
          </div>
          
        </div>

        {/* Active Map - Desktop Absolute Position (Left End Bottom) */}
        <div className="hidden lg:block absolute bottom-0 left-0 w-[350px] xl:w-[450px] pointer-events-none z-20">
          <img src="/images/projects/hiro-guild/active.png" alt="Active Map" className="w-full h-auto object-contain opacity-80" />
        </div>

        {/* Pagination Indicators */}
        <div className="relative lg:absolute lg:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30 pointer-events-auto mt-20 lg:mt-0">
          <div className="w-8 h-2 bg-[#FFC700] rounded-full cursor-pointer hover:opacity-80 transition-opacity"></div>
          {[1,2,3,4].map(i => (
            <div key={i} className="w-4 h-2 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-500 transition-colors"></div>
          ))}
        </div>

      </section>

      {/* Founders Plate Section (Bag) */}
      <section className="relative w-full min-h-screen bg-[#111111] overflow-hidden flex flex-col lg:block pt-20 pb-32 border-t border-white/5">
        
        {/* Background Radial Rings (Simulated with CSS) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] border border-white/5 rounded-full pointer-events-none z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] border border-white/5 rounded-full pointer-events-none z-0"></div>

        {/* Central Graphic */}
        <div className="relative z-10 w-full max-w-[600px] mx-auto mt-10 lg:mt-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 pointer-events-none">
          <img 
            src="/images/projects/hiro-guild/bag.png" 
            alt="Hiro Guild Smart Bag" 
            className="w-full h-auto object-contain drop-shadow-[0_0_80px_rgba(255,255,255,0.05)]"
          />
        </div>

        {/* Radial Text Nodes Around the Bag */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] h-[700px] pointer-events-none z-10 hidden lg:block">
          
          {/* Top */}
          <div className="absolute top-[5%] left-1/2 -translate-x-1/2 flex flex-col items-center">
            <span className="text-[clamp(9px,0.6vw+3px,11px)] font-bold text-gray-500 tracking-widest uppercase text-center mb-2">WHAT MAKES<br/>THEM TAKE IT?</span>
            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center border border-white/10 shadow-lg shadow-black">
              <span className="text-white text-xs font-bold leading-none tracking-tighter">»</span>
            </div>
          </div>
          
          {/* Top Left */}
          <div className="absolute top-[25%] left-[5%] flex items-center gap-3">
            <span className="text-[clamp(9px,0.6vw+3px,11px)] font-bold text-gray-500 tracking-widest uppercase text-right">HOW DOES<br/>SOMEONE<br/>DISCOVER IT?</span>
            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center border border-white/10 shadow-lg shadow-black">
              <span className="text-white text-xs font-bold leading-none tracking-tighter">»</span>
            </div>
          </div>
          
          {/* Bottom Left */}
          <div className="absolute top-[55%] left-[10%] flex items-center gap-3">
            <span className="text-[clamp(9px,0.6vw+3px,11px)] font-bold text-gray-500 tracking-widest uppercase text-right">HOW DOES<br/>A TASK BEGIN?</span>
            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center border border-white/10 shadow-lg shadow-black">
              <span className="text-white text-xs font-bold leading-none tracking-tighter">»</span>
            </div>
          </div>

          {/* Top Right */}
          <div className="absolute top-[25%] right-[5%] flex items-center gap-3 flex-row-reverse">
            <span className="text-[clamp(9px,0.6vw+3px,11px)] font-bold text-[#FFC700] tracking-widest uppercase text-left">HOW DO THEY<br/>KNOW THEY'RE<br/>PROGRESSING?</span>
            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center border border-white/10 shadow-lg shadow-black">
              <span className="text-white text-xs font-bold leading-none tracking-tighter">»</span>
            </div>
          </div>

          {/* Bottom Right */}
          <div className="absolute top-[55%] right-[10%] flex items-center gap-3 flex-row-reverse">
            <span className="text-[clamp(9px,0.6vw+3px,11px)] font-bold text-gray-500 tracking-widest uppercase text-left">WHAT KEEPS<br/>THEM<br/>COMING<br/>BACK?</span>
            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center border border-white/10 shadow-lg shadow-black">
              <span className="text-white text-xs font-bold leading-none tracking-tighter">»</span>
            </div>
          </div>

        </div>

        {/* Content Wrapper for Absolute Positioning on Large Screens */}
        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:h-[90vh] flex flex-col gap-16 lg:gap-0 lg:flex-none mt-20 lg:mt-0 pointer-events-none">
          
          {/* Top Left */}
          <div className="pointer-events-auto lg:absolute lg:top-12 lg:left-12 xl:top-24 xl:left-24 text-left max-w-[300px]">
            <h3 className="text-[clamp(11px,0.6vw+4px,14px)] font-bold text-gray-500 uppercase tracking-widest leading-[1.8] text-left">
              DESIGNING WHAT HAPPENS<br/>
              BEFORE AND AFTER THAT<br/>
              SCREEN IS THE REAL WORK.
            </h3>
          </div>
          
          {/* Top Right */}
          <div className="pointer-events-auto flex items-center lg:items-start justify-end lg:justify-end gap-6 lg:absolute lg:top-12 lg:right-12 xl:top-24 xl:right-24">
            <div className="flex flex-col gap-3 text-[clamp(10px,0.6vw+4px,12px)] font-bold text-gray-500 tracking-widest text-right">
              <p>REWARDS <span className="text-[#FFC700]">₹567</span></p>
              <p>MISSIONS <span className="text-[#FFC700]">4</span></p>
              <p>NEXT PICK UP <span className="text-[#FFC700]">2.3KM</span></p>
            </div>
            {/* Minimalist Chevron SVG */}
            <svg width="24" height="80" viewBox="0 0 24 80" fill="none" className="opacity-50 hidden md:block">
              <path d="M24 0 L0 40 L24 80" stroke="#666666" strokeWidth="1.5" vectorEffect="non-scaling-stroke"/>
            </svg>
          </div>

          {/* Bottom Left - (Mobile Flow Only) */}
          <div className="pointer-events-auto lg:hidden w-[250px] md:w-[350px]">
            <img src="/images/projects/hiro-guild/active.png" alt="Active Map" className="w-full h-auto object-contain opacity-80" />
          </div>

          {/* Bottom Right */}
          <div className="pointer-events-auto lg:absolute lg:bottom-12 lg:right-12 xl:bottom-24 xl:right-24 max-w-[400px]">
            <h4 className="text-[clamp(1.25rem,1.8vw+0.5rem,1.875rem)] font-light text-gray-400 tracking-widest uppercase lg:text-right mb-2">HEAVY LIFTING</h4>
            <h2 className="text-[clamp(1.5rem,2.5vw+0.5rem,2.5rem)] font-bold text-gray-300 tracking-widest uppercase lg:text-right leading-none mb-6">THE FOUNDERS'<br/>PLATE.</h2>
            <p className="text-[clamp(11px,0.6vw+5px,13px)] text-gray-400 leading-[1.8] font-medium tracking-wide lg:text-right">
              Hiro Guild, a task management platform is what the client had come up with. We took the complex business idea and turned it into a product people could understand, experience, and believe in.
            </p>
          </div>
          
        </div>

        {/* Active Map - Desktop Absolute Position (Left End Bottom) */}
        <div className="hidden lg:block absolute bottom-0 left-0 w-[350px] xl:w-[450px] pointer-events-none z-20">
          <img src="/images/projects/hiro-guild/active.png" alt="Active Map" className="w-full h-auto object-contain opacity-80" />
        </div>

        {/* Pagination Indicators */}
        <div className="relative lg:absolute lg:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30 pointer-events-auto mt-20 lg:mt-0">
          <div className="w-4 h-2 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-500 transition-colors"></div>
          <div className="w-8 h-2 bg-[#FFC700] rounded-full cursor-pointer hover:opacity-80 transition-opacity"></div>
          <div className="w-4 h-2 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-500 transition-colors"></div>
          <div className="w-4 h-2 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-500 transition-colors"></div>
          <div className="w-4 h-2 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-500 transition-colors"></div>
        </div>

      </section>

      {/* Feel Like Play Section */}
      <section className="relative w-full min-h-screen bg-[#111111] overflow-hidden flex flex-col lg:block pt-20 pb-32 border-t border-white/5">
        
        {/* Full Section Background Image */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <img 
            src="/images/projects/hiro-guild/play/bg.png" 
            alt="Play Section Background" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Top Left Text */}
        <div className="pointer-events-auto lg:absolute lg:top-12 lg:left-12 xl:top-24 xl:left-24 text-left z-20 px-6 lg:px-0">
          <h3 className="text-[clamp(1.25rem,1.8vw+0.5rem,1.75rem)] font-light text-gray-500 uppercase tracking-widest leading-none mb-4">
            WE WANTED WORK
          </h3>
          <h2 className="text-[clamp(2.25rem,4.5vw+0.5rem,4.375rem)] font-bold text-gray-300 uppercase tracking-tight leading-none">
            TO FEEL <span className="text-[#FFC700]">LIKE PLAY.</span>
          </h2>
        </div>

        {/* Top Right Stats */}
        <div className="pointer-events-auto flex items-center lg:items-start justify-end lg:justify-end gap-6 lg:absolute lg:top-12 lg:right-12 xl:top-24 xl:right-24 z-20 px-6 lg:px-0 mt-12 lg:mt-0">
          <div className="flex flex-col gap-3 text-[clamp(10px,0.6vw+4px,12px)] font-bold text-gray-500 tracking-widest text-right">
            <p>REWARDS <span className="text-[#FFC700]">₹567</span></p>
            <p>MISSIONS <span className="text-[#FFC700]">4</span></p>
            <p>NEXT PICK UP <span className="text-[#FFC700]">2.3KM</span></p>
          </div>
          {/* Minimalist Chevron SVG */}
          <svg width="24" height="80" viewBox="0 0 24 80" fill="none" className="opacity-50 hidden md:block">
            <path d="M24 0 L0 40 L24 80" stroke="#666666" strokeWidth="1.5" vectorEffect="non-scaling-stroke"/>
          </svg>
        </div>

        {/* Center Graphic Grid (Cards) */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto mt-20 lg:mt-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-wrap justify-center items-center gap-3 md:gap-5 px-4 pointer-events-none">
          {[
            { label: 'TASK', img: 'task.png' },
            { label: 'COMPLETE', img: 'complete.png', isActive: true },
            { label: 'REWARD', img: 'reward.png' },
            { label: 'PROGRESS', img: 'progress.png' },
            { label: 'UNLOCK', img: 'unlock.png' },
            { label: 'REPEAT', img: 'repeat.png' }
          ].map((card, i) => (
            <div key={i} className={`relative w-[120px] md:w-[140px] lg:w-[160px] xl:w-[180px] aspect-[4/5] p-[1.5px] transition-all duration-300 ${card.isActive ? 'bg-[#FFC700] drop-shadow-[0_0_15px_rgba(255,199,0,0.3)] scale-105 z-20' : 'bg-[#FFC700]/30 z-10'}`}
                 style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)' }}>
              <div className={`w-full h-full flex flex-col items-center justify-center transition-all duration-300 ${card.isActive ? 'bg-[#151205]' : 'bg-[#111111] backdrop-blur-sm bg-opacity-80'}`}
                   style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)' }}>
                
                {/* Icon */}
                <div className="relative z-10 h-[40px] md:h-[50px] flex items-center justify-center mb-6">
                  <img 
                    src={`/images/projects/hiro-guild/play/${card.img}`} 
                    alt={card.label} 
                    className={`max-h-full max-w-[40px] md:max-w-[50px] object-contain drop-shadow-xl ${card.isActive ? 'scale-110' : 'scale-100'}`} 
                  />
                </div>

                {/* Label */}
                <span className={`relative z-10 text-[clamp(10px,0.6vw+4px,14px)] font-black italic tracking-widest uppercase ${card.isActive ? 'text-[#FFC700]' : 'text-[#FFC700] opacity-90'}`}>
                  {card.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Left - (Mobile Flow Only) */}
        <div className="pointer-events-auto lg:hidden w-[250px] md:w-[350px] mt-24 px-6 relative z-20">
          <img src="/images/projects/hiro-guild/active.png" alt="Active Map" className="w-full h-auto object-contain opacity-80" />
        </div>

        {/* Bottom Right Text */}
        <div className="pointer-events-auto lg:absolute lg:bottom-12 lg:right-12 xl:bottom-24 xl:right-24 max-w-[450px] z-20 px-6 lg:px-0 mt-8 lg:mt-0">
          <p className="text-[clamp(11px,0.6vw+5px,13px)] text-gray-400 leading-[1.8] font-medium tracking-wide lg:text-right">
            We didn't want to design another task platform. We wanted the job done to be the game. Instead of a task, done... the experience made people feel like they were getting somewhere.
          </p>
        </div>

        {/* Active Map - Desktop Absolute Position (Left End Bottom) */}
        <div className="hidden lg:block absolute bottom-0 left-0 w-[350px] xl:w-[450px] pointer-events-none z-20">
          <img src="/images/projects/hiro-guild/active.png" alt="Active Map" className="w-full h-auto object-contain opacity-80" />
        </div>

        {/* Pagination Indicators */}
        <div className="relative lg:absolute lg:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30 pointer-events-auto mt-20 lg:mt-0 pb-10 lg:pb-0">
          <div className="w-4 h-2 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-500 transition-colors"></div>
          <div className="w-4 h-2 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-500 transition-colors"></div>
          <div className="w-8 h-2 bg-[#FFC700] rounded-full cursor-pointer hover:opacity-80 transition-opacity"></div>
          <div className="w-4 h-2 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-500 transition-colors"></div>
          <div className="w-4 h-2 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-500 transition-colors"></div>
        </div>

      </section>

      {/* Bike Face & Feel Section */}
      <section className="relative w-full min-h-screen bg-[#111111] overflow-hidden flex flex-col lg:block pt-20 pb-32 border-t border-white/5">
        
        {/* Background Radial Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] border border-white/5 rounded-full pointer-events-none z-0"></div>

        {/* Central Graphic */}
        <div className="relative z-10 w-full max-w-[700px] mx-auto mt-10 lg:mt-0 lg:absolute lg:top-[55%] lg:left-[65%] xl:left-[70%] lg:-translate-x-1/2 lg:-translate-y-1/2 pointer-events-none">
          <img 
            src="/images/projects/hiro-guild/bike.png" 
            alt="Hiro Guild Bike" 
            className="w-full h-auto object-contain drop-shadow-[0_0_80px_rgba(255,255,255,0.05)] scale-110"
          />
        </div>
        
        {/* Absolute Callouts Around the Bike (Desktop) */}
        <div className="absolute top-[55%] lg:left-[65%] xl:left-[70%] -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[700px] pointer-events-none z-20 hidden lg:block">
          
          {/* Top Left: Sketches */}
          <div className="absolute top-[5%] left-[20%] flex items-center gap-3">
            <div className="flex flex-col items-start justify-end w-6 h-4">
               <div className="w-2.5 h-1.5 bg-[#FFC700] rounded-tl-sm rounded-tr-sm"></div>
               <div className="w-6 h-3.5 bg-[#FFC700] rounded-sm"></div>
            </div>
            <span className="text-[clamp(10px,0.6vw+4px,12px)] font-bold text-[#FFC700] tracking-wider">Sketches</span>
          </div>

          {/* Mid Left: Concepts */}
          <div className="absolute top-[35%] left-[10%] flex items-center gap-3">
            <div className="flex flex-col items-start justify-end w-6 h-4">
               <div className="w-2.5 h-1.5 bg-[#FFC700] rounded-tl-sm rounded-tr-sm"></div>
               <div className="w-6 h-3.5 bg-[#FFC700] rounded-sm"></div>
            </div>
            <span className="text-[clamp(10px,0.6vw+4px,12px)] font-bold text-[#FFC700] tracking-wider">Concepts</span>
          </div>

          {/* Top Right: Typography */}
          <div className="absolute top-[3%] right-[15%] flex items-center gap-3 flex-row-reverse">
            <div className="flex flex-col items-start justify-end w-6 h-4">
               <div className="w-2.5 h-1.5 bg-[#FFC700] rounded-tl-sm rounded-tr-sm"></div>
               <div className="w-6 h-3.5 bg-[#FFC700] rounded-sm"></div>
            </div>
            <span className="text-[clamp(10px,0.6vw+4px,12px)] font-bold text-[#FFC700] tracking-wider">Typography</span>
          </div>

          {/* Mid Right: Identity */}
          <div className="absolute top-[25%] right-[0%] flex items-center gap-3 flex-row-reverse relative">
            <div className="flex flex-col items-start justify-end w-6 h-4 z-10">
               <div className="w-2.5 h-1.5 bg-[#FFC700] rounded-tl-sm rounded-tr-sm"></div>
               <div className="w-6 h-3.5 bg-[#FFC700] rounded-sm"></div>
            </div>
            <span className="text-[clamp(10px,0.6vw+4px,12px)] font-bold text-[#FFC700] tracking-wider z-10">Identity</span>
            {/* Squiggly line pointing to colour */}
            <svg className="absolute top-4 right-10 w-20 h-32" viewBox="0 0 100 150" fill="none">
              <path d="M90 0 V30 L70 50 V80 L80 100 V130 L10 150" stroke="#FFC700" strokeWidth="2" strokeDasharray="4 4" />
              <circle cx="90" cy="0" r="3" fill="#FFC700" />
              <circle cx="10" cy="150" r="4" fill="#FFC700" />
            </svg>
          </div>

          {/* Bottom Right: Colour */}
          <div className="absolute top-[45%] right-[15%] flex items-center gap-3 flex-row-reverse">
            <div className="flex flex-col items-start justify-end w-6 h-4 z-10">
               <div className="w-2.5 h-1.5 bg-[#FFC700] rounded-tl-sm rounded-tr-sm"></div>
               <div className="w-6 h-3.5 bg-[#FFC700] rounded-sm"></div>
            </div>
            <span className="text-[clamp(10px,0.6vw+4px,12px)] font-bold text-[#FFC700] tracking-wider">Colour</span>
          </div>
          
        </div>

        {/* Bottom Left Radar UI (CSS Representation) */}
        <div className="hidden lg:flex absolute bottom-[25%] lg:left-[45%] xl:left-[50%] -translate-x-1/2 pointer-events-none z-20 items-center justify-center w-[200px] h-[200px]">
           {/* Radar Rings */}
           <div className="absolute inset-0 border border-white/10 rounded-full border-dashed animate-[spin_60s_linear_infinite]"></div>
           <div className="absolute inset-4 border border-white/10 rounded-full border-dashed animate-[spin_40s_linear_infinite_reverse]"></div>
           <div className="absolute inset-10 border border-white/20 rounded-full border-dashed"></div>
           
           {/* Center Element */}
           <div className="absolute w-12 h-12 bg-[#FFC700] rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(255,199,0,0.5)]">
             <div className="w-6 h-3 bg-black rounded-sm relative flex items-center justify-center">
               <div className="w-2 h-2 bg-[#FFC700] absolute -left-1 rounded-sm"></div>
               <div className="w-2 h-2 bg-[#FFC700] absolute -right-1 rounded-sm"></div>
             </div>
           </div>

           {/* Radar Nodes */}
           <div className="absolute top-[10%] left-[20%] w-5 h-5 bg-white rounded-full flex items-center justify-center border-2 border-green-500 shadow-lg">
             <div className="text-[6px] absolute -top-4 text-white bg-white/20 px-1 rounded">5 KM</div>
             <div className="w-2 h-2 bg-green-500 rounded-full"></div>
           </div>
           <div className="absolute top-[80%] left-[15%] w-5 h-5 bg-white rounded-full flex items-center justify-center border-2 border-red-500 shadow-lg">
             <div className="text-[6px] absolute -top-4 text-white bg-white/20 px-1 rounded">12 KM</div>
             <div className="w-2 h-2 bg-red-500 rounded-full"></div>
           </div>
           <div className="absolute top-[70%] right-[10%] w-5 h-5 bg-white rounded-full flex items-center justify-center border-2 border-green-500 shadow-lg">
             <div className="text-[6px] absolute -top-4 text-white bg-white/20 px-1 rounded">20 KM</div>
             <div className="w-2 h-2 bg-green-500 rounded-full"></div>
           </div>
           <div className="absolute top-[30%] right-[-10%] w-5 h-5 bg-white rounded-full flex items-center justify-center border-2 border-green-500 shadow-lg">
             <div className="text-[6px] absolute -top-4 text-white bg-white/20 px-1 rounded">45 KM</div>
             <div className="w-2 h-2 bg-green-500 rounded-full"></div>
           </div>
        </div>
        
        {/* Bottom Right UI Card (Pick Up From Hospital) */}
        <div className="hidden lg:block absolute bottom-[20%] lg:right-[5%] xl:right-[8%] pointer-events-auto z-30 w-[280px] bg-[#111215] border border-white/10 rounded-2xl p-5 shadow-2xl">
           <h4 className="text-white text-sm font-bold mb-1">Pick Up From Hospital</h4>
           <div className="flex items-center gap-1 mb-6">
             <div className="w-2 h-2 rounded-full border border-gray-400 flex items-center justify-center">
               <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
             </div>
             <span className="text-[9px] text-gray-400">Lohithnagara, Nelamangala</span>
           </div>

           {/* Timeline/Progress */}
           <div className="relative flex justify-between items-center mb-6 px-2">
             <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gray-700 -translate-y-1/2 z-0"></div>
             <div className="absolute top-1/2 left-4 w-1/3 h-0.5 bg-[#FFC700] -translate-y-1/2 z-0"></div>
             
             <div className="flex flex-col items-center gap-1 z-10">
               <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow">
                 <div className="w-2 h-2 bg-red-500 rounded-full"></div>
               </div>
               <span className="text-[8px] text-gray-400">Pick</span>
             </div>
             <div className="flex flex-col items-center gap-1 z-10">
               <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow border-2 border-[#FFC700]">
                 <div className="w-2 h-2 bg-red-500 rounded-full"></div>
               </div>
               <span className="text-[8px] text-white font-bold">Assist</span>
             </div>
             <div className="flex flex-col items-center gap-1 z-10">
               <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow">
                 <div className="w-2 h-2 bg-green-500 rounded-full"></div>
               </div>
               <span className="text-[8px] text-gray-400">Drop</span>
             </div>
           </div>

           <div className="text-center">
             <h3 className="text-xl font-bold text-[#FFC700]">₹150</h3>
             <span className="text-[9px] text-gray-400">Your estimated Amount</span>
           </div>
        </div>

        {/* Content Wrapper for Layout */}
        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:h-[90vh] flex flex-col gap-16 lg:gap-0 lg:flex-none mt-20 lg:mt-0 pointer-events-none">
          
          {/* Top Left Text */}
          <div className="pointer-events-auto lg:absolute lg:top-12 lg:left-12 xl:top-24 xl:left-24 text-left z-20">
            <h3 className="text-[clamp(1.25rem,1.8vw+0.5rem,1.75rem)] font-light text-gray-500 uppercase tracking-widest leading-none mb-4">
              GIVING THE IDEA
            </h3>
            <h2 className="text-[clamp(2.25rem,4.5vw+0.5rem,4.375rem)] font-bold text-gray-300 uppercase tracking-tight leading-none">
              A FACE<br/>
              AND <span className="text-[#FFC700]">A FEEL</span>
            </h2>
          </div>
          
          {/* Top Right Stats */}
          <div className="pointer-events-auto flex items-center lg:items-start justify-end lg:justify-end gap-6 lg:absolute lg:top-12 lg:right-12 xl:top-24 xl:right-24 z-20 mt-12 lg:mt-0">
            <div className="flex flex-col gap-3 text-[clamp(10px,0.6vw+4px,12px)] font-bold text-gray-500 tracking-widest text-right">
              <p>REWARDS <span className="text-[#FFC700]">₹567</span></p>
              <p>MISSIONS <span className="text-[#FFC700]">4</span></p>
              <p>NEXT PICK UP <span className="text-[#FFC700]">2.3KM</span></p>
            </div>
            {/* Minimalist Chevron SVG */}
            <svg width="24" height="80" viewBox="0 0 24 80" fill="none" className="opacity-50 hidden md:block">
              <path d="M24 0 L0 40 L24 80" stroke="#666666" strokeWidth="1.5" vectorEffect="non-scaling-stroke"/>
            </svg>
          </div>

          {/* Left Middle Text */}
          <div className="pointer-events-auto lg:absolute lg:top-[45%] lg:left-12 xl:left-24 max-w-[400px] z-20 mt-8 lg:mt-0">
            <p className="text-[clamp(11px,0.6vw+5px,13px)] text-gray-400 leading-[1.8] font-medium tracking-wide text-left">
              The identity needed to communicate something new, energetic and approachable without becoming overly complicated. So we explored hand-drawn logo directions, visual territories, colour systems, typography and mood boards before bringing everything together into a cohesive brand system.
            </p>
          </div>

          {/* Bottom Left Map (Mobile) */}
          <div className="pointer-events-auto lg:hidden w-[250px] md:w-[350px] mt-24 relative z-20">
            <img src="/images/projects/hiro-guild/active.png" alt="Active Map" className="w-full h-auto object-contain opacity-80" />
          </div>

        </div>

        {/* Active Map - Desktop Absolute Position (Left End Bottom) */}
        <div className="hidden lg:block absolute bottom-0 left-0 w-[300px] xl:w-[400px] pointer-events-none z-20">
          <img src="/images/projects/hiro-guild/active.png" alt="Active Map" className="w-full h-auto object-contain opacity-80" />
        </div>

        {/* Pagination Indicators */}
        <div className="relative lg:absolute lg:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30 pointer-events-auto mt-20 lg:mt-0 pb-10 lg:pb-0">
          <div className="w-4 h-2 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-500 transition-colors"></div>
          <div className="w-4 h-2 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-500 transition-colors"></div>
          <div className="w-4 h-2 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-500 transition-colors"></div>
          <div className="w-8 h-2 bg-[#FFC700] rounded-full cursor-pointer hover:opacity-80 transition-opacity"></div>
          <div className="w-4 h-2 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-500 transition-colors"></div>
        </div>

      </section>

      {/* Another Side (Phones) Section */}
      <section className="relative w-full min-h-screen bg-[#111111] overflow-hidden flex flex-col lg:block pt-20 pb-32 border-t border-white/5">
        
        {/* Content Wrapper for Layout */}
        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:h-[90vh] flex flex-col gap-16 lg:gap-0 lg:flex-none mt-10 lg:mt-0 pointer-events-none">
          
          {/* Top Left Text */}
          <div className="pointer-events-auto lg:absolute lg:top-12 lg:left-12 xl:top-24 xl:left-24 text-left z-20">
            <h3 className="text-[clamp(1.75rem,3.5vw+0.5rem,3.75rem)] font-light text-gray-500 uppercase tracking-widest leading-none mb-2">
              THERE'S
            </h3>
            <h2 className="text-[clamp(2.25rem,4.5vw+0.5rem,4.375rem)] font-bold text-[#FFC700] uppercase tracking-tight leading-none">
              ANOTHER SIDE
            </h2>
          </div>
          
          {/* Top Right Stats */}
          <div className="pointer-events-auto flex items-center lg:items-start justify-end lg:justify-end gap-6 lg:absolute lg:top-12 lg:right-12 xl:top-24 xl:right-24 z-20 mt-12 lg:mt-0">
            <div className="flex flex-col gap-3 text-[clamp(10px,0.6vw+4px,12px)] font-bold text-gray-500 tracking-widest text-right">
              <p>REWARDS <span className="text-[#FFC700]">₹567</span></p>
              <p>MISSIONS <span className="text-[#FFC700]">4</span></p>
              <p>NEXT PICK UP <span className="text-[#FFC700]">2.3KM</span></p>
            </div>
            {/* Minimalist Chevron SVG */}
            <svg width="24" height="80" viewBox="0 0 24 80" fill="none" className="opacity-50 hidden md:block">
              <path d="M24 0 L0 40 L24 80" stroke="#666666" strokeWidth="1.5" vectorEffect="non-scaling-stroke"/>
            </svg>
          </div>

          {/* Left Middle Text */}
          <div className="pointer-events-auto lg:absolute lg:top-[35%] xl:top-[40%] lg:left-12 xl:left-24 max-w-[500px] z-20 mt-8 lg:mt-0">
            <p className="text-[clamp(11px,0.6vw+5px,13px)] text-gray-400 leading-[1.8] font-medium tracking-wide text-left mb-4">
              Not everyone came to Hiro Guild for the same reason.
            </p>
            <p className="text-[clamp(11px,0.6vw+5px,13px)] text-gray-400 leading-[1.8] font-medium tracking-wide text-left mb-4">
              For <span className="text-gray-200">customers</span>, Hiro Guild was about getting something off their plate. They had a task to be done, and the product needed to make that process feel simple, clear and effortless. For <span className="text-gray-200">partners</span>, the motivation was different. They weren't just completing tasks—they were looking for opportunities, building a track record, earning rewards and progressing over time.
            </p>
            <p className="text-[clamp(11px,0.6vw+5px,13px)] text-gray-400 leading-[1.8] font-medium tracking-wide text-left">
              That meant one product had to support <span className="text-[#FFC700]">two very different journeys</span>: one designed around simplicity, and another <span className="text-gray-200">designed around progression.</span>
            </p>
          </div>

          {/* Right Side Phones Graphic */}
          <div className="pointer-events-auto relative lg:absolute lg:top-[15%] xl:top-[18%] lg:right-[5%] xl:right-[8%] w-full lg:w-auto flex justify-center lg:justify-end items-start gap-4 md:gap-6 mt-16 lg:mt-0 z-10">
            <img src="/images/projects/hiro-guild/phone-1.png" alt="App Screen 1" className="w-[100px] md:w-[150px] lg:w-[200px] xl:w-[240px] h-auto object-contain rounded-2xl md:rounded-[30px] shadow-2xl drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]" />
            <img src="/images/projects/hiro-guild/phone-2.jpg" alt="App Screen 2" className="w-[100px] md:w-[150px] lg:w-[200px] xl:w-[240px] h-auto object-contain rounded-2xl md:rounded-[30px] shadow-2xl drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]" />
            <img src="/images/projects/hiro-guild/phone-3.png" alt="App Screen 3" className="w-[100px] md:w-[150px] lg:w-[200px] xl:w-[240px] h-auto object-contain rounded-2xl md:rounded-[30px] shadow-2xl drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]" />
          </div>

          {/* Bottom Left Map (Mobile) */}
          <div className="pointer-events-auto lg:hidden w-[250px] md:w-[350px] mt-24 relative z-20">
            <img src="/images/projects/hiro-guild/active.png" alt="Active Map" className="w-full h-auto object-contain opacity-80" />
          </div>

        </div>

        {/* Active Map - Desktop Absolute Position (Left End Bottom) */}
        <div className="hidden lg:block absolute bottom-0 left-0 w-[300px] xl:w-[400px] pointer-events-none z-20">
          <img src="/images/projects/hiro-guild/active.png" alt="Active Map" className="w-full h-auto object-contain opacity-80" />
        </div>

        {/* Pagination Indicators */}
        <div className="relative lg:absolute lg:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30 pointer-events-auto mt-20 lg:mt-0 pb-10 lg:pb-0">
          <div className="w-4 h-2 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-500 transition-colors"></div>
          <div className="w-4 h-2 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-500 transition-colors"></div>
          <div className="w-4 h-2 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-500 transition-colors"></div>
          <div className="w-4 h-2 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-500 transition-colors"></div>
          <div className="w-8 h-2 bg-[#FFC700] rounded-full cursor-pointer hover:opacity-80 transition-opacity"></div>
        </div>

      </section>

      {/* Ride (No Task List) Section */}
      <section className="relative w-full min-h-screen bg-[#111111] overflow-hidden flex flex-col lg:block pt-20 pb-32 border-t border-white/5">
        
        {/* Background Highlight/Glow behind Bike */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-[#FFC700]/5 blur-[120px] rounded-full pointer-events-none z-0 hidden lg:block"></div>

        {/* Top Left Text */}
        <div className="pointer-events-auto lg:absolute lg:top-12 lg:left-12 xl:top-24 xl:left-24 text-left z-20 px-6 lg:px-0">
          <h3 className="text-[clamp(1.25rem,2.2vw+0.5rem,2.5rem)] font-light text-gray-500 uppercase tracking-widest leading-none mb-4">
            THERE WAS NO TASK LIST FOR THIS
          </h3>
          <h2 className="text-[clamp(0.875rem,0.6vw+0.5rem,1.05rem)] font-bold text-gray-400 uppercase tracking-widest leading-relaxed max-w-[400px]">
            WHEN THE PRODUCT IS NEW, THERE ISN'T ALWAYS A PATTERN TO FOLLOW.
          </h2>
        </div>
        
        {/* Top Right Stats */}
        <div className="pointer-events-auto flex items-center lg:items-start justify-end lg:justify-end gap-6 lg:absolute lg:top-12 lg:right-12 xl:top-24 xl:right-24 z-20 px-6 lg:px-0 mt-12 lg:mt-0">
          <div className="flex flex-col gap-3 text-[clamp(10px,0.6vw+4px,12px)] font-bold text-gray-500 tracking-widest text-right">
            <p>REWARDS <span className="text-[#FFC700]">₹567</span></p>
            <p>MISSIONS <span className="text-[#FFC700]">4</span></p>
            <p>NEXT PICK UP <span className="text-[#FFC700]">2.3KM</span></p>
          </div>
          {/* Minimalist Chevron SVG */}
          <svg width="24" height="80" viewBox="0 0 24 80" fill="none" className="opacity-50 hidden md:block">
            <path d="M24 0 L0 40 L24 80" stroke="#666666" strokeWidth="1.5" vectorEffect="non-scaling-stroke"/>
          </svg>
        </div>

        {/* Central Graphic (Ride) */}
        <div className="relative z-10 w-full max-w-[900px] xl:max-w-[1100px] mt-16 lg:mt-0 lg:absolute lg:top-[50%] lg:right-0 lg:-translate-y-1/2 pointer-events-none flex justify-end">
          <img 
            src="/images/projects/hiro-guild/ride.png" 
            alt="Hiro Guild Ride" 
            className="w-full h-auto object-contain object-right drop-shadow-[0_0_50px_rgba(255,255,255,0.05)] lg:scale-110"
          />
          
          {/* Yellow Light Beam from helmet (simulated) */}
          <div className="hidden lg:block absolute top-[25%] left-[45%] w-[60%] h-[80px] bg-gradient-to-r from-[#FFC700]/30 to-transparent blur-2xl rotate-[10deg] origin-left -z-10 mix-blend-screen opacity-70"></div>
        </div>

        {/* Floating Nodes (Desktop) */}
        <div className="absolute top-[50%] right-0 -translate-y-1/2 w-full max-w-[1200px] h-[700px] pointer-events-none z-0 hidden lg:block">
          {[
            { label: 'User\nResearch', top: '25%', left: '5%', size: 'w-[90px] h-[90px]', textSize: 'text-[clamp(9px,0.5vw+3px,11px)]' },
            { label: 'Product\nDiscovery', top: '35%', left: '20%', size: 'w-[90px] h-[90px]', textSize: 'text-[clamp(9px,0.5vw+3px,11px)]' },
            { label: 'Information\nArchitecture', top: '55%', left: '12%', size: 'w-[100px] h-[100px]', textSize: 'text-[clamp(8px,0.5vw+3px,10px)]' },
            { label: 'User\nFlows', top: '65%', left: '5%', size: 'w-20 h-20', textSize: 'text-[clamp(9px,0.5vw+3px,11px)]' },
            { label: 'UX\nStrategy', top: '15%', left: '42%', size: 'w-20 h-20', textSize: 'text-[clamp(8px,0.5vw+3px,10px)]' },
            { label: 'Wireframes', top: '20%', right: '28%', size: 'w-[90px] h-[90px]', textSize: 'text-[clamp(9px,0.5vw+3px,11px)]' },
            { label: 'High-Fidelity\nUI', top: '48%', right: '15%', size: 'w-24 h-24', textSize: 'text-[clamp(9px,0.5vw+3px,11px)]' },
            { label: 'Interactive\nPrototype', top: '65%', right: '15%', size: 'w-[100px] h-[100px]', textSize: 'text-[clamp(9px,0.5vw+3px,11px)]' },
          ].map((node, i) => (
            <div 
              key={i} 
              className={`absolute flex items-center justify-center text-center rounded-full border border-gray-600/40 bg-[#111111]/50 backdrop-blur-md text-gray-400 font-medium ${node.size} ${node.textSize} shadow-lg`}
              style={{ top: node.top, left: node.left, right: node.right }}
            >
              <span className="whitespace-pre-line leading-tight">{node.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom Right Text */}
        <div className="pointer-events-auto lg:absolute lg:bottom-12 lg:right-12 xl:bottom-24 xl:right-24 max-w-[320px] z-20 px-6 lg:px-0 mt-8 lg:mt-0">
          <p className="text-[clamp(11px,0.6vw+5px,13px)] text-gray-400 leading-[2] font-medium tracking-wide lg:text-right">
            We explored workflows from first principles, tested different structures, questioned assumptions, iterated on interactions and worked through the difficult parts before they became development problems. Sometimes the hardest task in product design is knowing there isn't a template for the task we are trying to accomplish.
          </p>
        </div>

        {/* Bottom Left Map (Mobile) */}
        <div className="pointer-events-auto lg:hidden w-[250px] md:w-[350px] mt-16 px-6 relative z-20">
          <img src="/images/projects/hiro-guild/active.png" alt="Active Map" className="w-full h-auto object-contain opacity-80" />
        </div>

        {/* Active Map - Desktop Absolute Position (Left End Bottom) */}
        <div className="hidden lg:block absolute bottom-0 left-0 w-[300px] xl:w-[400px] pointer-events-none z-20">
          <img src="/images/projects/hiro-guild/active.png" alt="Active Map" className="w-full h-auto object-contain opacity-80" />
        </div>

        {/* Pagination Indicators */}
        <div className="relative lg:absolute lg:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30 pointer-events-auto mt-20 lg:mt-0 pb-10 lg:pb-0">
          <div className="w-4 h-2 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-500 transition-colors"></div>
          <div className="w-4 h-2 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-500 transition-colors"></div>
          <div className="w-4 h-2 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-500 transition-colors"></div>
          <div className="w-4 h-2 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-500 transition-colors"></div>
          <div className="w-4 h-2 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-500 transition-colors"></div>
          <div className="w-8 h-2 bg-[#FFC700] rounded-full cursor-pointer hover:opacity-80 transition-opacity"></div>
        </div>

      </section>

      {/* Final CTA Section */}
      <section className="relative w-full min-h-screen bg-[#0a0a0a] overflow-hidden flex items-center pt-32 pb-32 border-t border-white/5">
        
        {/* Full Section Background Image */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <img 
            src="/images/projects/hiro-guild/product-bg.png" 
            alt="Product Background" 
            className="w-full h-full object-cover opacity-60 mix-blend-lighten"
          />
          {/* Subtle gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* Left Content */}
          <div className="w-full lg:w-[55%] flex flex-col items-start text-left">
            <h2 className="text-[clamp(2.25rem,4vw+0.5rem,4.0625rem)] font-light text-gray-300 uppercase tracking-widest leading-[1.1] mb-10">
              A PRODUCT BUILT<br/>
              FOR <span className="font-bold text-white">WHAT'S NEXT</span>
            </h2>
            
            <div className="flex flex-col gap-6 text-[clamp(11px,0.6vw+5px,13px)] text-gray-400 leading-[1.9] font-medium tracking-wide max-w-[650px] mb-14">
              <p>Hiro Guild came to us with an idea for a different kind of task platform. We helped turn that idea into a product people could understand, experience, and believe in.</p>
              <p>From mapping the business model to defining two distinct user journeys. From giving the brand a voice to turning work into a system of progression. From rough sketches and unanswered questions to a product that could finally be shown, not just explained.</p>
              <p>We took on the heavy lifting. Hiro Guild got a product ready to move forward. The platform now has the foundation to enter its next chapter — development, growth, and the conversations that turn a product vision into a business.</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
              <button className="w-full sm:w-[220px] py-4 bg-[#FFC700] hover:bg-[#e6b300] text-black text-[clamp(10px,0.6vw+4px,12px)] font-bold tracking-widest uppercase rounded transition-colors shadow-lg">
                CREATE YOURS
              </button>
              <button className="w-full sm:w-[220px] py-4 bg-transparent border border-white/20 hover:border-white/60 hover:bg-white/5 text-white text-[clamp(10px,0.6vw+4px,12px)] font-bold tracking-widest uppercase rounded transition-all">
                NEXT PROJECT
              </button>
            </div>
          </div>

          {/* Right Content (Phone Map Image) */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
            <div className="relative group cursor-pointer transition-transform duration-500 hover:scale-105">
              <img 
                src="/images/projects/hiro-guild/phone-map.png" 
                alt="Hiro Guild Map UI" 
                className="max-w-[280px] md:max-w-[340px] lg:max-w-[420px] h-auto object-contain rounded-[24px] md:rounded-[36px] border-[1.5px] border-[#FFC700]/40 shadow-[0_0_60px_rgba(255,199,0,0.2)]"
              />
            </div>
          </div>
          
        </div>

      </section>

    </main>
  );
}
