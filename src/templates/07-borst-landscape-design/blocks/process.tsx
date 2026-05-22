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

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div
            className="relative overflow-hidden"
            style={{ borderRadius: 24, aspectRatio: "4 / 5" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/templates/borst-landscape-design/gallery-03.jpg"
              alt="Landscape design consultation"
              className="block h-full w-full object-cover"
            />
          </div>
          <ol className="space-y-0">
            {process.map((s) => (
              <li
                key={s.title}
                className="border-b py-8 first:pt-0 last:border-b-0 last:pb-0"
                style={{ borderColor: "var(--tpl-line)" }}
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
                  className="mt-2 text-xl leading-snug md:text-2xl"
                  style={{
                    color: "var(--tpl-ink)",
                    fontFamily: "var(--tpl-font-display)",
                    fontWeight: 700,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "var(--tpl-muted)", fontFamily: "var(--tpl-font-body)" }}
                >
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
