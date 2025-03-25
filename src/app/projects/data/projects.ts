export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: "web" | "app" | "library" | "minecraft" | "other";
  github?: string;
  website?: string;
  featured?: boolean;
  deprecated?: boolean;
  soon?: boolean;
}

export const projects: Project[] = [
  {
    id: "desto-lol",
    title: "Desto.lol",
    description:
      "A modern web platform for gamers with customizable profiles and game integration.",
    image: "https://avatars.githubusercontent.com/u/176326202?v=4",
    technologies: ["React", "Next.js", "TailwindCSS", "Fastify", "Prisma"],
    category: "web",
    github: "https://github.com/desto-lol",
    website: "https://desto.lol",
    featured: true,
  },
  {
    id: "cutecraft",
    title: "CuteCraft.net",
    description: "CuteCraft.net is a German Minecaft CityBuild server, offering the perfect environment for building, having fun, and making new friends.",
    image: "https://github.com/CuteCraft-Network/server-media/blob/cutecraft/minecraft_servers/cutecraft/background.png?raw=true",
    technologies: ["Next.JS", "TypeScript"],
    category: "minecraft",
    github: "https://github.com/cutecraft-network",
    website: "https://cutecraft.net",
    featured: true,
  },
  {
    id: "trade-cycle",
    title: "Trade Cycle",
    description:
      "TradeCycle is a Paper plugin written in Kotlin to cycle through Villager trades.",
    image: "https://github.com/S42yt/TradeCycle/blob/master/assets/cycle_success.gif?raw=true",
    technologies: ["Kotlin", "Paper API", "Minecraft"],
    category: "minecraft",
    github: "https://github.com/S42yt/TradeCycle",
    deprecated: false,
    featured: true,
  },
  {
    id: "create-42-app",
    title: "Create 42 App",
    description:
      "A creation Command to Create a Full Stack Application with various Frameworks",
    image: "https://avatars.githubusercontent.com/u/176326202?v=4",
    technologies: ["TypeScript", "NextJS", "Vue", "React", "Astro", "Nuxt"],
    category: "library",
    github: "https://github.com/42-Stack/create-42-app",
    soon: true,
    featured: true,
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description:
      "My personal portfolio website built with Next.js and TailwindCSS featuring animated UI components.",
    image: "https://avatars.githubusercontent.com/u/176326202?v=4",
    technologies: ["Next.js", "React", "TailwindCSS", "TypeScript"],
    category: "web",
    github: "https://github.com/S42yt/www",
    website: "https://s42.site",
  },
  {
    id: "unity",
    title: "Unity Discord Bot",
    description: "My Open Source Discord Bot written in Typescript.",
    image: "https://avatars.githubusercontent.com/u/176326202?v=4",
    technologies: ["Discord.js", "MongoDB", "TypeScript"],
    category: "library",
    github: "https://github.com/S42yt/UNITY",
  },
  {
    id: "better-unreleased",
    title: "Better Unreleased",
    description: "a music player to play local files.",
    image: "https://avatars.githubusercontent.com/u/176326202?v=4",
    technologies: ["C#", "SQLite", ".NET"],
    category: "app",
    github: "https://github.com/S42yt/UNITY",
    deprecated: true,
  },
  {
    id: "tuubaa-twitch",
    title: "tuubaa twitch",
    description: "a twitch bot for the youtuber tuubaa",
    image: "https://github.com/S42yt/assets/blob/master/assets/tuubaa/tuubaa-twitch.png?raw=true",
    technologies: ["Nextjs", "tmi.js", "TypeScript"],
    category: "web",
    github: "https://github.com/S42yt/UNITY",
    website: "https://tuubaa.de/commands",
  },
  {
    id: "rusty",
    title: "Rusty Code Formatter",
    description: "A Code Formatter to Format Rust Code in VSCode itself",
    image: "https://avatars.githubusercontent.com/u/176326202?v=4",
    technologies: ["Rust", "TypeScript", "VSCode"],
    category: "library",
    github: "https://github.com/S42yt/rusty-vscode",
    deprecated: true,
  },
  {
    id: "discord-template",
    title: "Discord Template",
    description: "A Template to create a modular Discord bot with MongoDB",
    image: "https://avatars.githubusercontent.com/u/176326202?v=4",
    technologies: ["Discord.js", "TypeScript", "MongoDB"],
    category: "library",
    github: "https://github.com/S42yt/discord-template",
  },
];

export const categories = [
  { id: "all", name: "All" },
  { id: "web", name: "Web" },
  { id: "app", name: "Applications" },
  { id: "library", name: "Libraries" },
  { id: "minecraft", name: "Minecraft" },
];
