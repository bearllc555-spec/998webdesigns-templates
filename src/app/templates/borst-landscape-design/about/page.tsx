import { AboutSnippet } from "@/templates/07-borst-landscape-design/blocks/about-snippet";
import { CtaBanner } from "@/components/site/cta-banner";
import { templateModule } from "@/templates/07-borst-landscape-design";
import { team } from "@/templates/07-borst-landscape-design/content";
import { Portrait } from "@/templates/07-borst-landscape-design/images";

export const metadata = {
  title: "About | Borst Landscape & Design",
  description: "A nationally recognized landscape firm founded in 1989 by Mark Borst. Built around a stable, certified team in Allendale, NJ.",
};

export default function AboutPage() {
  const { theme, content } = templateModule;
  return (
    <>
      <section style={{ background: "var(--tpl-bg)" }}>
        <div className="mx-auto max-w-6xl px-5 pt-16 pb-8 md:px-8 md:pt-24 md:pb-12">
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
            About the firm
          </p>
          <h1
            className="mt-4 max-w-3xl text-5xl leading-[1.05] md:text-6xl"
            style={{
              color: "var(--tpl-ink)",
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              letterSpacing: theme.type.displayTracking,
            }}
          >
            One firm, one bench, thirty-five years.
          </h1>
        </div>
      </section>
      <AboutSnippet />
      <section style={{ background: "var(--tpl-card)" }}>
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
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
              The team
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
              People who pick up the phone.
            </h2>
          </div>
          <ul className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((p, i) => (
              <li
                key={p.name}
                className="overflow-hidden"
                style={{
                  background: "var(--tpl-bg)",
                  border: `1px solid var(--tpl-line)`,
                  borderRadius: `var(--tpl-radius)`,
                }}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 5" }}>
                  <Portrait theme={theme} seed={i + 1} className="block h-full w-full" />
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl leading-snug"
                    style={{
                      color: "var(--tpl-ink)",
                      fontFamily: "var(--tpl-font-display)",
                      fontWeight: 600,
                    }}
                  >
                    {p.name}
                  </h3>
                  <p
                    className="mt-1 text-xs"
                    style={{
                      color: "var(--tpl-accent)",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      fontFamily: "var(--tpl-font-body)",
                      fontWeight: 600,
                    }}
                  >
                    {p.role}
                  </p>
                  <p
                    className="mt-4 text-sm leading-relaxed"
                    style={{ color: "var(--tpl-muted)" }}
                  >
                    {p.bio}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBanner theme={theme} content={content} />
    </>
  );
}
