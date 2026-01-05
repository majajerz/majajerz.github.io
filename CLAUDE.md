# Project Memory: Artist Portfolio

## 1. Project Context & "Skill" Integration

This project utilizes a modular skill architecture. **Before performing any task, refer to the relevant Skill module:**

* **Design & Layout:** Use `.claude/skills/frontend-design/SKILL.md`.
* **Branding/Visuals:** Use `.claude/skills/brand-guidelines/SKILL.md`.
* **Quality Assurance:** Use `.claude/skills/webapp-testing/SKILL.md` before finalizing PRs.

## 2. Tech Stack (The "Overkill" Setup)

* **Framework:** Next.js 15.x (App Router) — *Reminder: `params` and `searchParams` are async.*
* **React:** v19.x (Prioritize Server Components).
* **Styling:** Tailwind CSS v4.x (CSS-first engine). Use `@theme` in `src/styles/globals.css`.
* **Package Manager:** `npm` (uses `package-lock.json`).
* **Hosting:** GitHub Pages (Static Export via GitHub Actions).

## 3. Core Implementation Rules

* **BP-1 (Planning):** If there is any confusion ask the user clarifying questions. Reference the `frontend-design` skill for how to design.
* **BP-2 (Visuals):** Strictly follow `brand-guidelines`. If a design choice conflicts with the guidelines, ask for clarification.
* **BP-3 (Images):** Always use Next.js `<Image />` with `placeholder="blur"`. Metadata (Title, Year) must be passed via props for SEO.
* **BP-4 (Performance):** Use the React 19 Compiler. Avoid `'use client'` unless handling state (e.g., the Lightbox or Filter buttons).

## 4. Folder Structure (Next.js 15)

```text
src/
  ├── app/                  # Route handlers & Pages (Async params)
  ├── components/
  │   ├── gallery/          # Interactive artwork grids
  │   ├── ui/               # Minimalist atomic components
  │   └── shared/           # Nav/Footer/Layout
  ├── lib/                  # Utils & Server Actions
  └── styles/               # globals.css (Tailwind v4 theme)
public/
  └── images/               # High-res artwork assets
.claude/
  └──  skills/   
```

## 5. Development Workflow

* **Local Dev:** `npm run dev`
* **Testing:** `npm test` (Refer to `webapp-testing` skill for edge cases).
* **Build/Export:** `npm run build` (Outputs to `./out` directory for static hosting).

## 5.1 GitHub Pages Deployment

This site is configured for automatic deployment to GitHub Pages:

* **Deployment Method:** GitHub Actions (workflow: `.github/workflows/deploy.yml`)
* **Build Configuration:** Static export enabled in `next.config.ts` with `output: "export"`
* **Important Files:**
  - `public/.nojekyll` — Required to bypass Jekyll processing on GitHub Pages
  - `.github/workflows/deploy.yml` — Automated build & deploy pipeline
* **GitHub Settings Required:**
  - Repository → Settings → Pages → Source: **"GitHub Actions"** (not "Deploy from a branch")
* **Deployment Trigger:** Automatic on push to `main` branch
* **Live URL:** `https://majajerz.github.io`

## 6. Site Structure & Content

This website has a simple three-page structure with navigation tabs:

### Homepage (Main Gallery)
- Display all **finished artwork** images in responsive grid
- Multi-select filter by tags: **Digital** or **Physical**
- Click artwork opens lightbox with: Title, Year, Medium, Tags
- Metadata shows on hover

### Sketchbook Page
- Display all **sketch/work-in-progress** images in responsive grid
- **No filters** - simple gallery view only
- Same lightbox and metadata display as homepage
- Uses same gallery component but without filter UI

### Contact Page
- Simple contact info display
- Email address prominently shown

### Navigation
Three tabs in order: **Home** → **Sketchbook** → **Contact**

## 7. Content Guidelines

### Artwork Descriptions
- Title (required)
- Year created (required)
- Medium (required)
- Tags (required for filtering)
- Description/story (optional)

### Image Requirements
- **Format**: JPEG for photos, PNG for graphics with transparency
- **Aspect Ratio**: Maintain original ratios
- **File Size**: Optimize to <500KB per image when possible
- **Storage**: Store in `public/images/` or use a CMS/CDN

