import Link from "next/link";
import { theme } from "../theme";
import { pricingPlans } from "../content";
import { extendedPalette } from "../theme";

export function PricingBlock() {
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--tpl-bg)" }}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <h2
            className="text-4xl leading-tight md:text-5xl lg:text-6xl"
            style={{
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              letterSpacing: theme.type.displayTracking,
              color: "var(--tpl-ink)",
            }}
          >
            Flexible plans for every yogi
          </h2>
          <p className="mt-5 text-base leading-relaxed md:text-lg" style={{ color: "var(--tpl-muted)" }}>
            Find the perfect plan for your lifestyle!
          </p>
        </div>
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <li
              key={plan.name}
              className="flex flex-col p-7 md:p-8"
              style={{
                background: plan.featured ? extendedPalette.lime : "var(--tpl-card)",
                borderRadius: "var(--tpl-radius)",
                border: plan.featured ? "none" : "1px solid var(--tpl-line)",
              }}
            >
              <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: "var(--tpl-muted)" }}>
                {plan.name}
              </p>
              <div className="mt-4 flex items-baseline gap-2">
                <span
                  className="text-4xl font-bold md:text-5xl"
                  style={{ color: "var(--tpl-ink)", letterSpacing: "-0.03em" }}
                >
                  {plan.price}
                </span>
                {plan.unit && (
                  <span className="text-sm font-medium" style={{ color: "var(--tpl-muted)" }}>
                    {plan.unit}
                  </span>
                )}
              </div>
              <p className="mt-5 flex-1 text-sm leading-relaxed" style={{ color: "var(--tpl-muted)" }}>
                {plan.description}
              </p>
              <Link
                href={plan.href}
                className="mt-8 inline-flex items-center justify-center px-5 py-3 text-sm font-semibold transition hover:opacity-90"
                style={{
                  background: plan.featured ? "var(--tpl-ink)" : "var(--tpl-accent)",
                  color: plan.featured ? "#FFFFFF" : "var(--tpl-accent-ink)",
                  border: plan.featured ? "none" : "1px solid rgba(19,19,19,0.12)",
                  borderRadius: 999,
                }}
              >
                {plan.cta}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
