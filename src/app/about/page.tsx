import { 
  faCode, faGlobe, faBolt, faComments, 
  faLaptopCode, faTools
} from '@fortawesome/free-solid-svg-icons';
import { 
  faReact, faJs, faVuejs, faCss3, faHtml5, 
  faNodeJs, faNpm, faDocker, faGitAlt, faAngular,
  faJava, faPython, faRust, faSass, faMicrosoft
} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProfileAnimation } from './components/ProfileAnimation';
import { SkillComponent } from './components/SkillComponent';
import { AnimatedSection } from './components/AnimatedSection';
import { AnimatedList } from './components/AnimatedList';
import './style/animations.css';

const icons = {
  faCode, faGlobe, faBolt, faComments, faLaptopCode, faTools,
  faReact, faJs, faVuejs, faCss3, faHtml5, 
  faNodeJs, faNpm, faDocker, faGitAlt, faAngular,
  faJava, faPython, faRust, faSass, faMicrosoft,
  faDatabase: {
    prefix: 'fas',
    iconName: 'database',
    icon: [448, 512, [], "f1c0", "M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"]
  },
  faCloud: {
    prefix: 'fas',
    iconName: 'cloud',
    icon: [640, 512, [], "f0c2", "M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"]
  }
};

const skillCategories = [
  {
    name: "Frontend",
    icon: icons.faLaptopCode,
    skills: ["React", "Vue.js", "Angular", "Next.js", "HTML5", "CSS3", "SASS", "TailwindCSS"]
  },
  {
    name: "Backend",
    icon: icons.faCode,
    skills: ["Node.js", "Deno", ".NET", "Prisma", "MongoDB", "MySQL", "PostgreSQL"]
  },
  {
    name: "Languages",
    icon: icons.faGlobe,
    skills: ["JavaScript", "TypeScript", "C#", "C++", "Rust", "Kotlin", "Java", "Python"]
  },
  {
    name: "Tools",
    icon: icons.faTools,
    skills: ["Docker", "Git", "VSCode", "Cloudflare", "Tauri", "Vite", "NPM", "Bun"]
  }
];

const GradientBlobs = () => (
  <>
    <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-900/10 rounded-full blur-3xl opacity-60 will-change-transform"></div>
    <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-indigo-900/10 rounded-full blur-3xl opacity-60 will-change-transform"></div>
  </>
);

const ProfileSection = () => (
  <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
    <ProfileAnimation>
      <Image 
        src="https://avatars.githubusercontent.com/u/176326202?v=4"
        alt="S42 Profile"
        fill
        sizes="160px"
        className="object-cover"
        priority
      />
    </ProfileAnimation>
    
    <div className="text-center md:text-left">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
        Hey, I&apos;m S42
      </h1>
      
      <AnimatedList>
        <div className="space-y-3 max-w-2xl">
          <p className="flex items-center gap-2 staggered-item">
            <FontAwesomeIcon icon={icons.faGlobe} className="text-accent h-5 w-5" />
            German 🇩🇪 and Turkish 🇹🇷 Software Developer
          </p>
          
          <p className="flex items-center gap-2 staggered-item">
            <FontAwesomeIcon icon={icons.faBolt} className="text-accent h-5 w-5" />
            Specializing in Frontend and User-friendly UI/UX
          </p>
          
          <p className="flex items-center gap-2 staggered-item">
            <FontAwesomeIcon icon={icons.faCode} className="text-accent h-5 w-5" />
            Currently working on <span className="font-semibold">Desto.lol</span> and <Link href="https://discord.gg/cutecraft" className="text-accent hover:underline font-semibold">CuteCraft.net</Link>
          </p>
          
          <p className="flex items-center gap-2 staggered-item">
            <FontAwesomeIcon icon={icons.faComments} className="text-accent h-5 w-5" />
            <Link 
              href="https://discord.com/users/787306646417571860" 
              target="_blank" 
              className="text-accent hover:underline transition-colors"
            >
              Contact me through Discord: S42
            </Link>
          </p>
        </div>
      </AnimatedList>
    </div>
  </div>
);

const SkillCategorySection = ({ category, index }) => (
  <AnimatedSection 
    key={category.name}
    className="glass-card p-6"
    delay={0.7 + (index * 0.1)}
  >
    <div className="flex items-center gap-2 mb-4">
      <div className="bg-accent/10 p-2 rounded-full">
        <FontAwesomeIcon icon={category.icon} className="text-accent h-5 w-5" />
      </div>
      <h3 className="text-xl font-semibold">{category.name}</h3>
    </div>
    
    <div className="flex flex-wrap gap-2">
      {category.skills.map((skill) => (
        <SkillComponent 
          key={`${category.name}-${skill}`} 
          name={skill} 
          icons={icons}
        />
      ))}
    </div>
  </AnimatedSection>
);

export default function About() {
  return (
    <div className="min-h-[calc(100vh-120px)] py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <AnimatedSection className="glass-card p-8 mb-12 relative overflow-hidden">
        <GradientBlobs />
        <ProfileSection />
      </AnimatedSection>
      
      <AnimatedSection className="mb-12" delay={0.6}>
        <div className="flex items-center gap-2 mb-6">
          <FontAwesomeIcon icon={icons.faTools} className="text-accent h-6 w-6" />
          <h2 className="text-3xl font-bold gradient-text">Skills & Tools</h2>
        </div>
        
        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <SkillCategorySection 
              key={category.name}
              category={category}
              index={index}
            />
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}