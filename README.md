# Richelle Brokaw: portfolio and resume

The personal site of Richelle Brokaw, Logistics & Operations Specialist in Fresno, CA.

Live: https://richelle-brokaw-portfolio.vercel.app

Built with Next.js (App Router, statically prerendered), TypeScript and Tailwind CSS. Deployed on Vercel from the `master` branch.

## What is here

| Path | What it is |
| --- | --- |
| `src/content/resume.ts` | Every word about Richelle: headline, summary, experience, skills, education. The site and the PDF both render from this one file. |
| `src/app/page.tsx` | Home page: hero, about, experience, skills, education, contact. |
| `src/app/resume/page.tsx` | The resume as a real web page, with a print layout that becomes the PDF. |
| `src/components/` | Header, mobile bottom tab bar, footer, icons. |
| `public/Richelle-Brokaw-Resume.pdf` | The downloadable one-page resume. Generated, do not edit by hand. |
| `public/images/richelle-headshot.jpg` | Her headshot (720 x 720). Made from her own photo with the GPT Image 2.6 Sunburst model: same face and hair, studio background and blazer added. |
| `public/images/richelle-at-work.jpg` | Illustration for the About section, generated with the same model from her photo. |
| `scripts/resume-pdf.mjs` | Prints `/resume` to the PDF with headless Chrome. |

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint
npm run typecheck
```

## Update the resume

1. Edit `src/content/resume.ts`.
2. Copy `.env.example` to `.env.local` and set `RESUME_PHONE` and `REFERENCE_PHONE` (first time only).
3. Run `npm run build && npm run resume:pdf`.
4. Commit the changed `resume.ts` and `public/Richelle-Brokaw-Resume.pdf`, then push.

The PDF must stay on one page. If new content pushes it to two, trim it or lower the print `font-size` in `src/app/globals.css`.

## Privacy rules

- The site shows her city only, never a street address.
- Her phone number is printed on the PDF only. It is not in `resume.ts` or the site's HTML: the PDF script passes it to the page in the URL at print time, from `RESUME_PHONE` in `.env.local` (which is not committed).
- Her reference (Austin Spraggins, listed at his request) appears on the resume with name, title and email. His phone number is PDF only, the same way, from `REFERENCE_PHONE`.

## Change the photo

Replace `public/images/richelle-headshot.jpg` with a square image and update the `width` and `height` on the hero `<Image>` in `src/app/page.tsx` to match, then push.

## Credits

Site by [Spraggins Designs](https://spragginsdesigns.xyz). The first version of this site (2024) was based on the [portfolio template by Soumyajit Behera](https://github.com/soumyajit4419/Portfolio); version 2 is a full rewrite.
