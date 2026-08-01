import { Reveal } from "./Reveal";

/** Depoimentos — por enquanto apenas um exemplo fictício, como base. */
const testimonials = [
  {
    quote:
      "Saí com três conexões que mudaram o meu jogo. Gente construindo de verdade.",
    name: "Marina Duarte",
    role: "Founder",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="border-y border-border bg-graphite/20">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <p className="font-serif text-[clamp(1.3rem,3.2vw,2.2rem)] italic leading-snug text-foreground">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-8 text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
                {t.name} — {t.role}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
