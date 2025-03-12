"use client";
import { useState, useEffect, useCallback, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  name: string;
  path: string;
  icon?: string;
}

const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const expandTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const collapseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const index = navItems.findIndex(item => item.path === pathname);
    if (index !== -1) {
      setSelectedIndex(index);
    }
  }, [pathname]);

  const handleMouseEnter = useCallback(() => {
    if (collapseTimeoutRef.current) {
      clearTimeout(collapseTimeoutRef.current);
      collapseTimeoutRef.current = null;
    }
    
    expandTimeoutRef.current = setTimeout(() => {
      setIsExpanded(true);
    }, 100);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (expandTimeoutRef.current) {
      clearTimeout(expandTimeoutRef.current);
      expandTimeoutRef.current = null;
    }
    
    collapseTimeoutRef.current = setTimeout(() => {
      setIsExpanded(false);
    }, 300);
  }, []);

  const navigateLeft = useCallback(() => {
    setSelectedIndex(prev => prev > 0 ? prev - 1 : navItems.length - 1);
  }, []);

  const navigateRight = useCallback(() => {
    setSelectedIndex(prev => prev < navItems.length - 1 ? prev + 1 : 0);
  }, []);

  const selectCurrentItem = useCallback(() => {
    router.push(navItems[selectedIndex].path);
    requestAnimationFrame(() => {
      setTimeout(() => setIsExpanded(false), 100);
    });
  }, [router, selectedIndex]);

  useEffect(() => {
    return () => {
      if (expandTimeoutRef.current) clearTimeout(expandTimeoutRef.current);
      if (collapseTimeoutRef.current) clearTimeout(collapseTimeoutRef.current);
    };
  }, []);

  const currentPageName = navItems.find(item => item.path === pathname)?.name || 'Home';

  return (
    <nav className="fixed top-4 left-0 w-full flex justify-center items-center z-50 will-change-transform transform-gpu">
      <motion.div
        className="bg-background/30 backdrop-blur-xl rounded-full shadow-lg border border-white/10 overflow-hidden"
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
          boxShadow: isExpanded 
            ? "0 10px 30px -5px rgba(167, 139, 250, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" 
            : "0 4px 15px -1px rgba(167, 139, 250, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" 
        }}
        transition={{ 
          type: 'spring', 
          stiffness: 300, 
          damping: 30,
          opacity: { duration: 0.6 }
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Add frosty glow effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-900/20 rounded-full blur-xl opacity-60 transform-gpu"></div>
          <div className="absolute -bottom-20 -right-10 w-40 h-40 bg-indigo-900/20 rounded-full blur-xl opacity-60 transform-gpu"></div>
        </div>
        
        <motion.div 
          className="px-4 py-2 flex items-center justify-center relative z-10 overflow-hidden"
          animate={{
            width: isExpanded ? 'auto' : 'auto',
            height: isExpanded ? 'auto' : '40px',
          }}
          transition={{ 
            duration: 0.4,
            type: "spring",
            stiffness: 400,
            damping: 30
          }}
        >
          {!isExpanded ? (
            <motion.div 
              className="text-foreground font-medium cursor-pointer relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsExpanded(true)}
              layout
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2"
              >
                {currentPageName}
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    repeatType: "mirror", 
                    duration: 2,
                    repeatDelay: 4
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </motion.span>
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              />
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key="expanded-nav"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, type: "spring" }}
                className="flex items-center gap-4"
              >
                <motion.button
                  className="p-2 text-foreground hover:text-foreground/70 transition-colors relative"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "50%",
                    boxShadow: "0 0 10px rgba(167, 139, 250, 0.3)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={navigateLeft}
                  aria-label="Previous"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
                
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.9 }}
                  transition={{ 
                    duration: 0.3,
                    type: "spring",
                    stiffness: 400,
                    damping: 20
                  }}
                  className="flex flex-col items-center min-w-[120px] px-2 py-1"
                >
                  <span className="text-foreground font-medium text-lg gradient-text">
                    {navItems[selectedIndex].name}
                  </span>
                  <span className="text-foreground/70 text-xs mt-1 bg-white/5 px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/10">
                    {selectedIndex + 1} / {navItems.length}
                  </span>
                </motion.div>
                
                <motion.button
                  className="p-2 text-foreground hover:text-foreground/70 transition-colors"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "50%",
                    boxShadow: "0 0 10px rgba(167, 139, 250, 0.3)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={navigateRight}
                  aria-label="Next"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
                
                <motion.button
                  initial={{ opacity: 0, scale: 0.8, x: -5 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: 5 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(167, 139, 250, 0.5)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={selectCurrentItem}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-all duration-300 shadow-lg border border-white/10"
                >
                  Select
                </motion.button>
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
      </motion.div>
    </nav>
  );
}