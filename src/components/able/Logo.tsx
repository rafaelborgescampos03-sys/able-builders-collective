import { cn } from "@/lib/utils";

import ableLogo from "@/assets/able-logo-f.png.asset.json";

/** Small decorative marker used in lists (no invented brand shape). */
export function AbleMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-block h-1.5 w-1.5 rotate-45 bg-current", className)}
    />
  );
}

export function AbleLogo({ className }: { className?: string }) {
  return (
    <img
      src={ableLogo.url}
      alt="ABLE — Ambitious, Builders, Leaders, Ecosystem"
      className={cn("h-10 w-auto object-contain", className)}
    />
  );
}
