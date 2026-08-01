import tableImage from "@/assets/table.jpg";
import ambTable from "@/assets/amb-table.jpg.asset.json";
import ambPoker from "@/assets/amb-poker.jpg.asset.json";
import logoTable from "@/assets/table-by-able-f.png.asset.json";
import logoCards from "@/assets/cards-co-f.png.asset.json";
import logoDrink from "@/assets/able-to-drink-f.png.asset.json";

const events = [
  {
    name: "The Table by ABLE",
    logo: logoTable.url,
    image: ambTable.url,
    text: "Encontros exclusivos que reúnem CEOs e empreendedores em um ambiente reservado, onde grandes ideias, conexões e oportunidades surgem naturalmente.",
  },
  {
    name: "Cards & Co. by ABLE",
    logo: logoCards.url,
    image: ambPoker.url,
    text: "Antes das cartas, uma conversa inspiradora. Durante o jogo, conexões genuínas. Um formato criado para aproximar empreendedores em um ambiente estratégico, leve e altamente qualificado.",
  },
  {
    name: "ABLE to Drink",
    logo: logoDrink.url,
    image: tableImage,
    text: "Uma mesa cuidadosamente preparada, vinhos selecionados e um ambiente reservado para conversas que inspiram, conectam e impulsionam novas oportunidades.",
  },
];

export function EventsMarquee() {
  const items = [...events, ...events, ...events, ...events];

  return (
    <div className="marquee mt-14 border-y border-border py-6">
      <div className="marquee-track">
        {items.map((item, i) => (
          <article
            key={`${item.name}-${i}`}
            className="group w-[300px] shrink-0 overflow-hidden border border-border bg-background md:w-[380px]"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover opacity-70 transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:opacity-90"
              />
            </div>
            <div className="flex flex-col p-6">
              <img
                src={item.logo}
                alt={`Logo ${item.name}`}
                loading="lazy"
                className="h-12 w-auto max-w-[70%] self-start object-contain object-left"
              />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
