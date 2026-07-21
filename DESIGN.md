---
name: Master Construction
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1c'
  surface-container: '#202020'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#303030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#cececa'
  on-tertiary: '#2f312e'
  tertiary-container: '#b2b3af'
  on-tertiary-container: '#444542'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e3e3de'
  tertiary-fixed-dim: '#c6c7c2'
  on-tertiary-fixed: '#1a1c19'
  on-tertiary-fixed-variant: '#454744'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  h1-display:
    fontFamily: Epilogue
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2-architectural:
    fontFamily: Epilogue
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3-serif:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.15em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-edge: 64px
  section-gap: 160px
  stack-sm: 12px
  stack-md: 24px
---

## Brand & Style

This design system is built upon the pillars of **Cinematic Minimalism** and **Architectural Precision**. It targets ultra-high-net-worth clients who value discretion, structural integrity, and uncompromising aesthetic quality. The UI must feel like a digital extension of a premium physical environment—heavy, permanent, and meticulously crafted.

The aesthetic blends **Modern Corporate** structure with **Glassmorphism** and **Tactile** accents. By utilizing deep, matte surfaces punctuated by warm metallic highlights, the system evokes the feeling of a high-end architectural firm's studio. Motion should be slow and intentional, mimicking the deliberate nature of luxury construction.

## Colors

The palette is anchored by **Onyx Matte (#121212)**, providing a void-like depth that allows luxury elements to breathe. **Warm Gold (#D4AF37)** is used sparingly for critical interactive elements and brand accents, suggesting brass or gold-leaf finishes.

**Soft Ivory (#F5F5F0)** serves as the primary text color, reducing the harsh eye strain of pure white while maintaining high-contrast readability against the dark ground. Subtle variations of charcoal and obsidian are used for surface layering to create architectural depth without relying on traditional borders.

## Typography

The typographic hierarchy uses a sophisticated interplay between the geometric strength of **Epilogue** and the refined clarity of **Manrope**. To add a layer of bespoke luxury, **Noto Serif** (in italics) is used for pull-quotes or secondary descriptors, creating an "editorial" feel common in high-end architectural journals.

Headlines should utilize tight letter-spacing to feel "built" and solid, while body copy is given generous line height to ensure effortless legibility. Small labels always use increased tracking (letter-spacing) to mimic the engraving found on luxury hardware.

## Layout & Spacing

This design system employs a **Fixed Grid** model for desktop, centered within the viewport to create a sense of focus and exclusivity. A 12-column grid with wide 32px gutters provides the structural framework, but elements often break the grid or span large sections to create a "cinematic" rhythm.

Vertical spacing is intentionally "oversized" to communicate luxury. Rather than cramming information, sections are separated by massive gaps (160px+), forcing the user to appreciate one concept or project at a time. Alignment is strictly left-heavy or centered; justified text is never used.

## Elevation & Depth

Depth is conveyed through **Tonal Layering** and **Glassmorphism**, rather than high-contrast light sources.

1.  **Base:** The #121212 background represents the furthest plane.
2.  **Surfaces:** Elevated cards use a subtle gradient from #1E1E1E to #161616.
3.  **Glass:** Overlays (modals, navigation bars) use a 20px backdrop-blur with a 3% white tint and a 1px perimeter stroke in #FFFFFF10 to simulate premium tempered glass.
4.  **Shadows:** Shadows are "Atmospheric"—long, soft, and highly diffused with 0% spread. They use a dark tint (#000000) to create a subtle lift rather than a harsh drop.

## Shapes

The shape language reflects **Architectural Minimalism**. We avoid overly organic or "bubbly" curves. A consistent **12px to 16px radius** is applied to primary cards and containers, providing a "softened geometric" look that feels engineered yet approachable. 

Interactive elements like buttons use a slightly smaller radius (8px) to feel more precise and technical. Icons must follow a "linear-luxury" style: thin strokes (1.5px) with sharp terminals, never rounded ends.

## Components

### Buttons
- **Primary:** Gold background (#D4AF37) with black text. No shadow, but a subtle "brushed metal" gradient overlay.
- **Secondary:** Transparent with a 1px Gold border. On hover, fills with a 5% gold tint.
- **Tertiary:** Text-only with an animated underline that grows from the center.

### Cards
- Cards feature a 1px "inner glow" border (top and left) to simulate light hitting an edge. 
- Backgrounds use a very faint radial gradient to draw the eye toward the center of the content.

### Input Fields
- Underline-only or subtly boxed with #1E1E1E backgrounds. 
- Focus state transforms the bottom border into Gold with a faint glow effect.

### Chips & Tags
- Small, uppercase labels with high letter spacing.
- Backgrounds are dark (#1E1E1E) with Gold text to maintain a "badge-like" appearance.

### Specialized Components
- **Project Progress Bar:** A thin, 2px gold line with a brushed metal "glow" at the leading edge.
- **Image Carousels:** Full-bleed transitions with "Ken Burns" zooming effects to maintain the cinematic narrative.