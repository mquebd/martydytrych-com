import { Section } from "./Section";

type Status = "Active" | "Early stage" | "In development";

type Project = {
  name: string;
  role?: string;
  description: string;
  status: Status;
  accent?: "mint" | "orange";
};

const projects: Project[] = [
  {
    name: "Bolo AI",
    role: "Director of Sales",
    description: "Industrial AI agents for APM, EAM, and CMMS platforms.",
    status: "Active",
    accent: "mint",
  },
  {
    name: "Magnolia Station",
    description:
      "Premium gas station and c-store concept for affluent Houston suburbs.",
    status: "Early stage",
  },
  {
    name: "Family App",
    description:
      "/* TODO: one-line description of the family app project */ A shared app for coordinating the Dytrych household.",
    status: "In development",
  },
  {
    name: "American Industrial Sales Corp",
    description:
      "AI implementation playbooks for industrial sales teams. AISC references only.",
    status: "Active",
    accent: "orange",
  },
];

const statusStyles: Record<Status, string> = {
  Active: "bg-mint-soft text-foreground border-mint",
  "Early stage": "bg-background text-muted border-border",
  "In development": "bg-background text-muted border-border",
};

export function Projects() {
  return (
    <Section kicker="Current Projects" id="projects">
      <p className="mb-8 text-base leading-relaxed text-foreground/85 md:text-lg">
        What I&rsquo;m actively building. No consulting services listed — I&rsquo;m
        committed to Bolo AI.
      </p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className={`relative flex flex-col rounded-xl border border-border bg-background p-5 transition hover:border-foreground/30 ${
              p.accent === "mint"
                ? "before:absolute before:inset-y-5 before:left-0 before:w-[3px] before:rounded-r-full before:bg-mint"
                : p.accent === "orange"
                ? "before:absolute before:inset-y-5 before:left-0 before:w-[3px] before:rounded-r-full before:bg-orange"
                : ""
            }`}
          >
            <div className="mb-2 flex items-start justify-between gap-3">
              <h3 className="text-[15px] font-bold tracking-tight text-foreground">
                {p.name}
              </h3>
              <span
                className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${statusStyles[p.status]}`}
              >
                {p.status}
              </span>
            </div>
            {p.role && (
              <div className="mb-1 text-xs font-medium text-muted">
                {p.role}
              </div>
            )}
            <p className="text-sm leading-relaxed text-foreground/80">
              {p.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
