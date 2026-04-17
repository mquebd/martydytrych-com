import { Section } from "./Section";
import { ArrowUpRight } from "lucide-react";

type Article = {
  title: string;
  publication: string;
  link?: string;
};

const articles: Article[] = [
  {
    title:
      "Navigating the AI Landscape in Valve Manufacturing and Distribution",
    publication: "Valve World Americas",
    link: "https://valve-world-americas.com/navigating-the-ai-landscape-in-the-valve-manufacturing-and-distribution-market-focus-on-bill-of-material-procurement-and-response/",
  },
  {
    title:
      "LLMs vs. Fine-Tuned Market Models: A Technical Deep Dive in Valves",
    publication: "Valve World Americas",
    link: "https://valve-world-americas.com/large-language-models-versus-fine-tuned-market-models-a-technical-deep-dive-in-the-context-of-valves/",
  },
  {
    title: "Embracing AI in Wholesale Distribution: A Practical Guide",
    publication: "The Wholesaler (PHCPPros)",
    link: "https://www.phcppros.com/articles/19067-embracing-ai-in-wholesale-distribution-a-practical-guide-for-distributors",
  },
  {
    title:
      "Houston's Workforce at a Crossroads of Industry Challenges and AI",
    publication: "Innovation Map",
    link: "https://houston.innovationmap.com/houston-workforce-ai-marty-dytrych-guest-column-2665787665.html",
  },
];

export function Articles() {
  return (
    <Section kicker="Articles & Writing" id="articles">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {articles.map((a, idx) => {
          const Wrap: React.ElementType = a.link ? "a" : "div";
          const props = a.link
            ? {
                href: a.link,
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "group flex h-full flex-col justify-between gap-3 rounded-lg border border-foreground/10 bg-background p-4 transition hover:border-foreground/30 hover:bg-mint-soft/30",
              }
            : {
                className:
                  "flex h-full flex-col justify-between gap-3 rounded-lg border border-foreground/10 bg-background p-4 opacity-70",
              };

          return (
            <Wrap key={idx} {...props}>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1 text-[14px] font-medium leading-snug text-foreground/90">
                  {a.title}
                </div>
                {a.link && (
                  <ArrowUpRight
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                    strokeWidth={1.75}
                  />
                )}
              </div>
              <div className="text-[12px] text-muted">{a.publication}</div>
            </Wrap>
          );
        })}
      </div>
    </Section>
  );
}
