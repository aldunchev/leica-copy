import Button from '@/components/Button';
import Section from '@/components/Section';
import Heading from '@/components/Heading';
import IconButton, { ArrowLeftIcon } from '@/components/IconButton';
import HeaderModule from '@/components/HeaderModule';
import Credits from '@/components/Credits';

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <div className="space-y-20">
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
              All new components working together in a cohesive design system.
            </p>
          </Section>
        </div>
      </main>
    </>
  );
}
