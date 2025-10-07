<div align="center">

<img src="public/next.svg" alt="logo" width="64" />

<b>Bashtovyi — Frontend Portfolio</b>

Modern resume website built with Next.js, TypeScript and Tailwind CSS.

<br/>

<a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-14-000?logo=nextdotjs" alt="Next.js" /></a>
<a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" /></a>
<a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind%20CSS-3-38B2AC?logo=tailwindcss&logoColor=white" alt="Tailwind" /></a>
<a href="https://vercel.com/"><img src="https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel" alt="Vercel" /></a>

</div>

---

### Demo

- Live: `https://bashtovyi-dev.vercel.app/`

If the link changes, update this section and the project metadata.

## Features

- Modern, performant Next.js 14 app router setup
- Responsive layout with Tailwind CSS and custom components
- Ukrainian and English content via a lightweight i18n layer
- Accessible, keyboard-friendly navigation
- Animated hero with decorative orbit elements
- Projects gallery and lightbox previews
- Sections: Hero, About, Experience, Projects, Testimonials, Contact, Footer

## Tech Stack

- Framework: Next.js 14 (App Router, Metadata API)
- Language: TypeScript 5
- UI: Tailwind CSS, custom components, responsive design
- Media: SVGR for inline SVG, Next Image for raster
- Animations: Framer Motion
- Lightbox: yet-another-react-lightbox

## Getting Started

Prerequisites: Node.js 18+ and npm.

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Scripts

- `npm run dev`: start development server
- `npm run build`: production build
- `npm run start`: start production server
- `npm run lint`: run Next.js ESLint

## Project Structure

```text
src/
  app/               # App router, layout and global styles
  assets/            # SVG icons and images
  components/        # Reusable UI components
  contexts/          # Language context
  lib/               # i18n helpers
  locales/           # Translations (en, uk)
  sections/          # Page sections (Hero, Projects, ...)
```

## Styling & Design System

- Component-level styling is done with Tailwind utility classes.
- Reusable button styles live in `src/app/globals.css` as `.btn`, `.btn-primary`, `.btn-secondary`.

## Internationalization (i18n)

- Simple i18n powered by a language context and JSON dictionaries in `src/locales/en` and `src/locales/uk`.
- The `LanguageSwitcher` component toggles the current language.

## Accessibility

- Semantic markup and focus-visible styles
- Sufficient color contrast and larger tap targets
- Keyboard navigable interactive elements

## Deployment

The project can be deployed to any Node-compatible host. Recommended: Vercel.

```bash
npm run build
npm run start
```
 
