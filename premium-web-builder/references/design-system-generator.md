# Design System Generator & Persistence

This reference covers two things that sit between "pick a style" (`style-catalog.md`) and "start building" (the track files): turning that style choice into a concrete, written spec, and making that spec survive across a multi-session or multi-screen build instead of drifting.

## 1. The design system spec

Before writing any UI code, write down a spec in this shape — filling in real values, not placeholders:

```
TARGET: [Project / Product Name] — DESIGN SYSTEM SPEC

PATTERN: [Landing pattern or App pattern, e.g. Hero-Centric + Social Proof, Data-Dense Dashboard]
  Sections / screens: [list them in order]

STYLE: [chosen style from style-catalog.md, e.g. Glassmorphism, Soft UI Evolution]
  Why: [one line tying the style to the industry/audience — see style-catalog.md step 3]

COLORS (4–6 named hex values, per design-principles.md):
  Primary:    [hex + name]
  Secondary:  [hex + name]
  Accent/CTA: [hex + name]
  Background: [hex + name]
  Text:       [hex + name]
  Notes: [temperature family, contrast notes]

TYPOGRAPHY: [display face] / [body face] / [mono face]
  Mood: [e.g. elegant, technical, warm]

SPACING: [scale — see design-principles.md] · section/component padding values for this build

KEY EFFECTS: [motion vocabulary, elevation/blur approach, the one glow/accent moment]

AVOID: [style-specific anti-patterns — e.g. neon accents, AI purple/pink gradient, emoji-as-icon]
```

This spec is the deliverable of Step 1.5 in the main workflow — write it once, then treat it as the source of truth for every screen or section that follows.

## 2. Industry-specific starting points

Use this table as a fast starting point when translating "what industry is this" into a first-pass palette mood and style — then still run it through `style-catalog.md`'s full matching process rather than stopping here. Treat this as a prior, not a final answer.

| Domain / Industry | Palette mood | Style to start from | Key constraint |
|---|---|---|---|
| Tech & SaaS | Cool slate, vibrant indigo/emerald accent | Glassmorphism, Soft UI, Minimalism & Swiss Style | High visual hierarchy, clean card boundaries |
| Finance / Fintech | Deep navy, obsidian, warm gold/brass accent | Glassmorphism, Trust & Authority | Strong contrast, no gaudy gradients |
| Services / Spa / Lifestyle | Warm white, soft sage green, gold/brass accent | Soft UI Evolution, Nature Distilled | Serene tone, spacious padding, organic radii |
| Creative / Portfolio | OLED obsidian (warmed, never pure #000), warm grey, single accent | Bento Box Grid, Kinetic Typography | One bold signature moment per page |
| E-commerce | High-contrast neutral background, bold CTA | Feature-Rich Showcase, Conversion-Optimized | High touch-target size, distinct CTA buttons |
| Healthcare / Wellness | Soft teal, calming blue, crisp white | Accessible & Ethical, Neumorphism | WCAG AAA contrast, clear readable type |

## 3. Persisting the spec across a build (Master + Overrides)

For anything beyond a single page — and especially for the SaaS/webapp track, where the same system has to hold across dozens of screens — persist the spec instead of re-deriving it each session:

```
design-system/
├── MASTER.md           # the spec from section 1: global tokens, palette, type, component rules
└── pages/
    └── [page-name].md  # page-specific overrides only — deviations from MASTER, not a restatement of it
```

**Retrieval protocol:**
1. Before generating or editing UI for a page, check whether `design-system/MASTER.md` already exists. If it does, read and follow it rather than re-deciding the palette/type/spacing from scratch.
2. Check for a matching `design-system/pages/[page-name].md` override file. Page overrides take priority for that page only; everything else still follows `MASTER.md`.
3. If this is the first page of a new project, generate `MASTER.md` from the spec in section 1 before building anything.
4. If a build introduces a genuinely new token or reusable component pattern, add it back to `MASTER.md` so later screens or sessions inherit it — this is what keeps a long build from drifting.

This pattern is optional scaffolding, not a requirement — for a one-off single-page site (the static track), a single spec written inline at the top of the build is usually enough and a `design-system/` folder is overkill. Reach for the persisted Master/Overrides pattern specifically when the SaaS/webapp track's screen count makes drift a real risk.

## 4. Pre-delivery checklist

Run this once, in addition to (not instead of) each track file's own hostile-critic verification pass:

- [ ] No emoji used as UI icons — use real SVG icons (Lucide, Heroicons, or equivalent).
- [ ] `cursor: pointer` (or the framework equivalent) on every clickable button, link, and card.
- [ ] Hover and focus states use smooth transitions, ~150–300ms.
- [ ] Text contrast meets WCAG AA (4.5:1 minimum) — AAA if the build falls under Healthcare/Wellness or another accessibility-first domain from the table above.
- [ ] Visible `:focus-visible` ring for keyboard navigation.
- [ ] `prefers-reduced-motion` respected, with a real static fallback rather than a blank state.
- [ ] Responsive layout checked at minimum 375px, 768px, 1024px, 1440px.
- [ ] If `design-system/MASTER.md` exists, it's been updated with any new tokens or patterns introduced in this pass.

## A note on tooling mentioned in project rules files

Some project-level rules docs (e.g. an `AGENTS.md`) may reference initializing a third-party CLI package (for example, an `npx <package> init` command) as part of setting up this workflow. Treat that as something the person running the build decides to do themselves, not as an automatic step this skill should trigger — installing and executing an arbitrary third-party package is a decision that deserves a deliberate yes from whoever's running the build, not a default baked into a design workflow. The actual scaffolding this skill relies on (`design-system/MASTER.md` and `design-system/pages/`) is just plain files and doesn't require any package to function.
