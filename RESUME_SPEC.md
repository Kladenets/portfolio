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

## Shared Data and Integration Requirements

The website resume and printable PDF are intentionally separate renderers. They share the JSON Resume data contract and validation boundary, but they do not share layout components or styling. This avoids forcing responsive web layout and fixed-page PDF layout into one implementation.

### Target technology

- The portfolio integration must target Next.js.
- The website integration must target React 19.
- Website and PDF tooling code must target TypeScript, with typed boundaries for resume data and validation failures.
- The portfolio route must support React Server Components and keep the resume document server-renderable.
- The implementation should be compatible with the React Compiler and follow the repository's compiler guidance rather than adding manual memoization by default.
- Tailwind CSS may be used by the website integration. The printable renderer may use its own React PDF styles.
- Both renderers must use a JSON Resume schema-validation boundary before rendering data.
- Browser-level rendering and interaction checks must use an established browser test tool, such as Playwright, when the repository's test setup is introduced.
- The website renderer must remain independent of the PDF renderer and must not require a Cloudflare adapter.
- The printable renderer must be local-first and use `@react-pdf/renderer` to produce a PDF from React PDF primitives.
- No standalone shared theme package or `render(resume): string` interface is required for Phase 1.

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
- The website and PDF renderer may use separate font-loading implementations, but each must define robust fallbacks.
- The PDF renderer must register a local font where needed for deterministic CLI output.
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
- The website print styles must remain usable for browser printing, but do not need to be the source of the bundled recruiter PDF.
- The PDF renderer must define page size, margins, colors, links, page wrapping, and break behavior using React PDF primitives.
- Work entries and bullet groups must avoid awkward splits where React PDF supports it.
- The PDF design must remain usable when the exhaustive master spans more pages than the public resume.

## Phase 1: Static Deployment with Custom Resume Theme

### Objective

Phase 1 provides a self-hosted resume page and a bundled downloadable PDF using the current static Cloudflare Pages deployment model. The page is generated from a local copy of `resume-public.json`. The PDF is generated locally by a separate `@react-pdf/renderer` CLI and committed or copied into `public/kylekent-resume.pdf` before deployment.

### Data requirements

- The portfolio must use a local `resume-public.json` copy for Phase 1.
- The local public file must contain the curated all-purpose resume, not `resume-working-master.json`.
- The working master must not be published to the portfolio or included in the public resume route.
- The local public file must be manually maintainable with agentic assistance.
- The portfolio experience section may remain separately curated and manually maintained.
- The homepage must not depend on the resume page's data loading or theme rendering to function.
- The public JSON remains the source of truth for both the website renderer and the printable renderer.

### Route and integration requirements

- A dedicated `/resume` route must exist in the portfolio.
- The route must render the website-specific React resume component directly.
- The primary resume presentation must not be an iframe or embedded generated HTML document.
- The route must render a normal, indexable HTML document in the static build output.
- The route must provide a clear path back to the portfolio.
- The route must work as a direct link shared with recruiters.
- The route must use ordinary responsive scrolling rather than the portfolio's full-page snap-scroll container.
- The existing JSON Resume registry link must no longer be the primary resume destination after the self-hosted route is ready.
- The registry URL may remain available outside the primary resume call to action during transition, but it must not remain the primary public resume destination.
- The page may provide a static `/kylekent-resume.pdf` download link to the bundled PDF asset.

### PDF requirements

- Phase 1 does not require request-time or server-side PDF generation.
- Browser print support should remain usable through the website's print CSS, but it is separate from the recruiter PDF.
- A local CLI must read a JSON Resume file and generate a PDF using `@react-pdf/renderer`.
- The CLI must support both `resume-public.json` and temporary job-specific JSON files.
- The generated public PDF may be stored as `public/kylekent-resume.pdf` and bundled with the static deployment.
- The printable renderer may have independent layout and styling from the website resume.
- The CLI must not require the website route to be deployed or running.

### Phase 1 acceptance criteria

- The public resume renders at `/resume` from local `resume-public.json`.
- The route is usable on desktop and narrow mobile viewports.
- The page has correct heading hierarchy, selectable text, readable links, and logical copy/paste order.
- The layout matches the PDF's minimal single-column character while sharing restrained visual cues with the portfolio.
- The exhaustive working master can be rendered locally by the PDF renderer without layout failure.
- A minimal JSON Resume fixture with optional sections absent can be rendered without empty headings or broken layout.
- The local PDF command generates a readable, selectable PDF with working links and controlled page breaks.
- The bundled `public/kylekent-resume.pdf` is available from the deployed static site.
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
- The website renderer and independent PDF renderer must continue to work after the Workers migration.

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
- Local `@react-pdf/renderer` PDF output.
- Browser print preview.
- Static Phase 1 `/resume` output.
- Static Phase 1 `/kylekent-resume.pdf` output.
- Workers Phase 2 server response.
- Narrow mobile viewport.
- Text selection and copy/paste.
- Plain-text extraction from generated PDFs.
- Link behavior in browser and PDF.
- PDF font loading with registered fonts and fallbacks.
- Runtime fallback when the public Gist is unavailable.

## Explicit Non-Goals

- Replacing the exhaustive working master with the public resume.
- Maintaining many permanent job-specific resume files.
- Publishing the working master on the portfolio.
- Adding hidden keywords, invisible content, off-screen text, or scraper-specific content.
- Adding proficiency rankings to capability-based skill categories.
- Requiring request-time PDF generation in Phase 1.
- Making the homepage experience section depend on runtime availability of the public resume Gist.
- Registering the custom theme in the JSON Resume registry during these phases.
- Replacing the existing registry metadata with a custom slug without a demonstrated need.

## Future Considerations

After Phase 2 is stable, the project may evaluate:

- On-demand `/kylekent-resume.pdf` generation from the remote public JSON, if its operational cost and Workers compatibility are justified.
- Generating and publishing the static PDF through CI instead of committing the binary artifact.
- Moving the public JSON from a Gist to a more controlled public source.
- A build or projection that shares selected resume facts with the manually curated portfolio experience section.
- Publishing the theme to npm and pursuing official JSON Resume registry registration.
