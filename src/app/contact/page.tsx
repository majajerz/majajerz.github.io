export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
      {/* Page Header */}
      <header className="mb-10 md:mb-14">
        <h1 className="mb-4">Contact</h1>
        <p className="text-[var(--color-text-secondary)] max-w-2xl">
          Interested in my work? I&apos;d love to hear from you. Feel free to reach
          out for commissions, collaborations, or just to say hello.
        </p>
      </header>

      {/* Contact Information */}
      <div className="max-w-xl">
        <div className="space-y-8">
          {/* Email Section */}
          <section className="p-6 md:p-8 border border-[var(--color-accent-secondary)] rounded-sm bg-white/50">
            <h2 className="text-xl mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-1">
                  Email
                </p>
                <a
                  href="mailto:hello@example.com"
                  className="text-lg text-[var(--color-text-primary)] hover:text-[var(--color-accent-primary)] transition-colors underline underline-offset-4"
                >
                  hello@example.com
                </a>
              </div>
            </div>
          </section>

          {/* Additional Info */}
          <section className="space-y-4">
            <h3 className="text-lg text-[var(--color-text-primary)]">
              What I&apos;m Open To
            </h3>
            <ul className="space-y-2 text-[var(--color-text-secondary)]">
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent-primary)] mt-1">
                  &bull;
                </span>
                <span>Custom commissions (digital and physical)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent-primary)] mt-1">
                  &bull;
                </span>
                <span>Collaborative projects</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent-primary)] mt-1">
                  &bull;
                </span>
                <span>Exhibition opportunities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent-primary)] mt-1">
                  &bull;
                </span>
                <span>General inquiries</span>
              </li>
            </ul>
          </section>

          {/* Response Time Note */}
          <p className="text-sm text-[var(--color-text-secondary)] italic">
            I typically respond within 2-3 business days.
          </p>
        </div>
      </div>
    </div>
  );
}
