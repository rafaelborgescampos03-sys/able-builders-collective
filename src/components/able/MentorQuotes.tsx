import { mentorQuotes } from "@/data/able";
import { Reveal } from "./Reveal";

export function MentorQuotes() {
  if (mentorQuotes.length === 0) return null;

  // Duplicamos a lista para o loop ficar contínuo.
  const track = [...mentorQuotes, ...mentorQuotes];

  return (
    <section id="depoimentos" className="border-y border-border">
      <div className="py-20 md:py-28">
        <Reveal className="mx-auto mb-14 max-w-[1400px] px-6 md:px-10">
          <h2 className="display text-[clamp(2rem,6vw,4.5rem)]">
            O que nossos <span className="metal-text">mentores</span> falam
          </h2>
        </Reveal>
        <Reveal>
          <div className="marquee">
            <div className="marquee-track marquee-slow">
              {track.map((t, i) => (
                <figure
                  key={`${t.name}-${i}`}
                  className="w-[78vw] shrink-0 border border-border bg-background/50 p-8 sm:w-[420px] md:p-10"
                >
                  <blockquote className="text-base leading-relaxed text-foreground md:text-lg">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-8 text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">
                    {t.name} — {t.company}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
