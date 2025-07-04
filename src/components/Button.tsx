import React from 'react';

interface ButtonProps {
  type?: 'primary' | 'secondary' | 'cta';
  label: string;
  href?: string;
  disabled?: boolean;
  chevron?: boolean;
  dot?: boolean; // For primary/secondary
  leftIcon?: React.ReactNode; // For CTA
  surface?: 'light' | 'dark'; // For dark surface variants
  className?: string;
}

export default function Button({
  type = 'cta',
  label,
  href,
  disabled = false,
  chevron = false,
  dot = false,
  leftIcon,
  surface = 'light',
  className = '',
}: ButtonProps) {
  // Style maps for each type/state/surface
  const base = 'inline-flex items-center justify-center gap-2 px-8 py-3 leading-normal font-outfit text-body-lg rounded-full transition-colors duration-150';

  // Color logic
  let style = '';
  let dotColor = '';
  if (type === 'primary') {
    if (disabled) {
      style = surface === 'dark'
        ? 'bg-white text-grey-400 cursor-not-allowed'
        : 'bg-grey-200 text-grey-400 cursor-not-allowed';
      dotColor = 'bg-grey-400';
    } else {
      style = surface === 'dark'
        ? 'bg-white text-grey-900 hover:bg-red active:bg-grey-200 focus:outline-2 focus:outline-red font-semibold group'
        : 'bg-warm-black text-white hover:bg-red active:bg-grey-700 focus:outline-2 focus:outline-red font-semibold group';
      dotColor = 'bg-red group-hover:bg-white';
    }
  } else if (type === 'secondary') {
    if (disabled) {
      style = surface === 'dark'
        ? 'border border-grey-400 text-grey-400 bg-transparent cursor-not-allowed'
        : 'border border-grey-200 text-grey-400 bg-transparent cursor-not-allowed';
      dotColor = 'bg-grey-400';
    } else {
      style = surface === 'dark'
        ? 'border border-white text-white hover:bg-white hover:text-grey-900 active:bg-grey-200 active:text-grey-400 focus:outline-2 focus:outline-red'
        : 'border border-grey-900 text-grey-900 hover:bg-grey-900 hover:text-white active:bg-grey-200 active:text-grey-400 focus:outline-2 focus:outline-red';
      dotColor = 'bg-red';
    }
  } else if (type === 'cta') {
    if (disabled) {
      style = surface === 'dark'
        ? 'text-grey-400 cursor-not-allowed'
        : 'text-grey-400 cursor-not-allowed';
    } else {
      style = surface === 'dark'
        ? 'text-white hover:text-red active:text-grey-400 focus:outline-2 focus:outline-red'
        : 'text-grey-900 hover:text-red active:text-grey-400 focus:outline-2 focus:outline-red';
    }
  }

  // Accessibility: if no href, use role/button and tabIndex
  const isLink = !!href && !disabled;
  const commonProps = {
    className: `${base} ${style} ${className}`,
    tabIndex: disabled ? -1 : 0,
    'aria-disabled': disabled,
    role: !isLink ? 'button' : undefined,
    href: isLink ? href : undefined,
  } as React.AnchorHTMLAttributes<HTMLAnchorElement>;

  return (
    <a {...commonProps}>
      {/* Left icon for CTA */}
      {type === 'cta' && leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
      {/* Label */}
      <span>{label}</span>
      {/* Dot icon for primary/secondary */}
      {(type === 'primary' || type === 'secondary') && dot && (
        <span className={`ml-2 w-3 h-3 rounded-full ${dotColor}`} />
      )}
      {/* Chevron for CTA */}
      {type === 'cta' && chevron && <ChevronRightIcon />}
    </a>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
