import { MenuBlock } from "@/templates/02-maple-street-bakery/blocks/menu";
import { CtaBanner } from "@/components/site/cta-banner";
import { templateModule } from "@/templates/02-maple-street-bakery";
import { Wide as WideSvg } from "@/templates/02-maple-street-bakery/images";

export const metadata = {
  title: "Menu | Maple Street Bakery",
  description: "Today's bake list. Out of the oven by 7am.",
};

export default function MenuPage() {
  const { theme, content } = templateModule;
  return (
    <>
      <section
        className="border-b"
        style={{ background: "var(--tpl-bg)", borderColor: "var(--tpl-line)" }}
      >
        <div className="mx-auto max-w-5xl px-5 pt-16 pb-10 md:px-8 md:pt-24 md:pb-14">
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
            Today's bake list
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
            Bread by 7. Pastry through the morning.
          </h1>
          <p
            className="mt-6 max-w-2xl text-lg leading-relaxed"
            style={{
              color: "var(--tpl-muted)",
              fontFamily: "var(--tpl-font-body)",
            }}
          >
            Doughs are mixed the night before. Bread comes out of the oven by 7am. Pastries are baked through the morning. When it is gone for the day it is gone for the day!
          </p>
          <div className="mt-10">
            <WideSvg seed={1} theme={theme} className="h-auto w-full" />
          </div>
        </div>
      </section>
      <MenuBlock />
      <CtaBanner theme={theme} content={content} />
    </>
  );
}
