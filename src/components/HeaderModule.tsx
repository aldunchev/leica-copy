import React from 'react';
import Heading from '@/components/Heading';
import Button from '@/components/Button';

interface HeaderModuleProps {
  title: string;
  titleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  subline?: string;
  text?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: 'headline' | 'headline-left' | 'basic';
  surface?: 'light' | 'dark';
  className?: string;
}

export default function HeaderModule({
  title,
  titleLevel = 2,
  subline,
  text,
  ctaLabel,
  ctaHref,
  variant = 'basic',
  surface = 'light',
  className = ''
}: HeaderModuleProps) {
  // Alignment classes based on variant
  const alignmentClasses = {
    'headline': 'text-center',
    'headline-left': 'text-left',
    'basic': 'text-left'
  };
  
  // Layout classes based on variant
  const layoutClasses = {
    'headline': 'flex flex-col items-center space-y-6',
    'headline-left': 'flex flex-col md:flex-row md:items-center md:justify-between md:space-y-0 space-y-6',
    'basic': 'flex flex-col space-y-6'
  };

  const textAlignment = alignmentClasses[variant];

  return (
    <div className={`${layoutClasses[variant]} ${className}`}>
      {/* Content container - title, subline, text */}
      <div className={`${variant === 'headline-left' ? 'flex-1' : ''} ${variant === 'basic' ? 'space-y-6' : 'space-y-3'}`}>
        {/* Title */}
        <Heading level={titleLevel} className={textAlignment}>
          {title}
        </Heading>
        
        {/* Subline */}
        {subline && (
          <p className={`text-body-lg text-warm-black ${textAlignment}`}>
            {subline}
          </p>
        )}
        
        {/* Text content */}
        {text && (
          <p className={`text-body-md text-warm-black font-light leading-relaxed ${textAlignment}`}>
            {text}
          </p>
        )}
        
        {/* CTA Button for basic variant */}
        {variant === 'basic' && ctaLabel && (
          <div className={textAlignment}>
            <Button
              type="secondary"
              label={ctaLabel}
              href={ctaHref}
              surface={surface}
            />
          </div>
        )}
      </div>
      
      {/* CTA Button for headline variants */}
      {(variant === 'headline' || variant === 'headline-left') && ctaLabel && (
        <div className={`${variant === 'headline-left' ? 'md:flex-shrink-0 md:ml-8' : ''}`}>
          <Button
            type="secondary"
            label={ctaLabel}
            href={ctaHref}
            surface={surface}
          />
        </div>
      )}
    </div>
  );
}