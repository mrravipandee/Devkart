"use client";

import React from 'react';

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  withArrow?: boolean;
  arrowHoverEffect?: boolean;
  gradientFrom?: string;
  gradientTo?: string;
  size?: 'sm' | 'md' | 'lg';
}

const MoveButton: React.FC<ButtonProps> = ({
  text,
  href,
  onClick,
  className = '',
  withArrow = true,
  arrowHoverEffect = true,
  gradientFrom = 'blue-600',
  gradientTo = 'indigo-600',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const arrowClasses = arrowHoverEffect 
    ? 'group-hover:translate-x-1 transition-transform duration-300' 
    : '';

  const content = (
    <>
      {text}
      {withArrow && (
        <svg
          className={`ml-2 w-5 h-5 ${arrowClasses}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      )}
    </>
  );

  const baseClasses = `inline-flex items-center justify-center font-semibold text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-${gradientFrom} to-${gradientTo} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={`group ${baseClasses}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group ${baseClasses}`}
    >
      {content}
    </button>
  );
};

export default MoveButton;