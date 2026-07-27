import { motion } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import PanelCard from "./ui/PanelCard";
import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-line dark:border-dark-line">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="I like numbers that come with a next step attached."
          description="A short version of how I got here, and what I actually spend my days doing."
        />

        <div className="mt-14 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-xl border border-line dark:border-dark-line">
              <img
                src={profile.photo.portrait}
                alt={`Portrait of ${profile.name}`}
                className="w-full aspect-[4/5] object-cover grayscale-[15%] contrast-[1.03]"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 hidden sm:block rounded-lg border border-line dark:border-dark-line bg-surface dark:bg-dark-surface px-4 py-3 shadow-sm">
              <p className="font-mono text-[11px] text-muted dark:text-dark-muted">Based in</p>
              <p className="font-display text-sm font-semibold text-ink dark:text-dark-ink">
                {profile.location}
              </p>
            </div>
          </motion.div>

          <div>
            <div className="space-y-5 text-ink-soft dark:text-dark-muted leading-relaxed">
              {profile.bio.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            <div className="mt-9 grid sm:grid-cols-3 gap-3">
              {profile.aboutStats.map((stat, i) => (
                <PanelCard key={stat.label} delay={i * 0.08} className="px-4 py-4">
                  <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted dark:text-dark-muted">
                    {stat.label}
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold text-ink dark:text-dark-ink">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted dark:text-dark-muted">
                    {stat.note}
                  </p>
                </PanelCard>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
