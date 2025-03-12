import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 right-0 backdrop-blur-md bg-background/70 border-t border-black/5 dark:border-white/10 py-4 px-6 z-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-foreground/70">
          <span>© {currentYear} Musa/S42</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">All rights reserved</span>
        </div>
        
        <div className="flex gap-6">
          <Link href="https://github.com/S42yt" target="_blank" rel="noopener noreferrer" 
                className="text-foreground/70 hover:text-foreground transition-colors">
            GitHub
          </Link>
          <Link href="https://discord.com/users/787306646417571860" target='_blank' rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}