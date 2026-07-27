import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import PanelCard from "./ui/PanelCard";
import { projects } from "../data/profile";

function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);

  return (
    <PanelCard delay={index * 0.08} label={`0${index + 1} / project`} tag={project.category} className="flex flex-col">
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="font-display text-lg sm:text-xl font-semibold text-ink dark:text-dark-ink text-balance">
          {project.title}
        </h3>
        <p className="mt-3 text-sm text-ink-soft dark:text-dark-muted leading-relaxed">
          {project.description}
        </p>

        <button
          onClick={() => setOpen((v) => !v)}
          className="mt-4 inline-flex items-center gap-1.5 self-start font-mono text-[11px] tracking-[0.1em] uppercase text-accent dark:text-emerald-400"
        >
          {open ? "Hide details" : "What I did"}
          <ChevronDown
            size={13}
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <ul className="mt-3 space-y-2 pt-1">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex gap-2.5 text-[13px] text-ink-soft dark:text-dark-muted leading-relaxed"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/60 dark:bg-emerald-400/60" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto pt-5 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="font-mono text-[11px] rounded-full bg-paper-dim dark:bg-dark-bg px-2.5 py-1 text-ink-soft dark:text-dark-muted"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </PanelCard>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-line dark:border-dark-line">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected analysis work."
          description="A few projects that show how I approach a dataset — clean it, question it, then explain what it means."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
