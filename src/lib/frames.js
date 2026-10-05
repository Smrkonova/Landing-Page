export const FRAME_SECTIONS = [
  { folder: "contact-7", count: 50, filePrefix: "frame-", ext: ".webp", fileStart: 1 },
  { folder: "contact-7", count: 55, filePrefix: "frame-", ext: ".webp", fileStart: 51 },
  { folder: "contact-7", count: 50, filePrefix: "frame-", ext: ".webp", fileStart: 106 },
  { folder: "contact-7", count: 50, filePrefix: "frame-", ext: ".webp", fileStart: 156 },
  { folder: "contact-7", count: 50, filePrefix: "frame-", ext: ".webp", fileStart: 206 },
  { folder: "contact-7", count: 50, filePrefix: "frame-", ext: ".webp", fileStart: 256 },
  { folder: "contact-7", count: 50, filePrefix: "frame-", ext: ".webp", fileStart: 306 },
  { folder: "contact-7", count: 55, filePrefix: "frame-", ext: ".webp", fileStart: 356 },
  { folder: "contact-7", count: 39, filePrefix: "frame-", ext: ".webp", fileStart: 411 },
];

let currentStart = 1;
export const COMPUTED_SECTIONS = FRAME_SECTIONS.map(section => {
  const start = currentStart;
  const end = currentStart + section.count - 1;
  currentStart = end + 1;
  return { ...section, start, end };
});

export const TOTAL_FRAMES = COMPUTED_SECTIONS.reduce(
  (sum, section) => sum + section.count,
  0
);

export function getFramePath(frameNumber) {
  const section = COMPUTED_SECTIONS.find(
    (entry) => frameNumber >= entry.start && frameNumber <= entry.end
  );

  if (!section) {
    throw new RangeError(`Frame number ${frameNumber} is out of range.`);
  }

  const indexInSection = frameNumber - section.start;
  const fileNumber = section.fileStart + indexInSection;

  const padded = String(fileNumber).padStart(4, "0");
  return `/frames/${section.folder}/${section.filePrefix}${padded}${section.ext}`;
}

export function getAllFramePaths() {
  return Array.from({ length: TOTAL_FRAMES }, (_, index) =>
    getFramePath(index + 1)
  );
}

export function getSectionIndexFromFrame(frameIndex) {
  const frameNumber = frameIndex + 1;
  const index = COMPUTED_SECTIONS.findIndex(
    (section) => frameNumber >= section.start && frameNumber <= section.end
  );

  return index === -1 ? 0 : index;
}
