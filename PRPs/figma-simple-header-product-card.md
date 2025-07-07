# Figma-to-Component Implementation: Simple Header and Product Card Components

## Purpose
Implement two new React components (Simple Header and Product Card) from Figma designs using the existing Leica design system and MCP Figma server integration. This demonstrates the automated Figma-to-code workflow with production-ready React components.

## Core Principles
1. **Context is King**: Include ALL necessary documentation, examples, and caveats
2. **Validation Loops**: Provide executable tests/lints the AI can run and fix
3. **Information Dense**: Use keywords and patterns from the codebase
4. **Progressive Success**: Start simple, validate, then enhance
5. **Global rules**: Be sure to follow all rules in CLAUDE.md

---

## Goal
Create 2 new React components (Simple Header and Product Card) from Figma designs that integrate seamlessly with the existing Leica design system, follow established patterns, and demonstrate proper responsive behavior.

## Why
- **Business value**: Accelerates design-to-code workflow with automated component generation
- **Integration**: Demonstrates MCP Figma server capabilities for design system consistency
- **Problems solved**: Reduces manual conversion time while maintaining design fidelity and code quality

## What
TypeScript React components:
1. **Simple Header Component**: Header section with title, subline, optional image, and optional back link
2. **Product Card Component**: Product showcase card with image, title, subline, and action links

### Success Criteria
- [ ] Simple Header component matches Figma design specifications
- [ ] Product Card component matches Figma design specifications  
- [ ] Components follow established design patterns
- [ ] Components use design tokens (no arbitrary values)
- [ ] Components are responsive and accessible
- [ ] Components integrate properly with existing home page
- [ ] All linting and type checking passes
- [ ] Build process completes successfully

## All Needed Context

### Documentation & References
```yaml
# MUST READ - Include these in your context window
- url: https://www.figma.com/design/zZqepMQoHFh3QmdB0bSBj4/IOP---UI-Design---WIP?node-id=6476-388774&t=pFExmpBwoBBaTUxn-4
  why: Simple Header component design specifications and visual structure (IMPORTANT: do not include navigation)

- url: https://www.figma.com/design/zZqepMQoHFh3QmdB0bSBj4/IOP---UI-Design---WIP?node-id=10560-411813&m=dev
  why: Product Card component design specifications and visual structure (IMPORTANT: grey-50 background for transparent images)

- file: src/components/Button.tsx
  why: Button integration patterns - variants, states, surface themes, proper TypeScript interfaces

- file: src/components/Section.tsx
  why: Layout wrapper patterns - responsive padding, container structure

- file: src/components/Image.tsx
  why: Next.js Image optimization patterns - priority, sizes, responsive handling

- file: src/app/globals.css
  why: Complete design token system - colors, typography, spacing, responsive breakpoints

- file: src/app/page.tsx
  why: Component integration patterns - layout, spacing, demo structure

- file: CLAUDE.md
  why: Critical project guidelines - Tailwind class restrictions, component patterns, development commands

# External Research & Best Practices
- url: https://nextjs.org/docs/app/building-your-application/optimizing/images
  why: Next.js 15 Image optimization - priority, sizes, responsive patterns

- url: https://web.dev/accessibility/
  why: Web accessibility fundamentals and ARIA attribute implementation

- url: https://inclusive-components.design/cards/
  why: Accessibility best practices for card components - semantic structure, clickable areas

- url: https://tailwindcss.com/docs/responsive-design
  why: Mobile-first responsive design patterns and breakpoint usage
```

### Current Codebase Patterns
```typescript
// Component Structure Pattern (from existing components)
interface ComponentProps {
  // Core content
  title: string;
  subline?: string;
  // Media options
  image?: string;
  imageAlt?: string;
  // Variants and options
  variant?: 'simple' | 'with-image';
  // Navigation options
  backLink?: {
    href: string;
    label: string;
  };
  // Optional functionality
  className?: string;
  children?: React.ReactNode;
}

// Responsive Class Pattern (mobile-first)
const getResponsiveClasses = () => {
  return "text-headline-1-sm md:text-headline-1-md lg:text-headline-1-lg";
};

// Design Token Usage (NO arbitrary values)
// ✅ Correct: bg-grey-50 text-foreground
// ❌ Wrong: bg-[#F5F5F5] text-[#222222]

// Button Integration Pattern
<Button 
  type="cta" 
  label="Discover" 
  href="/discover"
  chevron={true}
/>
<Button 
  type="cta" 
  label="Shop now" 
  href="/shop"
  chevron={true}
/>

// Section Wrapper Pattern
<Section>
  <div className="space-y-10">
    {/* Component content */}
  </div>
</Section>

// Image Optimization Pattern
<Image
  src="/hero-image.jpg"
  alt="Hero image description"
  priority={true}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
  width={1200}
  height={800}
  className="object-cover"
/>
```

### Design System Constraints
```css
/* Available Design Tokens from globals.css */
Colors: red, black, white, warm-black, grey-50 through grey-900
Typography: headline-1-sm/md/lg through headline-6-sm/md/lg, body-sm/md/lg
Spacing: spacing-1 (4px) through spacing-42 (168px)
Breakpoints: sm(375px), md(768px), lg(1440px), xl(1920px)
Aspect Ratios: 16/9, 4/3, 3/2, 4/5

/* Responsive Typography Classes */
text-headline-1-sm md:text-headline-1-md lg:text-headline-1-lg
text-body-sm md:text-body-md lg:text-body-lg
```

### Known Gotchas & Library Quirks
```typescript
// CRITICAL: No arbitrary Tailwind values allowed
// ❌ Don't use: bg-[var(--color-grey-50)] or color-[#232323]
// ✅ Use: bg-grey-50 text-foreground

// CRITICAL: Product Card images should have grey-50 background
// Per specification: "The image used in production will be transparent, so the background should be grey-050"

// CRITICAL: Simple Header excludes navigation
// Per specification: "do not include the navigation, it is a separate component"

// CRITICAL: Image optimization patterns
// Use existing Image component with proper sizes and priority attributes

// CRITICAL: Button integration for Product Card
// Use existing Button component with type="cta" and chevron={true}

// CRITICAL: Responsive patterns
// Always use mobile-first approach: base class, then md:, lg: prefixes

// CRITICAL: Section wrapper usage
// Use existing Section component for consistent spacing and layout
```

### Research-Based Implementation Guidelines

#### Next.js Image Optimization (2025 Best Practices)
```typescript
// ✅ Optimal Next.js Image usage for components
<Image
  src="/hero-image.jpg"
  alt="Hero image description"
  priority={true}  // For above-the-fold content
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
  width={1200}
  height={800}
  className="object-cover"
/>

// Key principles:
// - Use priority={true} for above-the-fold images
// - Always specify sizes for responsive images
// - Keep images below 1MB for optimal performance
// - Use existing Image component wrapper
```

#### Accessibility Best Practices for Headers & Cards
```typescript
// ✅ Accessible header component structure
<header className="header" role="banner">
  {backLink && (
    <nav className="back-nav">
      <Button href={backLink.href} type="cta" label={backLink.label} />
    </nav>
  )}
  <h1 className="header-title">{title}</h1>
  {subline && <p className="header-subline">{subline}</p>}
  {image && <Image src={image} alt={imageAlt} />}
</header>

// ✅ Accessible card component structure
<article className="card" role="article">
  <div className="card-image bg-grey-50">
    <Image src={image} alt={imageAlt} />
  </div>
  <div className="card-content">
    <h3 className="card-title">{title}</h3>
    <p className="card-subline">{subline}</p>
    <div className="card-actions">
      <Button href={discoverHref} type="cta" label="Discover" chevron />
      <Button href={shopHref} type="cta" label="Shop now" chevron />
    </div>
  </div>
</article>

// Key principles:
// - Use semantic HTML (header, article, h1-h6, nav)
// - Provide proper alt text for images
// - Ensure 4.5:1 color contrast minimum
// - Use existing Button component for actions
// - Include proper ARIA roles where needed
```

## Implementation Blueprint

### Component Analysis from Figma
```typescript
// Simple Header Component (node-id: 6476-388774)
// Expected structure based on Figma design and requirements:
interface SimpleHeaderProps {
  title: string;
  subline?: string;
  image?: string;
  imageAlt?: string;
  backLink?: {
    href: string;
    label: string;
  };
  variant?: 'simple' | 'with-image';
  className?: string;
}

// Product Card Component (node-id: 10560-411813)
// Expected structure based on Figma design and requirements:
interface ProductCardProps {
  title: string;
  subline?: string;
  image: string;
  imageAlt: string;
  discoverHref: string;
  shopHref: string;
  className?: string;
}
```

### List of tasks to be completed

```yaml
Task 1: Extract Figma Design Specifications
- Use mcp__figma-dev-mode-mcp-server__get_code with node-id: 6476-388774 for Simple Header
- Use mcp__figma-dev-mode-mcp-server__get_code with node-id: 10560-411813 for Product Card
- Use mcp__figma-dev-mode-mcp-server__get_variable_defs to get design tokens
- Use mcp__figma-dev-mode-mcp-server__get_image for both components for visual reference
- Map Figma tokens to existing CSS custom properties in globals.css

Task 2: Create Simple Header Component
- Create src/components/SimpleHeader.tsx with TypeScript interface
- Implement responsive layout with mobile-first approach
- Add optional back navigation link (do NOT include main navigation)
- Add optional image support with proper optimization
- Support variants: simple (no image) and with-image
- Apply design tokens from globals.css (no arbitrary values)
- Ensure accessibility with proper ARIA attributes and semantic HTML

Task 3: Create Product Card Component  
- Create src/components/ProductCard.tsx with TypeScript interface
- Implement card structure with image, title, subline, and actions
- Use grey-50 background for image container (for transparent images)
- Integrate existing Button component for "Discover" and "Shop now" links
- Apply responsive typography and spacing
- Ensure accessibility with semantic HTML and ARIA attributes

Task 4: Integrate Components into Home Page
- Import SimpleHeader and ProductCard components in src/app/page.tsx
- Add SimpleHeader component to the top of the page
- Add ProductCard component(s) in a demo section
- Use existing Section component for consistent spacing
- Provide sample data for demo purposes

Task 5: Validate Implementation
- Run npm run lint to check for linting errors
- Run npm run build to verify TypeScript compilation
- Test responsive behavior across breakpoints
- Verify accessibility with screen readers
- Check design token usage (no arbitrary values)
- Confirm visual fidelity against Figma designs
```

### Integration Points
```yaml
FIGMA_INTEGRATION:
  - node_ids: [6476-388774, 10560-411813]
  - extract: code, variables, images
  - validate: design tokens match globals.css

COMPONENT_INTEGRATION:
  - SimpleHeader: brand new component from Figma
  - ProductCard: brand new component from Figma
  - Button: integrate existing Button component for actions
  - Image: use existing Image component with proper optimization
  - Section: use existing Section component for layout

HOME_PAGE_INTEGRATION:
  - Add SimpleHeader component as page header
  - Add ProductCard component in demo section
  - Maintain existing Button component showcase
  - Use Section wrapper for consistent spacing
```

## Validation Loop

### Level 1: Figma Design Extraction
```bash
# Extract designs and verify accessibility
# Use MCP Figma tools to get code, variables, and images
# Expected: Design specs, tokens, and visual references
# If missing: Re-run MCP tools with correct node IDs
```

### Level 2: Syntax & Style
```bash
# Run these FIRST - fix any errors before proceeding
npm run lint                    # Next.js linting
npm run build                   # TypeScript compilation check

# Expected: No errors. If errors, READ and fix.
```

### Level 3: Component Integration
```typescript
// Verify components integrate properly
// Check imports/exports work correctly
// Confirm design tokens are applied
// Validate TypeScript interfaces
```

### Level 4: Visual Validation
```bash
# Start development server
npm run dev

# Navigate to localhost:3000
# Verify:
# - Components render correctly
# - Responsive behavior works
# - Design tokens are applied
# - No console errors
# - Accessibility attributes present
```

## Final Validation Checklist
- [ ] Figma designs extracted successfully using MCP tools
- [ ] SimpleHeader component created from Figma design (node-id: 6476-388774)
- [ ] ProductCard component created from Figma design (node-id: 10560-411813)
- [ ] Components use design tokens (no arbitrary values)
- [ ] TypeScript interfaces defined properly
- [ ] Components are responsive (mobile-first)
- [ ] Accessibility attributes included (ARIA, semantic HTML)
- [ ] Button integration works correctly
- [ ] Image optimization implemented properly
- [ ] SimpleHeader excludes navigation (as specified)
- [ ] ProductCard has grey-50 background for images (as specified)
- [ ] Home page integration complete
- [ ] All linting passes: `npm run lint`
- [ ] Build succeeds: `npm run build`
- [ ] Visual inspection confirms design fidelity
- [ ] No console errors in development

---

## Anti-Patterns to Avoid
- ❌ Don't use arbitrary Tailwind values (`bg-[#F5F5F5]`)
- ❌ Don't include navigation in SimpleHeader (it's separate)
- ❌ Don't forget ProductCard grey-50 background for images
- ❌ Don't skip responsive breakpoints (mobile-first)
- ❌ Don't ignore TypeScript interface definitions
- ❌ Don't skip accessibility attributes
- ❌ Don't hardcode colors/spacing (use design tokens)
- ❌ Don't forget to integrate Button component properly
- ❌ Don't create new utility functions when existing ones exist
- ❌ Don't skip the Section wrapper for consistent spacing
- ❌ Don't forget to use existing Image component for optimization

## Context Quality Score: 9/10
**Confidence Level**: High - This PRP provides comprehensive context, existing patterns, validation steps, and clear implementation guidance. The AI has access to all necessary documentation, design tokens, existing components, and validation tools needed for one-pass implementation success.

**Strengths**:
- Complete design system context from globals.css
- Existing component patterns to follow
- Clear validation steps with executable commands
- Figma integration workflow with correct node IDs
- Comprehensive accessibility and responsive design guidance
- Specific requirements for both components clearly documented

**Areas for Enhancement**:
- Could include more specific layout examples
- Visual regression testing could be automated