import { FadeIn } from "./FadeIn";

function LinkedInMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.451 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.355V9h3.414v1.561h.047c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.066 2.063 2.063 0 112.063 2.066zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function SubstackMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M22.539 8.242H1.46V5.406h21.08zM1.46 10.812V24L12 18.11 22.54 24V10.812zM22.54 0H1.46v2.836h21.08z" />
    </svg>
  );
}

const industries = [
  "Operators",
  "Midstream",
  "Petrochemical",
  "Refineries",
  "Power Generation & Utilities",
  "Industrial Distribution & Manufacturing",
];

export function Hero() {
  return (
    <section className="px-6 pt-12 pb-4 md:pt-16 md:pb-6">
      <div className="mx-auto w-full max-w-2xl">
        <FadeIn>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[12px] font-medium text-muted">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" />
            </span>
            <span>
              Currently building at Bolo AI · Speaking · Writing
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
            Hi, I&rsquo;m{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10">Marty Dytrych</span>
              <span
                aria-hidden
                className="absolute inset-x-[-2px] bottom-[5px] -z-0 h-2.5 bg-mint/70 md:bottom-[6px] md:h-3"
              />
            </span>
            .
          </h1>

          <p className="mt-6 text-xl leading-relaxed text-foreground/85 md:text-2xl">
            Building AI Agents that Pay for Themselves
          </p>
          <p className="mt-1.5 text-lg text-foreground/85 md:text-xl">
            Operator · Builder · Houston, TX
          </p>

          <div className="mt-8">
            <div className="mb-6 flex items-baseline gap-4">
              <span className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
                Industrial Focus
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {industries.map((name) => (
                <div
                  key={name}
                  className="rounded-lg border border-foreground/10 bg-background px-4 py-3 text-[14px] font-medium text-foreground/90"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-lg leading-relaxed text-foreground/85 md:text-xl">
            15+ years inside operations before bringing AI into them.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <a
              href="https://www.linkedin.com/in/martydytrych/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-1.5 text-[13px] font-medium text-background transition hover:bg-foreground/85"
            >
              <LinkedInMark className="h-3.5 w-3.5" />
              LinkedIn
            </a>
            <a
              href="https://thefrictionlayer.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-foreground/15 bg-background px-3.5 py-1.5 text-[13px] font-medium text-foreground/85 transition hover:border-foreground/40 hover:text-foreground"
            >
              <SubstackMark className="h-3 w-3" />
              Substack
            </a>
            <a
              href="https://x.com/Martydytrych"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-foreground/15 bg-background px-3.5 py-1.5 text-[13px] font-medium text-foreground/85 transition hover:border-foreground/40 hover:text-foreground"
            >
              <XMark className="h-3 w-3" />
              X
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
