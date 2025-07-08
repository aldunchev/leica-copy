import Button from '@/components/Button';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <div className="space-y-20">
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

          {/* Clean Base Setup */}
          <Section>
            <h2 className="text-headline-6-lg font-medium mb-6">Clean Base Components</h2>
            <p className="text-body-md text-grey-700">
              This is a clean branch with only the base components: Button, Image, and Section.
              Design tokens are available in the tokens page.
            </p>
          </Section>
        </div>
        {/* Product Cards Preview */}
        <div className="grid grid-cols-3 w-full justify-items-center mt-20 gap-0">
          <ProductCard
            title="LEICA Q3"
            subline="Full Frame Compact Camera"
            imageSrc="/Camera.png"
            imageAlt="Leica Q3 Camera"
            cta1Label="Discover"
            cta2Label="Shop Now"
          />
          <ProductCard
            title="LEICA SL2"
            subline="Mirrorless System Camera"
            imageSrc="/Hero.png"
            imageAlt="Leica SL2 Camera"
            cta1Label="Learn More"
            cta2Label="Buy Now"
          />
          <ProductCard
            title="LEICA M11"
            subline="Rangefinder Camera"
            imageSrc="/teaser-card-hero.png"
            imageAlt="Leica M11 Camera"
            cta1Label="Explore"
            cta2Label="Order"
          />
        </div>
      </main>
    </>
  );
}
