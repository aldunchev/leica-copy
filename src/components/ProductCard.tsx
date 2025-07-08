import React from 'react';
import Button from './Button';
import Image from 'next/image';

interface ProductCardProps {
  title: string;
  subline: string;
  imageSrc: string;
  imageAlt: string;
  cta1Label: string;
  cta2Label: string;
}

export default function ProductCard({
  title,
  subline,
  imageSrc,
  imageAlt,
  cta1Label,
  cta2Label,
}: ProductCardProps) {
  return (
    <div className="w-[480px] h-[600px] bg-grey-50 flex flex-col items-center overflow-hidden">
      {/* Header */}
      <div className="flex flex-col gap-1 w-full mt-12" style={{ width: 480 }}>
        <div className="flex flex-col justify-center w-full px-14">
          <span className="font-outfit text-[24px] leading-[1] uppercase text-grey-900">{title}</span>
        </div>
        <div className="flex flex-col justify-center items-center w-full px-14">
          <span className="font-outfit text-[16px] font-light leading-[1.4] text-grey-600">{subline}</span>
        </div>
      </div>
      {/* Image */}
      <div className="mt-12 mb-8 flex justify-center items-center" style={{ width: 408, height: 272 }}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={408}
          height={272}
          className="object-cover"
        />
      </div>
      {/* CTA Buttons */}
      <div className="flex flex-row justify-center items-end gap-20 w-full px-[104px] mb-0">
        <Button type="cta" label={cta1Label} chevron />
        <Button type="cta" label={cta2Label} chevron />
      </div>
    </div>
  );
}
