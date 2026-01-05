export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-accent-secondary)] bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--color-text-secondary)]">
            &copy; {currentYear} Artist Portfolio. All rights reserved.
          </p>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Crafted with care
          </p>
        </div>
      </div>
    </footer>
  );
}
