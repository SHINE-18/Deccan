---
name: premium-web-builder
description: >
  Use whenever the user wants to design or build a website, landing page, portfolio, SaaS product, dashboard, or web app that should look premium, expensive, polished, high-end, or "like it cost $10K" — or whenever they ask for animation, motion, glow, gradients, hero sections, or a modern look on any web project. Also trigger for any web build that involves user accounts, login, roles/permissions, or a database, even if the user doesn't say "premium" — these need the SaaS/webapp track instead of the static-site track. Always run the classification step first, and don't assume which track applies just because the word "website" appears. Covers both greenfield builds and redesigns of existing sites/apps, including generating and persisting a project's design system across sessions.
---

# Premium Web Builder

Most AI-generated sites look cheap in the same five ways regardless of how good the prompt was: flat spacing, decorative motion, uniform bento grids, glow standing in for hierarchy, and a dark-mode default nobody actually chose. This skill exists to stop that pattern — and it does it in four stages that build on each other: classify the build, decide on a design system, execute the matching track, then verify like a hostile critic. Each stage exists to block a specific failure mode of skipping straight to the next one, so don't reorder them.

## Step 1 — Classify the build

Read what the user has already told you. If they've described the project clearly (e.g. "a login-gated dashboard where admins can manage users" or "a one-page site for my photography portfolio"), you already have your answer — don't re-ask something they've effectively already told you. Otherwise, ask directly (use `ask_user_input_v0` if available, plain text otherwise).

**1. What kind of build is this?**
- **Static premium site** — portfolio, marketing/brand site, single-page product launch, agency site. No accounts, no persistent user data, the whole thing could be static HTML. Success = it looks expensive and has one great "wow" moment.
- **SaaS / working web app** — has (or will have) login, user accounts, a database, roles/permissions, or multi-screen workflows (dashboards, settings, CRUD). Success = it looks premium *and* holds up across dozens of screens and states over months of real use.

**2. What viewport(s) does it need to be great on?**
- Desktop-first (marketing sites usually live here)
- Mobile-first / app-like (a meaningful share of use is on a phone, or the user calls it an "app")
- Fully responsive across both, with real decisions at each breakpoint — not just reflow

Don't skip this even if the user seems to be in a hurry — a few seconds of classification saves a rebuild. If they push back on being asked, make your best inference from context and state the assumption out loud before proceeding.

## Step 2 — Decide the design system

This is where the build gets its actual point of view, before any layout code exists. Two parts, in order:

**2a. Pick one style.** Read `references/style-catalog.md` and choose a single named aesthetic direction that matches the industry and audience (e.g. Glassmorphism for a financial SaaS dashboard, Bento Box Grid for a personal portfolio, Data-Dense Dashboard for an ops monitoring tool). `references/design-system-generator.md` section 2 has a fast industry → palette-mood → style starting-point table if it helps to anchor the search, but still confirm the match against the full catalog rather than stopping at the table. If the user already specified a style or gave strong brand references, use that instead. Either way, name the choice explicitly — one primary style per project; a second style can inform a single accent or section, never the whole build.

**2b. Write the design system spec.** Using `references/design-system-generator.md` section 1, write down the palette (4–6 named hex values), typography (display/body/mono roles), spacing scale, key effects, and anti-patterns to avoid — following the shared system rules in `references/design-principles.md`. For anything beyond a single page (especially the SaaS track), persist this as `design-system/MASTER.md` per section 3 of that same file, so later screens or sessions inherit it instead of re-deriving it and drifting.

## Step 3 — Load and execute the matching track

| Build type | Read this first |
|---|---|
| Static premium site (portfolio/landing/brand) | `references/static-premium-site.md` |
| SaaS / working web app (auth, DB, roles, dashboards) | `references/saas-webapp.md` |
| Mobile-first or fully-responsive, either track | Also read `references/mobile-app-viewport.md` in addition to whichever of the above applies |

Regardless of track, keep `references/design-principles.md` active throughout — it's the shared anti-cheap-AI-site rulebook (spacing, motion, grid, glow, dark mode) both tracks build on top of — and keep `references/component-toolkit.md` nearby for a curated list of where to pull ready-made sections/components from without turning the page into a five-library demo reel.

The philosophy underneath both tracks is the same: tools don't have taste, decisions do. Every fix in this skill boils down to the same move — where a generic AI output defaults to sameness (same padding everywhere, same card size everywhere, motion on everything, glow on everything), a premium build makes an explicit, defensible choice and commits to it. If you can't articulate *why* one element gets more space, more contrast, or more motion than its neighbors, that's the signal something was left on default instead of decided.

## Step 4 — Verify like a hostile critic

Don't hand back the first draft. Load the real thing in a browser (headless is fine), walk it at the relevant breakpoints, and run:

1. The track file's own verification section (static: two full passes including scroll-exit transitions; SaaS: role-by-role flows plus empty/loading/error states plus keyboard nav).
2. `references/mobile-app-viewport.md`'s verification additions, if that file was in scope for this build.
3. The consolidated pre-delivery checklist in `references/design-system-generator.md` section 4 (icons, cursor affordance, transition timing, contrast, focus rings, reduced motion, responsive breakpoints, and — if a `MASTER.md` exists — that it's been updated with anything new this pass introduced).

Fix everything found, then walk it again. This second pass is where the difference between "AI made this" and "this cost real money" actually gets made — don't skip it to save time.
