"use client";

import { useState, useCallback } from "react";
import type { Artwork, ArtworkTag } from "@/lib/artwork-data";
import { filterArtworkByTags } from "@/lib/artwork-data";
import ArtworkCard from "./ArtworkCard";
import FilterBar from "./FilterBar";
import Lightbox from "./Lightbox";

interface GalleryGridProps {
  artwork: Artwork[];
  showFilters?: boolean;
}

export default function GalleryGrid({
  artwork,
  showFilters = false,
}: GalleryGridProps) {
  const [selectedTags, setSelectedTags] = useState<ArtworkTag[]>([]);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const handleTagToggle = useCallback((tag: ArtworkTag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }, []);

  const displayedArtwork = showFilters
    ? filterArtworkByTags(artwork, selectedTags)
    : artwork;

  return (
    <>
      {/* Filter Bar (optional) */}
      {showFilters && (
        <FilterBar selectedTags={selectedTags} onTagToggle={handleTagToggle} />
      )}

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {displayedArtwork.map((item) => (
          <ArtworkCard
            key={item.id}
            artwork={item}
            onClick={() => setSelectedArtwork(item)}
          />
        ))}
      </div>

      {/* Empty State */}
      {displayedArtwork.length === 0 && (
        <div className="text-center py-16">
          <p className="text-[var(--color-text-secondary)]">
            No artwork found matching the selected filters.
          </p>
        </div>
      )}

      {/* Lightbox */}
      {selectedArtwork && (
        <Lightbox
          artwork={selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
        />
      )}
    </>
  );
}
