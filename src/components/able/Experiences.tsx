import { EventsMarquee } from "./EventsMarquee";
import { Reveal } from "./Reveal";

export function Experiences() {
  return (
    <section id="eventos" className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
      <Reveal>
        <h2 className="display text-[clamp(2rem,6vw,4.5rem)]">
          OS <span className="metal-text">EVENTOS</span>
        </h2>
      </Reveal>

      <EventsMarquee />
    </section>
  );
}
