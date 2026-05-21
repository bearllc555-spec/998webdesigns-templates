import { theme } from "../theme";
import { content } from "../content";

export function TestimonialsBlock() {
  return (
    <section
      className="border-y"
      style={{ borderColor: "var(--tpl-line)", background: "var(--tpl-card)" }}
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p
          className="text-xs"
          style={{
            color: "var(--tpl-accent)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontFamily: "var(--tpl-font-body)",
            fontWeight: 600,
          }}
        >
          From the corner chair
        </p>
        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-12">
          {content.testimonials.map((t, i) => (
            <figure
              key={i}
              className="p-7"
              style={{
                background: "var(--tpl-bg)",
                borderRadius: `var(--tpl-radius)`,
                border: `1px solid var(--tpl-line)`,
              }}
            >
              <p
                className="text-5xl leading-none"
                style={{
                  color: "var(--tpl-accent)",
                  fontFamily: "var(--tpl-font-display)",
                  fontWeight: 700,
                  fontStyle: "italic",
                }}
                aria-hidden="true"
              >
                &ldquo;
              </p>
              <blockquote
                className="mt-3 text-lg leading-snug"
                style={{
                  color: "var(--tpl-ink)",
                  fontFamily: "var(--tpl-font-display)",
                  fontWeight: 500,
                  fontStyle: "italic",
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
