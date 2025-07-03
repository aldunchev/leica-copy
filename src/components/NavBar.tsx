import React from 'react';
import LogoSvg from '@/svg/logo.svg';

const NAV_LINKS = [
  { label: 'Products', href: '#' },
  { label: 'Experience Leica', href: '#' },
  { label: 'Corporate', href: '#' },
  { label: 'Service', href: '#' },
];

const ICONS = [
  { label: 'Search', icon: 'search', href: '#' },
  { label: 'Profile', icon: 'profile', href: '#' },
  { label: 'Dealer', icon: 'dealer', href: '#' },
  { label: 'Shop', icon: 'bag', href: '#' },
];

function Icon({ name, className = '', ...props }: { name: string; className?: string }) {
  // Placeholder SVGs for icons
  switch (name) {
    case 'search':
      return (
        <svg aria-hidden="true" className={className} width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
          <path d="M20 20L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'profile':
      return (
        <svg aria-hidden="true" className={className} width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4 20c0-3.314 3.134-6 8-6s8 2.686 8 6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case 'dealer':
      return (
        <svg aria-hidden="true" className={className} width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
          <rect x="4" y="8" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 8V6a4 4 0 1 1 8 0v2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case 'bag':
      return (
        <svg aria-hidden="true" className={className} width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
          <rect x="4" y="7" width="16" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 7V5a4 4 0 1 1 8 0v2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case 'menu':
      return (
        <svg aria-hidden="true" className={className} width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
          <rect x="4" y="6" width="16" height="2" rx="1" fill="currentColor" />
          <rect x="4" y="11" width="16" height="2" rx="1" fill="currentColor" />
          <rect x="4" y="16" width="16" height="2" rx="1" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}

function Logo() {
  return <LogoSvg className="h-8 md:h-12 md:w-28" />;
}

export default function NavBar() {
  return (
    <nav className="w-full bg-gradient-to-b from-grey-900 via-grey-950/80 to-transparent h-18 md:h-16 flex items-center">
      <div className="w-full flex flex-row items-center justify-between px-10 md:px-10 lg:px-14" style={{height: 'inherit'}}>
        {/* Left: Nav links or Menu icon */}
        <div className="flex items-center w-1/2">
          {/* Desktop: nav links */}
          <div className="hidden md:flex flex-row gap-8">
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-body-md font-light text-white hover:text-red transition-colors duration-200 px-2 py-1 rounded"
              >
                {link.label}
              </a>
            ))}
          </div>
          {/* Tablet/Mobile: menu icon + label */}
          <button className="flex md:hidden items-center gap-2 text-label-lg font-light text-white px-2 py-1 rounded" aria-label="Open menu">
            <Icon name="menu" className="w-6 h-6" />
            <span>Menu</span>
          </button>
        </div>
        {/* Center: Logo */}
        <div className="flex items-center justify-center flex-1">
          <Logo />
        </div>
        {/* Right: Icon buttons */}
        <div className="flex flex-row items-center gap-6 md:gap-3 w-1/2 justify-end">
          {ICONS.map(icon => (
            <a
              key={icon.label}
              href={icon.href}
              className="inline-flex items-center justify-center w-10 h-10 text-white hover:text-red transition-colors duration-200"
              aria-label={icon.label}
            >
              <Icon name={icon.icon} className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
