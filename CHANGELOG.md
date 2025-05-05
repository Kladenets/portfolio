# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Initial project setup using `create-next-app` with TypeScript and Tailwind CSS.
- Core dependencies: `framer-motion`, `next-themes`.
- Basic project structure: `app`, `components`, `public`, `lib`.
- Root layout (`app/layout.tsx`) and main page (`app/page.tsx`).
- Header component (`Header.tsx`) with desktop navigation and mobile hamburger menu.
- Footer component (`Footer.tsx`) with basic information.
- Section components: `Introduction`, `Skills`, `Experience`, `Projects`, `Contact`.
- Implemented full-page vertical scroll snapping using Tailwind utilities.
- Dark mode functionality via `next-themes`, including system preference detection and manual toggle component (`ThemeToggle.tsx`).
- Custom color theme configuration in `tailwind.config.ts` and `globals.css` based on provided palettes.
- Reusable `AnimatedText.tsx` component for scroll-triggered text animations using Framer Motion (`viewport={{ once: true }}`).
- Populated sections with initial content generated from resume data.
- Implemented horizontal scrolling for the Projects section using flexbox, overflow-x-auto, and fixed-width cards.
- (Optional) Added `tailwind-scrollbar` plugin for custom scrollbar styling on the Projects section.
- Basic `README.md` and `CHANGELOG.md`.
- ESLint and Prettier configuration (`.eslintrc.json`, `.prettierrc.json`, ignore files) for code linting and formatting.
- VS Code settings (`.vscode/settings.json`) for format/lint on save and recommended extensions (`.vscode/extensions.json`).

### Changed

- Updated main page structure (`app/page.tsx`) to correctly place `Footer` outside the scroll-snap container.
- Refined `Header` styling for responsiveness and added mobile menu toggle icons.
- Adjusted styling in section components to use defined theme colors.
- **Layout Structure:** Refined overall page layout (`html`, `body`, `main`) to correctly support scroll snapping within a flex container that respects header/footer height, preventing body scroll.
- **Section Height:** Changed section components from `min-h-screen` to use `h-[calc(100vh_-_Xrem)]` to precisely match the scrollable area height (viewport minus header/footer).
- **Header Offset:** Added `scroll-padding-top` to the main scroll container (`<main>`) to offset scroll snap alignment globally, accounting for the fixed header height during scrolling.
- **Introduction Offset:** Added `margin-top` to the Introduction section element specifically to ensure correct visual offset below the header on initial page load (as `scroll-padding-top` doesn't affect the initially visible element).
- **Experience Spacing:** Increased internal `padding-top` within the Experience section component for better visual spacing below the header after snapping into view.
- **Project Card Styling:** Adjusted project card styles (width, flex-shrink) to function correctly within the horizontal scrolling layout.

### Fixed

- Ensured `Providers` wrap the application correctly in `layout.tsx` for `next-themes`.
- Added `scroll-smooth` utility for better anchor link scrolling.
- **Animation Refresh:** Fixed initial animation state in `AnimatedText` (avoiding `opacity: 0` start) to prevent content being blank on page refresh, while still ensuring animation plays only once per session via `viewport={{ once: true }}`.
- **Smooth Scrolling:** Ensured smooth scrolling for header navigation links by applying `scroll-smooth` utility correctly to the `<main>` scroll container.
- **Ghost Scroll Area:** Resolved issue causing extra scrollable space below the footer by implementing proper height constraints (`h-screen`, `overflow-hidden`) on `html`/`body` and using `flex-grow` for the `<main>` container's height.
- **Scroll Snap Restoration:** Re-enabled scroll snapping (which broke after fixing the ghost scroll) by establishing the correct height/overflow structure on `html`/`body`/`main`.

## [0.1.0] - YYYY-MM-DD <!-- Example: Replace with the date you consider the first version "complete" -->

### Added

- First functional version of the portfolio deployed. <!-- Example entry -->
- All core sections (Intro, Skills, Experience, Projects, Contact) implemented with content.
- Dark mode, scroll snapping, and entry animations are functional.
- Basic responsiveness for mobile and desktop views.
