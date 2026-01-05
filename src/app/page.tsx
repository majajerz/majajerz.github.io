import { GalleryGrid } from "@/components/gallery";
import { getFinishedArtwork } from "@/lib/artwork-data";

export default function HomePage() {
  const artwork = getFinishedArtwork();

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
      {/* Page Header */}
      {/* <header className="mb-10 md:mb-14">
        <h1 className="mb-4">Gallery</h1>
        <p className="text-[var(--color-text-secondary)] max-w-2xl">
          A curated collection of finished works spanning digital and physical
          mediums. Click any piece to view details.
        </p>
      </header> */}

      {/* Gallery with Filters */}
      <GalleryGrid artwork={artwork} showFilters={true} />
    </div>
  );
}
