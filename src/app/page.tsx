import Button from '@/components/Button';
import Section from '@/components/Section';
import SimpleHeader from '@/components/SimpleHeader';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  return (
    <>
      {/* Simple Header Component */}
      <Section>
        <SimpleHeader
          title="Leica Design System Showcase"
          subline="Demonstrating automated Figma-to-code workflow with production-ready React components built using the Leica design system and MCP server integration."
          variant="simple"
        />
      </Section>

      <main className="min-h-screen">
        <div className="space-y-20">
          {/* Product Card Component Preview */}
          <Section>
            <h2 className="text-headline-6-lg font-medium mb-6">Product Card Component Preview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProductCard
                title="Leica Q2"
                subline="Discover the perfect balance of innovation and craftsmanship"
                image="/Camera.png"
                imageAlt="Leica Q2 Camera"
                discoverHref="/cameras/q2"
                shopHref="/shop/q2"
              />
              <ProductCard
                title="Leica M11"
                subline="Experience the legendary M-System redefined"
                image="/camera-grey-bg.webp"
                imageAlt="Leica M11 Camera"
                discoverHref="/cameras/m11"
                shopHref="/shop/m11"
              />
              <ProductCard
                title="Leica SL3"
                subline="Professional mirrorless excellence"
                image="/teaser-card-hero.png"
                imageAlt="Leica SL3 Camera"
                discoverHref="/cameras/sl3"
                shopHref="/shop/sl3"
              />
            </div>
          </Section>

          {/* Simple Header Variants */}
          <Section>
            <h2 className="text-headline-6-lg font-medium mb-6">Simple Header Component Variants</h2>
            <div className="space-y-16">
              {/* Simple variant */}
              <div className="p-8">
                <h3 className="text-body-lg font-medium mb-4">Simple Header (No Image)</h3>
                <SimpleHeader
                  title="Section Topic"
                  subline="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
                  variant="simple"
                />
              </div>

              {/* With image variant */}
              <div className="p-8">
                <h3 className="text-body-lg font-medium mb-4">Simple Header (With Image)</h3>
                <SimpleHeader
                  title="Photography Excellence"
                  subline="Discover the artistry behind every shot with precision-engineered cameras designed for professionals and enthusiasts alike."
                  image="/hero-image.jpg"
                  imageAlt="Leica camera photography showcase"
                  variant="with-image"
                />
              </div>

              {/* With back link */}
              <div className="p-8">
                <h3 className="text-body-lg font-medium mb-4">Simple Header (With Back Link)</h3>
                <SimpleHeader
                  title="Camera Collection"
                  subline="Explore our complete range of cameras and accessories."
                  backLink={{
                    href: "/",
                    label: "← Back to Home"
                  }}
                  variant="simple"
                />
              </div>
            </div>
          </Section>

          {/* Button Component Preview */}
          <Section>
            <h2 className="text-headline-6-lg font-medium mb-6">Button Component Preview</h2>
            <div className="flex flex-wrap gap-6 items-end">
              <Button href="/" type="primary" label="Primary" dot={true} />
              <Button href="/" type="primary" label="Primary Disabled" disabled />
              <Button href="/" type="secondary" label="Secondary" />
              <Button href="/" type="secondary" label="Secondary Disabled" disabled />
              <Button href="/" type="cta" label="CTA" chevron />
              <Button href="/" type="cta" label="CTA Disabled" chevron disabled />
              <Button href="/" type="cta" label="CTA No Chevron" />
            </div>
          </Section>

          {/* Component Overview */}
          <Section>
            <h2 className="text-headline-6-lg font-medium mb-6">Leica Design System Components</h2>
            <p className="text-body-md text-grey-700 mb-4">
              This showcase demonstrates the complete component library featuring automated Figma-to-code workflow:
            </p>
            <ul className="text-body-md text-grey-700 space-y-2 list-disc pl-6">
              <li><strong>Simple Header:</strong> Flexible header component with title, optional subline, image, and back navigation</li>
              <li><strong>Product Card:</strong> Product showcase card with image, content, and action links</li>
              <li><strong>Button:</strong> Multi-variant button component (primary, secondary, CTA) with icons and surface themes</li>
              <li><strong>Image:</strong> Optimized Next.js image wrapper with responsive behavior</li>
              <li><strong>Section:</strong> Layout wrapper with consistent spacing and responsive padding</li>
            </ul>
            <p className="text-body-md text-grey-700 mt-4">
              All components use design tokens from <code className="bg-grey-100 px-2 py-1 rounded text-body-sm">/src/app/globals.css</code> and follow established patterns for TypeScript interfaces, responsive design, and accessibility.
            </p>
          </Section>
        </div>
      </main>
    </>
  );
}
