import { Clock, MapPin, Phone, Mail } from "lucide-react";
import { ContactForm } from "@/components/site/contact-form";
import { templateModule } from "@/templates/03-northwind-dental";

export const metadata = {
  title: "Book a visit | Northwind Dental",
  description: "Most slots open within the week. Booking takes about ninety seconds.",
};

export default function BookPage() {
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
              Book a visit
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
              Pick a time. We will text back today.
            </h1>
            <p
              className="mt-6 max-w-md text-lg leading-relaxed"
              style={{
                color: "var(--tpl-muted)",
                fontFamily: "var(--tpl-font-body)",
              }}
            >
              Tell us a little about what brings you in. We will text the same day to confirm and run insurance behind the scenes.
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
                  {content.business.hours.map((h, i) => (
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
                boxShadow: "0 1px 2px rgba(14, 17, 22, 0.04), 0 8px 24px rgba(14, 17, 22, 0.04)",
              }}
            >
              <ContactForm theme={theme} submitLabel="Request a visit" subject="Northwind Dental booking" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
