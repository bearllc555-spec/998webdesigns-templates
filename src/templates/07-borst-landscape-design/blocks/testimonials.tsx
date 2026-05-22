import { Star } from "lucide-react";
import { theme } from "../theme";
import { content } from "../content";

export function TestimonialsBlock() {
  return (
    <section style={{ background: "var(--tpl-card)" }}>
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="text-center">
          <p
            className="text-xs"
            style={{
              color: "var(--tpl-accent)",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontFamily: "var(--tpl-font-body)",
              fontWeight: 600,
            }}
          >
            What our clients say
          </p>
          <h2
            className="mx-auto mt-4 max-w-2xl text-3xl leading-tight md:text-4xl"
            style={{
              color: "var(--tpl-ink)",
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              letterSpacing: theme.type.displayTracking,
            }}
          >
            Thirty-five years of properties that grow into themselves.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {content.testimonials.map((t, i) => (
            <figure
              key={i}
              className="p-7"
              style={{
                background: "var(--tpl-bg)",
                border: `1px solid var(--tpl-line)`,
                borderRadius: `var(--tpl-radius)`,
              }}
            >
              <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star
                    key={s}
                    className="h-4 w-4"
                    fill="var(--tpl-accent)"
                    stroke="var(--tpl-accent)"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote
                className="mt-5 text-base leading-relaxed"
                style={{
                  color: "var(--tpl-ink)",
                  fontFamily: "var(--tpl-font-body)",
                }}
              >
                {t.quote}
              </blockquote>
              <figcaption
                className="mt-6 border-t pt-4"
                style={{ borderColor: "var(--tpl-line)" }}
              >
                <p
                  className="text-sm"
                  style={{ color: "var(--tpl-ink)", fontWeight: 600 }}
                >
                  {t.name}
                </p>
                <p
                  className="mt-0.5 text-xs"
                  style={{ color: "var(--tpl-muted)" }}
                >
                  {t.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
