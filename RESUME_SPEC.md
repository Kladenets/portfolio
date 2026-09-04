# Resume Experience Specification

## Purpose

Define the requirements for a custom JSON Resume experience for kylekent.dev. The experience must support a polished public resume, local recruiter-facing PDF generation, and a future Cloudflare edge-rendered deployment without creating a second resume data system.

The resume theme is based on the supplied minimal, single-column PDF reference and the portfolio's existing minimalist, boxy visual language.

## Scope and Principles

- The resume data must remain standard JSON Resume data.
- The exhaustive working master remains the source used to create new resume versions.
- `resume-public.json` is a manually curated all-purpose public resume. It is not the exhaustive working master and is not a second equivalent master source.
- Job-specific resumes are temporary local JSON copies generated from the working master with agentic assistance and a job description. They are not permanent public content.
- The theme must not invent experience, metrics, dates, ownership, technologies, or outcomes.
- Visible terminology may pair internal IKEA platform names with recognizable external concepts when factually supported, including microfrontends, server-side/client-side rendering, edge computing, Cloudflare Workers, edge caching, Edge Side Includes, and CI/CD.
- Current capability-based skill categories must remain capability-based. The theme must not require proficiency rankings or reintroduce removed `level` fields.
- No hidden text, invisible keywords, off-screen content, image-based text, or ATS manipulation is permitted.
- The JSON Resume registry metadata should remain `"macchiato"` unless a demonstrated compatibility requirement changes it.
- The existing registry link will be replaced only after the self-hosted resume route is available.

## Shared Theme Requirements

The custom theme must be a standalone React theme package that can be consumed by both the resume tooling and the portfolio site.

### Target technology

- The portfolio integration must target Next.js.
- The shared theme must target React 19.
- Theme and portfolio integration code must target TypeScript, with typed boundaries for resume data, theme options, and data-loading failures.
- The portfolio route must support React Server Components and keep the resume document server-renderable.
- The implementation should be compatible with the React Compiler and follow the repository's compiler guidance rather than adding manual memoization by default.
- Tailwind CSS may be used for portfolio integration and theme styling where it improves consistency with the existing site, but generated resume HTML must retain explicit print and standalone CSS behavior.
- The implementation must use a JSON Resume schema-validation boundary before rendering externally sourced data.
- Browser-level rendering and interaction checks must use an established browser test tool, such as Playwright, when the repository's test setup is introduced.
- The implementation must not require a specific Cloudflare adapter in the shared theme package. The deployment adapter is an application concern and must preserve the theme's React and `render(resume)` interfaces.

### Public interface

The package must expose:

```ts
render(resume): string
```

The `render` function must return a complete HTML document suitable for local HTML preview and PDF generation.

The package must also expose the React resume component for direct use by the portfolio's `/resume` route.

### Visual requirements

The theme must:

- Use a single-column document structure based on the reference PDF.
- Preserve a compact, document-first reading flow.
- Use the portfolio's boxy headings, strong borders, muted rose/olive/neutral palette, and restrained offset or rule treatments as subtle brand cues.
- Keep decoration subordinate to the content and readable in print.
- Make the name the strongest header element.
- Present contact links as visible, selectable, ordinary text links.
- Use clear section headings and consistent spacing.
- Align company/date and role/location metadata consistently.
- Maintain readable bullet indentation, wrapping, and line height.
- Present projects and education compactly without turning them into decorative cards.
- Support both comfortable and compact density so the public resume and exhaustive master remain usable with the same design.
- Avoid the portfolio's full-page scroll snapping, large hero treatment, and interaction-dependent animations within the resume document.

### Typography and assets

- Use a commonly used, permissively licensed font bundled with the theme or its consuming application.
- The font must render consistently in browser, print preview, Chromium PDF output, and local CLI tools.
- The theme must define robust fallback fonts if bundled font loading is unavailable.
- Source Sans 3 or IBM Plex Sans are preferred initial candidates; the final choice must be made after visual comparison with the PDF reference.
- Body text must prioritize legibility at resume density. Display and monospace fonts must not reduce readability.

### Accessibility and ATS requirements

- The DOM order must match the logical reading order.
- Semantic headings, lists, links, and document landmarks must be used.
- Visual columns or positioning must not reorder copied or extracted text.
- Text must remain selectable and copyable in HTML and PDF output.
- Links must remain functional in HTML and clickable when supported by PDF output.
- The theme must not rely on color alone to communicate hierarchy or meaning.
- The theme must not use icons as the only representation of contact information.

### Responsive and print requirements

- The document must render as a normal scrolling page at narrow viewport widths.
- The desktop presentation must remain readable without horizontal scrolling.
- Print styles must define page size, margins, colors, links, and break behavior.
- Work entries and bullet groups must avoid awkward splits where browser/PDF support allows.
- Section headings should not be stranded at the bottom of a page.
- The design must remain usable when the exhaustive master spans more pages than the public resume.
- Screen and print variants must share the same document structure and content.

## Phase 1: Static Deployment with Custom Resume Theme

### Objective

Phase 1 provides a self-hosted resume page using the current static Cloudflare Pages deployment model. The page is generated from a local copy of `resume-public.json`, and resume content changes become public only after the portfolio is rebuilt and deployed.

### Data requirements

- The portfolio must use a local `resume-public.json` copy for Phase 1.
- The local public file must contain the curated all-purpose resume, not `resume-working-master.json`.
- The working master must not be published to the portfolio or included in the public resume route.
- The local public file must be manually maintainable with agentic assistance.
- The portfolio experience section may remain separately curated and manually maintained.
- The homepage must not depend on the resume page's data loading or theme rendering to function.

### Route and integration requirements

- A dedicated `/resume` route must exist in the portfolio.
- The route must render the shared React theme package directly.
- The primary resume presentation must not be an iframe or embedded generated HTML document.
- The route must render a normal, indexable HTML document in the static build output.
- The route must provide a clear path back to the portfolio.
- The route must work as a direct link shared with recruiters.
- The route must use ordinary responsive scrolling rather than the portfolio's full-page snap-scroll container.
- The existing JSON Resume registry link must no longer be the primary resume destination after the self-hosted route is ready.
- The registry URL may remain available outside the primary resume call to action during transition, but it must not remain the primary public resume destination.

### PDF requirements

- Phase 1 does not require a web PDF download or server-side PDF generation.
- Browser print support must be usable through print CSS.
- PDFs must be generated locally when needed using the shared theme and `resume-cli` and/or `resumed`.
- Temporary job-specific JSON files must be renderable locally through the same theme.
- No recruiter-specific resume copies need to be stored in the portfolio repository.

### Phase 1 acceptance criteria

- The public resume renders at `/resume` from local `resume-public.json`.
- The route is usable on desktop and narrow mobile viewports.
- The page has correct heading hierarchy, selectable text, readable links, and logical copy/paste order.
- The layout matches the PDF's minimal single-column character while sharing restrained visual cues with the portfolio.
- The exhaustive working master can be rendered locally without layout failure.
- A minimal JSON Resume fixture with optional sections absent can be rendered without empty headings or broken layout.
- Local HTML preview and PDF generation work through the selected resume tooling.
- The current portfolio remains functional when the resume page is not visited.

## Phase 2: Cloudflare Workers Deployment with Public Resume Data

### Objective

Phase 2 provides a Cloudflare Workers-compatible deployment in which the Next.js application server-renders the resume from the public curated `resume-public.json` hosted in a GitHub Gist.

The deployment must support request-time server rendering and React Server Components as used by the application. The exact Cloudflare adapter/runtime remains an implementation decision and must be selected based on current Cloudflare guidance and compatibility testing.

### Deployment requirements

- The deployed application must run on a Cloudflare server-side runtime capable of request-time rendering.
- The Phase 1 static-export behavior must no longer determine the production runtime.
- The GitHub-connected deployment workflow must produce and deploy the Workers-compatible application.
- The solution must be compatible with the Cloudflare free tier for expected personal portfolio traffic, subject to validating runtime CPU limits.
- The deployment must preserve the existing domain and portfolio behavior unless a hosting migration requires an explicit change.

### Public data requirements

- The public JSON must remain accessible through a public GitHub Gist initially.
- The hosted file must be the curated `resume-public.json`, never the exhaustive working master.
- The working master must remain in private or controlled source control and be used locally to create new resume versions.
- The server must fetch the raw Gist JSON, not depend on the human-facing Gist page.
- The server must validate that the response is successful, parseable JSON Resume data before rendering, and handle malformed content explicitly.
- The server-rendered page must contain the resume content in the initial HTML response for SEO and accessibility.
- The resume theme must remain independent of the data source and must not know whether data came from a Gist, local file, or another service.

### Build-time validation and runtime resilience

- The current public JSON must be fetched during the application build.
- A failed build-time fetch, unsuccessful response, invalid JSON, or invalid resume shape must fail the build.
- The validated build-time copy must be bundled with the application as a last-known-good fallback.
- If the Gist cannot be read at request time, the application must render from the bundled fallback rather than producing a blank resume or taking down the portfolio.
- Runtime fetching must use appropriate caching or revalidation so every visitor does not trigger an unnecessary external request.
- The fallback must be visibly and operationally equivalent to the normal resume page; it must not expose hidden status text or alter the document's ATS content.
- The homepage experience section must remain independently renderable if the resume Gist is unavailable.

### Phase 2 acceptance criteria

- A request to `/resume` receives server-rendered resume HTML from the Workers deployment.
- The initial response contains meaningful resume text without requiring browser JavaScript.
- The public Gist can be updated independently of the portfolio source repository.
- A valid public Gist update is reflected according to the configured cache/revalidation behavior.
- An unavailable or malformed Gist does not blank the resume page or break the homepage.
- A failed build-time fetch prevents deployment of an unvalidated public resume.
- The bundled validated copy is available as the runtime fallback.
- The deployment remains within the tested free-tier request and CPU constraints for expected traffic.
- The resume theme continues to work for local HTML and PDF generation after the Workers migration.

## Validation Requirements

Validation must use the real `resume-working-master.json` and `resume-public.json`, plus focused fixtures.

### Content coverage

- Long IKEA work history.
- Current capability-based skill categories without proficiency levels.
- Projects and education.
- Contact links and profiles.
- Long bullets and wrapped technical terminology.
- Missing optional JSON Resume sections.
- Missing optional dates, locations, links, and descriptions.
- Long company names, job titles, and URLs.
- Multiple pages and entries near page boundaries.

### Output coverage

- Local browser HTML preview.
- `resume-cli` HTML output.
- `resume-cli` PDF output.
- `resumed` rendering where practical.
- Browser print preview.
- Static Phase 1 `/resume` output.
- Workers Phase 2 server response.
- Narrow mobile viewport.
- Text selection and copy/paste.
- Plain-text extraction from generated PDFs.
- Link behavior in browser and PDF.
- Font loading with bundled fonts and fallbacks.
- Runtime fallback when the public Gist is unavailable.

## Explicit Non-Goals

- Replacing the exhaustive working master with the public resume.
- Maintaining many permanent job-specific resume files.
- Publishing the working master on the portfolio.
- Adding hidden keywords, invisible content, off-screen text, or scraper-specific content.
- Adding proficiency rankings to capability-based skill categories.
- Requiring a web PDF download in Phase 1.
- Making the homepage experience section depend on runtime availability of the public resume Gist.
- Registering the custom theme in the JSON Resume registry during these phases.
- Replacing the existing registry metadata with a custom slug without a demonstrated need.

## Future Considerations

After Phase 2 is stable, the project may evaluate:

- A visible PDF download generated and published through CI.
- On-demand PDF generation, if its operational cost and Workers compatibility are justified.
- Moving the public JSON from a Gist to a more controlled public source.
- A build or projection that shares selected resume facts with the manually curated portfolio experience section.
- Publishing the theme to npm and pursuing official JSON Resume registry registration.
