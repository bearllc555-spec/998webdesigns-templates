import { theme } from "../theme";
import { content } from "../content";

export function TestimonialsBlock() {
  return (
    <section style={{ background: "var(--tpl-bg)" }}>
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p
          className="text-xs"
          style={{
            color: "var(--tpl-accent)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            fontFamily: "var(--tpl-font-body)",
            fontWeight: 700,
          }}
        >
          The neighbors say
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {content.testimonials.map((t, i) => (
            <figure
              key={i}
              className="p-7"
              style={{
                background: "var(--tpl-card)",
                border: `2px solid var(--tpl-line)`,
              }}
            >
              <p
                className="text-5xl leading-none"
                style={{
                  color: "var(--tpl-accent)",
                  fontFamily: "var(--tpl-font-display)",
                  fontWeight: 900,
                }}
                aria-hidden="true"
              >
                &ldquo;
              </p>
              <blockquote
                className="mt-3 text-base leading-relaxed"
                style={{
                  color: "var(--tpl-ink)",
                  fontFamily: "var(--tpl-font-body)",
                  fontWeight: 500,
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
                  style={{ color: "var(--tpl-ink)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}
                >
                  {t.name}
                </p>
                <p
                  className="mt-1 text-xs"
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
