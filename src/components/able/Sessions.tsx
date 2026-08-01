import { sessions } from "@/data/able";
import { ContentMarquee } from "./ContentMarquee";
import { Reveal } from "./Reveal";

export function Sessions() {
  const feature = sessions[0];
  const rest = sessions.slice(1);

  if (!feature) return null;


  return (
    <section id="conteudo" className="border-y border-border bg-graphite/30">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <Reveal className="eyebrow">Builders</Reveal>
            <Reveal delay={80}>
              <h2 className="display mt-6 text-[clamp(2.2rem,7vw,5.5rem)]">
                BUILDERS
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

        <ContentMarquee />

        <Reveal delay={100} className="mt-14 flex justify-center">
          <a
            href={feature.href}
            className="inline-block border border-champagne/60 px-7 py-4 text-[0.65rem] uppercase tracking-[0.24em] text-champagne transition-colors duration-300 hover:bg-champagne hover:text-primary-foreground"
          >
            Confira nossos conteúdos
          </a>
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
