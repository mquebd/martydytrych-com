import { Section } from "./Section";
import { ArrowUpRight } from "lucide-react";

type Article = {
  title: string;
  publication: string;
  date?: string;
  link?: string;
};

const articles: Article[] = [
  {
    title:
      "Navigating the AI Landscape in the Valve Manufacturing and Distribution Market: Focus on Bill of Material Procurement and Response",
    publication: "Valve World Americas",
    date: "Sep 25, 2023",
    link: "https://valve-world-americas.com/navigating-the-ai-landscape-in-the-valve-manufacturing-and-distribution-market-focus-on-bill-of-material-procurement-and-response/",
  },
  {
    title:
      "Large Language Models versus Fine-Tuned Market Models: A Technical Deep Dive in the Context of Valves",
    publication: "Valve World Americas",
    link: "https://valve-world-americas.com/large-language-models-versus-fine-tuned-market-models-a-technical-deep-dive-in-the-context-of-valves/",
  },
  {
    title:
      "Embracing AI in Wholesale Distribution: A Practical Guide for Distributors",
    publication: "The Wholesaler (PHCPPros)",
    link: "https://www.phcppros.com/articles/19067-embracing-ai-in-wholesale-distribution-a-practical-guide-for-distributors",
  },
  {
    title:
      "Houston's Workforce Is at a Crossroads of Industry Challenges and AI Opportunities",
    publication: "Innovation Map",
    link: "https://houston.innovationmap.com/houston-workforce-ai-marty-dytrych-guest-column-2665787665.html",
  },
  {
    // TODO: second Wholesaler article — title and link
    title: "Second Wholesaler feature — title TBD",
    publication: "The Wholesaler (PHCPPros)",
  },
];

export function Articles() {
  return (
    <Section kicker="Articles & Writing" id="articles">
      <ul className="divide-y divide-border border-y border-border">
        {articles.map((a, idx) => {
          const Wrap: React.ElementType = a.link ? "a" : "div";
          const props = a.link
            ? {
                href: a.link,
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "group flex items-start justify-between gap-4 py-5 transition hover:text-foreground",
              }
            : { className: "flex items-start justify-between gap-4 py-5 opacity-70" };

          return (
            <li key={idx}>
              <Wrap {...props}>
                <div className="min-w-0 flex-1">
                  <div className="text-[15px] font-semibold leading-snug text-foreground">
                    {a.title}
                  </div>
                  <div className="mt-1 text-xs text-muted">
                    {a.publication}
                    {a.date ? ` · ${a.date}` : ""}
                  </div>
                </div>
                {a.link && (
                  <ArrowUpRight
                    className="mt-0.5 h-4 w-4 shrink-0 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                    strokeWidth={1.75}
                  />
                )}
              </Wrap>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
