# Axentra Labs — Website

A clean, white-based marketing site for **Axentra Labs**, a SaaS/MVP build studio ("ship in 21 days"). Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Design system

- **Colors** — white base (`#FFFFFF`) with light gray-blue `surface` panels, dark navy text (`#0B0D18`), and the brand gradient `blue → violet` (`#3E6BFF → #7C3AED`) pulled directly from your logo mark — the logo itself was designed for a white background, so the palette is a natural fit.
- **Type** — Space Grotesk (display), Inter (body), JetBrains Mono (labels/eyebrows/stats) — loaded via `next/font/google`.
- **Signature element** — the `BuildMeter` (`components/BuildMeter.tsx`): a fixed side rail that fills with the brand gradient as the visitor scrolls, echoing the diagonal accent stroke in the "A" mark and doubling as a day-counter (D01 → D21) — a physical metaphor for a build progressing toward launch.
- **Chevron dividers** — angular section breaks between Hero and the next section, echoing the apex of the logo's "A".
- **Motion** — scroll-triggered reveals (`Reveal.tsx`), animated gradient headline text, button shine sweeps on hover (`.shine-wrap`), card lift-on-hover (`.card-lift`), animated underline links (`.link-underline`), a hover-to-pause tech marquee, and a scroll-filled comparison bar in the speed section. All motion respects `prefers-reduced-motion`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> Note: the build needs internet access on first run to fetch the Google Fonts (`Space Grotesk`, `Inter`, `JetBrains Mono`) via `next/font/google`. This is normal and only happens once during build/dev startup.

## Structure

```
app/
  layout.tsx       — fonts, metadata, root shell
  page.tsx          — assembles all sections
  globals.css        — base styles, reveal animation, focus states
components/
  Logo.tsx           — LogoMark (icon) + LogoFull (icon + wordmark)
  Navbar.tsx          — sticky nav, mobile menu
  Hero.tsx            — headline, CTA, chevron divider
  BuildMeter.tsx        — signature scroll-progress rail
  TechMarquee.tsx        — scrolling stack strip
  WhyUs.tsx               — 4-card bento grid
  Process.tsx              — 4-stage build timeline (Day 1–21)
  SpeedCompare.tsx           — 21 days vs traditional agency bar chart
  Services.tsx                 — what we build (4 offerings)
  Pricing.tsx                    — 3-tier pricing
  FAQ.tsx                         — accordion
  CTA.tsx                           — final call to action
  Footer.tsx                         — footer nav + contact
  Reveal.tsx                          — scroll-in reveal wrapper
```

## Customize

- **Copy & pricing** — edit the arrays at the top of `Services.tsx`, `Pricing.tsx`, `Process.tsx`, `FAQ.tsx`.
- **Contact email** — replace `hello@axentralabs.com` in `CTA.tsx` and `Footer.tsx`.
- **Booking link** — swap the `#contact` anchors for a Calendly/Cal.com link once you have one.
- **Real project case studies / testimonials** — the current build intentionally omits fabricated client logos and testimonials (Axentra is a new brand). Add a `Work`/`Testimonials` section once you have real projects to show — the `Services.tsx` layout is a ready template to duplicate.

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com/new) — zero config needed for Next.js.
