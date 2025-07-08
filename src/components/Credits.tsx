'use client';

import React from 'react';

interface CreditsProps {
  text: string;
  author?: string;
  className?: string;
}

export default function Credits({
  text,
  author,
  className = ''
}: CreditsProps) {

  const fullText = author ? `${text} by ${author}` : text;

  return (
    <div className={`credits-container flex items-center text-white px-4 py-1 bg-warm-black/10 backdrop-blur-xl rounded-full group ${className}`}>
      <button
        aria-label={`Show credits: ${fullText}`}
        className="md:hidden items-center justify-end transition-all duration-200"
      >
        <span className="flex items-center justify-center group-hover:mr-2">
          <InfoIcon />
        </span>
      </button>
      <span className="text-sm font-light text-white leading-5 text-none md:text-label-lg group-hover:text-label-lg ease-in-out duration-200">
        {fullText}
      </span>
    </div>
  );
}

// Info icon component for mobile only
function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
