import { Section } from "./Section";

const industries = [
  {
    name: "Petrochemical & Chemical Manufacturing",
    note: "Specification-driven procurement, batch control, long sales cycles",
  },
  {
    name: "Power Generation & Utilities",
    note: "SF6, transmission equipment, regulatory-heavy workflows",
  },
  {
    name: "Downstream Refineries",
    note: "Turnaround planning, MRO purchasing, severe-service valves",
  },
  {
    name: "Midstream & Pipeline",
    note: "Compression, measurement, long-distance asset management",
  },
  { name: "Metals & Mining", note: "Heavy-duty OEM parts and wear components" },
  {
    name: "Industrial Distribution",
    note: "Multi-branch inventory, quoting speed, BOM accuracy",
  },
  {
    name: "Independent O&G Operators",
    note: "Lean teams buying against tight capex windows",
  },
];

export function Industries() {
  return (
    <Section kicker="Industries Solved For" id="industries">
      <p className="mb-8 text-base leading-relaxed text-foreground/85 md:text-lg">
        Industries where I&rsquo;ve embedded AI or sold deep — and the kind of
        problem that actually matters there.
      </p>
      <ul className="divide-y divide-border border-y border-border">
        {industries.map((i) => (
          <li key={i.name} className="py-4">
            <div className="text-[15px] font-semibold text-foreground">
              {i.name}
            </div>
            <div className="mt-1 text-sm text-muted">{i.note}</div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
