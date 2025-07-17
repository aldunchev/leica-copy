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

1. **Main Navigation**

- Figma link: Desktop: https://www.figma.com/design/zZqepMQoHFh3QmdB0bSBj4/IOP---UI-Design---WIP?node-id=27856-151190&t=b07fgYT7DDPOFkY5-4
  - Mobile Figma Link: https://www.figma.com/design/zZqepMQoHFh3QmdB0bSBj4/IOP---UI-Design---WIP?node-id=27856-151063&t=b07fgYT7DDPOFkY5-4

- **IMPORTANT**: Implement the first level for now, no sub levels.

- The structure is logo in the middle, menu items on the left, service icons on the right on desktop, same on mobile, but with burger menu for the main nav links on the right.
- For desktop main nav links container should be 50% and service links container also 50% width. Here is basic structure to use:
```
<div class="header__navigation-bar container relative z-20 w-full justify-between items-center gap-2 flex">
  <div class="header__content-left w-1/2">
    <!-- Main navigation links go here -->
  </div>
  <a href="/en-int" rel="home" class="branding">
    <!-- Logo goes here -->
  </a>

  <div class="header__content-right items-center flex justify-end gap-2 w-1/2">
    <!-- Service icons go here -->
  </div>
</div>

```
- Use the svg/logo.svg and import it as React component, like:

```
import LogoSvg from '@/svg/logo.svg';
```


2. **Hero**

- Figma link: https://www.figma.com/design/zZqepMQoHFh3QmdB0bSBj4/IOP---UI-Design---WIP?node-id=6552-406392&t=jUOnNZFojuEnM2qd-4
- **IMPORTANT**: The navigation is not part of the component. It is a separate component.
- Download the image from Figma.
- Use Next image with img tag, no CSS background images and put absolute position the container with the title, subline and button

3. **Product card**

- Figma link: https://www.figma.com/design/zZqepMQoHFh3QmdB0bSBj4/IOP---UI-Design---WIP?node-id=10560-411813&t=jUOnNZFojuEnM2qd-4
- Structure:

  - Title
  - Subline
  - Image
  - Two buttons: Discover, Shop now: make sure they have 50% for each and are not on 2 lines.

Build Check:

```
npm run build
```

Expected: no errors from the build.
