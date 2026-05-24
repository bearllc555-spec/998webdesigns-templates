import { Phone, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/site/contact-form";
import { templateModule } from "@/templates/04-ironclad-roofing";

export const metadata = {
  title: "Free estimate | Ironclad Roofing",
  description: "We come out, we measure, we write the number. Most estimates in 24 hours.",
};

export default function IroncladEstimatePage() {
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
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                fontFamily: "var(--tpl-font-body)",
                fontWeight: 700,
              }}
            >
              Free estimate
            </p>
            <h1
              className="mt-5 text-5xl leading-[0.95] md:text-6xl"
              style={{
                color: "var(--tpl-ink)",
                fontFamily: "var(--tpl-font-display)",
                fontWeight: theme.type.displayWeight,
                textTransform: "uppercase",
              }}
            >
              TELL US WHERE. WE BRING THE LADDER.
            </h1>
            <span
              className="mt-5 inline-block h-1 w-16"
              style={{ background: "var(--tpl-accent)" }}
              aria-hidden="true"
            />
            <p
              className="mt-8 max-w-md text-lg leading-relaxed"
              style={{
                color: "var(--tpl-muted)",
                fontFamily: "var(--tpl-font-body)",
              }}
            >
              Fill the form or call the office. We will be out by week's end with a written estimate and a clean truck.
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
                    <span key={h} className="block">
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
            </ul>
          </header>
          <div className="md:col-span-7">
            <div
              className="p-6 md:p-8"
              style={{
                background: "var(--tpl-card)",
                border: `2px solid var(--tpl-line)`,
              }}
            >
              <ContactForm theme={theme} submitLabel="Send to the office" subject="Roofing estimate request" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
