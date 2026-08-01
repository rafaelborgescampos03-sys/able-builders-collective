import { AbleLogo } from "./Logo";

const links = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Contato", href: "mailto:hello@able.com.br" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <AbleLogo />
            <p className="mt-6 text-[0.62rem] uppercase tracking-[0.36em] text-champagne-dim">
              Ambition • Builders • Leaders • Ecosystem
            </p>
            <p className="mt-6 max-w-xs text-xs leading-relaxed text-muted-foreground">
              Goiânia — Goiás, Brasil.
            </p>
          </div>

          <nav aria-label="Redes e contato" className="flex flex-col gap-4 md:items-end">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground transition-colors duration-300 hover:text-champagne"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-16 hairline" />
        <p className="mt-6 text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
          © 2026 ABLE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
