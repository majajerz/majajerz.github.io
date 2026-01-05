"use client";

import { useState } from "react";
import Masonry from "react-masonry-css";
import type { Artwork } from "@/lib/artwork-data";
import ArtworkCard from "./ArtworkCard";
import Lightbox from "./Lightbox";

interface GalleryGridProps {
  artwork: Artwork[];
}

export default function GalleryGrid({ artwork }: GalleryGridProps) {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  // Breakpoint configuration for masonry columns
  const breakpointColumns = {
    default: 3, // 3 columns on large screens
    1024: 2,    // 2 columns on tablets
    640: 1      // 1 column on mobile
  };

  return (
    <>
      {/* Gallery Grid - Masonry Layout */}
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex -ml-4 w-auto"
        columnClassName="pl-4 bg-clip-padding"
      >
        {artwork.map((item) => (
          <ArtworkCard
            key={item.id}
            artwork={item}
            onClick={() => setSelectedArtwork(item)}
          />
        ))}
      </Masonry>

      {/* Empty State */}
      {artwork.length === 0 && (
        <div className="text-center py-16">
          <p className="text-[var(--color-text-secondary)]">
            No artwork available.
          </p>
        </div>
      )}

      {/* Lightbox */}
      {selectedArtwork && (
        <Lightbox
          artwork={selectedArtwork}
          allArtwork={artwork}
          onClose={() => setSelectedArtwork(null)}
        />
      )}
    </>
  );
}
