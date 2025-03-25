import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faCalendarAlt,
  faFileAlt,
  faCodeBranch,
  faDesktop,
  faMobileAlt,
  faGamepad,
  faTools,
  faCode,
  faLayerGroup,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import { DownloadItem } from "../data/downloads";

interface DownloadCardProps {
  download: DownloadItem;
}

export default function DownloadCard({ download }: DownloadCardProps) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);

    // Reset downloading state after 2 seconds
    setTimeout(() => {
      setDownloading(false);
    }, 2000);
  };

  const getCategoryIcon = () => {
    switch (download.category) {
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const renderPlatformIcons = () => {
    return (
      <div className="flex space-x-2 mt-2">
        {download.platform.map((platform) => {
          let icon;
          switch (platform) {
            case "windows":
              icon = faDesktop;
              break;
            case "macos":
              icon = faDesktop;
              break;
            case "linux":
              icon = faDesktop;
              break;
            case "android":
              icon = faDesktop;
              break;
            case "ios":
              icon = faMobileAlt;
              break;
            default:
              icon = faDesktop;
          }

          return (
            <div
              key={platform}
              className="tooltip"
              data-tooltip={
                platform.charAt(0).toUpperCase() + platform.slice(1)
              }
            >
              <FontAwesomeIcon
                icon={icon}
                className="h-4 w-4 text-foreground/60"
              />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="glass-card overflow-hidden transition-all duration-300 group">
      <div className="relative h-44 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />

        <Image
          src={download.image}
          alt={download.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
        />

        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 items-end">
          {download.featured && (
            <div className="px-3 py-1 bg-accent/80 text-white text-xs font-medium rounded-full backdrop-blur-sm flex items-center gap-1.5">
              <FontAwesomeIcon icon={faFire} className="h-3 w-3" />
              <span>Featured</span>
            </div>
          )}

          {download.latest && (
            <div className="px-3 py-1 bg-green-500/80 text-white text-xs font-medium rounded-full backdrop-blur-sm flex items-center gap-1.5">
              <FontAwesomeIcon icon={faCodeBranch} className="h-3 w-3" />
              <span>Latest</span>
            </div>
          )}
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-background/50 backdrop-blur-sm border border-white/10 rounded-full text-xs flex items-center gap-1.5">
          <FontAwesomeIcon icon={getCategoryIcon()} className="h-3 w-3" />
          <span>
            {download.category.charAt(0).toUpperCase() +
              download.category.slice(1)}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
            {download.title}
          </h3>
          <span className="text-xs font-mono bg-background/50 px-2 py-0.5 rounded">
            v{download.version}
          </span>
        </div>

        <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
          {download.description}
        </p>

        <div className="mb-4 text-xs text-foreground/60 space-y-1.5">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faFileAlt} className="h-3.5 w-3.5" />
            <span>
              {download.fileName} ({download.fileSize})
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCalendarAlt} className="h-3.5 w-3.5" />
            <span>Released: {formatDate(download.releaseDate)}</span>
          </div>
          <div className="flex items-center gap-2">{renderPlatformIcons()}</div>
        </div>

        {/* Download button */}
        <Link
          href={download.downloadUrl}
          onClick={handleDownload}
          className="flex items-center justify-center w-full gap-2 px-4 py-3 bg-accent text-white rounded-lg text-sm font-medium transition-colors hover:bg-accent/90 disabled:opacity-50 disabled:cursor-wait"
          download={download.fileName}
          prefetch={false}
        >
          <FontAwesomeIcon
            icon={faDownload}
            className={`h-4 w-4 ${downloading ? "animate-bounce" : ""}`}
          />
          <span>{downloading ? "Downloading..." : "Download Now"}</span>
        </Link>
      </div>
    </div>
  );
}
