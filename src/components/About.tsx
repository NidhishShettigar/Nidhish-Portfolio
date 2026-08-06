import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Mail } from "lucide-react";
import Skills from "./Skills";

const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Information Science and Engineering",
    institution: "A J Institute of Engineering and Technology",
    period: "2022 – 2026",
    result: "CGPA: 7.0",
  },
  {
    degree: "Pre-University Course (PUC)",
    field: "PCMB",
    institution: "Govinda Dasa Pre-University College",
    period: "2020 – 2022",
    result: "63%",
  },
  {
    degree: "Secondary School (SSLC)",
    field: "",
    institution: "Shri Mahalingeshwara Eng. Med. High School",
    period: "Until 2020",
    result: "71.52%",
  },
];

const stats = [
  { value: 7, suffix: "+", label: "Months of Internship Experience" },
  { value: 2, suffix: "+", label: "Client Projects" },
  { value: 4, suffix: "+", label: "Personal Projects" },
];

const CountUp = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref} className="font-display font-semibold tracking-tight" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
      {n}
      {suffix}
    </span>
  );
};

const About = () => {
  return (
    <section id="about" className="space-section relative">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left column: About Me */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="eyebrow mb-4">— About</div>
              <h2 className="heading-xl">
                About <span className="gradient-text">Me</span>
              </h2>
            </motion.div>

            <p className="text-muted-foreground text-base lg:text-lg mb-8 text-justify-responsive">
              I completed my Bachelor's degree in Information Science and Engineering. During my engineering journey, I worked on Internships, Freelance Projects and Personal Projects that gave me practical experience in Full-Stack Development and helped me grow as a Developer.
            </p>

            <div className="grid grid-cols-3 gap-3 lg:gap-4 mb-6">
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="glass-card p-4 lg:p-5"
                >
                  <CountUp to={s.value} suffix={s.suffix} />
                  <div className="mt-2 text-[10px] lg:text-[11px] font-mono uppercase tracking-widest text-muted-foreground leading-snug">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Email contact block */}
            <motion.a
              href="mailto:nidhishshettigar23@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-5 flex items-center gap-4 group"
            >
              <div className="p-3 rounded-lg border border-border text-foreground/80 group-hover:border-foreground/50 group-hover:text-foreground transition-colors">
                <Mail size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-0.5">
                  Email
                </div>
                <div className="text-sm text-foreground truncate">
                  nidhishshettigar23@gmail.com
                </div>
              </div>
            </motion.a>
          </div>

          {/* Right column: Education, aligned to top */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="eyebrow mb-4">— Education</div>
              <h2 className="heading-xl">
                My <span className="gradient-text">Journey</span>
              </h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
              <div className="space-y-5">
                {education.map((e, i) => (
                  <motion.div
                    key={e.degree}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="relative pl-16"
                  >
                    <div className="absolute left-0 top-4 w-12 h-12 rounded-xl bg-foreground text-background flex items-center justify-center border border-border">
                      <GraduationCap size={18} />
                    </div>
                    <div className="glass-card p-5">
                      <h4 className="font-display font-semibold text-base tracking-tight mb-1">
                        {e.degree}
                      </h4>
                      {e.field && <p className="text-sm text-foreground/80 mb-1">{e.field}</p>}
                      <p className="text-sm text-muted-foreground mb-3">{e.institution}</p>
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs font-mono text-muted-foreground">
                        <span>{e.period}</span>
                        <span>{e.result}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Skills />
      </div>
    </section>
  );
};

export default About;
