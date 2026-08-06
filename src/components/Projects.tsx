import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, Calendar } from "lucide-react";
import imgVidhik from "@/assets/vidhikpath-cover.png";
import imgWorkly from "@/assets/workly-cover.png";
import imgMsv from "@/assets/msv-cover.png";
import imgPrashasti from "@/assets/prashasti-cover.png";

type Project = {
  title: string;
  description: string;
  tech: string[];
  period?: string;
  demo: string;
  code: string;
  image: string;
};

const personal: Project[] = [
  {
    title: "VIDHIKPATH",
    description:
      "VidhikPath is an AI-powered legal assistance platform that simplifies legal research by helping users search, understand, and summarize legal documents. Using semantic search, OCR and AI, it delivers context-aware responses and makes complex legal information easier to access.",
    tech: ["JavaScript", "CSS", "Python", "Django","HTML","MongoDB", "FAISS", "OCR"],
    period: "Jun 2025 – Dec 2025",
    demo: "https://vidhikpath.onrender.com/",
    code: "https://github.com/NidhishShettigar/VidhikPath",
    image: imgVidhik,
  },
  {
    title: "Workly",
    description:
      "Workly is a full-stack job portal that connects job seekers and companies on a single platform. Users can search and apply for jobs, companies can post job openings and administrators can manage users, companies and job listings through a secure role-based system.",
    tech: ["JavaScript","React.js" , "Node.js", "Express.js", "MongoDB", "JWT"],
    period: "Jan 2025 – Apr 2025",
    demo: "https://job-portal-beryl-eight.vercel.app/",
    code: "https://github.com/NidhishShettigar/Job-Portal",
    image: imgWorkly,
  },
]; 

const freelance: Project[] = [
  {
    title: "MS Ventures – Business Portfolio Website",
    description:
      "MS Ventures is a modern business portfolio website developed for a client to showcase the company's products, services and brand identity. It features a responsive design, smooth user experience and a professional online presence across all devices.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
    demo: "https://www.msvgroups.com",
    code: "https://github.com/NidhishShettigar/MS-Ventures",
    image: imgMsv,
  },
  {
    title: "Prashasti Ventures – Business Portfolio Website",
    description:
      "Prashasti Ventures is a modern business portfolio website developed for a client to showcase the company's products, services, and business information. It features a responsive design, smooth navigation, and a professional user experience across all devices.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
    demo: "https://www.prashastiventures.com",
    code: "https://github.com/NidhishShettigar/Prashasti-Ventures",
    image: imgPrashasti,
  },
];

const ProjectCard = ({ p, large = false }: { p: Project; large?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 100, damping: 15 });
  const sy = useSpring(my, { stiffness: 100, damping: 15 });
  const rotateX = useTransform(sy, [-50, 50], [4, -4]);
  const rotateY = useTransform(sx, [-50, 50], [-4, 4]);

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 100);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 100);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card overflow-hidden group flex flex-col rounded-2xl"
    >
      {/* Image */}
      <a
        href={p.demo}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${p.title} live site`}
        className="relative overflow-hidden aspect-[16/10] rounded-t-2xl border-b border-border/60 block cursor-pointer"
        style={{ backgroundColor: "#0A0A0A" }}
      >
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700"
          style={{ filter: "brightness(1.08) contrast(1.05) saturate(1.05)" }}
        />
      </a>

      {/* Body */}
      <div className="p-6 lg:p-7 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display font-semibold text-lg lg:text-xl tracking-tight">{p.title}</h3>
          {p.period && (
            <span className="text-[10px] font-mono tracking-widest text-muted-foreground inline-flex items-center gap-1 whitespace-nowrap mt-1.5">
              <Calendar size={10} /> {p.period}
            </span>
          )}
        </div>

        <p className="text-sm text-muted-foreground mb-5 text-justify-responsive">{p.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {p.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-secondary border border-border text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-2 mt-auto">
          <a
            href={p.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-2 flex-1 !px-4 !py-2.5 text-xs"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
          <a
            href={p.code}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center justify-center gap-2 flex-1 !px-4 !py-2.5 text-xs"
          >
            <Github size={14} /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="space-section relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <div className="eyebrow mb-4">— Projects</div>
          <h2 className="heading-xl">
            Personal <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-24">
          {personal.map((p) => (
            <ProjectCard key={p.title} p={p} large />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-10"
        >
          <div className="eyebrow mb-3">— Freelance Projects</div>
          <h3 className="heading-xl">
            Freelance <span className="gradient-text">Projects</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {freelance.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
