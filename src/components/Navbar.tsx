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
        className="bg-background/90 backdrop-blur-md rounded-full shadow-md border border-foreground/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div 
          className="px-4 py-2 flex items-center justify-center"
          animate={{
            width: isExpanded ? 'auto' : 'auto',
            height: isExpanded ? 'auto' : '40px',
          }}
          transition={{ duration: 0.3 }}
        >
          {!isExpanded ? (
            <motion.div 
              className="text-foreground font-medium cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsExpanded(true)}
            >
              {currentPageName}
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key="expanded-nav"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-4"
              >
                <motion.button
                  className="p-2 text-foreground hover:text-foreground/70 transition-colors"
                  whileHover={{ scale: 1.1 }}
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
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center min-w-[100px] px-2"
                >
                  <span className="text-foreground font-medium text-lg">
                    {navItems[selectedIndex].name}
                  </span>
                  <span className="text-foreground/50 text-xs">
                    {selectedIndex + 1} / {navItems.length}
                  </span>
                </motion.div>
                
                <motion.button
                  className="p-2 text-foreground hover:text-foreground/70 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={navigateRight}
                  aria-label="Next"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
                
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={selectCurrentItem}
                  className="bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-all shadow-sm"
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