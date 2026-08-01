import { sessions } from "@/data/able";
import { Reveal } from "./Reveal";

export function Sessions() {
  const feature = sessions[0];
  const rest = sessions.slice(1);

  if (!feature) return null;


  return (
    <section id="conteudo" className="border-y border-border bg-graphite/30">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
        <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <Reveal className="eyebrow">Conteúdo</Reveal>
            <Reveal delay={80}>
              <h2 className="display mt-8 text-[clamp(2.2rem,7vw,5.5rem)]">
                CONTEÚDO
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              <span className="text-foreground">Conversas com quem está construindo.</span>{" "}
              Encontros e conteúdos com empreendedores, founders e líderes que já
              executaram — e continuam executando.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120} className="group mt-20 grid gap-10 md:grid-cols-[1.15fr_1fr] md:items-center">
          <div className="overflow-hidden border border-border">
            <img
              src={feature.image}
              alt={`${feature.guest} — ${feature.topic}`}
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
          </div>
          <div>
            <span className="text-[0.62rem] uppercase tracking-[0.3em] text-champagne-dim">
              {feature.episode}
            </span>
            <h3 className="display mt-6 text-[clamp(1.6rem,3.6vw,3rem)]">{feature.topic}</h3>
            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {feature.guest} — {feature.company}
            </p>
            <a
              href={feature.href}
              className="mt-10 inline-block border border-champagne/60 px-7 py-4 text-[0.65rem] uppercase tracking-[0.24em] text-champagne transition-colors duration-300 hover:bg-champagne hover:text-primary-foreground"
            >
              Assistir
            </a>
          </div>
        </Reveal>

        {rest.length > 0 && (
          <div className="mt-20 grid gap-px border border-border bg-border sm:grid-cols-2">
            {rest.map((session, i) => (
              <Reveal
                key={session.episode}
                delay={i * 100}
                className="group bg-background p-7 transition-colors duration-500 hover:bg-card"
              >
                <div className="overflow-hidden border border-border">
                  <img
                    src={session.image}
                    alt={`${session.guest} — ${session.topic}`}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="aspect-[3/2] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>
                <span className="mt-7 block text-[0.6rem] uppercase tracking-[0.3em] text-champagne-dim">
                  {session.episode}
                </span>
                <h3 className="display mt-4 text-xl transition-colors duration-500 group-hover:text-champagne">
                  {session.topic}
                </h3>
                <p className="mt-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {session.guest} — {session.company}
                </p>
                <a
                  href={session.href}
                  className="mt-7 inline-block text-[0.62rem] uppercase tracking-[0.24em] text-foreground transition-colors hover:text-champagne"
                >
                  Assistir
                </a>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
