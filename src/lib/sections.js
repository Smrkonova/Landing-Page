import { COMPUTED_SECTIONS } from "./frames";

const RAW_SECTIONS = [
  {
    id: "raw",
    title: "RAW IDEA",
    subtitle: "POTENTIAL BEFORE FORM.",
    desc: "Every system starts as raw potential.",
  },
  {
    id: "understand",
    title: "UNDERSTAND",
    subtitle: "CLARITY BEFORE ACTION.",
    desc: "We analyze and define what matters.",
  },
  {
    id: "plan",
    title: "PLAN",
    subtitle: "STRUCTURE FROM VISION.",
    desc: "Vision becomes structure.",
  },
  {
    id: "design",
    title: "DESIGN",
    subtitle: "FORM FOLLOWS INTENTION.",
    desc: "We shape ideas into form.",
  },
  {
    id: "development",
    title: "DEVELOPMENT",
    subtitle: "SYSTEMS BENEATH THE SURFACE.",
    desc: "Systems come alive.",
  },
  {
    id: "testing",
    title: "TESTING",
    subtitle: "TRUST THROUGH VERIFICATION.",
    desc: "Everything is verified.",
  },
  {
    id: "launch",
    title: "LAUNCH",
    subtitle: "MOMENTUM INTO MOTION.",
    desc: "The product takes flight.",
  },
  {
    id: "scale",
    title: "SCALE",
    subtitle: "BUILT TO GROW GLOBALLY.",
    desc: "We build what grows globally.",
  },
  {
    id: "contact",
    isContact: true,
    title: "",
    subtitle: "",
    desc: "",
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
