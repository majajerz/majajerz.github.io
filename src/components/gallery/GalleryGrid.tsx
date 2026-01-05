"use client";

import { useState } from "react";
import type { Artwork } from "@/lib/artwork-data";
import ArtworkCard from "./ArtworkCard";
import Lightbox from "./Lightbox";

interface GalleryGridProps {
  artwork: Artwork[];
}

export default function GalleryGrid({ artwork }: GalleryGridProps) {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  return (
    <>
      {/* Gallery Grid - Masonry Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[10px] gap-4">
        {artwork.map((item) => (
          <ArtworkCard
            key={item.id}
            artwork={item}
            onClick={() => setSelectedArtwork(item)}
          />
        ))}
      </div>

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
