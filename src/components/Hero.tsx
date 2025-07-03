import React from 'react';
import Image from './Image';

interface HeroProps {
  headline: string;
  subline?: string;
  showBackLink?: boolean;
  backLinkText?: string;
  onBackClick?: () => void;
  variant?: 'simple' | 'media';
  size?: 'sm' | 'md' | 'lg' | 'auto';
  // Image props
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  imagePriority?: boolean;
}

export default function Hero({
  headline,
  subline,
  showBackLink = false,
  backLinkText = "Go back link",
  onBackClick,
  variant = 'simple',
  size = 'auto',
  imageSrc,
  imageAlt,
  imageWidth = 600,
  imageHeight = 400,
  imagePriority = false,
}: HeroProps) {
  // Responsive classes based on size
  const getContainerClasses = () => {
    const baseClasses = "w-full";

    if (size === 'auto') {
      return `${baseClasses} px-5 py-6 md:px-10 md:py-8 lg:px-14 lg:py-8`;
    }

    // Fixed sizes for specific breakpoints
    switch (size) {
      case 'lg':
        return `${baseClasses} px-14 py-8 max-w-[1440px]`;
      case 'md':
        return `${baseClasses} px-10 py-8 max-w-[768px]`;
      case 'sm':
        return `${baseClasses} px-5 py-6 max-w-[375px]`;
      default:
        return `${baseClasses} px-5 py-6`;
    }
  };

  const getHeadlineClasses = () => {
    if (size === 'auto') {
      return "text-headline-1-sm font-normal leading-tight md:text-headline-1-md lg:text-headline-1-lg";
    }

    switch (size) {
      case 'lg':
        return "text-headline-1-lg font-normal leading-tight";
      case 'md':
        return "text-headline-1-md font-normal leading-tight";
      case 'sm':
        return "text-headline-1-sm font-normal leading-tight";
      default:
        return "text-headline-1-sm font-normal leading-tight";
    }
  };

  const getSublineClasses = () => {
    if (size === 'auto') {
      return "text-body-md font-normal leading-relaxed md:text-body-lg";
    }

    switch (size) {
      case 'lg':
        return "text-body-lg font-normal leading-relaxed";
      case 'md':
      case 'sm':
        return "text-body-md font-normal leading-relaxed";
      default:
        return "text-body-md font-normal leading-relaxed";
    }
  };

  const getLayoutClasses = () => {
    // Both variants use vertical layout - content above, image below (if present)
    return "flex flex-col";
  };

  const getContentClasses = () => {
    return "flex flex-col space-y-4";
  };

  const getImageContainerClasses = () => {
    if (variant === 'media' && imageSrc) {
      // Full-width image below content with spacing
      return "mt-8";
    }
    return "";
  };

  const getImageClasses = () => {
    // Image takes full width and maintains aspect ratio
    return "relative w-full aspect-[16/9] overflow-hidden";
  };

  return (
    <section className={getContainerClasses()}>
      <div className={getLayoutClasses()}>

        {/* Content Section */}
        <div className={getContentClasses()}>

          {/* Back Link */}
          {showBackLink && (
            <>
              <div className="flex items-center">
                <button
                  onClick={onBackClick}
                  className="inline-flex items-center gap-2 text-body-md font-normal text-foreground hover:text-red transition-colors duration-200"
                >
                  {/* Left Arrow Icon */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6"
                  >
                    <path
                      d="M5 12L11 6M5 12L11 18M5 12H19"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{backLinkText}</span>
                </button>
              </div>
              <div className="h-2" />
            </>
          )}

          {/* Headline */}
          <h1 className={`${getHeadlineClasses()} text-foreground`}>
            {headline}
          </h1>

          {/* Subline */}
          {subline && (
            <>
              <div className="h-1" />
              <p className={`${getSublineClasses()} text-foreground`}>
                {subline}
              </p>
            </>
          )}
        </div>

        {/* Image Section - Full width below content */}
        {variant === 'media' && imageSrc && imageAlt && (
          <div className={getImageContainerClasses()}>
            <div className={getImageClasses()}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority={imagePriority}
                sizes="100vw"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
