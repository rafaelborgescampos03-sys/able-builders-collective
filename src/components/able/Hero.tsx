import { useEffect, useState } from "react";

import heroImage from "@/assets/hero.jpg";
import { COMMUNITY_URL } from "@/data/able";
import { Reveal } from "./Reveal";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(Math.min(window.scrollY, 700) * 0.08);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative flex min-h-[60svh] items-end overflow-hidden">
      <img
        src={heroImage}
        alt="Composição arquitetônica abstrata em preto com linhas douradas"
        width={1920}
        height={1200}
        className="absolute inset-0 h-full w-full scale-105 object-cover opacity-70"
        style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.06)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-14 pt-28 md:px-10 md:pb-20 md:pt-32">
        <Reveal className="eyebrow flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-champagne/70" aria-hidden="true" />
          Goiânia • Brasil
        </Reveal>

        <Reveal delay={100}>
          <h1 className="display mt-6 text-[clamp(2.9rem,11vw,9.5rem)]">
            Building
            <br />
            the <span className="metal-text">future.</span>
          </h1>
        </Reveal>

        <Reveal delay={220} className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5">
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
      </div>

    </section>
  );
}
