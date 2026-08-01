import { foundation } from "@/data/able";
import { AbleMark } from "./Logo";
import { Reveal } from "./Reveal";

export function FoundationWall() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
      <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
        <div>
          <Reveal className="eyebrow">Parceiros fundadores</Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-8 text-[clamp(2.2rem,7vw,5.5rem)]">
              The <span className="metal-text">Foundation</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={160}>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            Cada conexão é uma construção.
            <span className="block text-foreground">
              Cada parceiro, parte da fundação.
            </span>
          </p>
        </Reveal>
      </div>

      <div className="mt-20 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {foundation.map((block, i) => (
          <Reveal
            key={block.number}
            delay={(i % 4) * 80}
            className="group stone relative flex aspect-[3/2] flex-col justify-between p-6 transition-all duration-700 hover:border-champagne/40"
          >
            <div className="flex items-start justify-between">
              <span className="text-[0.6rem] tracking-[0.28em] text-muted-foreground transition-colors duration-500 group-hover:text-champagne-dim">
                {block.number}
              </span>
              <AbleMark className="h-3.5 text-muted-foreground/50 transition-colors duration-500 group-hover:text-champagne" />
            </div>
            <div>
              <p className="display metal-text text-lg tracking-[0.14em] md:text-xl">
                {block.name}
              </p>
              <p className="mt-2 text-[0.6rem] tracking-[0.3em] text-muted-foreground">
                {block.year}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
