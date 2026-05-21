import { SectionFrame } from "./section-frame";
import { theme } from "../theme";
import { content } from "../content";

export function TestimonialsBlock() {
  return (
    <SectionFrame label="In their words">
      <div className="mx-auto max-w-2xl space-y-16">
        {content.testimonials.map((t, i) => (
          <figure
            key={i}
            className={`text-center ${i === 0 ? "" : "border-t pt-16"}`}
            style={{ borderColor: "var(--tpl-line)" }}
          >
            <blockquote
              className="mx-auto max-w-xl text-2xl leading-snug md:text-3xl"
              style={{
                color: "var(--tpl-ink)",
                fontFamily: "var(--tpl-font-display)",
                fontWeight: theme.type.displayWeight,
                letterSpacing: theme.type.displayTracking,
                fontStyle: "italic",
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
                  letterSpacing: "0.06em",
                }}
              >
                {t.name}
              </p>
              <p
                className="mt-1 text-xs"
                style={{
                  color: "var(--tpl-muted)",
                  letterSpacing: "0.24em",
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
    </SectionFrame>
  );
}
