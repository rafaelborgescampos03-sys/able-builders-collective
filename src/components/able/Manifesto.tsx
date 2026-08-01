import ableLogo from "@/assets/able-logo-f.png.asset.json";

import { Reveal } from "./Reveal";

export function Manifesto() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-14 md:px-10 md:pb-24 md:pt-20">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <Reveal delay={120}>
          <img
            src={ableLogo.url}
            alt="ABLE — Ambitious, Builders, Leaders, Ecosystem"
            loading="lazy"
            className="w-full max-w-[15rem] opacity-90 md:max-w-xs"
          />
        </Reveal>

        <Reveal delay={220} as="p" className="mt-10 text-base leading-relaxed text-muted-foreground md:text-lg">
          Uma comunidade de jovens que compartilham a mesma característica:{" "}
          <span className="text-foreground">ambição para construir.</span>
        </Reveal>

        <Reveal delay={300} className="mt-10">
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-champagne/60 to-transparent" />
        </Reveal>
      </div>
    </section>
  );
}
