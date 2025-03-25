import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear, faHome } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center max-w-3xl mx-auto px-4">
      <div className="glass-card p-12 relative overflow-hidden flex flex-col items-center">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-900/10 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-indigo-900/10 rounded-full blur-3xl opacity-60"></div>
        
        <FontAwesomeIcon
          icon={faSadTear}
          className="fa-6x text-accent/80 animate-pulse mb-6"
        />
        
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
          Page Not Found
        </h1>
        
        <p className="text-lg text-foreground/80 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        
        <Link 
          href="/"
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent/80 text-accent-foreground transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <FontAwesomeIcon icon={faHome} className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}