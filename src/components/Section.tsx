import { FadeIn } from "./FadeIn";

type Props = {
  kicker: string;
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ kicker, id, children, className = "" }: Props) {
  return (
    <section id={id} className={`py-6 md:py-8 ${className}`}>
      <div className="mx-auto w-full max-w-2xl px-6">
        <FadeIn>
          <div className="mb-8 flex items-baseline gap-4">
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
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
