import { useEffect, useState } from "react";

import { AbleLogo } from "./Logo";
import { cn } from "@/lib/utils";
import { COMMUNITY_URL } from "@/data/able";

const links = [
  { label: "Hackathon", href: "#hackathon" },
  { label: "Eventos", href: "#eventos" },
  { label: "Mentores", href: "#mentores" },
  
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-transparent bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-5 md:px-10">
        <a href="#top" className="min-w-0" aria-label="ABLE — página inicial">
          <AbleLogo />
        </a>

        <div className="flex items-center gap-8">
          <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground transition-colors duration-300 hover:text-champagne"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 rounded-full bg-champagne px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors duration-300 hover:bg-champagne/85 sm:inline-block"
          >
            Entre para a comunidade
          </a>

          <a
            href="https://www.ableforms.org/"
            className="hidden shrink-0 text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground transition-colors duration-300 hover:text-champagne xl:inline-block"
          >
            Quero participar da pré-venda
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Abrir menu"
            className="flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span
              className={cn(
                "h-px w-5 bg-foreground transition-transform duration-300",
                open && "translate-y-[3px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-5 bg-foreground transition-transform duration-300",
                open && "-translate-y-[3px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-border bg-background/95 backdrop-blur-xl transition-[max-height] duration-500 lg:hidden",
          open ? "max-h-96 border-t" : "max-h-0",
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col px-6 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-4 text-xs uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-champagne"
            >
              {link.label}
            </a>
          ))}
          <a
            href={COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-6 rounded-full bg-champagne px-5 py-3 text-center text-sm font-bold text-primary-foreground"
          >
            Entre para a comunidade
          </a>
          <a
            href="https://www.ableforms.org/"
            onClick={() => setOpen(false)}
            className="mt-3 border border-border px-5 py-3 text-center text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground"
          >
            Quero participar da pré-venda
          </a>
        </nav>
      </div>
    </header>
  );
}
