import { CtaBanner } from "@/components/site/cta-banner";
import { templateModule } from "@/templates/06-tidewater-cpa";
import { partners } from "@/templates/06-tidewater-cpa/content";

const PARTNER_PHOTOS = [
  "/mockups/tidewater-cpa/partner-3.jpg",
  "/mockups/tidewater-cpa/partner-1.jpg",
  "/mockups/tidewater-cpa/partner-2.jpg",
  "/mockups/tidewater-cpa/partner-4.jpg",
];

export const metadata = {
  title: "Partners | Tidewater Partners",
  description: "Four partners. One bench.",
};

export default function PartnersPage() {
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
            Partners
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
            Four partners. One bench.
          </h1>
        </div>
      </section>
      <section style={{ background: "var(--tpl-card)" }}>
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {partners.map((p, i) => (
              <article key={p.name} className="grid grid-cols-[auto_1fr] gap-6 md:gap-10">
                <div className="w-28 md:w-40">
                  <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 5" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={PARTNER_PHOTOS[i % PARTNER_PHOTOS.length]}
                      alt={p.name}
                      loading="lazy"
                      decoding="async"
                      className="block h-full w-full object-cover"
                    />
                  </div>
                </div>
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
                    {p.name}
                  </h2>
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
                    {p.role}
                  </p>
                  <p
                    className="mt-4 text-base leading-relaxed"
                    style={{
                      color: "var(--tpl-muted)",
                      fontFamily: "var(--tpl-font-body)",
                    }}
                  >
                    {p.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner theme={theme} content={content} />
    </>
  );
}
