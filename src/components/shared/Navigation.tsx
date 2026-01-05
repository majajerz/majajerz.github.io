"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Sketchbook", href: "/sketchbook" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-background)]/95 backdrop-blur-sm border-b border-[var(--color-accent-secondary)]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Site Title */}
          <Link
            href="/"
            className="text-2xl md:text-3xl tracking-wide text-[var(--color-text-primary)] hover:text-[var(--color-accent-primary)] transition-colors"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Maja Jerzmanowska
          </Link>

          {/* Navigation Tabs */}
          <ul className="flex items-center gap-1 md:gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`
                      relative px-3 py-2 md:px-4 text-sm md:text-base font-medium
                      transition-colors duration-200
                      ${
                        isActive
                          ? "text-[var(--color-text-primary)]"
                          : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                      }
                    `}
                  >
                    {item.label}
                    {/* Active indicator */}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 md:left-4 md:right-4 h-0.5 bg-[var(--color-text-primary)]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
