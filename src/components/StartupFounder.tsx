import { Section } from "./Section";

export function StartupFounder() {
  return (
    <Section kicker="Startup Founder" id="founder">
      <h2 className="mb-3 text-2xl font-bold tracking-tight md:text-3xl">
        Industrial Data Labs
      </h2>
      <p className="mb-6 text-base leading-relaxed text-foreground/85 md:text-lg">
        {/* TODO: IDL story — what was built, who it served, what was learned.
            Short narrative paragraph + 2–3 key proof points below. */}
        Founded Industrial Data Labs to build fine-tuned AI for industrial
        distributors and manufacturers — the companies where vanilla GPT answers
        are wrong more often than right. Productized a system that turns
        eight-hour bill-of-material workflows into two-minute ones, with
        accuracy that matters in markets where a wrong part number can shut
        down a plant.
      </p>
      <ul className="space-y-3 border-l border-border pl-5 text-[15px] text-foreground/85">
        <li>
          <span className="font-semibold text-foreground">8 hrs → 2 min</span>{" "}
          bill-of-material response time at Ameren (SF6 gas).
        </li>
        <li>
          <span className="font-semibold text-foreground">93% accuracy</span>{" "}
          on fine-tuned valve models vs. 46% on vanilla GPT-4.
        </li>
        <li>
          <span className="font-semibold text-foreground">
            Hitachi Lumada deployment
          </span>{" "}
          and partnerships with GE Vernova &amp; AWS.
        </li>
      </ul>
    </Section>
  );
}
