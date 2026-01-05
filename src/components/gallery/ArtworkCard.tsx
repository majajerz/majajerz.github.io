"use client";

import Image from "next/image";
import type { Artwork } from "@/lib/artwork-data";

interface ArtworkCardProps {
  artwork: Artwork;
  onClick: () => void;
}

export default function ArtworkCard({ artwork, onClick }: ArtworkCardProps) {
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
    >
      {/* Image Container with Aspect Ratio */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={artwork.imageSrc}
          alt={artwork.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={artwork.blurDataUrl}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover Overlay with Metadata */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-highlight)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <h3
              className="text-lg font-medium mb-1"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {artwork.title}
            </h3>
            <p className="text-sm text-white/80">
              {artwork.year} &middot; {artwork.medium}
            </p>
            <div className="flex gap-2 mt-2">
              {artwork.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs border border-white/40 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
