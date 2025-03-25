import { Metadata } from "next";
import DownloadsGrid from "./components/DownloadsGrid";
import DownloadsHeader from "./components/DownloadsHeader";
import { downloadItems } from "./data/downloads";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Downloads | S42",
  description: "Download applications, utilities, and tools developed by S42",
};

export default function DownloadsPage() {
  return (
    <div className="py-16 px-4 sm:px-6 max-w-7xl mx-auto fade-in">
      <DownloadsHeader />
      <DownloadsGrid initialDownloads={downloadItems} />
    </div>
  );
}
