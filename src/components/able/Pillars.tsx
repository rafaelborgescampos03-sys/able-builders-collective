import { Reveal } from "./Reveal";

const pillars = ["Ambition", "Builders", "Leaders", "Ecosystem"];

export function Pillars() {
  return (
    <section id="ecossistema" className="border-y border-border bg-graphite/30">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <div className="divide-y divide-border border-t border-border">
          {pillars.map((pillar, i) => (
            <Reveal
              key={pillar}
              delay={i * 90}
              className="group flex items-baseline gap-6 py-8 transition-colors duration-500 md:gap-10 md:py-12"
            >
              <span className="text-[0.62rem] tracking-[0.3em] text-champagne-dim">
                0{i + 1}
              </span>
              <h3 className="display text-[clamp(1.8rem,5.5vw,4rem)] transition-colors duration-500 group-hover:text-champagne">
                {pillar}
              </h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
