export interface Chapter {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  startFrame: number;
  endFrame: number;
  targetProgress: number; // 0 to 1
  description: string;
  telemetry: {
    status: string;
    altitude: string;
    velocity: string;
    system: string;
  };
}

export const TOTAL_FRAMES = 449;

export const CHAPTERS: Chapter[] = [
  {
    id: "origins",
    number: "01",
    title: "Origins",
    subtitle: "We Turn Ideas Real",
    startFrame: 1,
    endFrame: 48,
    targetProgress: 0.0,
    description: "Deep foundation and ambitious ideation where visionary concepts transform into reality.",
    telemetry: {
      status: "CORE ALIGNED",
      altitude: "2,480 M",
      velocity: "0 KM/H",
      system: "STANDBY",
    },
  },
  {
    id: "planning",
    number: "02",
    title: "Planning",
    subtitle: "Structure & Strategy",
    startFrame: 49,
    endFrame: 97,
    targetProgress: 0.16,
    description: "Before we build, we understand what we are building. Strategic roadmapping and engineering precision.",
    telemetry: {
      status: "ANALYSIS ACTIVE",
      altitude: "2,480 M",
      velocity: "0 KM/H",
      system: "SYSTEMS PLANNED",
    },
  },
  {
    id: "direction",
    number: "03",
    title: "Direction",
    subtitle: "Vision Into Product",
    startFrame: 98,
    endFrame: 133,
    targetProgress: 0.32,
    description: "We shape the vision before we shape the product. Architectural alignment across every dimension.",
    telemetry: {
      status: "VECTOR LOCKED",
      altitude: "2,510 M",
      velocity: "18 KM/H",
      system: "COMPASS SYNCHRONIZED",
    },
  },
  {
    id: "construction",
    number: "04",
    title: "Construction",
    subtitle: "Design • Develop • Test",
    startFrame: 134,
    endFrame: 254,
    targetProgress: 0.52,
    description: "Structure. Systems. Technology. Everything works as one cohesive digital marvel.",
    telemetry: {
      status: "BUILD IN MOTION",
      altitude: "4,200 M",
      velocity: "140 KM/H",
      system: "FULL ENGINE INTEGRATION",
    },
  },
  {
    id: "calibration",
    number: "05",
    title: "Calibration",
    subtitle: "Precision Verification",
    startFrame: 255,
    endFrame: 343,
    targetProgress: 0.72,
    description: "Built isn't enough. Every detail is tested and calibrated before it takes flight.",
    telemetry: {
      status: "CALIBRATION COMPLETE",
      altitude: "6,920 M",
      velocity: "480 KM/H",
      system: "VERIFICATION NOMINAL",
    },
  },
  {
    id: "ignition",
    number: "06",
    title: "Ignition",
    subtitle: "Ready To Fly",
    startFrame: 345,
    endFrame: 380,
    targetProgress: 0.84,
    description: "Ready to move. Ready to grow. Ready to fly into global airspace.",
    telemetry: {
      status: "THRUST APPLIED",
      altitude: "10,500 M",
      velocity: "720 KM/H",
      system: "AERODYNAMICS MAX",
    },
  },
  {
    id: "expedition",
    number: "07",
    title: "Expedition",
    subtitle: "Build Something Extraordinary",
    startFrame: 380,
    endFrame: 449,
    targetProgress: 0.94,
    description: "Autonomous high-altitude flight. Let's turn your ambitious ideas into an iconic reality.",
    telemetry: {
      status: "CRUISE GLIDE",
      altitude: "14,200 M",
      velocity: "840 KM/H",
      system: "TELEMETRY NOMINAL",
    },
  },
];

export function getFrameUrl(frameIndex: number): string {
  const clamped = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(frameIndex)));
  const padded = String(clamped).padStart(4, "0");
  return `/frames/contact-7/frame-${padded}.webp`;
}

export function getCurrentChapter(currentFrame: number): Chapter {
  for (let i = CHAPTERS.length - 1; i >= 0; i--) {
    if (currentFrame >= CHAPTERS[i].startFrame) {
      return CHAPTERS[i];
    }
  }
  return CHAPTERS[0];
}
