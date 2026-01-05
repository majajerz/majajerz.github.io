"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import type { Artwork } from "@/lib/artwork-data";

interface LightboxProps {
  artwork: Artwork;
  allArtwork: Artwork[];
  onClose: () => void;
}

export default function Lightbox({ artwork, allArtwork, onClose }: LightboxProps) {
  const [currentArtwork, setCurrentArtwork] = useState(artwork);

  // Update current artwork when prop changes
  useEffect(() => {
    setCurrentArtwork(artwork);
  }, [artwork]);

  // Find current index and determine if prev/next are available
  const currentIndex = allArtwork.findIndex(a => a.id === currentArtwork.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < allArtwork.length - 1;

  const handlePrev = useCallback(() => {
    if (hasPrev) {
      setCurrentArtwork(allArtwork[currentIndex - 1]);
    }
  }, [hasPrev, currentIndex, allArtwork]);

  const handleNext = useCallback(() => {
    if (hasNext) {
      setCurrentArtwork(allArtwork[currentIndex + 1]);
    }
  }, [hasNext, currentIndex, allArtwork]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    },
    [onClose, handlePrev, handleNext]
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing ${currentArtwork.title}`}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 p-2 text-black hover:text-gray-600 transition-colors z-10"
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

      {/* Previous Arrow */}
      {hasPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-black hover:text-gray-600 transition-colors z-10"
          aria-label="Previous image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Next Arrow */}
      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-black hover:text-gray-600 transition-colors z-10"
          aria-label="Next image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      {/* Image Container */}
      <div
        className="relative max-w-[90vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={currentArtwork.imageSrc}
          alt={currentArtwork.title}
          width={currentArtwork.width}
          height={currentArtwork.height}
          placeholder="blur"
          blurDataURL={currentArtwork.blurDataUrl}
          className="object-contain max-h-[90vh] max-w-[90vw] w-auto h-auto"
          priority
        />
      </div>
    </div>
  );
}
