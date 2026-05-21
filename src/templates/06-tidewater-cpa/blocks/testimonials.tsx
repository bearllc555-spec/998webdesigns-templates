import { theme } from "../theme";
import { content } from "../content";

export function TestimonialsBlock() {
  return (
    <section
      className="border-b"
      style={{ background: "var(--tpl-bg)", borderColor: "var(--tpl-line)" }}
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p
          className="text-xs"
          style={{
            color: "var(--tpl-muted)",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            fontFamily: "var(--tpl-font-body)",
          }}
        >
          What clients say
        </p>
        <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-12">
          {content.testimonials.map((t, i) => (
            <figure key={i} className="border-t pt-8" style={{ borderColor: "var(--tpl-line)" }}>
              <blockquote
                className="text-xl leading-snug md:text-2xl"
                style={{
                  color: "var(--tpl-ink)",
                  fontFamily: "var(--tpl-font-display)",
                  fontWeight: 500,
                  letterSpacing: theme.type.displayTracking,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8">
                <p
                  className="text-sm"
                  style={{
                    color: "var(--tpl-ink)",
                    fontFamily: "var(--tpl-font-body)",
                    fontWeight: 600,
                  }}
                >
                  {t.name}
                </p>
                <p
                  className="mt-1 text-xs"
                  style={{
                    color: "var(--tpl-muted)",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    fontFamily: "var(--tpl-font-body)",
                  }}
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
