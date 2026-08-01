import { stats } from "@/data/able";
import { Reveal } from "./Reveal";

export function Stats() {
  return (
    <section className="border-y border-border">
      <div className="mx-auto grid max-w-[1400px] gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 80}
            className="bg-background px-6 py-16 text-center md:py-24"
          >
            <p className="display metal-text text-[clamp(2.6rem,5vw,4.5rem)]">{stat.value}</p>
            <p className="mt-4 text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
