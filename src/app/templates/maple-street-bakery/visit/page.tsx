import { CtaBanner } from "@/components/site/cta-banner";
import { templateModule } from "@/templates/02-maple-street-bakery";

export const metadata = {
  title: "Visit | Maple Street Bakery",
  description: "412 Maple Street, Brattleboro VT. Tuesday through Sunday.",
};

export default function VisitPage() {
  const { theme, content } = templateModule;
  return (
    <>
      <section
        className="border-b"
        style={{ background: "var(--tpl-bg)", borderColor: "var(--tpl-line)" }}
      >
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
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
            Visit
          </p>
          <h1
            className="mt-5 text-5xl leading-tight md:text-7xl"
            style={{
              color: "var(--tpl-ink)",
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              letterSpacing: theme.type.displayTracking,
              fontStyle: "italic",
            }}
          >
            412 Maple Street.
          </h1>
          <p
            className="mt-6 max-w-2xl text-lg leading-relaxed"
            style={{
              color: "var(--tpl-muted)",
              fontFamily: "var(--tpl-font-body)",
            }}
          >
            Walk up the block from the river. The bakery is the one with the chair by the window and the smell of butter on the air.
          </p>
        </div>
      </section>
      <section style={{ background: "var(--tpl-card)" }} className="border-b">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-3 md:px-8 md:py-24">
          <div>
            <p
              className="text-xs"
              style={{
                color: "var(--tpl-muted)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontFamily: "var(--tpl-font-body)",
              }}
            >
              Address
            </p>
            <p
              className="mt-4 whitespace-pre-line text-lg leading-snug"
              style={{ color: "var(--tpl-ink)" }}
            >
              {content.business.address}
            </p>
          </div>
          <div>
            <p
              className="text-xs"
              style={{
                color: "var(--tpl-muted)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontFamily: "var(--tpl-font-body)",
              }}
            >
              Hours
            </p>
            <ul className="mt-4 space-y-2 text-lg leading-snug" style={{ color: "var(--tpl-ink)" }}>
              {content.business.hours.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
          <div>
            <p
              className="text-xs"
              style={{
                color: "var(--tpl-muted)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontFamily: "var(--tpl-font-body)",
              }}
            >
              Reach us
            </p>
            <p className="mt-4 text-lg leading-snug" style={{ color: "var(--tpl-ink)" }}>
              {content.business.phone}
            </p>
            <p className="mt-2 text-lg leading-snug" style={{ color: "var(--tpl-ink)" }}>
              <a
                href={`mailto:${content.business.email}`}
                style={{
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                  textDecorationColor: "var(--tpl-accent)",
                  textDecorationThickness: "2px",
                }}
              >
                {content.business.email}
              </a>
            </p>
          </div>
        </div>
      </section>
      <CtaBanner theme={theme} content={content} />
    </>
  );
}
