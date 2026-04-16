import { Section } from "./Section";

export function Marketing() {
  return (
    <Section kicker="Marketing" id="marketing">
      <div className="space-y-5 text-base leading-relaxed text-foreground/85 md:text-lg">
        <p>
          {/* TODO: Marty&rsquo;s specific POV on industrial marketing.
              The gap between marketing and sales in industrial companies,
              how to close it, content strategy and LinkedIn presence. */}
          Industrial marketing is usually disconnected from how industrial
          sales actually happens. Marketing ships logos and brochures; sales
          lives inside plants trying to answer technical questions that take
          weeks to surface. Closing that gap means putting marketing in the
          room — or at least in the CRM — and letting real customer questions
          drive the content.
        </p>
        <p>
          LinkedIn is where industrial buyers spend the little time they have
          online. The feed that works there isn&rsquo;t thought leadership —
          it&rsquo;s specificity. Problems named correctly. Numbers. The
          actual workflow, not the slide about the workflow.
        </p>
      </div>
    </Section>
  );
}
