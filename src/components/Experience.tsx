import { motion } from "framer-motion";
import { Calendar, MapPin, LaptopMinimal, Code2 } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "KreupAI Technologies LLC",
    location: "Remote",
    period: "Apr 2026 – Jul 2026",
    status: "",

    Icon: LaptopMinimal,
    bullets: [
      "Contributed to the development of a POS (Point of Sale) system using React.js, TypeScript, JavaScript and Node.js, implementing features across payments, transactions, receipts, gift cards, reporting and analytics modules",
      "Developed and tested RESTful APIs using Swagger and Postman, ensuring seamless frontend and backend integration",
      "Worked with Docker, Kubernetes and CI/CD pipelines to support application development, deployment and testing",
      "Performed end-to-end testing across application modules to ensure all features worked correctly before deployment",
    ],
    stack: ["React.js", "TypeScript", "JavaScript", "Node.js", "REST APIs", "Swagger", "Postman", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    role: "MERN Stack Web Development Intern",
    company: "CodeLab Systems",
    location: "Mangalore",
    period: "Jan 2026 – May 2026",
    status: "",
    Icon: Code2,
    bullets: [
      "Developed full-stack web applications using the MERN stack (MongoDB, Express.js, React.js and Node.js)",
      "Built responsive user interfaces and integrated RESTful APIs to deliver seamless frontend and backend functionality",
      "Implemented JWT-based authentication, managed MongoDB database operations and developed backend APIs to support application features",
      "Tested APIs using Postman and collaborated with the team using Git/GitHub to ensure code quality and efficient development",
    ],
    stack: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "RESTful APIs", "Postman", "Git", "GitHub"],
  }, 
];

const Experience = () => {
  return (
    <section id="experience" className="space-section relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <div className="eyebrow mb-4">— Experience</div>
          <h2 className="heading-xl">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl relative">
          {/* Vertical line for md+ */}
          <div className="hidden md:block absolute left-7 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-5 md:gap-7"
              >
                {/* Side icon */}
                <div className="relative flex-shrink-0 hidden md:block">
                  <div className="w-14 h-14 rounded-xl border border-border bg-card flex items-center justify-center text-foreground/80">
                    <exp.Icon size={20} />
                  </div>
                </div>

                <article className="glass-card p-6 lg:p-7 flex-1 min-w-0">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 mb-4">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="font-display font-semibold text-lg lg:text-xl tracking-tight">
                          {exp.role}
                        </h3>
                        {exp.status && (
                          <span
                            className={`text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-full border ${
                              exp.status === "Current"
                                ? "bg-foreground text-background border-foreground"
                                : "border-border text-muted-foreground"
                            }`}
                          >
                            {exp.status.toUpperCase()}
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-foreground/80">{exp.company}</div>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-muted-foreground lg:justify-end lg:text-right lg:flex-col lg:items-end lg:gap-1">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={11} /> {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={11} /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((b, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex gap-3"
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-foreground/40 flex-shrink-0" />
                        <span className="text-justify-responsive">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/60">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-secondary/60 border border-border text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
