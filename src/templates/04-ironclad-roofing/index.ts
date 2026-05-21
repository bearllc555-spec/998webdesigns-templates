import type { TemplateModule } from "../types";
import { theme } from "./theme";
import { content } from "./content";

export const templateModule: TemplateModule = {
  theme,
  content,
  motifs: {
    hero: "chevron-roof",
    tile: "numbered-block",
    portrait: "crew-silhouette",
    wide: "stat-strip",
  },
};

export { theme, content };
