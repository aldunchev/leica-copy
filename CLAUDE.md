# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 project for the Leica design system, implementing a comprehensive UI component library with design tokens from Figma. The project demonstrates camera product interfaces using Leica branding and design patterns.

## Development Commands

```bash
# Development server (uses Turbopack)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint the codebase
npm run lint
```

## Architecture

### Design System Structure
- **Design tokens**: Comprehensive color, typography, spacing, and grid system defined in `src/app/globals.css`
- **Component library**: Reusable UI components in `src/components/`
- **Token showcase**: Design system documentation at `/tokens` route

### Key Components
- **Hero**: Flexible hero component with `simple` and `media` variants, responsive sizing, and optional back navigation
- **Button**: Multi-variant button component (primary, secondary, CTA) with dot and chevron icons, surface variants for light/dark themes
- **ProductCard**: Product showcase component for camera products
- **Footer**: Site footer component
- **Image**: Custom image wrapper component

### Component Patterns
- TypeScript interfaces for all component props
- Responsive design using mobile-first approach
- Semantic color system with CSS custom properties
- Conditional styling based on variant props
- Accessibility considerations (ARIA attributes, keyboard navigation)

### Design System Details
- **Colors**: Primary colors (red, black, warm black), comprehensive greyscale (50-900), alert colors, product-specific colors
- **Typography**: Outfit font family, responsive headline sizes (1-6), body text (sm/md/lg), label sizes
- **Spacing**: Consistent spacing scale from 4px to 168px using CSS custom properties
- **Grid**: Responsive grid system (4 cols mobile, 8 tablet, 12 desktop)
- **Breakpoints**: 375px (sm), 768px (md), 1440px (lg), 1920px (xl)

### File Structure
```
src/
  app/
    globals.css     # Design tokens and global styles
    page.tsx        # Component showcase/demo page
    tokens/
      page.tsx      # Design system documentation
  components/       # Reusable UI components
  svg/             # SVG assets
```

## Technical Stack
- **Next.js 15** with App Router
- **React 19** with TypeScript
- **Tailwind CSS v4** with custom design tokens
- **SVGR** for SVG component imports
- **ESLint** for code linting

## Development Notes
- All components use TypeScript with proper interface definitions
- Responsive design patterns follow mobile-first approach
- Color and spacing values use CSS custom properties for consistency
- Component variants are implemented through prop-based conditional styling
- Image optimization handled through Next.js Image component

## Tailwind classes usage:
- When using Tailwind CSS do not use arbitrary class names like "color-[#232323]".
- Consider bg-[var(--color-grey-50)] as arbitrary values and do not use it. The proper one should be: bg-grey-50 generated from the `@theme` directive.
- Use only the class names generated from Tailwind based on the CSS variables in the @global.css file
