import { ContactForm } from "@/components/site/contact-form";
import { templateModule } from "@/templates/06-tidewater-cpa";
import { offices } from "@/templates/06-tidewater-cpa/content";

export const metadata = {
  title: "Contact | Tidewater Partners",
  description: "A first conversation is held by a partner.",
};

export default function TidewaterContactPage() {
  const { theme } = templateModule;
  return (
    <section style={{ background: "var(--tpl-bg)" }}>
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-12">
          <header className="md:col-span-5">
            <p
              className="text-xs"
              style={{
                color: "var(--tpl-muted)",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                fontFamily: "var(--tpl-font-body)",
              }}
            >
              Contact
            </p>
            <h1
              className="mt-5 text-5xl leading-[1.05] md:text-6xl"
              style={{
                color: "var(--tpl-ink)",
                fontFamily: "var(--tpl-font-display)",
                fontWeight: theme.type.displayWeight,
                letterSpacing: theme.type.displayTracking,
              }}
            >
              The first conversation is held by a partner.
            </h1>
            <p
              className="mt-6 max-w-md text-lg leading-relaxed"
              style={{
                color: "var(--tpl-muted)",
                fontFamily: "var(--tpl-font-body)",
              }}
            >
              Reach out by form or by phone. We will route the inquiry to the partner most likely to be the right fit. If we are not the right firm, we will say so.
            </p>
            <div className="mt-12 space-y-8">
              {offices.map((o) => (
                <div key={o.city} className="border-t pt-6" style={{ borderColor: "var(--tpl-line)" }}>
                  <p
                    className="text-xs"
                    style={{
                      color: "var(--tpl-muted)",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      fontFamily: "var(--tpl-font-body)",
                    }}
                  >
                    {o.city} office
                  </p>
                  <p className="mt-3 whitespace-pre-line text-base">{o.address}</p>
                  <p className="mt-3 text-base">{o.phone}</p>
                </div>
              ))}
            </div>
          </header>
          <div className="md:col-span-7">
            <div
              className="p-6 md:p-8"
              style={{
                background: "var(--tpl-card)",
                border: `1px solid var(--tpl-line)`,
              }}
            >
              <ContactForm theme={theme} submitLabel="Send to the firm" subject="Tidewater Partners inquiry" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
