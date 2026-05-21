import { SectionFrame } from "./section-frame";
import { theme } from "../theme";
import { content } from "../content";

export function AboutSnippet() {
  return (
    <SectionFrame label={content.about.eyebrow ?? "Studio"}>
      <h2
        className="mx-auto max-w-2xl text-center text-3xl leading-snug md:text-5xl"
        style={{
          color: "var(--tpl-ink)",
          fontFamily: "var(--tpl-font-display)",
          fontWeight: theme.type.displayWeight,
          letterSpacing: theme.type.displayTracking,
        }}
      >
        {content.about.headline}
      </h2>
      <div
        className="mx-auto mt-12 max-w-2xl space-y-6 text-center text-lg leading-relaxed"
        style={{
          color: "var(--tpl-ink)",
          fontFamily: "var(--tpl-font-body)",
        }}
      >
        {content.about.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
        {content.about.stats?.map((s) => (
          <div key={s.label} className="text-center">
            <p
              className="text-4xl leading-tight md:text-5xl"
              style={{
                color: "var(--tpl-ink)",
                fontFamily: "var(--tpl-font-display)",
                fontWeight: theme.type.displayWeight,
              }}
            >
              {s.value}
            </p>
            <p
              className="mt-3 text-xs"
              style={{
                color: "var(--tpl-muted)",
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                fontFamily: "var(--tpl-font-body)",
              }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </SectionFrame>
  );
}
