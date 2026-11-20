# Nara Innovations website

Next.js 16 (App Router, TypeScript) build of narainnovations.com. Static brochure site, tier S: no forms, cookies, analytics or database.

## Run

```
npm install
npm run dev      # http://localhost:3000
npm run build    # production build, all routes prerendered
```

## Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/vision` | Our vision |
| `/portfolio` | Portfolio |
| `/news` | News |
| `/contact` | Contact |
| `/privacy-policy` | Privacy policy |
| `/cookie-policy` | Cookie policy |
| `/terms` | Terms of use |

Also generated: `/sitemap.xml`, `/robots.txt`, Open Graph and Twitter images.

## Where things are

- `src/config/site.ts`: company name, email, address, company number, nav links, legal "last updated" date. Change these in one place.
- `src/app/globals.css`: the design (ported unchanged from the HTML prototype). Tokens are the CSS variables at the top.
- `src/components/`: `Header`, `Footer`, `VideoHero`, `Panels` (feature panel, cards, standards), `Mockups` (the small UI previews), `LegalPage`.
- `src/fonts/`: Plus Jakarta Sans, self-hosted through `next/font/local` (no request to Google).
- `public/`: favicons, `brand/` logos, `media/hero.mp4` and poster.

## Rules to keep

- The privacy and cookie policies say the site has no cookies, analytics or forms. Update both before adding any.
- Contact is by email only.
- Compliance Guru is "Launching soon". Update the News post and status tags (`Mockups.tsx`, `news/page.tsx`, `portfolio/page.tsx`) when it goes live.
- Keep `autoPlay muted loop playsInline` on the hero video so it plays on phones.

## Before going live

- Confirm the registered office and company number are still correct.
- Deploy to Vercel and point narainnovations.com at it (check MX and other DNS records first so email keeps working).
