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
- Header component with desktop navigation and placeholder for mobile.
- Footer component with basic information.
- Section components: `Introduction`, `Skills`, `Experience`, `Projects`, `Contact`.
- Implemented full-page scroll snapping using Tailwind utilities.
- Dark mode functionality via `next-themes`, including system preference detection and manual toggle (`ThemeToggle.tsx`).
- Custom color theme configuration in `tailwind.config.ts` and `globals.css` based on provided palettes.
- Reusable `AnimatedText.tsx` component for scroll-triggered text animations using Framer Motion.
- Populated sections with initial content generated from resume data.
- Implemented mobile hamburger menu functionality in the `Header` component.
- Added basic `README.md` and `CHANGELOG.md`.

### Changed
- Updated main page structure (`app/page.tsx`) to correctly place `Footer` outside the scroll-snap container.
- Refined `Header` styling for responsiveness and added mobile menu toggle icons.
- Adjusted styling in section components to use defined theme colors.

### Fixed
- Ensured `Providers` wrap the application correctly in `layout.tsx` for `next-themes`.
- Added `scroll-smooth` utility for better anchor link scrolling.


## [0.1.0] - YYYY-MM-DD  <!-- Example: Replace with the date you consider the first version "complete" -->

### Added
- First functional version of the portfolio deployed. <!-- Example entry -->
- All core sections (Intro, Skills, Experience, Projects, Contact) implemented with content.
- Dark mode, scroll snapping, and entry animations are functional.
- Basic responsiveness for mobile and desktop views.