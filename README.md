# Ayush Sharma — Portfolio

A premium, animated personal portfolio built with React, Vite, Tailwind CSS,
Framer Motion, GSAP, and React Three Fiber.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Build for production

```bash
npm run build
npm run preview
```

## Personalize

Almost everything lives in `src/data/`:

- `src/data/profile.js` — name, title, about text, contact info, socials, stats
- `src/data/skills.js` — skill categories + levels, tech stack chips
- `src/data/experience.js` — experience, education, certifications, achievements
- `src/data/projects.js` — project cards, filters, modal content

Replace these files:

- `public/resume.pdf` — your real resume
- `public/avatar-placeholder.svg` — swap for a real photo (any image format works, just update the path in `profile.js`)
- `public/projects/*.svg` — swap for real project screenshots
- `public/favicon.svg`, `public/og-cover.svg` — branding assets
- `index.html` — update the canonical URL and meta tags with your real domain

## Contact form

The form in `src/components/sections/Contact.jsx` currently simulates a
submission. Wire the `handleSubmit` function up to a service like Formspree,
EmailJS, or your own API endpoint.

## Deploy

- **Vercel**: import the repo, framework preset "Vite" is auto-detected. A
  `vercel.json` is included for client-side routing (the 404 page).
- **GitHub Pages / Netlify**: run `npm run build` and deploy the `dist/` folder.

## Stack

React 18 · Vite 5 · Tailwind CSS 3 · Framer Motion · GSAP (ScrollTrigger) ·
React Three Fiber / drei · React Router · lucide-react icons
