# Mobile-First / App-Viewport Addendum

Read this in addition to `static-premium-site.md` or `saas-webapp.md` — it doesn't replace either, it adjusts them for builds where a meaningful share of use happens on a phone, or where the user explicitly calls this an "app."

## Mobile is not "the desktop layout, but narrower"

Reflowing a desktop grid down to one column is the single fastest way to end up with a mobile experience that feels like an afterthought. A genuinely mobile-considered build makes real decisions at the mobile breakpoint, not just narrower versions of desktop decisions:

- **Navigation changes shape, not just size.** A desktop top-nav with 6 items doesn't become a hamburger by default — decide whether this build wants a bottom tab bar (better for app-like, frequent-use products), a hamburger drawer (fine for marketing sites with infrequent navigation), or a simplified top bar. The choice should match how often someone re-navigates during a session.
- **Touch targets are a real constraint, not a nice-to-have.** Interactive elements need a minimum ~44×44px tappable area, with real spacing between adjacent tappable elements — not just a small icon with generous-looking-but-untappable whitespace around it.
- **The signature moment (static track) or dense interactions (SaaS track) both need a mobile-native equivalent**, not a version that technically renders. A GPU particle effect that tanks frame rate on a mid-range phone, or a data table that requires horizontal scroll-hunting on a 375px screen, both fail the "premium" bar even if they look fine on the design file. Test on an actual narrow viewport, not just a resized browser window at desktop DPI.
- **Motion budget is tighter.** What reads as a nice 400ms transition on a desktop trackpad can read as sluggish on a phone where the user expects near-instant response to a tap. Favor shorter durations and simpler easing for anything triggered by touch.

## Full-responsive builds: design real breakpoints, don't just interpolate

If the target is "works great on both," don't rely on the browser to interpolate a single design between two states via `clamp()` and flex-wrap alone (fine for type sizing, not for structural layout). Decide explicitly what changes at each breakpoint:

- What moves from a multi-column layout to stacked, and in what order (the most important content should usually surface first on mobile, not simply follow desktop's visual left-to-right order)
- What gets hidden, collapsed into a menu, or replaced with a simpler equivalent (a hover-triggered tooltip has no mobile equivalent without a tap-triggered redesign)
- Where the signature technique or component-dense view gets simplified vs. where it stays full-fidelity

## Verification additions for this addendum

When running the hostile-critic pass from either track, add:

- A real narrow-viewport pass at ~375–390px width, not just resizing a desktop browser
- Tap-test every interactive element for a real target size, not just visual appearance
- Check that anything hover-dependent (tooltips, hover-reveal menus, hover-only affordances) has a working tap/tap-and-hold equivalent, since hover doesn't exist on touch
- If frame rate matters (heavy motion, canvas/WebGL effects), spot-check on a throttled CPU profile rather than assuming a high-end dev machine represents the target device
