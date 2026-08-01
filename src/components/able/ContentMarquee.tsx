import { contentGallery } from "@/data/able";

export function ContentMarquee() {
  if (contentGallery.length === 0) return null;

  // Duplicamos a lista para o loop infinito ficar contínuo.
  const items = [...contentGallery, ...contentGallery, ...contentGallery, ...contentGallery];

  return (
    <div className="marquee mt-14 border-y border-border py-6">
      <div className="marquee-track">
        {items.map((item, i) => (
          <figure
            key={`${item.image}-${i}`}
            className="group relative w-[240px] shrink-0 overflow-hidden border border-border md:w-[320px]"
          >
            <img
              src={item.image}
              alt={item.caption}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.04]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 to-transparent px-4 pb-4 pt-10 text-[0.6rem] uppercase tracking-[0.22em] text-champagne">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
