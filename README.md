# Kairos — Smart Finance Landing Page

A polished, fully responsive marketing site for a fictional fintech app, built as a
front-end portfolio piece. Designed in **Figma** and built with **Next.js**, **React**,
**TypeScript**, and a custom **Tailwind CSS** design system.

> Live sections: Hero · Tagline · Features · Dashboard · Finance · Pricing · Reviews ·
> Tools & Workflow · Call-to-action · Footer

## Tech stack

| Area        | Choice                                                            |
| ----------- | ----------------------------------------------------------------- |
| Framework   | [Next.js 16](https://nextjs.org) (App Router, React 19)           |
| Language    | TypeScript                                                        |
| Styling     | Tailwind CSS v4 with a custom theme (`src/app/globals.css`)       |
| Design      | Figma → design tokens → Tailwind theme variables                  |
| Fonts       | `next/font` (DM Sans, self-hosted)                                |
| Images      | `next/image` (optimised, local assets in `/public`)               |
| Editor      | VS Code                                                           |

## What this project demonstrates

- **Component architecture** — every section is an isolated, reusable React component
  in [`src/components`](src/components), composed in [`src/app/page.tsx`](src/app/page.tsx).
- **Custom Tailwind design system** — brand colours, shadows, radii, and keyframe
  animations are defined once as theme tokens, then consumed as utilities
  (`bg-navy`, `text-blue`, `shadow-lift`, `animate-float`, …).
- **Interactivity in React** — a sticky navbar with scroll state + active-link tracking
  via `IntersectionObserver`, a mobile menu, a monthly/annual pricing toggle driven by
  `useState`, and a reusable scroll-reveal wrapper.
- **Accessibility & polish** — semantic landmarks, `aria` labels, `:focus-visible`
  outlines, and a `prefers-reduced-motion` fallback that disables animation.
- **Performance** — statically pre-rendered, optimised images, and self-hosted fonts.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build (statically pre-rendered)
npm run start    # serve the production build
npm run lint     # ESLint
```

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx        # fonts, metadata, <html>/<body>
│  ├─ page.tsx          # composes the sections
│  └─ globals.css       # Tailwind import + custom @theme design tokens
└─ components/
   ├─ Navbar.tsx        # scroll state, active link, mobile menu
   ├─ Hero.tsx          # cloud parallax + floating glass cards
   ├─ Tagline.tsx
   ├─ Features.tsx
   ├─ Dashboard.tsx     # 4 product cards (chart, exchange, payment, bills)
   ├─ FinanceSimple.tsx
   ├─ Pricing.tsx       # monthly/annual toggle (useState)
   ├─ Testimonials.tsx
   ├─ ToolsWorkflow.tsx # the tech-stack showcase
   ├─ FinalCTA.tsx
   ├─ Footer.tsx
   ├─ Reveal.tsx        # IntersectionObserver scroll-reveal wrapper
   └─ ui.tsx            # Container / SectionLabel / SectionTitle primitives
```

## Notes

The UI is an original design realised in Figma; product copy and imagery are
placeholders for demonstration. Built and maintained in VS Code.
