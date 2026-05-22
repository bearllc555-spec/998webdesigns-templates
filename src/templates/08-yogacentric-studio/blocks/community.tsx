import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { theme } from "../theme";
import { content } from "../content";
import { extendedPalette } from "../theme";

export function CommunityBlock() {
  return (
    <section className="py-20 md:py-28" style={{ background: extendedPalette.sectionAlt }}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="overflow-hidden" style={{ borderRadius: "var(--tpl-radius)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/templates/yogacentric-studio/community.jpg"
              alt="YogaCentric studio community"
              className="aspect-[4/5] w-full object-cover md:aspect-[3/4]"
            />
          </div>
          <div>
            <h2
              className="text-4xl leading-tight md:text-5xl"
              style={{
                fontFamily: "var(--tpl-font-display)",
                fontWeight: theme.type.displayWeight,
                letterSpacing: theme.type.displayTracking,
                color: "var(--tpl-ink)",
              }}
            >
              {content.about.headline}
            </h2>
            {content.about.body.map((p) => (
              <p key={p.slice(0, 24)} className="mt-6 text-base leading-relaxed md:text-lg" style={{ color: "var(--tpl-muted)" }}>
                {p}
              </p>
            ))}
            <Link
              href={theme.primaryCta.href}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold transition hover:opacity-90"
              style={{
                background: "var(--tpl-accent)",
                color: "var(--tpl-accent-ink)",
                borderRadius: 999,
              }}
            >
              Join member
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            {content.about.stats && (
              <div className="mt-12 grid grid-cols-3 gap-6 border-t pt-10" style={{ borderColor: "var(--tpl-line)" }}>
                {content.about.stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-bold md:text-3xl" style={{ color: "var(--tpl-ink)", letterSpacing: "-0.03em" }}>
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs md:text-sm" style={{ color: "var(--tpl-muted)" }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
