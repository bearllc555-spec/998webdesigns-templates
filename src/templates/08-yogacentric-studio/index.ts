import type { TemplateModule } from "../types";
import { theme } from "./theme";
import { content } from "./content";

export const templateModule: TemplateModule = {
  theme,
  content,
  motifs: {
    hero: "yoga-studio-hero",
    tile: "mat-texture",
    portrait: "instructor-portrait",
    wide: "studio-floor",
  },
};

export { theme, content };
