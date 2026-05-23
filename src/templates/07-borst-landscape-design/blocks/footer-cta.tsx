import Link from "next/link";
import { theme } from "../theme";
import { content } from "../content";
import { BORST_CONTAINER, BorstArrow, borstOutlineBtn, borstPrimaryBtn } from "../borst-ui";

export function FooterCtaBlock() {
  return (
    <section style={{ background: "var(--tpl-bg)" }}>
      <div className={`${BORST_CONTAINER} py-14 md:py-16`}>
        <div className="grid items-center gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2
              className="text-3xl leading-tight md:text-4xl lg:text-5xl"
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
          <div className="flex flex-wrap items-center justify-start gap-4 md:col-span-5 md:justify-end">
            <Link
              href={theme.primaryCta.href}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm transition hover:opacity-90"
              style={borstPrimaryBtn}
            >
              Get in touch
              <BorstArrow />
            </Link>
            <a
              href={`tel:${content.business.phone.replace(/[^0-9+]/g, "")}`}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm transition hover:opacity-80"
              style={borstOutlineBtn}
            >
              Give us a call
              <BorstArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
