import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import styles from './Hero.module.css';

interface HeroProps {
  imageSrc: string;
  imageAlt: string;
  headline: string;
  subline: string;
  buttonText: string;
  buttonHref?: string;
  className?: string;
}

export default function Hero({
  imageSrc,
  imageAlt,
  headline,
  subline,
  buttonText,
  buttonHref,
  className = '',
}: HeroProps) {
  return (
    <div className={`hero relative w-full h-screen overflow-hidden ${className}`}>
      {imageSrc ? (
      <div className={`hero__media ${styles.hero__media}`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
      </div>
      ) : (
        ""
      )}

      {/* Hero Content - Absolutely positioned */}
      <div className="absolute bottom-14 left-5 right-5 sm:bottom-14 sm:left-10 sm:right-10 lg:bottom-14 lg:left-22 lg:right-22">
        <div className="max-w-4xl">
          {/* Headline */}
          <h1 className="text-white font-normal leading-tight mb-4 sm:mb-6">
            <span
              className="block text-headline-2-sm sm:text-headline-1-md lg:text-display-lg"
              style={{
                fontFamily: 'var(--font-outfit)',
                fontWeight: '400',
                lineHeight: '1.12',
              }}
            >
              {headline}
            </span>
          </h1>

          {/* Subline */}
          <p
            className="text-white mb-4 sm:mb-6 text-body-lg sm:text-headline-6-lg"
            style={{
              fontFamily: 'var(--font-outfit)',
              fontWeight: '400',
              lineHeight: '1.4',
            }}
          >
            {subline}
          </p>

          {/* CTA Button */}
          <Button
            type="primary"
            label={buttonText}
            href={buttonHref}
            dot={true}
            surface="dark"
          />
        </div>
      </div>
    </div>
  );
}
