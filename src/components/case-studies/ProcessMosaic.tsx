"use client";

import { useEffect, useRef, useState } from "react";
import CaseImage from "./CaseImage";

type MosaicImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  blur: string;
};

export default function ProcessMosaic({
  images,
  title,
  year,
  variant,
}: {
  images: MosaicImage[];
  title: string;
  year: number;
  variant: "campaign" | "folio";
}) {
  const container = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState({ width: 0, mobile: false });
  useEffect(() => {
    const element = container.current;
    if (!element) return;
    const measure = () =>
      setLayout({
        width: element.clientWidth,
        mobile: window.innerWidth < 768,
      });
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    window.addEventListener("resize", measure);
    measure();
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);
  const gap = layout.mobile ? 12 : 16;
  const groups = layout.mobile
    ? [
        [0, 1],
        [2, 3],
      ]
    : variant === "campaign"
      ? [[0, 1], [2], [3]]
      : [[0], [1, 2], [3]];
  const ratios = groups.map((group) =>
    group.reduce((sum, i) => sum + images[i].height / images[i].width, 0),
  );
  const innerGaps = groups.map((group) => (group.length - 1) * gap);
  const inverses = ratios.map((r) => 1 / r);
  const height =
    (layout.width -
      gap * (groups.length - 1) +
      innerGaps.reduce((sum, g, i) => sum + g * inverses[i], 0)) /
    inverses.reduce((a, b) => a + b, 0);
  const columns = layout.width
    ? ratios
        .map((r, i) => `${Math.max(1, (height - innerGaps[i]) / r)}px`)
        .join(" ")
    : "repeat(3, minmax(0, 1fr))";
  return (
    <div
      ref={container}
      className="process-mosaic"
      style={{
        display: "grid",
        gap,
        gridTemplateColumns: layout.mobile ? "1fr" : columns,
      }}
    >
      {groups.map((group, index) => (
        <div
          key={index}
          style={{
            display: layout.mobile ? "grid" : "flex",
            flexDirection: "column",
            gap,
            minWidth: 0,
            gridTemplateColumns: layout.mobile
              ? group
                  .map((i) => `${images[i].width / images[i].height}fr`)
                  .join(" ")
              : undefined,
          }}
        >
          {group.map((i) => (
            <figure key={images[i].src}>
              <CaseImage
                src={images[i].src}
                alt={images[i].alt}
                width={images[i].width}
                height={images[i].height}
                blurDataURL={images[i].blur}
                title={title}
                year={year}
              />
            </figure>
          ))}
        </div>
      ))}
    </div>
  );
}
