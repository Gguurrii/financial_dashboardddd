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
        theme-card
        backdrop-blur-lg 
        rounded-2xl 
        transition-all 
        duration-300 
        ${hover ? 'hover:scale-[1.02] hover:shadow-2xl' : ''} 
        ${gradient ? 'bg-gradient-to-br from-white/90 to-gray-50/60 dark:from-gray-800/60 dark:to-gray-900/40' : ''}
        p-6
        ${className}
      `}
    >
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