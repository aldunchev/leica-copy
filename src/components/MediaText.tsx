import React from 'react';
import Button from './Button';
import ImageCredits from './ImageCredits';

interface MediaTextProps {
  headline?: string;
  subheadline?: string;
  body?: string;
  buttonText?: string;
  buttonHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageCredits?: string;
  layout?: 'text-left' | 'text-right';
  className?: string;
}

export default function MediaText({
  headline = "The quick, brown fox",
  subheadline = "Lorem ipsum dolor sit amet, consectetuer elit",
  body = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat mas",
  buttonText = "Call to Action",
  buttonHref,
  imageSrc = "/Camera.png",
  imageAlt = "Camera",
  imageCredits = "Photo: Name Surname",
  layout = 'text-left',
  className = '',
}: MediaTextProps) {
  const isTextLeft = layout === 'text-left';

  return (
    <div className={`bg-white flex flex-col lg:flex-row gap-4 lg:gap-0 ${className}`}>
      {/* Text Content */}
      <div className={`flex-1 ${isTextLeft ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="h-full flex flex-col justify-center px-5 py-14 lg:px-22 lg:py-14">
          <div className="max-w-[880px] space-y-6">
            {/* Headline */}
            {headline && (
              <h2 className="text-headline-3-sm md:text-headline-3-md lg:text-headline-4-lg font-normal text-warm-black leading-tight">
                {headline}
              </h2>
            )}
            
            {/* Subheadline */}
            {subheadline && (
              <h3 className="text-headline-6-sm md:text-headline-6-md lg:text-headline-6-lg font-normal text-warm-black leading-relaxed">
                {subheadline}
              </h3>
            )}
            
            {/* Body Text */}
            {body && (
              <p className="text-body-md font-light text-warm-black leading-relaxed">
                {body}
              </p>
            )}
            
            {/* CTA Button */}
            {buttonText && (
              <div className="pt-2">
                <Button
                  type="secondary"
                  label={buttonText}
                  href={buttonHref}
                  dot={true}
                  surface="light"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Media Section */}
      <div className={`flex-none w-full lg:w-[720px] ${isTextLeft ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="relative w-full h-[400px] lg:h-auto">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat relative overflow-hidden"
            style={{
              backgroundImage: `url('${imageSrc}')`,
              aspectRatio: '3/2'
            }}
            role="img"
            aria-label={imageAlt}
          >
            {/* Image Credits Overlay */}
            {imageCredits && (
              <ImageCredits credits={imageCredits} position="bottom-right" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}