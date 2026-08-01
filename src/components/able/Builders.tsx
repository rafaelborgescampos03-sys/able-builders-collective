import { builders } from "@/data/able";
import { Reveal } from "./Reveal";

export function Builders() {
  const builder = builders[0]!;

  return (
    <section id="builders" className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
      <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
        <div>
          <Reveal className="eyebrow">Founder</Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-8 text-[clamp(2.2rem,7vw,5.5rem)]">
              The <span className="metal-text">Builder</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={160}>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            A ABLE nasceu da convicção de que o futuro é construído por quem
            executa. Conheça quem está por trás do ecossistema.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 border border-border md:mt-20">
        <div className="grid md:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="relative aspect-[3/4] w-full overflow-hidden bg-muted md:aspect-auto">
            {builder.photo ? (
              <img
                src={builder.photo}
                alt={builder.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">
                Sem foto
              </div>
            )}
          </Reveal>

          <Reveal delay={120} className="flex flex-col justify-between p-8 md:p-12">
            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.26em] text-champagne-dim">
                {builder.role} — {builder.company}
              </p>
              <h3 className="display mt-4 text-3xl md:text-4xl">{builder.name}</h3>

              <div className="mt-8 space-y-5 text-sm text-muted-foreground">
                <p>
                  <span className="block text-[0.62rem] uppercase tracking-[0.2em] text-foreground/60">
                    Idade
                  </span>
                  {builder.age} anos
                </p>
                <p>
                  <span className="block text-[0.62rem] uppercase tracking-[0.2em] text-foreground/60">
                    Formação
                  </span>
                  {builder.education}
                </p>
                <p>
                  <span className="block text-[0.62rem] uppercase tracking-[0.2em] text-foreground/60">
                    Local
                  </span>
                  {builder.location}
                </p>
                <div>
                  <span className="block text-[0.62rem] uppercase tracking-[0.2em] text-foreground/60">
                    Founder of
                  </span>
                  <ul className="mt-2 space-y-1.5">
                    {builder.founded.map((company) => (
                      <li key={company} className="flex items-center gap-3 text-foreground/80">
                        <span className="text-champagne">—</span>
                        {company}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {builder.instagram ? (
              <a
                href={builder.instagram}
                className="mt-10 inline-block self-start border border-border px-7 py-4 text-[0.65rem] uppercase tracking-[0.24em] transition-colors duration-300 hover:border-champagne hover:text-champagne"
              >
                Instagram
              </a>
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
