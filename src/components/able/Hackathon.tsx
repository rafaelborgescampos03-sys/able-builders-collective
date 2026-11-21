import { COMMUNITY_URL } from "@/data/able";
import { Reveal } from "./Reveal";

export function Hackathon() {
  return (
    <section id="hackathon">
      <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-10 md:py-14">
        <Reveal className="flex items-center gap-3">
          <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-champagne opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-champagne" />
          </span>
          <span className="eyebrow">Acontecendo agora</span>
        </Reveal>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-x-10 gap-y-5">
          <Reveal delay={80}>
            <h2 className="display text-[clamp(1.8rem,4.5vw,3.25rem)]">
              Hackathon <span className="metal-text">ABLE</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <a
              href={COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-champagne px-6 py-3 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-champagne/85"
            >
              Quero participar
            </a>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Quatro times de três pessoas constroem uma startup do zero, com a orientação da ABLE e de
            mentores que já percorreram esse caminho.{" "}
            <span className="text-foreground">Vence o time de melhor desempenho.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
