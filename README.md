# Kunal Swami — Portfolio

A fast, animated, single-page portfolio built with React, Vite, Tailwind CSS
and Framer Motion. Designed around a "BI dashboard" visual language — thin
bordered panels, mono data labels, animated stats — to match a data/business
analyst profile.

## Tech stack

- **React 19 + Vite** — build tooling and dev server
- **Tailwind CSS v4** — styling, via `@theme` tokens in `src/index.css`
- **Framer Motion** — scroll-triggered reveals, hover states, count-up numbers
- **lucide-react** — icon set

## Project structure

```
src/
  data/
    profile.js        ← ALL site content lives here (name, bio, experience,
                          projects, skills, certifications, links, stats)
  components/
    ui/                ← shared building blocks (PanelCard, SectionHeading,
                          AnimatedNumber, TrendChart, ThemeToggle, BrandIcons)
    Nav.jsx
    Hero.jsx
    About.jsx
    Experience.jsx
    Projects.jsx
    Skills.jsx
    Contact.jsx
    Footer.jsx
  hooks/
    useTheme.js         ← dark/light mode, persisted to localStorage
    useScrollSpy.js      ← highlights the active nav link on scroll
  App.jsx
  index.css              ← design tokens (colors, fonts) + Tailwind imports
public/
  profile-portrait.jpg   ← hero/about photo (4:5 crop)
  profile-square.jpg     ← used in the hero dashboard card
  Kunal_Swami_Resume.pdf ← served by the "Download CV" buttons
  favicon.svg
```

## Updating content

You should almost never need to touch component code to update the site.
Everything editable lives in **`src/data/profile.js`**:

- `profile` — name, role, tagline, bio paragraphs, stats, social links, resume path
- `experience` — array of jobs, each with `highlights` (bullet points) and `stack` (tags)
- `projects` — array of projects with `description`, `highlights`, `stack`
- `skillGroups` — three columns of skills, each skill has a `level`
  (`"Experienced" | "Intermediate" | "Basic"` — controls the bar fill %)
- `education`, `certifications`
- `nav` — the section links shown in the header

To swap the profile photo or resume, just replace the files in `public/`
with the same filenames, or update the paths in `profile.js`.

## Running locally

Requires Node.js 18+.

```bash
npm install
npm run dev        # starts a dev server, usually at http://localhost:5173
```

```bash
npm run build       # production build → dist/
npm run preview      # serve the production build locally to sanity-check it
```

## Deploying

### Vercel
1. Push this project to a GitHub repo.
2. Go to vercel.com → **New Project** → import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output
   directory `dist` (Vercel usually detects this automatically).
4. Deploy — you'll get a live URL immediately, with a new deployment on every push.

### Netlify
1. Push this project to a GitHub repo.
2. Go to app.netlify.com → **Add new site → Import an existing project**.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy.

### Manual / any static host
```bash
npm run build
```
Upload the contents of the generated `dist/` folder to any static host
(GitHub Pages, S3 + CloudFront, Cloudflare Pages, etc.).

## Notes

- Dark/light mode toggle is in the top-right of the nav; it remembers the
  visitor's choice via `localStorage` and otherwise follows system preference.
- Motion respects `prefers-reduced-motion` — anyone with that OS setting
  enabled will see the site with animations effectively instant.
- Update `<title>` and the Open Graph/Twitter meta tags in `index.html` if
  you rename the site or change the primary photo.
