import { useEffect, useState } from "react";

import { COMMUNITY_URL } from "@/data/able";
import { Reveal } from "./Reveal";

// Frase digitada uma vez ao abrir a página. Cada trecho tem o texto e se é o destaque em itálico.
const SEGMENTS = [
  { text: "Empreender", accent: false, breakAfter: true },
  { text: "não precisa ser ", accent: false, breakAfter: false },
  { text: "sozinho.", accent: true, breakAfter: false },
];
const TOTAL = SEGMENTS.reduce((sum, seg) => sum + seg.text.length, 0);
const FULL_TEXT = "Empreender não precisa ser sozinho.";
const START_DELAY_MS = 500;
const CHAR_DELAY_MS = 65;

function useTypewriter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(TOTAL);
      return;
    }
    let typed = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      typed += 1;
      setCount(typed);
      if (typed < TOTAL) timer = setTimeout(tick, CHAR_DELAY_MS);
    };
    timer = setTimeout(tick, START_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  return count;
}

function TypedHeadline({ count }: { count: number }) {
  let offset = 0;
  // O cursor fica no trecho que está sendo digitado (ou no último, ao terminar).
  const cursorSegment = Math.min(
    SEGMENTS.length - 1,
    SEGMENTS.findIndex((seg, i) => {
      const end = SEGMENTS.slice(0, i + 1).reduce((sum, x) => sum + x.text.length, 0);
      return count < end;
    }) === -1
      ? SEGMENTS.length - 1
      : SEGMENTS.findIndex((seg, i) => {
          const end = SEGMENTS.slice(0, i + 1).reduce((sum, x) => sum + x.text.length, 0);
          return count < end;
        }),
  );

  return (
    <>
      {SEGMENTS.map((seg, i) => {
        const shown = Math.max(0, Math.min(seg.text.length, count - offset));
        offset += seg.text.length;
        const visible = seg.text.slice(0, shown);
        // O resto do texto fica invisível, mas ocupa o espaço, para nada pular de lugar.
        const hidden = seg.text.slice(shown);
        const content = (
          <>
            {visible}
            {i === cursorSegment && <span className="type-cursor" aria-hidden="true" />}
            <span className="invisible">{hidden}</span>
          </>
        );
        return (
          <span key={seg.text}>
            {seg.accent ? <span className="metal-text">{content}</span> : content}
            {seg.breakAfter && <br />}
          </span>
        );
      })}
    </>
  );
}

export function Hero() {
  const count = useTypewriter();

  return (
    <section id="top" className="relative flex min-h-[90svh] items-center justify-center bg-background">
      <div className="relative mx-auto w-full max-w-[1400px] px-6 py-40 text-center md:px-10 md:py-48">
        <Reveal delay={100}>
          <h1
            className="display text-[clamp(2.4rem,7.5vw,6.5rem)]"
            style={{ letterSpacing: "-0.02em", wordSpacing: "0.14em", lineHeight: 1.15 }}
            aria-label={FULL_TEXT}
          >
            <span aria-hidden="true">
              <TypedHeadline count={count} />
            </span>
          </h1>
        </Reveal>

        <Reveal delay={220} className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          <a
            href="https://www.ableforms.org/"
            className="group inline-flex items-center gap-3 border-b border-champagne/70 pb-2 text-[0.7rem] uppercase tracking-[0.22em] text-champagne transition-colors duration-300 hover:text-foreground"
          >
            Quero participar da pré-venda
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href={COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-champagne px-7 py-4 text-sm font-bold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-champagne/85"
          >
            Entre para a comunidade
          </a>
        </Reveal>
      </div>
    </section>
  );
}
