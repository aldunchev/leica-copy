# Leica Design System

A comprehensive Next.js 15 project implementing the Leica design system with a complete UI component library, design tokens, and responsive components for camera product interfaces.

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the component showcase.

## 📦 Available Commands

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

## 🎨 Design System Overview

### Design Tokens
- **Colors**: Primary colors (red, black, warm black), comprehensive greyscale (50-900), alert colors, product-specific colors
- **Typography**: Outfit font family with responsive headline sizes (1-6), body text (sm/md/lg), label sizes
- **Spacing**: Consistent spacing scale from 4px to 168px using CSS custom properties
- **Grid**: Responsive grid system (4 cols mobile, 8 tablet, 12 desktop)
- **Breakpoints**: 375px (sm), 768px (md), 1440px (lg), 1920px (xl)

### Components

#### Core Components
- **Hero**: Flexible hero component with `simple` and `media` variants, responsive sizing, and optional back navigation
- **Button**: Multi-variant button component (primary, secondary, CTA) with dot and chevron icons, surface variants for light/dark themes
- **MediaText**: Responsive media-text component with flexible text-left/text-right layouts and image credits overlay
- **ProductCard**: Product showcase component for camera products
- **ImageCredits**: Reusable image credits overlay with configurable positioning
- **Footer**: Site footer component

#### Design Tokens Page
Visit `/tokens` to explore the complete design system documentation including colors, typography, spacing, and component examples.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css          # Design tokens and global styles
│   ├── page.tsx             # Component showcase/demo page
│   └── tokens/
│       └── page.tsx         # Design system documentation
├── components/              # Reusable UI components
│   ├── Button.tsx
│   ├── Hero.tsx
│   ├── MediaText.tsx
│   ├── ImageCredits.tsx
│   ├── ProductCard.tsx
│   └── Footer.tsx
└── svg/                     # SVG assets
```

## 🛠️ Technical Stack

- **Next.js 15** with App Router
- **React 19** with TypeScript
- **Tailwind CSS v4** with custom design tokens
- **SVGR** for SVG component imports
- **ESLint** for code linting

## 🎯 Component Patterns

### Responsive Design
- Mobile-first approach with consistent breakpoints
- Flexible grid system adapting to screen sizes
- Typography scaling across devices

### Design System Integration
- All components use CSS custom properties for consistency
- Semantic color system with light/dark theme support
- Component variants implemented through prop-based conditional styling

### Accessibility
- ARIA attributes and semantic HTML
- Keyboard navigation support
- Screen reader compatibility

## 🎨 Component Usage Examples

### Hero Component
```tsx
<Hero
  headline="Section Topic"
  subline="Lorem ipsum dolor sit amet, consectetur elit"
  variant="simple"
  showBackLink={true}
  backLinkText="Go back link"
/>
```

### MediaText Component
```tsx
<MediaText
  headline="The quick, brown fox"
  subheadline="Lorem ipsum dolor sit amet, consectetuer elit"
  body="Your body text here..."
  buttonText="Call to Action"
  imageSrc="/Camera.png"
  imageCredits="Photo: Name Surname"
  layout="text-left"
/>
```

### Button Component
```tsx
<Button
  type="primary"
  label="Primary Button"
  dot={true}
  href="/example"
  surface="light"
/>
```

## 🔧 Development Notes

- All components use TypeScript with proper interface definitions
- Responsive design patterns follow mobile-first approach
- Color and spacing values use CSS custom properties for consistency
- Image optimization handled through Next.js Image component
- Component variants are implemented through prop-based conditional styling

## 📄 License

This project is part of the Leica design system implementation.
