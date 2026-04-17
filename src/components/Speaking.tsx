import { Section } from "./Section";
import { ExternalLink } from "lucide-react";

type Event = {
  name: string;
  times: number;
  note?: string;
  link?: string;
};

const events: Event[] = [
  { name: "AI in Distribution", times: 2 },
  { name: "Industrial Valve Summit", times: 2 },
  { name: "PIDX Annual Event", times: 2 },
  { name: "Valve World Americas", times: 1 },
  { name: "Gulf Coast Chemical Conference", times: 1 },
  { name: "SaaStock", times: 1 },
  { name: "eChem Expo", times: 1 },
];

export function Speaking() {
  return (
    <Section kicker="Speaking Engagements" id="speaking">
      <p className="mb-5 text-pretty text-base font-semibold tracking-tight text-foreground md:text-lg">
        Bringing the AI conversation from the boardroom to the plant floor.
      </p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {events.map((e) => {
          const Wrap: React.ElementType = e.link ? "a" : "div";
          const props = e.link
            ? {
                href: e.link,
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "group flex items-start justify-between gap-3 rounded-lg border border-foreground/10 bg-background px-4 py-3 transition hover:border-foreground/30 hover:bg-mint-soft/30",
              }
            : {
                className:
                  "flex items-start justify-between gap-3 rounded-lg border border-foreground/10 bg-background px-4 py-3",
              };

          return (
            <Wrap key={e.name} {...props}>
              <div className="min-w-0 flex-1">
                <div className="text-[14px] font-medium text-foreground/90">
                  {e.name}
                </div>
                {e.note && (
                  <div className="mt-0.5 text-[12px] text-muted">{e.note}</div>
                )}
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <span className="inline-flex h-6 min-w-[24px] items-center justify-center rounded-full bg-mint-soft px-1.5 text-[11px] font-medium text-foreground/80">
                  {e.times}×
                </span>
                {e.link && (
                  <ExternalLink
                    className="h-3 w-3 text-muted transition group-hover:text-foreground"
                    strokeWidth={1.75}
                  />
                )}
              </div>
            </Wrap>
          );
        })}
      </div>
    </Section>
  );
}
