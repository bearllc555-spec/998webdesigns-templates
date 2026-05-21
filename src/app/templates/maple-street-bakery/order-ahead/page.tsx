import { ContactForm } from "@/components/site/contact-form";
import { templateModule } from "@/templates/02-maple-street-bakery";

export const metadata = {
  title: "Order ahead | Maple Street Bakery",
  description: "Order for pickup. Skip the line. Keep the chair.",
};

export default function OrderAheadPage() {
  const { theme } = templateModule;
  return (
    <section style={{ background: "var(--tpl-bg)" }}>
      <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <header>
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
              Order ahead
            </p>
            <h1
              className="mt-5 text-5xl leading-tight md:text-6xl"
              style={{
                color: "var(--tpl-ink)",
                fontFamily: "var(--tpl-font-display)",
                fontWeight: theme.type.displayWeight,
                letterSpacing: theme.type.displayTracking,
                fontStyle: "italic",
              }}
            >
              Skip the line. Keep the chair.
            </h1>
            <p
              className="mt-6 max-w-md text-lg leading-relaxed"
              style={{
                color: "var(--tpl-muted)",
                fontFamily: "var(--tpl-font-body)",
              }}
            >
              Tell us what you want and when you are coming. We will have it ready, paper bag and all. Order list opens at 6am for same-day. Friday and Saturday fill by 9.
            </p>
            <ul
              className="mt-8 space-y-2 text-sm"
              style={{ color: "var(--tpl-ink)", fontFamily: "var(--tpl-font-body)" }}
            >
              <li>- Same-day pickup orders only.</li>
              <li>- Whole-cake or whole-loaf orders 48 hours ahead, by phone.</li>
              <li>- We hold orders until close. After that, the chair-by-the-window crowd inherits them.</li>
            </ul>
          </header>
          <div
            className="p-6 md:p-8"
            style={{
              background: "var(--tpl-card)",
              border: `1px solid var(--tpl-line)`,
              borderRadius: `var(--tpl-radius)`,
            }}
          >
            <ContactForm theme={theme} submitLabel="Send my order" subject="Pickup order" />
          </div>
        </div>
      </div>
    </section>
  );
}
