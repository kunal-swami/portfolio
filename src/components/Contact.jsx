import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { LinkedinIcon, GithubIcon } from "./ui/BrandIcons";
import { profile } from "../data/profile";

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: profile.social.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "View on GitHub",
    href: profile.social.github,
    icon: GithubIcon,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-line dark:border-dark-line">
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-start">
          <SectionHeading
            eyebrow="Contact"
            title="Have a dataset that needs a story?"
            description="I'm open to full-time analyst roles and interesting freelance dashboards alike. The fastest way to reach me is email."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center justify-between gap-3 rounded-lg border border-line dark:border-dark-line bg-surface dark:bg-dark-surface px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-accent dark:hover:border-emerald-400 hover:shadow-lg hover:shadow-ink/5"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper-dim dark:bg-dark-bg text-ink dark:text-dark-ink group-hover:bg-accent-soft dark:group-hover:bg-emerald-400/10 group-hover:text-accent dark:group-hover:text-emerald-400 transition-colors">
                    <link.icon size={17} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted dark:text-dark-muted">
                      {link.label}
                    </p>
                    <p className="text-sm text-ink dark:text-dark-ink truncate">
                      {link.value}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-muted dark:text-dark-muted group-hover:text-accent dark:group-hover:text-emerald-400 transition-colors"
                />
              </a>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
