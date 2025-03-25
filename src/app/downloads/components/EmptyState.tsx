import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EmptyState() {
  return (
    <div className="text-center py-16">
      <div className="flex justify-center mb-4">
        <FontAwesomeIcon
          icon={faFolderOpen}
          className="h-16 w-16 text-foreground/20"
        />
      </div>
      <h3 className="text-xl font-medium mb-2">No downloads found</h3>
      <p className="text-foreground/70">
        Try adjusting your filters or search criteria
      </p>
    </div>
  );
}
