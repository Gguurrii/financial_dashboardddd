import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  gradient?: boolean;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  title, 
  subtitle, 
  gradient = false,
  hover = true 
}) => {
  return (
    <div 
      className={`
        theme-card glass-card
        backdrop-blur-lg 
        rounded-2xl 
        transition-all 
        duration-300 
        ${hover ? 'hover-lift' : ''} 
        ${gradient ? 'bg-gradient-to-br from-white/90 to-gray-50/60 dark:from-gray-800/60 dark:to-gray-900/40' : ''}
        p-6
        ${className}
      `}
    >
      {/* Glass particles for enhanced effect */}
      <div className="glass-particle"></div>
      <div className="glass-particle"></div>
      <div className="glass-particle"></div>
      
      {(title || subtitle) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-lg font-semibold theme-text-primary mb-1">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="theme-text-secondary text-sm">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;