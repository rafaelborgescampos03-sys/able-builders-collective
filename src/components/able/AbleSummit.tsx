import summitImage from "@/assets/summit.jpg";
import { Reveal } from "./Reveal";

const details = [
  { label: "Data", value: "A anunciar" },
  { label: "Local", value: "Goiânia — GO" },
  { label: "Speakers", value: "Founders & líderes" },
  { label: "Experiências", value: "Palco, mesas e after" },
];

export function AbleSummit() {
  return (
    <section id="summit" className="relative overflow-hidden border-y border-border">
      <img
        src={summitImage}
        alt="Auditório escuro com iluminação dourada antes de um evento"
        width={1600}
        height={1008}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/75 to-background" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-48">
        <Reveal className="eyebrow">Evento anual</Reveal>
        <Reveal delay={80}>
          <h2 className="display mt-10 text-[clamp(2.6rem,10vw,8.5rem)]">
            ABLE <span className="metal-text">Summit</span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-10 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
            <span className="text-foreground">
              O encontro anual de quem está construindo o futuro.
            </span>{" "}
            Um dia inteiro de conteúdo, conexão e experiências para a comunidade
            e seus convidados.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {details.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 80}
              className="bg-background/60 p-7 backdrop-blur-sm"
            >
              <span className="text-[0.6rem] uppercase tracking-[0.3em] text-champagne-dim">
                {item.label}
              </span>
              <p className="mt-4 text-sm uppercase tracking-[0.12em]">{item.value}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-14">
          <a
            href="#entrar"
            className="inline-block border border-champagne bg-champagne px-8 py-4 text-[0.65rem] uppercase tracking-[0.24em] text-primary-foreground transition-colors duration-300 hover:bg-transparent hover:text-champagne"
          >
            Quero saber mais
          </a>
        </Reveal>
      </div>
    </section>
  );
}
