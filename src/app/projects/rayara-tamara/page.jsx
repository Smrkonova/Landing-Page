import React from 'react';


export default function RayaraTamaraProject() {
  return (
    <main>
      <section className="min-h-screen bg-[#E3D6CA] relative overflow-hidden font-sans flex items-center">
      {/* Background Side Abstract Image - Desktop Only */}
      <div className="hidden md:flex absolute right-0 top-0 bottom-0 h-full w-1/3 pointer-events-none justify-end">
        <img
          src="/images/projects/rayara-tamara/Layer_1.png"
          alt="Side Abstract"
          className="h-full object-cover object-right opacity-60"
        />
      </div>

      {/* MOBILE VIEW (matches exact mobile design) */}
      <div className="block md:hidden w-full px-5 py-10 relative z-10 mt-18">
        {/* 1. Header / Case Study Title */}
        <div className="block md:hidden  absolute flex right-0 top-0 bottom-0 h- w-1/3 pointer-events-none justify-end">
        <img
          src="/images/projects/rayara-tamara/vector.png"
          alt="Side Abstract"
          className="h-full object-cover object-right opacity-60"
        />
      </div>
        <div className="mb-6">
          <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7d7566] mb-2">Case Study 1</h4>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wider uppercase text-[#443e2f] mb-1">RAYARA TAMARA</h1>
          <p className="text-sm font-normal text-[#7d7566]">Ancient roots, timeless taste</p>
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
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider mb-1.5 drop-shadow-md">
                Evoking a feeling
              </h2>
              <h3 className="text-sm sm:text-base font-light uppercase tracking-wider text-white/85 drop-shadow-md leading-relaxed">
                Before it even<br />looks beautiful
              </h3>
            </div>
          </div>
        </div>

        {/* 3. Industry & Duration */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-normal text-[#7d7566] mb-2">Industry</h4>
            <span className="inline-block bg-[#D7CCBE] px-4 py-1.5 text-xs font-semibold rounded shadow-xs text-[#5c564b]">
              Restaurant
            </span>
          </div>

          <div>
            <h4 className="text-sm font-normal text-[#7d7566] mb-2">Duration</h4>
            <span className="inline-block bg-[#c5baa9] px-4 py-1.5 text-xs font-semibold rounded shadow-xs text-[#5c564b]">
              Ongoing
            </span>
          </div>
        </div>

        {/* 4. Platforms */}
        <div className="mt-6">
          <h4 className="text-sm font-normal text-[#7d7566] mb-2">Platforms</h4>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="inline-block bg-[#D7CCBE] px-4 py-1.5 text-xs font-semibold rounded shadow-xs text-[#5c564b]">Website</span>
            <span className="inline-block bg-[#D7CCBE] px-4 py-1.5 text-xs font-semibold rounded shadow-xs text-[#5c564b]">Shopify</span>
            <span className="inline-block bg-[#D7CCBE] px-4 py-1.5 text-xs font-semibold rounded shadow-xs text-[#5c564b]">Flutter</span>
            <span className="inline-block bg-[#D7CCBE] px-4 py-1.5 text-xs font-semibold rounded shadow-xs text-[#5c564b]">Backend</span>
          </div>
        </div>

        {/* 5. Divider Line */}
        <div className="w-full border-t border-[#5c564b]/20 my-8"></div>

        {/* 6. Disciplines + Counter */}
        <div>
          <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7d7566] mb-4">
            Disciplines
          </h4>
          <div className="flex justify-between items-end">
            <div className="space-y-3 font-semibold text-sm tracking-wide text-[#5c564b]">
              <p className="hover:text-[#383327] transition-colors cursor-pointer">Strategy</p>
              <p className="hover:text-[#383327] transition-colors cursor-pointer">UX/UI</p>
              <p className="hover:text-[#383327] transition-colors cursor-pointer">Development</p>
              <p className="hover:text-[#383327] transition-colors cursor-pointer">Brand</p>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP VIEW */}
      <div className="hidden md:flex max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 flex-row items-stretch w-full min-h-[80vh]">

        {/* Left Column - Details */}
        <div className="w-full md:w-1/5 pr-8 text-[#5c564b] flex flex-col justify-between py-10">

          <div className="space-y-10">
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase mb-3 text-[#8b8273]">Case Study 1</h4>
              <h2 className="text-sm font-bold tracking-widest uppercase text-[#5c564b] mb-1">RAYARA TAMARA</h2>
              <p className="text-sm text-[#8b8273]">Ancient roots, timeless taste</p>
            </div>

            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase mb-3 text-[#8b8273]">Industry</h4>
              <span className="inline-block bg-[#D7CCBE] px-4 py-1.5 text-xs font-bold rounded shadow-sm text-[#5c564b]">Restaurant</span>
            </div>

            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase mb-3 text-[#8b8273]">Duration</h4>
              <span className="inline-block bg-[#c5baa9] px-4 py-1.5 text-xs font-bold rounded shadow-sm text-[#5c564b]">Ongoing</span>
            </div>

            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase mb-3 text-[#8b8273]">Platforms</h4>
              <div className="flex flex-col gap-2 items-start">
                <span className="inline-block bg-[#D7CCBE] px-4 py-1.5 text-xs font-bold rounded shadow-sm text-[#5c564b]">Website</span>
                <span className="inline-block bg-[#D7CCBE] px-4 py-1.5 text-xs font-bold rounded shadow-sm text-[#5c564b]">Shopify</span>
                <span className="inline-block bg-[#D7CCBE] px-4 py-1.5 text-xs font-bold rounded shadow-sm text-[#5c564b]">Flutter</span>
                <span className="inline-block bg-[#D7CCBE] px-4 py-1.5 text-xs font-bold rounded shadow-sm text-[#5c564b]">Backend</span>
              </div>
            </div>
          </div>

        </div>

        {/* Center Column - Banner Image */}
        <div className="w-full md:w-3/5 flex justify-center py-4 relative px-4">
          <div className="p-2 sm:p-2.5 rounded-[36px] border border-[#5c564b]/30 shadow-2xl w-full h-full min-h-[500px]">
            <div className="relative rounded-[28px] overflow-hidden w-full h-full min-h-[500px]">
              <img
                src="/images/projects/rayara-tamara/banner.png"
                alt="Rayara Tamara Banner"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              <div className="absolute bottom-12 left-10 text-white right-10">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider mb-2 drop-shadow-lg">Evoking a feeling</h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light uppercase tracking-wider text-white/80 drop-shadow-lg">Before it even<br />looks beautiful</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Navigation/Services list */}
        <div className="w-full md:w-1/5 pl-4 flex flex-col justify-end items-end text-[#5c564b] py-10">
          <div className="mt-auto space-y-4 font-semibold text-sm tracking-wide text-[#8b8273]">
            <p className="hover:text-[#5c564b] transition-colors cursor-pointer">Strategy</p>
            <p className="hover:text-[#5c564b] transition-colors cursor-pointer">UX/UI</p>
            <p className="hover:text-[#5c564b] transition-colors cursor-pointer">Development</p>
            <p className="hover:text-[#5c564b] transition-colors cursor-pointer">Brand</p>
          </div>
        </div>

      </div>
      </section>

      {/* Story Worth Preserving Section */}
      <section 
        className="relative min-h-screen flex flex-col items-center justify-center font-sans"
        style={{
          backgroundColor: '#2B2D16AD',
          backgroundImage: 'url("/images/projects/rayara-tamara/story-worth.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'color-dodge'
        }}
      >
        <div className="relative z-10 text-center flex flex-col items-center justify-center px-4 max-w-4xl mx-auto drop-shadow-2xl">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.2em] text-[#d2a760] mb-2 uppercase">
            Rooting in a
          </h3>
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-bold uppercase tracking-wider text-[#d2a760] leading-tight">
            Story Worth<br/>Preserving
          </h2>
          <p className="mt-10 text-lg md:text-xl font-medium text-[#d2a760] opacity-90">
            Something all of the team rooted for all along.
          </p>
        </div>
      </section>
      {/* Experience Section */}
      <section className="min-h-screen bg-[#E3D6CA] relative overflow-hidden font-sans py-20 flex flex-col items-center">
        {/* Background Side Abstract Image */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[70%] w-1/4 pointer-events-none flex justify-start opacity-70">
          <img
            src="/images/projects/rayara-tamara/abstract-left.png"
            alt="Left Abstract"
            className="h-full object-contain object-left"
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 w-full relative z-10 flex flex-col items-center pt-10">
          
          {/* Top Text */}
          <div className="text-center text-[#5c564b] mb-20 space-y-2">
            <h3 className="text-xl md:text-2xl font-light uppercase tracking-widest text-[#5c564b]/90">The meal lasts an hour.</h3>
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-[#5c564b]">The experience lasts much longer.</h2>
            <h3 className="text-xl md:text-2xl font-light uppercase tracking-widest text-[#5c564b]/90 pt-1">Smrkonova takes fine dining</h3>
            <h3 className="text-xl md:text-2xl font-light uppercase tracking-widest text-[#5c564b]/90">experience, extends beyond food.</h3>
          </div>

          {/* Center Graphic */}
          <div className="relative w-full max-w-4xl flex items-center justify-center mt-10">
            {/* The leaf */}
            <div className="relative w-full max-w-3xl flex justify-center items-center">
               <img src="/images/projects/rayara-tamara/leaf.png" alt="Leaf" className="w-[110%] md:w-[120%] max-w-none h-auto object-contain" />
               
               {/* The plate centered on the leaf */}
               <div className="absolute inset-0 flex items-center justify-center">
                  <img src="/images/projects/rayara-tamara/plate.png" alt="Plate" className="w-[65%] md:w-[55%] h-auto drop-shadow-2xl" />
               </div>
            </div>
            
            {/* The floating text words */}
            <div className="absolute inset-0 pointer-events-none drop-shadow-md">
                <span className="absolute top-[8%] left-[22%] text-[#d2a760] font-serif text-2xl md:text-3xl tracking-widest uppercase">Craft</span>
                <span className="absolute top-[0%] right-[30%] text-[#d2a760] font-serif text-3xl md:text-4xl tracking-widest uppercase">Legacy</span>
                
                <span className="absolute top-[38%] left-[10%] text-[#d2a760] font-serif text-lg md:text-xl tracking-widest uppercase">Character</span>
                <span className="absolute top-[42%] right-[32%] text-[#d2a760] font-serif text-xl tracking-widest uppercase z-10">Voice</span>
                <span className="absolute top-[48%] right-[5%] text-[#d2a760] font-serif text-lg md:text-xl tracking-widest uppercase">Identity</span>
                
                <span className="absolute top-[60%] left-[36%] text-[#d2a760] font-serif text-2xl md:text-3xl tracking-widest uppercase z-10 drop-shadow-xl">Meaning</span>
                
                <span className="absolute bottom-[35%] left-[5%] text-[#d2a760] font-serif text-xl md:text-2xl tracking-widest uppercase">Continuity</span>
                <span className="absolute bottom-[35%] right-[15%] text-[#d2a760] font-serif text-2xl md:text-3xl tracking-widest uppercase">Ritual</span>
                
                <span className="absolute bottom-[5%] left-[25%] text-[#d2a760] font-serif text-2xl md:text-3xl tracking-widest uppercase">Culture</span>
                <span className="absolute bottom-[10%] right-[25%] text-[#d2a760] font-serif text-3xl md:text-4xl tracking-widest uppercase">Story</span>
            </div>
          </div>

        </div>
      </section>
      {/* Authenticity Section */}
      <section className="bg-[#E3D6CA] relative overflow-hidden font-sans py-32 flex flex-col items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto space-y-10">
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-serif text-[#4a5332] leading-none tracking-tight">
            authenticity is<br />the goal
          </h2>
          <p className="text-lg md:text-xl text-[#c59e5e] font-medium tracking-wide">
            but, how to choose a single story from many that feel true?
          </p>
        </div>
      </section>
      {/* The Road Not Taken Section */}
      <section className="bg-[#2B2D16] relative overflow-hidden font-sans py-24 flex flex-col items-center">
        <style dangerouslySetInnerHTML={{__html: `
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
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-light uppercase tracking-widest text-[#d8c3a5] mb-12 leading-snug">
              We went down<br />the road not taken
            </h2>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center max-w-4xl mx-auto text-left text-sm text-[#d8c3a5] opacity-80 font-medium">
              <p className="flex-1 leading-relaxed">
                Traditionally teams begin with listening to the client and drafting a logo. We took another road. We met the founders, asked them about their aspirations with the space, explored the area, and searched for the story that could only belong to this place.
              </p>
              <p className="flex-1 leading-relaxed">
                That search took us through thousands of restaurants and hospitality brands around the world. Not for inspiration, we were looking for what's deep within, what's real.
              </p>
            </div>
          </div>

        </div>

        {/* Middle Chat Slider (Full Width) */}
        <div className="w-full overflow-hidden py-10 relative">
            
            {/* Wrapper for marquee */}
            <div className="flex w-max animate-marquee space-x-12 px-6">
              {/* Duplicate the items for seamless looping */}
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  {/* Item 1 */}
                  <div className="flex flex-col gap-4">
                    <div className="relative border border-[#655d49] rounded-[2rem] p-6 w-[280px] text-sm text-[#d8c3a5] chat-tail-outline shadow-lg">
                      <span className="opacity-70 text-xs block mb-1">Mohit:</span>
                      "When someone walks out after eating, what do you want them to remember?"
                    </div>
                    <div className="pl-6 text-[#d8c3a5]/70 text-lg font-light mt-6">The first<br/>discovery</div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex flex-col gap-4 mt-16">
                    <div className="relative bg-[#5c3a21] rounded-[2rem] p-6 w-[280px] text-sm text-[#d8c3a5] chat-tail-solid-brown shadow-lg">
                      <span className="opacity-70 text-xs block mb-1">Chandrashekhar:</span>
                      <strong className="font-semibold text-base">"No loud music. No flashy interiors. Everything should feel warm."</strong>
                    </div>
                    <div className="pl-6 text-[#d8c3a5]/70 text-lg font-light mt-6">A design brief<br/>without mentioning<br/>design</div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex flex-col gap-4">
                    <div className="relative bg-[#585d33] rounded-[2rem] p-6 w-[280px] text-sm text-[#d8c3a5] chat-tail-solid-green shadow-lg">
                      <span className="opacity-70 text-xs block mb-1">Chandrashekhar:</span>
                      <strong className="font-semibold text-base">"I want people to feel like they've stepped into Karnataka's culture."</strong>
                    </div>
                    <div className="pl-6 text-[#d8c3a5]/70 text-lg font-light mt-6">The philosophy</div>
                  </div>

                  {/* Item 4 */}
                  <div className="flex flex-col gap-4 mt-16">
                    <div className="relative border border-[#655d49] rounded-[2rem] p-6 w-[280px] text-sm text-[#d8c3a5] chat-tail-outline shadow-lg">
                      <span className="opacity-70 text-xs block mb-1">Mohit:</span>
                      "What should someone feel in the first ten seconds?"
                    </div>
                  </div>
                  
                  {/* Item 5 */}
                  <div className="flex flex-col gap-4">
                     <div className="relative bg-[#585d33] rounded-[2rem] p-6 w-[280px] text-sm text-[#d8c3a5] chat-tail-solid-green shadow-lg">
                      <span className="opacity-70 text-xs block mb-1">Chandrashekhar:</span>
                      <strong className="font-semibold text-base">"Calm. Like visiting their ancestral home."</strong>
                    </div>
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
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-light uppercase tracking-widest text-[#d8c3a5] mb-16 leading-snug">
                The moment<br />the project changed
              </h2>
              <div className="relative border-2 border-[#585d33] rounded-[3rem] p-10 md:p-14 max-w-lg chat-tail-large">
                 <p className="text-xl md:text-2xl lg:text-[1.75rem] font-semibold text-white leading-relaxed text-center">
                   "I want to share the happiness I once felt, so others can feel at home too."
                 </p>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* Rayuru's Tamara Section */}
      <section className="bg-[#E3D6CA] relative overflow-hidden font-sans py-24 flex flex-col items-center">
        <div className="max-w-[1440px] mx-auto px-4 w-full">
          
          {/* Top text */}
          <div className="text-center mb-20 text-[#5c564b]">
            <h3 className="text-xl md:text-3xl font-light uppercase tracking-widest mb-1 opacity-90">Exploring Waywards</h3>
            <h3 className="text-xl md:text-3xl font-light uppercase tracking-widest mb-1 opacity-90">We discovered their love for Rayuru</h3>
            <h3 className="text-xl md:text-3xl font-light uppercase tracking-widest mb-4 opacity-90">More so.. we found it in</h3>
            <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black uppercase tracking-wider text-[#585d33] mb-10 leading-none">
              Rayuru's Tamara
            </h2>
            <p className="max-w-lg mx-auto text-sm md:text-base font-medium opacity-80 text-center leading-relaxed">
              What seemed like a simple name revealed a rich cultural legacy, a unique visual language, and a story the world had yet to discover. <strong className="font-bold">Rayara</strong> became our way of bringing that story to life.
            </p>
          </div>

          {/* Grid Area */}
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 mb-20">
            
            {/* Left Column */}
            <div className="flex flex-col justify-center gap-16 lg:w-1/4 text-center">
              <div className="flex flex-col items-center">
                {/* Placeholder for icon */}
                <div className="w-20 h-20 mb-6 flex items-center justify-center opacity-60">
                   <svg className="w-12 h-12 text-[#585d33]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <h4 className="text-[#585d33] font-bold tracking-widest uppercase mb-3 text-sm md:text-base">Brand Name<br/>& Identity</h4>
                <p className="text-xs text-[#5c564b] opacity-80 max-w-[200px] leading-relaxed">Rooted in Karnataka's heritage, expressing warmth, peace and timeless temple-inspired hospitality.</p>
              </div>
              <div className="flex flex-col items-center">
                {/* Placeholder for icon */}
                <div className="w-20 h-20 mb-6 flex items-center justify-center opacity-60">
                   <svg className="w-12 h-12 text-[#585d33]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <h4 className="text-[#585d33] font-bold tracking-widest uppercase mb-3 text-sm md:text-base">Digital<br/>Experience</h4>
                <p className="text-xs text-[#5c564b] opacity-80 max-w-[200px] leading-relaxed">Seamlessly translating Karnataka's warmth, heritage and hospitality across every digital interaction.</p>
              </div>
            </div>

            {/* Center Image */}
            <div className="lg:w-2/4 flex justify-center items-center py-10 lg:py-0">
              <img src="/images/projects/rayara-tamara/god.png" alt="Rayuru's Tamara" className="w-full h-auto max-w-lg xl:max-w-xl shadow-2xl rounded-sm object-contain" />
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-center gap-16 lg:w-1/4 text-center">
              <div className="flex flex-col items-center">
                {/* Placeholder for icon */}
                <div className="w-20 h-20 mb-6 flex items-center justify-center opacity-60">
                   <svg className="w-12 h-12 text-[#585d33]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M20.24 12.24a5 5 0 00-7.08-7.08L12 8.16l-1.16-1.16a5 5 0 00-7.08 7.08l8.24 8.24 8.24-8.24z"></path></svg>
                </div>
                <h4 className="text-[#585d33] font-bold tracking-widest uppercase mb-3 text-sm md:text-base">Logo<br/>Design</h4>
                <p className="text-xs text-[#5c564b] opacity-80 max-w-[200px] leading-relaxed">A timeless symbol reflecting Rayara's blessings, copper traditions and cultural pride.</p>
              </div>
              <div className="flex flex-col items-center">
                {/* Placeholder for icon */}
                <div className="w-20 h-20 mb-6 flex items-center justify-center opacity-60">
                   <svg className="w-12 h-12 text-[#585d33]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg>
                </div>
                <h4 className="text-[#585d33] font-bold tracking-widest uppercase mb-3 text-sm md:text-base">Typography<br/>Iconography</h4>
                <p className="text-xs text-[#5c564b] opacity-80 max-w-[200px] leading-relaxed">Elegant letterforms balancing traditional character with refined contemporary readability and warmth.</p>
              </div>
            </div>

          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center pt-16 mt-8">
            <div className="flex flex-col items-center">
                {/* Placeholder for icon */}
                <div className="w-20 h-20 mb-6 flex items-center justify-center opacity-60">
                   <svg className="w-12 h-12 text-[#585d33]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
                <h4 className="text-[#585d33] font-bold tracking-widest uppercase mb-3 text-sm md:text-base">Visual<br/>Language</h4>
                <p className="text-xs text-[#5c564b] opacity-80 max-w-[220px] mx-auto leading-relaxed">Spaces inspired by temple architecture, handcrafted textures and curated artwork that tells the story.</p>
            </div>
            <div className="flex flex-col items-center">
                {/* Placeholder for icon */}
                <div className="w-20 h-20 mb-6 flex items-center justify-center opacity-60">
                   <svg className="w-12 h-12 text-[#585d33]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                </div>
                <h4 className="text-[#585d33] font-bold tracking-widest uppercase mb-3 text-sm md:text-base">Colour<br/>System</h4>
                <p className="text-xs text-[#5c564b] opacity-80 max-w-[220px] mx-auto leading-relaxed">Earthy tones inspired by copper, stone, wood and Karnataka's sacred landscapes.</p>
            </div>
            <div className="flex flex-col items-center">
                {/* Placeholder for icon */}
                <div className="w-20 h-20 mb-6 flex items-center justify-center opacity-60">
                   <svg className="w-12 h-12 text-[#585d33]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                </div>
                <h4 className="text-[#585d33] font-bold tracking-widest uppercase mb-3 text-sm md:text-base">Marketing<br/>Collaterals</h4>
                <p className="text-xs text-[#5c564b] opacity-80 max-w-[220px] mx-auto leading-relaxed">Menus, stationery and hospitality touchpoints designed with timeless craftsmanship and cultural authenticity.</p>
            </div>
            <div className="flex flex-col items-center">
                {/* Placeholder for icon */}
                <div className="w-20 h-20 mb-6 flex items-center justify-center opacity-60">
                   <svg className="w-12 h-12 text-[#585d33]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                </div>
                <h4 className="text-[#585d33] font-bold tracking-widest uppercase mb-3 text-sm md:text-base">Future<br/>Market Strategy</h4>
                <p className="text-xs text-[#5c564b] opacity-80 max-w-[220px] mx-auto leading-relaxed">Building lasting relationships through community participation and authentic cultural experiences.</p>
            </div>
          </div>

        </div>
      </section>
      {/* Venturing Deep Banner Section */}
      <section className="bg-[#C08C45] relative font-sans py-24 md:py-32 flex flex-col items-center">
        <div className="max-w-4xl mx-auto px-4 w-full text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white uppercase tracking-[0.15em] leading-loose">
            Venturing deep in the world<br />
            of Rayaru, it all started<br />
            making sense
          </h2>
        </div>
      </section>
      {/* Culture Fused Section */}
      <section className="bg-[#E3D6CA] relative overflow-hidden font-sans py-24 flex flex-col items-center">
        <div className="max-w-[1200px] mx-auto px-4 w-full relative z-10">
          
          {/* Header */}
          <div className="text-center mb-24 text-[#5c564b]">
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-light uppercase tracking-wide mb-8 leading-tight">
              <span className="font-bold text-[#585d33]">Culture</span> slowly<br />
              fused into <span className="font-bold text-[#585d33]">Design</span>
            </h2>
            <p className="max-w-md mx-auto text-sm md:text-base font-medium opacity-80 leading-relaxed">
              Remembering what we feel when we step into the humble abode's home, we slowly starting building the restaurant elements, creating an atmosphere.
            </p>
          </div>

          {/* Cards container */}
          <div className="flex flex-col gap-12">
            
            {/* The Cow Card */}
            <div className="bg-[#585d33] rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative shadow-lg min-h-[450px]">
              <div className="w-full md:w-5/12 text-white z-10 pl-2 md:pl-10 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-light tracking-widest uppercase mb-8">The Cow</h3>
                <p className="text-sm md:text-base opacity-90 leading-relaxed font-light">
                  Represents nourishment, purity, abundance, and sacred hospitality - reflecting the soulful connection between tradition, food, and care.
                </p>
              </div>
              <div className="w-full md:w-7/12 flex justify-center md:justify-end items-end relative h-full">
                 <img src="/images/projects/rayara-tamara/cow.png" alt="The Cow" className="w-full h-auto max-h-[350px] md:max-h-[450px] object-contain object-center md:object-right-bottom" />
              </div>
            </div>

            {/* Lotus Mandala Card */}
            <div className="bg-[#C08C45] rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row-reverse items-center justify-between gap-10 overflow-hidden relative shadow-lg min-h-[450px]">
              <div className="w-full md:w-5/12 text-white z-10 pr-2 md:pr-10 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-light tracking-widest uppercase mb-8">Lotus Mandala</h3>
                <p className="text-sm md:text-base opacity-90 leading-relaxed font-light">
                  Inspired by ritual symbolism and handcrafted ornamentation, the mandala evokes harmony, timelessness, devotion, and artisanal detail.
                </p>
              </div>
              <div className="w-full md:w-7/12 flex justify-center md:justify-start items-end relative h-full">
                 <img src="/images/projects/rayara-tamara/flower.png" alt="Lotus Mandala" className="w-full h-auto max-h-[350px] md:max-h-[450px] object-contain object-center md:object-left-bottom" />
              </div>
            </div>

            {/* Copper Plate Card */}
            <div className="bg-[#F1EBE0] rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative shadow-lg min-h-[450px]">
              <div className="w-full md:w-5/12 text-[#5c564b] z-10 pl-2 md:pl-10 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-light tracking-widest uppercase mb-8">Copper Plate</h3>
                <p className="text-sm md:text-base opacity-90 leading-relaxed font-medium mb-6">
                  The circular emblem references the traditional copper serving plate - a symbol of heritage dining, warmth, and the essence of "Guruji's Copper Plate."
                </p>
                <p className="text-sm md:text-base opacity-90 leading-relaxed font-medium">
                  The Rayara Tamara identity brings together tradition, ritual, and hospitality, creating a brand experience that honours heritage while feeling enduring, warm, and contemporary.
                </p>
              </div>
              <div className="w-full md:w-7/12 flex justify-center md:justify-end items-center relative h-full">
                 <img src="/images/projects/rayara-tamara/copper-plate.png" alt="Copper Plate" className="w-[85%] md:w-[95%] h-auto max-h-[350px] md:max-h-[450px] object-contain object-center md:object-right" />
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Heritage Inspired Gallery Section */}
      <section className="bg-[#E3D6CA] relative overflow-hidden font-sans py-24 flex flex-col items-center">
        <div className="max-w-[1440px] mx-auto px-4 w-full">
          
          {/* Header */}
          <div className="text-center mb-16 text-[#5c564b]">
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-light uppercase tracking-widest mb-10 leading-snug">
              For a<br />
              <span className="font-bold text-[#585d33]">Heritage-Inspired</span><br />
              South Indian Dining<br />
              Experience
            </h2>
            <div className="max-w-2xl mx-auto space-y-6 text-sm md:text-base font-medium opacity-80 leading-relaxed text-[#5c564b]">
              <p>
                Rayara Tamara draws inspiration from the timeless tradition of serving food on handcrafted copper plates, symbols of warmth, nourishment, hospitality, and ritual. Rooted in cultural memory and artisanal craftsmanship, the brand reinterprets traditional dining through a refined contemporary lens.
              </p>
              <p>
                The identity combines sacred ornamental forms, earthy oxidized greens, and ancient copper tones to create a visual language that feels rooted, elegant, and enduring.
              </p>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mt-20">
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
      <section className="bg-[#E1D8CC] relative overflow-hidden font-sans py-32 flex flex-col items-center">
        {/* Subtle mandala background accent */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none opacity-[0.03]">
           <img src="/images/projects/rayara-tamara/flower.png" alt="" className="w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-150" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 w-full relative z-10">
          
          {/* Header */}
          <div className="text-center mb-28">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light uppercase tracking-widest text-[#585d33] leading-snug">
              Every touchpoint spoke<br />
              the same visual language.
            </h2>
          </div>

          {/* Color Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-20 gap-x-8 max-w-5xl mx-auto">
            
            {/* Color 1 */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-full mb-8 bg-gradient-to-tr from-[#b86d39] via-[#e59868] to-[#f4c8aa] shadow-lg group-hover:scale-105 transition-transform duration-500 ease-out"></div>
              <p className="text-sm md:text-base font-medium text-[#7d7566] tracking-wider uppercase">Ancient copper</p>
            </div>

            {/* Color 2 */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-full mb-8 bg-[#2B3524] shadow-lg group-hover:scale-105 transition-transform duration-500 ease-out"></div>
              <p className="text-sm md:text-base font-medium text-[#7d7566] tracking-wider uppercase">Royal grove</p>
            </div>

            {/* Color 3 */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-full mb-8 bg-[#512D18] shadow-lg group-hover:scale-105 transition-transform duration-500 ease-out"></div>
              <p className="text-sm md:text-base font-medium text-[#7d7566] tracking-wider uppercase">Arecanut brown</p>
            </div>

            {/* Color 4 */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-full mb-8 bg-[#E8DCC3] shadow-lg border border-[#5c564b]/5 group-hover:scale-105 transition-transform duration-500 ease-out"></div>
              <p className="text-sm md:text-base font-medium text-[#7d7566] tracking-wider uppercase">Palm leaf cream</p>
            </div>

            {/* Color 5 */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-full mb-8 bg-[#B58A36] shadow-lg group-hover:scale-105 transition-transform duration-500 ease-out"></div>
              <p className="text-sm md:text-base font-medium text-[#7d7566] tracking-wider uppercase">Turmeric gold</p>
            </div>

            {/* Color 6 */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-full mb-8 bg-[#2D2A26] shadow-lg group-hover:scale-105 transition-transform duration-500 ease-out"></div>
              <p className="text-sm md:text-base font-medium text-[#7d7566] tracking-wider uppercase">Temple charcoal</p>
            </div>

            {/* Color 7 */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-full mb-8 bg-[#5E6531] shadow-lg group-hover:scale-105 transition-transform duration-500 ease-out"></div>
              <p className="text-sm md:text-base font-medium text-[#7d7566] tracking-wider uppercase">Lotus leaf</p>
            </div>

            {/* Color 8 */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-full mb-8 bg-[#994726] shadow-lg group-hover:scale-105 transition-transform duration-500 ease-out"></div>
              <p className="text-sm md:text-base font-medium text-[#7d7566] tracking-wider uppercase">Burnt terracotta</p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
