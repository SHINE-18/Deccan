/# Prompt for Antigravity — Deccan Masala Co. Website (React)

Copy everything below into Antigravity as your build prompt. Attach the 4 Figma export
PNGs (Contact page, Home desktop, Home desktop w/ scroll-fade state, Products page) as
visual references.

---

## Project Brief

Build a production-quality, animated marketing + e-commerce-style website for
**"Deccan Masala Co."**, a premium Indian spice brand. Match the attached Figma exports
pixel-for-pixel in layout and spacing, but implement it as a real, interactive React app
— not a static clone. The brand feel is **dark, luxurious, heritage-driven, restaurant-grade**
(think Michelin-star menu meets premium spice packaging).

## Tech Stack

- React 18 + Vite (or Next.js if routing/SEO matters — use Next.js App Router since this
  has multiple real pages: Home, Products, Contact)
- Tailwind CSS for styling
- Framer Motion for scroll-triggered reveals, hover states, and page transitions
- React Router (if Vite) or Next.js routing (if Next.js) for Home / About / Products / Contact
- Lucide-react for icons (phone, mail, pin, package, headset, etc.)
- Fully responsive (mobile, tablet, desktop) — the current exports are desktop-only, so
  design sensible mobile breakpoints for the nav, product grid, and contact form

## Design System

**Colors**
- Background: near-black charcoal, `#121212` – `#151515`
- Card/section borders: subtle `1px` warm gray/gold at low opacity (`rgba(200,170,120,0.15)`)
- Primary accent (gold/amber): `#C9A227` – `#D9A94D` range — used for headings, buttons,
  icons, active nav states
- Secondary text: warm off-white `#EDEDED` for body, muted gray `#9A9A9A` for subtext
- Category pill backgrounds: dark translucent `rgba(255,255,255,0.05)` with amber text

**Typography**
- Display/heading font: elegant serif (Playfair Display or similar) — used for "Contact Us",
  "About Us", "Not Your Average Masala", product names
- Body/UI font: clean sans-serif (Inter or similar) — nav links, form labels, descriptions
- Generous letter-spacing on nav links and small labels/eyebrows

**Spacing/Shape**
- Large rounded-corner cards (`rounded-xl`/`rounded-2xl`) with thin borders, no heavy shadows
- Generous vertical rhythm between sections (80–140px on desktop)
- Circular icon badges (gold background, dark icon) used throughout — phone, mail, pin

## Global Layout

- **Header/Nav** (sticky, transparent-to-solid on scroll): logo mark (temple/gate icon) +
  wordmark on the left, center nav links (Home / About Us / Products), right-aligned solid
  gold "Contact" pill button with arrow icon. On the Contact page a second sub-nav row
  appears below the header with Categories / Offers / Support / Contact / Track Order —
  build this as a reusable `<UtilityNav />` shown only on relevant pages.
- **Footer**: 4-column layout — brand logo/wordmark, Quick Links, Utility Pages (Terms,
  Privacy), Office/Contact block with address + phone + social icons (Instagram, Facebook).
  Include a newsletter email input with a submit arrow button.

## Hero + Scroll Animation System (reference: sofihealth.com)

The client wants the hero and overall scroll feel to match **sofihealth.com** — a
high-end, "agency built" site. Recreate its signature techniques, adapted to Deccan
Masala's dark/gold spice branding instead of sofi's clinical wellness look:

**Libraries**
- `lenis` (or `@studio-freight/lenis`) for buttery inertia-based smooth scrolling across
  the whole site
- `gsap` + `ScrollTrigger` for pinned sections, scroll-scrubbed animations, and staggered
  reveals (Framer Motion can still handle simple in/out reveals elsewhere, but GSAP
  ScrollTrigger is what makes this specific "pinned hero" feel work)
- Optional: `split-type` (or a custom word/letter splitter) for kinetic typography

**Hero structure, modeled directly on sofi's:**
1. **Micro index/eyebrow row** (top-left, small caps, letter-spaced): a numbered tag like
   `001` paired with 2–3 stacked one-word descriptors that crossfade/cycle
   (sofi does "sleep / smart / naturally" — for Deccan Masala use something like
   `heritage / handcrafted / heirloom`, cycling every ~2s), plus a small
   `©2026`-style date mark to the right. Purely decorative, but it's what gives the hero
   an "editorial/product-launch" feel rather than a generic banner.
2. **Giant kinetic headline** — one short, lowercase, oversized serif/display word or
   phrase (sofi uses `feelbetter` as a single fused word at massive scale). For Deccan
   Masala, use something like `tastetrue` or `spicedright` as a single bold display word,
   filling most of the viewport width. Animate it in on load: split into characters or
   words, staggered `opacity 0→1` + `y 40→0`, ~0.06s stagger per letter, custom ease
   (`power3.out` or similar).
3. **Supporting one-line description** beneath the headline in smaller body type,
   fading/sliding in slightly after the headline finishes.
4. **Floating hero product visual** — sofi shows a hand holding their pod, isolated on
   transparent background, layered over the text. For Deccan Masala, use an isolated
   product shot (spice tin/pouch) positioned so it overlaps the giant headline. Apply:
   - a subtle continuous float animation (translateY oscillating a few px, ~4s loop)
   - mouse-parallax: image shifts a few px opposite to cursor position within the hero
     (use `mousemove` + a spring/lerp, or GSAP `quickTo`)
   - a gentle scroll-scrub: as the user scrolls past the hero, the product image scales
     up slightly and moves, pinned via `ScrollTrigger` until the effect completes, before
     the page unpins and continues normal scroll
5. **CTA button** (e.g. "Shop the Collection" / "Explore Products"), same treatment as
   sofi's pill-style "shop sofi" button — small, understated, gold outline or fill.
6. **Scroll cue** — bottom-of-viewport "scroll down" label plus a live scroll-progress
   percentage (`0%` → `100%` as the user scrolls the full page), exactly like sofi's
   footer-fixed `scroll down / 0%` indicator. Implement as a small fixed-position element
   tied to `window.scrollY / document.height`.

**Section-level techniques to reuse throughout the site (not just the hero):**
- **Pinned storytelling sections**: for 1–2 key sections (e.g. "Not Your Average Masala"
  or the Heritage list), pin the section in the viewport while inner content
  (numbers/stats, feature cards) animates/counts up as the user scrolls through it —
  sofi does this with its `2.12x`, `1.45m`, `1,000 years` stat blocks.
- **Animated counters**: any stat (kcal counts, "10+ years heritage", "100% natural")
  should count up from 0 when it scrolls into view, not just appear.
- **Marquee/scrolling text rows**: sofi uses horizontally scrolling credential rows
  ("clinicians • scientists • physicians..."). Use the same pattern for something like a
  scrolling row of spice names or ingredient callouts (`turmeric • cumin • coriander •
  chilli • cardamom •`), auto-scrolling infinitely, pausable on hover.
- **Large closing statement section**: sofi ends on 3 stacked short phrases ("purity of
  plants / power of people / preservation of planet") over a full-bleed image before the
  footer. Give Deccan Masala's Home page a similar closing triptych (e.g. "sourced with
  care / blended by hand / delivered fresh") over a full-bleed spice/kitchen image, each
  line staggering in as it's centered in viewport.
- Respect `prefers-reduced-motion`: disable Lenis smooth scroll, pinning, and parallax for
  users who request reduced motion, falling back to normal scroll + simple fades.

---

## Pages

### 1. Home (`/`)
Recreate this section order:
1. **Hero** — build per the "Hero + Scroll Animation System" spec above (kinetic headline,
   floating product visual, index/eyebrow row, scroll-progress cue) instead of a plain
   static banner. Layer in the original export's hours/address/reservation content as a
   secondary block that scrolls in just below the hero, styled like sofi's "shop sofi" CTA.
2. **About Us** — eyebrow label with icon ("Michelin Star, 2025"), large serif heading,
   supporting paragraph, "Explore Our Story" button, and a 4-column stat/feature strip
   (Timeless Heritage / World-Class Dishes / Emotion & Elegance / Unmatched Experience).
3. **Heritage list + image panel** — left column: 4 expandable/hoverable rows (Regal Indian
   Heritage, Japanese Legacy, Italian Grandeur, Drinks Sip In Style) each with a short
   description and an arrow icon that rotates/expands on hover; right column: a tall
   product/lifestyle photo. Add a subtle parallax or fade-in-from-side animation as this
   section enters the viewport.
4. **Signature Maslas** — horizontal gallery of 4 image cards (different aspect ratios,
   like the export) with hover zoom + caption reveal.
5. **"Not Your Average Masala"** — dark bordered panel, centered heading (mixed serif +
   bold), 3-column icon feature grid (Handcrafted Heritage / 100% Natural Ingredients /
   Sealed for Purity), each with a line-icon in a bordered square.
6. **Reserve Your Experience** — split layout: left text + hours + CTA, right image of
   spice tins/product styling.
7. Footer as described above.

**Key interaction to replicate from the export:** the second Home screenshot shows
content faded/ghosted with a light overlay — this is the **scroll-reveal-in-progress**
state. Implement this with Framer Motion `whileInView` (opacity 0→1, y +40→0, ~0.6s ease)
on every major section so content genuinely fades/slides in as the user scrolls, exactly
like the mid-transition frame captured in the export.

### 2. Products (`/products`)
- Hero band: dark image background (spices/food), centered serif "Our Spice Collection"
  heading + subheading, thin decorative rule marks on either side of the heading.
- Left sticky sidebar: category filter list with icons (Deccan Classics, Hyderabadi
  Masala, Signature Quality, Paste With Flavors) — active category highlighted with a
  gold-tinted background. Clicking a category smooth-scrolls to that section AND updates
  the active state (use `IntersectionObserver` to sync active pill with scroll position,
  not just click).
- Right content: grouped product list sections matching the sidebar categories. Each
  product is a horizontal card: image left, tag pills (category/kcal or price) + title +
  description right. Support an optional price tag (shown for Signature Quality items in
  the export, e.g. "$75", "$28").
- Add a hover state on each product card (slight lift + border glow in gold) and a
  staggered fade-in as cards enter viewport.
- Footer.

### 3. Contact (`/contact`)
- Utility sub-nav (as described above).
- Centered "Contact Us" heading + subheading.
- Two-column layout:
  - **Left card "Get in Touch":** Phone / Email / Address rows, each with a circular gold
    icon badge; address block includes an embedded map (use a real embeddable map — Google
    Maps iframe or a static map image is fine) with a location pin.
  - **Right card "Send us a Message":** real, working form with Full Name, Email Address,
    Phone Number, Category (make this a `<select>` dropdown, not free text — populate with
    the product categories from the Products page), Subject, Message (textarea), and a
    gold "Send Message" button with a paper-plane icon. Implement client-side validation
    (required fields marked with `*`), a loading state on submit, and a success/error
    toast or inline confirmation message. Wire it to a stubbed `onSubmit` handler (e.g.
    console.log / mock API call) that's easy to swap for a real backend later.
- Footer.

## Interactivity & Polish Checklist

- Scroll-triggered fade/slide reveals on every section (Framer Motion `whileInView`)
- Sticky nav that adds a solid background + subtle shadow once the user scrolls past the hero
- Active nav-link underline/color that updates based on current route
- Product card hover: lift, border glow, image zoom
- Category sidebar syncs to scroll position via IntersectionObserver
- Working, validated contact form with loading + success states
- Smooth scroll behavior for all in-page anchor links
- Mobile nav collapses into a hamburger/drawer menu
- Reasonable image lazy-loading (`loading="lazy"`) and skeleton/placeholder states for
  slow-loading images
- Respect `prefers-reduced-motion` — fall back to simple opacity fades, no motion, for
  users who request it

## Deliverable Structure

Organize as:
```
src/
  components/
    Nav.tsx
    UtilityNav.tsx
    Footer.tsx
    ProductCard.tsx
    FeatureCard.tsx
    ScrollReveal.tsx   (wrapper component around Framer Motion)
  pages/ (or app/ routes if Next.js)
    Home.tsx
    Products.tsx
    Contact.tsx
  data/
    products.ts   (category + product data, so Products page is data-driven, not hardcoded JSX)
  App.tsx
```

Use placeholder/stock-style images (or `<div>` gradient blocks with labels) anywhere the
real photography isn't available, so the layout compiles cleanly without missing assets.

Start by scaffolding the project, design tokens (Tailwind config: colors, fonts), and the
shared Nav/Footer — then build Home, Products, and Contact in that order.
