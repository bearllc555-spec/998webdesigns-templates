"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { theme } from "../theme";
import { faqs } from "../content";

export function FaqBlock() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28" style={{ background: "var(--tpl-bg)" }}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2
              className="text-4xl leading-tight md:text-5xl"
              style={{
                fontFamily: "var(--tpl-font-display)",
                fontWeight: theme.type.displayWeight,
                letterSpacing: theme.type.displayTracking,
                color: "var(--tpl-ink)",
              }}
            >
              Frequently asked questions
            </h2>
            <p className="mt-5 text-base" style={{ color: "var(--tpl-muted)" }}>
              Got questions? We&apos;ve got answers!
            </p>
          </div>
          <ul className="lg:col-span-8">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <li
                  key={item.q}
                  className="border-b"
                  style={{ borderColor: "var(--tpl-line)" }}
                >
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 py-6 text-left"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold md:text-lg" style={{ color: "var(--tpl-ink)" }}>
                      {item.q}
                    </span>
                    <span
                      className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center"
                      style={{
                        background: isOpen ? "var(--tpl-ink)" : "var(--tpl-card)",
                        borderRadius: 999,
                        color: isOpen ? "#FFFFFF" : "var(--tpl-ink)",
                      }}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="pb-6 text-sm leading-relaxed md:text-base" style={{ color: "var(--tpl-muted)" }}>
                      {item.a}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
