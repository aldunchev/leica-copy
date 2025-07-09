## FEATURE:

**Automated Figma-to-Component Generation Workflow**

Implement an automated process that takes Figma design URLs and generates production-ready React components using the Figma MCP server integration. The system should:

1. **Input Processing**: Accept Figma component URLs with basic metadata (component name, description, variant requirements, images, etc.)
2. **Design Analysis**: Automatically extract design specifications, tokens, and layout information from Figma
3. **Component Generation**: Create TypeScript React components that integrate seamlessly with the existing Leica design system
4. **Iterative Workflow**: Process components step-by-step, allowing for review and refinement at each stage
5. **Quality Assurance**: Ensure generated components follow established patterns, use design tokens properly, and maintain accessibility standards

**Target Outcome**: Transform Figma designs into implementation-ready components with minimal manual intervention while maintaining design system consistency and code quality.

## Components:

1. **Component 1**

- Figma link:
- **IMPORTANT**: []
- Props: []

2. **Component 2**

- Figma link: []
- **IMPORTANT**: []

## EXAMPLES:

### Current Implementation Examples

- **Button Component**: Multi-variant component with primary, secondary, and CTA types
  - Surface variants for light/dark themes
  - Interactive states (hover, active, disabled)
  - Icon integration (dots, chevrons)

### Expected Workflow Example
```
Input: Figma URL + Component Requirements
↓
Figma MCP Analysis: Extract design specs, tokens, layout
↓
Component Generation: Create React component with TypeScript
↓
Integration: Add to design system with proper imports/exports
↓
Demo Implementation: Add usage examples to showcase page
↓
Quality Check: Verify responsive behavior and accessibility
```

Build Check:

```
npm run build
```

Expected: no errors from the build.

## DOCUMENTATION:

### Primary References

1. **Figma MCP Server Documentation**: Integration patterns and API usage for design token extraction
2. **Leica Design System Tokens**: Complete reference in `src/app/globals.css` including:
   - Color palette (primary, greyscale, semantic colors)
   - Typography scale (headlines, body text, labels)
   - Spacing system (4px to 168px scale)
   - Grid system and breakpoints
   - Aspect ratios and blur effects

3. **Component Architecture Patterns**: Established in existing components
   - TypeScript interface definitions
   - Responsive design with mobile-first approach
   - Tailwind CSS class usage (no arbitrary values)
   - Accessibility considerations (ARIA attributes, semantic HTML)
   - No border radius and borders

4. **CLAUDE.md**: Project-specific guidelines for AI assistant integration
   - Design system structure and component patterns
   - Tailwind class usage restrictions
   - Development commands and architecture notes

### Technical References
- **Next.js 15 Documentation**: App Router patterns and optimization
- **React 19 Documentation**: Component patterns and TypeScript integration
- **Tailwind CSS v4 Documentation**: Custom theme configuration and design token integration

## OTHER CONSIDERATIONS:

### Design System Consistency
- **No Arbitrary Values**: Must use design tokens through Tailwind classes (e.g., `bg-grey-50` not `bg-[#F5F5F5]`)
- **Component Variants**: Follow established pattern of prop-based conditional styling
- **Responsive Patterns**: Maintain mobile-first approach with consistent breakpoints
- **Typography Hierarchy**: Use semantic heading levels and established text scales

### Code Quality Requirements
- **TypeScript First**: All components must have proper interface definitions
- **Accessibility**: ARIA attributes, semantic HTML, keyboard navigation support
- **Performance**: Optimize images, minimize bundle size, efficient rendering
- **Testing**: Components should be demonstrable on the showcase page

### Common AI Assistant Gotchas
1. **Design Token Usage**: AI often defaults to arbitrary CSS values instead of using the established design token classes
2. **Component Structure**: Tendency to create overly complex component hierarchies instead of following established patterns
3. **Responsive Design**: May not properly implement mobile-first responsive patterns
4. **Import Management**: Forgetting to add new components to demo pages or proper export patterns
5. **Accessibility**: Often missing ARIA labels, semantic HTML structure, or keyboard navigation

### Workflow Constraints
- **Step-by-Step Processing**: Generate one component at a time to allow for review and iteration
- **Existing Codebase Integration**: Must work within current project structure and conventions
- **Design System Compliance**: Every generated component must integrate seamlessly with existing tokens and patterns
- **Documentation Requirements**: Each component should include usage examples and be added to the component showcase

### Future Considerations
- **Batch Processing**: Potential for processing multiple related components together
- **Component Variants**: Handling complex component states and variant combinations
- **Asset Management**: Automated handling of images, icons, and other design assets
- **Testing Integration**: Automated component testing and visual regression testing
