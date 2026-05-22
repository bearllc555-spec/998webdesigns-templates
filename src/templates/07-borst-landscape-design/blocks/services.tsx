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
import { IMAGE_GEOMETRY } from "../image-geometry";

export function ServicesBlock() {
  const featuredServices = content.services.items.slice(0, 3);

  return (
    <section style={{ background: "#062E26" }}>
      <div className={`${BORST_CONTAINER} ${BORST_SECTION_PY}`}>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <BorstEyebrow>
              <span style={{ color: "rgba(255,255,255,0.75)" }}>{content.services.sectionLabel}</span>
            </BorstEyebrow>
            <h2
              className="mt-4 text-4xl leading-tight md:text-5xl"
              style={{
                color: "#FFFFFF",
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
              style={{
                ...borstOutlineBtn,
                background: "transparent",
                color: "#FFFFFF",
                borderColor: "rgba(255,255,255,0.45)",
              }}
            >
              Browse all services
              <BorstArrow />
            </Link>
          </div>
        </div>

        <ul className="mt-12 grid gap-5 lg:grid-cols-3 lg:gap-6">
          {featuredServices.map((it, i) => {
            const asset = serviceAssets[i];
            return (
              <li key={it.name} className="group">
                <div
                  className="relative overflow-hidden"
                  style={{
                    borderRadius: IMAGE_GEOMETRY.mediaRadius,
                    aspectRatio: IMAGE_GEOMETRY.servicesAspect,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset.thumb}
                    alt={it.name}
                    className="block h-full w-full bg-[#0a3a31] object-contain object-center transition duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-full"
                    style={{ background: "rgba(255,255,255,0.9)" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={asset.icon} alt="" className="h-5 w-5" />
                  </div>
                </div>
                <h3
                  className="mt-4 text-4xl leading-[1.08]"
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "var(--tpl-font-display)",
                    fontWeight: 700,
                    letterSpacing: "-0.015em",
                  }}
                >
                  {it.name}
                </h3>
                <p
                  className="mt-2 text-base leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.82)", fontFamily: "var(--tpl-font-body)" }}
                >
                  {it.summary}
                </p>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex items-center justify-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/40" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
