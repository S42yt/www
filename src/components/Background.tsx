import React from 'react';

interface BackgroundProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'gradient';
  blur?: boolean;
  animated?: boolean;
  intensity?: 'low' | 'medium' | 'high';
}

export default function Background({
  children,
  className = '',
  variant = 'default',
  blur = true,
  animated = false,
  intensity = 'medium',
}: BackgroundProps) {
  const baseClasses = 'relative overflow-hidden';
  
  const variantClasses = {
    default: 'bg-background/80',
    dark: 'bg-background',
    gradient: 'bg-gradient-to-br from-purple-900 to-indigo-950',
  };
  
  const blurClass = blur ? 'backdrop-blur-[6px]' : '';
  const animationClass = animated ? 'transition-all duration-300 will-change-transform' : '';

  const gradientElements = () => {
    if (intensity === 'low') {
      return (
        <div className="absolute top-40 right-10 w-80 h-80 bg-purple-900/20 rounded-full blur-xl opacity-40 transform-gpu" />
      );
    }
    
    return (
      <>
        {}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-900/20 rounded-full blur-xl opacity-50 animate-pulse transform-gpu" />
        <div className="absolute top-40 right-10 w-80 h-80 bg-purple-950/25 rounded-full blur-xl opacity-40 transform-gpu" />
        {intensity === 'high' && (
          <div className="absolute -bottom-32 left-20 w-80 h-80 bg-indigo-900/20 rounded-full blur-xl opacity-50 animate-pulse-slow transform-gpu" />
        )}
      </>
    );
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${blurClass} ${animationClass} ${className}`}>
      {gradientElements()}
      
      <div className="absolute inset-0 bg-background/30 backdrop-blur-[4px]" />
      
      <div className="absolute inset-0 border border-purple-800/20 opacity-30" />
      
      <div className="relative z-10 isolation-auto">{children}</div>
    </div>
  );
}