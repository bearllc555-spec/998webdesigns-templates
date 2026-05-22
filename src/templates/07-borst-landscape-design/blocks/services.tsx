import Link from "next/link";
import { theme } from "../theme";
import { content, serviceAssets } from "../content";
import {
  BORST_CONTAINER,
  BORST_SECTION_PY,
  BorstArrow,
  BorstEyebrow,
  borstOutlineBtn,
  borstPrimaryBtn,
} from "../borst-ui";

export function ServicesBlock() {
  return (
    <section style={{ background: "var(--tpl-card)" }}>
      <div className={`${BORST_CONTAINER} ${BORST_SECTION_PY}`}>
        <div className="max-w-3xl">
          <BorstEyebrow>{content.services.sectionLabel}</BorstEyebrow>
          <h2
            className="mt-4 text-4xl leading-tight md:text-5xl"
            style={{
              color: "var(--tpl-ink)",
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              letterSpacing: theme.type.displayTracking,
            }}
          >
            {content.services.sectionHeadline}
          </h2>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.services.items.map((it, i) => {
            const asset = serviceAssets[i];
            return (
              <li
                key={it.name}
                className="group overflow-hidden transition"
                style={{ borderRadius: 20 }}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "16 / 11" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset.thumb}
                    alt={it.name}
                    className="block h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 p-5"
                    style={{
                      background: "linear-gradient(180deg, transparent 0%, rgba(5,31,25,0.75) 100%)",
                    }}
                  >
                    <h3
                      className="text-lg leading-snug text-white"
                      style={{
                        fontFamily: "var(--tpl-font-display)",
                        fontWeight: 700,
                      }}
                    >
                      {it.name}
                    </h3>
                  </div>
                </div>
                <div className="pt-4">
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--tpl-muted)", fontFamily: "var(--tpl-font-body)" }}
                  >
                    {it.summary}
                  </p>
                  <Link
                    href="/templates/borst-landscape-design/services"
                    className="mt-4 inline-flex items-center gap-2 text-sm transition hover:opacity-80"
                    style={{ color: "var(--tpl-accent)", fontWeight: 600 }}
                  >
                    Learn more
                    <BorstArrow className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={theme.primaryCta.href}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm transition hover:opacity-90"
            style={borstPrimaryBtn}
          >
            Get in touch
            <BorstArrow />
          </Link>
          <Link
            href="/templates/borst-landscape-design/services"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm transition hover:opacity-80"
            style={borstOutlineBtn}
          >
            Browse all services
            <BorstArrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
