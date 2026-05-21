import { ServicesBlock } from "@/templates/06-tidewater-cpa/blocks/services";
import { CtaBanner } from "@/components/site/cta-banner";
import { templateModule } from "@/templates/06-tidewater-cpa";

export const metadata = {
  title: "Services | Tidewater Partners",
  description: "Six services. Practiced together.",
};

export default function TidewaterServicesPage() {
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
            Services
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
            Six services. Practiced together by one bench.
          </h1>
        </div>
      </section>
      <ServicesBlock />
      <CtaBanner theme={theme} content={content} />
    </>
  );
}
