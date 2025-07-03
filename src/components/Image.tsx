import React from 'react';
import NextImage from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  quality?: number;
  className?: string;
  sizes?: string;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
}

export default function Image({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  quality = 85,
  className = '',
  sizes,
  placeholder = 'empty',
  blurDataURL,
  objectFit = 'cover',
  objectPosition = 'center',
  ...props
}: ImageProps) {
  const fitClass =
    objectFit === 'cover'
      ? 'object-cover'
      : objectFit === 'contain'
      ? 'object-contain'
      : objectFit === 'fill'
      ? 'object-fill'
      : objectFit === 'none'
      ? 'object-none'
      : 'object-scale-down';
  const posClass = objectPosition === 'center' ? 'object-center' : '';

  const imageProps = {
    src,
    alt,
    priority,
    quality,
    placeholder,
    className: `${className} ${fitClass} ${posClass}`,
    ...(blurDataURL && { blurDataURL }),
    ...(sizes && { sizes }),
    ...props,
  };

  if (fill) {
    return (
      <NextImage
        {...imageProps}
        fill
        style={{
          objectFit,
          objectPosition,
        }}
      />
    );
  }

  if (width && height) {
    return (
      <NextImage
        {...imageProps}
        width={width}
        height={height}
      />
    );
  }

  // Fallback - requires width and height to be provided
  console.warn('Image component requires either fill=true or both width and height props');
  return (
    <NextImage
      {...imageProps}
      width={width || 400}
      height={height || 300}
    />
  );
}
