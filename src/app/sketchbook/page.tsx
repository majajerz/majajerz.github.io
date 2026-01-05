import { GalleryGrid } from "@/components/gallery";
import { getSketchbookArtwork } from "@/lib/artwork-data";

export default function SketchbookPage() {
  const sketches = getSketchbookArtwork();

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
      {/* Page Header */}
      {/* <header className="mb-10 md:mb-14">
        <h1 className="mb-4">Sketchbook</h1>
        <p className="text-[var(--color-text-secondary)] max-w-2xl">
          Works in progress, studies, and explorations. A glimpse into the
          creative process behind the finished pieces.
        </p>
      </header> */}

      {/* Gallery without Filters */}
      <GalleryGrid artwork={sketches} showFilters={false} />
    </div>
  );
}
