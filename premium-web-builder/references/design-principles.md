# Design Principles — why AI sites look cheap, and the actual fix

Five mechanical tells show up over and over in AI-generated interfaces, on both static sites and web apps. These aren't vibes — each one has a concrete, checkable fix. Apply all five regardless of which track (`static-premium-site.md` or `saas-webapp.md`) you're following.

## 1. Space has no hierarchy

**The tell:** every element gets the same padding — 16px, 24px, whatever the default is — applied uniformly across the whole page. Nothing feels more important than anything else because nothing was decided to be.

**The fix:** pick one spacing scale and use only values from it: `8 / 16 / 24 / 32 / 48 / 64 / 96 / 128px`. Then break it on purpose. The hero or the primary CTA should sit in noticeably more empty space than the sections around it — emptiness signals importance, it isn't wasted space. Test: if you can point at the page and say "that's the important part" without reading any text, the spacing is doing its job.

## 2. Motion has no reason

**The tell:** every block fades, slides, or spring-animates on scroll because "animation = polish" became the reflex default. The result is constant micro-movement that the eye has to process even though nothing is being communicated.

**The fix:** motion should answer one of three questions — *what changed?* *what can I do?* or *where am I?* If an animation doesn't answer one of those, cut it. Pick one entrance style for the whole build, reserve anything fancier for a single signature moment, and mute animation entirely on repeated elements (list items, table rows, cards in a grid) — repetition of motion reads as noise, not craft.

## 3. The grid is doing structure's job

**The tell:** every layout becomes the same blocky bento grid — equal boxes in equal rows — because that's the safest, most predictable output. Repetition isn't a system; it's the absence of one.

**The fix:** vary column spans and row heights on purpose. One card that's 2x wide, a tall feature card next to two stacked short ones. Break the grid's rhythm at least once per section. If every box in a layout is the same size, that's not minimalism — that's nobody making a decision.

## 4. The glow is doing hierarchy's job

**The tell:** a glowing gradient border wraps every card because there's no real hierarchy underneath it. The glow substitutes for structure — it says "look here" without giving the content an actual reason to be looked at.

**The fix:** turn the glow off entirely on one pass and check whether the layout still reads correctly. If it doesn't, the glow was propping up a design with no real hierarchy — fix size, contrast, and weight first, then decide if glow is still needed. Reserve glow for exactly one element per view, and only after everything else already reads clearly without it.

## 5. Dark mode isn't a decision here

**The tell:** pure black background, oversaturated pink-to-purple gradient blob, done — because that's the path of least resistance, not because anyone weighed it against a light or warm-neutral palette for this specific brand.

**The fix:** before defaulting to dark, ask what it's actually doing for this brand or product. If dark is the right call, commit further than the default: warm the blacks (never pure `#000`), pick two accents from the *same* temperature family instead of a stock pink-purple pair, and use restraint — one glow moment per view, not five.

---

## The pattern underneath all five

A generic model defaults to decoration whenever nobody made an actual decision. The fix is never "add more" — it's picking one thing on purpose per view and committing to it: one spacing hierarchy, one motion vocabulary, one deliberate grid break, one glow moment, one considered palette (light, dark, or warm-neutral). That judgment call is the actual differentiator between something that reads as generated and something that reads as designed.

## Shared system rules (apply on both tracks)

Author the system as a written spec *before* touching layout code — this is what keeps a build coherent across many components or screens instead of drifting page to page.

- **Palette:** 4–6 named hex values. Never pure `#000`/`#FFF` — warm or cool the extremes intentionally. If using a gradient accent pair, pull both from the same temperature family, not a stock purple-on-dark SaaS gradient. Banned: unmodified framework-default palette values.
- **Type:** three roles — a characterful display face, a quiet text face, and a mono for labels/data/timestamps. Banned as a display face: Inter, Roboto, Arial, system-ui — these read as "no decision was made." A display face can be large and expressive even in a dense app; it doesn't have to mean 10rem hero text everywhere (see the two track files for how this differs by context).
- **Spacing:** one scale (`8/16/24/32/48/64/96/128px`), used everywhere, broken on purpose exactly where hierarchy demands it.
- **Structure device:** if you're using numbering, labels, or section markers, make them encode something true about the content (sequence, time, a real coordinate or ID) rather than decorative `01 / 02 / 03`.
