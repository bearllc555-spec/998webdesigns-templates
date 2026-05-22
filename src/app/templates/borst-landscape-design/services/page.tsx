import { ServicesBlock } from "@/templates/07-borst-landscape-design/blocks/services";
import { ProcessBlock } from "@/templates/07-borst-landscape-design/blocks/process";
import { CtaBanner } from "@/components/site/cta-banner";
import { templateModule } from "@/templates/07-borst-landscape-design";

export const metadata = {
  title: "Services | Borst Landscape & Design",
  description: "Design, build, and maintenance services for residential and commercial properties in Bergen County, NJ.",
};

export default function ServicesPage() {
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
            Services
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
            Full-service landscape design, build, and care.
          </h1>
        </div>
      </section>
      <ServicesBlock />
      <ProcessBlock />
      <CtaBanner theme={theme} content={content} />
    </>
  );
}
