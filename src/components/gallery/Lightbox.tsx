"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import type { Artwork } from "@/lib/artwork-data";

interface LightboxProps {
  artwork: Artwork;
  onClose: () => void;
}

export default function Lightbox({ artwork, onClose }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-highlight)]/90 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing ${artwork.title}`}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 p-2 text-white hover:text-[var(--color-accent-secondary)] transition-colors z-10"
        aria-label="Close lightbox"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Content Container */}
      <div
        className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 max-w-7xl mx-auto p-4 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative w-full max-w-3xl aspect-auto">
          <Image
            src={artwork.imageSrc}
            alt={artwork.title}
            width={artwork.width}
            height={artwork.height}
            placeholder="blur"
            blurDataURL={artwork.blurDataUrl}
            className="object-contain max-h-[70vh] w-auto mx-auto rounded-sm"
            priority
          />
        </div>

        {/* Metadata Panel */}
        <div className="w-full lg:w-80 text-white space-y-4">
          <h2
            className="text-2xl md:text-3xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {artwork.title}
          </h2>

          <div className="space-y-2 text-sm md:text-base">
            <p>
              <span className="text-[var(--color-text-secondary)]">Year:</span>{" "}
              {artwork.year}
            </p>
            <p>
              <span className="text-[var(--color-text-secondary)]">
                Medium:
              </span>{" "}
              {artwork.medium}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-[var(--color-text-secondary)]">Tags:</span>
              <div className="flex gap-2">
                {artwork.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs border border-white/30 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {artwork.description && (
            <p className="text-sm text-[var(--color-accent-secondary)] leading-relaxed pt-2 border-t border-white/20">
              {artwork.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
