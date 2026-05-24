import { SignatureBlock } from "@/templates/01-haldwell-law/blocks/signature";
import { CtaBanner } from "@/components/site/cta-banner";
import { templateModule } from "@/templates/01-haldwell-law";

export const metadata = {
  title: "Attorneys | Haldwell & Carr",
  description:
    "Four partners. Three associates. A bench held tight on purpose.",
};

export default function AttorneysPage() {
  const { theme, content } = templateModule;
  return (
    <>
      <section style={{ background: "var(--tpl-bg)" }} className="border-b">
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
            Attorneys
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
            Seven attorneys. Two assistants. One library.
          </h1>
          <p
            className="mt-8 max-w-2xl text-lg leading-relaxed"
            style={{
              color: "var(--tpl-muted)",
              fontFamily: "var(--tpl-font-body)",
            }}
          >
            We list the bar admissions next to each name because we think the question deserves to be answered before you ask it.
          </p>
        </div>
      </section>
      <SignatureBlock />
      <CtaBanner theme={theme} content={content} />
    </>
  );
}
