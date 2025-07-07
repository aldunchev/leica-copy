import React from 'react';
import Button from './Button';
import Image from './Image';

interface ProductCardProps {
  title: string;
  subline?: string;
  image: string;
  imageAlt: string;
  discoverHref: string;
  shopHref: string;
  className?: string;
}

export default function ProductCard({
  title,
  subline,
  image,
  imageAlt,
  discoverHref,
  shopHref,
  className = '',
}: ProductCardProps) {
  return (
    <article 
      className={`bg-grey-50 relative flex flex-col ${className}`}
      role="article"
    >
      {/* Header Section */}
      <div className="px-14 pt-12 pb-4">
        <h3 className="text-headline-6-sm md:text-headline-6-md lg:text-headline-6-lg font-normal uppercase text-warm-black text-left">
          {title}
        </h3>
        {subline && (
          <p className="text-body-sm text-grey-600 font-light text-left mt-1 leading-relaxed">
            {subline}
          </p>
        )}
      </div>

      {/* Image Section */}
      <div className="relative px-[7.5%] flex-1 min-h-[240px] flex items-center justify-center">
        <div className="relative w-full h-full max-w-md mx-auto">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 85vw, (max-width: 1200px) 40vw, 30vw"
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-14 pb-14 pt-8">
        <div className="flex flex-row items-center justify-start gap-10">
          <Button
            type="cta"
            label="Discover"
            href={discoverHref}
            chevron={true}
          />
          <Button
            type="cta"
            label="Shop Now"
            href={shopHref}
            chevron={true}
          />
        </div>
      </div>
    </article>
  );
}