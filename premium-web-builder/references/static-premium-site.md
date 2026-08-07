# Track A — Static Premium Site (portfolio, landing page, brand site)

Use this track when there's no login, no persistent user data, and no database — a portfolio, a single-page product or brand launch, an agency site, a personal site. The whole thing could ship as static HTML/CSS/JS. The bar: a visitor should assume this cost $10,000 to build.

This track optimizes for one thing a SaaS build can't afford to: a single, deep, unforgettable moment. Read `design-principles.md` first — everything below assumes those five rules as a baseline.

## Work in this exact order — don't reorder

Skipping ahead (especially straight to layout) is the single biggest reason these builds end up generic. Each step exists to block a specific failure mode of the previous one.

### 1. Signature technique first — before any layout exists

Pick ONE signature technique and build it as a standalone working demo before writing a single layout section. Choose from: a GPU fluid/smoke simulation, a scroll-driven 3D object (procedural — no downloaded models), variable-font kinetics, a generative growth system, a WebGL image/fabric distortion, or particle choreography that responds to input.

One technique executed deep beats five executed shallow. If the ambitious option fails twice, drop to something simpler and execute *that* perfectly — a flawless simple signature reads more expensive than a broken impressive one. This ordering matters: building layout first and sprinkling an effect on top is exactly how generic AI sites get made; building the effect first forces the whole page to be designed around one real idea.

### 2. Brand fiction before styling

Write the copy before any CSS. You need: a one-line positioning statement, 3 products/services with real names and real prices, one manifesto-style paragraph, one process/craft section, a specific address, and a constraint that implies scarcity ("by appointment," "400 bottles a year," "one client a month"). Use the industry's own vernacular — real materials, real units, real durations.

Never use lorem ipsum or generic filler ("crafted with passion," "elevate your brand") — placeholder copy makes even a well-designed layout read as fake, because the eye picks up on genericness in text faster than in visuals. If the brand is fictional, say so somewhere on the finished site (e.g. in a footer note or a "guide" page) rather than letting it pass as real.

### 3. Author the system as a written spec

Follow the shared system rules in `design-principles.md` (palette, type, spacing), plus these track-specific additions for a single showcase page:

- **Type scale:** the display face should be set HUGE — 10rem+ for the hero, scaling down via `clamp()` to ~4rem on mobile. A static site has room to be loud in a way a dense app doesn't.
- **Section padding:** ≥96px desktop, ≥56px mobile. Body text max-width 60–75ch, line-height ≥1.5.

### 4. Build — static, no bundler

One folder: `index.html` + `styles.css` + `main.js` (+ modules as needed) + optionally a `guide.html`. Libraries via CDN/import-map only — e.g. Three.js (import map), GSAP + ScrollTrigger, Lenis for smooth scroll. No build step required.

Structure: loader (≤2s, on-theme, not a generic spinner) → hero (signature technique + huge display type) → manifesto → signature showpiece section → offering/collection → craft/process → CTA footer. 6–8 sections total is usually enough.

Wire the signature technique into the whole page, not just the hero: hovers should feed it, section transitions should pulse it, the cursor should stir it if that fits the technique. It should also move on its own at rest, so a screen recording looks alive even with no input. Respect `prefers-reduced-motion` with a real static fallback, and never let a JS failure blank the page — set initial visual states from JS rather than hiding content in CSS that only JS reveals, so a broken script degrades to *plain*, not *blank*.

### 5. Verify like a hostile critic

Load the real page in a browser (headless is fine). Walk it top to bottom at 390px, 768px, and 1440px. Check: zero console errors, no horizontal overflow, every link and button actually works, every card's hover state, and — this is the part builds usually skip — watch pinned or scroll-scrubbed sections both enter *and* leave. Exit transitions are where cheap builds get caught; a section that animates in beautifully but just vanishes on scroll-past looks unfinished.

At each viewport ask: where does the eye die? What looks default? Fix what you find, then walk the whole thing again. Two full passes minimum — the second pass is where genuinely expensive-looking output gets made, not the first draft.

### 6. Ship with receipts

If deploying, verify the live URL actually returns 200 at `/` (and `/guide` if you built one). A short `guide.html` or footer note documenting the concept, how the signature technique works, the named palette, and the type choices adds credibility and doubles as a portfolio artifact in its own right.

## What "good" looks like vs. what to avoid

| Do | Don't |
|---|---|
| One deep signature moment, wired into hovers/scroll/cursor | Five different animated libraries stacked on one page |
| A named, specific palette with warmed/cooled extremes | Default Tailwind palette or stock purple-on-dark gradient |
| Copy with real names, prices, and specific constraints | Lorem ipsum or "crafted with passion" filler |
| Motion that answers what/where/what's-possible | Fade-in-on-scroll applied to literally every block |
| Two full hostile-critic passes including exit transitions | Shipping after the first look that renders without errors |
