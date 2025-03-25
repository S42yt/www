import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faTag,
  faGlobe,
  faCode,
  faFolderOpen,
  faLayerGroup,
  faGamepad,
  faArchive,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const getCategoryIcon = () => {
    switch (project.category) {
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
    <div className="glass-card overflow-hidden transition-all duration-300 group project-card hover:scale-[1.02] transform">
      <div className="relative h-48 w-full overflow-hidden card-image-container">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                       animate-shimmer"
        />

        {/* Project image/screenshot */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover card-image ${project.deprecated ? "opacity-60" : ""} ${project.soon ? "opacity-70" : ""}`}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
        />
        {/* Badges container */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 items-end">
          {/* Featured badge */}
          {project.featured && (
            <div className="px-3 py-1 bg-accent/80 text-white text-xs font-medium rounded-full backdrop-blur-sm">
              Featured
            </div>
          )}

          {/* Soon badge */}
          {project.soon && (
            <div className="px-3 py-1 bg-blue-500/80 text-white text-xs font-medium rounded-full backdrop-blur-sm flex items-center gap-1.5">
              <FontAwesomeIcon icon={faClock} className="h-3 w-3" />
              <span>Coming Soon</span>
            </div>
          )}

          {/* Deprecated badge */}
          {project.deprecated && (
            <div className="px-3 py-1 bg-red-500/80 text-white text-xs font-medium rounded-full backdrop-blur-sm flex items-center gap-1.5">
              <FontAwesomeIcon icon={faArchive} className="h-3 w-3" />
              <span>Archived</span>
            </div>
          )}
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-background/50 backdrop-blur-sm border border-white/10 rounded-full text-xs flex items-center gap-1.5">
          <FontAwesomeIcon icon={getCategoryIcon()} className="h-3 w-3" />
          <span>
            {project.category.charAt(0).toUpperCase() +
              project.category.slice(1)}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-foreground/70 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <div
              key={`${project.id}-${tech}`}
              className="bg-accent/10 px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1"
            >
              <FontAwesomeIcon
                icon={faTag}
                className="h-2.5 w-2.5 text-accent/70"
              />
              <span>{tech}</span>
            </div>
          ))}
          {project.technologies.length > 4 && (
            <div
              className="bg-background/50 px-2.5 py-1 rounded-full text-xs font-medium cursor-help relative"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onTouchStart={() => setShowTooltip(!showTooltip)}
            >
              +{project.technologies.length - 4}
              {/* Tooltip */}
              {showTooltip && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-auto min-w-max p-2 bg-background border border-border shadow-md rounded z-10">
                  <div className="text-xs font-medium">
                    {project.technologies.slice(4).map((tech) => (
                      <div
                        key={`tooltip-${project.id}-${tech}`}
                        className="py-1 px-1"
                      >
                        <FontAwesomeIcon
                          icon={faTag}
                          className="h-2.5 w-2.5 text-accent/70 mr-1.5"
                        />
                        {tech}
                      </div>
                    ))}
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-background border-r border-b border-border"></div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action buttons - Fixed size and consistent across cards */}
        <div className="flex gap-2 justify-between mt-auto">
          <div>
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 border border-border rounded-full text-sm transition-colors hover:bg-background/70 min-w-[100px]"
                prefetch={false}
              >
                <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
                <span>GitHub</span>
              </Link>
            )}
          </div>
          <div>
            {project.website && (
              <Link
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-accent text-white rounded-full text-sm transition-colors hover:bg-accent/90 min-w-[100px]"
                prefetch={false}
              >
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="h-3.5 w-3.5"
                />
                <span>Visit</span>
              </Link>
            )}
            {project.soon && !project.website && (
              <div className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500/30 text-blue-200 rounded-full text-sm min-w-[100px] cursor-not-allowed">
                <FontAwesomeIcon icon={faClock} className="h-3.5 w-3.5" />
                <span>Coming Soon</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
