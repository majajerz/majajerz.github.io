"use client";

import { useEffect, useRef, useState } from "react";

export default function SectionNavigation({
  sections,
}: {
  sections: readonly { id: string; label: string }[];
}) {
  const nav = useRef<HTMLElement>(null);
  const requested = useRef(-1);
  const [current, setCurrent] = useState(-1);
  useEffect(() => {
    const element = nav.current;
    if (!element) return;
    const targets = sections.map((section) =>
      document.getElementById(section.id),
    );
    let frame = 0;
    const update = () => {
      const bottom = element.getBoundingClientRect().bottom;
      let active = -1;
      targets.forEach((target, i) => {
        if (target && target.getBoundingClientRect().top <= bottom + 32)
          active = i;
      });
      if (
        window.scrollY > 0 &&
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 2
      )
        active = sections.length - 1;
      const target = targets[requested.current];
      if (target) {
        const bounds = target.getBoundingClientRect();
        if (bounds.bottom > bottom && bounds.top < window.innerHeight - 32)
          active = requested.current;
      }
      setCurrent(active);
    };
    const queue = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    const offsets = () => {
      const header = window.innerWidth >= 768 ? 80 : 64;
      targets.forEach((target) => {
        if (target)
          target.style.scrollMarginTop = `${element.offsetHeight + header + 24}px`;
      });
      queue();
    };
    const clear = () => {
      requested.current = -1;
      queue();
    };
    const key = (event: KeyboardEvent) => {
      if (
        [
          "ArrowUp",
          "ArrowDown",
          "PageUp",
          "PageDown",
          "Home",
          "End",
          " ",
        ].includes(event.key)
      )
        clear();
    };
    const hash = () => {
      requested.current = sections.findIndex(
        (section) => `#${section.id}` === window.location.hash,
      );
      queue();
    };
    const observer = new ResizeObserver(offsets);
    observer.observe(element);
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", offsets);
    window.addEventListener("wheel", clear, { passive: true });
    window.addEventListener("touchstart", clear, { passive: true });
    window.addEventListener("keydown", key);
    window.addEventListener("hashchange", hash);
    offsets();
    if (location.hash) {
      hash();
      targets[requested.current]?.scrollIntoView({
        behavior: "instant",
        block: "start",
      });
    }
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", queue);
      window.removeEventListener("resize", offsets);
      window.removeEventListener("wheel", clear);
      window.removeEventListener("touchstart", clear);
      window.removeEventListener("keydown", key);
      window.removeEventListener("hashchange", hash);
    };
  }, [sections]);
  return (
    <nav ref={nav} className="section-nav" aria-label="Case study sections">
      {sections.map((section, i) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          aria-current={i === current ? "location" : undefined}
          onClick={() => {
            requested.current = i;
            setCurrent(i);
          }}
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
}
