import { COMMUNITY_URL } from "@/data/able";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section id="entrar" className="mx-auto max-w-[1400px] px-6 py-24 text-center md:px-10 md:py-36">
      <Reveal>
        <h2 className="display mx-auto max-w-5xl text-[clamp(2.2rem,7.5vw,6.5rem)]">
          You don't have to <span className="metal-text">build alone.</span>
        </h2>
      </Reveal>
      <Reveal delay={200} className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
        <a
          href="https://www.ableforms.org/"
          className="group inline-flex items-center gap-3 border-b border-champagne/70 pb-2 text-[0.7rem] uppercase tracking-[0.22em] text-champagne transition-colors duration-300 hover:text-foreground"
        >
          Entrar no Radar ABLE
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
        <a
          href={COMMUNITY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-champagne px-7 py-4 text-sm font-bold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-champagne/85"
        >
          Entre para a comunidade
        </a>
      </Reveal>
    </section>
  );
}
