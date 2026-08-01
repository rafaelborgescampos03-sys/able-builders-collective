import { Reveal } from "./Reveal";

export function Sponsors() {
  return (
    <section id="patrocinadores" className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
      <div className="grid gap-8 md:grid-cols-2 md:items-end md:gap-16">
        <div>
          <Reveal className="eyebrow">Parcerias</Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-6 text-[clamp(2.2rem,5.2vw,4.2rem)] leading-[0.95]">
              Construa <span className="metal-text">com a ABLE.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Marcas que acreditam no futuro da comunidade ABLE têm espaço para
            crescerem junto. Se a sua empresa quer se conectar com jovens
            empreendedores, founders e builders, vamos conversar.
          </p>
          <a
            href="mailto:contato@ableecosystem.com?subject=Quero%20ser%20Founding%20Partner%20ABLE"
            className="mt-8 inline-block border border-champagne/60 px-8 py-4 text-[0.65rem] uppercase tracking-[0.24em] text-champagne transition-colors duration-300 hover:bg-champagne hover:text-primary-foreground"
          >
            Seja um Founding Partner ABLE
          </a>
        </Reveal>
      </div>
    </section>
  );
}
