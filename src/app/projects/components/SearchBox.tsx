import { useEffect, useRef } from "react";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBox({ value, onChange }: SearchBoxProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;

    const handler = (e: Event) => {
      const timer = setTimeout(() => {
        onChange((e.target as HTMLInputElement).value);
      }, 300);

      return () => clearTimeout(timer);
    };

    input.addEventListener("input", handler);
    return () => input.removeEventListener("input", handler);
  }, [onChange]);

  return (
    <div className="relative w-full sm:w-64">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search projects..."
        defaultValue={value}
        className="w-full px-4 py-2 rounded-full bg-background/50 border border-border 
                 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50
                 transition-all duration-200"
      />
    </div>
  );
}
