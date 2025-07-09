# Figma-to-Component Implementation: Project Requirements Prompt Template

This template serves as a base and structure to generate a full PRP prompt fot the AI tools using the INITIAL.md as a source

## Purpose
Implement components from Figma designs using the existing Leica design system and MCP Figma server integration. This demonstrates the automated Figma-to-code workflow with production-ready React components.

## Core Principles
1. **Context is King**: Include ALL necessary documentation, examples, and caveats
2. **Validation Loops**: Provide executable tests/lints the AI can run and fix
3. **Information Dense**: Use keywords and patterns from the codebase
4. **Progressive Success**: Start simple, validate, then enhance
5. **Global rules**: Be sure to follow all rules in CLAUDE.md

---

## Goal
Create React components from Figma designs that integrate seamlessly with the existing Leica design system, follow established patterns, and demonstrate proper responsive behavior.

## Why
- **Business value**: Accelerates design-to-code workflow with automated component generation
- **Integration**: Demonstrates MCP Figma server capabilities for design system consistency
- **Problems solved**: Reduces manual conversion time while maintaining design fidelity and code quality

## What
TypeScript React components that will be specified in the implementation requirements.

### Success Criteria
- [ ] Components matches Figma design specifications
- [ ] Components follows established design patterns
- [ ] Components use design tokens (no arbitrary values)
- [ ] Components are responsive and accessible
- [ ] Components integrate properly with existing home page
- [ ] All linting and type checking passes
- [ ] Build process completes successfully

## All Needed Context

### Documentation & References
```yaml
# MUST READ - Include these in your context window
- url: [FIGMA LINK TO COMPONENT]
  why: Description/specification of the component

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
// Component Structure Pattern (from existing Button component)
interface ComponentProps {
  // Core content
  label?: string;
  href?: string;
  // Variants and options
  type?: 'primary' | 'secondary' | 'cta';
  disabled?: boolean;
  // Icon support
  chevron?: boolean;
  dot?: boolean;
  leftIcon?: React.ReactNode;
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
// ✅ Correct: bg-grey-50 text-foreground px-8 py-3
// ❌ Wrong: bg-[#F5F5F5] text-[#222222] px-[32px] py-[12px]
```

### Design System Constraints
```css
/* Available Design Tokens from globals.css */
Colors: red, black, white, warm-black, grey-50 through grey-900, alert colors (info, success, error, warning, neutral)
Typography: headline-1-sm/md/lg through headline-6-sm/md/lg, body-sm/md/lg, font-outfit, font-lg1052
Spacing: spacing-1 (4px) through spacing-42 (168px)
Breakpoints: sm(375px), md(768px), lg(1440px), xl(1920px)
Aspect Ratios: 16/9, 4/3, 3/2
Semantic Colors: background, foreground, muted, border
```

### Known Gotchas & Library Quirks
```typescript
// CRITICAL: No arbitrary Tailwind values allowed
// ❌ Don't use: bg-[var(--color-grey-50)] or color-[#232323]
// ✅ Use: bg-grey-50 text-foreground

// CRITICAL: Follow existing component patterns from the codebase
// New components should integrate with existing design system

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
// - Follow existing Image component patterns in the codebase
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
[TBD]
```

### List of tasks to be completed

```yaml
Task 1: Extract Figma Design Specifications
USE mcp__figma-dev-mode-mcp-server__get_code:
  - Extract component specifications from provided Figma URLs
  - Get design tokens and variable definitions
  - Capture visual references with get_image

Task 2: Component Implementation
  - Create React components following existing patterns
  - Implement TypeScript interfaces
  - Apply design tokens properly
  - Ensure responsive behavior

Task 3: Integration and Testing
  - Add components to showcase page
  - Run linting and build validation
  - Verify accessibility compliance
```

### Per task pseudocode


### Integration Points
```yaml
FIGMA_INTEGRATION:
  - node_ids: []
  - extract: code, variables, images
  - validate: design tokens match globals.css

COMPONENT_INTEGRATION:
  - New components: brand new components from Figma
  - Button: integrate existing Button component
  - Image: use Next.js Image with proper optimization

SHOWCASE_PAGE_INTEGRATION:
  - Add new components to src/app/page.tsx
  - Demonstrate component variants and usage
  - Maintain proper spacing and layout

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
- [ ] Components created from Figma designs
- [ ] Components use design tokens (no arbitrary values)
- [ ] TypeScript interfaces defined properly
- [ ] Components are responsive (mobile-first)
- [ ] Accessibility attributes included
- [ ] Existing component integration works correctly
- [ ] Showcase page integration complete
- [ ] All linting passes: `npm run lint`
- [ ] Build succeeds: `npm run build`
- [ ] Visual inspection confirms design fidelity

---

## Anti-Patterns to Avoid
- ❌ Don't use arbitrary Tailwind values (`bg-[#F5F5F5]`)
- ❌ Don't conflict with existing components
- ❌ Don't forget responsive breakpoints (mobile-first)
- ❌ Don't skip TypeScript interface definitions
- ❌ Don't ignore accessibility attributes
- ❌ Don't hardcode colors/spacing (use design tokens)
- ❌ Don't forget to integrate Button component properly
