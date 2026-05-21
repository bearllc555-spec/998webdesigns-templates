import { theme } from "../theme";
import { content } from "../content";

export function ServicesBlock() {
  return (
    <section style={{ background: "var(--tpl-bg)" }}>
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-3xl">
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
            {content.services.sectionLabel}
          </p>
          <h2
            className="mt-5 text-4xl leading-[0.95] md:text-6xl"
            style={{
              color: "var(--tpl-ink)",
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              textTransform: "uppercase",
            }}
          >
            {content.services.sectionHeadline}
          </h2>
          <span
            className="mt-5 inline-block h-1 w-16"
            style={{ background: "var(--tpl-accent)" }}
            aria-hidden="true"
          />
          <p
            className="mt-7 max-w-2xl text-lg leading-relaxed"
            style={{
              color: "var(--tpl-muted)",
              fontFamily: "var(--tpl-font-body)",
            }}
          >
            {content.services.sectionSub}
          </p>
        </div>
        <ul className="mt-12 grid divide-y" style={{ borderTop: `1px solid var(--tpl-line)` }}>
          {content.services.items.map((it, i) => (
            <li
              key={it.name}
              className="grid grid-cols-[auto_1fr_auto] items-baseline gap-6 border-b py-8 md:gap-10 md:py-10"
              style={{ borderColor: "var(--tpl-line)" }}
            >
              <span
                className="text-xl md:text-2xl"
                style={{
                  color: "var(--tpl-accent)",
                  fontFamily: "var(--tpl-font-display)",
                  fontWeight: theme.type.displayWeight,
                }}
              >
                0{i + 1}
              </span>
              <div>
                <h3
                  className="text-2xl leading-tight md:text-3xl"
                  style={{
                    color: "var(--tpl-ink)",
                    fontFamily: "var(--tpl-font-display)",
                    fontWeight: theme.type.displayWeight,
                    textTransform: "uppercase",
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
              <span
                aria-hidden="true"
                className="hidden h-px w-12 self-center md:inline-block"
                style={{ background: "var(--tpl-accent)" }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
