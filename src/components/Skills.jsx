import { motion } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import PanelCard from "./ui/PanelCard";
import { skillGroups, certifications, education } from "../data/profile";
import { GraduationCap, Award } from "lucide-react";

const levelWidth = {
  Experienced: "92%",
  Intermediate: "62%",
  Basic: "35%",
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 sm:py-32 border-t border-line dark:border-dark-line bg-paper-dim/50 dark:bg-dark-surface/20"
    >
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="The toolkit, honestly rated."
          description="Levels are self-assessed and blunt on purpose — 'Intermediate' means I'm productive but still learning, not that I've mastered it."
        />

        <div className="mt-14 grid lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <PanelCard key={group.id} label={group.title} delay={gi * 0.1} className="p-5 sm:p-6">
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-ink dark:text-dark-ink">{skill.name}</span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted dark:text-dark-muted">
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-1 rounded-full bg-line dark:bg-dark-line overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: levelWidth[skill.level] }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full bg-accent dark:bg-emerald-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </PanelCard>
          ))}
        </div>

        {/* Education + Certifications */}
        <div className="mt-6 grid md:grid-cols-2 gap-5">
          <PanelCard label="Education" className="p-5 sm:p-6">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-indigo-soft dark:bg-indigo/20 text-indigo dark:text-indigo-200">
                <GraduationCap size={20} />
              </div>
              <div>
                <p className="font-display font-semibold text-ink dark:text-dark-ink">
                  {education.degree}
                </p>
                <p className="text-sm text-ink-soft dark:text-dark-muted mt-0.5">
                  {education.institution}
                </p>
                <p className="font-mono text-xs text-muted dark:text-dark-muted mt-2">
                  {education.period} · {education.score}
                </p>
              </div>
            </div>
          </PanelCard>

          <PanelCard label="Certifications" className="p-5 sm:p-6">
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold-soft dark:bg-gold/20 text-gold dark:text-amber-300">
                    <Award size={19} />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-ink dark:text-dark-ink leading-snug">
                      {cert.title}
                    </p>
                    <p className="text-xs text-muted dark:text-dark-muted mt-0.5">
                      {cert.issuer} — {cert.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </PanelCard>
        </div>
      </Container>
    </section>
  );
}
