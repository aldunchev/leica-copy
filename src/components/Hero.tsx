import React from 'react';
import Image from '@/components/Image';
import Button from '@/components/Button';

interface HeroProps {
  backgroundImage: string;
  title: string;
  subline: string;
  ctaLabel: string;
  ctaHref: string;
  contentAlignment?: 'left' | 'center' | 'right';
  className?: string;
}

export default function Hero({
  backgroundImage,
  title,
  subline,
  ctaLabel,
  ctaHref,
  contentAlignment = 'left',
  className = '',
}: HeroProps) {
  const alignmentClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  };

  return (
    <section 
      className={`relative w-full h-screen min-h-96 overflow-hidden ${className}`}
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dark overlay for text readability */}
      <div 
        className="absolute inset-0 mix-blend-multiply"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 10% 85%, rgba(34, 34, 34, 0.7) 0%, rgba(34, 34, 34, 0) 95%)',
        }}
      />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end">
        <div className="px-5 md:px-10 lg:px-22 pb-14">
          <div className={`flex flex-col gap-6 max-w-4xl ${alignmentClasses[contentAlignment]}`}>
            {/* Title */}
            <h1 className="text-headline-1-sm md:text-headline-1-md lg:text-headline-1-lg font-normal text-white leading-tight">
              {title}
            </h1>

            {/* Subline */}
            <p className="text-headline-6-sm md:text-headline-6-md lg:text-headline-6-lg font-normal text-white leading-normal max-w-2xl">
              {subline}
            </p>

            {/* CTA Button */}
            <div className="pt-6">
              <Button
                type="primary"
                label={ctaLabel}
                href={ctaHref}
                dot={true}
                surface="dark"
                className="bg-white text-warm-black hover:bg-grey-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}