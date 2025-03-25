"use client";

import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SkillComponentProps {
  name: string;
  icons: Record<string, IconDefinition>;
}

export function SkillComponent({ name, icons }: SkillComponentProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      const delay = Math.random() * 300;
      setTimeout(() => {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }, delay);
    }
  }, []);

  const getSkillIcon = (skill: string): IconDefinition => {
    switch (skill) {
      case "React":
      case "Next.js":
        return icons.faReact;
      case "Vue.js":
        return icons.faVuejs;
      case "Angular":
        return icons.faAngular;
      case "HTML5":
        return icons.faHtml5;
      case "CSS3":
        return icons.faCss3;
      case "SASS":
        return icons.faSass;
      case "TailwindCSS":
        return icons.faCss3;

      case "Node.js":
        return icons.faNodeJs;
      case "Deno":
        return icons.faNodeJs;
      case ".NET":
        return icons.faMicrosoft;
      case "Prisma":
        return icons.faCode;
      case "MongoDB":
        return icons.faDatabase;
      case "MySQL":
        return icons.faDatabase;
      case "PostgreSQL":
        return icons.faDatabase;

      case "JavaScript":
        return icons.faJs;
      case "TypeScript":
        return icons.faJs;
      case "C#":
        return icons.faMicrosoft;
      case "C++":
        return icons.faCode;
      case "Rust":
        return icons.faRust;
      case "Kotlin":
        return icons.faCode;
      case "Java":
        return icons.faJava;
      case "Python":
        return icons.faPython;

      case "Docker":
        return icons.faDocker;
      case "Git":
        return icons.faGitAlt;
      case "VSCode":
        return icons.faCode;
      case "Cloudflare":
        return icons.faCloud;
      case "Tauri":
        return icons.faRust;
      case "Vite":
        return icons.faCode;
      case "NPM":
        return icons.faNpm;
      case "Bun":
        return icons.faJs;

      default:
        return icons.faCode;
    }
  };

  const getSkillColor = (skill: string) => {
    if (
      [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Vue.js",
        "Angular",
      ].includes(skill)
    ) {
      return {
        background: "bg-blue-500/10",
        border: "border-blue-500/30",
        iconColor: "text-blue-500",
      };
    }
    if (["C#", ".NET", "C++"].includes(skill)) {
      return {
        background: "bg-purple-500/10",
        border: "border-purple-500/30",
        iconColor: "text-purple-500",
      };
    }
    if (["Java", "Kotlin"].includes(skill)) {
      return {
        background: "bg-amber-500/10",
        border: "border-amber-500/30",
        iconColor: "text-amber-600",
      };
    }
    if (["Rust", "Tauri"].includes(skill)) {
      return {
        background: "bg-orange-500/10",
        border: "border-orange-500/30",
        iconColor: "text-orange-500",
      };
    }
    if (["HTML5", "CSS3", "SASS", "TailwindCSS"].includes(skill)) {
      return {
        background: "bg-pink-500/10",
        border: "border-pink-500/30",
        iconColor: "text-pink-500",
      };
    }
    if (
      ["Docker", "Git", "VSCode", "Cloudflare", "NPM", "Bun"].includes(skill)
    ) {
      return {
        background: "bg-emerald-500/10",
        border: "border-emerald-500/30",
        iconColor: "text-emerald-500",
      };
    }
    if (["MongoDB", "MySQL", "PostgreSQL", "Prisma"].includes(skill)) {
      return {
        background: "bg-cyan-500/10",
        border: "border-cyan-500/30",
        iconColor: "text-cyan-500",
      };
    }
    return {
      background: "bg-accent/10",
      border: "border-accent/30",
      iconColor: "text-accent",
    };
  };

  const colorClasses = getSkillColor(name);

  return (
    <div
      ref={ref}
      className={` inline-flex items-center backdrop-blur-md px-3 py-1.5 rounded-full border shadow-sm m-1 skill-badge hover:-translate-y-1 hover:scale-105 ${colorClasses.background} ${colorClasses.border}`}
      style={{
        opacity: 0,
        transform: "translateY(10px)",
        transition: "all 0.2s ease-in-out",
      }}
    >
      <FontAwesomeIcon
        icon={getSkillIcon(name)}
        className={`h-4 w-4 mr-2 ${colorClasses.iconColor}`}
      />
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}
