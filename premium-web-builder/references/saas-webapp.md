# Track B — SaaS / Working Web App (auth, database, roles, dashboards)

Use this track whenever the build has (or will grow into) user accounts, login, a database, role-based permissions, or multiple functional screens — dashboards, settings, tables, forms, CRUD flows. This includes internal tools and admin panels, not just customer-facing SaaS.

The single-hero-moment playbook from `static-premium-site.md` will actively hurt this kind of build: a dense app with a 10rem kinetic hero and a GPU particle field is unusable, not premium. Here, "premium" means the design system survives being extended by a dozen future features without drifting — consistency and restraint *are* the luxury signal, not spectacle. Read `design-principles.md` first; everything below assumes those five rules.

## What's structurally different from a static site

A portfolio has one designer's eyes on it for one sitting. A working app gets built out over months, often screen by screen, sometimes by different people or different sessions of yourself. The premium feeling has to survive that. Concretely:

- **Components before pages.** Define the design system as reusable primitives (button variants, input states, card, table row, modal, toast, empty state) *before* building individual screens. If each screen invents its own button, the app will look coherent for the first three screens and fall apart by the tenth.
- **States are the deliverable, not an afterthought.** Every interactive component needs default, hover, focus, active, disabled, loading, and error states designed on purpose — not just the happy-path screenshot. A form that looks great empty but has no visible validation state, or a table with no empty/loading/error state, is not done.
- **Motion is restrained and functional.** In a static site motion can be decorative because the visitor is there to be impressed once. In an app the same person sees the same transition hundreds of times a week — anything more than ~150–250ms on routine interactions (opening a menu, submitting a form) becomes friction, not polish. Reserve anything more expressive (a satisfying page transition, an empty-state illustration) for genuinely infrequent moments.
- **Density is a real constraint.** Dashboards and admin views need to fit real amounts of data. The "give the CTA more room than anything around it" instinct from the static track still applies to primary actions, but section padding of 96px per block isn't viable when a table needs to show 30 rows above the fold. Scale the spacing scale down for dense views, but keep it a *scale* — 8/16/24/32 — rather than reintroducing arbitrary padding per component.

## Build order

### 1. Map the roles and flows before any UI

Before designing anything, write down: what roles exist (e.g. admin / member / viewer), what each role can see and do, and what the core flows are (sign up → onboarding → main workspace → settings, or similar). This is the equivalent of the static track's "brand fiction before styling" step — skipping it produces UI that looks fine in isolation but doesn't actually support the permissions model once wired to a real backend.

If the user hasn't specified auth/database specifics, ask (or state a reasonable default and proceed): what roles are needed, and is this mocked/local-state for now or wired to a real backend (Supabase, a custom API, etc.)?

### 2. Author the system as a written spec

Same shared rules as the static track (palette, type, spacing scale — see `design-principles.md`), with these adjustments for an app context:

- **Type:** the display face can still be characterful, but it's used far more sparingly — page titles and empty states, not every heading. Body and UI text should prioritize legibility at small sizes over character. Banned as a display face still applies (no unmodified Inter/Roboto/Arial/system-ui) — but pick something that also has a workable text weight for dense UI, not just a display cut.
- **Component tokens:** define spacing, radius, and elevation as tokens once (e.g. `--radius-sm/md/lg`, `--shadow-card/modal`) and reference them everywhere, so a later change to "how much corner radius do we use" is a one-line edit, not a hunt through every component.
- **One glow/accent moment per view, not per component.** In a dashboard with 20 cards, a glow on every card is far more damaging than in a one-page site, because the eye now has 20 competing signals instead of 5.

### 3. Build the primitives, then the screens

Build the shared component library first — even a minimal one — then compose screens from it. This is the single highest-leverage difference from the static track: it's the mechanism that keeps 40 screens looking like one product instead of a portfolio of individually-designed pages.

For data-heavy views (tables, dashboards), design the empty state and the loading state at the same time as the populated state — these are usually the ones that get forgotten and are exactly what makes a demo look unfinished the first time a user hits an edge case (new account, no data yet, a failed request).

### 4. Wire it to real state

Whether the backend is mocked or real, make sure role-based UI actually reflects the role model from step 1 — don't just visually design an "admin view" and a "member view" as two static mockups; wire the actual conditional rendering so the distinction is real and testable.

### 5. Verify like a hostile critic — expanded for apps

The static track's verification (console errors, overflow, hover states, exit transitions) all still apply, plus:

- Walk each role through its actual permitted flows — not just the admin happy path.
- Trigger the empty state, loading state, and at least one error state per major view (e.g. throttle network, submit invalid input) rather than only checking the populated view.
- Check keyboard navigation and focus states on interactive elements — apps get used far more via keyboard/tab than one-off marketing pages do.
- Re-check the component library in isolation after screens are built — it's common for a screen-specific fix to quietly fork a shared component; catch this before it multiplies.

## What "good" looks like vs. what to avoid

| Do | Don't |
|---|---|
| Shared component primitives used across every screen | Each screen inventing its own button/card/input styling |
| Empty, loading, and error states designed up front | Only the happy-path populated screenshot |
| Restrained, fast (~150–250ms) motion on routine actions | Scroll-triggered fade-ins on dashboard cards and table rows |
| One accent/glow moment per view | Glow on every card in a 20-card grid |
| Role-based UI wired to a real permission model | Two static mockups pretending to be role-aware |
| Spacing scale adapted for density, still tokenized | Arbitrary per-component padding once density gets tight |
