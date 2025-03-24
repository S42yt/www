"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function ToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [opacity, setOpacity] = useState(1);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      className="fixed bottom-16 right-4 sm:right-8 z-40 bg-background/50 backdrop-blur-lg p-3 rounded-full shadow-lg border border-white/10"
      onClick={scrollToTop}
      initial={{ x: 100, opacity: 0 }}
      animate={{ 
        x: isVisible ? 0 : 100,
        opacity: isVisible ? (isHovering ? 1 : opacity) : 0
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      whileHover={{ 
        scale: 1.1,
        backgroundColor: "rgba(255, 255, 255, 0.1)"
      }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      aria-label="Scroll to top"
    >
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden rounded-full -z-10">
          <div className="absolute -inset-2 bg-gradient-to-tr from-purple-900/20 to-indigo-900/20 rounded-full blur-lg opacity-70"></div>
        </div>
        
        <FontAwesomeIcon 
          icon={faArrowUp} 
          className="h-5 w-5 text-accent" 
        />
      </div>
    </motion.button>
  );
}