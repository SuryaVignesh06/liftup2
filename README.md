# LiftUp Website — Design System & UI Structure

This document provides a comprehensive overview of the visual architecture, color palette, and design principles used in the LiftUp landing page.

## 1. Design Philosophy
The LiftUp UI is built on a **Clean, Futuristic AI-Product** aesthetic. It prioritizes clarity, whitespace, and high-impact visual proof of execution. The design follows a minimalist "Apple-style" light theme but retains technical credibility through neon-inspired gradients and systems-focused terminology.

## 2. Core Color Palette

| Category | Token | Hex Color | Usage |
| :--- | :--- | :--- | :--- |
| **Background (Primary)** | `--bg-primary` | `#FFFFFF` | Main page background, clean white workspace. |
| **Background (Secondary)** | `--bg-secondary` | `#F9FAFB` | Section backgrounds (Voices, Trust Strip) for subtle depth. |
| **Typography (Main)** | `--text-black` | `#000000` | All `h1`, `h2`, `h3` tags and primary readability text. |
| **Typography (Muted)** | `--text-muted` | `#4B5563` | Subheaders, body paragraphs, and secondary labels. |
| **Accent (Blue)** | `--blue` | `#0088CC` | Icon backgrounds, list markers, and primary gradient starts. |
| **Accent (Purple)** | `--purple` | `#7C3AED` | Gradient ends and focal highlights. |
| **Border** | `--border` | `rgba(0,0,0,0.1)` | Subtle dividers and card outlines. |

### Brand Gradients
*   **AI Gradient**: `linear-gradient(135deg, #0088CC 0%, #7C3AED 100%)`
    *   Used for: Primary Call-to-Action (CTA) buttons, high-impact emphasis text (`<em>`), and section indicators.

## 3. UI Components & Patterns

### 🏛️ Navigation (Glassmorphism)
*   **Structure**: Fixed at the top.
*   **Visuals**: White Translucent background (`rgba(255, 255, 255, 0.8)`) with a `backdrop-filter: blur(16px)`.
*   **Logo**: "LIFTUP" in Bebas Neue, with "UP" utilizing the AI Gradient.

### 🚀 Hero Section
*   **Top Marquee**: A thin, high-speed scrolling strip confirming cohort data ("107 Students. 5 Days.").
*   **Background Number**: A massive, low-opacity "107" (`rgba(0,0,0,0.02)`) floating behind the title to anchor the specific cohort success.
*   **Hero Tag**: A pill-shaped badge identifying the partnership (Orionac × LiftUp).

### 🏷️ Section Tags
All sections are identified with a small, uppercase, tracked-out label in Blue (`--blue`) for scanning ease.

### 📄 Glass Cards
Used in "Why It Works," "Student Stories," and "Institutional Validation."
*   **Styling**: White background, 1px subtle border, and a `--shadow-subtle` drop shadow.
*   **Interaction**: Cards translate `-5px` upwards on hover with an intensified shadow and blue border-color change.

### 📉 Trust & Validation Strips
*   **Institutional Logos**: grayscale logos that gain some opacity on hover, maintaining a clean, professional look that doesn't distract from the core content.

## 4. Typography
*   **Headings (`Bebas Neue`)**: Used for all major sectional titles. It provides a bold, industrial, and fast-paced feel.
*   **Body (`Poppins`)**: Used for all readability items. It is clean, geometric, and modern.

## 5. UI Structure (Section Order)
1.  **Nav**: Fixed Global Navigation.
2.  **Hero**: Value proposition + Immediate Proof Line.
3.  **Marquee**: Technical stack items that flash by for "vibe" validation.
4.  **Trust Strip**: Primary institutional partner (Vishnu Institute of Technology).
5.  **Opportunity**: Identifying the "Gap" (Problems/Opportunities in current education).
6.  **Hypothesis**: High-impact gradient block stating the LiftUp core belief.
7.  **Method**: Step-by-step breakdown of "Build. Deploy. Live."
8.  **Outcomes**: Large numerical proof of "Cohort Zero."
9.  **Student Voices**: Direct quotes from participants in glassy cards.
10. **Validation**: Institutional proof blocks + Endorsements.
11. **CTA**: Final conversion block for institutions.
12. **Footer**: Minimalist site map and brand social links.
