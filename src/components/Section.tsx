import { FadeIn } from "./FadeIn";

type Props = {
  kicker: string;
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ kicker, id, children, className = "" }: Props) {
  return (
    <section id={id} className={`px-6 py-6 md:py-8 ${className}`}>
      <div className="mx-auto w-full max-w-2xl">
        <FadeIn>
          <div className="mb-8 flex items-baseline gap-4">
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
              {kicker}
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>
          {children}
        </FadeIn>
      </div>
    </section>
  );
}
