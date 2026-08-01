import { useEffect, useState } from "react";

import heroImage from "@/assets/hero.jpg";
import { Reveal } from "./Reveal";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(Math.min(window.scrollY, 700) * 0.08);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative flex min-h-[85svh] items-end overflow-hidden">
      <img
        src={heroImage}
        alt="Composição arquitetônica abstrata em preto com linhas douradas"
        width={1920}
        height={1200}
        className="absolute inset-0 h-full w-full scale-105 object-cover opacity-70"
        style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.06)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-6 pt-36 md:px-10 md:pb-8">
        <Reveal className="eyebrow">Goiânia • Brasil</Reveal>

        <Reveal delay={100}>
          <h1 className="display mt-8 text-[clamp(2.9rem,11vw,9.5rem)]">
            Building
            <br />
            the <span className="metal-text">future.</span>
          </h1>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <Reveal delay={200} className="max-w-md">
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Uma comunidade para quem não espera o futuro acontecer.
              <span className="block text-foreground">Constrói.</span>
            </p>
          </Reveal>

          <Reveal delay={300} className="flex flex-wrap items-center gap-4">
            <a
              href="#entrar"
              className="border border-champagne bg-champagne px-7 py-4 text-[0.65rem] uppercase tracking-[0.24em] text-primary-foreground transition-colors duration-300 hover:bg-transparent hover:text-champagne"
            >
              Quero fazer parte
            </a>
            <a
              href="#ecossistema"
              className="border border-border px-7 py-4 text-[0.65rem] uppercase tracking-[0.24em] text-foreground transition-colors duration-300 hover:border-champagne hover:text-champagne"
            >
              Conheça a ABLE
            </a>
          </Reveal>
        </div>

        <Reveal delay={400} className="mt-10">
          <div className="hairline" />
          <p className="mt-3 text-[0.62rem] uppercase tracking-[0.42em] text-champagne-dim">
            Ambition • Builders • Leaders • Executing
          </p>
        </Reveal>
      </div>
    </section>
  );
}
