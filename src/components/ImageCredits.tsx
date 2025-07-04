import React from 'react';

interface ImageCreditsProps {
  credits: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  className?: string;
}

export default function ImageCredits({
  credits,
  position = 'bottom-right',
  className = '',
}: ImageCreditsProps) {
  const positionClasses = {
    'bottom-right': 'bottom-4 right-4 lg:right-10',
    'bottom-left': 'bottom-4 left-4 lg:left-10',
    'top-right': 'top-4 right-4 lg:right-10',
    'top-left': 'top-4 left-4 lg:left-10',
  };

  return (
    <div className={`absolute ${positionClasses[position]} ${className}`}>
      <div className="backdrop-blur-sm bg-warm-black/10 rounded-full px-4 py-1">
        <span className="text-label-lg font-light text-white">
          {credits}
        </span>
      </div>
    </div>
  );
}