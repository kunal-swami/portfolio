import { motion } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { experience } from "../data/profile";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 sm:py-32 border-t border-line dark:border-dark-line bg-paper-dim/50 dark:bg-dark-surface/20"
    >
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Where the numbers came from."
          description="Two roles, one thread — take raw data no one has time to look at, and turn it into something a team can act on this week."
        />

        <div className="mt-16 relative">
          <div className="absolute left-[15px] sm:left-[19px] top-2 bottom-2 w-px bg-line dark:bg-dark-line" />

          <div className="space-y-14">
            {experience.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-11 sm:pl-14"
              >
                <div className="absolute left-0 top-1 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-line dark:border-dark-line bg-surface dark:bg-dark-surface font-mono text-[11px] text-muted dark:text-dark-muted">
                  {String(experience.length - i).padStart(2, "0")}
                </div>

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink dark:text-dark-ink">
                    {job.role}
                    <span className="text-muted dark:text-dark-muted font-normal"> — {job.company}</span>
                  </h3>
                  {job.current && (
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-accent dark:text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent dark:bg-emerald-400" />
                      Current
                    </span>
                  )}
                </div>

                <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted dark:text-dark-muted">
                  <span>{job.period}</span>
                  <span>·</span>
                  <span>{job.location}</span>
                </div>

                <p className="mt-4 text-ink-soft dark:text-dark-muted max-w-2xl">
                  {job.summary}
                </p>

                <ul className="mt-4 space-y-2.5">
                  {job.highlights.map((h, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-sm text-ink-soft dark:text-dark-muted leading-relaxed"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60 dark:bg-emerald-400/60" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] rounded-full border border-line dark:border-dark-line px-3 py-1 text-ink-soft dark:text-dark-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
