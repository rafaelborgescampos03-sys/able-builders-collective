import { Reveal } from "./Reveal";

/**
 * Fotos dos eventos: basta colocar as imagens na pasta src/assets/eventos
 * (jpg, jpeg, png ou webp) que elas entram sozinhas no carrossel.
 */
const modules = import.meta.glob("../../assets/eventos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const photos = Object.keys(modules)
  .sort()
  .map((key) => modules[key]);

export function Experiences() {
  if (photos.length === 0) return null;

  // Repetimos a lista para o carrossel girar de forma contínua.
  const repeat = Math.max(2, Math.ceil(8 / photos.length));
  const items = Array.from({ length: repeat * 2 }, () => photos).flat();

  return (
    <section id="eventos" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <h2 className="display text-[clamp(2rem,6vw,4.5rem)]">
            Os <span className="metal-text">eventos</span>
          </h2>
        </Reveal>
      </div>

      <div className="marquee mt-14">
        <div className="marquee-track">
          {items.map((src, i) => (
            <img
              key={`${src}-${i}`}
              src={src}
              alt=""
              loading="lazy"
              className="aspect-[4/5] w-[260px] shrink-0 object-cover md:w-[340px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
