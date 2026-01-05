"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Sketchbook", href: "/sketchbook" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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

          {/* Desktop Navigation Tabs */}
          <ul className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`
                      relative px-4 py-2 text-base font-medium
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
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[var(--color-text-primary)]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-all"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`w-6 h-0.5 bg-[var(--color-text-primary)] transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[var(--color-text-primary)] transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[var(--color-text-primary)] transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`
          md:hidden fixed right-0 top-16 bg-[var(--color-background)] z-40
          border-l border-b border-[var(--color-accent-secondary)]
          shadow-lg
          transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full'}
        `}
      >
        <ul className="flex flex-col py-4 px-8 gap-4 min-w-[200px]">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`
                    block text-right text-lg py-2
                    transition-colors duration-200
                    ${
                      isActive
                        ? "text-[var(--color-text-primary)]"
                        : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                    }
                  `}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.label}
                  {/* Active indicator */}
                  {isActive && (
                    <span className="block ml-auto mt-1 w-12 h-0.5 bg-[var(--color-text-primary)]" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
