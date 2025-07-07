import Hero from '@/components/Hero/Hero';
import HeroSimple from '@/components/HeroSimple';
import TeaserCard from '@/components/TeaserCard';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/Button';
import Footer from '@/components/Footer';
import MediaText from '@/components/MediaText';
import Section from '@/components/Section';

export default function Home() {
  return (
    <>
      {/* Full-screen Hero Component from Figma */}
      <Hero
        imageSrc="/hero.png"
        imageAlt="Leica camera in hands demonstrating professional photography"
        headline="Editorial Headline"
        subline="Subline"
        buttonText="Learn More"
        buttonHref="#"
      />

      <main className="min-h-screen">
        {/* Hero Component Demo */}
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

        {/* HeroSimple with Back Link */}
        <HeroSimple
          headline="Section Topic"
          subline="Lorem ipsum dolor sit amet, consectetur elit"
          showBackLink={true}
          backLinkText="Go back link"
          variant="simple"
        />

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* HeroSimple Media with Image */}
        <HeroSimple
          headline="Hero with Media"
          subline="This Hero variant includes an image alongside the content, perfect for showcasing visual content with your messaging."
          variant="media"
          imageSrc="/hero-image.jpg"
          imageAlt="Hero image from Figma design"
          imagePriority={true}
        />

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* HeroSimple without Back Link */}
        <HeroSimple
          headline="Another Section Topic"
          subline="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          variant="simple"
        />

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* HeroSimple Media with Back Link */}
        <HeroSimple
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

        {/* HeroSimple without Subline */}
        <HeroSimple
          headline="Simple Headline Only"
          variant="simple"
        />

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Media Text Component Demo */}
        <Section noPadding>
          <div className="px-5 md:px-10 lg:px-14">
            <h2 className="text-headline-6-lg font-medium mb-6">Media Text Component</h2>
          </div>
          <div className="space-y-10">
            {/* Text Left Layout */}
            <MediaText
              headline="The quick, brown fox"
              subheadline="Lorem ipsum dolor sit amet, consectetuer elit"
              body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat mas"
              buttonText="Call to Action"
              imageSrc="/Camera.png"
              imageAlt="Leica Camera"
              imageCredits="Photo: Name Surname"
              layout="text-left"
            />

            {/* Text Right Layout */}
            <MediaText
              headline="Professional Photography"
              subheadline="Capture moments with precision"
              body="Experience the pinnacle of photographic excellence with our professional camera systems. Every detail matters when creating images that stand the test of time."
              buttonText="Explore Collection"
              imageSrc="/camera-grey-bg.webp"
              imageAlt="Professional Camera"
              imageCredits="Photo: Studio Team"
              layout="text-right"
            />
          </div>
        </Section>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Product Cards Example */}
        <Section>
          <h2 className="text-headline-6-lg font-medium mb-6">Product Cards Example</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 justify-center">
            <ProductCard
              imageSrc="/camera-grey-bg.webp"
              imageAlt="Leica Camera 1"
              title="LEICA Q3"
              subline="The ultimate compact full-frame camera."
              discoverLabel="Discover"
              shopNowLabel="Shop Now"
            />
            <ProductCard
              imageSrc="/camera-grey-bg.webp"
              imageAlt="Leica Camera 2"
              title="LEICA SL2"
              subline="Professional mirrorless system camera."
              discoverLabel="Discover"
              shopNowLabel="Shop Now"
            />
            <ProductCard
              imageSrc="/camera-grey-bg.webp"
              imageAlt="Leica Camera 3"
              title="LEICA M11"
              subline="Legendary rangefinder redefined."
              discoverLabel="Discover"
              shopNowLabel="Shop Now"
            />
          </div>
        </Section>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Teaser Card Component Demo */}
        <Section>
          <h2 className="text-headline-6-lg font-medium mb-6">Teaser Card Component (New from Figma)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TeaserCard
              eyebrow="FEATURED"
              headline="M-System"
              subline="The iconic rangefinder reimagined for modern photography"
              imageSrc="/teaser-card-hero.png"
              imageAlt="Leica M-System Camera"
              variant="featured"
            />

            <TeaserCard
              eyebrow="INNOVATION"
              headline="Q-Series"
              subline="Compact full-frame excellence in your hands"
              imageSrc="/teaser-card-hero.png"
              imageAlt="Leica Q-Series Camera"
              variant="default"
            />

            <TeaserCard
              eyebrow="PROFESSIONAL"
              headline="SL-System"
              subline="Mirrorless performance for demanding photographers"
              imageSrc="/teaser-card-hero.png"
              imageAlt="Leica SL-System Camera"
              variant="minimal"
            />
          </div>
        </Section>
      </div>
    </main>
    { <Footer /> }
    </>
  );
}
