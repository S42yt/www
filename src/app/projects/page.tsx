import { Metadata } from "next";
import ProjectsGrid from "./components/ProjectsGrid";
import ProjectsHeader from "./components/ProjectsHeader";
import { projects } from "./data/projects";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Projects | S42",
  description:
    "Explore my projects spanning web development, applications, and libraries",
};

export default function ProjectsPage() {
  return (
    <div className="py-16 px-4 sm:px-6 max-w-7xl mx-auto fade-in">
      <ProjectsHeader />
      <ProjectsGrid initialProjects={projects} />
    </div>
  );
}
