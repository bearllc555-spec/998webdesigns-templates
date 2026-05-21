import { TemplateCard } from "./template-card";
import { ALL_TEMPLATES, getNewestSlug } from "@/templates/registry";

export function GalleryGrid() {
  const sorted = [...ALL_TEMPLATES].sort(
    (a, b) =>
      new Date(b.theme.meta.publishedAt).getTime() -
      new Date(a.theme.meta.publishedAt).getTime(),
  );
  const newestSlug = getNewestSlug();
  return (
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {sorted.map((t) => (
        <li key={t.theme.meta.slug}>
          <TemplateCard template={t} isNewest={t.theme.meta.slug === newestSlug} />
        </li>
      ))}
    </ul>
  );
}
