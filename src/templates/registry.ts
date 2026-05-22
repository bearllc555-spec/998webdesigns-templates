import type { TemplateModule } from "./types";

import * as haldwell from "./01-haldwell-law";
import * as maple from "./02-maple-street-bakery";
import * as northwind from "./03-northwind-dental";
import * as ironclad from "./04-ironclad-roofing";
import * as quietfield from "./05-quietfield-yoga";
import * as tidewater from "./06-tidewater-cpa";
import * as borst from "./07-borst-landscape-design";

export const ALL_TEMPLATES: TemplateModule[] = [
  haldwell.templateModule,
  maple.templateModule,
  northwind.templateModule,
  ironclad.templateModule,
  quietfield.templateModule,
  tidewater.templateModule,
  borst.templateModule,
];

export function getTemplate(slug: string): TemplateModule | null {
  return ALL_TEMPLATES.find((t) => t.theme.meta.slug === slug) ?? null;
}

export function listTemplateSlugs(): string[] {
  return ALL_TEMPLATES.map((t) => t.theme.meta.slug);
}

export function getNewestSlug(): string {
  const sorted = [...ALL_TEMPLATES].sort(
    (a, b) =>
      new Date(b.theme.meta.publishedAt).getTime() -
      new Date(a.theme.meta.publishedAt).getTime(),
  );
  return sorted[0].theme.meta.slug;
}
