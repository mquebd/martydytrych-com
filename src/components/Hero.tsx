import { FadeIn } from "./FadeIn";
import { Mail } from "lucide-react";

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

export function Hero() {
  return (
    <section className="flex min-h-screen items-center px-6 py-24">
      <div className="mx-auto w-full max-w-2xl">
        <FadeIn>
          <div className="mb-8 flex items-center gap-2 text-sm text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            <span>Currently building at Bolo AI · Speaking · Writing</span>
          </div>

          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Hi, I&rsquo;m{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Marty Dytrych</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-mint/70 md:bottom-2 md:h-4"
              />
            </span>
            .
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-foreground/90 md:text-xl">
            Industrial startup founder · Sales &amp; GTM · AI-powered operator.
          </p>

          <p className="mt-6 text-base leading-relaxed text-foreground/80 md:text-lg">
            {/* TODO: 2–3 sentence bio. Covers 15+ years industrial, IDL founder, Bolo AI,
                and what the through-line is. Written in Marty&rsquo;s voice — specific,
                grounded, zero buzzwords. */}
            Fifteen-plus years in heavy industry — valves, refineries, chemical
            plants, utilities — then founded Industrial Data Labs to bring AI
            into industrial sales workflows. Today, Director of Sales at Bolo AI,
            building AI agents for the plants and operators that keep the world
            running.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="https://www.linkedin.com/in/martydytrych/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-foreground/90"
            >
              <LinkedInMark className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="mailto:marty@martydytrych.com"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-foreground"
            >
              <Mail className="h-4 w-4" strokeWidth={2} />
              Email
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
