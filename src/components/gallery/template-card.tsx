import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { TemplateModule } from "@/templates/types";

export function TemplateCard({
  template,
  isNewest,
}: {
  template: TemplateModule;
  isNewest: boolean;
}) {
  const { theme } = template;
  const slug = theme.meta.slug;
  const previewSrc =
    theme.meta.galleryPreview ?? `/templates/${slug}/hero.jpg`;
  return (
    <Link
      href={`/templates/${slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden border border-neutral-200 bg-white transition hover:-translate-y-0.5 hover:shadow-lg"
      style={{ borderRadius: 16 }}
    >
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: "16 / 10",
          background: theme.palette.bg,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={previewSrc}
          alt={`${theme.meta.name} template preview`}
          loading="lazy"
          decoding="async"
          className="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-24"
          style={{
            background: `linear-gradient(to top, ${theme.palette.bg}, transparent)`,
          }}
        />
        <p
          className="absolute left-5 bottom-4 text-2xl"
          style={{
            color: theme.palette.ink,
            fontFamily: theme.type.display,
            fontWeight: theme.type.displayWeight,
            letterSpacing: theme.type.displayTracking,
            textShadow: "0 1px 2px rgba(255,255,255,0.5)",
          }}
        >
          {theme.meta.name}
        </p>
        {isNewest && (
          <span
            className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
            style={{
              background: theme.palette.accent,
              color: theme.palette.accentInk,
              letterSpacing: "0.16em",
            }}
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: theme.palette.accentInk }}
              aria-hidden="true"
            />
            New
          </span>
        )}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
          style={{
            outline: `2px solid ${theme.palette.accent}`,
            outlineOffset: "-2px",
          }}
        />
      </div>
      <div className="grid gap-3 p-6">
        <p
          className="text-xs uppercase text-neutral-500"
          style={{ letterSpacing: "0.18em" }}
        >
          {theme.meta.industry}
        </p>
        <p className="text-sm text-neutral-600">{theme.meta.tagline}</p>
        <span
          className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium"
          style={{ color: theme.palette.accent }}
        >
          View live
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
