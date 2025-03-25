"use client";

import { ReactNode } from "react";
import "../style/animations.css";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
}: AnimatedSectionProps) {
  const delayStyle = delay ? { animationDelay: `${delay}s` } : {};

  return (
    <section
      className={`fade-in slide-up ${className || ""}`}
      style={delayStyle}
    >
      {children}
    </section>
  );
}
