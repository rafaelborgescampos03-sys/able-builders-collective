import { builders } from "@/data/able";
import { AbleMark } from "./Logo";
import { Reveal } from "./Reveal";

export function Builders() {
  return (
    <section id="builders" className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
      <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
        <div>
          <Reveal className="eyebrow">Membros</Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-8 text-[clamp(2.2rem,7vw,5.5rem)]">
              The <span className="metal-text">Builders</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={160}>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            A comunidade é formada por pessoas que estão construindo empresas,
            projetos, marcas, carreiras e futuros. Cada nome aqui responde por
            algo que está de pé.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-6 md:mt-20">
        {builders.map((builder, i) => (
          <Reveal
            key={builder.name}
            delay={i * 90}
            className="group flex w-full flex-col justify-between border border-border bg-background p-7 transition-colors duration-500 hover:bg-card sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] lg:max-w-sm"
            style={{ minHeight: "14rem" }}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="text-[0.6rem] uppercase tracking-[0.26em] text-champagne-dim">
                {builder.category}
              </span>
              <AbleMark className="h-4 text-muted-foreground opacity-40 transition-opacity duration-500 group-hover:text-champagne group-hover:opacity-100" />
            </div>

            <div>
              <h3 className="display text-2xl transition-colors duration-500 group-hover:text-champagne">
                {builder.name}
              </h3>
              <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {builder.role} — {builder.company}
              </p>

              {builder.instagram ? (
                <a
                  href={builder.instagram}
                  className="mt-6 inline-block text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-champagne"
                >
                  Instagram
                </a>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} className="mt-12">
        <a
          href="#entrar"
          className="inline-block border border-border px-7 py-4 text-[0.65rem] uppercase tracking-[0.24em] transition-colors duration-300 hover:border-champagne hover:text-champagne"
        >
          Candidatar-se
        </a>
      </Reveal>
    </section>
  );
}
