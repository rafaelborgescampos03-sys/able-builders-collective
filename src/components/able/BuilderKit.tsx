import kitPen from "@/assets/kit-pen.jpg";
import kitStone from "@/assets/kit-stone.jpg";
import kitToken from "@/assets/kit-token.jpg";
import { Reveal } from "./Reveal";

const items = [
  {
    title: "Builder Token",
    lines: ["Seu acesso.", "Sua identidade.", "Seu pertencimento."],
    image: kitToken,
    alt: "Token metálico escuro com símbolo A dourado",
  },
  {
    title: "Foundation Stone",
    lines: ["Sua marca na nossa fundação.", "Um legado que permanece."],
    image: kitStone,
    alt: "Bloco de pedra negra com gravação metálica",
  },
  {
    title: "A Leaders Pen",
    lines: ["Escreva planos.", "Assine ideias.", "Construa."],
    image: kitPen,
    alt: "Caneta preta minimalista com detalhes dourados",
  },
];

export function BuilderKit() {
  return (
    <section className="border-y border-border bg-graphite/30">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <Reveal className="eyebrow">Kit físico</Reveal>
            <Reveal delay={80}>
              <h2 className="display mt-8 text-[clamp(2.2rem,7vw,5.5rem)]">
                The <span className="metal-text">Builder Kit</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              Três símbolos. Um propósito.
              <span className="block text-foreground">Construir o futuro juntos.</span>
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-px border border-border bg-border lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 100}
              className="group bg-background p-7 transition-colors duration-500 hover:bg-card"
            >
              <div className="overflow-hidden border border-border">
                <img
                  src={item.image}
                  alt={item.alt}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>
              <h3 className="display mt-8 text-xl transition-colors duration-500 group-hover:text-champagne">
                {item.title}
              </h3>
              <div className="mt-5 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                {item.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
