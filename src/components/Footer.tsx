import { Github, Linkedin, Mail, MapPin, ArrowUp } from "lucide-react";

const socials = [
  { Icon: Github, href: "https://github.com/NidhishShettigar", label: "GitHub" },
  { Icon: Linkedin, href: "https://linkedin.com/in/nidhish-shettigar17", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:nidhishshettigar23@gmail.com", label: "Email" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border/60 relative">
      <div className="container-custom py-14">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-display font-semibold text-lg tracking-tight mb-3">
              Nidhish<span className="text-muted-foreground"></span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Full-Stack Developer passionate about building modern and user-friendly web applications.
            </p>
          </div>

          {/* Contact */}
          <div>
            <div className="eyebrow mb-4">— Contact</div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:nidhishshettigar23@gmail.com"
                  className="inline-flex items-center gap-2.5 text-foreground/80 hover:text-foreground transition-colors"
                >
                  <Mail size={14} className="text-muted-foreground" />
                  nidhishshettigar23@gmail.com
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5 text-muted-foreground">
                <MapPin size={14} />
                Mangalore, India
              </li>
            </ul>
          </div>

          {/* Social + back to top */}
          <div className="md:text-right">
            <div className="eyebrow mb-4">— Elsewhere</div>
            <div className="flex md:justify-end items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-full border border-border hover:border-foreground/60 text-foreground/80 hover:text-foreground transition-all hover:-translate-y-0.5"
                >
                  <Icon size={16} />
                </a>
              ))}
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="p-2.5 rounded-full border border-border hover:border-foreground/60 text-foreground/80 hover:text-foreground transition-all hover:-translate-y-0.5"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono text-muted-foreground">
          <div>© {year} Nidhish S Shettigar. All rights reserved.</div>
          <div>Designed & Built by Nidhish</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
