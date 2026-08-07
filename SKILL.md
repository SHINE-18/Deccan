---
name: react-motion-portfolio-builder
description: Build a high-end, ultra-responsive minimalist portfolio site using React (Vite) + Tailwind + Framer Motion + Lenis smooth scroll — dark-mode, grain overlay, magnetic buttons, custom trailing cursor, case-study drawer, and a serverless contact form. Use this skill whenever the user asks for a " site," "Framer-style site," "React," or wants a premium personal/agency site built with React/Vite/Tailwind/Framer Motion specifically (as opposed to a static HTML build — see premium-website-builder for that stack). The site is still functionally static: no backend server, no database, deploys as a static build to Vercel/Netlify, and the only "dynamic" piece is a serverless form endpoint (Web3Forms/EmailJS). Trigger this even if the user just describes the aesthetic without naming the stack.
---

# React + Framer Motion Portfolio Builder

A phased build for site on React/Vite/Tailwind/Framer Motion/Lenis. Despite
the React tooling, the deliverable is a **static site** — there's no backend, no database, no
server-rendered routes. Vite just builds it to static `dist/` output, deployed to Vercel or
Netlify. Keep that in mind throughout: don't reach for API routes, server actions, or a database
unless the user explicitly asks for one — the only network call in the whole build is the
serverless form submission.

This skill is the React/Framer Motion counterpart to `premium-website-builder` (vanilla
HTML/CSS/GSAP + Three.js). Use this one when the user names the React stack, or describes the
Framer-esque aesthetic (dark mode, grain, magnetic buttons, trailing cursor) without naming a
stack. The taste principles in `premium-website-builder`'s `references/anti-patterns.md` still
apply here — uniform spacing, motion without a reason, and default dark mode are just as easy to
fall into in React as in vanilla JS. Read that file too if it's available.

## Fixed stack — don't substitute unless asked

- React (Vite)
- Tailwind CSS
- Framer Motion — animation, parallax, magnetic buttons, custom cursor
- `@studio-freight/react-lenis` — smooth inertia scrolling
- `lucide-react` — icons
- Web3Forms or EmailJS — serverless contact form only

## Design system defaults (override if the user specifies otherwise)

- Strict dark mode (`bg-black`), ambient SVG grain overlay, subtle mouse-following radial glow
- Clean geometric sans-serif, heavy uppercase tracking on subheadings
- Custom trailing-dot cursor that expands on hover states

Before locking these in, sanity-check them against the anti-pattern rules: pure black should still
be warmed slightly rather than true `#000`, the glow should be reserved for one moment rather than
applied everywhere, and the grain/cursor effects count as "one signature moment" — don't stack
more motion on top of them.

## PHASE 1 — Discovery (halt and ask, every time)

Before writing any code or running any install commands, ask the user:

1. What should the target root directory/folder name be?
2. Web3Forms or EmailJS for the contact form?
3. Any reference photos, screenshots of an existing site, or Figma mockups to match colors,
   type scale, and layout against?

Wait for answers (and any uploaded images) before touching Phase 2. If the user has already
answered these in the conversation, don't re-ask — extract the answers and confirm briefly instead.

## PHASE 2 — Environment setup & scaffolding

1. `npm create vite@latest . -- --template react`
2. `npm install`
3. `npm install tailwindcss postcss autoprefixer framer-motion lucide-react @studio-freight/react-lenis clsx tailwind-merge`
4. `npx tailwindcss init -p`, then configure `tailwind.config.js` for strict dark mode
5. Create the modular architecture: `/src/components`, `/src/layouts`, `/src/hooks`,
   `/src/assets`, `/src/utils`
6. Set up a global Lenis smooth-scroll wrapper in `App.jsx`

## PHASE 3 — Component development, in batches

Build in batches and render in the browser after each one rather than writing the whole app blind.

**Batch 1 — Core & Hero**
- `CustomCursor.jsx` — trailing dot pointer
- `Navbar.jsx` — fixed header, live IST clock + local weather badge, magnetic hover on the
  "CONTACT NOW" button
- `HeroSection.jsx` — massive scaling text, ambient background grain

**Batch 2 — Showcase**
- `ApproachSection.jsx` — 3-step process layout
- `LogoMarquee.jsx` — infinite scrolling client logos
- `PortfolioGrid.jsx` + `CaseStudyDrawer.jsx` — project grid; clicking a project slides out a
  deep-dive drawer

**Batch 3 — Social proof & footer**
- `AboutSection.jsx` — massive header, overlapping portrait placeholders
- `StatsGrid.jsx` — responsive key-metrics layout
- `TestimonialMarquee.jsx` — infinite scroll cards
- `FAQ.jsx` — Framer Motion animated accordion
- `Footer.jsx` — massive "LET'S WORK TOGETHER" text, `ContactModal.jsx` (functional form with
  validation), `ResumeViewer.jsx` (PDF overlay)

## PHASE 4 — Responsiveness audit

Once everything is built, audit deliberately rather than assuming Tailwind's responsive classes
just work:

1. Mobile-first: base classes should look correct at 320–400px before any breakpoint is applied
2. `md:` — 768px tablet layout
3. `lg:` / `xl:` / `2xl:` — set max-widths (`max-w-7xl mx-auto` etc.) so the UI doesn't stretch
   infinitely on ultrawide monitors; remove any hardcoded pixel widths like `w-[1920px]`

## PHASE 5 — SEO, security & performance audit

1. **SEO/meta:** `<title>`, Open Graph tags, meta description in `index.html`, JSON-LD schema for
   a Person/Designer entity
2. **Security:** every external link uses `target="_blank" rel="noopener noreferrer"`
3. **Performance:** `React.lazy()` for the Case Study Drawer and Contact Modal so they don't block
   initial load; confirm Framer Motion animations use hardware-accelerated properties
   (`transform`, `opacity`) rather than layout-triggering ones

## PHASE 6 — Final handoff

1. Start the dev server: `npm run dev`
2. Summarize the completed architecture for the user
3. Give exact deploy commands: `vercel` or `netlify deploy`
4. Ask: "The premium build is complete. Would you like to review the live preview, or should we
   fine-tune any specific animations or breakpoints?"

## Common failure modes to avoid

1. Skipping Phase 1 and scaffolding before the user has answered the discovery questions
2. Building all three batches at once instead of rendering and checking after each
3. Treating this as a full-stack app — adding a database, API routes, or auth nobody asked for
4. Skipping the responsiveness/SEO/performance audits because the components "look done"
5. Letting Framer Motion animate everything by default instead of reserving heavier motion for
   the hero and showcase moments (see the anti-pattern notes on motion without a reason)
