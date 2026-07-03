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
    <div className="story-text-overlay">
      <div ref={contentRef} className="story-text-panel active">
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
      </div>
    </div>
  );
}
