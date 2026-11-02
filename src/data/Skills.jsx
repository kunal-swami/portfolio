import { skillGroups } from "../data/profile";

// Section heading with a trailing divider, shared look with Projects.
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

export default function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-20">
      <SectionLabel>Skills</SectionLabel>

      <div className="space-y-9">
        {skillGroups.map((group) => (
          <div key={group.id}>
            <h3 className="mb-3 font-mono text-sm text-zinc-500">{group.title}</h3>
            <ul className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-3.5 py-2 font-mono text-sm text-zinc-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
