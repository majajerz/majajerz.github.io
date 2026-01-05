"use client";

import type { ArtworkTag } from "@/lib/artwork-data";

const availableTags: ArtworkTag[] = ["Digital", "Physical"];

interface FilterBarProps {
  selectedTags: ArtworkTag[];
  onTagToggle: (tag: ArtworkTag) => void;
}

export default function FilterBar({
  selectedTags,
  onTagToggle,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-8">
      <span className="text-sm text-[var(--color-text-secondary)] mr-2">
        Filter:
      </span>
      {availableTags.map((tag) => {
        const isSelected = selectedTags.includes(tag);
        return (
          <button
            key={tag}
            onClick={() => onTagToggle(tag)}
            className={`
              px-4 py-2 text-sm font-medium rounded-full
              border transition-all duration-200
              ${
                isSelected
                  ? "bg-[var(--color-accent-primary)] text-white border-[var(--color-accent-primary)]"
                  : "bg-transparent text-[var(--color-text-secondary)] border-[var(--color-accent-secondary)] hover:border-[var(--color-accent-primary)] hover:text-[var(--color-text-primary)]"
              }
            `}
            aria-pressed={isSelected}
          >
            {tag}
          </button>
        );
      })}
      {selectedTags.length > 0 && (
        <button
          onClick={() => selectedTags.forEach((tag) => onTagToggle(tag))}
          className="px-3 py-1.5 text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] underline underline-offset-2"
        >
          Clear all
        </button>
      )}
    </div>
  );
}
