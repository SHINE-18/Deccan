# Style Catalog — picking a deliberate aesthetic direction

The five rules in `design-principles.md` stop a build from looking *accidentally* generic. This file solves a different problem: even once spacing, motion, and glow are all deliberate, a build still needs an actual point of view — a named style, chosen because it fits the industry and audience, not because it's the first thing that rendered.

Use this **once per project**, early — right after classifying the build (static vs. SaaS) and before writing the system spec (palette/type/spacing) in whichever track file applies. Pick exactly one primary style. A second style can inform a single accent or section (e.g. a primarily Minimalist SaaS dashboard with one Bento Grid section for the overview page), but if the user hasn't specified a style, default to picking the single best match for their stated industry/audience and state the choice out loud before proceeding — don't blend three aesthetics into one build hoping something sticks. That's the same "decoration instead of decision" failure mode `design-principles.md` warns about, just at the style level instead of the spacing level.

## How to use this table

1. Identify the industry/product type and audience from what the user has said.
2. Scan the "Best for" column for a match. If multiple styles fit, prefer the one that also matches the build track (a Landing Page style for a one-page site, a BI/Analytics style for a data dashboard, a General style for anything else or for setting the base system a more specific style then layers onto).
3. Name the choice explicitly in the system spec — e.g. "Glassmorphism, because this is a financial SaaS dashboard and the audience expects a modern, premium-but-trustworthy feel." A named, justified choice is what separates this from a random pick.
4. Let the chosen style inform concrete decisions in the system spec: what the palette temperature is, how much motion is appropriate, whether elevation/blur/shadow plays a role, how loud the type can be. Don't just cite the style name and then default back to generic choices anyway.

## General Styles (49)

| Style | Best for |
|---|---|
| Minimalism & Swiss Style | Enterprise apps, dashboards, documentation |
| Neumorphism | Health/wellness apps, meditation platforms |
| Glassmorphism | Modern SaaS, financial dashboards |
| Brutalism | Design portfolios, artistic projects |
| 3D & Hyperrealism | Gaming, product showcase, immersive |
| Vibrant & Block-based | Startups, creative agencies, gaming |
| Dark Mode (OLED) | Night-mode apps, coding platforms |
| Accessible & Ethical | Government, healthcare, education |
| Claymorphism | Educational apps, children's apps, SaaS |
| Aurora UI | Modern SaaS, creative agencies |
| Retro-Futurism | Gaming, entertainment, music platforms |
| Flat Design | Web apps, mobile apps, startup MVPs |
| Skeuomorphism | Legacy apps, gaming, premium products |
| Liquid Glass | Premium SaaS, high-end e-commerce |
| Motion-Driven | Portfolio sites, storytelling platforms |
| Micro-interactions | Mobile apps, touchscreen UIs |
| Inclusive Design | Public services, education, healthcare |
| Zero Interface | Voice assistants, AI platforms |
| Soft UI Evolution | Modern enterprise apps, SaaS |
| Neubrutalism | Gen Z brands, startups, Figma-style |
| Bento Box Grid | Dashboards, product pages, portfolios |
| Y2K Aesthetic | Fashion brands, music, Gen Z |
| Cyberpunk UI | Gaming, tech products, crypto apps |
| Organic Biophilic | Wellness apps, sustainability brands |
| AI-Native UI | AI products, chatbots, copilots |
| Memphis Design | Creative agencies, music, youth brands |
| Vaporwave | Music platforms, gaming, portfolios |
| Dimensional Layering | Dashboards, card layouts, modals |
| Exaggerated Minimalism | Fashion, architecture, portfolios |
| Kinetic Typography | Hero sections, marketing sites |
| Parallax Storytelling | Brand storytelling, product launches |
| Swiss Modernism 2.0 | Corporate sites, architecture, editorial |
| HUD / Sci-Fi FUI | Sci-fi games, space tech, cybersecurity |
| Pixel Art | Indie games, retro tools, creative |
| Bento Grids | Product features, dashboards, personal |
| Spatial UI (VisionOS) | Spatial computing apps, VR/AR |
| E-Ink / Paper | Reading apps, digital newspapers |
| Gen Z Chaos / Maximalism | Gen Z lifestyle, music artists |
| Biomimetic / Organic 2.0 | Sustainability tech, biotech, health |
| Anti-Polish / Raw Aesthetic | Creative portfolios, artist sites |
| Tactile Digital / Deformable UI | Modern mobile apps, playful brands |
| Nature Distilled | Wellness brands, sustainable products |
| Interactive Cursor Design | Creative portfolios, interactive |
| Voice-First Multimodal | Voice assistants, accessibility apps |
| 3D Product Preview | E-commerce, furniture, fashion |
| Gradient Mesh / Aurora Evolved | Hero sections, backgrounds, creative |
| Editorial Grid / Magazine | News sites, blogs, magazines |
| Chromatic Aberration / RGB Split | Music platforms, gaming, tech |
| Vintage Analog / Retro Film | Photography, music/vinyl brands |

## Landing Page Styles (8)

Use these specifically for a single-page marketing/product page — pairs naturally with the static track in `static-premium-site.md`.

| Style | Best for |
|---|---|
| Hero-Centric Design | Products with a strong visual identity |
| Conversion-Optimized | Lead generation, sales pages |
| Feature-Rich Showcase | SaaS, complex products |
| Minimal & Direct | Simple products, apps |
| Social Proof-Focused | Services, B2C products |
| Interactive Product Demo | Software, tools |
| Trust & Authority | B2B, enterprise, consulting |
| Storytelling-Driven | Brands, agencies, nonprofits |

## BI/Analytics Dashboard Styles (10)

Use these specifically for data-dense dashboard views — pairs naturally with the SaaS/webapp track in `saas-webapp.md`, particularly its guidance on density and restrained motion.

| Style | Best for |
|---|---|
| Data-Dense Dashboard | Complex data analysis |
| Heat Map & Heatmap Style | Geographic/behavior data |
| Executive Dashboard | C-suite summaries |
| Real-Time Monitoring | Operations, DevOps |
| Drill-Down Analytics | Detailed exploration |
| Comparative Analysis Dashboard | Side-by-side comparisons |
| Predictive Analytics | Forecasting, ML insights |
| User Behavior Analytics | UX research, product analytics |
| Financial Dashboard | Finance, accounting |
| Sales Intelligence Dashboard | Sales teams, CRM |

## A note on combining a style with a track

A style name describes an aesthetic language (how things look and move); the track (`static-premium-site.md` vs `saas-webapp.md`) describes how the build is structured and verified. They're independent choices that both need to be made — e.g. "Glassmorphism" as the style plus the SaaS track means a financial dashboard with frosted-glass card surfaces, but still built from tokenized shared primitives with real empty/loading/error states, not a one-off hero page. Don't let a striking style choice become an excuse to skip the structural discipline the track calls for.
