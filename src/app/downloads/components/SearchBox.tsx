import { useEffect, useRef } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBox({
  value,
  onChange,
  placeholder = "Search...",
}: SearchBoxProps) {
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
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FontAwesomeIcon
          icon={faSearch}
          className="h-4 w-4 text-foreground/40"
        />
      </div>
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        defaultValue={value}
        className="w-full pl-10 pr-4 py-2 rounded-full bg-background/50 border border-border 
                 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50
                 transition-all duration-200"
      />
    </div>
  );
}
