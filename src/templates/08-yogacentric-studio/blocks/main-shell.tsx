"use client";

import { usePathname } from "next/navigation";
import { theme } from "../theme";

/** Offset main content when the header is always visible (non-home pages). */
export function YogaCentricMain({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const home = `/mockups/${theme.meta.slug}`;
  const isHome = pathname === home || pathname === `${home}/`;

  return (
    <main id="main" className={isHome ? undefined : "pt-[5.5rem]"}>
      {children}
    </main>
  );
}
