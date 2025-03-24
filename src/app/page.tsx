import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowRight, 
  faArrowLeft, 
  faMousePointer, 
  faCheckCircle 
} from '@fortawesome/free-solid-svg-icons';

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 min-h-[70vh] text-center max-w-3xl mx-auto px-4">
      <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-accent/20 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-light opacity-10 z-0"></div>
        <Image 
          src="https://avatars.githubusercontent.com/u/176326202?v=4"
          alt="Profile"
          fill
          sizes="96px"
          className="object-cover z-10"
          priority
        />
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight gradient-text">
        Welcome to S42.site
      </h1>

      <p className="text-lg sm:text-xl text-foreground/80 max-w-md leading-relaxed">
        Software Engineer & Developer Portfolio
      </p>

      <div className="glass-card p-6 mt-4 w-full sm:w-auto">
        <h2 className="text-xl font-semibold mb-4">How to Navigate</h2>
        <div className="flex flex-col gap-4 text-left">
          <div className="flex items-start sm:items-center gap-3">
            <div className="bg-accent/10 p-2 rounded-full shrink-0 mt-1 sm:mt-0">
              <FontAwesomeIcon icon={faMousePointer} className="h-5 w-5" />
            </div>
            <p>The navbar stays visible at the top with all navigation options</p>
          </div>
          
          <div className="flex items-start sm:items-center gap-3">
            <div className="bg-accent/10 p-2 rounded-full shrink-0 mt-1 sm:mt-0 flex">
              <FontAwesomeIcon icon={faArrowLeft} className="h-5 w-5 mr-1" />
              <FontAwesomeIcon icon={faArrowRight} className="h-5 w-5" />
            </div>
            <p>Hover over the navbar to restore full opacity when scrolling</p>
          </div>
          
          <div className="flex items-start sm:items-center gap-3">
            <div className="bg-accent/10 p-2 rounded-full shrink-0 mt-1 sm:mt-0">
              <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5" />
            </div>
            <p>Click any icon to navigate to that section</p>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-foreground/50 mt-6 fade-in">
        Explore my work and journey through the icons above
      </p>
    </div>
  );
}