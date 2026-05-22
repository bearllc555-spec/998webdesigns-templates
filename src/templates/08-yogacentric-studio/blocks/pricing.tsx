"use client";

import { useState } from "react";
import { theme } from "../theme";
import { pricingPlans } from "../content";
import { YcBtn } from "./yc-btn";

const SAGE = "#C8D8C8";
const DEFAULT_INDEX = 1; // center card

export function PricingBlock() {
  const [selected, setSelected] = useState(DEFAULT_INDEX);

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
          {pricingPlans.map((plan, i) => {
            const isSelected = i === selected;
            return (
              <li
                key={plan.name}
                onClick={() => setSelected(i)}
                className="flex flex-col p-7 md:p-8"
                style={{
                  background: isSelected ? SAGE : "var(--tpl-card)",
                  borderRadius: "var(--tpl-radius)",
                  border: isSelected ? "none" : "1px solid var(--tpl-line)",
                  cursor: "pointer",
                  transition: "background 0.25s, border 0.25s",
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
                <YcBtn
                  href={plan.href}
                  className="mt-8 w-full"
                  darkHover
                  onClick={(e) => e.stopPropagation()}
                >
                  {plan.cta}
                </YcBtn>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
