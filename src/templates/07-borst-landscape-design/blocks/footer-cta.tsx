import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { theme } from "../theme";
import { content } from "../content";

export function FooterCtaBlock() {
  return (
    <section style={{ background: "var(--tpl-accent-soft)" }}>
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid items-center gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2
              className="text-3xl leading-tight md:text-5xl"
              style={{
                color: "var(--tpl-ink)",
                fontFamily: "var(--tpl-font-display)",
                fontWeight: theme.type.displayWeight,
                letterSpacing: theme.type.displayTracking,
              }}
            >
              Get in touch and receive a free quote!
            </h2>
          </div>
          <div className="md:col-span-5 flex flex-wrap items-center justify-start gap-4 md:justify-end">
            <Link
              href={theme.primaryCta.href}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm transition hover:opacity-90"
              style={{
                background: "var(--tpl-accent)",
                color: "var(--tpl-accent-ink)",
                borderRadius: 999,
                fontFamily: "var(--tpl-font-body)",
                fontWeight: 600,
              }}
            >
              Get in touch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={`tel:${content.business.phone.replace(/[^0-9+]/g, "")}`}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm transition hover:opacity-80"
              style={{
                background: "var(--tpl-bg)",
                color: "var(--tpl-ink)",
                border: "1px solid var(--tpl-line)",
                borderRadius: 999,
                fontFamily: "var(--tpl-font-body)",
                fontWeight: 500,
              }}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {content.business.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
