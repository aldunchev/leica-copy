import React from 'react';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

export default function Heading({ 
  level, 
  children, 
  className = '' 
}: HeadingProps) {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  
  // Using existing responsive typography classes from globals.css
  // These are already defined: text-headline-X-sm md:text-headline-X-md lg:text-headline-X-lg
  const responsiveClasses = `text-headline-${level}-sm md:text-headline-${level}-md lg:text-headline-${level}-lg`;
  
  return (
    <Tag className={`font-normal leading-tight text-foreground ${responsiveClasses} ${className}`}>
      {children}
    </Tag>
  );
}