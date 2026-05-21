import Link from "next/link";
import { CtaBanner } from "@/components/site/cta-banner";
import { templateModule } from "@/templates/06-tidewater-cpa";
import { insights } from "@/templates/06-tidewater-cpa/content";

export const metadata = {
  title: "Insights | Tidewater Partners",
  description: "Field notes from a four-partner regional firm.",
};

export default function TidewaterInsightsPage() {
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
            Insights
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
            Field notes from the bench.
          </h1>
        </div>
      </section>
      <section style={{ background: "var(--tpl-card)" }}>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <ul>
            {insights.map((p) => (
              <li
                key={p.title}
                className="grid gap-6 border-t py-10 md:grid-cols-12 md:gap-10"
                style={{ borderColor: "var(--tpl-line)" }}
              >
                <div className="md:col-span-3">
                  <p
                    className="text-xs"
                    style={{
                      color: "var(--tpl-muted)",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      fontFamily: "var(--tpl-font-body)",
                    }}
                  >
                    {p.date}
                  </p>
                  <p
                    className="mt-2 text-xs"
                    style={{
                      color: "var(--tpl-accent)",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      fontFamily: "var(--tpl-font-body)",
                      fontWeight: 600,
                    }}
                  >
                    {p.category}
                  </p>
                </div>
                <div className="md:col-span-9">
                  <h2
                    className="text-2xl leading-snug md:text-3xl"
                    style={{
                      color: "var(--tpl-ink)",
                      fontFamily: "var(--tpl-font-display)",
                      fontWeight: theme.type.displayWeight,
                      letterSpacing: theme.type.displayTracking,
                    }}
                  >
                    <Link href="#" className="hover:opacity-70">
                      {p.title}
                    </Link>
                  </h2>
                  <p
                    className="mt-4 max-w-2xl text-base leading-relaxed"
                    style={{
                      color: "var(--tpl-muted)",
                      fontFamily: "var(--tpl-font-body)",
                    }}
                  >
                    {p.summary}
                  </p>
                </div>
              </li>
            ))}
            <li className="border-t" style={{ borderColor: "var(--tpl-line)" }} aria-hidden="true" />
          </ul>
        </div>
      </section>
      <CtaBanner theme={theme} content={content} />
    </>
  );
}
