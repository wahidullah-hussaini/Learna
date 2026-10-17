# eLearna – React (Vite)

## Run
1. Install Node.js 18+ (https://nodejs.org)
2. Open a terminal in this folder (the one with package.json)
3. `npm install`   <- required once, creates node_modules (this installs vite)
4. `npm run dev`   -> http://localhost:5173

## Build
`npm run build` then `npm run preview`

## Structure
- src/components/layout (Navbar, Footer, ScrollUI), sections (page sections), ui (Reveal, Button, SectionHeading, Icon, CourseCard)

- src/data/data.js – all content
- src/styles base.css, layout.css, sections.css
- public/ – static files (favicon)

Replace emoji/gradient placeholders with real images in src/assets.

## Images and fonts
Images, icons and the hero video are loaded from the original template's CDN (src/data/images.js). They are for learning/development; replace them with your own licensed assets before publishing. Font: Urbanist (Google Fonts), change it with --font in src/styles/base.css.
