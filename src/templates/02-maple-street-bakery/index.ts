import type { TemplateModule } from "../types";
import { theme } from "./theme";
import { content } from "./content";

export const templateModule: TemplateModule = {
  theme,
  content,
  motifs: {
    hero: "bakery-still-life",
    tile: "single-pastry",
    portrait: "baker-initials",
    wide: "pastry-row",
  },
};

export { theme, content };
