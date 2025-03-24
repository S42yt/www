"use client";
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function ToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      if (scrollPosition > 400) {
        setIsVisible(true);
        
        const newOpacity = Math.max(1 - scrollPosition / 400, 0.3);
        setOpacity(newOpacity);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      if (isVisible) {
        button.style.transform = 'translateX(0)';
        button.style.opacity = isHovering ? '1' : opacity.toString();
      } else {
        button.style.transform = 'translateX(100px)';
        button.style.opacity = '0';
      }
    }
  }, [isVisible, isHovering, opacity]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      ref={buttonRef}
      className={`
        fixed bottom-16 right-4 sm:right-8 z-40 
        p-4 rounded-full shadow-lg 
        bg-background/70 backdrop-blur-lg
        border-2 border-accent/30
        transition-all duration-300 ease-out
        hover:scale-110 hover:bg-background/90 hover:border-accent/50
        active:scale-95
        flex items-center justify-center
      `}
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      aria-label="Scroll to top"
      style={{
        transform: 'translateX(100px)',
        opacity: 0,
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1), 0 0 0 2px rgba(139, 92, 246, 0.2)'
      }}
    >
      <div className="relative w-6 h-6">
        <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/30 to-indigo-600/30 rounded-full blur-lg opacity-70 animate-pulse"></div>
        
        <div className="absolute inset-0 rounded-full ring-4 ring-accent/20 blur-sm"></div>
        
        <FontAwesomeIcon 
          icon={faArrowUp} 
          className="h-6 w-6 text-accent/90 drop-shadow-md" 
        />
      </div>
    </button>
  );
}