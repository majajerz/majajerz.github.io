import Image from "next/image";

const placeholderBlur =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDBAURAAYSITFBUWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECABEhMf/aAAwDAQACEQMRAD8AzCw2+3z7etdTVVDLNLVSL5AChY+gM9aU/wBo3f/Z";

const aboutContent = {
  // EDIT HERE: Write your About page in short paragraphs.
  // Each set of quotation marks becomes one paragraph on the page.
  paragraphs: [
    "I am a South Carolina-based artist beginning my junior year at the University of South Carolina, where I study Studio Art with a concentration in graphic design and illustration, and a second major in Neuroscience. I am interested in the impact art has on the brain, health, and well-being.",
    "My inspiration ranges from painters like Hilma af Klint to Polish poster design. Color and boldness are central to my work, though I also enjoy the restraint of simple black-and-white compositions. I am especially drawn to the interaction between illustrated elements and design elements.",
  ],
};

const portrait = {
  // EDIT HERE: Replace this file if you want to use a different portrait.
  src: "/images/about/portrait.png",
  alt: "Portrait of Maja Jerzmanowska",
};

const contact = {
  // EDIT HERE: Replace this with your preferred contact email.
  email: "majaj@email.sc.edu",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.55fr)] lg:items-start">
        <section className="space-y-10">
          <header className="max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.18em] text-[var(--color-text-secondary)]">
              About
            </p>
            <h1 className="mb-6">Maja Jerzmanowska</h1>
          </header>

          <div className="max-w-3xl space-y-6 border-t border-[var(--color-accent-secondary)] pt-6">
            {aboutContent.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-lg leading-[1.8] text-[var(--color-text-primary)]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <aside className="lg:sticky lg:top-28">
          <div className="space-y-5">
            <div className="border border-[var(--color-accent-secondary)] bg-white">
              <Image
                src={portrait.src}
                alt={portrait.alt}
                width={1094}
                height={1494}
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="aspect-[3/4] w-full object-cover"
                placeholder="blur"
                blurDataURL={placeholderBlur}
                priority
              />
            </div>

            <section className="border border-[var(--color-accent-secondary)] bg-white p-5">
              <h2 className="mb-3 text-xl">Contact</h2>
              <p className="mb-2 text-sm uppercase tracking-[0.16em] text-[var(--color-text-secondary)]">
                Email
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="break-words text-base underline underline-offset-4 transition-colors hover:text-[var(--color-accent-primary)]"
              >
                {contact.email}
              </a>
            </section>
          </div>
        </aside>
      </div>
    </div>
  );
}
