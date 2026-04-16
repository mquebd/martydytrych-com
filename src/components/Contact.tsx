import { Section } from "./Section";

export function Contact() {
  return (
    <Section kicker="Contact" id="contact" className="pb-28 md:pb-32">
      <p className="text-base leading-relaxed text-foreground/85 md:text-lg">
        Best way to reach me is{" "}
        <a
          href="https://www.linkedin.com/in/martydytrych/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-foreground underline decoration-mint decoration-[2px] underline-offset-[5px] transition hover:decoration-foreground"
        >
          LinkedIn
        </a>{" "}
        or{" "}
        <a
          href="mailto:marty@martydytrych.com"
          className="font-semibold text-foreground underline decoration-mint decoration-[2px] underline-offset-[5px] transition hover:decoration-foreground"
        >
          marty@martydytrych.com
        </a>
        .
      </p>
    </Section>
  );
}
