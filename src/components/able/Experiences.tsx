import tableImage from "@/assets/table.jpg";
import ambTable from "@/assets/amb-table.jpg.asset.json";
import ambPoker from "@/assets/amb-poker.jpg.asset.json";
import logoTable from "@/assets/table-by-able-v2.png.asset.json";
import logoCards from "@/assets/cards-co-v2.png.asset.json";
import logoDrink from "@/assets/able-to-drink-v2.png.asset.json";
import { Reveal } from "./Reveal";

const experiences = [
  {
    name: "The Table by ABLE",
    logo: logoTable.url,
    image: ambTable.url,
    kicker: "The Table by ABLE",
    text: "Encontros exclusivos que reúnem CEOs e empreendedores em um ambiente reservado, onde grandes ideias, conexões e oportunidades surgem naturalmente.",
  },
  {
    name: "Cards & Co. by ABLE",
    logo: logoCards.url,
    image: ambPoker.url,
    kicker: "Cards & Co. by ABLE",
    text: "Antes das cartas, uma conversa inspiradora. Durante o jogo, conexões genuínas. Um formato criado para aproximar empreendedores em um ambiente estratégico, leve e altamente qualificado.",
  },
  {
    name: "ABLE to Drink",
    logo: logoDrink.url,
    image: tableImage,
    kicker: "ABLE to Drink",
    text: "Uma mesa cuidadosamente preparada, vinhos selecionados e um ambiente reservado para conversas que inspiram, conectam e impulsionam novas oportunidades.",
  },
];

export function Experiences() {
  return (
    <section id="eventos" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-end">
        <div>
          <Reveal className="eyebrow">Encontros privados</Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-8 text-[clamp(2.2rem,6.4vw,5rem)]">
              OS <span className="metal-text">EVENTOS</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={160}>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            <span className="text-foreground">
              O ecossistema acontece na prática.
            </span>{" "}
            Formatos diferentes, sempre por convite, sempre com o mesmo objetivo:
            conexões reais entre quem está construindo.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-3">
        {experiences.map((item, i) => (
          <Reveal
            key={item.name}
            delay={i * 100}
            className="group flex flex-col bg-background"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover opacity-70 transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:opacity-90"
              />
            </div>
            <div className="flex flex-1 flex-col p-7">
              <img
                src={item.logo}
                alt={`Logo ${item.name}`}
                loading="lazy"
                className="h-20 w-auto max-w-[80%] self-start object-contain object-left"
              />
              <span className="mt-7 text-[0.6rem] uppercase tracking-[0.3em] text-champagne-dim">
                {item.kicker}
              </span>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>

          </Reveal>
        ))}
      </div>
    </section>
  );
}
