import Link from "next/link";
import { theme } from "../theme";
import { process } from "../content";
import {
  BORST_CONTAINER,
  BORST_SECTION_PY,
  BorstArrow,
  BorstEyebrow,
  borstPrimaryBtn,
} from "../borst-ui";
import { IMAGE_GEOMETRY } from "../image-geometry";

export function ProcessBlock() {
  return (
    <section style={{ background: "var(--tpl-card)" }}>
      <div className={`${BORST_CONTAINER} ${BORST_SECTION_PY}`}>
        <BorstEyebrow>Our process</BorstEyebrow>
        <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2
            className="max-w-2xl text-4xl leading-tight md:text-5xl"
            style={{
              color: "var(--tpl-ink)",
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              letterSpacing: theme.type.displayTracking,
            }}
          >
            Our process is simple and effective.
          </h2>
          <Link
            href={theme.primaryCta.href}
            className="inline-flex shrink-0 items-center gap-2 px-6 py-3 text-sm transition hover:opacity-90"
            style={borstPrimaryBtn}
          >
            Get in touch
            <BorstArrow />
          </Link>
        </div>

        <div className="mt-12">
          <div
            className="relative overflow-hidden"
            style={{
              borderRadius: IMAGE_GEOMETRY.heroRadius,
              aspectRatio: IMAGE_GEOMETRY.processAspect,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/templates/borst-landscape-design/gallery-03.jpg"
              alt="Landscape design consultation"
              className="block h-full w-full object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(5,31,25,0.12) 0%, rgba(5,31,25,0.06) 45%, rgba(5,31,25,0.42) 100%)",
              }}
              aria-hidden="true"
            />

            <ol
              className="absolute right-4 top-4 bottom-4 w-full max-w-[420px] space-y-1 overflow-hidden p-6 md:right-6 md:top-6 md:bottom-6 md:p-7"
              style={{
                borderRadius: IMAGE_GEOMETRY.mediaRadius,
                background: "rgba(255,255,255,0.58)",
                backdropFilter: "blur(2px)",
              }}
            >
              {process.map((s) => (
                <li
                  key={s.title}
                  className="border-b pb-5 pt-4 first:pt-0 last:border-b-0 last:pb-0"
                  style={{ borderColor: "rgba(5,31,25,0.18)" }}
                >
                  <p
                    className="text-xs"
                    style={{
                      color: "var(--tpl-accent)",
                      letterSpacing: "0.18em",
                      fontFamily: "var(--tpl-font-body)",
                      fontWeight: 700,
                    }}
                  >
                    {s.label}
                  </p>
                  <h3
                    className="mt-2 text-[2rem] leading-tight"
                    style={{
                      color: "var(--tpl-ink)",
                      fontFamily: "var(--tpl-font-display)",
                      fontWeight: 700,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="mt-2 text-base leading-relaxed"
                    style={{ color: "rgba(5,31,25,0.8)", fontFamily: "var(--tpl-font-body)" }}
                  >
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
