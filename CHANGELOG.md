# Changelog

## 2.0.0 (2026-11-21)

Full rebuild of the site and the resume.

### Site
- Replaced the Create React App developer template with Next.js 16, React 19, TypeScript and Tailwind CSS 4. Pages are prerendered as static HTML, so the content is visible to search engines and loads without waiting on JavaScript.
- New design: warm light theme with a rose accent, automatic dark mode, Fraunces headings and DM Sans body text.
- Phone layout works like an app: fixed bottom tab bar (Home, Experience, Skills, Resume, Contact) with safe-area spacing, large touch targets, and no horizontal scrolling down to 320 px. Desktop gets a top navigation that highlights the section on screen.
- Installable: correct web app manifest, theme colors and icons (the old manifest still said "Create React App Sample").
- One scrolling home page (hero, about, experience, skills, education and volunteer work, contact) plus `/resume`. The old `/about` and `/project` links redirect to the matching section.
- New images replace the cartoon avatars: a headshot made from her own photo and an About-section illustration, both generated with the GPT Image 2.6 Sunburst model. No company logos or uniforms.
- Rewrote all copy in plain language using only facts from her 2024 resume. Skills are now labeled and grouped instead of an unlabeled icon grid.
- Removed the 1.2 second preloader, the particle background, the typewriter effect and about 6 MB of unused images.
- SEO: page metadata, canonical URLs, generated Open Graph image (replacing third-party image links), `Person` structured data, `sitemap.xml` and `robots.txt`.
- Accessibility: semantic landmarks, skip link, visible focus states, reduced-motion support.

### Resume
- `/resume` is now a real web page (readable and selectable on a phone) instead of a PDF drawn on a canvas at 60% scale.
- New one-page PDF, `public/Richelle-Brokaw-Resume.pdf`, generated from the same content with `npm run resume:pdf`. It is single-column real text with standard headings so applicant tracking systems can read it.
- Privacy: removed her street address (city only). Phone numbers (hers and her reference's) are on the PDF only, not on the website.
- Reference: Austin Spraggins is listed on the resume page and the PDF.

### Project
- All content lives in `src/content/resume.ts`.
- Removed unused dependencies (`axios`, `@react-pdf/renderer`, `react-pdf`, `react-github-calendar`, `react-tsparticles`, `react-bootstrap` and others).
- Rewrote the README.
