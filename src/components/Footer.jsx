import Container from "./ui/Container";
import { profile, nav } from "../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line dark:border-dark-line py-10">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted dark:text-dark-muted">
          © {year} {profile.name}. Built from scratch, not a template.
        </p>
        <div className="flex items-center gap-5">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-mono text-xs uppercase tracking-[0.08em] text-muted dark:text-dark-muted hover:text-ink dark:hover:text-dark-ink transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
