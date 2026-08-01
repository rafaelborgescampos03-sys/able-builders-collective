import { articles, contentCategories } from "@/data/able";
import { Reveal } from "./Reveal";

export function Content() {
  return (
    <section id="conteudo" className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
      <Reveal className="eyebrow">Editorial</Reveal>
      <Reveal delay={80}>
        <h2 className="display mt-8 max-w-3xl text-[clamp(2.2rem,6.4vw,5rem)]">
          Ideas worth <span className="metal-text">building.</span>
        </h2>
      </Reveal>

      <Reveal delay={140} className="mt-12 flex flex-wrap gap-x-6 gap-y-3">
        {contentCategories.map((category) => (
          <span
            key={category}
            className="text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground transition-colors duration-300 hover:text-champagne"
          >
            {category}
          </span>
        ))}
      </Reveal>

      <div className="mt-16 border-t border-border">
        {articles.map((article, i) => (
          <Reveal key={article.title} delay={(i % 3) * 70}>
            <a
              href={article.href}
              className="group grid gap-3 border-b border-border py-8 transition-colors duration-500 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-baseline md:gap-10"
            >
              <span className="text-[0.6rem] uppercase tracking-[0.26em] text-champagne-dim md:w-44">
                {article.category}
              </span>
              <h3 className="text-lg leading-snug transition-colors duration-500 group-hover:text-champagne md:text-2xl">
                {article.title}
              </h3>
              <span className="text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
                {article.format} • {article.readTime}
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
