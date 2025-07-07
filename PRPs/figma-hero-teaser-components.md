name: "Figma-to-Component Implementation: Hero & Teaser Card"
description: |

## Purpose
Implement Hero and Teaser Card components from Figma designs using the existing Leica design system and MCP Figma server integration. This demonstrates the automated Figma-to-code workflow with production-ready React components.

## Core Principles
1. **Context is King**: Include ALL necessary documentation, examples, and caveats
2. **Validation Loops**: Provide executable tests/lints the AI can run and fix
3. **Information Dense**: Use keywords and patterns from the codebase
4. **Progressive Success**: Start simple, validate, then enhance
5. **Global rules**: Be sure to follow all rules in CLAUDE.md

---

## Goal
Create two new React components (Hero and Teaser Card) from Figma designs that integrate seamlessly with the existing Leica design system, follow established patterns, and demonstrate proper responsive behavior.

## Why
- **Business value**: Accelerates design-to-code workflow with automated component generation
- **Integration**: Demonstrates MCP Figma server capabilities for design system consistency
- **Problems solved**: Reduces manual conversion time while maintaining design fidelity and code quality

## What
Two new TypeScript React components:
1. **Hero Component** - Brand new component from Figma design (existing Hero renamed to HeroSimple)
2. **Teaser Card Component** - New card variant for product/content teasers
3. **Demo Integration** - Add both components to home page for preview

### Success Criteria
- [ ] Hero component matches Figma design specifications
- [ ] Teaser Card component follows established card patterns
- [ ] Both components use design tokens (no arbitrary values)
- [ ] Components are responsive and accessible
- [ ] Components integrate properly with existing home page
- [ ] All linting and type checking passes
- [ ] Build process completes successfully

## All Needed Context

### Documentation & References
```yaml
# MUST READ - Include these in your context window
- url: https://www.figma.com/design/zZqepMQoHFh3QmdB0bSBj4/IOP---UI-Design---WIP?node-id=6552-406393&m=dev
  why: Hero component design specifications, layout, and responsive behavior
  
- url: https://www.figma.com/design/zZqepMQoHFh3QmdB0bSBj4/IOP---UI-Design---WIP?node-id=10641-434719&m=dev
  why: Teaser card component design, typography, and interaction states

- file: src/components/HeroSimple.tsx
  why: Existing HeroSimple component patterns - responsive classes, TypeScript interface, variant system
  
- file: src/components/ProductCard.tsx
  why: Card component patterns - layout structure, button integration, image handling
  
- file: src/components/MediaText.tsx
  why: Complex component patterns - responsive layout, content structure, design token usage
  
- file: src/components/Button.tsx
  why: Button integration patterns - variants, states, surface themes
  
- file: src/app/globals.css
  why: Complete design token system - colors, typography, spacing, responsive breakpoints
  
- file: src/app/page.tsx
  why: Component integration patterns - layout, spacing, demo structure
  
- file: CLAUDE.md
  why: Critical project guidelines - Tailwind class restrictions, component patterns, development commands

# External Research & Best Practices
- url: https://nextjs.org/docs/app/getting-started/images
  why: Next.js 15 Image optimization - priority, sizes, responsive patterns
  
- url: https://legacy.reactjs.org/docs/accessibility.html
  why: React accessibility fundamentals and ARIA attribute implementation
  
- url: https://inclusive-components.design/cards/
  why: Accessibility best practices for card components - semantic structure, clickable areas
  
- url: https://www.builder.io/blog/convert-figma-to-react-code
  why: Figma-to-React conversion patterns, design token integration workflows
```

### Current Codebase Patterns
```typescript
// Component Structure Pattern (from existing components)
interface ComponentProps {
  // Core content
  headline?: string;
  subline?: string;
  // Variants and options
  variant?: 'simple' | 'media';
  size?: 'sm' | 'md' | 'lg' | 'auto';
  // Surface theming
  surface?: 'light' | 'dark';
  // Optional functionality
  className?: string;
}

// Responsive Class Pattern (mobile-first)
const getResponsiveClasses = () => {
  return "text-headline-1-sm md:text-headline-1-md lg:text-headline-1-lg";
};

// Design Token Usage (NO arbitrary values)
// ✅ Correct: bg-grey-50 text-foreground
// ❌ Wrong: bg-[#F5F5F5] text-[#222222]
```

### Design System Constraints
```css
/* Available Design Tokens from globals.css */
Colors: red, black, white, warm-black, grey-50 through grey-900
Typography: headline-1-sm/md/lg through headline-6-sm/md/lg, body-sm/md/lg
Spacing: spacing-1 (4px) through spacing-42 (168px)
Breakpoints: sm(375px), md(768px), lg(1440px), xl(1920px)
Aspect Ratios: 16/9, 4/3, 3/2
```

### Known Gotchas & Library Quirks
```typescript
// CRITICAL: No arbitrary Tailwind values allowed
// ❌ Don't use: bg-[var(--color-grey-50)] or color-[#232323]
// ✅ Use: bg-grey-50 text-foreground

// CRITICAL: Existing Hero component has been renamed to HeroSimple
// Hero will be a completely new component from Figma design

// CRITICAL: Image optimization patterns
// Use Next.js Image component with proper sizes and priority attributes

// CRITICAL: Button integration
// Use existing Button component with proper type/surface variants

// CRITICAL: Responsive patterns
// Always use mobile-first approach: base class, then md:, lg: prefixes
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
// - Use fill for dynamic containers with proper aspect ratios
```

#### Accessibility Best Practices for Cards & Heroes
```typescript
// ✅ Accessible card component structure
<article className="card" role="article">
  <h3 id="card-title-1" className="card-title">
    {headline}
  </h3>
  <p className="card-description" aria-describedby="card-title-1">
    {description}
  </p>
  <a href={href} aria-labelledby="card-title-1" className="card-link">
    {ctaText}
  </a>
</article>

// Key principles:
// - Use semantic HTML (article, section, h1-h6)
// - Provide aria-labelledby for relationships
// - Ensure 4.5:1 color contrast minimum
// - Make entire card clickable when appropriate
// - Use unique IDs for aria relationships
```

#### Figma Design Token Integration
```typescript
// ✅ Design token extraction workflow
// 1. Extract tokens from Figma using MCP server
// 2. Map to existing CSS custom properties
// 3. Validate against globals.css token system
// 4. Generate component with token-based classes

// Example token mapping:
const tokenMapping = {
  'figma-spacing-32': 'spacing-8',    // 32px -> CSS var
  'figma-text-lg': 'text-headline-6-lg',
  'figma-color-primary': 'bg-red'
};
```

## Implementation Blueprint

### Component Analysis from Figma
```typescript
// Hero Component (node-id: 6552-406393)
// Brand new component - existing Hero renamed to HeroSimple
interface HeroProps {
  headline: string;
  subline?: string;
  variant?: 'default' | 'featured' | 'media'; // Figma-based variants
  imageSrc?: string;
  imageAlt?: string;
  backgroundVariant?: 'light' | 'dark' | 'gradient';
  ctaButton?: {
    label: string;
    href?: string;
    type?: 'primary' | 'secondary' | 'cta';
  };
  size?: 'sm' | 'md' | 'lg' | 'auto';
  className?: string;
}

// Teaser Card Component (node-id: 10641-434719)
// Expected props based on card patterns:
interface TeaserCardProps {
  headline: string;
  subline?: string;
  imageSrc?: string;
  imageAlt?: string;
  category?: string;
  ctaText?: string;
  ctaHref?: string;
  variant?: 'default' | 'featured' | 'minimal';
  surface?: 'light' | 'dark';
  className?: string;
}
```

### List of tasks to be completed

```yaml
Task 1: Extract Figma Design Specifications
USE mcp__figma-dev-mode-mcp-server__get_code:
  - Extract Hero component code from node-id: 6552-406393
  - Extract Teaser Card component code from node-id: 10641-434719
  - Get design tokens and variable definitions
  - Capture visual references with get_image

Task 2: Create New Hero Component
CREATE src/components/Hero.tsx:
  - Brand new component from Figma design
  - Follow patterns from HeroSimple.tsx for structure
  - Use design tokens from globals.css
  - Implement Figma-specific variants and features

Task 3: Create Teaser Card Component
CREATE src/components/TeaserCard.tsx:
  - PATTERN: Follow ProductCard.tsx structure
  - Use design tokens from globals.css
  - Implement responsive layout patterns
  - Add proper TypeScript interfaces

Task 4: Update Home Page Demo
EDIT src/app/page.tsx:
  - Add Hero component showcase (if enhanced)
  - Add TeaserCard component section
  - Follow existing demo patterns
  - Maintain proper spacing and layout

Task 5: Run Quality Checks
RUN validation commands:
  - npm run lint (fix any style issues)
  - npm run build (ensure TypeScript passes)
  - Visual inspection of components

Task 6: Iterate and Refine
REVIEW and adjust:
  - Component responsiveness
  - Design token usage
  - Accessibility attributes
  - Performance optimization
```

### Per task pseudocode

```typescript
// Task 1: Figma Analysis
// Use MCP tools to extract design specifications
const heroDesign = await mcp__figma-dev-mode-mcp-server__get_code({
  nodeId: "6552:406393",
  clientName: "claude code",
  clientLanguages: "typescript,javascript",
  clientFrameworks: "react,nextjs"
});

// Task 2: Hero Component Creation
// PATTERN: Create new component from Figma design
const Hero = ({ headline, subline, variant = 'default', backgroundVariant, ctaButton }) => {
  const containerClasses = getHeroClasses(variant, backgroundVariant);
  
  return (
    <section className={containerClasses}>
      {/* Content based on Figma design */}
      <div className="hero-content">
        <h1 className="text-headline-1-sm md:text-headline-1-md lg:text-headline-1-lg">
          {headline}
        </h1>
        {subline && (
          <p className="text-body-lg mt-4">{subline}</p>
        )}
        {ctaButton && (
          <div className="mt-6">
            <Button {...ctaButton} />
          </div>
        )}
      </div>
    </section>
  );
};

// Task 3: Teaser Card Implementation
// PATTERN: Follow ProductCard structure
const TeaserCard = ({ headline, subline, imageSrc, ctaText, variant = 'default' }) => {
  const cardClasses = getCardClasses(variant);
  const imageClasses = getImageClasses(variant);
  
  return (
    <div className={`${cardClasses} bg-grey-50 flex flex-col`}>
      {/* Image Section */}
      {imageSrc && (
        <div className={imageClasses}>
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </div>
      )}
      
      {/* Content Section */}
      <div className="p-6 flex-1">
        <h3 className="text-headline-6-sm md:text-headline-6-md lg:text-headline-6-lg">
          {headline}
        </h3>
        {subline && (
          <p className="text-body-md text-grey-600 mt-2">{subline}</p>
        )}
        
        {/* CTA */}
        {ctaText && (
          <div className="mt-4">
            <Button type="cta" label={ctaText} href={ctaHref} chevron />
          </div>
        )}
      </div>
    </div>
  );
};
```

### Integration Points
```yaml
FIGMA_INTEGRATION:
  - node_ids: ["6552:406393", "10641:434719"]
  - extract: code, variables, images
  - validate: design tokens match globals.css

COMPONENT_INTEGRATION:
  - Hero: brand new component from Figma (HeroSimple exists separately)
  - TeaserCard: new component following ProductCard patterns
  - Button: integrate existing Button component
  - Image: use Next.js Image with proper optimization

HOME_PAGE_INTEGRATION:
  - section: Hero component showcase
  - section: TeaserCard component grid
  - spacing: follow existing divider patterns
  - responsive: maintain mobile-first approach
```

## Validation Loop

### Level 1: Figma Design Extraction
```bash
# Extract designs and verify accessibility
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
// Test component imports and usage
import Hero from '@/components/Hero';
import TeaserCard from '@/components/TeaserCard';

// Verify props work correctly
<Hero variant="enhanced" headline="Test" />
<TeaserCard headline="Test" ctaText="Learn More" />
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
```

## Final Validation Checklist
- [ ] Figma designs extracted successfully
- [ ] Hero component created from Figma design
- [ ] TeaserCard component created
- [ ] Components use design tokens (no arbitrary values)
- [ ] TypeScript interfaces defined properly
- [ ] Components are responsive (mobile-first)
- [ ] Accessibility attributes included
- [ ] Button integration works correctly
- [ ] Home page integration complete
- [ ] All linting passes: `npm run lint`
- [ ] Build succeeds: `npm run build`
- [ ] Visual inspection confirms design fidelity

---

## Anti-Patterns to Avoid
- ❌ Don't use arbitrary Tailwind values (`bg-[#F5F5F5]`)
- ❌ Don't conflict with existing HeroSimple component
- ❌ Don't forget responsive breakpoints (mobile-first)
- ❌ Don't skip TypeScript interface definitions
- ❌ Don't ignore accessibility attributes
- ❌ Don't hardcode colors/spacing (use design tokens)
- ❌ Don't forget to integrate Button component properly

## Confidence Score: 8/10

High confidence due to:
- Clear Figma node IDs provided
- Established component patterns in codebase
- Comprehensive design token system
- Existing similar components for reference
- MCP Figma server integration available

Minor uncertainty on:
- Exact Figma design specifications until extracted
- Whether Hero component needs enhancement vs replacement
- Specific responsive behavior requirements from designs