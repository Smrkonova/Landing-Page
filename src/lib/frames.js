export const FRAME_SECTIONS = [
  { folder: "Raw", start: 1, end: 80 },
  { folder: "Understand", start: 81, end: 160 },
  { folder: "Plan", start: 161, end: 240 },
  { folder: "Design", start: 241, end: 320 },
  { folder: "Development", start: 321, end: 400 },
  { folder: "Testing", start: 401, end: 480 },
  { folder: "Launch", start: 481, end: 560 },
  { folder: "Scale", start: 561, end: 724 },
];

export const TOTAL_FRAMES = FRAME_SECTIONS.reduce(
  (sum, section) => sum + (section.end - section.start + 1),
  0
);

export function getFramePath(frameNumber) {
  const section = FRAME_SECTIONS.find(
    (entry) => frameNumber >= entry.start && frameNumber <= entry.end
  );

  if (!section) {
    throw new RangeError(`Frame number ${frameNumber} is out of range.`);
  }

  const padded = String(frameNumber).padStart(4, "0");
  return `/frames/${section.folder}/frame_${padded}.jpg`;
}

export function getAllFramePaths() {
  return Array.from({ length: TOTAL_FRAMES }, (_, index) =>
    getFramePath(index + 1)
  );
}

export function getSectionIndexFromFrame(frameIndex) {
  const frameNumber = frameIndex + 1;
  const index = FRAME_SECTIONS.findIndex(
    (section) => frameNumber >= section.start && frameNumber <= section.end
  );

  return index === -1 ? 0 : index;
}
