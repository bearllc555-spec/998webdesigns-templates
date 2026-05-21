"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { TemplateModule } from "@/templates/types";

const Ctx = createContext<TemplateModule | null>(null);

export function ThemeProvider({
  value,
  children,
}: {
  value: TemplateModule;
  children: ReactNode;
}) {
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useTheme(): TemplateModule {
  const ctx = useContext(Ctx);
  if (!ctx) {
    throw new Error("useTheme must be used inside <ThemeProvider>");
  }
  return ctx;
}
