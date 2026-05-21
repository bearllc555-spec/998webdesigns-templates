"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { categories, templates, templateUrl, thumbUrl, type Category } from "@/data/templates";
import { SITE_VERSION } from "@/lib/version";

export default function Gallery() {
  const [filter, setFilter] = useState<Category | "All">("All");

  const visible = useMemo(
    () => (filter === "All" ? templates : templates.filter((t) => t.category === filter)),
    [filter]
  );

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-rule bg-bg/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <Link href="https://998webdesigns-com-app.vercel.app" className="flex items-baseline gap-2 text-base font-semibold tracking-tight">
            <span className="flex items-baseline gap-1">
              <span className="text-accent font-bold">998</span>
              <span className="text-ink">webdesigns</span>
              <span className="ml-1 text-slate">/ templates</span>
            </span>
            <span aria-hidden="true" className="rounded-full bg-rule-soft px-1.5 py-0.5 text-[10px] font-medium tracking-wider text-slate">
              {SITE_VERSION}
            </span>
          </Link>
          <p className="hidden text-xs uppercase tracking-[0.14em] text-slate md:block">
            {templates.length} starter directions
          </p>
        </div>
      </header>

      <main>
        <section className="border-b border-rule">
          <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
              Template gallery
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-ink md:text-6xl">
              Pick a starting direction.<br />
              <span className="text-ink-soft">We tailor it to your business.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {templates.length} handcrafted starting points across every kind of small business. Click any thumbnail to walk through the live design. Pick the one that feels closest to yours and we&rsquo;ll handcraft your version from there &mdash; same $998 flat fee.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="https://998webdesigns-com-app.vercel.app/#start"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-bg shadow-sm transition hover:bg-ink-soft"
              >
                Start my $998 site
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="https://998webdesigns-com-app.vercel.app"
                className="inline-flex items-center gap-2 rounded-full border border-rule bg-bg px-5 py-2.5 text-sm font-medium text-ink transition hover:border-ink-soft"
              >
                Back to home
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-rule bg-rule-soft/60">
          <div className="mx-auto max-w-6xl px-5 py-5 md:px-8">
            <div className="flex flex-wrap items-center gap-2">
              <FilterChip label="All" active={filter === "All"} onClick={() => setFilter("All")} count={templates.length} />
              {categories.map((c) => {
                const count = templates.filter((t) => t.category === c).length;
                return (
                  <FilterChip key={c} label={c} active={filter === c} onClick={() => setFilter(c)} count={count} />
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14">
            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {visible.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={templateUrl(t.slug)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-2xl border border-rule bg-bg shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div
                      className="relative w-full overflow-hidden bg-rule-soft"
                      style={{ aspectRatio: "4 / 3" }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={thumbUrl(t.slug)}
                        alt={`${t.name} template preview`}
                        loading="eager"
                        decoding="async"
                        className="thumb absolute inset-0 h-full w-full object-cover"
                        style={{
                          objectPosition: "top center",
                          transition: "object-position 6s linear",
                        }}
                      />
                    </div>
                    <div className="flex items-baseline justify-between gap-3 px-4 py-3">
                      <span className="truncate font-display text-base font-semibold text-ink">
                        {t.name}
                      </span>
                      <span className="shrink-0 text-[10px] uppercase tracking-wider text-slate">
                        {t.category.split(" ")[0]}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            {visible.length === 0 && (
              <p className="mt-12 text-center text-sm text-slate">No templates in this category yet.</p>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-rule bg-bg">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-slate md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            <span className="text-accent font-bold">998</span>
            <span className="text-ink">webdesigns</span> / templates &middot; a Bear LLC digital property
          </p>
          <p className="text-xs">
            Source design system: Crafto multipurpose HTML5 template &middot; tailored per client for $998
          </p>
        </div>
      </footer>

      <style>{`
        .group:hover .thumb { object-position: bottom center !important; }
        @media (prefers-reduced-motion: reduce) {
          .thumb { transition: none !important; }
          .group:hover .thumb { object-position: top center !important; }
        }
      `}</style>
    </>
  );
}

function FilterChip({
  label, active, onClick, count,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  count: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition ${
        active
          ? "border-ink bg-ink text-bg"
          : "border-rule bg-bg text-ink-soft hover:border-ink-soft hover:text-ink"
      }`}
    >
      <span>{label}</span>
      <span className={`text-[10px] uppercase tracking-wider ${active ? "text-bg/60" : "text-slate"}`}>
        {count}
      </span>
    </button>
  );
}
