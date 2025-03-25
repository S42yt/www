import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 right-0 w-full backdrop-blur-lg bg-background/30 border-t border-white/10 py-3 px-6 z-10">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-10 -top-20 w-40 h-40 bg-purple-900/10 rounded-full blur-xl opacity-60"></div>
        <div className="absolute -right-10 -bottom-20 w-40 h-40 bg-indigo-900/10 rounded-full blur-xl opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-2 text-sm text-foreground/80">
          <span className="font-medium">© {currentYear} Musa/S42</span>
          <span className="hidden sm:inline opacity-50">•</span>
          <span className="hidden sm:inline text-foreground/60">
            All rights reserved
          </span>
        </div>

        <div className="flex gap-6">
          <div className="group">
            <Link
              href="https://github.com/S42yt/www"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 group-hover:text-accent transition-colors duration-300 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
            </Link>
          </div>

          <div className="group">
            <Link
              href="https://discord.com/users/787306646417571860"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 group-hover:text-accent transition-colors duration-300 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
