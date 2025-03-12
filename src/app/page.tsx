export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 min-h-[70vh] text-center max-w-3xl mx-auto">
      <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-accent/20 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-light opacity-10 z-0"></div>
        <div className="flex items-center justify-center h-full w-full font-bold text-3xl z-10 relative">
          S42
        </div>
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight gradient-text">
        Welcome to S42.site
      </h1>

      <p className="text-lg sm:text-xl text-foreground/80 max-w-md leading-relaxed">
        Software Engineer & Developer Portfolio
      </p>

      <div className="glass-card p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4">How to Navigate</h2>
        <div className="flex flex-col gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="bg-accent/10 p-2 rounded-full">
              <MousePointerIcon />
            </div>
            <p>Hover over the navbar at the top to expand it</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="bg-accent/10 p-2 rounded-full">
              <ArrowLeftRightIcon />
            </div>
            <p>Use the arrows to navigate between sections</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="bg-accent/10 p-2 rounded-full">
              <CheckCircleIcon />
            </div>
            <p>Click &quot;Select to visit the chosen page</p>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-foreground/50 mt-8 fade-in">
        Explore my work and journey through the navigation above
      </p>
    </div>
  );
}

function ArrowLeftRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3L4 7l4 4"/>
      <path d="M4 7h16"/>
      <path d="m16 17 4-4-4-4"/>
      <path d="M20 13H4"/>
    </svg>
  );
}

function MousePointerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
      <path d="m13 13 6 6"/>
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  );
}