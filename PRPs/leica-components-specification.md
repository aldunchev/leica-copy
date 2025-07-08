# Leica Components Implementation: Project Requirements Prompt

## Purpose
Implement four React components (Heading, IconButton, HeaderModule, Credits) from Figma designs using the existing Leica design system and MCP Figma server integration. This demonstrates the automated Figma-to-code workflow with production-ready React components.

## Core Principles
1. **Context is King**: Include ALL necessary documentation, examples, and caveats
2. **Validation Loops**: Provide executable tests/lints the AI can run and fix
3. **Information Dense**: Use keywords and patterns from the codebase
4. **Progressive Success**: Start simple, validate, then enhance
5. **Global rules**: Be sure to follow all rules in CLAUDE.md

---

## Goal
Create 4 new React components (Heading, IconButton, HeaderModule, Credits) from Figma designs that integrate seamlessly with the existing Leica design system, follow established patterns, and demonstrate proper responsive behavior with automated workflow validation.

## Why
- **Business value**: Accelerates design-to-code workflow with automated component generation
- **Integration**: Demonstrates MCP Figma server capabilities for design system consistency
- **Problems solved**: Reduces manual conversion time while maintaining design fidelity and code quality

## What
TypeScript React components:
1. **Heading** - Semantic heading component with levels h1-h6
2. **IconButton** - Reusable icon button with SVG integration
3. **HeaderModule** - Composite component using Heading and IconButton with variants
4. **Credits** - Responsive credit attribution component for images with mobile/desktop behavior

### Success Criteria
- [ ] Components match Figma design specifications
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
- url: https://www.figma.com/design/zZqepMQoHFh3QmdB0bSBj4/IOP---UI-Design---WIP?node-id=5185-131721&m=dev
  why: Heading component specification and design tokens

- url: https://www.figma.com/design/zZqepMQoHFh3QmdB0bSBj4/IOP---UI-Design---WIP?node-id=8375-85504&t=g6EQD2FfEYtZRlPC-4
  why: IconButton component specification with SVG patterns

- url: https://www.figma.com/design/zZqepMQoHFh3QmdB0bSBj4/IOP---UI-Design---WIP?node-id=7893-56737&t=g6EQD2FfEYtZRlPC-4
  why: HeaderModule component specification with variants (headline, headline-left, basic)

- url: https://www.figma.com/design/zZqepMQoHFh3QmdB0bSBj4/IOP---UI-Design---WIP?node-id=19673-595335&t=qbcLrwrkmmYWftL0-4
  why: Credits component specification with responsive behavior (icon + text, mobile shows icon only, tap to reveal text)

- file: src/components/Button.tsx
  why: Button integration patterns - variants, states, surface themes

- file: src/app/globals.css
  why: Complete design token system - colors, typography, spacing, responsive breakpoints

- file: src/app/page.tsx
  why: Component integration patterns - layout, spacing, demo structure

- file: CLAUDE.md
  why: Critical project guidelines - Tailwind class restrictions, component patterns, development commands

# External Research & Best Practices
- url: https://www.figma.com/blog/introducing-figmas-dev-mode-mcp-server/
  why: Figma MCP server patterns for design token extraction and component generation

- url: https://nextjs.org/docs/app/api-reference/components/image
  why: Next.js 15 Image optimization - priority, sizes, responsive patterns

- url: https://react.dev/blog/2024/12/05/react-19
  why: React 19 accessibility fundamentals and form actions for buttons

- url: https://tailwindcss.com/blog/tailwindcss-v4
  why: Tailwind v4 design token integration with @theme directive

- url: https://www.w3.org/TR/WCAG22/
  why: WCAG 2.2 accessibility standards for headings and interactive elements
```

### Current Codebase Patterns
```typescript
// Component Structure Pattern (from existing Button component)
interface ComponentProps {
  // Core content
  label: string;
  // Variants and options
  type?: 'primary' | 'secondary' | 'cta';
  surface?: 'light' | 'dark';
  // Optional functionality
  href?: string;
  disabled?: boolean;
  className?: string;
}

// Export pattern
export default function ComponentName({ 
  prop1, 
  prop2 = 'default', 
  ...props 
}: ComponentProps) {
  // Implementation
}

// Responsive Class Pattern (mobile-first)
const getResponsiveClasses = () => {
  return "text-headline-1-sm md:text-headline-1-md lg:text-headline-1-lg";
};

// Design Token Usage (NO arbitrary values)
// ✅ Correct: bg-grey-50 text-foreground text-headline-2-lg
// ❌ Wrong: bg-[#F5F5F5] text-[#222222] bg-[var(--color-grey-50)]
```

### Design System Constraints
```css
/* Available Design Tokens from globals.css */
Colors: red, black, white, warm-black, grey-50 through grey-900
Typography: headline-1-sm/md/lg through headline-6-sm/md/lg, body-sm/md/lg
Spacing: spacing-1 (4px) through spacing-42 (168px)
Breakpoints: sm(375px), md(768px), lg(1440px), xl(1920px)
Grid: 4 cols mobile, 8 tablet, 12 desktop
Font: Outfit (primary), weights 300-700
```

### Known Gotchas & Library Quirks
```typescript
// CRITICAL: No arbitrary Tailwind values allowed
// ❌ Don't use: bg-[var(--color-grey-50)] or color-[#232323]
// ✅ Use: bg-grey-50 text-foreground

// CRITICAL: Global heading styles exist in globals.css
// Current: h1, h2, h3, h4, h5, h6 have @apply rules
// Your Heading component will override these patterns

// CRITICAL: Icon integration patterns
// Existing Button uses conditional icon rendering
// SVG icons should be created as separate components and imported

// CRITICAL: Responsive patterns
// Always use mobile-first approach: base class, then md:, lg: prefixes
// Typography scales automatically with headline-X-sm/md/lg pattern

// CRITICAL: MCP Figma server integration
// Use get_code, get_variable_defs, get_image for design extraction
// Validate extracted tokens against globals.css system
```

### Research-Based Implementation Guidelines

#### Figma MCP Server Integration (2024 Best Practices)
```typescript
// ✅ Optimal MCP server workflow
// 1. Extract design specifications
const designSpecs = await get_code(nodeId);
const tokens = await get_variable_defs(nodeId);
const visual = await get_image(nodeId);

// 2. Map tokens to existing design system
const tokenMapping = {
  'figma-spacing-32': 'spacing-8',
  'figma-text-lg': 'text-headline-6-lg',
  'figma-color-primary': 'bg-red'
};

// 3. Generate component with proper TypeScript interfaces
// Key principles:
// - Extract exact design tokens from Figma
// - Map to existing CSS custom properties
// - Validate against globals.css token system
// - Generate responsive component variants
```

#### Next.js 15 Image Optimization
```typescript
// ✅ Optimal Next.js Image usage for HeaderModule
import Image from 'next/image';

<Image
  src="/hero-image.jpg"
  alt="Leica camera showcase"
  priority={true}  // For above-the-fold HeaderModule
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
  width={1200}
  height={800}
  className="object-cover"
/>
```

#### Accessibility Best Practices for Components
```typescript
// ✅ Accessible Heading component (WCAG 2.2)
interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

export default function Heading({ level, children, className }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const responsiveClass = `text-headline-${level}-sm md:text-headline-${level}-md lg:text-headline-${level}-lg`;
  
  return (
    <Tag className={`${responsiveClass} ${className}`}>
      {children}
    </Tag>
  );
}

// ✅ Accessible IconButton component
interface IconButtonProps {
  icon: React.ReactNode;
  label: string;  // Required for accessibility
  onClick?: () => void;
  disabled?: boolean;
  surface?: 'light' | 'dark';
}

export default function IconButton({ icon, label, onClick, disabled, surface }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={`icon-button ${surface === 'dark' ? 'bg-warm-black' : 'bg-white'}`}
    >
      <span aria-hidden="true">{icon}</span>
    </button>
  );
}
```

## Implementation Blueprint

### Component Analysis from Figma
```typescript
// Based on Figma URLs provided:

// 1. Heading Component (node-id: 5185-131721)
// - Semantic HTML heading levels (h1-h6)
// - Responsive typography scaling
// - Design token integration for font sizes
// - Existing global styles need to be replaced/enhanced

// 2. IconButton Component (node-id: 8375-85504)
// - Reusable SVG icon integration
// - Button accessibility with proper ARIA labels
// - Surface variants for light/dark themes
// - Click handling and disabled states

// 3. HeaderModule Component (node-id: 7893-56737)
// - Composite component using Heading and IconButton
// - Three variants: headline (centered), headline-left, basic
// - Structure: Title (Heading) + Subline + Text + CTA (Button)
// - Responsive layout with proper spacing

// 4. Credits Component (node-id: 19673-595335)
// - Icon + text layout for image attribution
// - Mobile: Shows only icon, tap to reveal text
// - Desktop: Shows icon + text always visible
// - Designed for integration with Image component
// - Responsive behavior with touch interactions
```

### List of tasks to be completed

```yaml
Task 1: Extract Figma Design Specifications
- Use mcp__figma-dev-mode-mcp-server__get_code for all four components
- Use mcp__figma-dev-mode-mcp-server__get_variable_defs for design tokens
- Use mcp__figma-dev-mode-mcp-server__get_image for visual references
- Validate extracted tokens against globals.css system

Task 2: Create Heading Component
- Implement TypeScript interface with level prop (1-6)
- Create semantic HTML component with proper heading tags
- Apply responsive typography using design tokens
- Replace/enhance global heading styles
- Add accessibility attributes and proper semantics

Task 3: Create IconButton Component
- Design reusable SVG icon integration pattern
- Implement button with proper accessibility (ARIA labels)
- Add surface variants for light/dark themes
- Handle click events and disabled states
- Create sample SVG icon component for testing

Task 4: Create HeaderModule Component
- Implement composite component using Heading and existing Button
- Create three variants: headline, headline-left, basic
- Structure: Title + Subline + Text + CTA button
- Add responsive layout with proper spacing
- Use design tokens for consistent styling

Task 5: Create Credits Component
- Implement responsive credit attribution component
- Add mobile behavior: icon-only with tap to reveal text
- Add desktop behavior: icon + text always visible
- Include proper accessibility for touch interactions
- Design for integration with Image component

Task 6: Integration and Testing
- Add all components to src/components/ directory
- Update home page (src/app/page.tsx) with component examples
- Create proper import/export patterns
- Test responsive behavior across breakpoints
- Validate accessibility with screen readers

Task 7: Validation and Quality Assurance
- Run npm run lint and fix any issues
- Run npm run build and fix TypeScript errors
- Test components in browser at localhost:3000
- Verify design token usage (no arbitrary values)
- Check WCAG 2.2 compliance for all components
```

### Per Task Pseudocode

#### Task 1: Figma Design Extraction
```typescript
// Extract specifications for each component
const headingSpecs = await get_code('5185-131721');
const iconButtonSpecs = await get_code('8375-85504');
const headerModuleSpecs = await get_code('7893-56737');
const creditsSpecs = await get_code('19673-595335');

// Extract design tokens
const tokens = await get_variable_defs();

// Get visual references
const headingImage = await get_image('5185-131721');
const iconButtonImage = await get_image('8375-85504');
const headerModuleImage = await get_image('7893-56737');
const creditsImage = await get_image('19673-595335');

// Validate against existing design system
validateTokens(tokens, globalsCSS);
```

#### Task 2: Heading Component Implementation
```typescript
// src/components/Heading.tsx
interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

export default function Heading({ level, children, className }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const sizeClasses = `text-headline-${level}-sm md:text-headline-${level}-md lg:text-headline-${level}-lg`;
  
  return (
    <Tag className={`font-medium ${sizeClasses} ${className || ''}`}>
      {children}
    </Tag>
  );
}
```

#### Task 3: IconButton Component Implementation
```typescript
// src/components/IconButton.tsx
interface IconButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  surface?: 'light' | 'dark';
  className?: string;
}

export default function IconButton({ icon, label, onClick, disabled, surface = 'light', className }: IconButtonProps) {
  const surfaceClasses = surface === 'dark' 
    ? 'bg-warm-black text-white' 
    : 'bg-white text-black';
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={`p-spacing-3 rounded-full ${surfaceClasses} hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-red ${className || ''}`}
    >
      <span aria-hidden="true">{icon}</span>
    </button>
  );
}
```

#### Task 4: HeaderModule Component Implementation
```typescript
// src/components/HeaderModule.tsx
interface HeaderModuleProps {
  title: string;
  titleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  subline?: string;
  text?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: 'headline' | 'headline-left' | 'basic';
  surface?: 'light' | 'dark';
}

export default function HeaderModule({ 
  title, 
  titleLevel = 2, 
  subline, 
  text, 
  ctaLabel, 
  ctaHref, 
  variant = 'basic',
  surface = 'light' 
}: HeaderModuleProps) {
  const alignmentClasses = {
    'headline': 'text-center',
    'headline-left': 'text-left',
    'basic': 'text-left'
  };
  
  const layoutClasses = {
    'headline': 'flex flex-col items-center',
    'headline-left': 'flex flex-col md:flex-row md:items-center md:justify-between',
    'basic': 'flex flex-col space-y-spacing-4'
  };
  
  return (
    <div className={`${layoutClasses[variant]} ${alignmentClasses[variant]}`}>
      <div className="space-y-spacing-3">
        <Heading level={titleLevel} className={alignmentClasses[variant]}>
          {title}
        </Heading>
        {subline && (
          <p className={`text-body-md text-grey-600 ${alignmentClasses[variant]}`}>
            {subline}
          </p>
        )}
        {text && (
          <p className={`text-body-sm text-grey-500 ${alignmentClasses[variant]}`}>
            {text}
          </p>
        )}
      </div>
      {ctaLabel && (
        <Button
          type="secondary"
          label={ctaLabel}
          href={ctaHref}
          surface={surface}
          className={variant === 'headline-left' ? 'md:ml-spacing-6' : ''}
        />
      )}
    </div>
  );
}
```

#### Task 5: Credits Component Implementation
```typescript
// src/components/Credits.tsx
interface CreditsProps {
  icon: React.ReactNode;
  text: string;
  author?: string;
  className?: string;
}

export default function Credits({ icon, text, author, className }: CreditsProps) {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleToggle = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div className={`credits-container ${className || ''}`}>
      {/* Mobile: Icon only with tap to reveal */}
      <div className="md:hidden">
        <button
          onClick={handleToggle}
          aria-label={`${isTextVisible ? 'Hide' : 'Show'} credits: ${text}`}
          className="flex items-center p-spacing-2 bg-black bg-opacity-50 text-white rounded"
        >
          <span className="mr-spacing-2">{icon}</span>
          {isTextVisible && (
            <span className="text-body-sm">
              {text} {author && `by ${author}`}
            </span>
          )}
        </button>
      </div>
      
      {/* Desktop: Always visible */}
      <div className="hidden md:flex items-center p-spacing-2 bg-black bg-opacity-50 text-white rounded">
        <span className="mr-spacing-2">{icon}</span>
        <span className="text-body-sm">
          {text} {author && `by ${author}`}
        </span>
      </div>
    </div>
  );
}
```

### Integration Points
```yaml
FIGMA_INTEGRATION:
  - node_ids: [5185-131721, 8375-85504, 7893-56737, 19673-595335]
  - extract: code, variables, images
  - validate: design tokens match globals.css

COMPONENT_INTEGRATION:
  - Heading: brand new semantic component
  - IconButton: new reusable button with SVG integration
  - HeaderModule: composite component using Heading and existing Button
  - Credits: responsive component with mobile/desktop behavior for image attribution
  - Button: integrate existing Button component from src/components/Button.tsx
  - Image: Credits component designed for integration with existing Image component

HOME_PAGE_INTEGRATION:
  - Add component examples to src/app/page.tsx
  - Create Section wrappers for proper spacing
  - Demonstrate all variants and responsive behavior
  - Show accessibility features and interactions
```

## Validation Loop

### Level 1: Figma Design Extraction
```bash
# Extract designs and verify accessibility
# Use MCP tools to get code, variables, and images
# Expected: Design specs, tokens, and visual references
# If missing: Re-run MCP tools with correct node IDs
```

### Level 2: Syntax & Style
```bash
# Run these FIRST - fix any errors before proceeding
npm run lint                    # Next.js linting
npm run build                   # TypeScript compilation check

# Expected: No errors. If errors, READ the error messages and fix.
# Common issues: Missing imports, incorrect TypeScript types, unused variables
```

### Level 3: Component Integration
```typescript
// Verify component exports and imports
// Check: src/components/Heading.tsx exports default function
// Check: src/components/IconButton.tsx exports default function  
// Check: src/components/HeaderModule.tsx exports default function
// Check: src/components/Credits.tsx exports default function
// Check: Components are properly imported in src/app/page.tsx
```

### Level 4: Visual Validation
```bash
# Start development server
npm run dev

# Navigate to localhost:3000
# Verify:
# - Components render correctly
# - Responsive behavior works (test mobile, tablet, desktop)
# - Design tokens are applied (no arbitrary values)
# - No console errors
# - Accessibility: tab navigation, screen reader support
```

## Final Validation Checklist
- [ ] Figma designs extracted successfully with MCP tools
- [ ] Heading component created with proper semantic HTML
- [ ] IconButton component created with accessibility features
- [ ] HeaderModule component created with all variants
- [ ] Credits component created with responsive mobile/desktop behavior
- [ ] Components use design tokens (no arbitrary values)
- [ ] TypeScript interfaces defined properly
- [ ] Components are responsive (mobile-first)
- [ ] Accessibility attributes included (ARIA labels, semantic HTML)
- [ ] Button integration works correctly
- [ ] Credits component integrates properly with Image component
- [ ] Home page integration complete with examples
- [ ] All linting passes: `npm run lint`
- [ ] Build succeeds: `npm run build`
- [ ] Visual inspection confirms design fidelity

---

## Anti-Patterns to Avoid
- ❌ Don't use arbitrary Tailwind values (`bg-[#F5F5F5]`, `text-[20px]`)
- ❌ Don't skip semantic HTML (use proper heading tags, not div with heading styles)
- ❌ Don't forget responsive breakpoints (mobile-first with md:, lg: prefixes)
- ❌ Don't skip TypeScript interface definitions
- ❌ Don't ignore accessibility attributes (aria-label, semantic elements)
- ❌ Don't hardcode colors/spacing (use design tokens from globals.css)
- ❌ Don't forget to integrate existing Button component in HeaderModule
- ❌ Don't create arbitrary component hierarchies (follow existing patterns)
- ❌ Don't skip MCP Figma server integration (use get_code, get_variable_defs, get_image)
- ❌ Don't forget to add components to home page for demonstration

## Expected Implementation Success Rate
This PRP provides comprehensive context, validation steps, and implementation guidance. With proper MCP Figma server integration and following the established patterns, this should achieve a **9/10 success rate** for one-pass implementation.

**Success Factors:**
- Complete codebase analysis and patterns
- Comprehensive external research and best practices
- Step-by-step implementation blueprint
- Multiple validation checkpoints
- Clear anti-patterns to avoid
- Existing component integration examples

**Potential Challenges:**
- MCP server integration complexity (beta status)
- Design token mapping between Figma and existing system
- Component variant implementation complexity