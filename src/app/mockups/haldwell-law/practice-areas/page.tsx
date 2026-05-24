import { ServicesBlock } from "@/templates/01-haldwell-law/blocks/services";
import { CtaBanner } from "@/components/site/cta-banner";
import { templateModule } from "@/templates/01-haldwell-law";

export const metadata = {
  title: "Practice areas | Haldwell & Carr",
  description:
    "Five practice areas read in full by a partner before the first hour is billed.",
};

export default function PracticeAreasPage() {
  const { theme, content } = templateModule;
  return (
    <>
      <section style={{ background: "var(--tpl-card)" }} className="border-b">
        <div
          className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28"
          style={{ borderColor: "var(--tpl-line)" }}
        >
          <p
            className="text-xs uppercase"
            style={{
              color: "var(--tpl-accent)",
              letterSpacing: "0.22em",
              fontFamily: "var(--tpl-font-body)",
              fontWeight: 600,
            }}
          >
            Practice areas
          </p>
          <h1
            className="mt-6 max-w-3xl text-5xl leading-[1.05] md:text-7xl"
            style={{
              color: "var(--tpl-ink)",
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              letterSpacing: theme.type.displayTracking,
            }}
          >
            Five practice areas. One unhurried bench.
          </h1>
          <p
            className="mt-8 max-w-2xl text-lg leading-relaxed"
            style={{
              color: "var(--tpl-muted)",
              fontFamily: "var(--tpl-font-body)",
            }}
          >
            We hold our practice tight on purpose. Adding a sixth area is a decision we have postponed twice in twelve years.
          </p>
        </div>
      </section>
      <ServicesBlock />
      <CtaBanner theme={theme} content={content} />
    </>
  );
}
