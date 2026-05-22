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
    <section className="overflow-visible" style={{ background: "var(--tpl-bg)" }}>
      <div className={`${BORST_CONTAINER} ${BORST_SECTION_PY}`}>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
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
          <Link
            href={theme.primaryCta.href}
            className="inline-flex shrink-0 items-center gap-2 px-6 py-3 text-sm transition hover:opacity-90"
            style={borstPrimaryBtn}
          >
            Get in touch
            <BorstArrow />
          </Link>
        </div>
        <ul className="mt-12 grid grid-cols-2 items-start gap-4 lg:grid-cols-3 lg:gap-5">
          {portfolio.map((p) => (
            <li key={p.title} className="min-h-0 min-w-0">
              <figure
                className="group relative m-0 w-full overflow-hidden"
                style={{ borderRadius: 20, aspectRatio: "6 / 5" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
