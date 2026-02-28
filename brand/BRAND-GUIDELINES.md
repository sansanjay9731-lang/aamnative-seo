# 🥭 Aam Native — Brand Guidelines

> **Version 2.0** · February 2026
> *Authentic Alphonso from Ratnagiri, directly to your door.*

---

## 1. Brand Identity

| Attribute | Value |
|-----------|-------|
| **Brand Name** | aam native (always lowercase) |
| **Tagline** | authentic alphonso |
| **Positioning** | Direct-from-farm, GI-certified Ratnagiri Alphonso mangoes |
| **Tone** | Warm, authentic, earthy, premium but approachable |
| **Language** | Indian English, human-sounding, no corporate jargon |

---

## 2. Logo

The Aam Native logo is a minimalist mark combining a **flat orange mango circle** with a **geometric green leaf notch**, paired with the brand name in clean sans-serif.

### Logo Files
| Variant | File | Use Case |
|---------|------|----------|
| Dark text (for light BGs) | `brand/aam-native-logo-dark.svg` | Website header, print on white |
| Light text (for dark BGs) | `brand/aam-native-logo-light.svg` | Dark backgrounds, social media |
| Icon only | `brand/aam-native-icon.svg` | Favicons, app icons, watermarks |

### Logo Anatomy
```
┌────────────────────────────────────┐
│  🥭  aam                           │
│       native                       │
│  ↑    ↑                            │
│  │    └─ Plus Jakarta Sans, 800    │
│  │       letter-spacing: -0.5px    │
│  │       Color: #244731 (dark)     │
│  │              #FFFFFF (light)    │
│  │                                 │
│  └─── Orange circle: #F6921E       │
│       Mango Body:    #FFB443 & #E07A0B
│       Green leaf:    #3C7143       │
│                                    │
│       AUTHENTIC ALPHONSO           │
│       ↑ Plus Jakarta Sans, 500    │
│         letter-spacing: 1.2px      │
│         Color: #244731 (dark)      │
│                rgba(255,255,255,0.7) (light) │
└────────────────────────────────────┘
```

### Logo Rules
- ❌ Never stretch, rotate, or skew the logo
- ❌ Never use colors other than the official palette
- ❌ Never add borders, shadows, or effects
- ✅ Always maintain minimum clear space equal to the mango circle radius
- ✅ Minimum size: 120px wide (digital), 30mm (print)

---

## 3. Color Palette

### Primary Colors
| Color | Hex | CSS Variable | Usage |
|-------|-----|-------------|-------|
| 🟠 **Saffron** | `#E07B16` | `--saffron` | Primary CTA, badges, prices |
| 🟠 **Saffron Light** | `#F59A3A` | `--saffron-l` | Hover states, accents |
| 🟢 **Grove** | `#1F5C3A` | `--grove` | Headers, text, trust elements |
| 🟢 **Grove Light** | `#27724A` | `--grove-l` | Hover states |
| 🟢 **Jade** | `#00A86B` | `--jade` | Accent, success states |

### Logo Specific
| Color | Hex | Usage |
|-------|-----|-------|
| 🟠 **Mango Orange** | `#E8720C` | Logo mango circle only |
| 🟢 **Leaf Green** | `#1F5C3A` | Logo leaf + dark text |

### Dark Palette
| Color | Hex | CSS Variable | Usage |
|-------|-----|-------------|-------|
| **Ink** | `#0C1510` | `--ink` | Deepest background |
| **Dusk** | `#141F18` | `--dusk` | Main dark sections |
| **Bark** | `#1E2D23` | `--bark` | Dark cards |
| **Bark Light** | `#253323` | `--bark-l` | Hovered dark cards |

### Light Palette
| Color | Hex | CSS Variable | Usage |
|-------|-----|-------------|-------|
| **Cream** | `#FDFAF5` | `--cream` | Page background |
| **Parchment** | `#F6F0E7` | `--parchment` | Section backgrounds |
| **Sand** | `#EDE6D8` | `--sand` | Subtle backgrounds |
| **Text** | `#16180F` | `--text` | Body text |
| **Muted** | `#6B6555` | `--muted` | Secondary text |

### Gradients
| Name | Value | CSS Variable |
|------|-------|-------------|
| **Saffron Gradient** | `linear-gradient(135deg, #E07B16, #F59A3A)` | `--g-saffron` |
| **Grove Gradient** | `linear-gradient(135deg, #1F5C3A, #27724A)` | `--g-grove` |
| **Dark Gradient** | `linear-gradient(135deg, #0C1510, #1E2D23)` | `--g-dark` |

---

## 4. Typography

### Font Families
| Role | Font | Weight | CSS |
|------|------|--------|-----|
| **Headings** | Fraunces | 600, 700, 800 | `.serif` |
| **Body** | Plus Jakarta Sans | 300–800 | Default body |

### Type Scale
| Element | Size | Weight | Spacing |
|---------|------|--------|---------|
| H1 (Hero) | 3.5rem | 800 | -0.02em |
| H2 (Section) | 2.5rem | 700 | -0.01em |
| H3 (Card) | 1.5rem | 700 | normal |
| Body | 1rem | 400 | normal |
| Body Small | 0.875rem | 400 | normal |
| Caption | 0.75rem | 500 | 0.05em |
| Badge Label | 0.65rem | 800 | 0.14em (uppercase) |

### Google Fonts Import
```
Plus Jakarta Sans: 300, 400, 500, 600, 700, 800
Fraunces: 300, 600, 700, 800 (optical size 9–144)
```

---

## 5. Imagery & Photography

### Style
- **Warm, natural lighting** — golden hour tones preferred
- **Focus on the fruit** — close-up shots of mangoes, farm scenes
- **Authentic, not stock** — real produce, real desserts, real people
- **No watermarks** — crop or remove any camera watermarks

### Image Treatment
- `border-radius: 16px` (cards) or `24px` (hero sections)
- Subtle warm color grading
- Use `object-position: center 20%` to crop watermarks naturally

---

## 6. UI Components

### Buttons
| Style | Background | Text | Radius |
|-------|-----------|------|--------|
| Primary (Saffron) | `--g-saffron` | White, 600 | 100px |
| Secondary (Grove) | `--g-grove` | White, 600 | 100px |
| Outline | Transparent + border | `--grove` | 100px |

### Cards
- Background: `white` or `--parchment`
- Border: `1px solid --border` (rgba(0,0,0,0.06))
- Border-radius: `20px`
- Shadow: `0 1px 3px rgba(0,0,0,0.04)`
- Hover: subtle lift with `translateY(-4px)`

### Badges
- Font: 0.65rem, weight 800, uppercase, letter-spacing 0.14em
- Colors: Saffron (Premium), Grove (Standard), Jade (Best Value)

---

## 7. Spacing & Layout

| Token | Value |
|-------|-------|
| Section padding | `5rem 1.5rem` |
| Card gap | `1.5rem` |
| Element gap | `0.75rem – 1.25rem` |
| Max content width | `1200px` |
| Container padding | `0 1.5rem` |

---

## 8. Motion & Animation

- **Entrance**: `opacity 0→1`, `translateY 30px→0`, `duration 0.8s`
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out)
- **Hover transitions**: `0.3s ease`
- **Stagger delay**: `0.1s` between siblings
- **Glow pulse**: Subtle box-shadow animation on primary CTAs

---

## 9. Voice & Tone

### Do ✅
- Sound human and warm: "Fresh from our Ratnagiri orchards to your door"
- Use sensory language: "golden, sun-ripened, fragrant"
- Be conversational: "We pick. We pack. You enjoy."
- Be specific: "24–48 hour delivery" not "fast shipping"

### Don't ❌
- Use em-dashes (—) excessively
- Sound AI-generated or corporate
- Use generic phrases like "premium quality assured"
- Overuse exclamation marks

---

## 10. Social Media Handles

| Platform | Handle |
|----------|--------|
| Instagram | @aamnative |
| Facebook | /aamnative |
| Twitter/X | @aamnative |
| WhatsApp | +91 98765 43210 |
| Website | aamnative.com |

---

*© 2026 Aam Native Fresh Produce · Ratnagiri, Maharashtra, India*
