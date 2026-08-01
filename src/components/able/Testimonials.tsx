import { Reveal } from "./Reveal";

/** Depoimentos — por enquanto apenas exemplos fictícios, como base. */
const testimonials = [
  {
    quote:
      "Saí com três conexões que mudaram o meu jogo. Gente construindo de verdade.",
    name: "Marina Duarte",
    role: "Founder",
  },
  {
    quote:
      "Nível de conversa que você não encontra em evento aberto. Direto ao ponto.",
    name: "Bruno Alencar",
    role: "CEO",
  },
  {
    quote: "Um ambiente raro: todo mundo ali está executando algo.",
    name: "Letícia Prado",
    role: "Investidora",
  },
];

export function Testimonials() {
  const track = [...testimonials, ...testimonials];

  return (
    <section id="depoimentos" className="border-y border-border bg-graphite/20">
      <div className="py-20 md:py-28">
        <Reveal>
          <div className="marquee">
            <div className="marquee-track marquee-slow">
              {track.map((t, i) => (
                <figure
                  key={`${t.name}-${i}`}
                  className="w-[78vw] shrink-0 border border-border bg-background/50 p-8 sm:w-[420px] md:p-10"
                >
                  <blockquote className="text-base leading-relaxed text-foreground md:text-lg">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-8 text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">
                    {t.name} — {t.role}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
