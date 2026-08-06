import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiMysql,
  SiC,
  SiCplusplus,
  SiReact,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiPostman,
  SiGit,
  SiGithub,
  SiVercel,
  SiRender,
  SiSwagger,
  SiGithubactions,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
import { Code2, Server, Database, Wrench, Rocket, Terminal } from "lucide-react";

type Tech = { name: string; Icon: IconType; color: string };
type Category = { key: string; label: string; TabIcon: typeof Code2; items: Tech[] };

const categories: Category[] = [
  {
    key: "languages",
    label: "Languages",
    TabIcon: Terminal,
    items: [
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "SQL", Icon: SiMysql, color: "#4479A1" },
      { name: "C", Icon: SiC, color: "#A8B9CC" },
      { name: "C++", Icon: SiCplusplus, color: "#00599C" },
    ],
  },
  {
    key: "frontend",
    label: "Frontend",
    TabIcon: Code2,
    items: [
      { name: "React.js", Icon: SiReact, color: "#61DAFB" },
      { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", Icon: SiCss, color: "#1572B6" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
    ],
  },
  {
    key: "backend",
    label: "Backend",
    TabIcon: Server,
    items: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", Icon: SiExpress, color: "#FFFFFF" },
      { name: "REST APIs", Icon: TbApi, color: "#94A3B8" },
      { name: "JWT Auth", Icon: SiJsonwebtokens, color: "#D63AFF" },
      { name: "Swagger", Icon: SiSwagger, color: "#85EA2D" },
    ],
  },
  {
    key: "database",
    label: "Databases",
    TabIcon: Database,
    items: [
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    key: "devops",
    label: "DevOps & Deploy",
    TabIcon: Rocket,
    items: [
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
      { name: "CI/CD", Icon: SiGithubactions, color: "#2088FF" },
      { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
      { name: "Render", Icon: SiRender, color: "#46E3B7" },
    ],
  },
  {
    key: "tools",
    label: "Tools",
    TabIcon: Wrench,
    items: [
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
      { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
      { name: "Swagger", Icon: SiSwagger, color: "#85EA2D" },
      { name: "VS Code", Icon: VscVscode, color: "#007ACC" },
    ],
  },
];

const Skills = () => {
  const [active, setActive] = useState(categories[0].key);
  const activeCat = categories.find((c) => c.key === active)!;

  return (
    <div id="skills" className="mt-24 lg:mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <div className="eyebrow mb-3">— Technical Skills</div>
        <h3 className="heading-xl">
          Tools I <span className="gradient-text">Work With</span>
        </h3>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1 lg:gap-2 border-b border-border/60 pb-3 mb-8">
          {categories.map((cat) => {
            const isActive = cat.key === active;
            return (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`relative inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium tracking-tight transition-colors whitespace-nowrap ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground/80"
                }`}
              >
                <cat.TabIcon size={15} />
                <span>{cat.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="skill-tab-underline"
                    className="absolute left-3 right-3 -bottom-3 h-[2px] bg-foreground"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCat.key}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {activeCat.items.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="group flex flex-col items-center justify-center gap-2.5 px-3 py-5 rounded-xl border border-border bg-background/40 hover:border-foreground/40 transition-colors w-[140px] sm:w-[150px]"
              >
                <tech.Icon size={30} style={{ color: tech.color }} />
                <span className="text-xs font-medium text-foreground/90 text-center">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Skills;
