import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    Icon: Mail,
    label: "Email",
    value: "nidhishshettigar23@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=nidhishshettigar23@gmail.com",
  },
  { Icon: Phone, label: "Phone", value: "+91 8317369617", href: "tel:+918317369617" },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/nidhish-shettigar17",
    href: "https://linkedin.com/in/nidhish-shettigar17",
  },
  { Icon: Github, label: "GitHub", value: "github.com/NidhishShettigar", href: "https://github.com/NidhishShettigar" },
];

const Contact = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setData((d) => ({ ...d, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_knpkmqf",
        "template_hgllgcj",
        { from_name: data.name, from_email: data.email, message: data.message },
        "iA650W-YOpbIbkt5i"
      );
      toast({ title: "Message sent", description: "Thanks for reaching out — I'll reply soon." });
      setData({ name: "", email: "", message: "" });
    } catch {
      toast({
        title: "Couldn't send",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="space-section relative">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <div className="eyebrow mb-4">— Contact</div>
          <h2 className="heading-xl mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-justify-responsive">
            I'm always open to discussing new opportunities, full-time roles or freelance projects. Feel free to reach out and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            {contactInfo.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glass-card p-5 flex items-center gap-4 group"
              >
                <div className="p-2.5 rounded-lg border border-border text-foreground/80 group-hover:border-foreground/50 group-hover:text-foreground transition-colors">
                  <Icon size={16} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-0.5">
                    {label}
                  </div>
                  <div className="text-sm text-foreground truncate">{value}</div>
                </div>
              </a>
            ))}

            <div className="glass-card p-5 flex items-center gap-4">
              <div className="p-2.5 rounded-lg border border-border text-foreground/80">
                <MapPin size={16} />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-0.5">
                  Location
                </div>
                <div className="text-sm text-foreground">Karnataka, India</div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-7 lg:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  value={data.name}
                  onChange={handle}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/60 transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={data.email}
                  onChange={handle}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/60 transition"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={data.message}
                onChange={handle}
                placeholder="Reason for reaching out..."
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/60 transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full inline-flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
