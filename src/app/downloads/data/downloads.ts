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
  soon?: boolean;
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
  { id: "minecraft", name: "Minecraft" },
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
    fileName: "???",
    fileSize: "???",
    releaseDate: "",
    latest: true,
    soon: true,
  },
  {
    id: "trade-cycle",
    title: "Trade Cycle",
    description:
      "TradeCycle is a Paper plugin written in Kotlin to cycle through Villager trades.",
    image:
      "https://github.com/S42yt/TradeCycle/blob/master/assets/cycle_success.gif?raw=true",
    category: "minecraft",
    platform: ["windows", "macos", "linux"],
    version: "1.4.0",
    downloadUrl:
      "https://github.com/S42yt/TradeCycle/releases/download/v.1.4/tradecycler-1.4.jar",
    fileName: "tradecycler-1.4.jar",
    fileSize: "1.58 MB",
    releaseDate: "23.03.2025",
    latest: true,
    featured: true,
  },
];
