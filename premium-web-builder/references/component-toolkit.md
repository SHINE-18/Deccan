# Component & Reference Toolkit

A short, curated list of where to pull ready-made sections, animated components, or design references from — not a dump of every library that exists. The rule that ties all of these together: **tools are free, taste isn't.** Any of these can make a section look expensive, or cheap if five of them get combined on one page. Pick one thing per page/view and commit to it.

This applies to both tracks, but weigh it differently: on a static site, pulling one showpiece section from one of these is often exactly right. On a SaaS app, lean toward building your own tokenized primitives (see `saas-webapp.md`) and only reach for these for isolated, infrequent moments (an empty-state illustration, a marketing/landing page bolted onto the app), since app-wide consistency matters more than any single section looking impressive.

## reactbits.dev — animated components + backgrounds
Drop-in React components with the motion already handled: backgrounds, text effects, "how'd they do that" moments.
- **Reach for it** when a page feels flat and needs one signature moment that makes it feel alive.
- **Skip it** when three things are already moving on the page — more motion won't fix that, restraint will.

## refero.design — real-product design references
A library of screens from real, shipped products. See how good teams actually solved a section before designing it from scratch.
- **Reach for it** when staring at a blank hero (or blank dashboard section) and needing to steal a *decision*, not a layout.
- **Skip it** if the plan is to copy a whole page 1:1 — reference the thinking behind the decision, not the pixels.

## ui.aceternity.com — premium animated sections
Polished, ready-to-paste sections that look expensive out of the box.
- **Reach for it** for one hero moment that punches above the available build time.
- **Skip it** once the page starts turning into a demo reel of effects — one showpiece per page, maximum.

## 21st.dev — community React sections
A large, searchable set of community-built sections and blocks (hero, pricing, FAQ) assembled in minutes.
- **Reach for it** when a full section is needed fast and the stack is already React + Tailwind.
- **Skip it** on a plain-HTML build — these assume a React stack.

## componentry.dev — animated shadcn-ready components
Drop-in animated pieces that slot into a shadcn/Tailwind setup with clean defaults.
- **Reach for it** on a shadcn stack, for motion without wiring it from scratch — a good fit for the SaaS track's "build primitives first" approach since these are already primitive-shaped.
- **Skip it** when mixing three different component libraries in one build — pick one component language and commit, especially important on the SaaS track where consistency across screens matters more than any single component's polish.

## Choosing across libraries

If a build needs sections from more than one of these, keep the *visual system* (palette, type, spacing, one motion vocabulary) consistent across whatever gets pulled in — a section that technically drops in cleanly but uses a different shadow style, corner radius, or animation easing than the rest of the page will read as stitched-together rather than designed. When in doubt, restyle the pulled-in section to match the established system rather than letting the system drift to match the section.
