import { ContactForm } from "@/components/site/contact-form";
import { templateModule } from "@/templates/01-haldwell-law";

export const metadata = {
  title: "Contact | Haldwell & Carr",
  description:
    "Tell us what you are working on. We will tell you whether we are the right firm before either of us spends another hour.",
};

export default function ContactPage() {
  const { theme, content } = templateModule;
  return (
    <section style={{ background: "var(--tpl-bg)" }}>
      <div
        className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28"
        style={{ borderColor: "var(--tpl-line)" }}
      >
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <header className="md:col-span-5">
            <p
              className="text-xs uppercase"
              style={{
                color: "var(--tpl-accent)",
                letterSpacing: "0.22em",
                fontFamily: "var(--tpl-font-body)",
                fontWeight: 600,
              }}
            >
              Contact
            </p>
            <h1
              className="mt-6 text-5xl leading-[1.05] md:text-6xl"
              style={{
                color: "var(--tpl-ink)",
                fontFamily: "var(--tpl-font-display)",
                fontWeight: theme.type.displayWeight,
                letterSpacing: theme.type.displayTracking,
              }}
            >
              The first conversation is unhurried.
            </h1>
            <p
              className="mt-6 max-w-md text-lg leading-relaxed"
              style={{
                color: "var(--tpl-muted)",
                fontFamily: "var(--tpl-font-body)",
              }}
            >
              Tell us what you are working on. We will read it carefully and reply within one business day.
            </p>
            <div
              className="mt-10 space-y-4 border-t pt-6 text-base"
              style={{ borderColor: "var(--tpl-line)", color: "var(--tpl-ink)" }}
            >
              <p className="whitespace-pre-line">{content.business.address}</p>
              <p>{content.business.phone}</p>
              <p>
                <a href={`mailto:${content.business.email}`} className="hover:opacity-70">
                  {content.business.email}
                </a>
              </p>
            </div>
          </header>
          <div className="md:col-span-7">
            <div
              className="border p-6 md:p-8"
              style={{ borderColor: "var(--tpl-line)", background: "var(--tpl-card)" }}
            >
              <ContactForm theme={theme} submitLabel="Send to the office" subject="Haldwell & Carr inquiry" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
