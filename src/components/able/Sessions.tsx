import { mentors } from "@/data/able";
import { Reveal } from "./Reveal";

export function Sessions() {
  return (
    <section id="mentores" className="border-y border-border bg-graphite/30">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <Reveal>
          <h2 className="display text-[clamp(2rem,6vw,4.5rem)]">
            Nossos <span className="metal-text">mentores</span>
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Donos de grandes empresas que sentam com a gente, respondem as perguntas e contam o que já erraram.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((m, i) => (
            <Reveal
              key={m.name}
              delay={(i % 3) * 80}
              className="bg-background p-8 transition-colors duration-500 hover:bg-card md:p-10"
            >
              <p className="display text-2xl md:text-3xl">{m.name}</p>
              {(m.role || m.company) && (
                <p className="mt-3 text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground">
                  {[m.role, m.company].filter(Boolean).join(" · ")}
                </p>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={100} className="mt-12 flex justify-center">
          <a
            href="https://youtube.com/@able.ecosystem?si=hTYz8mpiSdxZ37rk"
            className="group inline-flex items-center gap-3 border-b border-champagne/70 pb-2 text-[0.7rem] uppercase tracking-[0.22em] text-champagne transition-colors duration-300 hover:text-foreground"
          >
            Confira nossos conteúdos
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
