import { cn } from "@/lib/utils";

export function AbleMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 28"
      aria-hidden="true"
      className={cn("h-5 w-auto", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinejoin="miter"
    >
      <path d="M16 2 L30 26 H2 Z" />
      <path d="M10.5 18.5 H21.5" />
    </svg>
  );
}

export function AbleLogo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5 text-foreground", className)}>
      <AbleMark className="h-5 text-champagne" />
      <span className="display text-lg tracking-[0.28em]">ABLE</span>
    </span>
  );
}
