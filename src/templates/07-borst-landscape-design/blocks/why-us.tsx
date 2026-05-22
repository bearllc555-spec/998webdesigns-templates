import Link from "next/link";
import { theme, extendedPalette } from "../theme";
import { content, pillars } from "../content";
import {
  BORST_CONTAINER,
  BORST_SECTION_PY,
  BorstArrow,
  BorstEyebrow,
  borstPrimaryBtn,
} from "../borst-ui";

export function WhyUsBlock() {
  return (
    <section className="relative z-0" style={{ background: extendedPalette.pinkSoft }}>
      <div className={`${BORST_CONTAINER} ${BORST_SECTION_PY}`}>
        <div className="mx-auto max-w-3xl lg:max-w-none">
          <BorstEyebrow>{content.about.eyebrow}</BorstEyebrow>
          <h2
            className="mt-4 text-4xl leading-[1.05] md:text-5xl"
            style={{
              color: "var(--tpl-ink)",
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              letterSpacing: theme.type.displayTracking,
            }}
          >
            {content.about.headline}
          </h2>
          {content.about.body.map((p, i) => (
            <p
              key={i}
              className="mt-5 max-w-2xl text-base leading-relaxed"
              style={{ color: "var(--tpl-muted)", fontFamily: "var(--tpl-font-body)" }}
            >
              {p}
            </p>
          ))}
          <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:max-w-4xl">
            {pillars.map((p) => (
              <li key={p.title}>
                <div
                  className="inline-flex h-14 w-14 items-center justify-center"
                  style={{ background: "var(--tpl-accent-soft)", borderRadius: 16 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.icon} alt="" className="h-7 w-7" />
                </div>
                <h3
                  className="mt-4 text-lg"
                  style={{
                    color: "var(--tpl-ink)",
                    fontFamily: "var(--tpl-font-display)",
                    fontWeight: 700,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: "var(--tpl-muted)", fontFamily: "var(--tpl-font-body)" }}
                >
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
          <Link
            href={theme.primaryCta.href}
            className="mt-10 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm transition hover:opacity-90"
            style={borstPrimaryBtn}
          >
            Get in touch
            <BorstArrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
