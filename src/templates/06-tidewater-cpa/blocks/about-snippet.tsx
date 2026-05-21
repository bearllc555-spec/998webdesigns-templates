import { theme } from "../theme";
import { content } from "../content";

export function AboutSnippet() {
  return (
    <section
      className="border-b"
      style={{ background: "var(--tpl-card)", borderColor: "var(--tpl-line)" }}
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <p
              className="text-xs"
              style={{
                color: "var(--tpl-muted)",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                fontFamily: "var(--tpl-font-body)",
              }}
            >
              {content.about.eyebrow}
            </p>
            <h2
              className="mt-5 text-3xl leading-tight md:text-5xl"
              style={{
                color: "var(--tpl-ink)",
                fontFamily: "var(--tpl-font-display)",
                fontWeight: theme.type.displayWeight,
                letterSpacing: theme.type.displayTracking,
              }}
            >
              {content.about.headline}
            </h2>
          </div>
          <div
            className="md:col-span-7 space-y-5 text-lg leading-relaxed"
            style={{
              color: "var(--tpl-ink)",
              fontFamily: "var(--tpl-font-body)",
            }}
          >
            {content.about.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
