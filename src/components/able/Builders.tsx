import { builders } from "@/data/able";
import { Reveal } from "./Reveal";

export function Builders() {
  const builder = builders[0]!;

  return (
    <section id="the-builder" className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
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
        <div className="grid md:grid-cols-[0.55fr_1.45fr]">
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

          <Reveal delay={120} className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.26em] text-champagne-dim">
                {builder.role} — {builder.company}
              </p>
              <h3 className="display mt-3 text-3xl md:text-5xl lg:text-6xl">{builder.name}</h3>

              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                <p>
                  <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-foreground/60">
                    Idade
                  </span>
                  <span className="text-base text-muted-foreground md:text-lg">
                    {builder.age} anos
                  </span>
                </p>
                <p className="sm:col-span-2">
                  <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-foreground/60">
                    Formação
                  </span>
                  <span className="text-base text-muted-foreground md:text-lg">
                    {builder.education}
                  </span>
                </p>
                <p>
                  <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-foreground/60">
                    Local
                  </span>
                  <span className="text-base text-muted-foreground md:text-lg">
                    {builder.location}
                  </span>
                </p>
                <div className="sm:col-span-2">
                  <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-foreground/60">
                    Founder of
                  </span>
                  <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-1">
                    {builder.founded.map((company) => (
                      <li key={company} className="flex items-center gap-2 text-base text-foreground/80 md:text-lg">
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
                className="mt-8 inline-block self-start border border-border px-7 py-3.5 text-[0.65rem] uppercase tracking-[0.24em] transition-colors duration-300 hover:border-champagne hover:text-champagne"
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
