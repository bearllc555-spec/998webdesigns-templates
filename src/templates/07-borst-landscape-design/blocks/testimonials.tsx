import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { theme } from "../theme";
import { content, testimonialAvatars } from "../content";

export function TestimonialsBlock() {
  return (
    <section style={{ background: "var(--tpl-card)" }}>
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-3xl">
          <p
            className="text-xs"
            style={{
              color: "var(--tpl-accent)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontFamily: "var(--tpl-font-body)",
              fontWeight: 600,
            }}
          >
            Testimonials
          </p>
          <h2
            className="mt-4 text-4xl leading-tight md:text-5xl"
            style={{
              color: "var(--tpl-ink)",
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              letterSpacing: theme.type.displayTracking,
            }}
          >
            What our clients say about our work.
          </h2>
        </div>
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {content.testimonials.map((t, i) => (
            <li
              key={i}
              className="p-6"
              style={{
                background: "var(--tpl-bg)",
                border: "1px solid var(--tpl-line)",
                borderRadius: 20,
              }}
            >
              <div className="flex items-center gap-3">
                <div className="relative overflow-hidden" style={{ borderRadius: 999, width: 44, height: 44 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={testimonialAvatars[i]}
                    alt={t.name}
                    className="block h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <p
                      className="text-sm leading-tight"
                      style={{ color: "var(--tpl-ink)", fontWeight: 700 }}
                    >
                      {t.name}
                    </p>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/templates/borst-landscape-design/icon-verified.svg"
                      alt="Verified"
                      className="h-3.5 w-3.5"
                    />
                  </div>
                  <p className="mt-0.5 text-xs" style={{ color: "var(--tpl-muted)" }}>
                    {t.role}
                  </p>
                </div>
              </div>
              <p
                className="mt-4 text-sm leading-relaxed"
                style={{ color: "var(--tpl-ink)", fontFamily: "var(--tpl-font-body)" }}
              >
                {t.quote}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex justify-center">
          <Link
            href={theme.primaryCta.href}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm transition hover:opacity-90"
            style={{
              background: "var(--tpl-accent)",
              color: "var(--tpl-accent-ink)",
              borderRadius: 999,
              fontFamily: "var(--tpl-font-body)",
              fontWeight: 600,
            }}
          >
            Get in touch
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
