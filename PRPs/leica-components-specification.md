# Figma-to-Component Implementation: Leica Navigation, Hero & Product Card Components

## Goal
Create three production-ready React components from Figma designs that integrate seamlessly with the existing Leica design system: **Main Navigation**, **Hero Section**, and **Product Card**. These components will demonstrate the automated Figma-to-code workflow using the MCP Figma server integration.

## Why
- **Business Value**: Accelerates design-to-code workflow with automated component generation
- **Integration**: Demonstrates MCP Figma server capabilities for design system consistency
- **Problems Solved**: Reduces manual conversion time while maintaining design fidelity and code quality
- **Workflow Validation**: Proves the automated Figma-to-React process works with real production designs

## What
Three TypeScript React components that match their Figma specifications:

1. **MainNavigation**: Responsive navigation with logo, menu items, and service icons
2. **Hero**: Hero section with background image, title, subline, and CTA button
3. **ProductCard**: Product display card with title, subline, image, and dual action buttons

### Success Criteria
- [ ] Components match Figma design specifications exactly
- [ ] Components follow established design patterns from existing codebase
- [ ] Components use design tokens exclusively (no arbitrary values)
- [ ] Components are fully responsive and accessible
- [ ] Components integrate properly with existing showcase page
- [ ] All linting and type checking passes
- [ ] Build process completes successfully
- [ ] Images are optimized using Next.js Image component

## All Needed Context

### Documentation & References
```yaml
# MUST READ - Critical project context
- file: CLAUDE.md
  why: Complete project guidelines - Tailwind restrictions, component patterns, development commands, design system structure

- file: src/app/globals.css
  why: Complete design token system - colors (red, warm-black, grey-50 through grey-900), typography (headline-1-sm/md/lg through headline-6-sm/md/lg), spacing (spacing-1 through spacing-42), responsive breakpoints (sm-375px, md-768px, lg-1440px, xl-1920px)

- file: src/components/Button.tsx
  why: Button integration patterns - variants (primary, secondary, CTA), surface themes (light/dark), states (hover, active, disabled), icon integration (dots, chevrons)

- file: src/components/Section.tsx
  why: Layout wrapper patterns - responsive padding, container max-width, consistent spacing

- file: src/components/Image.tsx
  why: Next.js Image wrapper patterns - fill, priority, sizes, object-fit, responsive behavior

- file: src/app/page.tsx
  why: Component integration patterns - layout structure, spacing, demo implementation

# Figma Component Specifications
- url: https://www.figma.com/design/zZqepMQoHFh3QmdB0bSBj4/IOP---UI-Design---WIP?node-id=27856-151190&t=b07fgYT7DDPOFkY5-4
  why: MainNavigation Desktop design - logo center, menu items left, service icons right, 50% width containers

- url: https://www.figma.com/design/zZqepMQoHFh3QmdB0bSBj4/IOP---UI-Design---WIP?node-id=27856-151063&t=b07fgYT7DDPOFkY5-4
  why: MainNavigation Mobile design - burger menu, responsive behavior

- url: https://www.figma.com/design/zZqepMQoHFh3QmdB0bSBj4/IOP---UI-Design---WIP?node-id=6552-406392&t=jUOnNZFojuEnM2qd-4
  why: Hero Section design - Next JS image with img tag, absolute positioned content, title/subline/CTA layout

- url: https://www.figma.com/design/zZqepMQoHFh3QmdB0bSBj4/IOP---UI-Design---WIP?node-id=10560-411813&t=jUOnNZFojuEnM2qd-4
  why: Product Card design - title, subline, image, dual buttons (50% width each)

# External Documentation
- url: https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server
  why: Official Figma MCP server documentation - get_code, get_image, get_variable_defs tools

- url: https://nextjs.org/docs/app/getting-started/images
  why: Next.js 15 Image optimization - priority, sizes, responsive patterns, WebP conversion

- url: https://legacy.reactjs.org/docs/accessibility.html
  why: React accessibility fundamentals - ARIA attributes, semantic HTML, keyboard navigation
```

### Current Codebase Patterns
```typescript
// Component Structure Pattern (from existing Button component)
interface ComponentProps {
  // Core content props
  title?: string;
  href?: string;
  // Variants and behavioral props
  variant?: 'primary' | 'secondary' | 'mobile';
  disabled?: boolean;
  // Surface theming for light/dark contexts
  surface?: 'light' | 'dark';
  // Accessibility and utility props
  className?: string;
  onClick?: () => void;
}

// Responsive Class Pattern (mobile-first approach)
const getResponsiveClasses = () => {
  return "text-headline-1-sm md:text-headline-1-md lg:text-headline-1-lg px-5 md:px-10 lg:px-14";
};

// Design Token Usage (CRITICAL: NO arbitrary values)
// ✅ Correct: bg-grey-50 text-foreground px-8 py-3 text-headline-2-md
// ❌ Wrong: bg-[#F5F5F5] text-[#222222] px-[32px] py-[12px] text-[48px]

// Layout Pattern from Section component
const Layout = ({ children, className = '' }) => (
  <section className={`py-10 md:py-16 lg:py-24 ${className}`}>
    <div className="container max-w-container-max-width mx-auto px-5 md:px-10 lg:px-14">
      {children}
    </div>
  </section>
);

// Image Optimization Pattern
<Image
  src="/hero-image.jpg"
  alt="Hero image description"
  priority={true}  // For above-the-fold content
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
  width={1200}
  height={800}
  className="object-cover"
/>
```

### Design System Constraints
```css
/* Available Design Tokens from globals.css */
Colors: red, black, white, warm-black, grey-50 through grey-900,
        info, success, error, warning, neutral, midnight-blue, safari-green
        background, foreground, muted, border (semantic colors)

Typography: headline-1-sm/md/lg (44px/68px/76px) through headline-6-sm/md/lg (24px/28px/28px)
           body-sm/md/lg (16px/18px/20px), label-sm/lg (12px/14px)
           font-outfit, font-lg1052 (monospace)

Spacing: spacing-1 (4px) through spacing-42 (168px)
         Common: spacing-4 (16px), spacing-6 (24px), spacing-8 (32px), spacing-10 (40px)

Breakpoints: sm (375px), md (768px), lg (1440px), xl (1920px)
Grid: 4 cols mobile, 8 tablet, 12 desktop
Container: max-width 1920px
```

### Known Gotchas & Library Quirks
```typescript
// CRITICAL: No arbitrary Tailwind values allowed
// ❌ Don't use: bg-[var(--color-grey-50)] or color-[#232323] or text-[48px]
// ✅ Use: bg-grey-50 text-foreground text-headline-2-md

// CRITICAL: Logo import pattern (from INITIAL.md)
import LogoSvg from '@/svg/logo.svg';
// Usage: <LogoSvg />

// CRITICAL: Navigation structure (from INITIAL.md)
const NavigationStructure = () => (
  <div className="header__navigation-bar container relative z-20 w-full justify-between items-center gap-2 flex">
    <div className="header__content-left w-1/2">
      {/* Main navigation links */}
    </div>
    <a href="/en-int" rel="home" className="branding">
      <LogoSvg />
    </a>
    <div className="header__content-right items-center flex justify-end gap-2 w-1/2">
      {/* Service icons */}
    </div>
  </div>
);

// CRITICAL: Next.js Image optimization for hero
// Use priority={true} for above-the-fold images
// Always specify sizes for responsive behavior
// Download images from Figma and place in public folder

// CRITICAL: Product card button layout (from INITIAL.md)
// Two buttons must be 50% width each, not on separate lines
<div className="flex gap-2">
  <Button className="flex-1" type="primary" label="Discover" />
  <Button className="flex-1" type="secondary" label="Shop now" />
</div>
```

### Research-Based Implementation Guidelines

#### Figma MCP Server Integration (2025)
```typescript
// ✅ Optimal MCP server usage workflow
// 1. Extract design specs using get_code tool
// 2. Get visual references with get_image tool
// 3. Extract design tokens with get_variable_defs tool
// 4. Map Figma tokens to existing CSS custom properties
// 5. Generate components using token-based classes

// Key principles from official documentation:
// - Break screens into smaller components for better results
// - Use consistent variable tokens and design system components
// - Focus on semantic structure over pixel-perfect recreation
// - Validate tokens against globals.css system
```

#### Next.js Image Optimization (2025)
```typescript
// ✅ Performance-optimized image usage
<Image
  src="/hero-background.jpg"
  alt="Hero background image"
  priority={true}  // Critical for above-the-fold content
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
  fill  // For background images in positioned containers
  className="object-cover object-center"
/>

// Key principles:
// - Use priority={true} for hero images
// - Always specify sizes for responsive images
// - Use fill for positioned containers
// - Optimize images to <1MB for best performance
// - Next.js automatically converts to WebP/AVIF
```

#### Accessibility Best Practices
```typescript
// ✅ Accessible navigation structure
<nav role="navigation" aria-label="Main navigation">
  <ul className="nav-links">
    <li><a href="/cameras" aria-current="page">Cameras</a></li>
    <li><a href="/lenses">Lenses</a></li>
  </ul>
</nav>

// ✅ Accessible card structure
<article className="product-card" role="article">
  <h3 id="product-title-1" className="product-title">
    {title}
  </h3>
  <p className="product-description" aria-describedby="product-title-1">
    {subline}
  </p>
  <div className="product-actions">
    <Button href={discoverUrl} aria-labelledby="product-title-1">
      Discover
    </Button>
    <Button href={shopUrl} aria-labelledby="product-title-1">
      Shop now
    </Button>
  </div>
</article>
```

## Implementation Blueprint

### Component Analysis from Figma
```typescript
// MainNavigation Component
interface MainNavigationProps {
  // Menu items for left side
  menuItems: { label: string; href: string; active?: boolean }[];
  // Service icons for right side
  serviceIcons: { icon: React.ReactNode; href: string; label: string }[];
  // Mobile menu state
  mobileMenuOpen?: boolean;
  onMobileMenuToggle?: () => void;
  // Surface theming
  surface?: 'light' | 'dark';
}

// Hero Component
interface HeroProps {
  // Background image
  backgroundImage: string;
  // Content
  title: string;
  subline: string;
  // CTA button
  ctaLabel: string;
  ctaHref: string;
  // Layout control
  contentAlignment?: 'left' | 'center' | 'right';
}

// ProductCard Component
interface ProductCardProps {
  // Content
  title: string;
  subline: string;
  // Product image
  image: string;
  imageAlt: string;
  // Actions
  discoverUrl: string;
  shopUrl: string;
  // Layout
  className?: string;
}
```

### List of Tasks to be Completed

```yaml
Task 1: Extract Figma Design Specifications
  - Use mcp__figma-dev-mode-mcp-server__get_code to extract MainNavigation desktop (node-id: 27856-151190)
  - Use mcp__figma-dev-mode-mcp-server__get_code to extract MainNavigation mobile (node-id: 27856-151063)
  - Use mcp__figma-dev-mode-mcp-server__get_code to extract Hero (node-id: 6552-406392)
  - Use mcp__figma-dev-mode-mcp-server__get_code to extract ProductCard (node-id: 10560-411813)
  - Use mcp__figma-dev-mode-mcp-server__get_image to capture visual references for all components
  - Use mcp__figma-dev-mode-mcp-server__get_variable_defs to extract design tokens and validate against globals.css

Task 2: Component Implementation
  - Create MainNavigation component with responsive behavior (desktop/mobile layouts)
  - Create Hero component with optimized background image and absolute positioned content
  - Create ProductCard component with dual-button layout (50% width each)
  - Implement TypeScript interfaces for all components
  - Apply design tokens properly (no arbitrary values)
  - Ensure responsive behavior follows mobile-first approach
  - Add accessibility attributes (ARIA labels, semantic HTML)

Task 3: Asset Integration
  - Download hero background image from Figma
  - Download product card image from Figma
  - Optimize images and place in public folder
  - Import logo SVG using established pattern
  - Ensure proper Next.js Image component usage with priority and sizes

Task 4: Component Integration
  - Add all components to showcase page (src/app/page.tsx)
  - Integrate with existing Button component
  - Ensure proper spacing and layout using Section component
  - Demonstrate component variants and responsive behavior
  - Add proper component exports

Task 5: Validation and Testing
  - Run npm run lint and fix any issues
  - Run npm run build and ensure successful compilation
  - Test responsive behavior across breakpoints
  - Verify accessibility with screen readers
  - Validate design token usage (no arbitrary values)
  - Check image optimization and loading performance
```

### Per Task Pseudocode

```typescript
// Task 1: Figma Extraction
/*
1. Extract MainNavigation desktop design
2. Extract MainNavigation mobile design
3. Extract Hero design
4. Extract ProductCard design
5. Capture visual references
6. Map design tokens to existing system
*/

// Task 2: Component Implementation
/*
MainNavigation:
1. Create responsive layout with flex
2. Logo in center, menu items left (50%), service icons right (50%)
3. Mobile: burger menu, responsive behavior
4. Use existing design tokens for spacing and colors
5. Add accessibility attributes

Hero:
1. Create container with relative positioning
2. Background image using Next.js Image with fill prop
3. Absolute positioned content overlay
4. Title (headline-1), subline (body-lg), CTA button
5. Responsive typography and spacing

ProductCard:
1. Create article container with semantic structure
2. Title (headline-3), subline (body-md)
3. Product image with proper aspect ratio
4. Dual buttons in flex container (50% width each)
5. Responsive behavior and accessibility
*/

// Task 3: Asset Integration
/*
1. Download images from Figma
2. Optimize for web (< 1MB)
3. Place in public folder
4. Update component imports
5. Configure Next.js Image with proper props
*/

// Task 4: Component Integration
/*
1. Add component imports to page.tsx
2. Create demo sections with Section wrapper
3. Add component variants and examples
4. Ensure proper spacing and layout
5. Test integration with existing components
*/

// Task 5: Validation
/*
1. Run linting: npm run lint
2. Run build: npm run build
3. Test responsive behavior
4. Validate accessibility
5. Check performance metrics
*/
```

### Integration Points
```yaml
FIGMA_INTEGRATION:
  - node_ids: ["27856-151190", "27856-151063", "6552-406392", "10560-411813"]
  - extract: code specifications, visual references, design tokens
  - validate: tokens match globals.css system
  - map: Figma tokens to existing CSS custom properties

COMPONENT_INTEGRATION:
  - MainNavigation: responsive layout, logo import, menu structure
  - Hero: background image optimization, absolute positioning
  - ProductCard: dual-button layout, existing Button component integration
  - Button: integrate existing Button component with proper variants
  - Image: use Next.js Image with optimization
  - Section: layout wrapper for spacing consistency

SHOWCASE_PAGE_INTEGRATION:
  - Add new components to src/app/page.tsx
  - Create demo sections with Section wrapper
  - Demonstrate component variants and responsive behavior
  - Maintain proper spacing and layout consistency
```

## Validation Loop

### Level 1: Figma Design Extraction
```bash
# Extract designs using MCP tools
# Expected: Design specifications, visual references, and token mappings
# Validation: Ensure all node IDs are correctly extracted
# If missing: Re-run MCP tools with correct node IDs and validate output
```

### Level 2: Syntax & Style
```bash
# Run these FIRST - fix any errors before proceeding
npm run lint                    # ESLint validation
npm run build                   # TypeScript compilation check

# Expected: No errors or warnings
# If errors: READ error messages carefully and fix systematically
# Common issues: Missing imports, TypeScript interface problems, Tailwind class issues
```

### Level 3: Component Implementation
```typescript
// Validate component structure
// Expected: Proper TypeScript interfaces, responsive classes, accessibility attributes
// Check: No arbitrary values, proper design token usage, mobile-first approach

// Validate image optimization
// Expected: Next.js Image component with priority/sizes, optimized file sizes
// Check: Images load properly, WebP conversion, responsive behavior

// Validate Button integration
// Expected: Existing Button component used properly with correct variants
// Check: Primary/secondary types, proper spacing, accessibility
```

### Level 4: Visual Validation
```bash
# Start development server
npm run dev

# Navigate to localhost:3000
# Verify components match Figma designs:
# - MainNavigation: Logo centered, menu items left, service icons right
# - Hero: Background image, absolute positioned content, responsive typography
# - ProductCard: Title/subline/image/buttons, 50% button width, responsive layout
# - Responsive behavior: Mobile/tablet/desktop breakpoints
# - No console errors or warnings
```

## Final Validation Checklist
- [ ] All Figma designs extracted successfully using MCP tools
- [ ] MainNavigation component matches desktop and mobile designs
- [ ] Hero component has optimized background image and absolute positioned content
- [ ] ProductCard component has dual buttons with 50% width each
- [ ] All components use design tokens exclusively (no arbitrary values)
- [ ] TypeScript interfaces defined properly for all components
- [ ] Components are responsive with mobile-first approach
- [ ] Accessibility attributes included (ARIA labels, semantic HTML)
- [ ] Existing Button component integrated correctly
- [ ] Logo SVG imported using established pattern
- [ ] Images optimized with Next.js Image component
- [ ] Showcase page integration complete with proper spacing
- [ ] All linting passes: `npm run lint`
- [ ] Build succeeds: `npm run build`
- [ ] Visual inspection confirms design fidelity across all breakpoints
- [ ] No console errors or warnings
- [ ] Performance metrics are acceptable (image loading, bundle size)

---

## Anti-Patterns to Avoid
- ❌ Don't use arbitrary Tailwind values (`bg-[#F5F5F5]`, `text-[48px]`, `px-[32px]`)
- ❌ Don't create new Button component (use existing Button component)
- ❌ Don't forget responsive breakpoints (always mobile-first)
- ❌ Don't skip TypeScript interface definitions
- ❌ Don't ignore accessibility attributes (ARIA labels, semantic HTML)
- ❌ Don't hardcode colors/spacing (use design tokens from globals.css)
- ❌ Don't forget image optimization (always use Next.js Image component)
- ❌ Don't create components that conflict with existing patterns
- ❌ Don't skip the MCP Figma extraction step (critical for accuracy)
- ❌ Don't place buttons on separate lines in ProductCard (use flex with 50% width)
- ❌ Don't forget to add components to showcase page for demonstration

## PRP Quality Assessment

This PRP provides comprehensive context for one-pass implementation including:
- ✅ Complete codebase pattern analysis
- ✅ Existing component integration examples
- ✅ Design system constraints and token mappings
- ✅ External documentation with specific URLs
- ✅ Step-by-step implementation blueprint
- ✅ Detailed validation loops with executable commands
- ✅ Clear anti-patterns and gotchas
- ✅ Figma MCP server integration workflow
- ✅ Next.js Image optimization best practices
- ✅ Accessibility requirements and examples

**Confidence Level: 9/10** - This PRP contains all necessary context, patterns, and validation steps for successful one-pass implementation. The only potential challenge is the complexity of the responsive MainNavigation component, but comprehensive examples and patterns are provided to mitigate this risk.
