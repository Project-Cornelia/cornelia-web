# Project Cornelia Website Redesign - Requirements Document

## Introduction

Project Cornelia is a women-led legal and policy collective founded in June 2021. This requirements document outlines the complete redesign of the Project Cornelia website, transitioning from a hardcoded content structure to a scalable, data-driven architecture. The redesign preserves all existing content and functionality while establishing a foundation for future CMS/database integration, improved accessibility, and enhanced user experience across all devices.

The redesign follows a phased approach: Phase 0 (maintenance message), Phase 1 (homepage redesign with Figma designs), Phase 2 (other pages redesign), Phase 3 (CMS integration), and Phase 4 (article publishing and research repository features).

## Glossary

- **System**: The Project Cornelia website application built with Next.js and Tailwind CSS
- **Content_Layer**: Structured data (JSON/YAML format) containing all website content, separate from component logic
- **Component_Architecture**: Reusable, composable React components that consume data from the Content_Layer
- **CMS**: Content Management System (Strapi, Contentful, or similar) for managing content without code changes
- **Data_Migration**: Process of extracting hardcoded content into structured format for CMS integration
- **Accessibility**: Compliance with WCAG 2.1 Level AA standards for inclusive user experience
- **Mobile_Responsive**: Design that adapts seamlessly to all screen sizes (mobile, tablet, desktop)
- **Figma_Design**: Visual design specifications provided by design team for UI/UX implementation
- **Maintenance_Message**: Temporary full-page message displayed during redesign phase
- **External_Integration**: Third-party services (Google Forms, Milaap donation platform, email)
- **Brand_Color**: Dark brown primary color used throughout the website
- **Page_Template**: Reusable layout structure for consistent page design across all pages
- **Hero_Section**: Large banner section at top of page with headline, description, and CTAs
- **Impact_Metrics**: Quantifiable statistics showing organizational reach and effectiveness
- **Call_To_Action**: Interactive elements (buttons, links) prompting user engagement
- **Navigation_Structure**: Hierarchical organization of website pages and menu items
- **Image_Asset**: Visual media files (PNG, JPG, SVG) used throughout the website
- **Form_Integration**: Connection to external form services for user submissions
- **Blog_Post**: Individual article with metadata (title, excerpt, date, author, category)
- **Project_Initiative**: Organizational work item with description and impact metrics
- **Collaborator**: Partner organization or individual featured on the website

## Requirements

### Requirement 1: Display Maintenance Message on Homepage

**User Story:** As a visitor, I want to see a clear maintenance message, so that I understand the website is being redesigned and know how to contact the organization.

#### Acceptance Criteria

1. WHEN a user visits the homepage, THE System SHALL display a full-page maintenance message
2. THE maintenance message SHALL include the text: "Thank you for your visit. We're currently rebuilding ourselves to celebrate our 5th year of Collective | Conversation | Criticism"
3. THE maintenance message SHALL display the dark brown brand color as the primary color for the message
4. THE maintenance message SHALL include the contact email: contact.projectcornelia@gmail.com
5. THE maintenance message SHALL be displayed as a temporary overlay or replacement page during Phase 0
6. WHEN the maintenance message is active, THE System SHALL comment out or disable all existing page routes except the maintenance page
7. THE maintenance message SHALL be mobile-responsive and readable on all screen sizes
8. WHEN Phase 1 begins, THE System SHALL remove the maintenance message and restore normal homepage functionality

### Requirement 2: Extract and Structure All Hardcoded Content into Data Layer

**User Story:** As a developer, I want all website content extracted into a structured data format, so that content can be managed independently from component code and easily migrated to a CMS.

#### Acceptance Criteria

1. WHEN the System processes content, THE Content_Layer SHALL contain all hardcoded content from the current website
2. THE Content_Layer SHALL be organized into separate JSON/YAML files by page (homepage.json, blog.json, our-work.json, about.json, initiatives.json, members.json, contact.json, resources.json, privacy.json, terms.json)
3. THE Content_Layer SHALL include a glossary.json file containing all defined terms and their definitions
4. THE Content_Layer SHALL include a navigation.json file defining the site structure and menu hierarchy
5. THE Content_Layer SHALL include an external-links.json file containing all third-party service URLs (Google Forms, Milaap, email addresses)
6. THE Content_Layer SHALL include an assets.json file mapping all image assets to their paths and metadata
7. FOR EACH blog post, THE Content_Layer SHALL store: title, excerpt, date, author, category, and content
8. FOR EACH project initiative, THE Content_Layer SHALL store: title, description, icon/image, and impact metrics
9. FOR EACH page, THE Content_Layer SHALL store: page title, meta description, hero section content, and all section content
10. THE Content_Layer SHALL use consistent naming conventions and data types across all files
11. THE Content_Layer SHALL include a schema.json file documenting the structure and required fields for each content type
12. WHEN content is extracted, THE System SHALL preserve all existing content without modification or loss

### Requirement 3: Create Reusable Component Architecture

**User Story:** As a developer, I want a modular component architecture, so that components can be reused across pages and easily updated without duplicating code.

#### Acceptance Criteria

1. THE Component_Architecture SHALL include a Header component that displays navigation menu and logo
2. THE Component_Architecture SHALL include a Footer component that displays footer content and links
3. THE Component_Architecture SHALL include a Hero component that accepts title, description, and CTA buttons as props
4. THE Component_Architecture SHALL include an ImpactStats component that displays metrics in a grid layout
5. THE Component_Architecture SHALL include a ProjectCard component for displaying individual project initiatives
6. THE Component_Architecture SHALL include a BlogCard component for displaying individual blog posts
7. THE Component_Architecture SHALL include a CollaboratorCarousel component for displaying partner logos
8. THE Component_Architecture SHALL include a CallToAction component for displaying engagement prompts
9. THE Component_Architecture SHALL include a PageTemplate component that provides consistent layout structure
10. WHEN a component is rendered, THE System SHALL accept data as props from the Content_Layer
11. WHEN a component is updated, THE System SHALL not require changes to content data
12. THE Component_Architecture SHALL use Tailwind CSS for all styling
13. THE Component_Architecture SHALL support dark brown brand color as primary color throughout
14. EACH component SHALL be documented with prop types and usage examples

### Requirement 4: Implement Mobile-Responsive Design

**User Story:** As a mobile user, I want the website to display correctly on all screen sizes, so that I can access content and functionality on any device.

#### Acceptance Criteria

1. WHEN the System renders on mobile devices (320px and above), THE System SHALL display content in a single column layout
2. WHEN the System renders on tablet devices (768px and above), THE System SHALL display content in a two-column layout where appropriate
3. WHEN the System renders on desktop devices (1024px and above), THE System SHALL display content in a three-column or multi-column layout where appropriate
4. THE System SHALL use Tailwind CSS responsive classes (sm:, md:, lg:, xl:) for all responsive behavior
5. WHEN images are displayed, THE System SHALL scale appropriately for each screen size without distortion
6. WHEN navigation is displayed on mobile, THE System SHALL provide a mobile-friendly menu (hamburger menu or similar)
7. WHEN buttons and interactive elements are displayed on mobile, THE System SHALL have minimum touch target size of 44x44 pixels
8. WHEN text is displayed on mobile, THE System SHALL use readable font sizes (minimum 16px for body text)
9. WHEN the viewport changes, THE System SHALL reflow content smoothly without horizontal scrolling
10. THE System SHALL pass mobile-friendly testing on Google Mobile-Friendly Test

### Requirement 5: Preserve All External Integrations and Links

**User Story:** As an organization member, I want all external integrations to continue working, so that users can submit forms, donate, and contact the organization without interruption.

#### Acceptance Criteria

1. WHEN a user clicks the "Work With Us" button, THE System SHALL redirect to the Google Form at https://forms.gle/auEAXJ96GoRzLPmr9
2. WHEN a user clicks the "Write for Us" button, THE System SHALL redirect to the Google Form at https://forms.gle/dx3ERQHoTLGF1pcx8
3. WHEN a user clicks the "Donate Now" button, THE System SHALL redirect to the Milaap fundraiser at https://milaap.org/fundraisers/plc-ahaana-againstacid
4. WHEN a user clicks the contact email link, THE System SHALL open the email client with contact.projectcornelia@gmail.com as recipient
5. THE System SHALL store all external URLs in the external-links.json file for easy management
6. WHEN an external URL is updated, THE System SHALL not require code changes to update links across the website
7. THE System SHALL open external links in a new tab with rel="noopener noreferrer" for security
8. THE System SHALL track which pages contain external integrations for future CMS configuration

### Requirement 6: Maintain All Existing Content and Structure

**User Story:** As an organization member, I want all existing content preserved during redesign, so that no information is lost and the website maintains continuity.

#### Acceptance Criteria

1. THE System SHALL preserve all homepage content: hero section, impact stats, story section, three-pillar approach, collaborators, and CTAs
2. THE System SHALL preserve all blog post content: titles, excerpts, dates, authors, categories, and content
3. THE System SHALL preserve all "Our Work" page content: project descriptions, impact metrics, and initiatives
4. THE System SHALL preserve all page content: About, Initiatives, Members, Contact, Resources, Privacy, Terms
5. THE System SHALL preserve all image assets and their locations in the public/images directory
6. THE System SHALL preserve all branding elements: logo, colors, typography, and visual style
7. THE System SHALL preserve all navigation structure and page hierarchy
8. WHEN content is migrated to the Content_Layer, THE System SHALL not modify or lose any information
9. THE System SHALL maintain all existing URLs and page routes to prevent broken links
10. THE System SHALL preserve all metadata: page titles, meta descriptions, and SEO information

### Requirement 7: Support Future CMS Integration

**User Story:** As a developer, I want the architecture to support CMS integration, so that content can be managed through a CMS interface without code changes.

#### Acceptance Criteria

1. THE System SHALL use a data layer that can be replaced with CMS API calls without changing component code
2. THE System SHALL support fetching content from CMS endpoints (Strapi, Contentful, or similar)
3. THE System SHALL include environment variables for CMS configuration (API URL, API key, etc.)
4. THE System SHALL handle CMS content in the same format as the JSON/YAML data layer
5. THE System SHALL support content versioning and publishing workflows from CMS
6. THE System SHALL include error handling for CMS API failures with fallback to static content
7. THE System SHALL support content preview functionality for CMS editors
8. THE System SHALL document the CMS integration requirements and API contract
9. WHEN CMS is integrated, THE System SHALL not require component code changes
10. THE System SHALL support incremental CMS migration (some content from CMS, some from static files)

### Requirement 8: Implement Accessibility Standards

**User Story:** As a user with accessibility needs, I want the website to be accessible, so that I can navigate and use all features regardless of ability.

#### Acceptance Criteria

1. THE System SHALL use semantic HTML elements (header, nav, main, section, article, footer)
2. THE System SHALL include alt text for all images describing content and function
3. THE System SHALL use proper heading hierarchy (h1, h2, h3, etc.) without skipping levels
4. THE System SHALL provide sufficient color contrast (minimum 4.5:1 for normal text, 3:1 for large text)
5. THE System SHALL support keyboard navigation for all interactive elements
6. THE System SHALL include focus indicators for keyboard navigation
7. THE System SHALL use ARIA labels and roles where semantic HTML is insufficient
8. THE System SHALL support screen reader navigation with proper landmark regions
9. THE System SHALL use descriptive link text (not "click here" or "read more")
10. THE System SHALL include form labels associated with input fields
11. THE System SHALL support text resizing up to 200% without loss of functionality
12. THE System SHALL avoid auto-playing media or animations that could cause seizures

### Requirement 9: Establish Brand Color and Design System

**User Story:** As a designer, I want a consistent design system with the dark brown brand color, so that the website maintains visual consistency and brand identity.

#### Acceptance Criteria

1. THE System SHALL use the Project Cornelia brand color palette:
   - Primary (Dark Brown): #936A60
   - Secondary (Warm Taupe): #B2A9A3
   - Background (Off-White): #F4F3EF
   - Text (Near Black): #050504
2. THE System SHALL define these colors in Tailwind CSS configuration for easy reuse
3. THE System SHALL include a color palette with primary, secondary, and neutral colors
4. THE System SHALL use consistent typography with defined font sizes and weights
5. THE System SHALL use consistent spacing and padding throughout the website
6. THE System SHALL use consistent border radius and shadow effects
7. THE System SHALL define button styles (primary, secondary, tertiary) using the brand palette
8. THE System SHALL define card and container styles using the brand palette
9. THE System SHALL document the design system in a style guide or design tokens file
10. WHEN components are created, THE System SHALL follow the design system specifications

### Requirement 10: Create Phased Redesign Plan

**User Story:** As a project manager, I want a clear phased approach, so that the redesign can be completed incrementally without disrupting the website.

#### Acceptance Criteria

1. THE System SHALL support Phase 0: Display maintenance message and comment out existing pages
2. THE System SHALL support Phase 1: Redesign homepage with Figma designs
3. THE System SHALL support Phase 2: Redesign other pages (About, Blog, Our Work, Initiatives, Members, Contact, Resources, Privacy, Terms)
4. THE System SHALL support Phase 3: Integrate CMS for content management
5. THE System SHALL support Phase 4: Implement article publishing and research repository features
6. WHEN a phase is completed, THE System SHALL allow rollback to previous phase if needed
7. THE System SHALL document the transition criteria between phases
8. THE System SHALL maintain backward compatibility during phase transitions
9. THE System SHALL support feature flags for enabling/disabling phases
10. THE System SHALL document the timeline and dependencies for each phase

### Requirement 11: Support Future Article Publishing Feature

**User Story:** As a content creator, I want to publish articles to the blog, so that I can share insights and stories with the community.

#### Acceptance Criteria

1. THE System SHALL support storing blog posts with title, excerpt, date, author, category, and full content
2. THE System SHALL support multiple authors for blog posts
3. THE System SHALL support multiple categories for blog posts
4. THE System SHALL support filtering blog posts by category
5. THE System SHALL support sorting blog posts by date (newest first)
6. THE System SHALL support pagination or infinite scroll for blog listings
7. THE System SHALL support individual blog post pages with full content
8. THE System SHALL support related posts recommendations
9. THE System SHALL support blog post metadata (SEO title, meta description, featured image)
10. THE System SHALL prepare data structure for future CMS article publishing

### Requirement 12: Support Future Research Repository Feature

**User Story:** As a researcher, I want to access a research repository, so that I can find and share research on women, law, and policy.

#### Acceptance Criteria

1. THE System SHALL support storing research items with title, description, author, date, and category
2. THE System SHALL support multiple research categories
3. THE System SHALL support filtering research by category
4. THE System SHALL support searching research by keywords
5. THE System SHALL support tagging research items for better discoverability
6. THE System SHALL support linking research to related initiatives or projects
7. THE System SHALL support research item metadata (publication date, source, external links)
8. THE System SHALL prepare data structure for future CMS research repository
9. THE System SHALL support exporting research metadata for integration with external systems
10. THE System SHALL support future full-text search across research repository

### Requirement 13: Document Content Structure and Data Schema

**User Story:** As a developer, I want clear documentation of content structure, so that I can understand and maintain the data layer.

#### Acceptance Criteria

1. THE System SHALL include a schema.json file documenting all content types and their fields
2. THE System SHALL document required vs. optional fields for each content type
3. THE System SHALL document data types and validation rules for each field
4. THE System SHALL include examples of valid content for each content type
5. THE System SHALL document the relationship between content types
6. THE System SHALL include a README file explaining the content layer structure
7. THE System SHALL document how to add new content types
8. THE System SHALL document how to update existing content
9. THE System SHALL document the migration path from static content to CMS
10. THE System SHALL include inline comments in data files explaining complex structures

### Requirement 14: Implement Image Asset Management

**User Story:** As a developer, I want organized image asset management, so that images can be easily updated and optimized.

#### Acceptance Criteria

1. THE System SHALL organize all images in the public/images directory
2. THE System SHALL include an assets.json file mapping image names to their paths and metadata
3. THE System SHALL document image dimensions and recommended usage for each image
4. THE System SHALL support image optimization (compression, responsive sizes)
5. THE System SHALL support multiple image formats (PNG, JPG, SVG, WebP)
6. THE System SHALL include alt text metadata for all images
7. THE System SHALL support lazy loading for images below the fold
8. THE System SHALL document the process for adding new images
9. THE System SHALL support image versioning for cache busting
10. THE System SHALL prepare image structure for future CMS media management

### Requirement 15: Ensure Performance and Optimization

**User Story:** As a user, I want the website to load quickly, so that I can access content without delays.

#### Acceptance Criteria

1. THE System SHALL use Next.js Image component for optimized image delivery
2. THE System SHALL implement code splitting for faster initial page load
3. THE System SHALL use dynamic imports for components loaded below the fold
4. THE System SHALL implement lazy loading for images and components
5. THE System SHALL minimize CSS and JavaScript bundle sizes
6. THE System SHALL use Tailwind CSS purging to remove unused styles
7. THE System SHALL implement caching strategies for static content
8. THE System SHALL achieve Lighthouse performance score of 80 or higher
9. THE System SHALL support Core Web Vitals optimization
10. THE System SHALL document performance optimization strategies

