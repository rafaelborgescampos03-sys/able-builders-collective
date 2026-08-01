import tableImage from "@/assets/table.jpg";
import ambTable from "@/assets/amb-table.jpg.asset.json";
import ambPoker from "@/assets/amb-poker.jpg.asset.json";
import logoTable from "@/assets/table-by-able.png.asset.json";
import logoCards from "@/assets/cards-co-by-able.png.asset.json";
import logoDrink from "@/assets/able-to-drink.png.asset.json";
import { Reveal } from "./Reveal";

const experiences = [
  {
    name: "The Table by ABLE",
    logo: logoTable.url,
    image: ambTable.url,
    kicker: "Jantar",
    text: "Um jantar com o CEO de uma empresa. Poucas pessoas, todo mundo conversa com todo mundo — e é aí que os laços nascem.",
  },
  {
    name: "Cards & Co. by ABLE",
    logo: logoCards.url,
    image: ambPoker.url,
    kicker: "Poker",
    text: "Cash game com uma referência do poker. Insights antes do jogo e, na mesa, mais conversa do que disputa.",
  },
  {
    name: "ABLE to Drink",
    logo: logoDrink.url,
    image: tableImage,
    kicker: "Vinhos",
    text: "Uma mesa, vinhos e um sommelier para conduzir. Depois, o de sempre: networking real entre quem constrói.",
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
            className="group flex flex-col bg-background transition-colors duration-500 hover:bg-card"
          >
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover opacity-60 transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-background via-background/50 to-transparent">
                <img
                  src={item.logo}
                  alt={`Logo ${item.name}`}
                  loading="lazy"
                  className="h-24 w-auto max-w-[70%] object-contain"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col p-7">
              <span className="text-[0.6rem] uppercase tracking-[0.3em] text-champagne-dim">
                {item.kicker}
              </span>
              <h3 className="display mt-4 text-lg transition-colors duration-500 group-hover:text-champagne">
                {item.name}
              </h3>
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
