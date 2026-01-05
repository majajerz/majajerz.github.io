"use client";

import Image from "next/image";
import type { Artwork } from "@/lib/artwork-data";

interface ArtworkCardProps {
  artwork: Artwork;
  onClick: () => void;
}

export default function ArtworkCard({ artwork, onClick }: ArtworkCardProps) {
  // Calculate row span for masonry grid based on aspect ratio
  const aspectRatio = artwork.height / artwork.width;
  const baseWidth = 400; // approximate column width
  const rowHeight = 10;
  const rowSpan = Math.ceil(aspectRatio * baseWidth / rowHeight) + 4; // +4 for padding/gap

  return (
    <article
      className="group relative cursor-pointer overflow-hidden rounded-sm bg-[var(--color-accent-secondary)]"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`View ${artwork.title}`}
      style={{
        aspectRatio: `${artwork.width}/${artwork.height}`,
        gridRowEnd: `span ${rowSpan}`
      }}
    >
      {/* Image Container with Dynamic Aspect Ratio */}
      <div className="relative w-full h-full">
        <Image
          src={artwork.imageSrc}
          alt={artwork.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={artwork.blurDataUrl}
          className="object-contain transition-opacity duration-300"
        />

        {/* White Overlay on Hover with Simplified Metadata */}
        <div className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {(artwork.title || artwork.year) && (
            <div className="absolute top-4 left-4">
              <p className="text-black text-sm font-medium">
                {[artwork.title, artwork.year].filter(Boolean).join(', ')}
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
