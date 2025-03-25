"use client";

import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSadTear } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function NotFound() {
  const router = useRouter();
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const handleNavigateHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div
        className={`text-center max-w-lg px-4 transition-all duration-700 transform ${
          isAnimated ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="relative w-32 h-32 mx-auto mb-6">
          <div className="absolute -inset-4 bg-gradient-to-r from-accent/30 to-accent-light/30 rounded-full blur-lg opacity-70 animate-pulse"></div>
          <FontAwesomeIcon
            icon={faSadTear}
            className="w-full h-full text-accent animate-bounce-slow"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
          404
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          Page Not Found
        </h2>

        <p className="text-lg md:text-xl text-foreground/70 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <button
          className="group flex items-center gap-3 mx-auto px-6 py-3 bg-gradient-to-r from-accent to-accent-light text-white rounded-lg shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:scale-105"
          onClick={handleNavigateHome}
        >
          <FontAwesomeIcon
            icon={faHome}
            className="w-5 h-5 group-hover:animate-bounce"
          />
          <span className="text-lg font-medium">Return to Home</span>
        </button>
      </div>
    </div>
  );
}