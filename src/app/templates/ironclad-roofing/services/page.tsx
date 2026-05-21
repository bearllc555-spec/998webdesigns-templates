import { ServicesBlock } from "@/templates/04-ironclad-roofing/blocks/services";
import { CtaBanner } from "@/components/site/cta-banner";
import { templateModule } from "@/templates/04-ironclad-roofing";

export const metadata = {
  title: "Services | Ironclad Roofing",
  description: "Five trades, one crew. Same truck, same handshake.",
};

export default function IroncladServicesPage() {
  const { theme, content } = templateModule;
  return (
    <>
      <section style={{ background: "var(--tpl-bg)" }}>
        <div className="mx-auto max-w-6xl px-5 pt-16 pb-10 md:px-8 md:pt-24 md:pb-16">
          <p
            className="text-xs"
            style={{
              color: "var(--tpl-accent)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              fontFamily: "var(--tpl-font-body)",
              fontWeight: 700,
            }}
          >
            Services
          </p>
          <h1
            className="mt-5 max-w-3xl text-5xl leading-[0.95] md:text-7xl"
            style={{
              color: "var(--tpl-ink)",
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              textTransform: "uppercase",
            }}
          >
            WHAT WE DO.
          </h1>
          <span
            className="mt-5 inline-block h-1 w-16"
            style={{ background: "var(--tpl-accent)" }}
            aria-hidden="true"
          />
        </div>
      </section>
      <ServicesBlock />
      <CtaBanner theme={theme} content={content} />
    </>
  );
}
