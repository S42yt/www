export interface DownloadItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "app" | "utility" | "game" | "library" | "minecraft";
  platform: ("windows" | "macos" | "linux" | "android" | "ios")[];
  version: string;
  downloadUrl: string;
  fileName: string;
  fileSize: string;
  releaseDate: string;
  featured?: boolean;
  latest?: boolean;
}

export const platforms = [
  { id: "all", name: "All Platforms" },
  { id: "windows", name: "Windows" },
  { id: "macos", name: "macOS" },
  { id: "linux", name: "Linux" },
  { id: "android", name: "Android" },
  { id: "ios", name: "iOS" },
  { id: "minecraft", name: "Minecraft" },
];

export const categories = [
  { id: "all", name: "All Types" },
  { id: "app", name: "Applications" },
  { id: "utility", name: "Utilities" },
  { id: "game", name: "Games" },
  { id: "library", name: "Libraries" },
];

export const downloadItems: DownloadItem[] = [
  {
    id: "better-unreleased",
    title: "Better Unreleased",
    description:
      "A music player for local files with playlist management and equalizer",
    image: "https://avatars.githubusercontent.com/u/176326202?v=4",
    category: "app",
    platform: ["windows"],
    version: "1.2.3",
    downloadUrl: "/downloads/files/better-unreleased-1.2.3.exe",
    fileName: "better-unreleased-1.2.3.exe",
    fileSize: "14.2 MB",
    releaseDate: "2023-09-15",
    featured: true,
    latest: true,
  },
];
