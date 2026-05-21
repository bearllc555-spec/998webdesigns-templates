import type { TemplateModule } from "../types";
import { theme } from "./theme";
import { content } from "./content";

export const templateModule: TemplateModule = {
  theme,
  content,
  motifs: {
    hero: "tooth-arc-abstract",
    tile: "concentric-dot",
    portrait: "scandi-figure",
    wide: "soft-triple-circle",
  },
};

export { theme, content };
