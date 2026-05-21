import { SectionFrame } from "./section-frame";
import { theme } from "../theme";
import { content } from "../content";

export function ServicesBlock() {
  return (
    <SectionFrame label={content.services.sectionLabel}>
      <h2
        className="mx-auto max-w-2xl text-center text-3xl leading-snug md:text-5xl"
        style={{
          color: "var(--tpl-ink)",
          fontFamily: "var(--tpl-font-display)",
          fontWeight: theme.type.displayWeight,
          letterSpacing: theme.type.displayTracking,
        }}
      >
        {content.services.sectionHeadline}
      </h2>
      <p
        className="mx-auto mt-7 max-w-xl text-center text-base leading-relaxed"
        style={{
          color: "var(--tpl-muted)",
          fontFamily: "var(--tpl-font-body)",
        }}
      >
        {content.services.sectionSub}
      </p>
      <ul className="mx-auto mt-16 max-w-2xl">
        {content.services.items.map((it, i) => (
          <li
            key={it.name}
            className={`py-10 text-center ${i === 0 ? "" : "border-t"}`}
            style={{ borderColor: "var(--tpl-line)" }}
          >
            <h3
              className="text-2xl md:text-3xl"
              style={{
                color: "var(--tpl-ink)",
                fontFamily: "var(--tpl-font-display)",
                fontWeight: theme.type.displayWeight,
                letterSpacing: theme.type.displayTracking,
              }}
            >
              {it.name}
            </h3>
            <p
              className="mx-auto mt-3 max-w-sm text-base leading-relaxed"
              style={{
                color: "var(--tpl-muted)",
                fontFamily: "var(--tpl-font-body)",
              }}
            >
              {it.summary}
            </p>
          </li>
        ))}
      </ul>
    </SectionFrame>
  );
}
