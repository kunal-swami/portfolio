import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="h-px w-8 bg-accent dark:bg-emerald-400" />
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent dark:text-emerald-400">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink dark:text-dark-ink text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted dark:text-dark-muted leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
