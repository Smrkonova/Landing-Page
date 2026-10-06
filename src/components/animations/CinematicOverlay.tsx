"use client";

import React, { useMemo } from "react";
import { getSceneTransitionState } from "@/data/scenes";

interface CinematicOverlayProps {
  progress: number; // 0 to 1
  onContactClick?: () => void;
}

export const CinematicOverlay: React.FC<CinematicOverlayProps> = ({
  progress,
  onContactClick,
}) => {
  const state = useMemo(() => getSceneTransitionState(progress), [progress]);

  const { currentScene, textOpacity, textTranslateY, blackOverlayOpacity } = state;

  return (
    <>
      {/* Pure black cinematic transition layer */}
      <div
        className="cinematic-black-overlay"
        style={{
          opacity: blackOverlayOpacity,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Premium minimal agency typography */}
      <div className="cinematic-text-viewport" aria-live="polite">
        <div
          className={`cinematic-card ${currentScene.alignment || "center"}`}
          style={{
            opacity: textOpacity,
            transform: `translate3d(0, ${textTranslateY}px, 0)`,
            willChange: "opacity, transform",
          }}
        >
          <div className="cinematic-scene-index">
            <span>STEP {currentScene.stepNumber}</span>
            {currentScene.stepTitle && (
              <>
                <span className="index-dot">•</span>
                <span>{currentScene.stepTitle}</span>
              </>
            )}
            {currentScene.subPhase && (
              <>
                <span className="index-dot">•</span>
                <span className="subphase-tag">{currentScene.subPhase}</span>
              </>
            )}
          </div>

          <h2 className="cinematic-heading">
            {currentScene.heading}
          </h2>

          {/* Step 4 Internal Sections Indicator */}
          {currentScene.subPhase && (
            <div className="step4-phases-container">
              <div className={`step4-phase-pill ${currentScene.subPhase === "DESIGN" ? "active" : ""}`}>
                <span className="phase-num">01</span>
                <span className="phase-name">DESIGN</span>
                <span className="phase-frames">134-178</span>
              </div>
              <div className="phase-divider" />
              <div className={`step4-phase-pill ${currentScene.subPhase === "DEVELOP" ? "active" : ""}`}>
                <span className="phase-num">02</span>
                <span className="phase-name">DEVELOP</span>
                <span className="phase-frames">179-212</span>
              </div>
              <div className="phase-divider" />
              <div className={`step4-phase-pill ${currentScene.subPhase === "TEST" ? "active" : ""}`}>
                <span className="phase-num">03</span>
                <span className="phase-name">TEST</span>
                <span className="phase-frames">213-254</span>
              </div>
            </div>
          )}

          <p className="cinematic-description">
            {currentScene.description}
          </p>

          {/* Call to action button on last scene */}
          {currentScene.hasCta && (
            <div className="cinematic-cta-wrapper">
              <button
                type="button"
                className="cinematic-cta-btn"
                onClick={onContactClick}
                id="contact-us-btn"
              >
                <span>{currentScene.ctaText || "CONTACT US NOW"}</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CinematicOverlay;
