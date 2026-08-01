import { Reveal } from "./Reveal";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

/** Depoimentos — por enquanto apenas um exemplo fictício, como base. */
const testimonials: Testimonial[] = [
  {
    quote:
      "Entrei sem esperar muito e saí com três conexões que realmente mudaram o meu jogo. O nível das conversas é diferente: gente construindo de verdade, sem palco e sem discurso pronto.",
    name: "Marina Duarte",
    role: "Founder | Depoimento fictício",
    initials: "MD",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="border-y border-border bg-graphite/20">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <Reveal className="eyebrow">Depoimentos</Reveal>

        <Reveal delay={80}>
          <h2 className="display mt-6 max-w-3xl text-[clamp(2.2rem,6.5vw,5rem)] leading-[0.95]">
            O QUE NOSSOS{" "}
            <span className="font-serif italic font-normal normal-case tracking-normal text-champagne">
              convidados
            </span>{" "}
            FALAM
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={140 + i * 100}
              className="flex flex-col justify-between border border-border bg-background/60 p-8 transition-colors duration-500 hover:border-champagne/40 md:p-10"
            >
              <div>
                <span
                  aria-hidden
                  className="block font-serif text-5xl leading-none text-muted-foreground/40"
                >
                  &rdquo;
                </span>
                <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                  {t.quote}
                </p>
              </div>

              <div className="mt-10 flex items-center gap-4 border-t border-border pt-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-champagne/30 text-[0.7rem] tracking-[0.16em] text-champagne">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm uppercase tracking-[0.16em] text-foreground">
                    {t.name}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {t.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
