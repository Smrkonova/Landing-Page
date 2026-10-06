import { COMPUTED_SECTIONS } from "./frames";

export const RAW_SECTIONS = [
  {
    id: "origins",
    stepNumber: "01",
    title: "WE DON'T JUST BUILD.",
    subtitle: "ORIGINS",
    desc: "We turn ambitious ideas into something real.",
  },
  {
    id: "planning",
    stepNumber: "02",
    title: "EVERYTHING STARTS WITH A PLAN.",
    subtitle: "PLANNING",
    desc: "Before we build, we understand what we're building.",
  },
  {
    id: "direction",
    stepNumber: "03",
    title: "TURNING IDEAS INTO DIRECTION.",
    subtitle: "DIRECTION",
    desc: "We shape the vision before we shape the product.",
  },
  {
    id: "construction",
    stepNumber: "04",
    title: "NOW, WE BUILD.",
    subtitle: "CONSTRUCTION",
    desc: "Structure. Systems. Technology. Everything works as one.",
  },
  {
    id: "calibration",
    stepNumber: "05",
    title: "BUILT ISN'T ENOUGH.",
    subtitle: "CALIBRATION",
    desc: "Every detail is tested before it takes flight.",
  },
  {
    id: "ignition",
    stepNumber: "06",
    title: "READY TO FLY.",
    subtitle: "IGNITION",
    desc: "Ready to move. Ready to grow. Ready to fly.",
  },
  {
    id: "expedition",
    stepNumber: "07",
    isContact: true,
    title: "READY TO BUILD SOMETHING EXTRAORDINARY?",
    subtitle: "EXPEDITION",
    desc: "Let's turn your ambitious ideas into an iconic reality.",
  },
];

export const STORY_SECTIONS = RAW_SECTIONS.map((section, index) => {
  const comp = COMPUTED_SECTIONS[index] || { start: 1, end: 1 };
  return {
    ...section,
    frameStart: comp.start,
    frameEnd: comp.end,
  };
});
