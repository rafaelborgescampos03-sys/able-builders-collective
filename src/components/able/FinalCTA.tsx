import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section id="entrar" className="mx-auto max-w-[1400px] px-6 py-24 text-center md:px-10 md:py-36">
      <Reveal>
        <h2 className="display mx-auto max-w-5xl text-[clamp(2.2rem,7.5vw,6.5rem)]">
          You don't have to <span className="metal-text">build alone.</span>
        </h2>
      </Reveal>
      <Reveal delay={200}>
        <a
          href="https://www.ableforms.org/"
          className="group mt-10 inline-flex items-center gap-3 border-b border-champagne/70 pb-2 text-[0.7rem] uppercase tracking-[0.22em] text-champagne transition-colors duration-300 hover:text-foreground"
        >
          Entrar no Radar ABLE
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </Reveal>
    </section>
  );
}
