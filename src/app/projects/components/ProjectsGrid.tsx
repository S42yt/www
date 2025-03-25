"use client";

import { useState } from "react";
import { Project, categories } from "../data/projects";
import ProjectCard from "./ProjectCard";
import FilterTabs from "./FilterTabs";
import SearchBox from "./SearchBox";
import EmptyState from "./EmptyState";

interface ProjectsGridProps {
  initialProjects: Project[];
}

export default function ProjectsGrid({ initialProjects }: ProjectsGridProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = initialProjects.filter((project) => {
    const matchesCategory =
      activeCategory === "all" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className="mb-8 flex flex-col sm:flex-row justify-between gap-4">
        <FilterTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <SearchBox value={searchQuery} onChange={setSearchQuery} />
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </>
  );
}
