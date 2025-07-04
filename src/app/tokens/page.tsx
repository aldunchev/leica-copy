import Footer from '@/components/Footer';

export default function Tokens() {
  return (
    <>
      <header className="border-b border-border py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-display-lg font-normal text-red">
            Leica Design System
          </h1>
          <p className="text-body-lg font-light text-dark-grey mt-4">
            Design tokens extracted from Figma
          </p>
        </div>
      </header>
      <main className="min-h-screen bg-background text-foreground">
        {/* Header */}

        <div className="container mx-auto px-6 py-20">

          {/* Colors Section */}
          <section className="mb-24">
            <h2 className="text-headline-1-lg font-normal mb-8">Colors</h2>

            {/* Primary Colors */}
            <div className="mb-12">
              <h3 className="text-headline-3-lg font-normal mb-6">Primary Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <ColorSwatch color="var(--color-red)" name="Red" code="#E20612" />
                <ColorSwatch color="var(--color-black)" name="Black" code="#000000" />
                <ColorSwatch color="var(--color-warm-black)" name="Warm Black" code="#222222" />
                <ColorSwatch color="var(--color-dark-grey)" name="Dark Grey" code="#8E908F" />
                <ColorSwatch color="var(--color-light-grey)" name="Light Grey" code="#D1D4D3" />
              </div>
            </div>

            {/* Greyscale */}
            <div className="mb-12">
              <h3 className="text-headline-3-lg font-normal mb-6">Greyscale</h3>
              <div className="grid grid-cols-5 lg:grid-cols-10 gap-4">
                <ColorSwatch color="var(--color-grey-50)" name="Grey 50" code="#F5F5F5" />
                <ColorSwatch color="var(--color-grey-100)" name="Grey 100" code="#E7E7E7" />
                <ColorSwatch color="var(--color-grey-200)" name="Grey 200" code="#D1D1D1" />
                <ColorSwatch color="var(--color-grey-300)" name="Grey 300" code="#B5B4B4" />
                <ColorSwatch color="var(--color-grey-400)" name="Grey 400" code="#9A9999" />
                <ColorSwatch color="var(--color-grey-500)" name="Grey 500" code="#828282" />
                <ColorSwatch color="var(--color-grey-600)" name="Grey 600" code="#6C6C6C" />
                <ColorSwatch color="var(--color-grey-700)" name="Grey 700" code="#333333" />
                <ColorSwatch color="var(--color-grey-800)" name="Grey 800" code="#1F1F1F" />
                <ColorSwatch color="var(--color-grey-900)" name="Grey 900" code="#141414" />
              </div>
            </div>

            {/* Alert Colors */}
            <div className="mb-12">
              <h3 className="text-headline-3-lg font-normal mb-6">Alert Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                <ColorSwatch color="var(--color-info)" name="Info" code="#FCD57B" />
                <ColorSwatch color="var(--color-success)" name="Success" code="#16CC80" />
                <ColorSwatch color="var(--color-error)" name="Error" code="#FF2E00" />
                <ColorSwatch color="var(--color-warning)" name="Warning" code="#FCC70C" />
                <ColorSwatch color="var(--color-neutral)" name="Neutral" code="#24A6FE" />
              </div>
            </div>
          </section>

          {/* Typography Section */}
          <section className="mb-[var(--spacing-24)]">
            <h2 className="text-headline-1-lg font-normal mb-8">Typography</h2>

            {/* Display Sizes */}
            <div className="mb-12">
              <h3 className="text-headline-3-lg font-normal mb-6">Display</h3>
              <div className="space-y-6">
                <div className="text-display-lg">Display Large (76px)</div>
                <div className="text-display-md">Display Medium (68px)</div>
                <div className="text-display-sm">Display Small (44px)</div>
              </div>
            </div>

            {/* Headlines */}
            <div className="mb-12">
              <h3 className="text-headline-3-lg font-normal mb-6">Headlines - Large Breakpoint</h3>
              <div className="space-y-4">
                <div className="text-headline-1-lg">Headline 1 (54px)</div>
                <div className="text-headline-2-lg">Headline 2 (46px)</div>
                <div className="text-headline-3-lg">Headline 3 (36px)</div>
              </div>
            </div>

            {/* Body Text */}
            <div className="mb-12">
              <h3 className="text-headline-3-lg font-normal mb-6">Body Text</h3>
              <div className="space-y-4">
                <div className="text-body-lg font-light">Body Large Light (20px) - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <div className="text-body-lg font-normal">Body Large Regular (20px) - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <div className="text-body-lg font-semibold">Body Large Semibold (20px) - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <div className="text-body-md font-normal">Body Medium (18px) - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <div className="text-body-sm font-normal">Body Small (16px) - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              </div>
            </div>

            {/* Labels */}
            <div className="mb-12">
              <h3 className="text-headline-3-lg font-normal mb-6">Labels</h3>
              <div className="space-y-4">
                <div className="text-label-lg font-normal">Label Large (14px)</div>
                <div className="text-label-sm font-normal">Label Small (12px)</div>
              </div>
            </div>
          </section>

          {/* Spacing Section */}
          <section className="mb-24">
            <h2 className="text-headline-1-lg font-normal mb-8">Spacing Scale</h2>
            <div className="space-y-4">
              {[
                { name: 'spacing-1', value: '4px' },
                { name: 'spacing-2', value: '8px' },
                { name: 'spacing-3', value: '12px' },
                { name: 'spacing-4', value: '16px' },
                { name: 'spacing-5', value: '20px' },
                { name: 'spacing-6', value: '24px' },
                { name: 'spacing-8', value: '32px' },
                { name: 'spacing-10', value: '40px' },
                { name: 'spacing-12', value: '48px' },
                { name: 'spacing-16', value: '64px' },
                { name: 'spacing-20', value: '80px' },
                { name: 'spacing-24', value: '96px' },
                { name: 'spacing-26', value: '104px' },
              ].map((spacing) => (
                <SpacingDemo key={spacing.name} name={spacing.name} value={spacing.value} />
              ))}
            </div>
          </section>

          {/* Grid Demo */}
          <section className="mb-24">
            <h2 className="text-headline-1-lg font-normal mb-8">Grid System</h2>
            <div className="bg-muted p-8 rounded-lg">
              <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4">
                {Array.from({ length: 12 }, (_, i) => (
                  <div
                    key={i}
                    className="bg-neutral text-white p-2 text-center text-label-sm rounded"
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
              <p className="text-body-sm text-dark-grey mt-4">
                4 columns on mobile, 8 on tablet, 12 on desktop
              </p>
            </div>
          </section>
        </div>
      </main>
      { Footer }
    </>
  );
}

// Color Swatch Component
function ColorSwatch({ color, name, code }: { color: string; name: string; code: string }) {
  return (
    <div className="text-center">
      <div
        className="w-full h-20 rounded-lg border border-border mb-2"
        style={{ backgroundColor: color }}
      />
      <div className="text-label-lg font-medium">{name}</div>
      <div className="text-label-sm text-dark-grey">{code}</div>
    </div>
  );
}

// Spacing Demo Component
function SpacingDemo({ name, value }: { name: string; value: string }) {
  return (
    <div className="flex items-center space-x-6">
      <div className="text-label-lg font-medium w-24">{name}</div>
      <div className="text-label-sm text-dark-grey w-16">{value}</div>
      <div
        className="h-4 rounded-md bg-neutral"
        style={{ width: `var(--${name})` }}
      />
    </div>
  );
}
