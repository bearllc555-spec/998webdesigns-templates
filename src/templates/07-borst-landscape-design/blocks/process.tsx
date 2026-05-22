import { theme } from "../theme";
import { process } from "../content";

export function ProcessBlock() {
  return (
    <section style={{ background: "var(--tpl-bg)" }}>
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
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
            How it works
          </p>
          <h2
            className="mt-4 text-4xl leading-tight md:text-5xl"
            style={{
              color: "var(--tpl-ink)",
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              letterSpacing: theme.type.displayTracking,
            }}
          >
            A simple, effective process.
          </h2>
        </div>
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {process.map((s) => (
            <li
              key={s.title}
              className="p-7"
              style={{
                background: "var(--tpl-card)",
                border: `1px solid var(--tpl-line)`,
                borderRadius: `var(--tpl-radius)`,
              }}
            >
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
                {s.label}
              </p>
              <h3
                className="mt-3 text-xl leading-snug"
                style={{
                  color: "var(--tpl-ink)",
                  fontFamily: "var(--tpl-font-display)",
                  fontWeight: 600,
                  letterSpacing: theme.type.displayTracking,
                }}
              >
                {s.title}
              </h3>
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{
                  color: "var(--tpl-muted)",
                  fontFamily: "var(--tpl-font-body)",
                }}
              >
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
