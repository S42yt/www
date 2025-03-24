import React from 'react';
import './style/background.css'; 

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
  const animationClass = animated ? 'transition-all duration-300' : '';
  const intensityClass = `bg-intensity-${intensity}`;

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${blurClass} ${animationClass} ${intensityClass} ${className}`}>
      <div className="bg-decoration-layer">
        <div className="bg-blob top-blob" />
        <div className="bg-blob right-blob" />
        {intensity === 'high' && <div className="bg-blob bottom-blob" />}
      </div>
      
      <div className="absolute inset-0 bg-background/30 backdrop-blur-[4px]" />
      
      <div className="absolute inset-0 border border-purple-800/20 opacity-30" />
      
      <div className="relative z-10 isolation-auto">{children}</div>
    </div>
  );
}