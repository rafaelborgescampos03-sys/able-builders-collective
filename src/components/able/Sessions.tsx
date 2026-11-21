import { mentors, type Mentor } from "@/data/able";
import { Reveal } from "./Reveal";

// A partir deste número de mentores a lista vira um carrossel vertical.
const CAROUSEL_FROM = 5;

function MentorRow({ m }: { m: Mentor }) {
  const detail = [m.role, m.company].filter(Boolean).join(" · ");
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-border py-6">
      <div className="min-w-0">
        <p className="display text-2xl md:text-3xl">{m.name}</p>
        {detail && (
          <p className="mt-2 text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
            {detail}
          </p>
        )}
      </div>
      {m.instagram && (
        <a
          href={m.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground transition-colors duration-300 hover:text-champagne"
        >
          Instagram <span aria-hidden="true">→</span>
        </a>
      )}
    </div>
  );
}

export function Sessions() {
  const isCarousel = mentors.length >= CAROUSEL_FROM;

  return (
    <section id="mentores" className="border-y border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <Reveal>
          <h2 className="display text-[clamp(2rem,6vw,4.5rem)]">
            Nossos <span className="metal-text">mentores</span>
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Donos de grandes empresas que sentam com a gente, respondem as perguntas e contam o que já erraram.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12 max-w-3xl border-t border-border">
          {isCarousel ? (
            <div className="vmarquee h-[26rem]">
              <div className="vmarquee-track">
                {[0, 1].map((copy) => (
                  <div key={copy} aria-hidden={copy === 1}>
                    {mentors.map((m) => (
                      <MentorRow key={`${copy}-${m.name}`} m={m} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            mentors.map((m) => <MentorRow key={m.name} m={m} />)
          )}
        </Reveal>
      </div>
    </section>
  );
}
