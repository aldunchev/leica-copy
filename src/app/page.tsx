import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* Hero Component Demo */}
      <div className="space-y-20">

        {/* Hero Simple with Back Link */}
        <Hero
          headline="Section Topic"
          subline="Lorem ipsum dolor sit amet, consectetur elit"
          showBackLink={true}
          backLinkText="Go back link"
          variant="simple"
        />

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Hero Media with Image */}
        <Hero
          headline="Hero with Media"
          subline="This Hero variant includes an image alongside the content, perfect for showcasing visual content with your messaging."
          variant="media"
          imageSrc="/hero-image.jpg"
          imageAlt="Hero image from Figma design"
          imagePriority={true}
        />

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Hero Simple without Back Link */}
        <Hero
          headline="Another Section Topic"
          subline="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          variant="simple"
        />

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Hero Media with Back Link */}
        <Hero
          headline="Media Hero with Navigation"
          subline="Combining image support with back navigation for complex user flows."
          variant="media"
          imageSrc="/hero-image.jpg"
          imageAlt="Hero image from Figma design"
          showBackLink={true}
          backLinkText="Back to gallery"
        />

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Hero Simple without Subline */}
        <Hero
          headline="Simple Headline Only"
          variant="simple"
        />

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Size Variants Demo */}
        <div className="bg-muted py-16">
          <div className="text-center mb-12">
            <h2 className="text-headline-2-lg font-normal text-foreground mb-4">
              Size Variants
            </h2>
            <p className="text-body-lg text-dark-grey">
              Fixed size components for specific breakpoints
            </p>
          </div>

          <div className="space-y-16">

            {/* Large Size with Media */}
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <span className="text-label-lg font-medium text-dark-grey">Size: Large (LG) - Media Variant</span>
              </div>
              <div className="border border-border overflow-hidden">
                <Hero
                  headline="Large Size Hero with Image"
                  subline="Optimized for desktop viewing with media content"
                  size="lg"
                  variant="media"
                  imageSrc="/hero-image.jpg"
                  imageAlt="Hero image from Figma design"
                />
              </div>
            </div>

            {/* Medium Size */}
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <span className="text-label-lg font-medium text-dark-grey">Size: Medium (MD) - Simple Variant</span>
              </div>
              <div className="border border-border overflow-hidden">
                <Hero
                  headline="Medium Size Hero"
                  subline="Perfect for tablet devices"
                  size="md"
                  variant="simple"
                />
              </div>
            </div>

            {/* Small Size with Media */}
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <span className="text-label-lg font-medium text-dark-grey">Size: Small (SM) - Media Variant</span>
              </div>
              <div className="border border-border overflow-hidden">
                <Hero
                  headline="Small Size Hero"
                  subline="Mobile-optimized with image"
                  size="sm"
                  variant="media"
                  imageSrc="/hero-image.jpg"
                  imageAlt="Hero image from Figma design"
                  showBackLink={true}
                />
              </div>
            </div>

          </div>
        </div>

        {/* Component Variants Documentation */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-headline-2-lg font-normal text-foreground mb-8">
            Hero Component Variants
          </h2>

          {/* Simple Variant */}
          <div className="mb-12">
            <h3 className="text-headline-3-lg font-medium mb-4">Simple Variant</h3>
            <p className="text-body-lg text-dark-grey mb-6">
              Text-only hero perfect for content-focused pages. Clean typography with optional back navigation.
            </p>
            <div className="bg-grey-50 p-4 rounded-lg">
              <code className="text-label-lg font-mono">variant="simple"</code>
            </div>
          </div>

          {/* Media Variant */}
          <div className="mb-12">
            <h3 className="text-headline-3-lg font-medium mb-4">Media Variant</h3>
            <p className="text-body-lg text-dark-grey mb-6">
              Hero with image support. Content and image are arranged side-by-side on desktop, stacked on mobile.
            </p>
            <div className="bg-grey-50 p-4 rounded-lg">
              <code className="text-label-lg font-mono">variant="media"</code>
            </div>
          </div>

          {/* Props Documentation */}
          <div className="bg-grey-50 p-6 rounded-lg">
            <h3 className="text-headline-6-lg font-medium mb-4">Updated Props</h3>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <code className="text-label-lg font-mono bg-white px-2 py-1 rounded">headline: string</code>
                <span className="text-body-sm text-dark-grey">Required - Main headline text</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <code className="text-label-lg font-mono bg-white px-2 py-1 rounded">subline?: string</code>
                <span className="text-body-sm text-dark-grey">Optional - Subtitle text</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <code className="text-label-lg font-mono bg-white px-2 py-1 rounded">variant?: simple | media</code>
                <span className="text-body-sm text-dark-grey">Component variant (default: simple)</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <code className="text-label-lg font-mono bg-white px-2 py-1 rounded">imageSrc?: string</code>
                <span className="text-body-sm text-dark-grey">Image source URL (required for media variant)</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <code className="text-label-lg font-mono bg-white px-2 py-1 rounded">imageAlt?: string</code>
                <span className="text-body-sm text-dark-grey">Image alt text (required for media variant)</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <code className="text-label-lg font-mono bg-white px-2 py-1 rounded">imagePriority?: boolean</code>
                <span className="text-body-sm text-dark-grey">Next.js image priority loading</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <code className="text-label-lg font-mono bg-white px-2 py-1 rounded">showBackLink?: boolean</code>
                <span className="text-body-sm text-dark-grey">Show back navigation link</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <code className="text-label-lg font-mono bg-white px-2 py-1 rounded">size?: sm | md | lg | auto</code>
                <span className="text-body-sm text-dark-grey">Responsive behavior (default: auto)</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
