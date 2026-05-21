import { ServicesBlock } from "@/templates/03-northwind-dental/blocks/services";
import { CtaBanner } from "@/components/site/cta-banner";
import { templateModule } from "@/templates/03-northwind-dental";

export const metadata = {
  title: "Services | Northwind Dental",
  description: "Real outcomes, in plain language.",
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
            What we do, plainly.
          </h1>
        </div>
      </section>
      <ServicesBlock />
      <CtaBanner theme={theme} content={content} />
    </>
  );
}
