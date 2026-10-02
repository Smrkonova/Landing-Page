import React from 'react';
import Image from 'next/image';
import CrewSlider from './CrewSlider';
import DisplayScaler from '@/components/DisplayScaler';

export default function CineArteryProjectPage() {
  return (
    <main className="min-h-screen bg-[#111111] text-white">
      <section className="relative overflow-hidden font-sans flex items-center min-h-screen">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 flex flex-col md:flex-row items-stretch w-full min-h-[80vh]">
          
          {/* Left Column - Details */}
          <div className="w-full md:w-1/5 pr-8 flex flex-col justify-center py-10">
            <div className="space-y-12">
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4 text-[#a3a3a3]">Case Study 1</h4>
                <div className="relative w-32 h-8">
                   <img 
                      src="/images/projects/cineartery/logo.png" 
                      alt="CineArtery Logo" 
                      className="object-contain object-left w-full h-full"
                   />
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-bold tracking-[0.2em] mb-3 text-[#a3a3a3] capitalize">Industry</h4>
                <span className="inline-block bg-[#222222] px-3 py-1.5 text-[11px] font-semibold rounded-sm text-white">Women safety</span>
              </div>

              <div>
                <h4 className="text-[10px] font-bold tracking-[0.2em] mb-3 text-[#a3a3a3] capitalize">Duration</h4>
                <span className="inline-block bg-[#222222] px-3 py-1.5 text-[11px] font-semibold rounded-sm text-white">Ongoing</span>
              </div>

              <div>
                <h4 className="text-[10px] font-bold tracking-[0.2em] mb-3 text-[#a3a3a3] capitalize">Platforms</h4>
                <div className="flex flex-col gap-2 items-start">
                  <span className="inline-block bg-[#222222] px-3 py-1.5 text-[11px] font-semibold rounded-sm text-white">Website</span>
                  <span className="inline-block bg-[#222222] px-3 py-1.5 text-[11px] font-semibold rounded-sm text-white">Shopify</span>
                  <span className="inline-block bg-[#222222] px-3 py-1.5 text-[11px] font-semibold rounded-sm text-white">Flutter</span>
                  <span className="inline-block bg-[#222222] px-3 py-1.5 text-[11px] font-semibold rounded-sm text-white">Backend</span>
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
                  <h1 className="text-3xl md:text-4xl lg:text-[44px] font-light uppercase tracking-wide leading-tight drop-shadow-lg text-white/80">
                    The Heartbeat
                  </h1>
                  <h1 className="text-3xl md:text-4xl lg:text-[44px] font-light uppercase tracking-wide leading-tight drop-shadow-lg text-white/80">
                    Of <span className="font-bold text-white">Creative</span>
                  </h1>
                  <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold uppercase tracking-wide leading-tight drop-shadow-lg text-white">
                    Collaboration
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Navigation/Services list */}
          <div className="w-full md:w-1/5 pl-8 flex flex-col justify-center items-start text-[#a3a3a3] py-10">
            <div className="space-y-4 text-[10px] md:text-[11px] tracking-widest uppercase font-medium">
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
        <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center">
          <img 
            src="/images/projects/cineartery/rolling.png" 
            alt="Rolling Background" 
            className="w-full h-full object-cover object-center opacity-40 mix-blend-lighten"
          />
          {/* Gradient overlays to fade out edges if needed */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-transparent to-[#111111]"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center px-4 mt-8">
          
          <p className="text-[11px] md:text-[12px] text-[#888888] font-medium tracking-wide mb-6">
            Back story
          </p>
          
          <p className="text-[#999999] text-[11px] md:text-[13px] max-w-[420px] mx-auto leading-[1.8] mb-20 text-center font-light">
            The vision was already there, Smrkonova<br/>
            stepped in to translate it into an<br/>
            experience that people could see, feel<br/>
            and enjoy interacting with. Every<br/>
            animation, transition, motion and<br/>
            interaction was engineered to strengthen<br/>
            the story behind the brand.
          </p>

          <h2 className="text-[#cccccc] text-2xl md:text-3xl lg:text-[34px] font-light tracking-[0.1em] uppercase leading-[1.4] mb-8">
            THE VISION WAS ALIVE.<br/>
            THE EXPERIENCE IS
          </h2>

          <h1 className="text-[100px] md:text-[160px] lg:text-[220px] font-black uppercase tracking-tight text-[#222222] leading-[0.8] select-none w-full text-center drop-shadow-2xl opacity-95">
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
        <div className="relative z-10 w-full max-w-lg mx-auto flex flex-col items-center text-center px-4 -mt-[10%]">
          <h3 className="text-[#d1d1d1] text-sm md:text-base lg:text-lg font-bold tracking-[0.25em] uppercase mb-2 drop-shadow-md">
            CREATIVITY
          </h3>
          <p className="text-[#777777] text-xs md:text-sm lg:text-base font-light tracking-[0.2em] uppercase mb-6">
            SET THE DIRECTION.
          </p>
          <h3 className="text-[#d1d1d1] text-sm md:text-base lg:text-lg font-bold tracking-[0.25em] uppercase mb-2 drop-shadow-md">
            TECHNOLOGY
          </h3>
          <p className="text-[#777777] text-xs md:text-sm lg:text-base font-light tracking-[0.2em] uppercase">
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
            <div className="absolute inset-0 w-full h-full text-[8px] md:text-[10px] lg:text-xs font-medium text-white/90">
              
              {/* Node 1 */}
              <div className="absolute bottom-[15%] md:bottom-[20%] left-[10%] md:left-[18%] flex items-end gap-3">
                <div className="text-right leading-tight">
                  <span className="font-bold text-white text-[10px] md:text-sm">The brand is already<br/>established.</span>
                </div>
                <div className="w-10 h-5 md:w-16 md:h-8 rounded-t-full bg-white/20 backdrop-blur-sm border-t border-white/10 shadow-lg mb-1"></div>
              </div>

              {/* Node 2 */}
              <div className="absolute bottom-[38%] md:bottom-[45%] left-[20%] md:left-[30%] flex items-end gap-3">
                <div className="text-right leading-tight">
                  It has to work beautifully<br/>across every screen.
                </div>
                <div className="w-6 h-3 md:w-10 md:h-5 rounded-t-full bg-white/20 backdrop-blur-sm border-t border-white/10 shadow-lg mb-1"></div>
              </div>

              {/* Node 3 */}
              <div className="absolute top-[40%] md:top-[38%] left-[38%] md:left-[45%] flex items-end gap-3">
                <div className="text-right leading-tight">
                  Motion should tell the<br/>story, not distract from it.
                </div>
                <div className="w-7 h-3.5 md:w-10 md:h-5 rounded-t-full bg-white/20 backdrop-blur-sm border-t border-white/10 shadow-lg mb-1"></div>
              </div>

              {/* Node 4 */}
              <div className="absolute bottom-[28%] md:bottom-[32%] left-[40%] md:left-[48%] flex items-end gap-3">
                <div className="text-right leading-tight">
                  The website should be<br/>simple yet cinematic.
                </div>
                <div className="w-8 h-4 md:w-12 md:h-6 rounded-t-full bg-white/20 backdrop-blur-sm border-t border-white/10 shadow-lg mb-1"></div>
              </div>

              {/* Node 5 */}
              <div className="absolute top-[48%] md:top-[50%] left-[58%] md:left-[62%] flex items-end gap-3">
                <div className="text-right leading-tight">
                  Can we make it feel<br/>cinematic without<br/>slowing it down?
                </div>
                <div className="w-7 h-3.5 md:w-10 md:h-5 rounded-t-full bg-white/20 backdrop-blur-sm border-t border-white/10 shadow-lg mb-1"></div>
              </div>

              {/* Node 6 */}
              <div className="absolute top-[28%] md:top-[30%] left-[62%] md:left-[68%] flex items-end gap-3">
                <div className="text-right leading-tight">
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
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light uppercase tracking-wide leading-tight mb-8">
            <span className="text-[#a3a3a3]">Before "Action"</span><br/>
            <span className="font-bold text-white">There's connection</span>
          </h2>
          <p className="text-[#888888] text-sm md:text-base max-w-sm leading-relaxed text-center font-light">
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
      <section className="relative w-full py-24 md:py-32 bg-[#111111] overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-16 items-start">
            
            {/* Left Column */}
            <div className="flex flex-col justify-between h-full min-h-[600px] order-2 lg:order-1 pt-8">
              {/* Top Title */}
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-[52px] font-thin uppercase text-[#e0e0e0] leading-[1.1] mb-1 tracking-wide">
                  Building<br/>
                  Foundation<br/>
                  With
                </h2>
                <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black uppercase text-white leading-[1.1] tracking-wide">
                  High-Quality<br/>
                  Output
                </h2>
              </div>
              
              {/* Bottom Text */}
              <div className="flex flex-col items-start lg:items-end text-left lg:text-right mt-auto pb-12">
                <p className="text-[#a3a3a3] text-[10px] md:text-[11px] max-w-[280px] leading-relaxed mb-10 font-medium">
                  Cineartery now has a scalable architecture, intuitive<br className="hidden lg:block"/>
                  user experience, and a premium digital presence<br className="hidden lg:block"/>
                  designed to increase engagement, encourage loyalty,<br className="hidden lg:block"/>
                  and adapt as the platform expands.
                </p>
                <div className="text-xs md:text-sm font-semibold tracking-widest text-[#d1d1d1] uppercase leading-[1.8]">
                  Creative<br/>
                  Technology<br/>
                  For Entertainment
                </div>
              </div>
            </div>

            {/* Center Column - Image */}
            <div className="relative w-full lg:w-[380px] flex justify-center items-start order-1 lg:order-2 mt-8 lg:mt-24">
              {/* SVG Background Glow */}
              <img 
                src="/images/projects/cineartery/glow.svg" 
                alt="Background Glow" 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] max-w-[900px] object-contain pointer-events-none z-0 opacity-90"
              />
              
              <img 
                src="/images/projects/cineartery/phone.png" 
                alt="Phone Mockup" 
                className="relative z-10 w-[80%] lg:w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Right Column - List */}
            <div className="flex flex-col gap-7 justify-start lg:pl-8 order-3 pt-8">
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
                <div key={i} className="flex items-center gap-6">
                  <span className="flex flex-shrink-0 items-center justify-center w-8 h-8 rounded-full bg-white/5 text-[#777777] text-xs font-semibold shadow-inner">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] md:text-xs text-[#d1d1d1] uppercase tracking-[0.15em] font-medium">
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
                    <p className="text-lg md:text-xl lg:text-3xl font-light text-[#a3a3a3] leading-relaxed">
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
          
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-thin uppercase tracking-wide text-white leading-[1.2] mb-12">
            A Foundation<br/>
            For <span className="font-bold">What's Next</span>
          </h2>

          <div className="flex flex-col gap-8 text-[#888888] text-[11px] md:text-xs lg:text-sm font-light max-w-xl mx-auto leading-[1.8] mb-16">
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
            <button className="w-full sm:w-auto px-10 py-4 bg-[#333333] hover:bg-[#444444] text-white text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase rounded-[4px] transition-colors duration-300">
              Create Yours
            </button>
            <button className="w-full sm:w-auto px-10 py-4 bg-transparent border border-[#444444] hover:border-white text-white text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase rounded-[4px] transition-colors duration-300">
              Next Project
            </button>
          </div>

        </div>

      </section>
    </main>
  );
}
