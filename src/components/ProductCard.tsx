import React from 'react';
import Image from '@/components/Image';
import Button from '@/components/Button';

interface ProductCardProps {
  title: string;
  subline: string;
  image: string;
  imageAlt: string;
  discoverUrl: string;
  shopUrl: string;
  className?: string;
}

export default function ProductCard({
  title,
  subline,
  image,
  imageAlt,
  discoverUrl,
  shopUrl,
  className = '',
}: ProductCardProps) {
  const cardId = `product-${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <article 
      className={`bg-grey-50 relative w-full h-full flex flex-col ${className}`}
      role="article"
      aria-labelledby={`${cardId}-title`}
    >
      {/* Header Section */}
      <div className="pt-12 px-14 flex flex-col gap-1">
        {/* Title */}
        <h3 
          id={`${cardId}-title`}
          className="text-headline-6-sm md:text-headline-6-md lg:text-headline-6-lg font-normal text-warm-black uppercase leading-none"
        >
          {title}
        </h3>

        {/* Subline */}
        <p 
          className="text-body-sm font-light text-grey-600 leading-normal"
          aria-describedby={`${cardId}-title`}
        >
          {subline}
        </p>
      </div>

      {/* Product Image Section */}
      <div className="flex-1 flex items-center justify-center px-14 py-8">
        <div className="relative w-full max-w-sm aspect-4/3">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain object-center"
          />
        </div>
      </div>

      {/* CTA Buttons Section */}
      <div className="pb-14 px-4">
        <div className="flex gap-20">
          <Button
            type="cta"
            label="Discover"
            href={discoverUrl}
            chevron={true}
            className="flex-1"
            aria-labelledby={`${cardId}-title`}
          />
          <Button
            type="cta"
            label="Shop Now"
            href={shopUrl}
            chevron={true}
            className="flex-1"
            aria-labelledby={`${cardId}-title`}
          />
        </div>
      </div>

      {/* Spacer at bottom */}
      <div className="h-8 shrink-0" />
    </article>
  );
}