import { ServicesBlock } from "@/templates/05-quietfield-yoga/blocks/services";
import { CtaBanner } from "@/components/site/cta-banner";
import { templateModule } from "@/templates/05-quietfield-yoga";

export const metadata = {
  title: "Classes | Quietfield",
  description: "Four classes. One bench of senior teachers.",
};

export default function ClassesPage() {
  const { theme, content } = templateModule;
  return (
    <>
      <section style={{ background: "var(--tpl-bg)" }}>
        <div className="mx-auto max-w-3xl px-5 pt-24 pb-12 text-center md:px-6 md:pt-36">
          <p
            className="text-xs"
            style={{
              color: "var(--tpl-muted)",
              letterSpacing: "0.42em",
              textTransform: "uppercase",
              fontFamily: "var(--tpl-font-body)",
            }}
          >
            Classes
          </p>
          <div
            className="mx-auto mt-5 h-px w-32"
            style={{ background: "var(--tpl-line)" }}
            aria-hidden="true"
          />
          <h1
            className="mt-12 text-4xl leading-tight md:text-6xl"
            style={{
              color: "var(--tpl-ink)",
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              letterSpacing: theme.type.displayTracking,
            }}
          >
            The practice is slow on purpose.
          </h1>
        </div>
      </section>
      <ServicesBlock />
      <CtaBanner theme={theme} content={content} />
    </>
  );
}
