import { Reveal } from "./Reveal";

const pillars = [
  { title: "Ambition", text: "A vontade de ir além." },
  { title: "Builders", text: "Pessoas que transformam ideias em realidade." },
  { title: "Leaders", text: "Pessoas que assumem responsabilidade pelo que estão construindo." },
  { title: "Ecosystem", text: "Conectando pessoas, ideias e oportunidades." },
];

export function Pillars() {
  return (
    <section id="ecossistema" className="border-y border-border bg-graphite/30">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <Reveal className="eyebrow">O que é a ABLE</Reveal>
        <Reveal delay={80}>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Um ecossistema construído sobre quatro princípios. Eles definem quem
            entra, como nos relacionamos e o que fazemos juntos.
          </p>
        </Reveal>

        <div className="mt-12 divide-y divide-border border-t border-border">
          {pillars.map((pillar, i) => (
            <Reveal
              key={pillar.title}
              delay={i * 90}
              className="group grid gap-4 py-10 transition-colors duration-500 md:grid-cols-[auto_minmax(0,1fr)_minmax(0,1fr)] md:items-baseline md:gap-10 md:py-14"
            >
              <span className="text-[0.62rem] tracking-[0.3em] text-champagne-dim">
                0{i + 1}
              </span>
              <h3 className="display text-[clamp(2rem,6vw,4.5rem)] transition-colors duration-500 group-hover:text-champagne">
                {pillar.title}
              </h3>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-right md:ml-auto">
                {pillar.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
