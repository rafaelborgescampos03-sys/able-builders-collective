import { ContentMarquee } from "./ContentMarquee";
import { Reveal } from "./Reveal";

export function Sessions() {
  return (
    <section id="conteudo" className="border-y border-border bg-graphite/30">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <Reveal>
          <h2 className="display text-[clamp(2rem,6vw,4.5rem)]">BUILDERS</h2>
        </Reveal>

        <ContentMarquee />

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
