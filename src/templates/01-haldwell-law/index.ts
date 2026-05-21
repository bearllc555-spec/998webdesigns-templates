import type { TemplateModule } from "../types";
import { theme } from "./theme";
import { content } from "./content";

export const templateModule: TemplateModule = {
  theme,
  content,
  motifs: {
    hero: "editorial-initial",
    tile: "roman-numeral",
    portrait: "framed-letter",
    wide: "datespan-rule",
  },
};

export { theme, content };
