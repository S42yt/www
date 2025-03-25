"use client";

import { useState } from "react";
import { DownloadItem, platforms, categories } from "../data/downloads";
import DownloadCard from "./DownloadCard";
import FilterTabs from "./FilterTabs";
import SearchBox from "./SearchBox";
import EmptyState from "./EmptyState";

interface DownloadsGridProps {
  initialDownloads: DownloadItem[];
}

export default function DownloadsGrid({
  initialDownloads,
}: DownloadsGridProps) {
  const [activePlatform, setActivePlatform] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDownloads = initialDownloads.filter((item) => {
    const matchesPlatform =
      activePlatform === "all" || item.platform.includes(activePlatform as any);
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPlatform && matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className="mb-8 flex flex-col gap-6">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <FilterTabs
            filters={platforms}
            activeFilter={activePlatform}
            onFilterChange={setActivePlatform}
            label="Platform:"
          />
          <SearchBox
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search downloads..."
          />
        </div>

        <FilterTabs
          filters={categories}
          activeFilter={activeCategory}
          onFilterChange={setActiveCategory}
          label="Type:"
        />
      </div>

      {filteredDownloads.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredDownloads.map((download) => (
            <DownloadCard key={download.id} download={download} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </>
  );
}
