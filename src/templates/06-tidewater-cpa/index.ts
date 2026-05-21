import type { TemplateModule } from "../types";
import { theme } from "./theme";
import { content } from "./content";

export const templateModule: TemplateModule = {
  theme,
  content,
  motifs: {
    hero: "grid-ascending-bars",
    tile: "stacked-rectangles",
    portrait: "structured-monogram",
    wide: "data-band",
  },
};

export { theme, content };
