import { motion } from "framer-motion";

// Illustrative upward trend — echoes the "10% MoM growth" story from the resume.
const bars = [38, 46, 42, 58, 54, 68, 64, 82, 78, 94];

export default function TrendChart({ className = "" }) {
  return (
    <div className={`flex items-end gap-[3px] h-16 ${className}`}>
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: i * 0.045,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`flex-1 rounded-[1.5px] ${
            i === bars.length - 1
              ? "bg-accent dark:bg-emerald-400"
              : "bg-accent/25 dark:bg-emerald-400/25"
          }`}
        />
      ))}
    </div>
  );
}
