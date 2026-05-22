import Link from "next/link";
import { theme } from "../theme";
import { portfolio } from "../content";
import {
  BORST_CONTAINER,
  BORST_SECTION_PY,
  BorstArrow,
  BorstEyebrow,
  borstPrimaryBtn,
} from "../borst-ui";

export function PortfolioBlock() {
  return (
    <section style={{ background: "var(--tpl-bg)" }}>
      <div className={`${BORST_CONTAINER} ${BORST_SECTION_PY}`}>
        <div className="max-w-3xl">
          <BorstEyebrow>Portfolio</BorstEyebrow>
          <h2
            className="mt-4 text-4xl leading-tight md:text-5xl"
            style={{
              color: "var(--tpl-ink)",
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              letterSpacing: theme.type.displayTracking,
            }}
          >
            Our past projects of landscaping work.
          </h2>
        </div>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {portfolio.map((p) => (
            <li key={p.title} className="group overflow-hidden" style={{ borderRadius: 20 }}>
              <div className="relative overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.title}
                  className="block h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex justify-center">
          <Link
            href={theme.primaryCta.href}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm transition hover:opacity-90"
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
