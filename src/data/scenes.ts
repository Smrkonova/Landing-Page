export interface Scene {
  id: number;
  stepNumber: string;
  stepTitle?: string;
  subPhase?: "DESIGN" | "DEVELOP" | "TEST";
  subPhaseFrames?: string;
  heading: string;
  description: string;
  startFrame: number;
  endFrame: number;
  targetProgress: number; // Midpoint progress for scrubbing
  alignment?: "left" | "center" | "right";
  hasCta?: boolean;
  ctaText?: string;
}

export interface TransitionConfig {
  /** Transition half-width in scroll progress */
  halfSpan: number;
  /** Maximum black overlay opacity */
  maxBlackOpacity: number;
  /** Subtle vertical travel distance during text fade in/out (pixels) */
  textAnimationDistance: number;
  /** Progress where scene 7 / flight loop begins */
  lastSceneProgress: number;
}

export const TRANSITION_CONFIG: TransitionConfig = {
  halfSpan: 0.016,          // Clean, responsive black fade zone between major steps
  maxBlackOpacity: 1.0,     // 100% pure black
  textAnimationDistance: 18,
  lastSceneProgress: 8 / 9, // Exactly frame 380 mark: triggers continuous forward flight loop
};

export interface ScrollConfig {
  wheelSensitivity: number;
  touchSensitivity: number;
  keyboardStep: number;
  tourSpeed: number;
  lerpDamping: number;
}

export const SCROLL_CONFIG: ScrollConfig = {
  wheelSensitivity: 0.000065, // deliberate cinematic scrubbing
  touchSensitivity: 0.00028,  // Smooth, controlled touch gestures
  keyboardStep: 0.004,
  tourSpeed: 0.00015,
  lerpDamping: 0.09,          // Buttery smooth lerp easing
};

// Helper to convert frame number (1-380) to progress (0.0 to 8/9)
export const frameToProgress = (f: number): number => {
  return ((f - 1) / (380 - 1)) * TRANSITION_CONFIG.lastSceneProgress;
};

/**
 * EXACT USER-SPECIFIED STEP STRUCTURE & FRAME MAPPINGS:
 * - Step 1: frames 1 - 48
 * - Step 2: frames 49 - 97
 * - Step 3: frames 98 - 133
 * - Step 4 (Single continuous scene with 3 internal sub-phases, NO transition jerk):
 *     • Design: 134 - 178
 *     • Develop: 179 - 212
 *     • Test: 213 - 254
 * - Step 5: frames 255 - 343
 * - Step 6: frames 345 - 380
 * - Last Scene (Contact Us): frames 380 - 449 (Autonomous forward video loop)
 */
export const SCENES: Scene[] = [
  {
    id: 1,
    stepNumber: "01",
    stepTitle: "ORIGINS",
    startFrame: 1,
    endFrame: 48,
    targetProgress: frameToProgress(24),
    heading: "WE DON'T JUST BUILD.",
    description: "We turn ambitious ideas into something real.",
    alignment: "center",
  },
  {
    id: 2,
    stepNumber: "02",
    stepTitle: "PLANNING",
    startFrame: 49,
    endFrame: 97,
    targetProgress: frameToProgress(73),
    heading: "EVERYTHING STARTS WITH A PLAN.",
    description: "Before we build, we understand what we're building.",
    alignment: "center",
  },
  {
    id: 3,
    stepNumber: "03",
    stepTitle: "DIRECTION",
    startFrame: 98,
    endFrame: 133,
    targetProgress: frameToProgress(115),
    heading: "TURNING IDEAS INTO DIRECTION.",
    description: "We shape the vision before we shape the product.",
    alignment: "center",
  },
  {
    id: 4,
    stepNumber: "04",
    stepTitle: "CONSTRUCTION",
    subPhase: "DESIGN",
    subPhaseFrames: "134 - 178",
    startFrame: 134,
    endFrame: 254,
    targetProgress: frameToProgress(194),
    heading: "NOW, WE BUILD.",
    description: "Structure. Systems. Technology. Everything works as one.",
    alignment: "center",
  },
  {
    id: 5,
    stepNumber: "05",
    stepTitle: "CALIBRATION",
    startFrame: 255,
    endFrame: 343,
    targetProgress: frameToProgress(299),
    heading: "BUILT ISN'T ENOUGH.",
    description: "Every detail is tested before it takes flight.",
    alignment: "center",
  },
  {
    id: 6,
    stepNumber: "06",
    stepTitle: "IGNITION",
    startFrame: 345,
    endFrame: 380,
    targetProgress: frameToProgress(362),
    heading: "READY TO FLY.",
    description: "Ready to move. Ready to grow. Ready to fly.",
    alignment: "center",
  },
  {
    id: 7,
    stepNumber: "07",
    stepTitle: "EXPEDITION",
    startFrame: 380,
    endFrame: 449,
    targetProgress: 0.94,
    heading: "READY TO BUILD SOMETHING EXTRAORDINARY?",
    description: "Let's turn your ambitious ideas into an iconic reality.",
    alignment: "center",
    hasCta: true,
    ctaText: "CONTACT US NOW",
  },
];

// Major step transition boundary progress points ONLY (No internal jerks in Step 4!)
export const TRANSITION_BOUNDARIES = [
  frameToProgress(48),   // Step 1 -> Step 2
  frameToProgress(97),   // Step 2 -> Step 3
  frameToProgress(133),  // Step 3 -> Step 4
  frameToProgress(254),  // Step 4 -> Step 5
  frameToProgress(343),  // Step 5 -> Step 6
  frameToProgress(380),  // Step 6 -> Last Scene
];

export interface SceneTransitionState {
  currentScene: Scene;
  textOpacity: number;
  textTranslateY: number;
  blackOverlayOpacity: number;
  sceneIndex: number;
}

/**
 * Enriches Step 4 scene object with current active subPhase (DESIGN, DEVELOP, TEST)
 * without triggering any layout shifts, translations, or black fade jerks.
 */
export function enrichSceneForStep4(scene: Scene, progress: number): Scene {
  if (scene.id !== 4 && scene.stepNumber !== "04") {
    return scene;
  }

  // Frame 134-178: DESIGN
  // Frame 179-212: DEVELOP
  // Frame 213-254: TEST
  const developStart = frameToProgress(179);
  const testStart = frameToProgress(213);

  if (progress >= testStart) {
    return {
      ...scene,
      subPhase: "TEST",
      subPhaseFrames: "213 - 254",
    };
  } else if (progress >= developStart) {
    return {
      ...scene,
      subPhase: "DEVELOP",
      subPhaseFrames: "179 - 212",
    };
  } else {
    return {
      ...scene,
      subPhase: "DESIGN",
      subPhaseFrames: "134 - 178",
    };
  }
}

/**
 * Computes exact scene and transition parameters deterministically from scroll progress (0.0 to 1.0).
 * Works reversibly when scrolling both down and up. No timers or stateful side effects.
 */
export function getSceneTransitionState(
  progress: number,
  config: TransitionConfig = TRANSITION_CONFIG,
  scenes: Scene[] = SCENES,
  boundaries: number[] = TRANSITION_BOUNDARIES
): SceneTransitionState {
  const clampedProgress = Math.max(0, Math.min(1, progress));
  const halfSpan = config.halfSpan;

  // Check if current progress falls inside any transition boundary zone
  for (let i = 0; i < boundaries.length; i++) {
    const boundary = boundaries[i];
    const startZone = boundary - halfSpan;
    const endZone = boundary + halfSpan;

    if (clampedProgress >= startZone && clampedProgress <= endZone) {
      if (clampedProgress < boundary) {
        // Phase 1: Exiting current scene i (0-indexed) into black
        const factor = (clampedProgress - startZone) / halfSpan; // 0.0 -> 1.0
        const rawScene = scenes[i];
        return {
          currentScene: enrichSceneForStep4(rawScene, clampedProgress),
          textOpacity: Math.max(0, 1 - factor),
          textTranslateY: -factor * config.textAnimationDistance, // Subtle upward drift as it disappears
          blackOverlayOpacity: factor * config.maxBlackOpacity,   // Gradually reaches pure black (1.0)
          sceneIndex: i,
        };
      } else {
        // Phase 2: Screen is black; new scene (i + 1) text appears on black, then black fades out
        const factor = (clampedProgress - boundary) / halfSpan; // 0.0 -> 1.0
        const textIn = Math.min(1, factor / 0.35);
        const blackOut = 1 - Math.max(0, (factor - 0.25) / 0.75);
        const rawScene = scenes[i + 1] || scenes[scenes.length - 1];

        return {
          currentScene: enrichSceneForStep4(rawScene, clampedProgress),
          textOpacity: textIn,
          textTranslateY: (1 - textIn) * config.textAnimationDistance,
          blackOverlayOpacity: blackOut * config.maxBlackOpacity,
          sceneIndex: Math.min(scenes.length - 1, i + 1),
        };
      }
    }
  }

  // Outside transition zones: normal scene visibility
  let activeIndex = 0;
  for (let i = 0; i < scenes.length; i++) {
    const segStart = i === 0 ? 0 : boundaries[i - 1] + halfSpan;
    const segEnd = i === scenes.length - 1 ? 1.0 : boundaries[i] - halfSpan;

    if (clampedProgress >= segStart && clampedProgress <= segEnd) {
      activeIndex = i;
      break;
    }
    if (clampedProgress > boundaries[i - 1]) {
      activeIndex = i;
    }
  }

  const rawScene = scenes[activeIndex] || scenes[0];
  return {
    currentScene: enrichSceneForStep4(rawScene, clampedProgress),
    textOpacity: 1,
    textTranslateY: 0,
    blackOverlayOpacity: 0,
    sceneIndex: activeIndex,
  };
}
