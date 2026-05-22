import Link from "next/link";
import { theme } from "../theme";
import { content, pillars } from "../content";
import {
  BORST_CONTAINER,
  BORST_SECTION_PY,
  BorstArrow,
  BorstEyebrow,
  borstPrimaryBtn,
} from "../borst-ui";
import { IMAGE_GEOMETRY } from "../image-geometry";

export function WhyUsBlock() {
  return (
    <section className="relative z-0" style={{ background: "var(--tpl-bg)" }}>
      <div className={`${BORST_CONTAINER} ${BORST_SECTION_PY}`}>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <div
              className="relative overflow-hidden"
              style={{ borderRadius: IMAGE_GEOMETRY.mediaRadius, aspectRatio: IMAGE_GEOMETRY.whyUsAspect }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/templates/borst-landscape-design/why-us.jpg"
                alt="Landscape specialist reviewing garden installation"
                className="block h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-5">
            <BorstEyebrow>{content.about.eyebrow}</BorstEyebrow>
            <h2
              className="mt-4 text-5xl leading-[1.03]"
              style={{
                color: "var(--tpl-ink)",
                fontFamily: "var(--tpl-font-display)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              {content.about.headline}
            </h2>
            {content.about.body.map((p, i) => (
              <p
                key={i}
                className="mt-4 text-base leading-relaxed"
                style={{ color: "var(--tpl-muted)", fontFamily: "var(--tpl-font-body)" }}
              >
                {p}
              </p>
            ))}
            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {pillars.map((p) => (
                <li key={p.title}>
                  <div
                    className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ background: "var(--tpl-accent-soft)" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.icon} alt="" className="h-6 w-6" />
                  </div>
                  <h3
                    className="mt-3 text-lg"
                    style={{
                      color: "var(--tpl-ink)",
                      fontFamily: "var(--tpl-font-display)",
                      fontWeight: 700,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="mt-1.5 text-sm leading-relaxed"
                    style={{ color: "var(--tpl-muted)", fontFamily: "var(--tpl-font-body)" }}
                  >
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>
            <Link
              href={theme.primaryCta.href}
              className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm transition hover:opacity-90"
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
