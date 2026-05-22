import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { theme } from "../theme";
import { process } from "../content";
import { extendedPalette } from "../theme";

export function ProcessBlock() {
  return (
    <section className="relative" style={{ background: extendedPalette.darkSection }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/templates/borst-landscape-design/process-bg.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(17,51,43,0.85) 0%, rgba(17,51,43,0.95) 100%)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <p
              className="text-xs"
              style={{
                color: "var(--tpl-accent-soft)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontFamily: "var(--tpl-font-body)",
                fontWeight: 600,
              }}
            >
              How it works
            </p>
            <h2
              className="mt-4 text-4xl leading-tight md:text-5xl"
              style={{
                color: "#FFFFFF",
                fontFamily: "var(--tpl-font-display)",
                fontWeight: theme.type.displayWeight,
                letterSpacing: theme.type.displayTracking,
              }}
            >
              Our process is simple and effective.
            </h2>
          </div>
        </div>
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {process.map((s) => (
            <li
              key={s.title}
              className="p-7"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.16)",
                borderRadius: 20,
                backdropFilter: "blur(8px)",
              }}
            >
              <p
                className="text-xs"
                style={{
                  color: "var(--tpl-accent-soft)",
                  letterSpacing: "0.18em",
                  fontFamily: "var(--tpl-font-body)",
                  fontWeight: 700,
                }}
              >
                {s.label}
              </p>
              <h3
                className="mt-3 text-xl leading-snug"
                style={{
                  color: "#FFFFFF",
                  fontFamily: "var(--tpl-font-display)",
                  fontWeight: 700,
                }}
              >
                {s.title}
              </h3>
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                {s.body}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-12 flex justify-center">
          <Link
            href={theme.primaryCta.href}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm transition hover:opacity-90"
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
    </section>
  );
}
