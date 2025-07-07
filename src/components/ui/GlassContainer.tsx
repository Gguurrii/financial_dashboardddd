import React from 'react';

interface GlassContainerProps {
  children: React.ReactNode;
  className?: string;
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: number;
}

const GlassContainer: React.FC<GlassContainerProps> = ({ 
  children, 
  className = '', 
  blur = 'md',
  opacity = 0.1 
}) => {
  const blurClass = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl'
  }[blur];

  return (
    <div 
      className={`
        ${blurClass} 
        bg-white/80 
        border border-gray-200/50 
        rounded-2xl 
        shadow-xl 
        transition-all 
        duration-300 
        hover:bg-white/90 
        hover:border-gray-300/50
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassContainer;