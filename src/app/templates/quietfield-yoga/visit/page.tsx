import { SectionFrame } from "@/templates/05-quietfield-yoga/blocks/section-frame";
import { CtaBanner } from "@/components/site/cta-banner";
import { templateModule } from "@/templates/05-quietfield-yoga";

export const metadata = {
  title: "Visit | Quietfield",
  description: "37 Riverside Lane, Hudson NY. The studio is silent fifteen minutes before each class.",
};

export default function VisitPage() {
  const { theme, content } = templateModule;
  return (
    <>
      <SectionFrame label="Visit">
        <h1
          className="mx-auto max-w-2xl text-center text-4xl leading-tight md:text-6xl"
          style={{
            color: "var(--tpl-ink)",
            fontFamily: "var(--tpl-font-display)",
            fontWeight: theme.type.displayWeight,
            letterSpacing: theme.type.displayTracking,
          }}
        >
          The river side of Hudson, the old workshop.
        </h1>
        <div className="mx-auto mt-16 max-w-2xl space-y-12 text-center">
          <div>
            <p
              className="text-xs"
              style={{
                color: "var(--tpl-muted)",
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                fontFamily: "var(--tpl-font-body)",
              }}
            >
              Address
            </p>
            <p className="mt-3 whitespace-pre-line text-lg leading-snug">{content.business.address}</p>
          </div>
          <div>
            <p
              className="text-xs"
              style={{
                color: "var(--tpl-muted)",
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                fontFamily: "var(--tpl-font-body)",
              }}
            >
              Hours
            </p>
            <ul className="mt-3 space-y-2 text-lg leading-snug">
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
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                fontFamily: "var(--tpl-font-body)",
              }}
            >
              Reach us
            </p>
            <p className="mt-3 text-lg">{content.business.phone}</p>
            <p className="text-lg">
              <a
                href={`mailto:${content.business.email}`}
                style={{
                  borderBottom: `1px solid var(--tpl-line)`,
                  paddingBottom: 2,
                }}
              >
                {content.business.email}
              </a>
            </p>
          </div>
        </div>
      </SectionFrame>
      <CtaBanner theme={theme} content={content} />
    </>
  );
}
