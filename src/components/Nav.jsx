import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import Container from "./ui/Container";
import ThemeToggle from "./ui/ThemeToggle";
import { nav, profile } from "../data/profile";
import { useScrollSpy } from "../hooks/useScrollSpy";

const navIds = nav.map((item) => item.id);

export default function Nav({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(navIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/85 dark:bg-dark-bg/85 backdrop-blur-md border-b border-line dark:border-dark-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Container className="flex items-center justify-between h-16">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "hero")}
          className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ink dark:bg-dark-ink text-paper dark:text-dark-bg text-xs">
            {profile.initials}
          </span>
          <span className="hidden sm:inline text-ink dark:text-dark-ink">
            {profile.name}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="relative px-4 py-2 font-mono text-xs tracking-[0.1em] uppercase text-muted dark:text-dark-muted hover:text-ink dark:hover:text-dark-ink transition-colors"
            >
              {item.label}
              {activeId === item.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute left-4 right-4 -bottom-[1px] h-[2px] bg-accent dark:bg-emerald-400"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            download
            className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.1em] uppercase border border-line dark:border-dark-line rounded-full px-4 py-2 text-ink dark:text-dark-ink hover:border-accent dark:hover:border-emerald-400 hover:text-accent dark:hover:text-emerald-400 transition-colors"
          >
            <Download size={13} /> Resume
          </a>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            className="md:hidden flex h-9 w-9 items-center justify-center text-ink dark:text-dark-ink"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-paper dark:bg-dark-bg border-b border-line dark:border-dark-line"
          >
            <Container className="flex flex-col py-3">
              {nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="py-3 font-mono text-sm uppercase tracking-[0.1em] text-ink dark:text-dark-ink border-b border-line/60 dark:border-dark-line/60 last:border-none"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={profile.resumeUrl}
                download
                className="mt-3 mb-1 inline-flex items-center justify-center gap-1.5 font-mono text-xs tracking-[0.1em] uppercase border border-line dark:border-dark-line rounded-full px-4 py-2.5 text-ink dark:text-dark-ink"
              >
                <Download size={13} /> Download Resume
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
