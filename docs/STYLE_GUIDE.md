# eF Landing Page — Style Guide

**Vibe:** Soft Editorial  
**Inspiration:** Pixieset.com — editorial photography platform aesthetic  
**Last updated:** 2026-05-09

---

## Typography

### Fonts in use

| Role | Family | Weight | Style |
|------|--------|--------|-------|
| Display / Headlines | Cormorant Garamond | Bold (700) | Italic |
| Body copy | DM Sans | Light (300) / Regular (400) | Normal |
| Labels / Eyebrow / UI | DM Sans | SemiBold (600) | Normal, uppercase |

**Google Fonts link:**
```
Cormorant+Garamond:ital,wght@0,700;1,400;1,700&family=DM+Sans:wght@300;400;600
```

### Why these fonts

Cormorant Garamond is a high-contrast old-style serif with generous italic swing — it carries editorial weight without feeling stiff. DM Sans is a low-contrast geometric sans that reads cleanly at small sizes and pairs without competing. The combination mirrors Pixieset's Nanum Myeongjo + HK Grotesk pairing: expressive serif headline, neutral sans body.

### Type scale

Defined in `tokens.css` as `--text-xs` through `--text-7xl` (12px → 72px).  
Hero headline targets `--text-7xl` (72px). Section titles target `--text-4xl` (36px).

### Rhythm

| Token | Value | Used for |
|-------|-------|----------|
| `--leading-tight` | 1.05 | Hero headline (Cormorant, tight) |
| `--leading-loose` | 1.8 | Body paragraphs (Pixieset rhythm) |
| `--tracking-tight` | -0.05em | Display headlines |
| `--tracking-wider` | 0.14em | Uppercase labels (DM Sans) |

---

## Color Palette

| Token | Hex | Use |
|-------|-----|-----|
| `--color-bg` | `#FAFAF8` | Page canvas — warm white |
| `--color-surface` | `#FFFFFF` | Cards, section backgrounds |
| `--color-border` | `#E8E8E4` | Subtle dividers |
| `--color-ink` | `#1D1D1D` | Primary text — near-black |
| `--color-ink-muted` | `#888888` | Captions, secondary labels |
| `--color-ink-ghost` | `#C0C0BA` | Disabled / placeholder |
| `--color-accent` | `#48AE92` | Sage teal — CTA buttons, hover states, `<em>` in hero |
| `--color-accent-hover` | `#3A9480` | Accent hover |
| `--color-hero-bg` | `#1D1D1D` | Hero section background — charcoal |
| `--color-hero-text` | `#FAFAF8` | Text on dark hero |
| `--color-hero-muted` | `#9CA3AF` | Muted text on dark hero |

### Accent rationale

`#48AE92` is pulled directly from Pixieset's UI chrome — a desaturated sage teal that reads as sophisticated rather than tropical. It provides sufficient contrast on both `#FFFFFF` and `#1D1D1D` backgrounds.

---

## Spacing

8-point scale via `--space-*` tokens (4px → 128px). Section vertical padding targets `--space-20` (80px) on desktop, `--space-12` (48px) on mobile.

---

## Shape & Depth

| Token | Value | Notes |
|-------|-------|-------|
| `--radius-sm` | 2px | Buttons |
| `--radius-md` | 4px | Gallery cells |
| `--radius-lg` | 8px | Larger containers |
| Shadows | Subtle — 7–11% opacity | Keeps the editorial flatness |

Radii are intentionally small. The vibe is editorial print, not soft UI.

---

## Component Decisions

### Hero headline

- Font: Cormorant Garamond **Bold Italic**
- Size: 72px desktop → scales down on mobile
- `<em>` word(s) colored `#48AE92` (accent teal)
- Letter-spacing: `-0.05em`
- Line-height: `1.05`

### Body paragraphs

- Font: DM Sans Light (300)
- Line-height: `1.8` — intentionally generous (Pixieset pattern)
- Color: `#1D1D1D`
- Max-width constrained for comfortable measure (~65ch)

### Eyebrow / labels

- Font: DM Sans SemiBold (600)
- All-caps, letter-spacing `0.14em`
- Color: `#888888`

### CTA button

- Background: `#48AE92` → hover `#3A9480`
- Text: `#FFFFFF`, DM Sans SemiBold, uppercase, wide tracking
- Border-radius: `2px` (sharp, editorial)
- Padding: `12px 32px`

### Gallery cells

- CSS Grid mosaic: `2fr 1fr 2fr` columns
- Overlay on hover: `rgba(29,29,29,0.52)`
- Caption: DM Sans, white, appears on hover/focus
- Border-radius: `4px`

### Floating social bar

- Background: `rgba(250,250,248,0.94)` — matches page bg with blur effect
- Icon color: `#1D1D1D`
- Appears after hero scrolls out of view

---

## What to avoid

- Rounded corners > 8px — breaks the editorial feel
- Bright or saturated colors beyond the accent
- Multiple font weights in the same text block
- Shadow opacity above 15%
