export const TOTAL_FRAMES = 449;

export function getFramePath(frameNumber) {
  const clamped = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(frameNumber)));
  const padded = String(clamped).padStart(4, "0");
  return `/frames/contact-7/frame-${padded}.webp`;
}

export function getAllFramePaths() {
  return Array.from({ length: TOTAL_FRAMES }, (_, index) =>
    getFramePath(index + 1)
  );
}

export const FRAME_SECTIONS = [
  { folder: "contact-7", count: 48, filePrefix: "frame-", ext: ".webp", fileStart: 1, start: 1, end: 48 },
  { folder: "contact-7", count: 49, filePrefix: "frame-", ext: ".webp", fileStart: 49, start: 49, end: 97 },
  { folder: "contact-7", count: 36, filePrefix: "frame-", ext: ".webp", fileStart: 98, start: 98, end: 133 },
  { folder: "contact-7", count: 121, filePrefix: "frame-", ext: ".webp", fileStart: 134, start: 134, end: 254 },
  { folder: "contact-7", count: 89, filePrefix: "frame-", ext: ".webp", fileStart: 255, start: 255, end: 343 },
  { folder: "contact-7", count: 37, filePrefix: "frame-", ext: ".webp", fileStart: 344, start: 344, end: 380 },
  { folder: "contact-7", count: 69, filePrefix: "frame-", ext: ".webp", fileStart: 381, start: 381, end: 449 },
];

export const COMPUTED_SECTIONS = FRAME_SECTIONS;

export function getSectionIndexFromFrame(frameIndex) {
  const frameNumber = frameIndex + 1;
  const index = COMPUTED_SECTIONS.findIndex(
    (section) => frameNumber >= section.start && frameNumber <= section.end
  );
  return index === -1 ? 0 : index;
}
