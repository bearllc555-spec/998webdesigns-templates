import { content } from "../content";
import { theme } from "../theme";

export function StatStrip() {
  return (
    <section
      className="relative"
      style={{ background: "var(--tpl-card)" }}
      aria-label="Company stats"
    >
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {content.about.stats?.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p
                className="text-6xl leading-none md:text-7xl"
                style={{
                  color: "var(--tpl-accent)",
                  fontFamily: "var(--tpl-font-display)",
                  fontWeight: theme.type.displayWeight,
                }}
              >
                {s.value}
              </p>
              <p
                className="mt-4 text-sm"
                style={{
                  color: "var(--tpl-ink)",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  fontFamily: "var(--tpl-font-body)",
                  fontWeight: 700,
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
