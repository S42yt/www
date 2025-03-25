import {
  faDesktop,
  faMobileAlt,
  faLayerGroup,
  faCode,
  faGamepad,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FilterTabsProps {
  filters: { id: string; name: string }[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  label: string;
}

export default function FilterTabs({
  filters,
  activeFilter,
  onFilterChange,
  label,
}: FilterTabsProps) {
  const getFilterIcon = (id: string) => {
    switch (id) {
      // Platforms
      case "windows":
        return faDesktop;
      case "macos":
        return faDesktop;
      case "linux":
        return faDesktop;
      case "android":
        return faMobileAlt;
      case "ios":
        return faMobileAlt;

      // Categories
      case "app":
        return faDesktop;
      case "utility":
        return faTools;
      case "game":
        return faGamepad;
      case "library":
        return faCode;
      case "minecraft":
        return faGamepad;

      default:
        return faLayerGroup;
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="text-sm font-medium text-foreground/70">{label}</div>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`
              px-3 py-1.5 rounded-full border transition-all duration-200
              flex items-center gap-1.5 text-sm
              ${
                activeFilter === filter.id
                  ? "bg-accent/10 border-accent/50 text-accent"
                  : "bg-background/50 border-border hover:bg-background/70"
              }
            `}
          >
            <FontAwesomeIcon
              icon={getFilterIcon(filter.id)}
              className="h-3.5 w-3.5"
            />
            <span>{filter.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
