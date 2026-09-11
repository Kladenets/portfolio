# Kyle Kent Portfolio

The source for [kylekent.dev](https://kylekent.dev), a personal portfolio and
self-hosted resume for Kyle Kent. The site presents selected experience,
projects, skills, and contact links in a responsive Next.js application.

The portfolio is a static export deployed to Cloudflare Pages. The public
resume is maintained separately as curated JSON Resume data and is fetched and
validated during local development and production builds.

## Features

- Responsive portfolio sections for introduction, skills, experience, projects,
  and contact.
- System-aware dark mode with a manual theme toggle.
- Motion-powered entrance and interaction animations with reduced-motion support.
- Smooth section navigation with scroll snapping on larger screens.
- A dedicated `/resume` page with a responsive HTML resume.
- A generated `/kylekent-resume.pdf` recruiter PDF using React PDF.
- Playwright browser tests for responsive resume behavior and intro navigation.

## Stack

- Next.js 15 with the App Router and static export
- React 19 and TypeScript
- Tailwind CSS 4
- Motion for React animations
- `next-themes` for theme management
- `@react-pdf/renderer` for local PDF generation
- Playwright for end-to-end tests
- Cloudflare Pages for static hosting

## Local Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/Kladenets/portfolio.git
cd portfolio
npm install
```

Start the development server:

```bash
npm run dev
```

The dev command fetches and validates the current public resume before
starting Next.js at [http://localhost:3000](http://localhost:3000).

## Resume Workflow

The public resume source is a raw GitHub Gist. It is fetched into the ignored
`.generated/resume-public.json` file and validated against the JSON Resume
schema before the site renders it.

Fetch the current public JSON resume manually. This writes the validated file
to `.generated/resume-public.json`:

```bash
npm run resume:fetch
```

Generate the bundled PDF resume from that fetched JSON:

```bash
npm run resume:pdf
```

This writes `public/kylekent-resume.pdf`, which is the PDF linked from the
website's resume page. To generate a PDF from another local JSON Resume file
instead, pass its path as the command argument:

```bash
npx tsx tools/resume-pdf/generate.tsx path/to/resume.json
```

To fetch from a different public source temporarily, set `RESUME_GIST_URL`:

```bash
RESUME_GIST_URL=https://example.com/resume.json npm run resume:fetch
```

The exhaustive working master lives in a separate private resume project. This
repository only consumes the curated public resume and must never include the
working master in source control, the static export, or the public resume route.

## Build and Preview

Create the validated static site and bundled PDF:

```bash
npm run build
```

The static output is written to `out/`. To serve that output locally:

```bash
npm run serve:export
```

## Testing and Formatting

Run all browser tests:

```bash
npm run test:e2e
```

The Playwright configuration serves the static `out/` directory. Run
`npm run build` first when testing changes that are not already reflected in
the exported site.

Available checks and formatting commands:

```bash
npx tsc --noEmit
npm run format:check
npm run format:write
```

## Project Structure

```text
src/app/                  Next.js routes, layout, providers, and global CSS
src/components/           Shared UI and portfolio sections
src/components/resume/    Responsive HTML resume renderer and styles
tools/resume-pdf/          JSON Resume validation and React PDF renderer
tests/e2e/                 Playwright browser tests
public/                   Static assets and generated recruiter PDF
RESUME_SPEC.md            Resume data, design, and deployment requirements
```

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for
details.
