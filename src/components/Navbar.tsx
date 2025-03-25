"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCode,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import "./style/navbar.css"; // We'll create this CSS file

const navItems = [
  { name: "Home", path: "/", icon: faHome },
  { name: "About", path: "/about", icon: faUser },
  { name: "Projects", path: "/projects", icon: faCode },
  { name: "Downloads", path: "/downloads", icon: faDownload },
];

export default function Navbar() {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newOpacity = Math.max(1 - scrollPosition / 400, 0.3);
      setScrollOpacity(newOpacity);
    };

    // Initial animation to slide in from top
    if (navRef.current) {
      navRef.current.style.transform = "translateY(0)";
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={navRef}
      className="navbar-container"
      style={{
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        opacity: isHovering ? 1 : scrollOpacity,
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="bg-background/50 rounded-full shadow-lg border border-white/10 px-4 py-2 relative">
        <div className="absolute inset-0 overflow-hidden rounded-full">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-900/20 rounded-full blur-xl opacity-60"></div>
          <div className="absolute -bottom-20 -right-10 w-40 h-40 bg-indigo-900/20 rounded-full blur-xl opacity-60"></div>
        </div>

        <div className="flex items-center justify-center gap-1 sm:gap-4 relative z-10">
          {navItems.map((item) => (
            <div key={item.path} className="navbar-item">
              <Link
                href={item.path}
                className={`
                  flex items-center justify-center gap-2 px-3 py-2 rounded-full 
                  font-medium transition-colors duration-300
                  ${
                    pathname === item.path
                      ? "text-accent"
                      : "text-foreground/80 hover:text-accent"
                  }
                `}
                aria-current={pathname === item.path ? "page" : undefined}
              >
                <FontAwesomeIcon icon={item.icon} className="h-4 w-4" />
                <span className="hidden sm:inline">{item.name}</span>

                {pathname === item.path && <div className="nav-indicator" />}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
