import { Section } from "./Section";
import {
  Bot,
  Layers,
  Send,
  Mail,
  Eye,
  NotebookPen,
  Workflow,
  Database,
  Radar,
  UserSearch,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Tool = {
  name: string;
  job: string;
  icon: LucideIcon;
};

const tools: Tool[] = [
  { name: "Claude (CoWork)", job: "Second brain, writing partner, system builder", icon: Bot },
  { name: "Clay", job: "Enrichment, ICP list building, personalization at scale", icon: Layers },
  { name: "HeyReach", job: "LinkedIn outreach across multiple senders", icon: Send },
  { name: "Instantly", job: "Cold email at volume with built-in warmup", icon: Mail },
  { name: "RB2B", job: "Website visitor ID — name + LinkedIn to Slack", icon: Eye },
  { name: "Granola", job: "Meeting notes and post-call processing", icon: NotebookPen },
  { name: "HubSpot", job: "CRM — pipeline, deal tracking, sequences", icon: Workflow },
  { name: "Notion", job: "Knowledge base and operating system", icon: Database },
  { name: "LinkedIn Sales Nav", job: "Prospecting signals and buying triggers", icon: Radar },
  { name: "Apollo", job: "Lead database and sequencing", icon: UserSearch },
];

export function AiTools() {
  return (
    <Section kicker="AI Tools Stack" id="tools">
      <p className="mb-8 text-base leading-relaxed text-foreground/85 md:text-lg">
        The actual tools I use every day — and what job each one does. Not a
        logo wall.
      </p>
      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {tools.map(({ name, job, icon: Icon }) => (
          <li
            key={name}
            className="group flex items-start gap-3 rounded-lg border border-border bg-background px-4 py-3 transition hover:border-foreground/30 hover:bg-mint-soft/40"
          >
            <Icon
              className="mt-0.5 h-4 w-4 shrink-0 text-foreground/70 group-hover:text-foreground"
              strokeWidth={1.75}
            />
            <div className="min-w-0">
              <div className="text-sm font-semibold text-foreground">
                {name}
              </div>
              <div className="text-xs leading-snug text-muted">{job}</div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
