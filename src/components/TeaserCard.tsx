import React from 'react';
import Image from './Image';

interface TeaserCardProps {
  headline: string;
  subline?: string;
  eyebrow?: string;
  imageSrc: string;
  imageAlt: string;
  variant?: 'default' | 'featured' | 'minimal';
  className?: string;
}

export default function TeaserCard({
  headline,
  subline,
  eyebrow,
  imageSrc,
  imageAlt,
  variant = 'default',
  className = '',
}: TeaserCardProps) {

  // Responsive container classes
  const getContainerClasses = () => {
    const baseClasses = "relative w-full overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:from-[64%] before:to-black/20 before:z-10";

    switch (variant) {
      case 'featured':
        return `${baseClasses} aspect-4/5`;
      case 'minimal':
        return `${baseClasses} aspect-4/5`;
      default:
        return `${baseClasses} aspect-4/5`;
    }
  };

  // Content positioning classes
  const getContentClasses = () => {
    return "absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-14 z-20";
  };

  // Text container classes
  const getTextClasses = () => {
    return "flex flex-col gap-2 max-w-[880px] w-full";
  };

  // Eyebrow styling
  const getEyebrowClasses = () => {
    return "text-label-lg font-normal text-grey-200 uppercase leading-normal";
  };

  // Headline styling
  const getHeadlineClasses = () => {
    return "text-headline-6-sm md:text-headline-6-md lg:text-headline-6-lg font-normal text-white leading-relaxed";
  };

  // Subline styling
  const getSublineClasses = () => {
    return "text-body-sm font-light text-white leading-relaxed";
  };

  return (
    <article className={`${getContainerClasses()} ${className}`} role="article">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Content Container */}
      <div className={getContentClasses()}>
        <div className={getTextClasses()}>
          {/* Eyebrow */}
          {eyebrow && (
            <div className="flex items-center">
              <span className={getEyebrowClasses()}>
                {eyebrow}
              </span>
            </div>
          )}

          {/* Headline */}
          <h3 className={getHeadlineClasses()}>
            {headline}
          </h3>

          {/* Subline */}
          {subline && (
            <p className={getSublineClasses()}>
              {subline}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
