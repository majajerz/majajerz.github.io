# Maja Jerzmanowska - Artist Portfolio

A minimalist portfolio website showcasing artwork with a masonry gallery layout, built with Next.js 15 and React 19.

**Live Site:** [https://majajerz.github.io](https://majajerz.github.io)

## Features

### Pages
- **Home** — Main gallery with finished artwork, filterable by tags (Digital/Physical)
- **Sketchbook** — Work-in-progress and sketch gallery
- **Contact** — Contact information

### Gallery
- Masonry layout using `react-masonry-css` for puzzle-style image packing
- Consistent 16px gaps between all images
- Responsive: 3 columns (desktop) → 2 columns (tablet) → 1 column (mobile)
- Interactive lightbox for full-size viewing
- Hover metadata display (Title, Year)
- Multi-select tag filtering on homepage

### Navigation
- **Desktop:** Horizontal tab navigation with active page indicators
- **Mobile:** Hamburger menu with right-aligned dropdown
- Smooth animations and transitions
- Auto-closes on navigation

## Tech Stack

- **Framework:** Next.js 15.x (App Router)
- **React:** 19.x
- **Styling:** Tailwind CSS 4.x
- **Layout:** react-masonry-css
- **Hosting:** GitHub Pages (Static Export)
- **Package Manager:** npm

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build
```bash
npm run build
```

Outputs static files to `./out` directory

## Deployment

Automatically deployed to GitHub Pages via GitHub Actions on push to `main` branch.

**Workflow:** `.github/workflows/deploy.yml`

## Project Structure

```
src/
  ├── app/                  # Pages and routes
  ├── components/
  │   ├── gallery/          # Masonry gallery components
  │   ├── ui/               # UI components
  │   └── shared/           # Navigation, layout
  ├── lib/                  # Utilities
  └── styles/               # Global styles
public/
  └── images/               # Artwork assets
```

## Documentation

See `CLAUDE.md` for detailed project documentation and implementation guidelines.