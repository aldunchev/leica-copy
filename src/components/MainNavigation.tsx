'use client';

import React, { useState } from 'react';
import LogoSvg from '@/svg/logo.svg';

interface MenuItemProps {
  label: string;
  href: string;
  active?: boolean;
}

interface ServiceIconProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface MainNavigationProps {
  menuItems?: MenuItemProps[];
  serviceIcons?: ServiceIconProps[];
  surface?: 'light' | 'dark';
  className?: string;
}

// Service Icons Components
function SearchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 21L16.65 16.65"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DealerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShopIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 6H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BurgerMenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 12H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 6H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 18H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MainNavigation({
  menuItems = [
    { label: 'Products', href: '/products' },
    { label: 'Experience Leica', href: '/experience' },
    { label: 'Corporate', href: '/corporate' },
    { label: 'Service', href: '/service' },
  ],
  serviceIcons = [
    { icon: <SearchIcon />, href: '/search', label: 'Search' },
    { icon: <ProfileIcon />, href: '/profile', label: 'Profile' },
    { icon: <DealerIcon />, href: '/dealer', label: 'Find Dealer' },
    { icon: <ShopIcon />, href: '/shop', label: 'Shop' },
  ],
  className = '',
}: MainNavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const gradientBg = 'bg-gradient-to-b from-warm-black/65 via-warm-black/30 to-transparent';

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`absolute top-0 left-0 w-full ${gradientBg} ${className}`}
    >
      <div className="header__navigation-bar container-max-width mx-auto lg:px-20 md:px-10 px-4 relative z-20 w-full justify-between items-center gap-2 flex">
        {/* Left side - Main navigation links (Desktop only) / Mobile menu button */}
        <div className="header__content-left w-1/2">
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`
                  px-4 py-2 rounded-sm transition-colors duration-150
                  text-body-md font-light text-white hover:text-red
                  focus:outline-2 focus:outline-red
                  ${item.active ? 'text-red' : ''}
                `}
                aria-current={item.active ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-2 px-4 py-2 text-body-md font-light text-white hover:text-red focus:outline-2 focus:outline-red"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle main menu"
            >
              <BurgerMenuIcon />
              <span>Menu</span>
            </button>
          </div>
        </div>

        {/* Center - Logo */}
        <a
          href="/en-int"
          rel="home"
          className="branding flex items-center justify-center h-16 md:h-18"
          aria-label="Leica homepage"
        >
          <LogoSvg className="h-8 md:h-12 md:w-32 leica-100y-logo icon__svg" />
        </a>

        {/* Right side - Service icons */}
        <div className="header__content-right items-center flex justify-end gap-2 w-1/2">
          {serviceIcons.map((service, index) => {
            // Hide dealer icon on mobile (based on Figma design)
            if (service.label === 'Find Dealer') {
              return (
                <a
                  key={index}
                  href={service.href}
                  className="hidden md:flex items-center justify-center w-10 h-16 md:h-18 px-2 py-6 text-white hover:text-red transition-colors duration-150 focus:outline-2 focus:outline-red"
                  aria-label={service.label}
                >
                  {service.icon}
                </a>
              );
            }

            return (
              <a
                key={index}
                href={service.href}
                className="flex items-center justify-center w-10 h-16 md:h-18 px-2 py-6 text-white hover:text-red transition-colors duration-150 focus:outline-2 focus:outline-red"
                aria-label={service.label}
              >
                {service.icon}
              </a>
            );
          })}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 right-0 bg-warm-black/95 backdrop-blur-md border-t border-grey-200/20"
        >
          <div className="container mx-auto px-5 py-4">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className={`
                      block px-4 py-3 text-body-md font-light text-white hover:text-red transition-colors duration-150
                      focus:outline-2 focus:outline-red
                      ${item.active ? 'text-red' : ''}
                    `}
                    aria-current={item.active ? 'page' : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
