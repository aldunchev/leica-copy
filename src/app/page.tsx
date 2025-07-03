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

        {/* Component Variants Documentation */}
        <section className="w-full px-5 py-6 md:px-10 md:py-8 lg:px-14 lg:py-8">
          <h2 className="text-headline-6-lg font-medium mb-4">Props</h2>

          {/* Props Documentation */}
          <div className="bg-grey-50 p-6 rounded-lg">
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
        </section>

      </div>
    </main>
  );
}
