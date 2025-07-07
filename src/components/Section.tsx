import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  noPadding = false 
}) => {
  const containerPaddingClass = noPadding ? '' : 'px-5 md:px-10 lg:px-14';

  return (
    <section className={`py-10 md:py-16 lg:py-24 ${className}`}>
      <div className={`container max-w-container-max-width mx-auto ${containerPaddingClass}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;