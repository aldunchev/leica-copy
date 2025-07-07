import Button from '@/components/Button';
import Section from '@/components/Section';

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
      </main>
    </>
  );
}
