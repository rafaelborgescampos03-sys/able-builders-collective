import { Reveal } from "./Reveal";

const tiers = [
  {
    tier: "Founding Partner",
    slots: "1 vaga",
    description:
      "Presença institucional máxima. Naming em uma vertical da ABLE, protagonismo em todas as experiências e voz permanente dentro do ecossistema.",
    items: [
      "Naming rights em uma vertical",
      "Presença em todas as experiências do ano",
      "Bloco dedicado no The Foundation",
      "Conteúdo editorial exclusivo",
    ],
  },
  {
    tier: "Ecosystem Partner",
    slots: "3 vagas",
    description:
      "Associação contínua à marca ABLE, com ativação em experiências selecionadas e acesso direto à comunidade de builders.",
    items: [
      "Ativação em experiências selecionadas",
      "Marca nos materiais oficiais",
      "Convites para o Table by ABLE",
      "Co-criação de conteúdo",
    ],
  },
  {
    tier: "Experience Partner",
    slots: "Por experiência",
    description:
      "Parceria pontual em uma experiência específica — jantar, poker night ou sessão — com presença de marca e entrega de produto.",
    items: [
      "Patrocínio de uma experiência",
      "Presença de marca no ambiente",
      "Registro audiovisual da ativação",
      "Relatório de audiência",
    ],
  },
];

export function Sponsors() {
  return (
    <section id="patrocinadores" className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
      <Reveal className="eyebrow">Parcerias</Reveal>
      <Reveal delay={80}>
        <h2 className="display mt-8 max-w-3xl text-[clamp(2.2rem,6.4vw,5rem)]">
          Construa <span className="metal-text">com a ABLE.</span>
        </h2>
      </Reveal>
      <Reveal delay={140}>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          A ABLE está abrindo suas primeiras cotas de patrocínio. Nenhuma marca
          foi selecionada ainda — e é exatamente isso que torna este momento
          raro. Quem entra agora não patrocina um ecossistema pronto: entra como
          parte da fundação dele.
        </p>
      </Reveal>

      <div className="mt-16 border-t border-border md:mt-20">
        {tiers.map((tier, i) => (
          <Reveal key={tier.tier} delay={i * 80}>
            <div className="grid gap-6 border-b border-border py-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)_minmax(0,1fr)] md:gap-12 md:py-14">
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.26em] text-champagne-dim">
                  0{i + 1}
                </p>
                <h3 className="mt-3 text-xl leading-snug md:text-2xl">{tier.tier}</h3>
                <p className="mt-2 text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">
                  {tier.slots}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {tier.description}
              </p>
              <ul className="space-y-2.5">
                {tier.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[0.72rem] uppercase tracking-[0.16em] text-foreground/70"
                  >
                    <span className="text-champagne">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} className="mt-16 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          Cotas limitadas por ano para preservar a exclusividade de cada marca
          dentro do ecossistema.
        </p>
        <a
          href="#entrar"
          className="inline-block shrink-0 border border-champagne/60 px-7 py-3.5 text-[0.65rem] uppercase tracking-[0.24em] text-champagne transition-colors duration-300 hover:bg-champagne hover:text-primary-foreground"
        >
          Quero patrocinar a ABLE
        </a>
      </Reveal>
    </section>
  );
}
