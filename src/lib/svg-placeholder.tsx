import type { TemplateModule } from "@/templates/types";

import * as haldwell from "@/templates/01-haldwell-law/images";
import * as maple from "@/templates/02-maple-street-bakery/images";
import * as northwind from "@/templates/03-northwind-dental/images";
import * as ironclad from "@/templates/04-ironclad-roofing/images";
import * as quietfield from "@/templates/05-quietfield-yoga/images";
import * as tidewater from "@/templates/06-tidewater-cpa/images";

export type PlaceholderKind = "hero" | "tile" | "portrait" | "wide" | "thumb";

type ImageMod = {
  Hero: (p: { seed?: number; theme: TemplateModule["theme"]; className?: string }) => React.ReactElement;
  Tile: (p: { seed?: number; theme: TemplateModule["theme"]; className?: string }) => React.ReactElement;
  Portrait: (p: { seed?: number; theme: TemplateModule["theme"]; className?: string }) => React.ReactElement;
  Wide: (p: { seed?: number; theme: TemplateModule["theme"]; className?: string }) => React.ReactElement;
  Thumb: (p: { theme: TemplateModule["theme"]; className?: string }) => React.ReactElement;
};

const REGISTRY: Record<string, ImageMod> = {
  "haldwell-law": haldwell as unknown as ImageMod,
  "maple-street-bakery": maple as unknown as ImageMod,
  "northwind-dental": northwind as unknown as ImageMod,
  "ironclad-roofing": ironclad as unknown as ImageMod,
  "quietfield-yoga": quietfield as unknown as ImageMod,
  "tidewater-cpa": tidewater as unknown as ImageMod,
};

export function Placeholder({
  kind,
  theme,
  seed = 1,
  className,
}: {
  kind: PlaceholderKind;
  theme: TemplateModule["theme"];
  seed?: number;
  className?: string;
}) {
  const mod = REGISTRY[theme.meta.slug];
  if (!mod) {
    return (
      <div
        aria-hidden="true"
        className={className}
        style={{
          background: theme.palette.accentSoft,
          aspectRatio: kind === "hero" || kind === "wide" || kind === "thumb" ? "16 / 10" : "1 / 1",
        }}
      />
    );
  }
  switch (kind) {
    case "hero":
      return <mod.Hero seed={seed} theme={theme} className={className} />;
    case "tile":
      return <mod.Tile seed={seed} theme={theme} className={className} />;
    case "portrait":
      return <mod.Portrait seed={seed} theme={theme} className={className} />;
    case "wide":
      return <mod.Wide seed={seed} theme={theme} className={className} />;
    case "thumb":
      return <mod.Thumb theme={theme} className={className} />;
  }
}
