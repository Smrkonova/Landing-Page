import React from 'react';
import Image from 'next/image';
import CrewSlider from './CrewSlider';

export default function CineArteryProjectPage() {
  return (
    <main className="min-h-screen bg-[#111111] text-white">
      <section className="relative overflow-hidden font-sans mt-[1rem] flex items-center min-h-screen">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 flex flex-col md:flex-row items-stretch w-full min-h-[80vh]">
          
          {/* Left Column - Details */}
          <div className="w-full md:w-1/5 pr-8 flex flex-col justify-center py-10">
            <div className="space-y-12">
              <div>
                <h4 className="text-[clamp(0.75rem,2.5vw+0.25rem,0.75rem)] font-[300] tracking-[0.2em] uppercase mb-4 text-[#FFFFFF]">Case Study 1</h4>
                <div className="relative w-32 h-8">
                   <img 
                      src="/images/projects/cineartery/logo.png" 
                      alt="CineArtery Logo" 
                      className="object-contain object-left w-full h-full"
                   />
                </div>
              </div>

              <div>
                <h4 className="text-[clamp(0.75rem,2.5vw+0.25rem,0.75rem)] font-[300] tracking-[0.2em] mb-3 text-[#FFFFFF] capitalize">Industry</h4>
                <span className="inline-block bg-[#222222] px-3 py-1.5 text-[clamp(10px,0.6vw+4px,12px)] font-semibold rounded-sm text-white">Women safety</span>
              </div>

              <div>
                <h4 className="text-[clamp(0.75rem,2.5vw+0.25rem,0.75rem)] font-[300] tracking-[0.2em] mb-3 text-[#FFFFFF] capitalize">Duration</h4>
                <span className="inline-block bg-[#222222] px-3 py-1.5 text-[clamp(10px,0.6vw+4px,12px)] font-semibold rounded-sm text-white">Ongoing</span>
              </div>

              <div>
                <h4 className="text-[clamp(0.75rem,2.5vw+0.25rem,0.75rem)] font-[300] tracking-[0.2em] mb-3 text-[#FFFFFF] capitalize">Platforms</h4>
                <div className="flex flex-col gap-2 items-start">
                  <span className="inline-block bg-[#222222] px-3 py-1.5 text-[clamp(10px,0.6vw+4px,12px)] font-semibold rounded-sm text-white">Website</span>
                  <span className="inline-block bg-[#222222] px-3 py-1.5 text-[clamp(10px,0.6vw+4px,12px)] font-semibold rounded-sm text-white">Shopify</span>
                  <span className="inline-block bg-[#222222] px-3 py-1.5 text-[clamp(10px,0.6vw+4px,12px)] font-semibold rounded-sm text-white">Flutter</span>
                  <span className="inline-block bg-[#222222] px-3 py-1.5 text-[clamp(10px,0.6vw+4px,12px)] font-semibold rounded-sm text-white">Backend</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column - Banner Image */}
          <div className="w-full md:w-3/5 flex justify-center py-4 relative px-4">
            {/* The outer container with the blue border */}
            <div className="relative rounded-[1.5rem] border-[1.5px] border-[#3a5a7b] w-full h-full min-h-[500px] p-[2px] shadow-sm overflow-hidden">
              {/* Inner container for image */}
              <div className="relative rounded-[1.4rem] overflow-hidden w-full h-full bg-[#0a0a0a]">
                <img
                  src="/images/projects/cineartery/banner.png"
                  alt="CineArtery Banner"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                <div className="absolute inset-0 flex flex-col items-start justify-end text-white px-8 md:px-12 pb-12 md:pb-16 lg:pb-20">
                  <h1 className="text-[clamp(1.75rem,3.5vw+0.5rem,2.75rem)] font-[100] uppercase tracking-wide leading-tight drop-shadow-lg text-white/80">
                    The Heartbeat
                  </h1>
                  <h1 className="text-[clamp(1.75rem,3.5vw+0.5rem,2.75rem)] font-[100] uppercase tracking-wide leading-tight drop-shadow-lg text-white/80">
                    Of <span className="font-[700] text-white">Creative</span>
                  </h1>
                  <h1 className="text-[clamp(1.75rem,3.5vw+0.5rem,2.75rem)] font-[700] uppercase tracking-wide leading-tight drop-shadow-lg text-white">
                    Collaboration
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Navigation/Services list */}
          <div className="w-full md:w-1/5 pl-8 flex flex-col justify-center items-start text-[#FFFFFF] md:pt-[6rem]">
            <div className="space-y-4 text-[clamp(10px,0.8vw+2px,12px)]  tracking-widest uppercase font-[200]">
              <p className="flex items-center gap-2"><span className="w-1 h-1 bg-[#a3a3a3] rounded-full"></span> Motion Website</p>
              <p className="pl-3">Development</p>
              <p className="flex items-center gap-2 mt-4"><span className="w-1 h-1 bg-[#a3a3a3] rounded-full"></span> Cinematic Web</p>
              <p className="pl-3">Design</p>
              <p className="flex items-center gap-2 mt-4"><span className="w-1 h-1 bg-[#a3a3a3] rounded-full"></span> Next.js Development</p>
              <p className="flex items-center gap-2 mt-4"><span className="w-1 h-1 bg-[#a3a3a3] rounded-full"></span> GSAP Animations</p>
              <p className="flex items-center gap-2 mt-4"><span className="w-1 h-1 bg-[#a3a3a3] rounded-full"></span> Responsive Website</p>
              <p className="pl-3">Design</p>
              <p className="flex items-center gap-2 mt-4"><span className="w-1 h-1 bg-[#a3a3a3] rounded-full"></span> Interactive Digital</p>
              <p className="pl-3">Experiences1</p>
              <p className="flex items-center gap-2 mt-4"><span className="w-1 h-1 bg-[#a3a3a3] rounded-full"></span> Film Industry</p>
              <p className="pl-3">Platform</p>
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
      <section className="relative w-full min-h-[100vh] lg:min-h-[120vh] flex flex-col justify-center items-center bg-[#0a0a0a] overflow-hidden">
        {/* Background Hand Image */}
        <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center">
          <img 
            src="/images/projects/cineartery/hand.png" 
            alt="Hands Framing" 
            className="w-[120%] md:w-[110%] lg:w-full h-full object-contain object-center opacity-90 scale-110 md:scale-105"
          />
          {/* Subtle gradient to blend edges into background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-transparent to-[#0a0a0a]"></div>
        </div>

        {/* Text Overlay centered between hands */}
        <div className="relative z-10 w-full max-w-lg mx-auto flex flex-col items-center text-center px-4 -mt-[20%]">
          <h3 className="text-[#7E7E7E] text-[clamp(0.875rem,0.6vw+0.65rem,1.125rem)] font-[700] tracking-[0.25em] uppercase mb-2 drop-shadow-md">
            CREATIVITY
          </h3>
          <p className="text-[#7E7E7E] text-[clamp(0.75rem,0.5vw+0.55rem,1rem)] font-[300] tracking-[0.2em] uppercase mb-6">
            SET THE DIRECTION.
          </p>
          <h3 className="text-[#7E7E7E] text-[clamp(0.875rem,0.6vw+0.65rem,1.125rem)] font-[700] tracking-[0.25em] uppercase mb-2 drop-shadow-md">
            TECHNOLOGY
          </h3>
          <p className="text-[#7E7E7E] text-[clamp(0.75rem,0.5vw+0.55rem,1rem)] font-[300] tracking-[0.2em] uppercase">
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
            <div className="absolute inset-0 w-full h-full text-[clamp(8px,0.6vw+4px,12px)] font-[200] text-[#F7F3EB]">
              
              {/* Node 1 */}
              <div className="absolute bottom-[15%] md:bottom-[20%] left-[10%] md:left-[18%] flex items-end gap-3">
                <div className="text-right leading-tight">
                  <span className="font-bold text-white text-[clamp(10px,0.7vw+4px,21px)]">The brand is already<br/>established.</span>
                </div>
                <div className="w-10 h-5 md:w-16 md:h-8 rounded-t-full bg-white/20 backdrop-blur-sm border-t border-white/10 shadow-lg mb-1"></div>
              </div>

              {/* Node 2 */}
              <div className="absolute bottom-[38%] md:bottom-[45%] left-[20%] md:left-[30%] flex items-end gap-3">
                <div className="text-right leading-tight blur-[1px] ">
                  It has to work beautifully<br/>across every screen.
                </div>
                <div className="w-6 h-3 md:w-10 md:h-5 rounded-t-full bg-white/20 backdrop-blur-sm border-t border-white/10 shadow-lg mb-1"></div>
              </div>

              {/* Node 3 */}
              <div className="absolute top-[40%] md:top-[38%] left-[38%] md:left-[45%] flex items-end gap-3">
                <div className="text-right leading-tight blur-[1px]">
                  Motion should tell the<br/>story, not distract from it.
                </div>
                <div className="w-7 h-3.5 md:w-10 md:h-5 rounded-t-full bg-white/20 backdrop-blur-sm border-t border-white/10 shadow-lg mb-1"></div>
              </div>

              {/* Node 4 */}
              <div className="absolute bottom-[28%] md:bottom-[32%] left-[40%] md:left-[48%] flex items-end gap-3">
                <div className="text-right leading-tight blur-[1px]">
                  The website should be<br/>simple yet cinematic.
                </div>
                <div className="w-8 h-4 md:w-12 md:h-6 rounded-t-full bg-white/20 backdrop-blur-sm border-t border-white/10 shadow-lg mb-1"></div>
              </div>

              {/* Node 5 */}
              <div className="absolute top-[48%] md:top-[50%] left-[58%] md:left-[62%] flex items-end gap-3">
                <div className="text-right leading-tight blur-[1px]">
                  Can we make it feel<br/>cinematic without<br/>slowing it down?
                </div>
                <div className="w-7 h-3.5 md:w-10 md:h-5 rounded-t-full bg-white/20 backdrop-blur-sm border-t border-white/10 shadow-lg mb-1"></div>
              </div>

              {/* Node 6 */}
              <div className="absolute top-[28%] md:top-[30%] left-[62%] md:left-[68%] flex items-end gap-3">
                <div className="text-right leading-tight blur-[1px]">
                  Build something<br/>cinematic, tell the story<br/>we're proud to grow on.
                </div>
                <div className="w-6 h-3 md:w-8 md:h-4 rounded-t-full bg-white/20 backdrop-blur-sm border-t border-white/10 shadow-lg mb-1"></div>
              </div>

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
          <div className="relative w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-video rounded-[1.5rem] md:rounded-[2rem] border-[1.5px] border-[#3a5a7b] p-[2px] shadow-2xl overflow-hidden bg-[#0a0a0a]">
            <div className="relative w-full h-full rounded-[1.4rem] md:rounded-[1.9rem] overflow-hidden bg-black">
              <iframe 
                src="https://www.cineartery.com/" 
                title="Cineartery Live Website"
                className="w-full h-full border-none pointer-events-auto"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>
          </div>
        </div>
        
      </section>

      {/* Phone Showcase Section */}
      <section className="relative w-full py-20 sm:py-24 lg:py-32 bg-[#0c0c0c] overflow-hidden min-h-screen">
        {/* Ambient radial glow centered behind the middle column */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none opacity-40 blur-[130px]"
          style={{
            background: 'radial-gradient(circle, rgba(235, 115, 30, 0.45) 0%, rgba(180, 50, 10, 0.18) 50%, transparent 75%)'
          }}
        />

        <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_minmax(280px,380px)_1.1fr] xl:grid-cols-[1.15fr_minmax(320px,400px)_1.15fr] gap-12 lg:gap-8 xl:gap-14 items-stretch">
            
            {/* Left Column */}
            <div className="flex flex-col justify-between h-full order-1 lg:order-1 py-2 sm:py-4">
              {/* Top Title */}
              <div className="mb-10 lg:mb-0 ml-20">
                <h2 className="text-[clamp(1.125rem,2.5vw+0.25rem,4.625rem)] uppercase leading-[1em] tracking-tight">
                  <span className="font-[200] text-white/80 block">Building</span>
                  <span className="font-[200] text-white/80 block">Foundation</span>
                  <span className="font-[200] text-white/80 block mb-1">With</span>
                  <span className="font-[900] text-white block">High-Quality</span>
                  <span className="font-[900] text-white block">Output</span>
                </h2>
              </div>
              
              {/* Bottom Copy */}
              <div className="flex flex-col items-start lg:items-end text-left lg:text-right mt-auto pt-8 lg:pt-16">
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
            <div className="relative w-full flex justify-center items-center order-2 lg:order-2 my-6 lg:my-0">
              {/* Phone Wrapper with fluid clamp width that scales according to display scaler */}
              <div className="relative w-[clamp(260px,26vw,380px)] max-w-[90vw]">
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
                  className="relative z-10 w-full h-[600px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)]"
                />

                {/* Movie Clapperboard - positioned at bottom right of phone */}
                <img 
                  src="/images/projects/cineartery/clapperboard.png" 
                  alt="Movie Clapperboard" 
                  className="absolute -bottom-15 -right-6 sm:-bottom-8 sm:-right-6 lg:-bottom-25 lg:-right-14 w-[500px] h-auto object-contain z-20 pointer-events-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)]"
                />
              </div>
            </div>

            {/* Right Column - Numbered List */}
            <div className="flex flex-col justify-between h-full order-3 lg:order-3 py-2 sm:py-4 lg:pl-4 xl:pl-8 space-y-4 sm:space-y-5 lg:space-y-0">
              {[
                'Digital Transformation', 
                'Website Redesign', 
                'Website Modernization', 
                'Brand Enhancement', 
                'Technology Partner', 
                'Digital Product Design', 
                'Interactive Web Experiences', 
                'Enterprise Web Development', 
                'Digital Innovation'
              ].map((item, i) => (
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
      <section className="relative w-full min-h-screen py-24 flex flex-col justify-center items-center bg-[#0a0a0a] overflow-hidden">
        
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
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center mt-32 md:mt-48">
          
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
