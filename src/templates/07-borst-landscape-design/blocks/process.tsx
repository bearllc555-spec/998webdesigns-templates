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
    <section style={{ background: "var(--tpl-bg)" }}>
      <div className={`${BORST_CONTAINER} ${BORST_SECTION_PY}`}>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div
            className="relative overflow-hidden"
            style={{ borderRadius: 24, aspectRatio: "4 / 5" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/templates/borst-landscape-design/why-us.jpg"
              alt="Landscape design consultation"
              className="block h-full w-full object-cover"
            />
          </div>
          <div>
            <BorstEyebrow>Our process</BorstEyebrow>
            <h2
              className="mt-4 text-4xl leading-tight md:text-5xl"
              style={{
                color: "var(--tpl-ink)",
                fontFamily: "var(--tpl-font-display)",
                fontWeight: theme.type.displayWeight,
                letterSpacing: theme.type.displayTracking,
              }}
            >
              Our process is simple and effective.
            </h2>
            <ol className="mt-10 space-y-8">
              {process.map((s) => (
                <li key={s.title} className="border-b pb-8 last:border-b-0 last:pb-0" style={{ borderColor: "var(--tpl-line)" }}>
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
                    className="mt-2 text-xl leading-snug"
                    style={{
                      color: "var(--tpl-ink)",
                      fontFamily: "var(--tpl-font-display)",
                      fontWeight: 700,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "var(--tpl-muted)", fontFamily: "var(--tpl-font-body)" }}
                  >
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
            <Link
              href={theme.primaryCta.href}
              className="mt-10 inline-flex items-center gap-2 px-6 py-3 text-sm transition hover:opacity-90"
              style={borstPrimaryBtn}
            >
              Get in touch
              <BorstArrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
