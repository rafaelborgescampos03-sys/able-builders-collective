import { Reveal } from "./Reveal";

export function Sponsors() {
  return (
    <section
      id="patrocinadores"
      className="mx-auto max-w-[1400px] px-6 py-20 text-center md:px-10 md:py-28"
    >
      <Reveal>
        <h2 className="display mx-auto max-w-3xl text-[clamp(2rem,5vw,4rem)] leading-[0.95]">
          Construa <span className="metal-text">com a ABLE.</span>
        </h2>
      </Reveal>
      <Reveal delay={120}>
        <a
          href="mailto:contato@ableecosystem.com?subject=Quero%20ser%20Founding%20Partner%20ABLE"
          className="group mt-10 inline-flex items-center gap-3 border-b border-champagne/70 pb-2 text-[0.7rem] uppercase tracking-[0.22em] text-champagne transition-colors duration-300 hover:text-foreground"
        >
          Seja um Founding Partner ABLE
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </Reveal>
    </section>
  );
}
