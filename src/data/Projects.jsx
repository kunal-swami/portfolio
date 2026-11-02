import { caseStudies, projects } from "../data/profile";

const pad = (n) => String(n).padStart(2, "0");

function SectionLabel({ children }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-400">
        {children}
      </h2>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}

function Tags({ items = [] }) {
  if (!items.length) return null;
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {items.map((t) => (
        <li
          key={t}
          className="rounded border border-white/10 px-2.5 py-1 font-mono text-xs text-zinc-400"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function Metrics({ items = [] }) {
  if (!items.length) return null;
  return (
    <p className="mt-4 flex flex-wrap gap-x-6 gap-y-1 font-mono text-sm text-zinc-200">
      {items.map((m) => (
        <span key={m.label}>
          <span className="font-semibold text-emerald-400">{m.value}</span>{" "}
          {m.label}
        </span>
      ))}
    </p>
  );
}

function Links({ items = [] }) {
  if (!items.length) return null;
  return (
    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
      {items.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="border-b border-zinc-300 font-mono text-sm text-zinc-100 hover:border-emerald-400 hover:text-emerald-300"
        >
          {l.label} ↗
        </a>
      ))}
    </div>
  );
}

// One numbered block. Number sits in a left column on md+ and above the title on mobile.
function Entry({ index, total, prefix, title, badge, lead, metrics, body, tags, links }) {
  return (
    <article className="grid gap-3 border-b border-white/10 py-9 first:pt-0 last:border-b-0 md:grid-cols-[110px_1fr] md:gap-8">
      <div className="font-mono text-sm text-zinc-500">
        <span>
          {prefix} {pad(index + 1)}
        </span>
        <span className="ml-2 text-xs text-zinc-600 md:ml-0 md:block md:pt-1">
          /{pad(total)}
        </span>
      </div>

      <div>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="text-xl font-semibold text-white md:text-2xl">{title}</h3>
          {badge && (
            <span className="rounded-full bg-emerald-950 px-3 py-1 font-mono text-xs uppercase tracking-wider text-emerald-400">
              {badge}
            </span>
          )}
        </div>

        {lead && <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-400">{lead}</p>}
        <Metrics items={metrics} />
        {body}
        <Tags items={tags} />
        <Links items={links} />
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-20">
      <SectionLabel>Product case studies &amp; PRDs</SectionLabel>
      <div className="mb-20">
        {caseStudies.map((c, i) => (
          <Entry
            key={c.id}
            index={i}
            total={caseStudies.length}
            prefix="Doc"
            title={c.title}
            badge={c.type}
            lead={c.context}
            metrics={c.metrics}
            body={
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-400">
                {c.contribution}
              </p>
            }
            tags={c.tags}
            links={c.links}
          />
        ))}
      </div>

      <SectionLabel>Projects</SectionLabel>
      <div>
        {projects.map((p, i) => (
          <Entry
            key={p.id}
            index={i}
            total={projects.length}
            prefix="Proj"
            title={p.title}
            badge={p.category}
            lead={p.description}
            metrics={p.outcomes}
            body={
              p.highlights?.length ? (
                <ul className="mt-5 max-w-3xl list-disc space-y-1.5 pl-5 text-base leading-relaxed text-zinc-400 marker:text-zinc-600">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              ) : null
            }
            tags={p.stack}
            links={p.links}
          />
        ))}
      </div>
    </section>
  );
}
