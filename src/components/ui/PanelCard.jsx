import { motion } from "framer-motion";

/**
 * PanelCard — the site's signature visual unit.
 * Styled like a BI dashboard panel: thin border, small mono label
 * strip along the top, generous internal padding.
 */
export default function PanelCard({
  label,
  tag,
  children,
  className = "",
  delay = 0,
  as: Component = motion.div,
}) {
  return (
    <Component
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay }}
      className={`group relative rounded-lg border border-line dark:border-dark-line bg-surface dark:bg-dark-surface transition-colors duration-300 hover:border-line-strong dark:hover:border-dark-muted/40 ${className}`}
    >
      {(label || tag) && (
        <div className="flex items-center justify-between border-b border-line dark:border-dark-line px-4 py-2.5">
          {label && (
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted dark:text-dark-muted">
              {label}
            </span>
          )}
          {tag && (
            <span className="font-mono text-[11px] tracking-[0.1em] text-accent dark:text-emerald-400">
              {tag}
            </span>
          )}
        </div>
      )}
      {children}
    </Component>
  );
}
