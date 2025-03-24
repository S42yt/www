"use client";

import { ReactNode } from 'react';
import '../style/animations.css';

interface ProfileAnimationProps {
  children: ReactNode;
}

export function ProfileAnimation({ children }: ProfileAnimationProps) {
  return (
    <div className="profile-animation">
      {children}
    </div>
  );
}