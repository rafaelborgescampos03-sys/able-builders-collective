import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section id="entrar" className="mx-auto max-w-[1400px] px-6 py-36 text-center md:px-10 md:py-52">
      <Reveal>
        <h2 className="display mx-auto max-w-5xl text-[clamp(2.2rem,7.5vw,6.5rem)]">
          You don't have to <span className="metal-text">build alone.</span>
        </h2>
      </Reveal>
      <Reveal delay={120}>
        <p className="mx-auto mt-10 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
          Entre para uma comunidade de pessoas que estão construindo o próximo
          capítulo.
        </p>
      </Reveal>
      <Reveal delay={200}>
        <a
          href="mailto:hello@able.com.br?subject=Quero%20entrar%20na%20ABLE"
          className="mt-14 inline-block border border-champagne bg-champagne px-9 py-4 text-[0.65rem] uppercase tracking-[0.24em] text-primary-foreground transition-colors duration-300 hover:bg-transparent hover:text-champagne"
        >
          Entrar na ABLE
        </a>
      </Reveal>
    </section>
  );
}
