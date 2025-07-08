import React from 'react';

interface IconButtonProps {
  icon: React.ReactNode;
  label: string; // Required for accessibility
  onClick?: () => void;
  disabled?: boolean;
  surface?: 'light' | 'dark';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function IconButton({
  icon,
  label,
  onClick,
  disabled = false,
  surface = 'light',
  className = '',
  type = 'button'
}: IconButtonProps) {
  // Base styles for icon button
  const baseClasses = 'inline-flex items-center justify-center p-4 rounded-full transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-red';
  
  // Surface and state dependent styles
  let surfaceClasses = '';
  
  if (disabled) {
    surfaceClasses = surface === 'dark'
      ? 'bg-white bg-opacity-16 text-grey-400 cursor-not-allowed backdrop-blur-sm'
      : 'bg-white bg-opacity-16 text-grey-400 cursor-not-allowed backdrop-blur-sm';
  } else {
    if (surface === 'dark') {
      surfaceClasses = 'bg-white bg-opacity-16 text-white border-2 border-white hover:bg-white hover:text-warm-black active:bg-grey-200 active:text-warm-black backdrop-blur-sm';
    } else {
      surfaceClasses = 'bg-white bg-opacity-16 text-warm-black border-2 border-warm-black hover:bg-warm-black hover:text-white active:bg-grey-400 active:text-white backdrop-blur-sm';
    }
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={`${baseClasses} ${surfaceClasses} ${className}`}
    >
      <span aria-hidden="true" className="w-6 h-6 flex items-center justify-center">
        {icon}
      </span>
    </button>
  );
}

// Sample arrow icon for testing
export function ArrowLeftIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}