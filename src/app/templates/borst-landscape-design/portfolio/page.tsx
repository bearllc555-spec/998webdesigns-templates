import { CtaBanner } from "@/components/site/cta-banner";
import { templateModule } from "@/templates/07-borst-landscape-design";
import { portfolio } from "@/templates/07-borst-landscape-design/content";
import { Wide, Tile } from "@/templates/07-borst-landscape-design/images";

export const metadata = {
  title: "Portfolio | Borst Landscape & Design",
  description: "Selected residential and commercial landscape projects across Bergen County and northern New Jersey.",
};

export default function PortfolioPage() {
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
            Portfolio
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
            Selected projects from the last three decades.
          </h1>
        </div>
      </section>
      <section style={{ background: "var(--tpl-card)" }}>
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((p, i) => {
              const Motif = i % 2 === 0 ? Wide : Tile;
              return (
                <li
                  key={p.title}
                  className="overflow-hidden"
                  style={{
                    background: "var(--tpl-bg)",
                    border: `1px solid var(--tpl-line)`,
                    borderRadius: `var(--tpl-radius)`,
                  }}
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
                    <Motif theme={theme} seed={i + 1} className="block h-full w-full" />
                  </div>
                  <div className="p-6">
                    <p
                      className="text-xs"
                      style={{
                        color: "var(--tpl-accent)",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        fontFamily: "var(--tpl-font-body)",
                        fontWeight: 600,
                      }}
                    >
                      {p.location}
                    </p>
                    <h2
                      className="mt-2 text-xl leading-snug"
                      style={{
                        color: "var(--tpl-ink)",
                        fontFamily: "var(--tpl-font-display)",
                        fontWeight: 600,
                        letterSpacing: theme.type.displayTracking,
                      }}
                    >
                      {p.title}
                    </h2>
                    <p
                      className="mt-3 text-sm leading-relaxed"
                      style={{ color: "var(--tpl-muted)" }}
                    >
                      {p.summary}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <CtaBanner theme={theme} content={content} />
    </>
  );
}
