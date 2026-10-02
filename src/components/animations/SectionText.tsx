"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function SectionText({ sections, activeIndex }) {
  const contentRef = useRef(null);
  const [displayedIndex, setDisplayedIndex] = useState(activeIndex);
  const isFirstRender = useRef(true);
  const activeIndexRef = useRef(activeIndex);

  activeIndexRef.current = activeIndex;

  const section = sections[displayedIndex];

  useEffect(() => {
    const content = contentRef.current;
    if (!content) {
      return;
    }

    if (isFirstRender.current) {
      isFirstRender.current = false;
      gsap.set(content, { opacity: 1, y: 0 });
      return;
    }

    if (activeIndex === displayedIndex) {
      return;
    }

    gsap.killTweensOf(content);

    gsap.to(content, {
      opacity: 0,
      y: -24,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        if (activeIndexRef.current !== activeIndex) {
          setDisplayedIndex(activeIndexRef.current);
          return;
        }
        setDisplayedIndex(activeIndex);
      },
    });
  }, [activeIndex, displayedIndex]);

  useEffect(() => {
    const content = contentRef.current;
    if (!content || isFirstRender.current) {
      return;
    }

    gsap.killTweensOf(content);
    gsap.fromTo(
      content,
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" }
    );
  }, [displayedIndex]);

  return (
    <div className={section.isContact ? "fixed inset-0 z-[100] pointer-events-none" : "story-text-overlay"}>
      <div 
        ref={contentRef} 
        className={section.isContact ? "flex flex-col items-center justify-center w-full h-full text-center px-4 pointer-events-auto" : "story-text-panel active"}
      >
        {section.isContact ? (
          <>
            <h4 className="text-[clamp(10px,1vw+4px,14px)] font-medium text-white/90 uppercase tracking-[0.3em] mb-2 md:mb-4">
              Ready to build something
            </h4>
            <h2 className="text-[clamp(2.5rem,8vw+1rem,9rem)] font-black text-white leading-none uppercase mb-6 md:mb-8 w-full max-w-[1400px]" style={{ transform: "scaleY(0.9)" }}>
              Extraordinary?
            </h2>
            <div className="flex items-center gap-4 mb-6 md:mb-8 opacity-60">
              <div className="w-16 md:w-32 h-[1px] bg-gradient-to-r from-transparent to-white"></div>
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L14 12H0L7 0Z" fill="transparent" stroke="white" strokeWidth="1"/>
              </svg>
              <div className="w-16 md:w-32 h-[1px] bg-gradient-to-l from-transparent to-white"></div>
            </div>
            <p className="text-[clamp(10px,1vw+4px,14px)] font-medium text-white/90 uppercase tracking-[0.3em] mb-10 md:mb-14">
              Let's engineer your next peak together
            </p>
            <button className="group relative overflow-hidden flex items-center gap-3 px-8 md:px-10 py-3.5 md:py-4 bg-[#1f2329]/80 backdrop-blur-md border border-white/20 text-white font-semibold text-[clamp(10px,0.8vw+4px,12px)] uppercase tracking-widest transition-all hover:bg-[#2a2f38]/90 hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
              Get in Touch
            </button>
          </>
        ) : (
          <>
            <div className="story-progress">
              <span className="story-progress-current">
                {String(displayedIndex + 1).padStart(2, "0")}
              </span>
              <span className="story-progress-line" aria-hidden="true">
                <span className="story-progress-dots">
                  {sections.map((_, dotIndex) => (
                    <span
                      key={dotIndex}
                      className={`story-progress-dot${dotIndex === displayedIndex ? " active" : ""}`}
                    />
                  ))}
                </span>
              </span>
              <span className="story-progress-total">
                {String(sections.length).padStart(2, "0")}
              </span>
            </div>
            <h2>{section.title}</h2>
            <p className="story-subtitle">{section.subtitle}</p>
            <p className="story-desc">{section.desc}</p>
          </>
        )}
      </div>
    </div>
  );
}
