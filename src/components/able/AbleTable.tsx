import tableImage from "@/assets/table.jpg";
import { Reveal } from "./Reveal";

const highlights = [
  { title: "Networking", text: "Poucas pessoas, alto nível, zero performance." },
  { title: "Conversas", text: "Assuntos reais: números, erros, decisões." },
  { title: "Relacionamento", text: "Confiança construída fora do palco." },
  { title: "Oportunidades", text: "Sociedades, clientes e capital nascem à mesa." },
];

export function AbleTable() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
      <div className="grid gap-14 md:grid-cols-[1fr_1.05fr] md:items-center md:gap-20">
        <div>
          <Reveal className="eyebrow">Encontros privados</Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-8 text-[clamp(2.2rem,6.4vw,5rem)]">
              ABLE <span className="metal-text">Table</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              <span className="text-foreground">
                Uma mesa. Poucas pessoas. Conversas que podem mudar o próximo
                capítulo.
              </span>{" "}
              Jantares fechados entre empreendedores, por convite, com curadoria
              de quem senta ao seu lado.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2">
            {highlights.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 80}
                className="group bg-background p-6 transition-colors duration-500 hover:bg-card"
              >
                <h3 className="text-[0.68rem] uppercase tracking-[0.26em] text-champagne-dim transition-colors group-hover:text-champagne">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120} className="group overflow-hidden border border-border">
          <img
            src={tableImage}
            alt="Mesa de jantar privada em ambiente escuro com detalhes dourados"
            width={1600}
            height={1008}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover opacity-90 transition-transform duration-[1400ms] ease-out group-hover:scale-105 md:aspect-[3/4]"
          />
        </Reveal>
      </div>
    </section>
  );
}
