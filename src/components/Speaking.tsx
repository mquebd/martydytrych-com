import { Section } from "./Section";

type Event = {
  name: string;
  times: number;
  note?: string;
  link?: string;
};

const events: Event[] = [
  { name: "AI in Distribution", times: 2 },
  {
    name: "Industrial Valve Summit — Bergamo, Italy",
    times: 2,
    note: "International",
  },
  { name: "PIDX Annual Event", times: 2 },
  {
    name: "Valve World Americas",
    times: 1,
    link: "https://valveworldexpoamericas.com/2023-valve-world-americas-conference-speakers/",
  },
  { name: "Gulf Coast Chemical Conference", times: 1 },
  { name: "SaaStock", times: 1, note: "Panel + Speaker" },
  { name: "eChem Expo", times: 1 },
];

export function Speaking() {
  return (
    <Section kicker="Speaking Engagements" id="speaking">
      <p className="mb-8 text-base leading-relaxed text-foreground/85 md:text-lg">
        Speaking about AI in industrial operations since 2023. Seven events,
        including two international appearances in Bergamo.
      </p>
      <ul className="space-y-0">
        {events.map((e) => (
          <li
            key={e.name}
            className="group relative flex items-start gap-4 border-b border-border py-4 last:border-b-0"
          >
            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                {e.link ? (
                  <a
                    href={e.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] font-semibold text-foreground underline decoration-border decoration-[1.5px] underline-offset-[5px] transition hover:decoration-mint"
                  >
                    {e.name}
                  </a>
                ) : (
                  <span className="text-[15px] font-semibold text-foreground">
                    {e.name}
                  </span>
                )}
                <span className="text-xs font-medium text-muted">
                  {e.times}× {e.note ? `· ${e.note}` : ""}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
