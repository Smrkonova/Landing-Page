"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import ScrollCanvas from "./ScrollCanvas";
import SectionText from "./SectionText";
import { getSectionIndexFromFrame } from "@/lib/frames";
import { STORY_SECTIONS } from "@/lib/sections";

export default function StoryExperience() {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  const handleFrameChange = useCallback((frameIndex) => {
    setActiveSection(getSectionIndexFromFrame(frameIndex));
  }, []);

  return (
    <div ref={containerRef} className="story-container">
      <div className="story-visual-layer">
        <ScrollCanvas
          scrollTriggerRef={containerRef}
          onFrameChange={handleFrameChange}
        />

        <div className="story-gradient-overlay" aria-hidden="true" />

        <div className="story-ui">

          <SectionText sections={STORY_SECTIONS} activeIndex={activeSection} />

          <div className="story-scroll-hint">
            <span className="story-scroll-line" aria-hidden="true">
              <span className="story-scroll-dot" />
            </span>
            <span>SCROLL TO CONTINUE</span>
          </div>
        </div>
      </div>

      {STORY_SECTIONS.map((section) => (
        <div
          key={section.id}
          className="story-scroll-section"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
