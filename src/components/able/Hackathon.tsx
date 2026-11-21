import { COMMUNITY_URL } from "@/data/able";
import { Reveal } from "./Reveal";

const facts = [
  { value: "4", label: "times" },
  { value: "3", label: "pessoas por time" },
  { value: "1", label: "startup do zero" },
];

export function Hackathon() {
  return (
    <section id="hackathon" className="border-y border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <Reveal className="flex items-center gap-3">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-champagne opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-champagne" />
          </span>
          <span className="eyebrow">Acontecendo agora</span>
        </Reveal>

        <div className="mt-8 grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-end md:gap-20">
          <div>
            <Reveal delay={80}>
              <h2 className="display text-[clamp(2.4rem,7vw,6rem)]">
                Hackathon <span className="metal-text">ABLE</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Quatro times de três pessoas constroem uma startup do zero, com a orientação da ABLE e de
                mentores que já percorreram esse caminho.{" "}
                <span className="text-foreground">Vence o time de melhor desempenho.</span>
              </p>
            </Reveal>
            <Reveal delay={240} className="mt-10">
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

          <Reveal delay={200}>
            <dl className="grid grid-cols-3 gap-px border border-border bg-border">
              {facts.map((f) => (
                <div key={f.label} className="bg-background p-5 md:p-6">
                  <dt className="display text-4xl md:text-5xl">{f.value}</dt>
                  <dd className="mt-3 text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground">
                    {f.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
