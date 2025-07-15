import Button from '@/components/Button';
import Section from '@/components/Section';
import Heading from '@/components/Heading';
import IconButton, { ArrowLeftIcon } from '@/components/IconButton';
import HeaderModule from '@/components/HeaderModule';
import Credits from '@/components/Credits';
import MainNavigation from '@/components/MainNavigation';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        {/* MainNavigation Component Preview */}
        <MainNavigation />

        {/* Hero Component Preview */}
        <div className="mb-20">
          <Hero
            backgroundImage="/hero-background.png"
            title="Editorial Headline"
            subline="Regular subline one"
            ctaLabel="Learn More"
            ctaHref="/learn-more"
            contentAlignment="left"
          />
        </div>

        <div className="space-y-20">
          {/* ProductCard Component Preview */}
          <Section>
            <Heading level={2} className="mb-6">ProductCard Component Preview</Heading>
            <div className="space-y-6">
              <p className="text-body-sm text-grey-600 mb-4">Product card with title, subline, image, and dual action buttons:</p>
              <div className="max-w-md mx-auto h-96">
                <ProductCard
                  title="LEICA NAME"
                  subline="Optional claim or subline"
                  image="/camera-grey-bg.webp"
                  imageAlt="Leica camera product"
                  discoverUrl="/discover"
                  shopUrl="/shop"
                />
              </div>

              <div className="space-y-4">
                <p className="text-body-sm">Three product cards in a grid layout with column gaps using the cards-gap class. It is for now experimental.</p>
                <p className="text-body-sm">You need to use Chrome version 139 or higher to see the gaps. Check <a className="text-red underline" href="https://developer.chrome.com/blog/gap-decorations" target="_blank" rel="noopener noreferrer">this article</a> for more information.</p>
                <div className="relative z-10">
                  <p>Also you may need to enable the feature in Google Beta fom the Chrome false or from the CLI like this:</p>
                  <pre>
                    <code className="text-body-sm text-white p-4 bg-grey-800 rounded-lg w-full block mt-4">
                    cd /Applications/Google\ Chrome\ Beta.app/Contents/MacOS
                    <br />
                    #Execute the following command:
                    <br />
                    ./Google\ Chrome\ Beta --enable-features=CSSGapDecoration
                    </code>
                  </pre>
                </div>
                <div className="grid grid-cols-3 h-96 gap-1-px cards-gap">
                  <ProductCard
                    title="LEICA Q3"
                    subline="Full-frame compact camera"
                    image="/camera-grey-bg.webp"
                    imageAlt="Leica Q3 camera"
                    discoverUrl="/discover/q3"
                    shopUrl="/shop/q3"
                  />
                  <ProductCard
                    title="LEICA M11"
                    subline="Legendary rangefinder"
                    image="/camera-grey-bg.webp"
                    imageAlt="Leica M11 camera"
                    discoverUrl="/discover/m11"
                    shopUrl="/shop/m11"
                  />
                  <ProductCard
                    title="LEICA SL3"
                    subline="Professional mirrorless"
                    image="/camera-grey-bg.webp"
                    imageAlt="Leica SL3 camera"
                    discoverUrl="/discover/sl3"
                    shopUrl="/shop/sl3"
                  />
                </div>
              </div>
            </div>
          </Section>

          {/* MainNavigation Component Standalone Preview */}
          <Section>
            <Heading level={2} className="mb-6">MainNavigation Component Preview</Heading>
            <div className="space-y-6">
              <p className="text-body-sm text-grey-600 mb-4">Responsive navigation with mobile menu support:</p>
              <div className="bg-grey-900 rounded-lg overflow-hidden relative z-10 h-18">
                <MainNavigation />
              </div>
            </div>
          </Section>

          {/* Heading Component Preview */}
          <Section>
            <Heading level={2} className="mb-6">Heading Component Preview</Heading>
            <div className="space-y-6">
              <div>
                <p className="text-body-sm text-grey-600 mb-2">All heading levels (responsive typography):</p>
                <div className="space-y-4">
                  <Heading level={1}>Heading Level 1</Heading>
                  <Heading level={2}>Heading Level 2</Heading>
                  <Heading level={3}>Heading Level 3</Heading>
                  <Heading level={4}>Heading Level 4</Heading>
                  <Heading level={5}>Heading Level 5</Heading>
                  <Heading level={6}>Heading Level 6</Heading>
                </div>
              </div>
            </div>
          </Section>

          {/* IconButton Component Preview */}
          <Section>
            <Heading level={2} className="mb-6">IconButton Component Preview</Heading>
            <div className="space-y-6">
              <div>
                <p className="text-body-sm text-grey-600 mb-4">Light surface variants:</p>
                <div className="flex gap-4 items-center">
                  <IconButton
                    icon={<ArrowLeftIcon />}
                    label="Go back"
                    surface="light"
                  />
                  <IconButton
                    icon={<ArrowLeftIcon />}
                    label="Go back disabled"
                    surface="light"
                    disabled
                  />
                </div>
              </div>
              <div className="bg-warm-black p-6 rounded-lg">
                <p className="text-body-sm text-white mb-4">Dark surface variants:</p>
                <div className="flex gap-4 items-center">
                  <IconButton
                    icon={<ArrowLeftIcon />}
                    label="Go back"
                    surface="dark"
                  />
                  <IconButton
                    icon={<ArrowLeftIcon />}
                    label="Go back disabled"
                    surface="dark"
                    disabled
                  />
                </div>
              </div>
            </div>
          </Section>

          {/* HeaderModule Component Preview */}
          <Section>
            <Heading level={2} className="mb-6">HeaderModule Component Preview</Heading>
            <div className="space-y-12">
              {/* Headline variant */}
              <div>
                <p className="text-body-sm text-grey-600 mb-4">Headline variant (centered):</p>
                <HeaderModule
                  variant="headline"
                  title="Discover the Art of Photography"
                  subline="Explore our latest camera collection"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor."
                  ctaLabel="View Collection"
                  ctaHref="/collection"
                />
              </div>

              {/* Headline Left variant */}
              <div>
                <p className="text-body-sm text-grey-600 mb-4">Headline Left variant:</p>
                <HeaderModule
                  variant="headline-left"
                  title="Professional Excellence"
                  ctaLabel="Learn More"
                  ctaHref="/about"
                />
              </div>

              {/* Basic variant */}
              <div>
                <p className="text-body-sm text-grey-600 mb-4">Basic variant:</p>
                <HeaderModule
                  variant="basic"
                  title="Camera Technology Innovation"
                  titleLevel={3}
                  subline="Precision crafted for professionals"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                  ctaLabel="Explore Technology"
                  ctaHref="/technology"
                />
              </div>
            </div>
          </Section>

          {/* Credits Component Preview */}
          <Section>
            <Heading level={2} className="mb-6">Credits Component Preview</Heading>
            <div className="space-y-6">
              <p className="text-body-sm text-grey-600">
                Credits component with responsive behavior. On mobile, shows icon only with tap to reveal text. On desktop, always shows icon + text.
              </p>
              <div className="relative bg-grey-100 p-8 rounded-lg">
                <Credits
                  text="Photo: John Doe"
                  author="Leica Camera AG"
                  className="absolute bottom-4 right-4"
                />
                <div className="h-32 flex items-center justify-center text-grey-400">
                  [Sample image area - Credits appear in top right corner]
                </div>
              </div>
            </div>
          </Section>

          {/* Button Component Preview */}
          <Section>
            <Heading level={2} className="mb-6">Button Component Preview</Heading>
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

          {/* Component Integration Example */}
          <Section>
            <Heading level={2} className="mb-6">Component Integration Example</Heading>
            <p className="text-body-md text-grey-700 mb-8">
              All new components (MainNavigation, Hero, ProductCard) working together in a cohesive design system,
              integrated with existing components (Button, Section, Heading, etc.). The new components demonstrate
              the automated Figma-to-code workflow using MCP server integration and Next.js Image optimization.
            </p>
          </Section>
        </div>
      </main>
    </>
  );
}
