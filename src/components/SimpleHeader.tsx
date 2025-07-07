import React from 'react';
import Button from './Button';
import Image from './Image';

interface SimpleHeaderProps {
  title: string;
  subline?: string;
  image?: string;
  imageAlt?: string;
  backLink?: {
    href: string;
    label: string;
  };
  variant?: 'simple' | 'with-image';
  className?: string;
}

export default function SimpleHeader({
  title,
  subline,
  image,
  imageAlt,
  backLink,
  variant = 'simple',
  className = '',
}: SimpleHeaderProps) {
  // Determine if we should show image based on variant and image prop
  const shouldShowImage = variant === 'with-image' && image && imageAlt;

  return (
    <header className={`relative ${className}`} role="banner">
      {/* Back Navigation */}
      {backLink && (
        <nav className="mb-8" aria-label="Back navigation">
          <Button
            type="cta"
            label={backLink.label}
            href={backLink.href}
            className="text-grey-600 hover:text-warm-black"
          />
        </nav>
      )}

      {/* Header Content */}
      <div className="text-left">
        {/* Title */}
        <h1 className="text-headline-1-sm md:text-headline-1-md lg:text-headline-1-lg font-normal text-warm-black mb-4">
          {title}
        </h1>

        {/* Subline */}
        {subline && (
          <p className="text-body-sm md:text-body-md lg:text-body-lg text-grey-600 font-light leading-relaxed mb-8">
            {subline}
          </p>
        )}

        {/* Image */}
        {shouldShowImage && (
          <div className="mt-12 mb-8">
            <div className="relative max-w-6xl">
              <Image
                src={image}
                alt={imageAlt}
                width={1200}
                height={800}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}