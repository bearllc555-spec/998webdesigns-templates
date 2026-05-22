import type { TemplateModule } from "../types";
import { theme } from "./theme";
import { content } from "./content";

export const templateModule: TemplateModule = {
  theme,
  content,
  motifs: {
    hero: "topiary-and-hedge",
    tile: "single-leaf",
    portrait: "urn-topiary",
    wide: "hedge-row",
  },
};

export { theme, content };
