import { theme } from "../theme";
import { content } from "../content";

export function ServicesBlock() {
  return (
    <section
      className="border-b"
      style={{ background: "var(--tpl-card)", borderColor: "var(--tpl-line)" }}
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <p
              className="text-xs"
              style={{
                color: "var(--tpl-muted)",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                fontFamily: "var(--tpl-font-body)",
              }}
            >
              {content.services.sectionLabel}
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
              {content.services.sectionHeadline}
            </h2>
            <p
              className="mt-7 max-w-sm text-base leading-relaxed"
              style={{
                color: "var(--tpl-muted)",
                fontFamily: "var(--tpl-font-body)",
              }}
            >
              {content.services.sectionSub}
            </p>
          </div>
          <ol className="md:col-span-8">
            {content.services.items.map((it, i) => (
              <li
                key={it.name}
                className="grid grid-cols-[auto_1fr] gap-6 border-t py-8 md:gap-10 md:py-10"
                style={{ borderColor: "var(--tpl-line)" }}
              >
                <p
                  className="text-base"
                  style={{
                    color: "var(--tpl-accent)",
                    fontFamily: "var(--tpl-font-body)",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                  }}
                >
                  {it.number}
                </p>
                <div>
                  <h3
                    className="text-2xl leading-tight md:text-3xl"
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
                    className="mt-3 max-w-2xl text-base leading-relaxed"
                    style={{
                      color: "var(--tpl-muted)",
                      fontFamily: "var(--tpl-font-body)",
                    }}
                  >
                    {it.summary}
                  </p>
                </div>
              </li>
            ))}
            <li className="border-t" style={{ borderColor: "var(--tpl-line)" }} aria-hidden="true" />
          </ol>
        </div>
      </div>
    </section>
  );
}
