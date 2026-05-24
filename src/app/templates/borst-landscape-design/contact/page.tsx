import { Clock, MapPin, Phone, Mail } from "lucide-react";
import { ContactForm } from "@/components/site/contact-form";
import { templateModule } from "@/templates/07-borst-landscape-design";

export const metadata = {
  title: "Contact | Borst Landscape & Design",
  description: "Request a free on-site quote. A designer will walk the property and follow up within the week.",
};

export default function ContactPage() {
  const { theme, content } = templateModule;
  return (
    <section style={{ background: "var(--tpl-bg)" }}>
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-12">
          <header className="md:col-span-5">
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
              Get in touch
            </p>
            <h1
              className="mt-4 text-5xl leading-tight md:text-6xl"
              style={{
                color: "var(--tpl-ink)",
                fontFamily: "var(--tpl-font-display)",
                fontWeight: theme.type.displayWeight,
                letterSpacing: theme.type.displayTracking,
              }}
            >
              Request a free on-site quote.
            </h1>
            <p
              className="mt-6 max-w-md text-lg leading-relaxed"
              style={{
                color: "var(--tpl-muted)",
                fontFamily: "var(--tpl-font-body)",
              }}
            >
              Tell us a little about the property and what you have in mind. A senior designer will follow up to schedule a walk-through.
            </p>
            <ul className="mt-10 space-y-4 text-base" style={{ color: "var(--tpl-ink)" }}>
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-1 h-5 w-5 shrink-0"
                  aria-hidden="true"
                  style={{ color: "var(--tpl-accent)" }}
                />
                <span className="whitespace-pre-line">{content.business.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  className="mt-1 h-5 w-5 shrink-0"
                  aria-hidden="true"
                  style={{ color: "var(--tpl-accent)" }}
                />
                <span>
                  {content.business.hours.map((h) => (
                    <span key={h} className="block leading-relaxed">
                      {h}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  className="mt-1 h-5 w-5 shrink-0"
                  aria-hidden="true"
                  style={{ color: "var(--tpl-accent)" }}
                />
                <span>{content.business.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  className="mt-1 h-5 w-5 shrink-0"
                  aria-hidden="true"
                  style={{ color: "var(--tpl-accent)" }}
                />
                <a href={`mailto:${content.business.email}`}>{content.business.email}</a>
              </li>
            </ul>
          </header>
          <div className="md:col-span-7">
            <div
              className="p-6 md:p-8"
              style={{
                background: "var(--tpl-card)",
                border: `1px solid var(--tpl-line)`,
                borderRadius: `var(--tpl-radius)`,
              }}
            >
              <ContactForm
                theme={theme}
                submitLabel="Request a free quote"
                subject="Borst Landscape quote request"
                inputBackground="#FFFFFF"
                reachTimeOptions={[
                  "Morning",
                  "Early Afternoon - Afternoon",
                  "Late Afternoon",
                  "Evening",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
