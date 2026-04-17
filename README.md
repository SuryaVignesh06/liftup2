# LiftUp — The Design System & Visual Strategy

This document serves as the **definitive source of truth** for the LiftUp visual identity. It defines the "Silk White" cinematic aesthetic and provides copy-pasteable patterns for maintaining brand consistency across all landing pages and product sections.

---

## 🎨 1. Core Design Tokens (CSS Variables)

Copy this block into the `:root` of your project's CSS to initialize the LiftUp theme.

```css
:root {
  /* --- Primary Brand Colors (Google-Inspired) --- */
  --g-blue:   #4285F4;
  --g-red:    #EA4335;
  --g-yellow: #FBBC04;
  --g-green:  #34A853;
  --g-pink:   #F09BBE;

  /* --- Vibrant Accents --- */
  --vibrant-orange:  #FF8C42;
  --vibrant-coral:   #FF4D8D;
  --vibrant-magenta: #D65CFF;
  --vibrant-purple:  #6C4DFF;

  /* --- Glassmorphism Tokens (The "Silk White" Look) --- */
  --glass-bg:        rgba(255, 255, 255, 0.7);
  --glass-border:    rgba(255, 255, 255, 0.4);
  --glass-shadow:    0 8px 32px 0 rgba(31, 38, 135, 0.07);
  --glass-highlight: rgba(255, 255, 255, 0.8);

  /* --- Backgrounds & Surfaces --- */
  --bg-white:        #FFFFFF;
  --bg-light:        #F5F5F5;
  --bg-dark:         #202124;
  --bg-footer:       #0A0A0A;

  /* --- Typography --- */
  --text-dark:       #161f26;
  --text-body:       #4A4A4A;
  --text-muted:      #646464;

  /* --- Gradients --- */
  --grad-main:   linear-gradient(135deg, var(--vibrant-purple), var(--vibrant-orange));
  --grad-blue:   linear-gradient(90deg, #4285F4 0%, #4B31E3 100%);
  --grad-vibrant: linear-gradient(90deg, #FBBC04, #FF8C42, #FF4D8D, #D65CFF, #6C4DFF);
}
```

---

## 🖋️ 2. Typography System

The LiftUp identity relies on specific font weights and letter-spacing to achieve its premium editorial feel.

| Element | Font Family | Weight | Letter Spacing | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Branding** | `Bebas Neue` | 400 | `0.05em` | Logo, "UP" highlights, and Partner names. |
| **Headlines** | `Josefin Sans` | 700+ | `-0.02em` | Main hero titles and section headers. |
| **System Identity** | `DM Sans` | 600 | `-0.02em` | Button text and high-level card titles. |
| **Body Reading** | `Poppins` | 400 | `normal` | Long-form descriptions and testimonials. |

> [!TIP]
> **Pro Tip**: Use `text-transform: uppercase` and `letter-spacing: 0.12em` for small section indicators (e.g., "COHORT ZERO") to add a professional cadence.

---

## 🧊 3. Signature UI Components

### 3.1 The "LiftUp" Glass Card
The foundation of our layout. Used for student voices, features, and outcomes.

**CSS Pattern:**
```css
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(24px) saturate(160%);
  border: 1px solid var(--glass-border);
  border-radius: 24px;
  box-shadow: var(--glass-shadow);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.glass-card:hover {
  transform: translateY(-8px);
  border-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 40px 80px rgba(0,0,0,0.08);
}
```

### 3.2 The Hero Reflection (Cinematic Title)
The massive background title in the hero section uses a CSS reflection for depth.

**CSS Pattern:**
```css
.hero-title-main {
  font-family: 'Josefin Sans', sans-serif;
  font-size: clamp(80px, 12vw, 200px);
  font-weight: 700;
  color: var(--text-dark);
  line-height: 1;
  letter-spacing: 0.12em;
  -webkit-box-reflect: below -60px linear-gradient(transparent, rgba(255, 255, 255, 0.15));
}
```

### 3.3 Animated "Vibe" Gradient
Used for high-impact emphasis text that feels alive.

**CSS Pattern:**
```css
.animated-grad {
  background: var(--grad-vibrant);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: moving-gradient 4s linear infinite;
}

@keyframes moving-gradient {
  to { background-position: 200% center; }
}
```

---

## 📐 4. Visual Layout Standards

### 🌊 Section Spacing
- **Vertical Padding**: Standardize on `120px 0` for desktop and `80px 0` for mobile.
- **Section Transitions**: Use very subtle `1px solid rgba(0,0,0,0.05)` borders at the top of new sections.

### ☄️ Decorative Blobs (Hero Orbs)
Use low-opacity radial gradients behind content to anchor the layout without distracting.
- **Opacity**: `0.3` to `0.5`
- **Blur**: `100px` to `150px`
- **Position**: Usually anchored at `-10%` and `90%` of viewport width.

---

## 🎞️ 5. Asset Map Reference

| Asset | File Name | Context |
| :--- | :--- | :--- |
| **Glass Panels** | `Gradient glass panels in an arch.png` | Hero section wings/decor. |
| **Soft Light Cubes** | `Gradient cubes in soft light.png` | Sidebar decor for white sections. |
| **Silk Ribbon** | `Flowing glass ribbon.png` | Footer/Rewards background emphasis. |
| **Mask Icon** | `h.png` | Used for `mask-image` effects in outcome cards. |

---

## 📅 Roadmap for Reuse
To apply this theme to a new page:
1. Link **Poppins**, **DM Sans**, **Josefin Sans**, and **Bebas Neue** via Google Fonts.
2. Initialize the `:root` variables.
3. Use the `.glass-card` class for all structural blocks.
4. Ensure every section has a single high-impact `<h2>` using the `var(--grad-main)` text clipping.

---
*Maintained by Orionac Systems Thinking Group.*
