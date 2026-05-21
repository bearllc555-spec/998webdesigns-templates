import { theme } from "../theme";
import { content } from "../content";

export function StatBlock() {
  return (
    <section
      className="border-b"
      style={{ background: "var(--tpl-bg)", borderColor: "var(--tpl-line)" }}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <ul className="grid grid-cols-2 divide-y md:grid-cols-4 md:divide-y-0 md:divide-x">
          {content.about.stats?.map((s) => (
            <li
              key={s.label}
              className="px-2 py-8 first:pl-0 last:pr-0 md:px-8 md:py-2"
              style={{ borderColor: "var(--tpl-line)" }}
            >
              <p
                className="text-5xl leading-none md:text-6xl"
                style={{
                  color: "var(--tpl-ink)",
                  fontFamily: "var(--tpl-font-display)",
                  fontWeight: theme.type.displayWeight,
                  letterSpacing: theme.type.displayTracking,
                }}
              >
                {s.value}
              </p>
              <p
                className="mt-4 text-xs"
                style={{
                  color: "var(--tpl-muted)",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  fontFamily: "var(--tpl-font-body)",
                  fontWeight: 500,
                }}
              >
                {s.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
