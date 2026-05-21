import { theme } from "../theme";
import { menuSections } from "../content";

export function MenuBlock() {
  return (
    <section style={{ background: "var(--tpl-bg)" }}>
      <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
        {menuSections.map((sec, i) => (
          <div key={sec.title} className={i === 0 ? "" : "mt-20"}>
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <h2
                className="text-4xl leading-tight md:text-5xl"
                style={{
                  color: "var(--tpl-ink)",
                  fontFamily: "var(--tpl-font-display)",
                  fontWeight: theme.type.displayWeight,
                  letterSpacing: theme.type.displayTracking,
                  fontStyle: "italic",
                }}
              >
                {sec.title}
              </h2>
              <p
                className="text-sm max-w-md"
                style={{
                  color: "var(--tpl-muted)",
                  fontFamily: "var(--tpl-font-body)",
                }}
              >
                {sec.note}
              </p>
            </div>
            <ul className="mt-10 space-y-6">
              {sec.items.map((item) => (
                <li
                  key={item.name}
                  className="grid items-baseline gap-2 md:grid-cols-[1fr_auto]"
                >
                  <div
                    className="grid items-baseline gap-2"
                    style={{ gridTemplateColumns: "auto 1fr" }}
                  >
                    <h3
                      className="text-xl leading-snug"
                      style={{
                        color: "var(--tpl-ink)",
                        fontFamily: "var(--tpl-font-display)",
                        fontWeight: theme.type.displayWeight,
                      }}
                    >
                      {item.name}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="ml-2 mr-3 self-end h-2 w-full"
                      style={{
                        borderBottom: `2px dotted var(--tpl-line)`,
                        transform: "translateY(-4px)",
                      }}
                    />
                  </div>
                  <p
                    className="text-lg"
                    style={{
                      color: "var(--tpl-accent)",
                      fontFamily: "var(--tpl-font-display)",
                      fontWeight: 600,
                    }}
                  >
                    {item.price}
                  </p>
                  <p
                    className="text-sm md:col-span-2 md:-mt-3"
                    style={{
                      color: "var(--tpl-muted)",
                      fontFamily: "var(--tpl-font-body)",
                    }}
                  >
                    {item.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
