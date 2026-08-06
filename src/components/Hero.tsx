import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import portraitAsset from "@/assets/nidhish-portrait-final.png";

const ROLES = ["Full Stack Developer", "Software Engineer"];

const Typewriter = () => {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[i % ROLES.length];
    const speed = deleting ? 45 : 85;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setI((v) => v + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <span
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "36px",
        fontWeight: 600,
        color: "#E5E5E5",
        letterSpacing: "-0.01em",
        lineHeight: 1.2,
      }}
    >
      {text}
      <span className="cursor-blink text-foreground/60">|</span>
    </span>
  );
};

const Hero = () => {
  const scroll = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative w-full overflow-x-hidden bg-black flex items-center pt-[clamp(5.5rem,9vh,7.5rem)] pb-[clamp(2rem,5vh,4rem)] lg:min-h-[92vh]"
    >
      <div className="container-custom relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[48%_60%] gap-8 lg:gap-6 items-center">

          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-30 flex flex-col justify-center items-center text-center lg:items-start lg:text-left"
          >
            <div
              className="mb-5"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(1.8rem, 2vw, 2rem)",
                fontWeight: 600,
                letterSpacing: "normal",
                lineHeight: 1.2,
                color: "#FFFFFF",
              }}
            >
              Hello, I'm
            </div>

            <h1
              className="mb-5 text-balance"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 4.25rem)",
                fontWeight: 600,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
              }}
            >
              <span className="block gradient-text">Nidhish S</span>
              <span className="block gradient-text">Shettigar</span>
            </h1>

            <div className="h-11 mb-5">
              <Typewriter />
            </div>

            <p
              className="text-muted-foreground mb-8 lg:mb-10 text-justify-responsive"
              style={{
                maxWidth: "580px",
                fontSize: "1rem",
                lineHeight: 1.8,
              }}
            >
              I enjoy building Full-Stack web applications and creating software that solves
              real-world problems. I like learning new technologies, taking on new challenges
              and continuously improving as a developer.
            </p>

            <div
              className="flex flex-wrap items-center justify-center lg:justify-start mb-8 lg:mb-10"
              style={{ gap: "20px" }}
            >
              <button
                onClick={() => scroll("#projects")}
                className="btn-primary inline-flex items-center gap-2 group"
              >
                My Work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </button>
              <button onClick={() => scroll("#contact")} className="btn-outline">
                Let's Talk
              </button>
              <a
                href="/resume.pdf"
                download="Nidhish-S-Shettigar-Resume.pdf"
                type="application/pdf"
                className="btn-outline inline-flex items-center gap-2 group"
              >
                <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
                Resume
              </a>
            </div>

            <div className="flex gap-3 justify-center lg:justify-start">
              {[
                { Icon: Github, href: "https://github.com/NidhishShettigar", label: "GitHub" },
                { Icon: Linkedin, href: "https://linkedin.com/in/nidhish-shettigar17", label: "LinkedIn" },
                { Icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=nidhishshettigar23@gmail.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-full border border-border text-foreground/80 hover:text-foreground hover:border-foreground/60 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Portrait — responsive, stacks below on mobile/tablet */}
          <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
  className="relative z-10 flex items-end justify-center lg:justify-end lg:self-end pointer-events-none lg:translate-y-[clamp(-3rem,-5vh,-1rem)]"
  style={{ marginTop: "clamp(1rem, 3vw, 1.875rem)" }}
>
  <img
    src={portraitAsset}
    alt="Nidhish S Shettigar"
    className="select-none w-full h-auto object-contain object-bottom max-w-[min(300px,80vw)] lg:max-w-none lg:w-auto lg:h-[clamp(40rem,84vh,58rem)]"
    draggable={false}
  />
</motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;