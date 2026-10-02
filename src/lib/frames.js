export const FRAME_SECTIONS = [
  { folder: "raw-1", count: 59, filePrefix: "frame_", ext: ".png", fileStart: 1 },
  { folder: "understand-2", count: 60, filePrefix: "frame_", ext: ".png", fileStart: 1 },
  { folder: "plan-3", count: 59, filePrefix: "frame_", ext: ".png", fileStart: 1 },
  { folder: "build-4/design", count: 59, filePrefix: "frame_", ext: ".png", fileStart: 1 },
  { folder: "build-4/develop", count: 60, filePrefix: "frame_", ext: ".png", fileStart: 1 },
  { folder: "build-4/test", count: 59, filePrefix: "frame_", ext: ".png", fileStart: 1 },
  { folder: "lanuch-5", count: 59, filePrefix: "frame_", ext: ".png", fileStart: 1 },
  { folder: "scale-6", count: 100, filePrefix: "frame_", ext: ".jpg", fileStart: 1 },
  { folder: "contact-7", count: 60, filePrefix: "frame_", ext: ".png", fileStart: 1 },
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
