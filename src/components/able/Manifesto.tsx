import ableLogo from "@/assets/able-logo-white.png.asset.json";

import { Reveal } from "./Reveal";

export function Manifesto() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pb-6 pt-4 md:px-10 md:pb-8 md:pt-6">
      <Reveal className="eyebrow">Manifesto</Reveal>

      <Reveal delay={80}>
        <h2 className="display mt-2 max-w-4xl text-[clamp(1.9rem,5.2vw,4.4rem)]">
          Great companies are built on{" "}
          <span className="metal-text">strong foundations.</span>
        </h2>
      </Reveal>

      <div className="mt-4 grid gap-6 md:grid-cols-[1fr_1.1fr] md:gap-10">
        <Reveal delay={140}>
          <div className="hairline" />
          <img
            src={ableLogo.url}
            alt="ABLE — Ambitious, Builders, Leaders, Ecosystem"
            loading="lazy"
            className="mt-2 w-full max-w-xs opacity-90"
          />
        </Reveal>


        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          <Reveal delay={180} as="p">
            A ABLE nasceu para aproximar pessoas que compartilham uma mesma
            característica: <span className="text-foreground">ambição para construir.</span>
          </Reveal>
          <Reveal delay={260} as="p">
            Não somos apenas uma comunidade. Somos um ambiente de conexão,
            aprendizado, experiências e execução.
          </Reveal>
          <Reveal delay={340} as="p" className="text-foreground">
            Porque grandes projetos não são construídos sozinhos.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
