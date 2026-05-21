import type { TemplateModule } from "../types";
import { theme } from "./theme";
import { content } from "./content";

export const templateModule: TemplateModule = {
  theme,
  content,
  motifs: {
    hero: "horizon-sun",
    tile: "lotus-ovals",
    portrait: "centered-circle",
    wide: "long-horizon",
  },
};

export { theme, content };
