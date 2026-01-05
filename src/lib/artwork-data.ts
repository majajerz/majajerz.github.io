export interface Artwork {
  id: string;
  title: string;
  year: number;
  medium: string;
  imageSrc: string;
  blurDataUrl: string;
  width: number;
  height: number;
  description?: string;
}

// Placeholder blur data URL (tiny gray placeholder)
const placeholderBlur =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDBAURAAYSITFBUWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECABEhMf/aAAwDAQACEQMRAD8AzCw2+3z7etdTVVDLNLVSL5AChY+gM9aU/wBo3f/Z";

// Finished artwork for the main gallery
export const finishedArtwork: Artwork[] = [
  {
    id: "artwork-1",
    title: "New year c",
    year: 2024,
    medium: "Digital Illustration",
    imageSrc: "images/gallery/artwork-1.png",
    blurDataUrl: placeholderBlur,
    width: 100,
    height: 100,
    description: "a nice card.",
  },
  {
    id: "artwork-2",
    title: "Urban Fragments",
    year: 2024,
    medium: "Acrylic on Canvas",
    imageSrc: "/images/gallery/artwork-2.svg",
    blurDataUrl: placeholderBlur,
    width: 1400,
    height: 1000,
    description: "Abstract interpretation of city architecture.",
  },
  {
    id: "artwork-3",
    title: "Digital Garden",
    year: 2023,
    medium: "3D Render",
    imageSrc: "/images/gallery/artwork-3.svg",
    blurDataUrl: placeholderBlur,
    width: 1600,
    height: 900,
  },
  {
    id: "artwork-4",
    title: "Ceramic Vessels",
    year: 2023,
    medium: "Glazed Ceramic",
    imageSrc: "/images/gallery/artwork-4.svg",
    blurDataUrl: placeholderBlur,
    width: 1200,
    height: 1200,
    description: "Hand-thrown pottery with custom glazes.",
  },
  {
    id: "artwork-5",
    title: "Neon Nights",
    year: 2024,
    medium: "Digital Painting",
    imageSrc: "/images/gallery/artwork-5.svg",
    blurDataUrl: placeholderBlur,
    width: 1800,
    height: 1200,
  },
  {
    id: "artwork-6",
    title: "Woven Textures",
    year: 2022,
    medium: "Mixed Media on Paper",
    imageSrc: "/images/gallery/artwork-6.svg",
    blurDataUrl: placeholderBlur,
    width: 1000,
    height: 1400,
    description: "Combining traditional weaving with contemporary painting.",
  },
  {
    id: "artwork-7",
    title: "Algorithmic Patterns",
    year: 2024,
    medium: "Generative Art",
    imageSrc: "/images/gallery/artwork-7.svg",
    blurDataUrl: placeholderBlur,
    width: 1400,
    height: 1400,
  },
  {
    id: "artwork-8",
    title: "Stone Study",
    year: 2023,
    medium: "Charcoal on Paper",
    imageSrc: "/images/gallery/artwork-8.svg",
    blurDataUrl: placeholderBlur,
    width: 1100,
    height: 1500,
  },
];

// Sketches and work-in-progress for the Sketchbook page
export const sketchbookArtwork: Artwork[] = [
  {
    id: "sketch-1",
    title: "Portrait Study #12",
    year: 2024,
    medium: "Graphite on Paper",
    imageSrc: "/images/sketchbook/sketch-1.svg",
    blurDataUrl: placeholderBlur,
    width: 800,
    height: 1000,
  },
  {
    id: "sketch-2",
    title: "Concept Exploration",
    year: 2024,
    medium: "Digital Sketch",
    imageSrc: "/images/sketchbook/sketch-2.svg",
    blurDataUrl: placeholderBlur,
    width: 1200,
    height: 800,
  },
  {
    id: "sketch-3",
    title: "Gesture Drawings",
    year: 2024,
    medium: "Ink on Paper",
    imageSrc: "/images/sketchbook/sketch-3.svg",
    blurDataUrl: placeholderBlur,
    width: 900,
    height: 1200,
  },
  {
    id: "sketch-4",
    title: "Color Studies",
    year: 2024,
    medium: "Watercolor",
    imageSrc: "/images/sketchbook/sketch-4.svg",
    blurDataUrl: placeholderBlur,
    width: 1000,
    height: 800,
  },
  {
    id: "sketch-5",
    title: "UI Concept",
    year: 2024,
    medium: "Digital",
    imageSrc: "/images/sketchbook/sketch-5.svg",
    blurDataUrl: placeholderBlur,
    width: 1400,
    height: 900,
  },
  {
    id: "sketch-6",
    title: "Nature Notes",
    year: 2023,
    medium: "Pencil and Watercolor",
    imageSrc: "/images/sketchbook/sketch-6.svg",
    blurDataUrl: placeholderBlur,
    width: 1100,
    height: 1100,
  },
];

// Helper functions
export function getFinishedArtwork(): Artwork[] {
  return finishedArtwork;
}

export function getSketchbookArtwork(): Artwork[] {
  return sketchbookArtwork;
}

export function getArtworkById(id: string): Artwork | undefined {
  return [...finishedArtwork, ...sketchbookArtwork].find(
    (artwork) => artwork.id === id
  );
}
