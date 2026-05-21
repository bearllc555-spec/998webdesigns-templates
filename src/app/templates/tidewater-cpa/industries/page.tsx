import { CtaBanner } from "@/components/site/cta-banner";
import { templateModule } from "@/templates/06-tidewater-cpa";
import { industries } from "@/templates/06-tidewater-cpa/content";

export const metadata = {
  title: "Industries | Tidewater Partners",
  description: "Twelve industry sectors. Six headline practices.",
};

export default function IndustriesPage() {
  const { theme, content } = templateModule;
  return (
    <>
      <section
        className="border-b"
        style={{ background: "var(--tpl-bg)", borderColor: "var(--tpl-line)" }}
      >
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p
            className="text-xs"
            style={{
              color: "var(--tpl-muted)",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              fontFamily: "var(--tpl-font-body)",
            }}
          >
            Industries
          </p>
          <h1
            className="mt-5 max-w-3xl text-5xl leading-[1.05] md:text-6xl"
            style={{
              color: "var(--tpl-ink)",
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              letterSpacing: theme.type.displayTracking,
            }}
          >
            Twelve sectors. Six headline practices.
          </h1>
        </div>
      </section>
      <section style={{ background: "var(--tpl-card)" }}>
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <ol className="grid grid-cols-1 gap-0 md:grid-cols-2">
            {industries.map((it, i) => (
              <li
                key={it.name}
                className="grid grid-cols-[auto_1fr] gap-5 border-t py-8 md:py-10"
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
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div>
                  <h2
                    className="text-2xl leading-tight md:text-3xl"
                    style={{
                      color: "var(--tpl-ink)",
                      fontFamily: "var(--tpl-font-display)",
                      fontWeight: theme.type.displayWeight,
                      letterSpacing: theme.type.displayTracking,
                    }}
                  >
                    {it.name}
                  </h2>
                  <p
                    className="mt-3 text-base leading-relaxed"
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
            <li className="border-t md:col-span-2" style={{ borderColor: "var(--tpl-line)" }} aria-hidden="true" />
          </ol>
        </div>
      </section>
      <CtaBanner theme={theme} content={content} />
    </>
  );
}
