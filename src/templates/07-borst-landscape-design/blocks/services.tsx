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
    <section style={{ background: "var(--tpl-bg)" }}>
      <div className={`${BORST_CONTAINER} ${BORST_SECTION_PY}`}>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
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
          <div className="flex shrink-0 flex-wrap items-center gap-4">
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

        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {content.services.items.map((it, i) => {
            const asset = serviceAssets[i];
            return (
              <li
                key={it.name}
                className="group overflow-hidden"
                style={{
                  background: "var(--tpl-card)",
                  borderRadius: 20,
                }}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset.thumb}
                    alt={it.name}
                    className="block h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <h3
                    className="text-lg leading-snug"
                    style={{
                      color: "var(--tpl-ink)",
                      fontFamily: "var(--tpl-font-display)",
                      fontWeight: 700,
                    }}
                  >
                    {it.name}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "var(--tpl-muted)", fontFamily: "var(--tpl-font-body)" }}
                  >
                    {it.summary}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
