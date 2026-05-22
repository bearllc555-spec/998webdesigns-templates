"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { theme } from "../theme";
import { content } from "../content";

export function TestimonialsBlock() {
  const [index, setIndex] = useState(0);
  const items = content.testimonials;
  const prev = () => setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === items.length - 1 ? 0 : i + 1));

  return (
    <section className="py-20 md:py-28" style={{ background: "var(--tpl-card)" }}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <h2
            className="text-4xl leading-tight md:text-5xl"
            style={{
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              letterSpacing: theme.type.displayTracking,
              color: "var(--tpl-ink)",
            }}
          >
            What our members are saying
          </h2>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "var(--tpl-muted)" }}>
            Their stories reflect the growth, healing, and joy that comes from consistent practice in our studio.
          </p>
        </div>
        <div
          className="relative mt-14 p-8 md:p-12"
          style={{
            background: "var(--tpl-bg)",
            borderRadius: "var(--tpl-radius)",
            border: "1px solid var(--tpl-line)",
          }}
        >
          <blockquote>
            <p
              className="text-xl leading-relaxed md:text-2xl lg:text-3xl"
              style={{
                color: "var(--tpl-ink)",
                fontFamily: "var(--tpl-font-display)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
              }}
            >
              &ldquo;{items[index].quote}&rdquo;
            </p>
            <footer className="mt-8 flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/templates/yogacentric-studio/avatar.jpg"
                alt=""
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--tpl-ink)" }}>
                  {items[index].name}
                </p>
                <p className="text-sm" style={{ color: "var(--tpl-muted)" }}>
                  {items[index].role}
                </p>
              </div>
            </footer>
          </blockquote>
          <div className="mt-8 flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="inline-flex h-10 w-10 items-center justify-center transition hover:opacity-70"
              style={{
                background: "var(--tpl-card)",
                border: "1px solid var(--tpl-line)",
                borderRadius: 999,
                color: "var(--tpl-ink)",
              }}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="inline-flex h-10 w-10 items-center justify-center transition hover:opacity-70"
              style={{
                background: "var(--tpl-accent)",
                border: "1px solid rgba(19,19,19,0.12)",
                borderRadius: 999,
                color: "var(--tpl-accent-ink)",
              }}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="ml-4 flex gap-2">
              {items.map((_, i) => (
                <span
                  key={i}
                  className="h-1.5 rounded-full transition-all"
                  style={{
                    width: i === index ? 24 : 6,
                    background: i === index ? "var(--tpl-ink)" : "var(--tpl-line)",
                  }}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
