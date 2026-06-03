---
name: Project Cornelia Editorial
colors:
  surface: '#faf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#faf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4f0'
  surface-container: '#efeeea'
  surface-container-high: '#e9e8e4'
  surface-container-highest: '#e3e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#504441'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ed'
  outline: '#837470'
  outline-variant: '#d5c3be'
  surface-tint: '#7b554c'
  primary: '#785249'
  on-primary: '#ffffff'
  primary-container: '#936a60'
  on-primary-container: '#fffaf9'
  inverse-primary: '#edbbaf'
  secondary: '#645d58'
  on-secondary: '#ffffff'
  secondary-container: '#ebe1da'
  on-secondary-container: '#6a635e'
  tertiary: '#42615c'
  on-tertiary: '#ffffff'
  tertiary-container: '#5a7a74'
  on-tertiary-container: '#eefffa'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad2'
  primary-fixed-dim: '#edbbaf'
  on-primary-fixed: '#2f140d'
  on-primary-fixed-variant: '#613e35'
  secondary-fixed: '#ebe1da'
  secondary-fixed-dim: '#cec5be'
  on-secondary-fixed: '#1f1b17'
  on-secondary-fixed-variant: '#4c4641'
  tertiary-fixed: '#c7eae2'
  tertiary-fixed-dim: '#abcdc6'
  on-tertiary-fixed: '#00201c'
  on-tertiary-fixed-variant: '#2d4c47'
  background: '#faf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e3e2df'
  primary-700: '#7D5A50'
  primary-50: '#F9F7F5'
  neutral-100: '#EEEDE9'
  neutral-900: '#050504'
typography:
  display-lg:
    fontFamily: SeoulHangang
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: SeoulHangang
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: SeoulHangang
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: SeoulHangang
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: SeoulHangang
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Libre Caslon Text
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Libre Caslon Text
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Libre Caslon Text
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-lg:
    fontFamily: Libre Caslon Text
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-md:
    fontFamily: Libre Caslon Text
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 1.5rem
  section-padding-desktop: 6rem
  section-padding-mobile: 4rem
  stack-sm: 0.5rem
  stack-md: 1.5rem
  stack-lg: 3rem
---

## Brand & Style

The brand identity is rooted in the "Data-Driven Editorial" movement—a fusion of rigorous academic research and high-end journalism. It targets researchers, activists, and policymakers, evoking a sense of historical authority and modern empowerment. 

The visual style is **Minimalist with Tactile accents**, treating the digital screen like a printed manuscript. It prioritizes vast, intentional whitespace, a sophisticated earthy palette, and a "paper" layering system. The aesthetic is purposefully "un-tech," favoring timelessness over trends to establish deep institutional trust.

## Colors

The palette uses a refined, earthy tonal system. The **Neutral-50 (#F4F3EF)** serves as a warm, paper-like foundation for all layouts. 

**Primary-600 (#936A60)** acts as the intellectual "ink" for interactive elements, while its darker variant, **Primary-700**, provides feedback for hover states. **Neutral-900 (#050504)** is reserved strictly for high-contrast typography to ensure maximum readability for long-form prose. **Secondary-600** is used for structural accents—such as timelines and decorative graphics—to maintain a cohesive, muted sophistication.

## Typography

This system employs a **Serif-on-Serif pairing** to reinforce its scholarly nature. 

- **Headings (SeoulHangang):** High-contrast, bold, and authoritative. Use `display-lg` for Hero sections and `headline-lg` for primary section markers.
- **Body Prose (Libre Caslon Text):** Chosen for its exceptional legibility in long-form reading. It maintains a warm, bookish feel.
- **Hierarchy:** Ensure generous vertical margins between headline levels to allow the typography to "breathe" like a high-end publication.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy with an airy, asymmetric rhythm. 

- **Grid:** 12-column system with a max-width of 1280px (`7xl`).
- **Rhythm:** Vertical spacing is aggressive (`section-padding-desktop`) to separate thematic clusters and reduce cognitive load. 
- **Responsive Behavior:** On mobile, margins reduce to 1rem while maintaining a minimum height for Hero containers (`80vh`) to ensure visual impact. 
- **The "Stitch" Effect:** Use asymmetric mosaics for featured publications (e.g., 1 large card paired with 2 smaller stacked cards) to break the monotony of standard grids.

## Elevation & Depth

The design system utilizes **Tonal Layering** rather than traditional elevation.

- **The Surface:** All primary content lives on `neutral-50`.
- **The Lift:** Interactive cards use a subtle "paper lift" effect on hover. This is achieved through a `shadow-xl` with low opacity (0.05 - 0.1) and a slight vertical translation (`-8px`).
- **Overlays:** In Hero sections, use semi-transparent `neutral-50` containers with a light backdrop blur to maintain readability over photographic backgrounds. 
- **Dividers:** Use the `***` sequence or `neutral-100` horizontal rules sparingly to mark article termination.

## Shapes

The shape language is primarily **Soft (0.25rem)** to maintain a structured, "document" feel.

- **Cards:** Use `rounded-sm` to maintain the archival aesthetic.
- **Pills & Buttons:** Use fully rounded (pill-shaped) radii specifically for UI controls and filters to distinguish them from static content containers.
- **Structural Graphics:** The "Pillars" component utilizes a signature 3-circle interconnected graphic system, representing the intersection of Collective, Criticism, and Conversation.

## Components

- **Buttons:** Primary buttons use `primary-600` background with `neutral-50` text. Secondary buttons are outlined with `primary-600` borders. All buttons use pill-shaped rounding and a 300ms transition on hover.
- **Cards:** Rectangular with a subtle `neutral-100` border. On hover, apply a `-8px` Y-axis lift and `shadow-xl`.
- **Interactive Pills:** Used for categorization. High-contrast (`neutral-900` background with `neutral-50` text) when active.
- **Timeline:** A vertical central axis using `secondary-600`. Milestones are marked by circular nodes that animate on scroll using a "Fade-In-Up" motion.
- **Input Fields:** Minimalist design using a simple bottom border in `secondary-600` that shifts to `primary-600` on focus.
- **Data Visualizations:** Custom SVG maps (e.g., India map) and Pillar graphics must use the `primary-600` to `secondary-600` color range to maintain a data-driven yet organic feel.