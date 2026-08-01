import { EventsMarquee } from "./EventsMarquee";
import { Reveal } from "./Reveal";

export function Experiences() {
  return (
    <section id="eventos" className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
      <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
        <div>
          <Reveal className="eyebrow">Encontros privados</Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-6 text-[clamp(2.2rem,6.4vw,5rem)]">
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

      <EventsMarquee />
    </section>
  );
}
