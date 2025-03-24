"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, faGlobe, faBolt, faComments, 
  faLaptopCode, faTools, faChartBar
} from '@fortawesome/free-solid-svg-icons';
import { 
  faReact, faJs, faVuejs, faCss3, faHtml5, 
  faNodeJs, faNpm, faDocker, faGitAlt, faAngular,
  faJava, faPython, faRust,
    faSass,
  faMicrosoft,
} from '@fortawesome/free-brands-svg-icons';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const skillCategories = [
  {
    name: "Frontend",
    icon: faLaptopCode,
    skills: ["React", "Vue.js", "Angular", "Next.js", "HTML5", "CSS3", "SASS", "TailwindCSS"]
  },
  {
    name: "Backend",
    icon: faCode,
    skills: ["Node.js", "Deno", ".NET", "Prisma", "MongoDB", "MySQL", "PostgreSQL"]
  },
  {
    name: "Languages",
    icon: faGlobe,
    skills: ["JavaScript", "TypeScript", "C#", "C++", "Rust", "Kotlin", "Java", "Python"]
  },
  {
    name: "Tools",
    icon: faTools,
    skills: ["Docker", "Git", "VSCode", "Cloudflare", "Tauri", "Vite", "NPM", "Bun"]
  }
];

const Skill = ({ name }: { name: string }) => {
  const getSkillIcon = (skill: string) => {
    switch (skill) {
      case "React": case "Next.js": return faReact;
      case "Vue.js": return faVuejs;
      case "Angular": return faAngular;
      case "HTML5": return faHtml5;
      case "CSS3": return faCss3;
      case "SASS": return faSass;
      case "TailwindCSS": return faCss3;
      
      case "Node.js": return faNodeJs;
      case "Deno": return faNodeJs;
      case ".NET": return faMicrosoft;
      case "Prisma": return faCode;
      case "MongoDB": return faDatabase;
      case "MySQL": return faDatabase;
      case "PostgreSQL": return faDatabase;
      
      case "JavaScript": return faJs;
      case "TypeScript": return faJs;
      case "C#": return faMicrosoft;
      case "C++": return faCode;
      case "Rust": return faRust;
      case "Kotlin": return faCode;
      case "Java": return faJava;
      case "Python": return faPython;
      
      case "Docker": return faDocker;
      case "Git": return faGitAlt;
      case "VSCode": return faCode;
      case "Cloudflare": return faCloud;
      case "Tauri": return faRust;
      case "Vite": return faCode;
      case "NPM": return faNpm;
      case "Bun": return faJs;
      
      default: return faCode;
    }
  };

  const getSkillColor = (skill: string) => {
    if (["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Angular"].includes(skill)) {
      return "bg-blue-500/10 border-blue-500/30";
    }
    if (["C#", ".NET", "C++"].includes(skill)) {
      return "bg-purple-500/10 border-purple-500/30";
    }
    if (["Java", "Kotlin"].includes(skill)) {
      return "bg-amber-500/10 border-amber-500/30";
    }
    if (["Rust", "Tauri"].includes(skill)) {
      return "bg-orange-500/10 border-orange-500/30";
    }
    if (["HTML5", "CSS3", "SASS", "TailwindCSS"].includes(skill)) {
      return "bg-pink-500/10 border-pink-500/30";
    }
    if (["Docker", "Git", "VSCode", "Cloudflare", "NPM", "Bun"].includes(skill)) {
      return "bg-emerald-500/10 border-emerald-500/30";
    }
    if (["MongoDB", "MySQL", "PostgreSQL", "Prisma"].includes(skill)) {
      return "bg-cyan-500/10 border-cyan-500/30";
    }
    return "bg-accent/10 border-accent/30";
  };

  return (
    <motion.div 
      className={`inline-flex items-center backdrop-blur-md px-3 py-1.5 rounded-full border shadow-sm m-1 ${getSkillColor(name)}`}
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 15, 
        delay: Math.random() * 0.3 
      }}
    >
      <FontAwesomeIcon icon={getSkillIcon(name)} className="h-4 w-4 mr-2 text-accent" />
      <span className="text-sm font-medium">{name}</span>
    </motion.div>
  );
};

const faDatabase = {
  prefix: 'fas',
  iconName: 'database',
  icon: [448, 512, [], "f1c0", "M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"]
};

const faCloud = {
  prefix: 'fas',
  iconName: 'cloud',
  icon: [640, 512, [], "f0c2", "M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"]
};

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-[calc(100vh-120px)] py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.section 
        className="glass-card p-8 mb-12 relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-900/10 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-indigo-900/10 rounded-full blur-3xl opacity-60"></div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
          <motion.div 
            className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-accent/30 shadow-lg"
            animate={{ 
              boxShadow: isVisible ? ["0 0 0 0 rgba(109, 40, 217, 0)", "0 0 0 10px rgba(109, 40, 217, 0)"] : "none"
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              repeatType: "reverse"
            }}
          >
            <Image 
              src="https://avatars.githubusercontent.com/u/176326202?v=4"
              alt="S42 Profile"
              fill
              sizes="160px"
              className="object-cover"
              priority
            />
          </motion.div>
          
          <div className="text-center md:text-left">
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold mb-4 gradient-text"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              👋 Hey, I&apos;m S42
            </motion.h1>
            
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-3 max-w-2xl"
            >
              <motion.p variants={item} className="flex items-center gap-2">
                <FontAwesomeIcon icon={faGlobe} className="text-accent h-5 w-5" />
                German 🇩🇪 and Turkish 🇹🇷 Software Developer
              </motion.p>
              
              <motion.p variants={item} className="flex items-center gap-2">
                <FontAwesomeIcon icon={faBolt} className="text-accent h-5 w-5" />
                Specializing in Frontend and User-friendly UI/UX
              </motion.p>
              
              <motion.p variants={item} className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCode} className="text-accent h-5 w-5" />
                Currently working on <span className="font-semibold">Desto.lol</span> and <Link href="https://discord.gg/cutecraft" className="text-accent hover:underline font-semibold">CuteCraft.net</Link>
              </motion.p>
              
              <motion.p variants={item} className="flex items-center gap-2">
                <FontAwesomeIcon icon={faComments} className="text-accent h-5 w-5" />
                <Link 
                  href="https://discord.com/users/787306646417571860" 
                  target="_blank" 
                  className="text-accent hover:underline transition-colors"
                >
                  Contact me through Discord: S42
                </Link>
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      <motion.section 
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-6">
          <FontAwesomeIcon icon={faTools} className="text-accent h-6 w-6" />
          <h2 className="text-3xl font-bold gradient-text">Skills & Tools</h2>
        </div>
        
        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.name}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + (index * 0.1) }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-accent/10 p-2 rounded-full">
                  <FontAwesomeIcon icon={category.icon} className="text-accent h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Skill key={`${category.name}-${skill}`} name={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      
      <motion.section
        className="glass-card p-6 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <FontAwesomeIcon icon={faChartBar} className="text-accent h-6 w-6" />
          <h2 className="text-2xl font-bold">GitHub Stats</h2>
        </div>
        
        <div className="flex justify-center">
          <Image 
            src="https://camo.githubusercontent.com/1c5a518193e1e5e55c93b44474ac0034c994155fb15be879c94a697f311e949b/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d5334327974267468656d653d6461726b26686964655f626f726465723d66616c736526696e636c7564655f616c6c5f636f6d6d6974733d66616c736526636f756e745f707269766174653d66616c7365266c61796f75743d636f6d70616374" 
            alt="GitHub Stats"
            width={400}
            height={200}
            className="rounded-lg shadow-md"
          />
        </div>
      </motion.section>
    </div>
  );
}