import { ArrowRight } from "lucide-react";
import { theme } from "../theme";
import { content, benefits } from "../content";
import { extendedPalette } from "../theme";
import { YcBtn } from "./yc-btn";

export function BenefitsBlock() {
  return (
    <section className="py-20 md:py-28" style={{ background: extendedPalette.sectionAlt }}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              className="text-4xl leading-tight md:text-5xl"
              style={{
                fontFamily: "var(--tpl-font-display)",
                fontWeight: theme.type.displayWeight,
                letterSpacing: theme.type.displayTracking,
                color: "var(--tpl-ink)",
              }}
            >
              {content.ctaBanner.headline}
            </h2>
            {content.ctaBanner.sub && (
              <p className="mt-5 text-base leading-relaxed md:text-lg" style={{ color: "var(--tpl-muted)" }}>
                {content.ctaBanner.sub}
              </p>
            )}
            <ul className="mt-10 space-y-8">
              {benefits.map((b) => (
                <li key={b.title} className="border-t pt-8 first:border-t-0 first:pt-0" style={{ borderColor: "var(--tpl-line)" }}>
                  <h3 className="text-lg font-semibold" style={{ color: "var(--tpl-ink)" }}>
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed md:text-base" style={{ color: "var(--tpl-muted)" }}>
                    {b.body}
                  </p>
                </li>
              ))}
            </ul>
            <YcBtn href={content.ctaBanner.cta.href} className="mt-10">
              {content.ctaBanner.cta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </YcBtn>
          </div>
          <div className="overflow-hidden lg:order-first" style={{ borderRadius: "var(--tpl-radius)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/mockups/yogacentric-studio/benefits.jpg"
              alt="Yoga practice benefits"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
