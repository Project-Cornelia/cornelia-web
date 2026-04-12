# Project Cornelia Website Redesign - Design Document

## Overview

The Project Cornelia website redesign establishes a scalable, data-driven architecture that separates content from presentation logic. This design enables incremental redesign phases, future CMS integration, and maintainable component architecture while preserving all existing content and functionality.

The architecture consists of three primary layers:
1. **Data Layer**: Structured JSON/YAML files containing all website content
2. **Component Layer**: Reusable React components consuming data via props
3. **Page Layer**: Next.js pages composing components with data

This separation allows content updates without code changes and enables seamless CMS migration in Phase 3.

---

## Architecture

### High-Level System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Next.js Application                       │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Page Layer (src/app)                    │   │
│  │  - page.js (homepage)                               │   │
│  │  - blog/page.js, about/page.js, etc.               │   │
│  └──────────────────────────────────────────────────────┘   │
│                          ↓                                    │
│  ┌──────────────────────────────────────────────────────┐   │
│  │         Component Layer (src/components)            │   │
│  │  - Header, Footer, Hero, ImpactStats               │   │
│  │  - ProjectCard, BlogCard, Carousel, etc.           │   │
│  └──────────────────────────────────────────────────────┘   │
│                          ↓                                    │
│  ┌──────────────────────────────────────────────────────┐   │
│  │          Data Layer (src/data or public/data)       │   │
│  │  - homepage.json, blog.json, navigation.json       │   │
│  │  - external-links.json, assets.json, schema.json   │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │    Future: CMS Integration (Phase 3)               │   │
│  │  - Strapi API endpoints                            │   │
│  │  - Content preview & publishing workflows          │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

### Data Flow

```
User Request
    ↓
Next.js Page (src/app/page.js)
    ↓
Load Data (src/data/homepage.json or CMS API)
    ↓
Pass Data to Components as Props
    ↓
Components Render with Tailwind CSS
    ↓
HTML Response to Browser
```

---

## Components and Interfaces

### Base Components

#### Header Component
**Location**: `src/components/Header.js`

**Props Interface**:
```javascript
{
  navigation: Array<{
    label: string,
    href: string,
    active: boolean
  }>,
  logo: {
    src: string,
    alt: string,
    href: string
  },
  mobileMenuOpen: boolean,
  onMobileMenuToggle: () => void
}
```

**Responsibilities**:
- Display logo and organization name
- Render navigation menu (desktop and mobile)
- Handle mobile menu toggle
- Apply brand colors and responsive styling

**Responsive Behavior**:
- Mobile (320px+): Hamburger menu, stacked layout
- Tablet (768px+): Horizontal menu with logo
- Desktop (1024px+): Full navigation bar

---

#### Footer Component
**Location**: `src/components/Footer.js`

**Props Interface**:
```javascript
{
  sections: Array<{
    title: string,
    links: Array<{
      label: string,
      href: string,
      external: boolean
    }>
  }>,
  socialLinks: Array<{
    platform: string,
    url: string,
    icon: string
  }>,
  copyright: string,
  contactEmail: string
}
```

**Responsibilities**:
- Display footer sections and links
- Show social media links
- Display copyright and contact information
- Apply brand colors and responsive layout

---

### Section Components

#### Hero Component
**Location**: `src/components/Hero.js`

**Props Interface**:
```javascript
{
  title: string,
  subtitle: string,
  description: string,
  backgroundImage: string,
  ctas: Array<{
    label: string,
    href: string,
    variant: 'primary' | 'secondary',
    external: boolean
  }>,
  badge: {
    icon: string,
    text: string
  }
}
```

**Responsibilities**:
- Display hero section with title and description
- Render CTA buttons
- Handle background image and parallax effects
- Apply brand colors and responsive layout

---

#### ImpactStats Component
**Location**: `src/components/ImpactStats.js`

**Props Interface**:
```javascript
{
  stats: Array<{
    icon: string,
    number: string,
    label: string,
    description: string
  }>,
  layout: 'grid' | 'ribbon' | 'carousel',
  columns: number
}
```

**Responsibilities**:
- Display impact metrics in configurable layout
- Render icons and statistics
- Support multiple layout options
- Apply brand colors and responsive styling

---

#### ProjectCard Component
**Location**: `src/components/ProjectCard.js`

**Props Interface**:
```javascript
{
  title: string,
  description: string,
  icon: string,
  image: string,
  metrics: Array<{
    label: string,
    value: string
  }>,
  cta: {
    label: string,
    href: string
  }
}
```

**Responsibilities**:
- Display individual project initiative
- Show project description and metrics
- Render CTA button
- Apply card styling with hover effects

---

#### BlogCard Component
**Location**: `src/components/BlogCard.js`

**Props Interface**:
```javascript
{
  title: string,
  excerpt: string,
  date: string,
  author: string,
  category: string,
  image: string,
  href: string
}
```

**Responsibilities**:
- Display blog post preview
- Show metadata (date, author, category)
- Render excerpt and read more link
- Apply card styling with hover effects

---

#### CollaboratorCarousel Component
**Location**: `src/components/CollaboratorCarousel.js`

**Props Interface**:
```javascript
{
  collaborators: Array<{
    name: string,
    image: string,
    href: string
  }>,
  autoplay: boolean,
  speed: number
}
```

**Responsibilities**:
- Display partner logos in carousel
- Support autoplay and manual navigation
- Handle responsive sizing
- Apply brand styling

---

#### CallToAction Component
**Location**: `src/components/CallToAction.js`

**Props Interface**:
```javascript
{
  title: string,
  description: string,
  ctas: Array<{
    label: string,
    href: string,
    variant: 'primary' | 'secondary',
    external: boolean
  }>,
  backgroundColor: string,
  textColor: string
}
```

**Responsibilities**:
- Display engagement prompt section
- Render multiple CTA buttons
- Apply background and text colors
- Support responsive layout

---

#### PageTemplate Component
**Location**: `src/components/PageTemplate.js`

**Props Interface**:
```javascript
{
  title: string,
  description: string,
  children: ReactNode,
  headerImage: string,
  breadcrumbs: Array<{
    label: string,
    href: string
  }>
}
```

**Responsibilities**:
- Provide consistent page layout
- Render page header with title and description
- Display breadcrumb navigation
- Apply consistent spacing and styling

---

### Component Hierarchy

```
Layout
├── Header
│   └── Navigation
├── Main
│   ├── Hero
│   ├── ImpactStats
│   ├── Section
│   │   ├── ProjectCard (multiple)
│   │   ├── BlogCard (multiple)
│   │   └── CollaboratorCarousel
│   └── CallToAction
└── Footer
```

---

## Data Models

### Content Layer Structure

```
src/data/
├── homepage.json          # Homepage content
├── blog.json              # Blog posts and metadata
├── our-work.json          # Projects and initiatives
├── about.json             # About page content
├── initiatives.json       # Initiatives page content
├── members.json           # Members page content
├── contact.json           # Contact page content
├── resources.json         # Resources page content
├── privacy.json           # Privacy policy
├── terms.json             # Terms of service
├── navigation.json        # Site navigation structure
├── external-links.json    # Third-party service URLs
├── assets.json            # Image asset metadata
├── schema.json            # Content type schemas
└── glossary.json          # Term definitions
```

### Data Type Schemas

#### Homepage Schema
```json
{
  "hero": {
    "title": "string",
    "subtitle": "string",
    "description": "string",
    "backgroundImage": "string (path)",
    "ctas": [
      {
        "label": "string",
        "href": "string",
        "variant": "primary|secondary",
        "external": "boolean"
      }
    ]
  },
  "impactStats": [
    {
      "icon": "string (path)",
      "number": "string",
      "label": "string",
      "description": "string"
    }
  ],
  "story": {
    "title": "string",
    "heading": "string",
    "paragraphs": ["string"],
    "cta": {
      "label": "string",
      "href": "string"
    },
    "image": "string (path)"
  },
  "approach": {
    "title": "string",
    "subtitle": "string",
    "pillars": [
      {
        "title": "string",
        "description": "string",
        "icon": "string (path)"
      }
    ]
  },
  "collaborators": [
    {
      "name": "string",
      "image": "string (path)",
      "href": "string"
    }
  ],
  "cta": {
    "title": "string",
    "description": "string",
    "ctas": [
      {
        "label": "string",
        "href": "string",
        "variant": "primary|secondary"
      }
    ]
  }
}
```

#### Blog Post Schema
```json
{
  "id": "string",
  "title": "string",
  "excerpt": "string",
  "content": "string (markdown or HTML)",
  "date": "string (ISO 8601)",
  "author": "string",
  "category": "string",
  "image": "string (path)",
  "seoTitle": "string",
  "seoDescription": "string",
  "tags": ["string"]
}
```

#### Project Initiative Schema
```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "icon": "string (path)",
  "image": "string (path)",
  "metrics": [
    {
      "label": "string",
      "value": "string"
    }
  ],
  "cta": {
    "label": "string",
    "href": "string"
  }
}
```

#### Navigation Schema
```json
{
  "primary": [
    {
      "label": "string",
      "href": "string",
      "children": [
        {
          "label": "string",
          "href": "string"
        }
      ]
    }
  ],
  "secondary": [
    {
      "label": "string",
      "href": "string"
    }
  ]
}
```

#### External Links Schema
```json
{
  "forms": {
    "workWithUs": "string (URL)",
    "writeForUs": "string (URL)"
  },
  "donations": {
    "milaap": "string (URL)"
  },
  "contact": {
    "email": "string (email)",
    "phone": "string (optional)"
  },
  "social": {
    "instagram": "string (URL)",
    "linkedin": "string (URL)",
    "twitter": "string (URL)"
  }
}
```

#### Assets Schema
```json
{
  "images": [
    {
      "id": "string",
      "name": "string",
      "path": "string",
      "alt": "string",
      "width": "number",
      "height": "number",
      "formats": ["png", "jpg", "webp"],
      "usage": "string (where used)"
    }
  ]
}
```

---

## Tailwind Configuration

### Brand Color Palette

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Project Cornelia Brand Colors
        primary: {
          50: '#F9F7F5',
          100: '#F3EFEB',
          200: '#E7DFD7',
          300: '#DBCFC3',
          400: '#CFBFAF',
          500: '#C3AF9B',  // Lighter variant
          600: '#936A60',  // Primary Brand Color
          700: '#7D5A50',
          800: '#674A40',
          900: '#513A30',
        },
        secondary: {
          50: '#F9F8F7',
          100: '#F3F1EF',
          200: '#E7E3DF',
          300: '#DBD5CF',
          400: '#CFC7BF',
          500: '#C3B9AF',
          600: '#B2A9A3',  // Secondary Brand Color
          700: '#9C9389',
          800: '#867D6F',
          900: '#706755',
        },
        neutral: {
          50: '#F4F3EF',   // Background
          100: '#EEEDE9',
          200: '#E8E7E3',
          300: '#D9D8D2',
          400: '#CCCAC4',
          500: '#BFBDB7',
          600: '#A6A49E',
          700: '#8D8B85',
          800: '#74726C',
          900: '#050504',  // Text Color
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#050504',
            a: {
              color: '#936A60',
              '&:hover': {
                color: '#7D5A50',
              },
            },
          },
        },
      },
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
      borderRadius: {
        sm: '0.25rem',
        md: '0.5rem',
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '2rem',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
    },
  },
}
```

### Component Classes

#### Button Styles
```css
/* Primary Button */
.btn-primary {
  @apply px-6 py-3 rounded-lg bg-primary-600 text-white font-semibold
         hover:bg-primary-700 transition-colors shadow-md;
}

/* Secondary Button */
.btn-secondary {
  @apply px-6 py-3 rounded-lg border-2 border-primary-600 text-primary-600
         font-semibold hover:bg-primary-50 transition-colors;
}

/* Tertiary Button */
.btn-tertiary {
  @apply px-6 py-3 rounded-lg text-primary-600 font-semibold
         hover:bg-primary-50 transition-colors;
}
```

#### Card Styles
```css
/* Base Card */
.card {
  @apply bg-white rounded-lg border border-neutral-200 shadow-md
         hover:shadow-lg transition-shadow;
}

/* Glass Card (frosted effect) */
.glass-card {
  @apply bg-white/80 backdrop-blur border border-white/60
         rounded-lg shadow-lg;
}
```

#### Section Styles
```css
/* Section Container */
.section {
  @apply py-16 md:py-24 lg:py-32;
}

/* Section with Background */
.section-shell {
  @apply section bg-white;
}
```

---

## Phase 0: Maintenance Message Implementation

### Maintenance Page Structure

**Location**: `src/app/maintenance/page.js` (or root page during Phase 0)

**Layout**:
```
┌─────────────────────────────────────────┐
│                                         │
│                                         │
│         [Project Cornelia Logo]         │
│                                         │
│    Thank you for your visit.            │
│    We're currently rebuilding           │
│    ourselves to celebrate our           │
│    5th year of                          │
│                                         │
│    Collective | Conversation |          │
│    Criticism                            │
│                                         │
│    [Contact Email Link]                 │
│                                         │
│                                         │
└─────────────────────────────────────────┘
```

**Design Specifications**:
- Full viewport height (100vh)
- Centered content with flexbox
- Primary brand color (#936A60) for text and accents
- Background color (#F4F3EF)
- Responsive padding for mobile (20px), tablet (40px), desktop (60px)
- Email link styled as secondary button
- Logo sized responsively (100px mobile, 150px desktop)

**Route Handling**:
- Phase 0: All routes redirect to maintenance page
- Phase 1: Maintenance page removed, normal routes restored
- Implementation: Use Next.js middleware or route configuration

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Content Preservation

*For any* content item from the original website, the extracted content layer SHALL contain an equivalent item with all original information preserved.

**Validates: Requirements 2.1, 2.12, 6.1-6.10**

### Property 2: Blog Post Schema Compliance

*For any* blog post in the content layer, the post SHALL contain all required fields: title, excerpt, date, author, category, and content, with correct data types.

**Validates: Requirements 2.7, 11.1-11.10**

### Property 3: Project Initiative Schema Compliance

*For any* project initiative in the content layer, the initiative SHALL contain all required fields: title, description, icon/image, and impact metrics, with correct data types.

**Validates: Requirements 2.8**

### Property 4: Page Schema Compliance

*For any* page in the content layer, the page SHALL contain required fields: page title, meta description, hero section content, and section content, with correct data types.

**Validates: Requirements 2.9**

### Property 5: Consistent Naming Conventions

*For any* two content items of the same type, their field names SHALL use consistent naming conventions (camelCase, snake_case, etc.) and data types.

**Validates: Requirements 2.10**

### Property 6: Component Props Accept Data

*For any* component and any valid data object matching the component's expected schema, the component SHALL render without errors and display the provided data.

**Validates: Requirements 3.10**

### Property 7: External Links Correctness

*For any* external link in the content layer, the link SHALL point to the correct URL as specified in the requirements (Google Forms, Milaap, email addresses).

**Validates: Requirements 5.1-5.4**

### Property 8: External Links Security Attributes

*For any* external link rendered in the HTML, the link SHALL have rel="noopener noreferrer" attribute for security.

**Validates: Requirements 5.7**

### Property 9: Semantic HTML Usage

*For any* page rendered by the system, the HTML SHALL use semantic elements (header, nav, main, section, article, footer) for page structure.

**Validates: Requirements 8.1**

### Property 10: Image Alt Text Presence

*For any* image element rendered on a page, the image SHALL have an alt attribute with descriptive text.

**Validates: Requirements 8.2**

### Property 11: Heading Hierarchy Compliance

*For any* page rendered by the system, heading elements (h1, h2, h3, etc.) SHALL follow proper hierarchy without skipping levels.

**Validates: Requirements 8.3**

### Property 12: Color Contrast Compliance

*For any* text element on the page, the color contrast ratio between text and background SHALL meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text).

**Validates: Requirements 8.4, 9.1**

### Property 13: Keyboard Navigation Support

*For any* interactive element on the page, the element SHALL be accessible via keyboard navigation (Tab key).

**Validates: Requirements 8.5**

### Property 14: Focus Indicators Visibility

*For any* interactive element that receives keyboard focus, the element SHALL display a visible focus indicator.

**Validates: Requirements 8.6**

### Property 15: ARIA Labels Presence

*For any* icon-only button or interactive element without visible text, the element SHALL have an ARIA label or title attribute.

**Validates: Requirements 8.7**

### Property 16: Landmark Regions Structure

*For any* page rendered by the system, the page SHALL contain proper landmark regions (header, nav, main, footer) for screen reader navigation.

**Validates: Requirements 8.8**

### Property 17: Descriptive Link Text

*For any* link element on the page, the link text SHALL be descriptive and not generic (not "click here", "read more", etc.).

**Validates: Requirements 8.9**

### Property 18: Form Label Association

*For any* form input element on the page, the input SHALL have an associated label element with matching htmlFor attribute.

**Validates: Requirements 8.10**

### Property 19: Media Autoplay Prevention

*For any* media element (audio, video) on the page, the element SHALL NOT have an autoplay attribute.

**Validates: Requirements 8.12**

---

## Error Handling

### Data Loading Errors

**Scenario**: Content file fails to load

**Handling**:
```javascript
try {
  const data = await import('@/data/homepage.json')
  return data.default
} catch (error) {
  console.error('Failed to load homepage data:', error)
  return defaultFallbackData
}
```

**User Experience**:
- Display error message with contact information
- Show cached version if available
- Log error for debugging

### CMS Integration Errors

**Scenario**: CMS API is unavailable

**Handling**:
```javascript
try {
  const data = await fetchFromCMS()
  return data
} catch (error) {
  console.warn('CMS unavailable, falling back to static content')
  return await loadStaticContent()
}
```

**User Experience**:
- Gracefully fall back to static content
- Display banner indicating content may be outdated
- Retry mechanism with exponential backoff

### Image Loading Errors

**Scenario**: Image asset fails to load

**Handling**:
- Use Next.js Image component with error boundary
- Display placeholder or fallback image
- Log error for asset management

---

## Testing Strategy

### Property-Based Testing

Property-based testing validates universal properties across many generated inputs. Each property test runs minimum 100 iterations with randomized data.

**Property Test Implementation** (using fast-check or similar):

```javascript
// Property 1: Content Preservation
describe('Content Layer', () => {
  it('preserves all content from original website', () => {
    fc.assert(
      fc.property(fc.record({
        title: fc.string(),
        content: fc.string(),
        metadata: fc.record({
          date: fc.date(),
          author: fc.string()
        })
      }), (originalContent) => {
        const extracted = extractContent(originalContent)
        expect(extracted).toEqual(originalContent)
      }),
      { numRuns: 100 }
    )
  })
})

// Feature: website-redesign, Property 1: Content Preservation
```

```javascript
// Property 2: Blog Post Schema Compliance
describe('Blog Post Schema', () => {
  it('all blog posts contain required fields with correct types', () => {
    fc.assert(
      fc.property(generateBlogPost(), (post) => {
        expect(post).toHaveProperty('title')
        expect(post).toHaveProperty('excerpt')
        expect(post).toHaveProperty('date')
        expect(post).toHaveProperty('author')
        expect(post).toHaveProperty('category')
        expect(post).toHaveProperty('content')
        expect(typeof post.title).toBe('string')
        expect(typeof post.date).toBe('string')
      }),
      { numRuns: 100 }
    )
  })
})

// Feature: website-redesign, Property 2: Blog Post Schema Compliance
```

```javascript
// Property 6: Component Props Accept Data
describe('Hero Component', () => {
  it('renders with any valid data object', () => {
    fc.assert(
      fc.property(generateHeroData(), (data) => {
        const { container } = render(<Hero {...data} />)
        expect(container).toBeInTheDocument()
        if (data.title) {
          expect(screen.getByText(data.title)).toBeInTheDocument()
        }
      }),
      { numRuns: 100 }
    )
  })
})

// Feature: website-redesign, Property 6: Component Props Accept Data
```

```javascript
// Property 9: Semantic HTML Usage
describe('Semantic HTML', () => {
  it('all pages use semantic HTML elements', () => {
    fc.assert(
      fc.property(fc.constantFrom(...pageNames), (pageName) => {
        const { container } = render(<Page name={pageName} />)
        const semanticElements = container.querySelectorAll(
          'header, nav, main, section, article, footer'
        )
        expect(semanticElements.length).toBeGreaterThan(0)
      }),
      { numRuns: 100 }
    )
  })
})

// Feature: website-redesign, Property 9: Semantic HTML Usage
```

```javascript
// Property 10: Image Alt Text Presence
describe('Image Accessibility', () => {
  it('all images have alt text', () => {
    fc.assert(
      fc.property(fc.constantFrom(...pageNames), (pageName) => {
        const { container } = render(<Page name={pageName} />)
        const images = container.querySelectorAll('img')
        images.forEach(img => {
          expect(img.getAttribute('alt')).toBeTruthy()
          expect(img.getAttribute('alt').length).toBeGreaterThan(0)
        })
      }),
      { numRuns: 100 }
    )
  })
})

// Feature: website-redesign, Property 10: Image Alt Text Presence
```

```javascript
// Property 12: Color Contrast Compliance
describe('Color Contrast', () => {
  it('all text meets WCAG AA contrast standards', () => {
    fc.assert(
      fc.property(fc.constantFrom(...pageNames), (pageName) => {
        const { container } = render(<Page name={pageName} />)
        const textElements = container.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a, button')
        textElements.forEach(element => {
          const contrast = getContrastRatio(element)
          expect(contrast).toBeGreaterThanOrEqual(4.5)
        })
      }),
      { numRuns: 100 }
    )
  })
})

// Feature: website-redesign, Property 12: Color Contrast Compliance
```

### Unit Tests

**Component Testing**:
- Test each component with specific example data
- Verify correct rendering with edge cases
- Test error states and fallbacks

**Data Layer Testing**:
- Validate JSON schema compliance
- Test data transformation functions
- Verify external link integrity

**Example Unit Test**:
```javascript
describe('Hero Component - Unit Tests', () => {
  it('renders with minimal required props', () => {
    const props = {
      title: 'Test Title',
      description: 'Test Description',
      ctas: []
    }
    render(<Hero {...props} />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('handles missing optional props gracefully', () => {
    const props = {
      title: 'Test Title',
      description: 'Test Description'
    }
    render(<Hero {...props} />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('renders CTA buttons when provided', () => {
    const props = {
      title: 'Test',
      description: 'Test',
      ctas: [
        { label: 'Click Me', href: '/test', variant: 'primary' }
      ]
    }
    render(<Hero {...props} />)
    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })
})
```

### Integration Tests

**Page Integration**:
- Test complete page rendering with real data
- Verify component composition
- Test navigation between pages
- Test external link functionality

**CMS Integration**:
- Test CMS API connection
- Test content fetching and caching
- Test fallback to static content

### Accessibility Testing

**Manual Testing**:
- Keyboard navigation through all pages
- Screen reader testing with NVDA/JAWS
- Focus indicator visibility

**Automated Testing**:
- axe-core for accessibility violations
- Lighthouse accessibility audit
- WAVE browser extension

### Performance Testing

**Metrics**:
- Lighthouse Performance score (target: 80+)
- Core Web Vitals (LCP, FID, CLS)
- Bundle size analysis
- Image optimization verification

**Tools**:
- Lighthouse CI
- WebPageTest
- Bundle analyzer

### Mobile Responsiveness Testing

**Breakpoints**:
- Mobile: 320px, 375px, 425px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1920px

**Testing**:
- Manual testing on real devices
- Chrome DevTools device emulation
- Responsive design testing tools

---

## Future CMS Integration (Phase 3)

### CMS Architecture

**Strapi Integration**:
```
┌─────────────────────────────────────────┐
│         Strapi CMS (Backend)            │
│  - Content Management Interface         │
│  - API Endpoints                        │
│  - User Roles & Permissions             │
└─────────────────────────────────────────┘
           ↓ (REST/GraphQL API)
┌─────────────────────────────────────────┐
│      Next.js Application                │
│  - API Routes (src/app/api)             │
│  - Data Fetching Layer                  │
│  - Caching Strategy                     │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│      React Components                   │
│  - Consume data via props               │
│  - No CMS knowledge required            │
└─────────────────────────────────────────┘
```

### API Contract

**Endpoint Structure**:
```
GET /api/content/homepage
GET /api/content/blog
GET /api/content/blog/:id
GET /api/content/pages/:slug
GET /api/content/navigation
GET /api/content/external-links
```

**Response Format**:
```json
{
  "success": true,
  "data": { /* content object */ },
  "meta": {
    "version": "1.0",
    "lastUpdated": "2024-01-15T10:30:00Z",
    "cacheControl": "max-age=3600"
  }
}
```

### Migration Strategy

**Phase 3 Implementation**:
1. Create CMS content models matching JSON schemas
2. Implement API routes as abstraction layer
3. Migrate content from JSON to CMS
4. Update data fetching to use CMS API
5. Implement caching and fallback strategies
6. Test content preview and publishing workflows

**Backward Compatibility**:
- Keep static JSON files as fallback
- Support hybrid mode (some content from CMS, some from JSON)
- Implement feature flags for gradual rollout

---

## Implementation Guidelines

### File Organization

```
src/
├── app/
│   ├── page.js                 # Homepage
│   ├── layout.js               # Root layout
│   ├── blog/
│   │   └── page.js
│   ├── about/
│   │   └── page.js
│   └── ...
├── components/
│   ├── Header.js
│   ├── Footer.js
│   ├── Hero.js
│   ├── ImpactStats.js
│   ├── ProjectCard.js
│   ├── BlogCard.js
│   ├── CollaboratorCarousel.js
│   ├── CallToAction.js
│   └── PageTemplate.js
├── data/
│   ├── homepage.json
│   ├── blog.json
│   ├── navigation.json
│   ├── external-links.json
│   ├── assets.json
│   ├── schema.json
│   └── ...
└── utils/
    ├── dataLoader.js           # Load data from JSON or CMS
    ├── contentValidator.js     # Validate content against schema
    └── imageOptimizer.js       # Image optimization utilities
```

### Data Loading Pattern

```javascript
// src/utils/dataLoader.js
export async function loadContent(contentType) {
  // Try CMS first if enabled
  if (process.env.USE_CMS === 'true') {
    try {
      return await fetchFromCMS(contentType)
    } catch (error) {
      console.warn(`CMS fetch failed for ${contentType}, falling back to static`)
    }
  }

  // Fall back to static JSON
  try {
    const data = await import(`@/data/${contentType}.json`)
    return data.default
  } catch (error) {
    console.error(`Failed to load ${contentType} data:`, error)
    throw new Error(`Content not found: ${contentType}`)
  }
}
```

### Component Usage Pattern

```javascript
// src/app/page.js
import { loadContent } from '@/utils/dataLoader'
import Hero from '@/components/Hero'
import ImpactStats from '@/components/ImpactStats'

export default async function Home() {
  const data = await loadContent('homepage')

  return (
    <>
      <Hero {...data.hero} />
      <ImpactStats stats={data.impactStats} layout="grid" />
    </>
  )
}
```

### Environment Configuration

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://projectcornelia.org
USE_CMS=false
CMS_API_URL=http://localhost:1337
CMS_API_KEY=your-api-key
```

---

## Accessibility Compliance

### WCAG 2.1 Level AA Standards

**Semantic HTML**:
- Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Use heading hierarchy (h1, h2, h3) without skipping levels
- Use `<button>` for interactive elements, not `<div>`

**Color Contrast**:
- Normal text: 4.5:1 ratio (primary #936A60 on background #F4F3EF = 5.2:1 ✓)
- Large text: 3:1 ratio
- Test with WebAIM Contrast Checker

**Keyboard Navigation**:
- All interactive elements accessible via Tab key
- Focus indicators visible (outline or highlight)
- Logical tab order (left to right, top to bottom)

**Screen Reader Support**:
- Alt text for all images (descriptive, not "image of")
- ARIA labels for icon-only buttons
- ARIA live regions for dynamic content
- Proper landmark regions

**Form Accessibility**:
- Labels associated with inputs via `<label htmlFor>`
- Error messages linked to inputs
- Required fields marked with `aria-required="true"`

---

## Performance Optimization

### Image Optimization

**Next.js Image Component**:
```javascript
import Image from 'next/image'

<Image
  src="/images/hero.jpg"
  alt="Women leading change"
  width={1200}
  height={600}
  priority={true}  // For above-fold images
  placeholder="blur"
  blurDataURL="data:image/..."
/>
```

**Image Formats**:
- Use WebP with JPG fallback
- Responsive sizes: 320px, 640px, 1024px, 1280px
- Compress with TinyPNG or similar

### Code Splitting

```javascript
// Dynamic imports for below-fold components
const CollaboratorCarousel = dynamic(
  () => import('@/components/CollaboratorCarousel'),
  { loading: () => <div>Loading...</div> }
)
```

### Caching Strategy

```javascript
// Cache static content for 1 hour
export const revalidate = 3600

// Cache CMS content for 30 minutes
const cacheControl = 'public, s-maxage=1800, stale-while-revalidate=86400'
```

---

## Summary

This design establishes a scalable, maintainable architecture for the Project Cornelia website redesign. The separation of data, components, and pages enables:

- **Content Independence**: Update content without code changes
- **Component Reusability**: Use components across multiple pages
- **CMS Readiness**: Seamless migration to CMS in Phase 3
- **Accessibility**: WCAG 2.1 Level AA compliance
- **Performance**: Optimized images, code splitting, caching
- **Maintainability**: Clear structure and documentation

The phased approach allows incremental implementation while preserving existing functionality and content throughout the redesign process.
