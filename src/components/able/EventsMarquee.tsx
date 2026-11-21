const events = [
  {
    name: "The Table by ABLE",
    text: "Encontros exclusivos que reúnem CEOs e empreendedores em um ambiente reservado, onde grandes ideias, conexões e oportunidades surgem naturalmente.",
  },
  {
    name: "Cards & Co. by ABLE",
    text: "Antes das cartas, uma conversa inspiradora. Durante o jogo, conexões genuínas. Um formato criado para aproximar empreendedores em um ambiente estratégico, leve e altamente qualificado.",
  },
  {
    name: "ABLE to Drink",
    text: "Uma mesa cuidadosamente preparada, vinhos selecionados e um ambiente reservado para conversas que inspiram, conectam e impulsionam novas oportunidades.",
  },
];

export function EventsMarquee() {
  return (
    <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
      {events.map((item) => (
        <article
          key={item.name}
          className="group bg-background p-8 transition-colors duration-500 hover:bg-card md:p-10"
        >
          <h3 className="display text-2xl md:text-3xl">{item.name}</h3>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
            {item.text}
          </p>
        </article>
      ))}
    </div>
  );
}
