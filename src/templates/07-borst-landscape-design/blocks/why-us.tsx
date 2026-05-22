import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { theme } from "../theme";
import { content, pillars } from "../content";

export function WhyUsBlock() {
  return (
    <section style={{ background: "var(--tpl-bg)" }}>
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-6">
            <div
              className="relative overflow-hidden"
              style={{ borderRadius: 24, aspectRatio: "5 / 6" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/templates/borst-landscape-design/why-us.jpg"
                alt="Reliable and meticulous landscape work"
                className="block h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6 md:pl-4">
            <p
              className="text-xs"
              style={{
                color: "var(--tpl-accent)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontFamily: "var(--tpl-font-body)",
                fontWeight: 600,
              }}
            >
              {content.about.eyebrow}
            </p>
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
                className="mt-5 text-base leading-relaxed"
                style={{ color: "var(--tpl-muted)", fontFamily: "var(--tpl-font-body)" }}
              >
                {p}
              </p>
            ))}
            <ul className="mt-9 grid gap-6 sm:grid-cols-2">
              {pillars.map((p) => (
                <li key={p.title}>
                  <div
                    className="inline-flex h-12 w-12 items-center justify-center"
                    style={{ background: "var(--tpl-accent-soft)", borderRadius: 16 }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.icon} alt="" className="h-6 w-6" />
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
              className="mt-9 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm transition hover:opacity-90"
              style={{
                background: "var(--tpl-accent)",
                color: "var(--tpl-accent-ink)",
                borderRadius: 999,
                fontFamily: "var(--tpl-font-body)",
                fontWeight: 600,
              }}
            >
              Get in touch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
