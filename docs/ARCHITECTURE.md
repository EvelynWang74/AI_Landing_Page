# eF Landing Page — Project Architecture

**Created:** 2026-05-09  
**Role:** Personal branding one-pager for a Firmware Engineer with diverse lifestyle interests  
**Goal:** High-conversion, single-page personal landing page with 3 design vibe options

---

## Folder Structure

```
eF_LandingPAge/
│
├── index.html                        ← Single HTML entry point (all sections inline)
│
├── assets/
│   │
│   ├── css/
│   │   ├── reset.css                 ← Normalize + universal box-sizing baseline
│   │   ├── tokens.css                ← Design tokens: colors, typography, spacing, radii
│   │   │                               Swapping design vibe = changing token values only
│   │   └── main.css                  ← All component & layout styles (imports tokens.css)
│   │
│   ├── js/
│   │   └── main.js                   ← Scroll-triggered animations, gallery interactions,
│   │                                    floating social bar behavior
│   │
│   ├── images/
│   │   ├── hero/                     ← Hero portrait or background image(s)
│   │   │   └── (place hero photo here, e.g. hero.jpg)
│   │   └── gallery/                  ← 6 lifestyle photos (skiing, pole dancing, gigs, travel…)
│   │       └── (photo-01.jpg … photo-06.jpg)
│   │
│   └── fonts/                        ← Self-hosted web fonts (.woff2) if not using Google Fonts
│
├── data/
│   └── content.json                  ← All editable copy in one place:
│                                        headline, sub-headline, bio, social links, photo alt text
│                                        Update text here without ever touching HTML
│
├── skill/
│   └── skill.md                      ← Collaboration rules: how we work together
│                                        (ask-don't-guess, approval gates, content ownership)
│
└── docs/
    ├── ARCHITECTURE.md               ← This document
    └── STYLE_GUIDE.md                ← Active vibe: fonts, colors, type scale, component decisions
```

---

## Page Sections (in order)

| # | Section | Purpose |
|---|---------|---------|
| 1 | **Hero** | Compelling headline + sub-headline bridging firmware expertise & personality |
| 2 | **Human Gallery** | Editorial layout of 6 lifestyle photos (skiing, pole dancing, live music, travel, gluten-free, misc) |
| 3 | **Professional Core** | Short bio paragraph + LinkedIn CTA button |
| 4 | **Social Footer / Floating Bar** | Minimalist links to LinkedIn, Instagram, Facebook |

---

## Design Vibe System

All three vibes are controlled exclusively through `assets/css/tokens.css`.  
No HTML or structural changes are needed to switch vibes.

| Vibe | Palette | Typography | Feel |
|------|---------|------------|------|
| **A — Clean Minimalist** | Off-white, charcoal, single accent | Geometric sans (e.g. Inter) | Calm, editorial, Apple-esque |
| **B — Bold Editorial** | Deep navy + warm cream + electric accent | Serif headline + sans body | Magazine cover, high contrast |
| **C — Warm Human** | Warm sand, terracotta, forest green | Rounded sans or humanist serif | Approachable, lifestyle-brand |

---

## Data Layer (`data/content.json`)

```json
{
  "hero": {
    "headline": "",
    "subheadline": ""
  },
  "bio": {
    "short": ""
  },
  "gallery": [
    { "id": 1, "src": "assets/images/gallery/photo-01.jpg", "alt": "", "caption": "" },
    { "id": 2, "src": "assets/images/gallery/photo-02.jpg", "alt": "", "caption": "" },
    { "id": 3, "src": "assets/images/gallery/photo-03.jpg", "alt": "", "caption": "" },
    { "id": 4, "src": "assets/images/gallery/photo-04.jpg", "alt": "", "caption": "" },
    { "id": 5, "src": "assets/images/gallery/photo-05.jpg", "alt": "", "caption": "" },
    { "id": 6, "src": "assets/images/gallery/photo-06.jpg", "alt": "", "caption": "" }
  ],
  "social": {
    "linkedin": "",
    "instagram": "",
    "facebook": ""
  }
}
```

---

## Build Approach

- **Pure HTML + CSS + Vanilla JS** — zero frameworks, zero build tools, opens directly in a browser
- **Responsive** — mobile-first, single breakpoint at 768px
- **Performance** — images lazy-loaded, fonts preloaded, no external JS libraries
- **Accessibility** — semantic HTML5 landmarks, ARIA labels on icon-only links, sufficient color contrast

---

## Collaboration Rules

See [`skill/skill.md`](../skill/skill.md) for the full rules. Summary:

- **Ask, never guess** — any unknown detail (copy, URLs, photo slots, preferences) is a question, not an assumption
- **Approval gates** — no step begins without an explicit "yes"
- **No surprise changes** — scope changes are flagged before execution
- **Content is yours** — all copy starts as placeholders; you fill in the words

---

## Next Steps (pending your approval at each step)

- [x] Step 2 — Scaffold `index.html` with semantic section markup
- [x] Step 3 — Write `reset.css` and `tokens.css` for all 3 vibes
- [x] Step 4 — Write `main.css` component styles
- [x] Step 5 — Write `main.js` interactions
- [x] Step 6 — Populate `data/content.json` with your copy
- [ ] Step 7 — Preview & iterate
