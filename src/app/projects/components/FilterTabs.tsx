import {
  faLayerGroup,
  faGlobe,
  faCode,
  faFolderOpen,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FilterTabsProps {
  categories: { id: string; name: string }[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function FilterTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: FilterTabsProps) {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "web":
        return faGlobe;
      case "app":
        return faCode;
      case "library":
        return faFolderOpen;
      case "minecraft":
        return faGamepad;
      default:
        return faLayerGroup;
    }
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`
            px-4 py-2 rounded-full border transition-all duration-200 ease-out
            flex items-center gap-2 text-sm
            ${
              activeCategory === category.id
                ? "bg-accent/10 border-accent/50 text-accent"
                : "bg-background/50 border-border hover:bg-background/70"
            }
          `}
        >
          <FontAwesomeIcon
            icon={getCategoryIcon(category.id)}
            className="h-4 w-4"
          />
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
}
