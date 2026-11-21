import { COMMUNITY_URL } from "@/data/able";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[90svh] items-center justify-center bg-background">
      <div className="relative mx-auto w-full max-w-[1400px] px-6 py-40 text-center md:px-10 md:py-48">
        <Reveal delay={100}>
          <h1
            className="display text-[clamp(2.4rem,7.5vw,6.5rem)]"
            style={{ letterSpacing: "-0.02em", wordSpacing: "0.14em", lineHeight: 1.15 }}
          >
            Empreender
            <br />
            não precisa ser <span className="metal-text">sozinho.</span>
          </h1>
        </Reveal>

        <Reveal delay={220} className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          <a
            href="https://www.ableforms.org/"
            className="group inline-flex items-center gap-3 border-b border-champagne/70 pb-2 text-[0.7rem] uppercase tracking-[0.22em] text-champagne transition-colors duration-300 hover:text-foreground"
          >
            Quero participar da pré-venda
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
