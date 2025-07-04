import React from 'react';
import Image from './Image';
import Button from './Button';

interface ProductCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subline?: string;
  onDiscover?: () => void;
  onShopNow?: () => void;
  discoverLabel?: string;
  shopNowLabel?: string;
}

export default function ProductCard({
  imageSrc,
  imageAlt,
  title,
  subline,
  discoverLabel = '/discover',
  shopNowLabel = '/shop-now',
}: ProductCardProps) {
  return (
    <div className="bg-grey-50 w-full flex flex-col items-center px-0 py-0">
      {/* Title & Subline */}
      <div className="w-full flex flex-col items-start px-14 pt-14 pb-8">
        <h2 className="font-outfit font-normal text-2xl md:text-3xl uppercase text-grey-900 leading-none">
          {title}
        </h2>
        {subline && (
          <p className="font-outfit font-light text-base md:text-lg text-grey-500 leading-snug mt-2">
            {subline}
          </p>
        )}
      </div>
      {/* Image */}
      <div className="w-full flex justify-center items-center aspect-3/2 px-18">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="object-contain w-full h-full"
          width={480}
          height={320}
        />
      </div>
      {/* CTA Buttons */}
      <div className="w-full flex flex-row justify-center items-center gap-20 pt-10 pb-14">
        <Button
          type="cta"
          label={discoverLabel}
          href={discoverLabel}
          chevron
        />
        <Button
          type="cta"
          label={shopNowLabel}
          href={shopNowLabel}
          chevron
        />
      </div>
    </div>
  );
}
