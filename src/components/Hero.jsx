import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Minus, Download, Mail } from "lucide-react";
import Container from "./ui/Container";
import PanelCard from "./ui/PanelCard";
import AnimatedNumber from "./ui/AnimatedNumber";
import TrendChart from "./ui/TrendChart";
import { profile } from "../data/profile";

const trendIcon = {
  up: <ArrowUpRight size={13} className="text-accent dark:text-emerald-400" />,
  down: <ArrowDownRight size={13} className="text-red-500" />,
  flat: <Minus size={13} className="text-muted dark:text-dark-muted" />,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 grid-texture opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

      <Container className="relative">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-10 items-center">
          {/* Left: thesis */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-line dark:border-dark-line bg-surface dark:bg-dark-surface px-3.5 py-1.5 mb-7"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-ink-soft dark:text-dark-muted">
                Currently {profile.currentRole.title} @ {profile.currentRole.company}
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-[2.6rem] leading-[1.06] sm:text-6xl sm:leading-[1.05] font-semibold text-ink dark:text-dark-ink text-balance"
            >
              {profile.name.split(" ")[0]}, translating data
              <br className="hidden sm:block" /> into
              <span className="relative inline-block px-1.5">
                <span className="relative z-10"> decisions.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-x-0 bottom-1 h-[0.4em] bg-accent-soft dark:bg-emerald-400/15 origin-left -z-0"
                />
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-lg text-base sm:text-lg text-muted dark:text-dark-muted leading-relaxed"
            >
              {profile.tagline} Currently a{" "}
              <span className="text-ink dark:text-dark-ink font-medium">
                {profile.role}
              </span>{" "}
              based in {profile.location}.
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 rounded-full bg-ink dark:bg-dark-ink text-paper dark:text-dark-bg px-6 py-3 font-mono text-xs tracking-[0.1em] uppercase transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/10"
              >
                <Mail size={14} /> Get in touch
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-line dark:border-dark-line px-6 py-3 font-mono text-xs tracking-[0.1em] uppercase text-ink dark:text-dark-ink transition-colors hover:border-accent dark:hover:border-emerald-400 hover:text-accent dark:hover:text-emerald-400"
              >
                <Download size={14} /> Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Right: signature dashboard panel */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <PanelCard label="profile_overview.dash" tag="● LIVE">
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-4">
                  <img
                    src={profile.photo.square}
                    alt={profile.name}
                    className="h-16 w-16 rounded-lg object-cover border border-line dark:border-dark-line"
                  />
                  <div>
                    <p className="font-display font-semibold text-ink dark:text-dark-ink">
                      {profile.name}
                    </p>
                    <p className="font-mono text-xs text-muted dark:text-dark-muted mt-0.5">
                      {profile.role}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {profile.heroStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-md border border-line dark:border-dark-line px-3 py-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-lg sm:text-xl font-semibold text-ink dark:text-dark-ink">
                          <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                        </span>
                        {trendIcon[stat.trend]}
                      </div>
                      <p className="mt-1 text-[11px] leading-tight text-muted dark:text-dark-muted">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted dark:text-dark-muted">
                      Revenue impact trend
                    </span>
                    <span className="font-mono text-[11px] text-accent dark:text-emerald-400">
                      +10% MoM
                    </span>
                  </div>
                  <TrendChart />
                </div>
              </div>
            </PanelCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
