import { mentorQuotes } from "@/data/able";
import { Reveal } from "./Reveal";

function Caption({
  name,
  role,
  company,
  instagram,
}: {
  name: string;
  role?: string;
  company?: string;
  instagram?: string;
}) {
  const detail = [role, company].filter(Boolean).join(" · ");
  return (
    <figcaption className="mt-5 text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground">
      {instagram ? (
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300 hover:text-champagne"
        >
          {name}
        </a>
      ) : (
        name
      )}
      {detail ? ` — ${detail}` : ""}
    </figcaption>
  );
}

const cardClass =
  "w-[270px] shrink-0 border border-border bg-background/50 p-6 sm:w-[320px]";

export function MentorQuotes() {
  if (mentorQuotes.length === 0) return null;

  // Com 2 ou mais falas, vira carrossel contínuo (igual ao dos eventos).
  // Repetimos a lista para o giro ficar contínuo, sem espaços vazios.
  const isCarousel = mentorQuotes.length >= 2;
  const repeat = Math.max(2, Math.ceil(6 / mentorQuotes.length));
  const track = Array.from({ length: repeat * 2 }, () => mentorQuotes).flat();

  return (
    <section id="depoimentos" className="border-y border-border">
      <div className="py-16 md:py-24">
        <Reveal className="mx-auto mb-10 max-w-[1400px] px-6 md:px-10">
          <h2 className="display text-[clamp(2rem,6vw,4.5rem)]">
            O que nossos <span className="metal-text">mentores</span> falam
          </h2>
        </Reveal>

        {isCarousel ? (
          <Reveal>
            <div className="marquee">
              <div className="marquee-track marquee-slow">
                {track.map((t, i) => (
                  <figure key={`${t.name}-${i}`} className={cardClass}>
                    <blockquote className="text-sm leading-relaxed text-foreground">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <Caption
                      name={t.name}
                      role={t.role}
                      company={t.company}
                      instagram={t.instagram}
                    />
                  </figure>
                ))}
              </div>
            </div>
          </Reveal>
        ) : (
          <div className="mx-auto flex max-w-[1400px] flex-wrap gap-4 px-6 md:px-10">
            {mentorQuotes.map((t) => (
              <Reveal key={t.name} className={cardClass}>
                <figure>
                  <blockquote className="text-sm leading-relaxed text-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <Caption
                    name={t.name}
                    role={t.role}
                    company={t.company}
                    instagram={t.instagram}
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
