<div align="center">

# Bashtovyi Frontend Portfolio

Personal portfolio and resume website built with Next.js, TypeScript and Tailwind CSS.

</div>

## Features

- Modern, performant Next.js 14 app router setup
- Responsive layout with Tailwind CSS and custom components
- Ukrainian and English content via a lightweight i18n layer
- Accessible, keyboard-friendly navigation
- Animated hero with decorative orbit elements
- Projects gallery and lightbox previews
- Sections: Hero, About, Experience, Projects, Testimonials, Contact, Footer

## Tech Stack

- Next.js 14, React 18, TypeScript
- Tailwind CSS, PostCSS, Autoprefixer
- SVG icons via SVGR
- Framer Motion (animations)
- yet-another-react-lightbox (project previews)

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

## Styling

- Component-level styling is done with Tailwind utility classes.
- Reusable button styles live in `src/app/globals.css` as `.btn`, `.btn-primary`, `.btn-secondary`.

## Internationalization

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

## Contributing

Issues and pull requests are welcome. For larger changes, please open an issue to discuss what you would like to change first.

## License

MIT © Roman Bashtovyi
